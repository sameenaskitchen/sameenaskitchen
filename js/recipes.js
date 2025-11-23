// ===================================
// RECIPE DATA
// ===================================

const recipes = [
  {
    id: 1,
    name: "Aloo Paratha",
    description: "Classic North Indian flatbread stuffed with spiced potato filling. Perfect for breakfast!",
    category: "breakfast",
    difficulty: "easy",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: 4,
    image: "images/aloo-paratha.jpg",
    instagramReel: "",
    ingredients: [
      "2 cups whole wheat flour",
      "3 medium potatoes, boiled and mashed",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "1 tsp red chili powder",
      "1 tsp coriander powder",
      "2 green chilies, finely chopped",
      "Fresh coriander leaves, chopped",
      "Salt to taste",
      "Ghee or butter for cooking"
    ],
    instructions: [
      "Mix wheat flour with water and a pinch of salt to make soft dough. Let it rest for 15 minutes.",
      "For filling: Mix mashed potatoes with cumin seeds, garam masala, red chili powder, coriander powder, green chilies, fresh coriander, and salt.",
      "Divide dough into equal portions. Roll each portion into a small circle.",
      "Place 2-3 tablespoons of potato filling in the center. Bring edges together and seal.",
      "Gently roll the stuffed ball into a flat circle (paratha) using flour for dusting.",
      "Heat a tawa/griddle. Cook paratha on medium heat, applying ghee on both sides until golden brown spots appear.",
      "Serve hot with yogurt, pickle, or butter."
    ]
  },
  {
    id: 2,
    name: "Dal Tadka",
    description: "Comforting yellow lentil curry tempered with aromatic spices. A staple in every North Indian home.",
    category: "lunch",
    difficulty: "easy",
    prepTime: "10 mins",
    cookTime: "25 mins",
    servings: 4,
    image: "images/dal-tadka.jpg",
    instagramReel: "",
    ingredients: [
      "1 cup yellow lentils (toor dal)",
      "1 onion, finely chopped",
      "2 tomatoes, chopped",
      "2 green chilies, slit",
      "1 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "2 tbsp ghee",
      "Fresh coriander leaves",
      "Salt to taste"
    ],
    instructions: [
      "Wash lentils thoroughly and pressure cook with 3 cups water, turmeric, and salt for 3-4 whistles.",
      "Mash the cooked dal lightly with a spoon.",
      "Heat ghee in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and green chilies. Sauté for a minute.",
      "Add chopped tomatoes and cook until soft and mushy.",
      "Add red chili powder and mix well.",
      "Pour this tempering (tadka) over the cooked dal. Mix well.",
      "Simmer for 5 minutes. Garnish with fresh coriander leaves.",
      "Serve hot with rice or roti."
    ]
  },
  {
    id: 3,
    name: "Paneer Butter Masala",
    description: "Rich and creamy tomato-based curry with soft paneer cubes. Restaurant-style favorite!",
    category: "dinner",
    difficulty: "medium",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 4,
    image: "images/paneer-butter-masala.jpg",
    instagramReel: "",
    ingredients: [
      "250g paneer, cubed",
      "4 large tomatoes, chopped",
      "1 onion, chopped",
      "2 tbsp cashews",
      "1 tbsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1/2 tsp kasuri methi (dried fenugreek)",
      "3 tbsp butter",
      "1/4 cup fresh cream",
      "1 tbsp sugar",
      "Salt to taste"
    ],
    instructions: [
      "Boil tomatoes, onion, and cashews together for 10 minutes. Let cool and blend into smooth paste.",
      "Heat butter in a pan. Add ginger-garlic paste and sauté for a minute.",
      "Add the tomato-onion paste and cook for 5-7 minutes on medium heat.",
      "Add red chili powder, garam masala, sugar, and salt. Mix well.",
      "Add 1/2 cup water and let it simmer for 5 minutes.",
      "Crush kasuri methi between your palms and add to the gravy.",
      "Add paneer cubes and mix gently.",
      "Add fresh cream and mix. Cook for 2-3 minutes.",
      "Garnish with cream and serve hot with naan or rice."
    ]
  },
  {
    id: 4,
    name: "Chole (Chickpea Curry)",
    description: "Spicy and tangy chickpea curry that pairs perfectly with bhature or rice.",
    category: "lunch",
    difficulty: "medium",
    prepTime: "8 hours (soaking)",
    cookTime: "30 mins",
    servings: 4,
    image: "images/chole.jpg",
    instagramReel: "",
    ingredients: [
      "2 cups chickpeas, soaked overnight",
      "2 onions, finely chopped",
      "3 tomatoes, pureed",
      "2 tsp ginger-garlic paste",
      "2 tsp chole masala",
      "1 tsp cumin seeds",
      "1 tsp red chili powder",
      "1/2 tsp turmeric powder",
      "1 tsp amchur (dry mango powder)",
      "2 tea bags",
      "3 tbsp oil",
      "Fresh coriander leaves",
      "Salt to taste"
    ],
    instructions: [
      "Pressure cook soaked chickpeas with tea bags, salt, and water for 5-6 whistles. Remove tea bags.",
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and sauté for 2 minutes.",
      "Add tomato puree and cook until oil separates.",
      "Add turmeric, red chili powder, chole masala, and salt. Mix well.",
      "Add cooked chickpeas with some cooking water. Mix well.",
      "Simmer for 10-15 minutes, mashing some chickpeas for thick gravy.",
      "Add amchur powder and mix.",
      "Garnish with fresh coriander and serve hot."
    ]
  },
  {
    id: 5,
    name: "Jeera Rice",
    description: "Fragrant basmati rice tempered with cumin seeds. Simple yet delicious side dish.",
    category: "dinner",
    difficulty: "easy",
    prepTime: "5 mins",
    cookTime: "15 mins",
    servings: 4,
    image: "images/jeera-rice.jpg",
    instagramReel: "",
    ingredients: [
      "2 cups basmati rice",
      "2 tsp cumin seeds",
      "1 bay leaf",
      "4-5 whole black peppercorns",
      "2 green cardamoms",
      "1 small cinnamon stick",
      "2 tbsp ghee",
      "Salt to taste",
      "Fresh coriander leaves for garnish"
    ],
    instructions: [
      "Wash basmati rice thoroughly and soak for 15-20 minutes. Drain well.",
      "Heat ghee in a heavy-bottomed pan or pressure cooker.",
      "Add cumin seeds, bay leaf, peppercorns, cardamoms, and cinnamon. Let them splutter.",
      "Add drained rice and sauté gently for 2 minutes.",
      "Add 4 cups of hot water and salt. Mix well.",
      "If using pressure cooker: Cook for 1 whistle on high, then simmer for 5 minutes.",
      "If using pan: Cover and cook on low heat for 12-15 minutes until rice is cooked.",
      "Let it rest for 5 minutes. Fluff with a fork.",
      "Garnish with fresh coriander leaves and serve hot."
    ]
  },
  {
    id: 6,
    name: "Aloo Gobi",
    description: "Dry curry made with potatoes and cauliflower, flavored with aromatic spices.",
    category: "dinner",
    difficulty: "easy",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 4,
    image: "images/aloo-gobi.jpg",
    instagramReel: "",
    ingredients: [
      "1 medium cauliflower, cut into florets",
      "3 medium potatoes, cubed",
      "2 onions, finely chopped",
      "2 tomatoes, chopped",
      "1 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1 tsp turmeric powder",
      "1 tsp coriander powder",
      "1 tsp garam masala",
      "1/2 tsp red chili powder",
      "3 tbsp oil",
      "Fresh coriander leaves",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until translucent.",
      "Add ginger-garlic paste and sauté for a minute.",
      "Add chopped tomatoes and cook until soft.",
      "Add turmeric, coriander powder, red chili powder, and salt. Mix well.",
      "Add potato cubes and mix. Cover and cook for 5 minutes.",
      "Add cauliflower florets and mix gently.",
      "Cover and cook on low heat for 15-20 minutes, stirring occasionally.",
      "Add garam masala and mix.",
      "Garnish with fresh coriander leaves and serve hot with roti."
    ]
  }
];

// ===================================
// RECIPE FILTERING & SEARCH
// ===================================

function filterRecipes(category = 'all', searchTerm = '') {
  let filtered = recipes;
  
  // Filter by category
  if (category !== 'all') {
    filtered = filtered.filter(recipe => recipe.category === category);
  }
  
  // Filter by search term
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(recipe => 
      recipe.name.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(term))
    );
  }
  
  return filtered;
}

// ===================================
// GET RECIPE BY ID
// ===================================

function getRecipeById(id) {
  return recipes.find(recipe => recipe.id === parseInt(id));
}

// ===================================
// RENDER RECIPE CARDS
// ===================================

function renderRecipeCards(recipesToRender, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  if (recipesToRender.length === 0) {
    container.innerHTML = '<p class="text-center" style="grid-column: 1/-1;">No recipes found. Try a different search or category.</p>';
    return;
  }
  
  recipesToRender.forEach(recipe => {
    const card = document.createElement('a');
    card.href = `recipe-detail.html?id=${recipe.id}`;
    card.className = 'card';
    
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" class="card-image" loading="lazy">
      <div class="card-content">
        <h3 class="card-title">${recipe.name}</h3>
        <p class="card-description">${recipe.description}</p>
        <div class="card-meta">
          <span class="card-meta-item">
            ⏱️ ${recipe.prepTime}
          </span>
          <span class="card-meta-item">
            🍽️ ${recipe.servings} servings
          </span>
          <span class="badge badge-${recipe.difficulty}">${recipe.difficulty}</span>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// ===================================
// RENDER RECIPE DETAIL
// ===================================

function renderRecipeDetail(recipe) {
  if (!recipe) {
    document.body.innerHTML = '<div class="container" style="padding: 100px 0; text-align: center;"><h1>Recipe not found</h1><a href="recipes.html" class="btn btn-primary">Back to Recipes</a></div>';
    return;
  }
  
  document.title = `${recipe.name} - Sameena's Recipes`;
  
  // Update hero section
  const heroSection = document.querySelector('.recipe-hero');
  if (heroSection) {
    heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${recipe.image}')`;
  }
  
  // Update recipe info
  document.getElementById('recipe-name').textContent = recipe.name;
  document.getElementById('recipe-description').textContent = recipe.description;
  document.getElementById('recipe-prep-time').textContent = recipe.prepTime;
  document.getElementById('recipe-cook-time').textContent = recipe.cookTime;
  document.getElementById('recipe-servings').textContent = recipe.servings;
  document.getElementById('recipe-difficulty').textContent = recipe.difficulty;
  document.getElementById('recipe-difficulty').className = `badge badge-${recipe.difficulty}`;
  
  // Render ingredients
  const ingredientsList = document.getElementById('ingredients-list');
  ingredientsList.innerHTML = '';
  recipe.ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="ingredient-bullet">✓</span> ${ingredient}`;
    ingredientsList.appendChild(li);
  });
  
  // Render instructions
  const instructionsList = document.getElementById('instructions-list');
  instructionsList.innerHTML = '';
  recipe.instructions.forEach((instruction, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="instruction-number">${index + 1}</span><p>${instruction}</p>`;
    instructionsList.appendChild(li);
  });
  
  // Instagram reel section
  const reelSection = document.getElementById('instagram-reel-section');
  if (recipe.instagramReel) {
    reelSection.style.display = 'block';
    document.getElementById('instagram-reel-link').href = recipe.instagramReel;
  } else {
    reelSection.style.display = 'none';
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { recipes, filterRecipes, getRecipeById, renderRecipeCards, renderRecipeDetail };
}
