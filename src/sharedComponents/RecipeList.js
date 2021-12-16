import React from "react";
import RecipeCard from "../sharedComponents/RecipeCard.js";

// NEED AXIOS

const RecipeList = ({recipes}) => {

  return recipes.map((recipe, index) => {
      return <RecipeCard value={recipe} key={index} />;
  });
};

export default RecipeList;