import React, { useState } from "react";
import Title from "./components/title.js";
import Instructions from "./components/instructions.js";
import Ingredients from "./components/ingredients.js";
import Description from "./components/description.js";

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

  return (
    <div className="recipe-page-container">
        <Title
          recipeName={recipe.recipeName}
          activeTime={recipe.activeTime}
          totalTime={recipe.totalTime}
          servingSize={recipe.servingSize}
        />
        <div className="rp-bottom">
      <Instructions instructions={recipe.instructions} />
      <Ingredients ingredients={recipe.ingredients} />
      </div>
      {/* </div> */}
      {/* // <Description description={recipe.description} /> */}
    </div>
  );
};

export default RecipePage;
