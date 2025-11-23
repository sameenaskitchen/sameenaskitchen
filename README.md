# 🍛 Sameena's Kitchen - North Indian Recipe Website

A beautiful, minimalistic website showcasing authentic North Indian daily recipes. Built for food creators and home cooks who want to share their culinary journey.

## ✨ Features

- **Minimalistic Design**: Clean, food-themed interface with warm colors
- **Recipe Collection**: 6 starter North Indian recipes with detailed instructions
- **Search & Filter**: Easy recipe discovery by category (breakfast, lunch, dinner)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Instagram Integration**: Links to Instagram Reels for video content
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🚀 Quick Start

### View Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/cookingrecipewebsite.git
   cd cookingrecipewebsite
   ```

2. Open with a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Or using Python 2
   python -m SimpleHTTPServer 8000
   
   # Or using Node.js
   npx http-server
   ```

3. Open your browser and visit `http://localhost:8000`

### Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to your repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The site will automatically deploy when you push to the `main` branch
5. Your site will be available at `https://YOUR-USERNAME.github.io/cookingrecipewebsite/`

## 📝 Adding New Recipes

To add a new recipe, edit the `js/recipes.js` file:

1. Open `js/recipes.js`
2. Add a new recipe object to the `recipes` array:

```javascript
{
  id: 7, // Increment the ID
  name: "Your Recipe Name",
  description: "Brief description of your recipe",
  category: "breakfast", // or "lunch", "dinner", "snacks"
  difficulty: "easy", // or "medium", "hard"
  prepTime: "15 mins",
  cookTime: "20 mins",
  servings: 4,
  image: "images/your-recipe.jpg", // Add your image to the images folder
  instagramReel: "https://www.instagram.com/reel/YOUR-REEL-ID/", // Optional
  ingredients: [
    "Ingredient 1 with quantity",
    "Ingredient 2 with quantity",
    // ... more ingredients
  ],
  instructions: [
    "Step 1 instruction",
    "Step 2 instruction",
    // ... more steps
  ]
}
```

3. Add your recipe image to the `images/` folder
4. Save and refresh your browser!

## 📁 Project Structure

```
cookingrecipewebsite/
├── index.html              # Homepage
├── recipes.html            # Recipe listing page
├── recipe-detail.html      # Individual recipe page
├── about.html              # About page
├── styles/
│   └── main.css           # All styles and design system
├── js/
│   ├── recipes.js         # Recipe data and functions
│   └── main.js            # Main JavaScript functionality
├── images/                # Recipe images
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
└── README.md              # This file
```

## 🎨 Customization

### Colors

Edit the CSS variables in `styles/main.css` to change the color scheme:

```css
:root {
  --color-primary: #E67E22;        /* Main orange color */
  --color-secondary: #C0392B;      /* Red accent */
  --color-accent: #27AE60;         /* Green accent */
  /* ... more colors */
}
```

### Fonts

The website uses Google Fonts (Playfair Display for headings, Inter for body text). Change them in `styles/main.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap');
```

### Instagram Links

Update Instagram links in all HTML files by replacing:
```html
<a href="https://www.instagram.com/" target="_blank">
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **Vanilla JavaScript**: No frameworks, pure JS
- **GitHub Pages**: Free hosting
- **GitHub Actions**: Automated deployment

## 📱 Social Media Integration

This website is designed to complement your Instagram Reels:
- Quick recipe videos on Instagram
- Detailed instructions and ingredients on the website
- Easy sharing between platforms

## 📄 License

This project is open source and available for personal and commercial use.

## 💖 Credits

Created with love by Sameena for food lovers everywhere.

---

**Happy Cooking! 🍛**
