import React from 'react'
import Ingredient from './Ingredient.js'

export default function IngredientList({ingredients}) {
    const ingredientElements = ingredients.map(ingredient=>{
        return <Ingredient key={ingredient.id} {...ingredient}/>
    })
    return (
        <div>
            {//renders the same as maping in render
            ingredientElements}
            
        </div>
    )
}
