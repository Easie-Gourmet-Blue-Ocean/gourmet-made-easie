import React from "react";
import RecipeCard from "../../../sharedComponents/RecipeCard.js";
import RecipeList from "../../../sharedComponents/RecipeList.js";
import routes from '../../../requests.js';

const TopRecipes = () => {


  const [dinnerRecipes, setDinnerRecipes] = React.useState([{
    recipeId:1,
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
  },]);
  const [lunchRecipes, setLunchRecipes] = React.useState([{
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
  },]);
  const [breakfastRecipes, setBreakfastRecipes] = React.useState([{
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
  },]);
  const [dessertRecipes, setDessertRecipes] = React.useState([{
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
  },]);
  const [appetizerRecipes, setAppetizerRecipes] = React.useState([{
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
  },]);
  const [brunchRecipes, setBrunchRecipes] = React.useState([{
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
  },]);

  const testFunc = () => {
    let test = {
      "mealType": ["breakfast", "brunch"],
      "protein": [""],
      "amount": 10,
      "sort": "relevant"
    };

    routes.homeCardFilter(test)
    .then((test) => {
      console.log('SUCCESS', test)
    })
    .catch((err) => {
      console.log('ERROR' + err)
    })
  }

  return (
    <div className="top-recipes-container">
      <h2 className="tr-title">Today's Top Recipes</h2>
      <div className="tr-list">
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Dinner</h3>
            <button type='button'>See More &#8594;</button>
          </div>
          <RecipeList recipes={dinnerRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Lunch</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList recipes={lunchRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Breakfast</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList recipes={breakfastRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Dessert</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList recipes={dessertRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Appetizers</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList recipes={appetizerRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Brunch</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList recipes={brunchRecipes}/>
        </div>
      </div>
    </div>
  );
};

export default TopRecipes;