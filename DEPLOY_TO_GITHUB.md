# 🚀 Deploy Your Website to GitHub Pages (Simple Guide)

**Your website will be live on the internet for FREE!** No technical knowledge needed - just follow these steps carefully. ✨

---

## 📋 What You'll Need

1. A GitHub account (free) - we'll create one if you don't have it
2. Your website files (you already have these!)
3. About 15 minutes

---

## 🎯 Step-by-Step Instructions

### Step 1: Create a GitHub Account (Skip if you have one)

1. Go to **https://github.com**
2. Click **"Sign up"** (top right corner)
3. Enter your email address
4. Create a password
5. Choose a username (this will be in your website URL!)
6. Verify you're human (solve the puzzle)
7. Click **"Create account"**
8. Check your email and verify your account

---

### Step 2: Install GitHub Desktop (Easiest Way)

1. Go to **https://desktop.github.com**
2. Click **"Download for macOS"**
3. Open the downloaded file
4. Drag GitHub Desktop to your Applications folder
5. Open GitHub Desktop
6. Click **"Sign in to GitHub.com"**
7. Enter your GitHub username and password
8. Click **"Authorize desktop"**

---

### Step 3: Create a New Repository

1. In GitHub Desktop, click **"File"** → **"New Repository"**

2. Fill in these details:
   - **Name:** `cookingrecipewebsite` (or any name you like)
   - **Description:** `My North Indian Recipe Website`
   - **Local Path:** Click "Choose..." and select `/Users/nazar/`
   - ⚠️ **IMPORTANT:** Uncheck "Initialize this repository with a README"

3. Click **"Create Repository"**

4. You'll see a message saying "No local changes". That's okay!

---

### Step 4: Add Your Website Files

1. In GitHub Desktop, click **"Repository"** → **"Show in Finder"**

2. You'll see an empty folder. **Close this window.**

3. Now we need to move your website files:
   - Open Finder
   - Go to `/Users/nazar/cookingrecipewebsite/`
   - Select **ALL files** (Cmd + A)
   - **Copy them** (Cmd + C)
   - Go back to the repository folder GitHub Desktop showed you
   - **Paste** (Cmd + V)

4. Go back to **GitHub Desktop**
   - You should now see all your files listed!

---

### Step 5: Publish to GitHub

1. In GitHub Desktop, you'll see all your files in the left panel

2. At the bottom left, you'll see:
   - **Summary:** Type `Initial commit: My recipe website`
   - **Description:** (leave empty)

3. Click the blue **"Commit to main"** button

4. Click **"Publish repository"** (top right)

5. A window will pop up:
   - ✅ Make sure **"Keep this code private"** is **UNCHECKED** (must be public for free hosting)
   - Click **"Publish Repository"**

6. Wait for it to upload (may take 1-2 minutes)

---

### Step 6: Enable GitHub Pages

1. Go to **https://github.com**

2. Sign in if you're not already

3. Click on your profile picture (top right) → **"Your repositories"**

4. Click on **"cookingrecipewebsite"** (or whatever you named it)

5. Click **"Settings"** (top menu, looks like a gear icon)

6. Scroll down the left sidebar and click **"Pages"**

7. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"** from the dropdown
   - (NOT "Deploy from a branch")

8. You'll see a message about workflows. That's perfect!

9. Wait 2-3 minutes for the site to build

---

### Step 7: Find Your Website URL

1. Stay on the Pages settings page

2. After 2-3 minutes, refresh the page

3. You'll see a green box at the top that says:
   **"Your site is live at https://YOUR-USERNAME.github.io/cookingrecipewebsite/"**

4. Click that link - **YOUR WEBSITE IS LIVE!** 🎉

---

## 🎊 Success! Your Website is Online!

Your website URL will be:
```
https://YOUR-USERNAME.github.io/cookingrecipewebsite/
```

**Share this link with everyone!** Put it in your Instagram bio! 📱

---

## 📝 How to Update Your Website (Add New Recipes)

After you add new recipes to your local files:

### Using GitHub Desktop (Easy Way)

1. **Open GitHub Desktop**

2. Make your changes to the recipe files (add new recipes, photos, etc.)

3. GitHub Desktop will automatically detect changes

4. You'll see changed files in the left panel

5. At the bottom left:
   - **Summary:** Type what you changed (e.g., "Added Rajma Masala recipe")
   - Click **"Commit to main"**

6. Click **"Push origin"** (top right)

7. Wait 2-3 minutes - your website will automatically update!

---

## 🔄 Quick Update Steps (Summary)

Every time you want to update your website:

1. ✏️ Make changes to your files locally
2. 💾 Open GitHub Desktop
3. 📝 Write a summary of changes
4. ✅ Click "Commit to main"
5. ⬆️ Click "Push origin"
6. ⏰ Wait 2-3 minutes
7. 🎉 Your website is updated!

---

## ⚠️ Common Issues & Solutions

### Issue: "Repository already exists"

**Solution:**
- Choose a different repository name
- Or delete the existing one from GitHub.com first

### Issue: Website shows 404 error

**Solutions:**
1. Wait 5 minutes - it takes time to deploy
2. Make sure repository is **public** (not private)
3. Check that you selected **"GitHub Actions"** (not "Deploy from a branch")
4. Make sure `index.html` is in the root folder

### Issue: Changes not showing up

**Solutions:**
1. Wait 2-3 minutes after pushing
2. Clear your browser cache (Cmd + Shift + R)
3. Check GitHub Actions tab to see if deployment is complete

### Issue: Images not loading

**Solutions:**
1. Make sure all images are in the `images/` folder
2. Check that image filenames match exactly (case-sensitive)
3. Verify images were uploaded to GitHub

---

## 🎨 Customize Your URL (Optional)

Want a custom domain like `www.sameenaskitchen.com`?

1. Buy a domain from Namecheap, GoDaddy, or Google Domains (~$10-15/year)
2. In GitHub Pages settings, add your custom domain
3. Update DNS settings (each domain provider has instructions)

---

## 📱 Add to Instagram Bio

Once your site is live:

1. Copy your website URL
2. Go to Instagram → Edit Profile
3. Paste URL in the "Website" field
4. Save!

Now your followers can click straight to your recipes! 🍛

---

## ✅ Deployment Checklist

Before deploying, make sure:

- [ ] All your recipe files are ready
- [ ] All images are in the `images/` folder
- [ ] You've tested the website locally
- [ ] GitHub account is created
- [ ] Repository is PUBLIC (not private)
- [ ] GitHub Actions is selected (not "Deploy from a branch")
- [ ] You've waited 2-3 minutes after publishing

---

## 🆘 Need Help?

### Check Deployment Status

1. Go to your repository on GitHub.com
2. Click the **"Actions"** tab (top menu)
3. You'll see deployment status:
   - ✅ Green checkmark = Success!
   - 🟡 Yellow circle = In progress (wait)
   - ❌ Red X = Failed (check error message)

### Still Stuck?

1. Make sure repository is **public**
2. Verify **GitHub Actions** is selected in Pages settings
3. Check that `index.html` exists in your repository
4. Wait a full 5 minutes and try again

---

## 🎉 You Did It!

Congratulations! Your recipe website is now live on the internet! 🌐

**Next steps:**
- Share your website link on Instagram
- Add it to your Instagram bio
- Keep adding new recipes
- Share with friends and family!

**Your website will always be free on GitHub Pages!** 💚

---

## 📞 Quick Reference

**Your Website URL:**
```
https://YOUR-USERNAME.github.io/cookingrecipewebsite/
```

**To Update:**
1. Make changes locally
2. Open GitHub Desktop
3. Commit changes
4. Push to GitHub
5. Wait 2-3 minutes

**GitHub Pages Settings:**
```
GitHub.com → Your Repository → Settings → Pages
```

---

**Happy sharing! 🍛✨**
