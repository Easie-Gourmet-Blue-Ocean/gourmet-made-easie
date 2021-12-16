import React from "react";
import RecipeCard from "../sharedComponents/RecipeCard.js";

// NEED AXIOS

const RecipeList = () => {
  let recipes = [
    {
      recipeName: "chicken and rice",
      userName: "tester1",
      description: "this is a great dish that I make after the gym",
      photo:
        "https://media.istockphoto.com/photos/roasted-whole-french-chicken-picture-id1192828034?k=20&m=1192828034&s=612x612&w=0&h=TUGYWNtQVV2DxjD1hKxHXbhAzj8s8bgupdx0RMo3EDo=",
    },
    {
      recipeName: "chicken and rice",
      userName: "tester1",
      description: "this is a great dish that I make after the gym",
      photo: "",
    },
  ];

  return recipes.map((recipe, index) => {
      return <RecipeCard value={recipe} key={index} />;
  });
};

export default RecipeList;
