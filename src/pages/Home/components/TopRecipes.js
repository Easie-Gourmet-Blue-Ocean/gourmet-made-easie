import React from "react";
import RecipeCard from "../../../sharedComponents/RecipeCard.js";

const TopRecipes = () => {
  return (
    <div className="top-recipes-container">
      <h2 className="tr-title">Today's Top Recipes</h2>
      <div className="tr-list">
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Dinner</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeCard />
          <RecipeCard />
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Lunch</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeCard />
          <RecipeCard />
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Breakfast</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeCard />
          <RecipeCard />
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Dessert</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeCard />
          <RecipeCard />
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Appetizers</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeCard />
          <RecipeCard />
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Brunch</h3>
            <button>See More &#8594;</button>
          </div>
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default TopRecipes;
