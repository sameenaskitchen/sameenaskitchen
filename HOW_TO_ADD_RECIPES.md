# 📝 How to Add a New Recipe (Simple Guide)

**Don't worry! This is easier than it looks. Just follow these steps carefully.** ✨

---

## 🎯 What You Need

1. Your recipe details (name, ingredients, instructions)
2. A photo of your dish (saved on your computer)
3. A text editor (I recommend downloading **VS Code** - it's free and easy to use)

---

## 📋 Step-by-Step Instructions

### Step 1: Open the Recipe File

1. **Find the file:** Go to your project folder
   - Location: `/Users/nazar/cookingrecipewebsite/js/recipes.js`

2. **Open it with a text editor:**
   - Right-click on `recipes.js`
   - Choose "Open With" → "TextEdit" (or VS Code if you have it)

### Step 2: Find Where to Add Your Recipe

1. **Scroll down** in the file until you see recipes like this:
   ```javascript
   {
     id: 6,
     name: "Aloo Gobi",
     description: "Dry curry made with potatoes...",
     // ... more details
   }
   ```

2. **Find the last recipe** (currently it's Aloo Gobi with `id: 6`)

3. **Look for this closing bracket and comma:** `},`

### Step 3: Copy This Template

**Copy this entire template** and paste it right after the last recipe:

```javascript
  ,
  {
    id: 7,
    name: "YOUR RECIPE NAME HERE",
    description: "Brief description of your recipe (1-2 sentences)",
    category: "lunch",
    difficulty: "easy",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 4,
    image: "images/your-recipe-name.jpg",
    instagramReel: "",
    ingredients: [
      "First ingredient with quantity",
      "Second ingredient with quantity",
      "Third ingredient with quantity"
    ],
    instructions: [
      "First step - what to do",
      "Second step - what to do next",
      "Third step - and so on"
    ]
  }
```

### Step 4: Fill in Your Recipe Details

Now replace the template text with your actual recipe:

#### 📝 Recipe ID
- **Change:** `id: 7` 
- **To:** The next number (if last recipe is 6, use 7; if 7, use 8, etc.)

#### 📝 Recipe Name
- **Change:** `"YOUR RECIPE NAME HERE"`
- **To:** Your recipe name in quotes
- **Example:** `"Rajma Masala"`

#### 📝 Description
- **Change:** `"Brief description..."`
- **To:** A short description (1-2 sentences)
- **Example:** `"Hearty kidney bean curry in rich tomato gravy"`

#### 📝 Category
- **Change:** `category: "lunch"`
- **Choose ONE:** `"breakfast"`, `"lunch"`, `"dinner"`, or `"snacks"`
- **Example:** `category: "dinner"`

#### 📝 Difficulty
- **Change:** `difficulty: "easy"`
- **Choose ONE:** `"easy"`, `"medium"`, or `"hard"`

#### 📝 Times
- **Change:** `prepTime: "15 mins"` and `cookTime: "20 mins"`
- **To:** Your actual times
- **Example:** `prepTime: "8 hours (soaking)"`, `cookTime: "30 mins"`

#### 📝 Servings
- **Change:** `servings: 4`
- **To:** How many people it serves
- **Example:** `servings: 6`

#### 📝 Image
- **Change:** `image: "images/your-recipe-name.jpg"`
- **To:** Your image filename (we'll add this in Step 5)
- **Example:** `image: "images/rajma-masala.jpg"`

#### 📝 Instagram Reel (Optional)
- **Leave empty:** `instagramReel: ""`
- **Or add link:** `instagramReel: "https://www.instagram.com/reel/YOUR-REEL-ID/"`

#### 📝 Ingredients
Replace the example ingredients with yours:
```javascript
ingredients: [
  "2 cups basmati rice",
  "3 tablespoons ghee",
  "1 teaspoon cumin seeds",
  "Salt to taste"
]
```

**Important Rules:**
- Each ingredient in quotes `""`
- Comma `,` after each ingredient (except the last one)
- Include quantities with ingredients

#### 📝 Instructions
Replace with your cooking steps:
```javascript
instructions: [
  "Wash and soak rice for 20 minutes",
  "Heat ghee in a pan and add cumin seeds",
  "Add rice and sauté for 2 minutes",
  "Add water and salt, cook until done"
]
```

**Important Rules:**
- Each step in quotes `""`
- Comma `,` after each step (except the last one)
- Write clear, simple steps

### Step 5: Add Your Recipe Photo

1. **Prepare your photo:**
   - Rename it to match your recipe (example: `rajma-masala.jpg`)
   - Use lowercase letters
   - Replace spaces with hyphens `-`
   - Keep it as `.jpg` or `.png`

2. **Copy the photo:**
   - Go to: `/Users/nazar/cookingrecipewebsite/images/`
   - Paste your photo there

3. **Make sure the filename matches** what you wrote in Step 4 under "Image"

### Step 6: Save Your Changes

1. **Save the file:**
   - Press `Cmd + S` (Mac)
   - Or go to File → Save

2. **Close the text editor**

### Step 7: Test Your New Recipe

1. **Open your browser** and go to: http://localhost:8000

2. **Click on "Recipes"** in the navigation

3. **Look for your new recipe** - it should appear in the grid!

4. **Click on it** to see the full recipe page

---

## ✅ Quick Checklist

Before saving, make sure:

- [ ] Recipe ID is the next number (not the same as another recipe)
- [ ] Recipe name is in quotes `""`
- [ ] Category is one of: breakfast, lunch, dinner, or snacks
- [ ] Difficulty is one of: easy, medium, or hard
- [ ] Each ingredient ends with a comma `,` (except the last one)
- [ ] Each instruction ends with a comma `,` (except the last one)
- [ ] Image filename matches the photo you added to images folder
- [ ] You saved the file after editing

---

## 🎨 Complete Example

Here's a real example of adding "Rajma Masala":

```javascript
  ,
  {
    id: 7,
    name: "Rajma Masala",
    description: "Hearty kidney bean curry in rich tomato gravy, perfect with rice",
    category: "lunch",
    difficulty: "medium",
    prepTime: "8 hours (soaking)",
    cookTime: "35 mins",
    servings: 4,
    image: "images/rajma-masala.jpg",
    instagramReel: "https://www.instagram.com/reel/ABC123/",
    ingredients: [
      "1 cup kidney beans, soaked overnight",
      "2 onions, finely chopped",
      "3 tomatoes, pureed",
      "2 tsp ginger-garlic paste",
      "2 tsp rajma masala",
      "1 tsp cumin seeds",
      "1 tsp red chili powder",
      "3 tbsp oil",
      "Fresh coriander leaves",
      "Salt to taste"
    ],
    instructions: [
      "Pressure cook soaked kidney beans with salt and water for 5-6 whistles until soft",
      "Heat oil in a pan and add cumin seeds, let them splutter",
      "Add chopped onions and sauté until golden brown",
      "Add ginger-garlic paste and cook for 2 minutes",
      "Add tomato puree and cook until oil separates from the mixture",
      "Add rajma masala, red chili powder, and salt. Mix well",
      "Add cooked kidney beans with some cooking water",
      "Simmer for 15-20 minutes, mashing some beans for thick gravy",
      "Garnish with fresh coriander and serve hot with rice"
    ]
  }
```

---

## ⚠️ Common Mistakes to Avoid

### ❌ Missing Comma
**Wrong:**
```javascript
{
  id: 7
  name: "Rajma"  // Missing comma after id: 7
}
```

**Right:**
```javascript
{
  id: 7,  // ← Comma here!
  name: "Rajma"
}
```

### ❌ Missing Quotes
**Wrong:**
```javascript
name: Rajma Masala  // No quotes
```

**Right:**
```javascript
name: "Rajma Masala"  // ← Quotes around text!
```

### ❌ Comma After Last Item
**Wrong:**
```javascript
ingredients: [
  "Rice",
  "Salt",  // ← Remove this comma (it's the last item)
]
```

**Right:**
```javascript
ingredients: [
  "Rice",
  "Salt"  // ← No comma on last item
]
```

---

## 🆘 Something Went Wrong?

### Website shows blank page or error?

1. **Check for typos** in your recipe code
2. **Make sure all quotes match:** `"` at start and end
3. **Check commas:** After each item except the last
4. **Refresh the page:** Press `Cmd + Shift + R`

### Recipe not showing up?

1. **Clear browser cache:** Press `Cmd + Shift + R`
2. **Check the recipe ID** - make sure it's unique
3. **Verify the image** is in the images folder

### Image not loading?

1. **Check filename spelling** - must match exactly
2. **Check file extension** - .jpg or .png
3. **Make sure image is in** `/Users/nazar/cookingrecipewebsite/images/`

---

## 💡 Pro Tips

✨ **Copy an existing recipe** and modify it - easier than starting from scratch!

✨ **Save often** while editing - press `Cmd + S` frequently

✨ **Test immediately** after adding - catch errors early

✨ **Keep a backup** - copy the original `recipes.js` file before editing

---

## 📞 Need Help?

If you get stuck:

1. **Undo your changes:** Press `Cmd + Z` in your text editor
2. **Start over:** Copy an existing recipe and modify it carefully
3. **Check the example** above - make sure your format matches exactly

---

## 🎉 You're Ready!

Adding recipes is easy once you do it once or twice. Don't be afraid to experiment - you can always undo changes!

**Happy recipe adding! 🍛**
