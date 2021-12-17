import React from "react";
import RecipeList from "../sharedComponents/RecipeList.js";
import { Link } from "react-router-dom";

const RecipeCard = (recipe) => {
    let photo = recipe.value.photo;
    let recipeName = recipe.value.recipeName?.charAt(0).toUpperCase() + recipe.value.recipeName?.slice(1);;
    let username = recipe.value.username?.charAt(0).toUpperCase() + recipe.value.username?.slice(1);
    let description = recipe.value.description?.charAt(0).toUpperCase() + recipe.value.description?.slice(1);
    let id= recipe.value.recipeId || 0;

    return (
      <Link
        to='/recipe'
        state={{recipeId: id}}
      >
        <div className="recipe-card-container" value={id}>
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
      </Link>
    );

  };

export default RecipeCard;