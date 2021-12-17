import React from "react";
import RecipeList from "../sharedComponents/RecipeList.js";
// NEED AXIOS DATA

const RecipeCard = (recipe) => {

    let photo = recipe.value.photo;
    let recipeName = recipe.value.recipeName?.charAt(0).toUpperCase() + recipe.value.recipeName?.slice(1);;
    let username = recipe.value.userName?.charAt(0).toUpperCase() + recipe.value.userName?.slice(1);
    let description = recipe.value.description?.charAt(0).toUpperCase() + recipe.value.description?.slice(1);
    let id= recipe.value.recipeId || 0;

    const clickHandler = (e) => {
      e.preventDefault();
      console.log(id);
    }

    return (
      <div className="recipe-card-container" value={id} onClick={e => {
        clickHandler(e);
      }}>
        <div className="rc-image">
            <img src={photo}></img>
        </div>
        <div className="rc-info">
          <div className="rc-info-top">
            <div className="rc-recipe-name">{recipeName}</div>
            <div className="rc-username">by: {username}</div>
          </div>
          <div className="rc-info-bottom">{description}</div>
        </div>
      </div>
    );

  };

export default RecipeCard;