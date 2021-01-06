import React from 'react'
import Recipe from './Recipe.js'
export default function recipeList({recipes}) {
    return (
        <div className ="recipe-list">
            <div>
                {recipes.map(recipe=>{
                  return  <Recipe 
                  key={recipe.id} 
                  {...recipe}
                  />
                })}
            </div>
            <div className="recipe-list__add-recipe-btn-container">
            <button className="btn btn--primary">Add Recipe</button>
            </div>
           

        </div>
    )
}
