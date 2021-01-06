import React from 'react'
import RecipeList from './RecipeList.js'
import '../css/app.css'

function App() {

  return (
    <RecipeList recipes={sampleRecipes} />
  );
}
const sampleRecipes = [
  {
    id:1,
    name:'plain chicken',
    servings:3,
    cookTime:'1:45',
    instructions:`1.buy it
                  2.eat it`,
    ingredients:[
      {
        id:1,
        name:'salt',
        amount:'1 spoon'
      },
      {
        id:2,
        name:'pepper',
        amount:'1 spoon'
      }
    ]
  },
  {
    id:2,
    name:'maggi',
    servings:1,
    cookTime:'00:02',
    instructions:`1.buy it
                  2.eat it`,
                  ingredients:[
                    {
                      id:1,
                      name:'salt',
                      amount:'1 spoon'
                    },
                    {
                      id:2,
                      name:'pepper',
                      amount:'1 spoon'
                    }
                  ]
    

  }
]
export default App;
