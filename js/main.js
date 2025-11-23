// ===================================
// MAIN JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', function () {
            navbarMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = navbarToggle.querySelectorAll('span');
            if (navbarMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navbarMenu.classList.remove('active');
                const spans = navbarToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // ===================================
    // ACTIVE NAVIGATION LINK
    // ===================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ===================================
    // SMOOTH SCROLLING
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===================================
    // SCROLL TO TOP BUTTON (Optional)
    // ===================================
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===================================
    // LAZY LOADING IMAGES
    // ===================================
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ===================================
    // NAVBAR SCROLL EFFECT
    // ===================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // FORM VALIDATION (if needed)
    // ===================================
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Add your form handling logic here
            console.log('Form submitted');
        });
    });

    // ===================================
    // ANIMATION ON SCROLL (Optional)
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Format time
function formatTime(minutes) {
    if (minutes < 60) {
        return `${minutes} mins`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

// Share recipe function - Instagram focused
function shareRecipe(recipeName, recipeUrl) {
    // Detect if user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Try to open Instagram app on mobile
        // Instagram doesn't have a direct share URL, but we can use the native share dialog
        // which will show Instagram as an option on mobile devices
        if (navigator.share) {
            navigator.share({
                title: recipeName,
                text: `Check out this delicious recipe from Sameena's Kitchen: ${recipeName}\n\n`,
                url: recipeUrl
            }).catch(err => console.log('Error sharing:', err));
        } else {
            // Fallback for older mobile browsers
            copyToClipboardWithMessage(recipeUrl, 'Link copied! Now you can paste it in your Instagram story or post.');
        }
    } else {
        // Desktop: Show options modal
        showShareModal(recipeName, recipeUrl);
    }
}

// Copy to clipboard with custom message
function copyToClipboardWithMessage(text, message) {
    navigator.clipboard.writeText(text)
        .then(() => alert(message))
        .catch(err => {
            // Fallback for browsers that don't support clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                alert(message);
            } catch (err) {
                alert('Unable to copy. Please copy manually: ' + text);
            }
            document.body.removeChild(textArea);
        });
}

// Show share modal for desktop users
function showShareModal(recipeName, recipeUrl) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.2s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.3s ease;
        ">
            <h3 style="margin: 0 0 1rem 0; color: #2c3e50; font-size: 1.5rem;">Share Recipe</h3>
            <p style="margin: 0 0 1.5rem 0; color: #7f8c8d; font-size: 0.95rem;">${recipeName}</p>
            
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <button onclick="window.open('https://www.instagram.com/', '_blank')" style="
                    background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
                    color: white;
                    border: none;
                    padding: 0.875rem 1.5rem;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    📷 Open Instagram
                </button>
                
                <button onclick="copyToClipboardWithMessage('${recipeUrl}', 'Link copied! Paste it in your Instagram bio, story, or post.'); document.body.removeChild(this.closest('div').parentElement)" style="
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 0.875rem 1.5rem;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    📋 Copy Link
                </button>
                
                <button onclick="document.body.removeChild(this.closest('div').parentElement)" style="
                    background: transparent;
                    color: #7f8c8d;
                    border: 2px solid #ecf0f1;
                    padding: 0.875rem 1.5rem;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                " onmouseover="this.style.borderColor='#bdc3c7'" onmouseout="this.style.borderColor='#ecf0f1'">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    document.body.appendChild(modal);
}

// Print recipe function
function printRecipe() {
    window.print();
}
