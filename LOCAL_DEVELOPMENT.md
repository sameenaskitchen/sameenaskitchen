# 🛠️ Local Development Guide

This guide will help you run and test your recipe website on your local computer.

---

## 🚀 Quick Start

### Method 1: Python (Recommended)

Python comes pre-installed on macOS, so this is the easiest method.

```bash
# Navigate to your project folder
cd /Users/nazar/cookingrecipewebsite

# Start the server
python3 -m http.server 8000
```

**Access your website at:** http://localhost:8000

### Method 2: Python 2 (Alternative)

If you have Python 2 installed:

```bash
cd /Users/nazar/cookingrecipewebsite
python -m SimpleHTTPServer 8000
```

### Method 3: Node.js

If you have Node.js installed:

```bash
# Install http-server globally (one-time setup)
npm install -g http-server

# Navigate to project folder
cd /Users/nazar/cookingrecipewebsite

# Start the server
http-server -p 8000
```

### Method 4: PHP

If you have PHP installed:

```bash
cd /Users/nazar/cookingrecipewebsite
php -S localhost:8000
```

---

## 🎯 Step-by-Step Instructions

### 1. Open Terminal

- Press `Cmd + Space` to open Spotlight
- Type "Terminal" and press Enter

### 2. Navigate to Your Project

```bash
cd /Users/nazar/cookingrecipewebsite
```

### 3. Start the Server

```bash
python3 -m http.server 8000
```

You should see:
```
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

### 4. Open Your Browser

Open any web browser and go to:
- **http://localhost:8000** (main URL)
- **http://127.0.0.1:8000** (alternative)

### 5. Test Your Website

Navigate through all pages:
- Homepage: `http://localhost:8000/index.html`
- Recipes: `http://localhost:8000/recipes.html`
- About: `http://localhost:8000/about.html`
- Recipe Detail: Click on any recipe card

---

## 🛑 Stopping the Server

To stop the local server:

1. Go back to your Terminal window
2. Press `Ctrl + C`
3. The server will stop

---

## 🔧 Common Issues & Solutions

### Issue: Port 8000 is already in use

**Error message:**
```
OSError: [Errno 48] Address already in use
```

**Solution 1:** Use a different port
```bash
python3 -m http.server 8001
```
Then visit: http://localhost:8001

**Solution 2:** Stop the process using port 8000
```bash
# Find the process
lsof -ti:8000

# Kill the process (replace PID with the number from above)
kill -9 PID
```

### Issue: Images not loading

**Cause:** File paths might be incorrect

**Solution:** 
- Check that all images are in the `images/` folder
- Verify image filenames match exactly (case-sensitive)
- Check browser console for errors (press `F12` or `Cmd + Option + I`)

### Issue: JavaScript not working

**Solution:**
- Clear your browser cache (`Cmd + Shift + R` to hard refresh)
- Check browser console for errors
- Ensure you're accessing via `http://localhost:8000`, not `file://`

### Issue: Changes not showing up

**Solution:**
- Hard refresh the page: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Clear browser cache
- Make sure you saved your files after editing

---

## 📝 Making Changes

### Editing Recipes

1. Open `js/recipes.js` in any text editor
2. Make your changes
3. Save the file
4. Refresh your browser (`Cmd + R`)

### Editing Styles

1. Open `styles/main.css`
2. Make your changes
3. Save the file
4. Hard refresh your browser (`Cmd + Shift + R`)

### Editing Pages

1. Open any `.html` file
2. Make your changes
3. Save the file
4. Refresh your browser

---

## 🧪 Testing Checklist

Before deploying to GitHub Pages, test these features locally:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Featured recipes display on homepage
- [ ] Recipes page shows all recipes
- [ ] Search functionality works
- [ ] Category filters work (Breakfast, Lunch, Dinner, All)
- [ ] Recipe cards are clickable
- [ ] Recipe detail page loads with correct data
- [ ] Ingredients list displays
- [ ] Instructions show with numbers
- [ ] About page loads
- [ ] Mobile menu works (resize browser to test)
- [ ] All images load properly
- [ ] Footer links work

---

## 📱 Testing on Mobile Devices

### Option 1: Browser Developer Tools

1. Open your website in Chrome or Firefox
2. Press `F12` or `Cmd + Option + I`
3. Click the device toggle icon (phone/tablet icon)
4. Select different device sizes to test

### Option 2: Test on Your Phone

1. Make sure your phone and computer are on the same WiFi network
2. Find your computer's IP address:
   ```bash
   ifconfig | grep "inet "
   ```
   Look for something like `192.168.1.x`
3. Start the server:
   ```bash
   python3 -m http.server 8000
   ```
4. On your phone, open browser and go to:
   ```
   http://YOUR-IP-ADDRESS:8000
   ```
   Example: `http://192.168.1.5:8000`

---

## 🎨 Recommended Text Editors

For editing your website files, use any of these:

- **VS Code** (Free, recommended) - https://code.visualstudio.com/
- **Sublime Text** (Free trial)
- **Atom** (Free)
- **TextEdit** (Built-in, but enable plain text mode)

---

## 💡 Pro Tips

### Live Reload

For automatic page refresh when you make changes, install a browser extension:
- **Chrome:** "Live Server" or "LiveReload"
- **Firefox:** "Live Reload"

### Browser Console

Learn to use the browser console to debug:
1. Press `F12` or `Cmd + Option + I`
2. Click "Console" tab
3. Look for any red error messages

### File Watching

Keep your text editor and browser side-by-side:
- Edit code on the left
- See changes on the right (after refresh)

---

## 📚 Additional Resources

### Learn More About:

- **HTML:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript:** https://developer.mozilla.org/en-US/docs/Web/JavaScript

### Useful Tools:

- **Can I Use:** Check browser compatibility - https://caniuse.com/
- **Color Picker:** Choose colors - https://colorhunt.co/
- **Google Fonts:** Find fonts - https://fonts.google.com/

---

## 🆘 Need Help?

If you encounter issues:

1. **Check the browser console** for error messages
2. **Verify file paths** are correct
3. **Clear browser cache** and hard refresh
4. **Restart the local server**
5. **Check that all files are saved**

---

## ✅ Ready to Deploy?

Once you've tested everything locally and you're happy with the results:

1. Stop the local server (`Ctrl + C`)
2. Follow the deployment instructions in [README.md](README.md)
3. Push to GitHub and enable GitHub Pages
4. Your site will be live in minutes!

---

**Happy developing! 🚀**
