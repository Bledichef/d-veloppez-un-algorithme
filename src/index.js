import recipes from "./recipes.js" // import de l'ensemble de la constante

/**
 * @file Documentation de la branche algorithme1 (Utilisation de Filter pour implémentation de l'algorithme) du projet Les petits plats.
 */

const containerArticleRecipes = document.querySelector(".container-article")
const inputDevice = document.getElementById("devices")
const inputUstensil = document.getElementById("ustensils")
const inputIngredient = document.getElementById("ingredients")
const ulDevices = document.querySelector('.list-devices')
const ulUstensils = document.querySelector('.list-ustensils')
const ulIngredients = document.querySelector('.list-ingredients')
let tagSelect = []
let arrayDevices = []
let arrayIngredients = []
let arrayUstensils = []

function main() {
    displayAllRecipes(recipes)
}

/**
 * Build DOM recipes cards and display recipes (all or filtered) based on params
 * @param {array} recipes - allRecipes or recipes filtered 
 */
function displayAllRecipes(recipes) {
    const containerArticle = document.querySelector(".container-article")
  
    for (const recipe of recipes) {
      const tagArticle = document.createElement("article");
      containerArticle.appendChild(tagArticle)
      tagArticle.className = "article-recipe"
      tagArticle.tabIndex = 0   
      tagArticle.ariaLabel = "Recettes filtrées suite à la recherche dans la barre de recherche et/ou dans les tags"
  
      const tagImg = document.createElement("img")
      tagArticle.appendChild(tagImg)
      tagImg.src = "./assets/img.jpg"
      tagImg.alt = "Gateau"
      tagImg.ariaLabel = "Gateau de la recette"
      tagImg.tabIndex = 0
  
      const tagContainer = document.createElement("div")
      tagArticle.appendChild(tagContainer)
      tagContainer.className = "container-text-title"
  
      const h2 = document.createElement("h2")
      tagContainer.appendChild(h2)
      h2.className = "title"
      h2.innerHTML = recipe.name
      h2.tabIndex = 0
  
      const tagContainerTime = document.createElement("div")
      tagContainer.appendChild(tagContainerTime)
      tagContainerTime.className = "icon-time"
  
      const tagI = document.createElement("i")
      tagContainerTime.appendChild(tagI)
      tagI.className = "far fa-clock"
      tagI.tabIndex = 0
      tagI.ariaLabel = "horloge pour illustrer le temps de cuisson"
  
      const tagSpanTime = document.createElement("span")
      tagContainerTime.appendChild(tagSpanTime)
      tagSpanTime.className = "time"
      tagSpanTime.innerHTML = recipe.time + " min"
      tagSpanTime.tabIndex = 0
  
      const tagContainerInfos = document.createElement("div")
      tagArticle.appendChild(tagContainerInfos);
      tagContainerInfos.className = "container-ingredient-recipe"
  
      const tagIngredient = document.createElement("div")
      tagContainerInfos.appendChild(tagIngredient)
      tagIngredient.className = "ingredient"
      tagIngredient.tabIndex = 0
      
      const recipeIngredients = recipe.ingredients
      for (const ingredient of recipeIngredients) {
        
        const containerIngredient = document.createElement("div")
        tagIngredient.appendChild(containerIngredient)
        containerIngredient.className = "container-ingredient"
        const aliment = document.createElement("span");
        containerIngredient.appendChild(aliment)
        aliment.className = "aliment"
        aliment.tabIndex = 0
  
        aliment.innerHTML = ingredient.ingredient
        const quantity = document.createElement("span")
        containerIngredient.appendChild(quantity)
        quantity.className = "quantity"
        quantity.tabIndex = 0
  
        quantity.innerHTML = !ingredient.quantity ? "" : " : "+`${ingredient.quantity}`
        
        const unit = document.createElement("span")
        containerIngredient.appendChild(unit)
        unit.className = "unit"
        unit.tabIndex = 0
  
        unit.innerHTML = !ingredient.unit ? '' : ingredient.unit
      }
      const tagRecipe = document.createElement("div")
      tagContainerInfos.appendChild(tagRecipe)
      tagRecipe.className = "infos-recipe"
      tagRecipe.innerHTML = recipe.description
      tagRecipe.tabIndex = 0
    }
  }


  main()