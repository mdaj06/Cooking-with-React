import React from 'react'
import IngredientList from './IngredientList'
export default function Recipie(props) {
   const {id,name,servings,cookTime,instructions,ingredients}=props
    return (
       <div>
        <div>
            <div>
                <h3>{name}</h3>
                <button>
                    edit
                </button>
                <button>
                 delete
                </button>
            </div>  
        </div>
        <div>
        <span>Cook Time </span>
        <span>{cookTime} </span>
        </div>
        <div>
        <span>servings </span>
        <span>{servings}</span>
        </div>
        <div>
        <span>Instructions </span>
        <div>
            {instructions}

        </div>
        <span>Ingredients </span>
        <div>
            <IngredientList ingredients={ingredients}/>

        </div>
        </div>
        
        </div> 
    )
}
