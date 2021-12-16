import React from "react";
import RecipeCard from "../../../sharedComponents/RecipeCard.js";
import RecipeList from "../../../sharedComponents/RecipeList.js";

const TopRecipes = () => {


  const [dinnerRecipes, setDinnerRecipes] = React.useState([]);
  const [lunchRecipes, setLunchRecipes] = React.useState([]);
  const [breakfastRecipes, setBreakfastRecipes] = React.useState([]);
  const [dessertRecipes, setDessertRecipes] = React.useState([]);
  const [appetizerRecipes, setAppetizerRecipes] = React.useState([]);
  const [brunchRecipes, setBrunchRecipes] = React.useState([]);


  return (
    <div className="top-recipes-container">
      <h2 className="tr-title">Today's Top Recipes</h2>
      <div className="tr-list">
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Dinner</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList value={dinnerRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Lunch</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList value={lunchRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Breakfast</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList value={breakfastRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Dessert</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList value={dessertRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Appetizers</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList value={appetizerRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Brunch</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeList value={brunchRecipes}/>
        </div>
      </div>
    </div>
  );
};

export default TopRecipes;
