import React, {useState, useEffect} from 'react';
import Title from './components/title.js';
import Instructions from './components/instructions.js';
import Ingredients from './components/ingredients.js';
import Description from './components/description.js';
import {useLocation} from 'react-router-dom';
import routes from '../../requests'

const RecipePage = () => {

  const [recipe, setRecipe] = useState({
    recipeId: 0,
    username: '',
    favoritedCount: 0,
    recipeName: '',
    description: '',
    activeTime: 0,
    totalTime: 0,
    photo: '',
    instructions : [''],
    ingredients: [
      {ingredientName: '', amount: 1, measurementUnit: ''},
    ],
    mealType:[''],
    protein:[''],
    servingSize: 0,
    createdAt: ''
  })

  const location = useLocation();
  const { recipeId } = location.state;

  const getRecipe = () => {
    routes.getRecipe(recipeId)
     .then(response => {
       setRecipe(response);
     })
     .catch(err => console.error(err))
  }

  useEffect(() => {
    getRecipe();
  }, [recipeId])

  return (
    <div>
      <Title
        recipeName={recipe.recipeName}
        activeTime={recipe.activeTime}
        totalTime={recipe.totalTime}
        servingSize={recipe.servingSize}
      />
      <Instructions
        instructions={recipe.instructions}
      />
      {/* CURRENTLY IN LINED STYLE TO GET RID OF DOTS FOR UNORDERED LIST */}
      <Ingredients
        ingredients={recipe.ingredients}
      />
      <Description
        description={recipe.description}
      />
    </div>

  )
}

export default RecipePage
