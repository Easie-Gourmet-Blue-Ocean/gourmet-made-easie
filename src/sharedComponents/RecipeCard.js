import React from "react";

const photo = 'FILL_ME_IN';
const recipeName = 'FILL_ME_IN';
const username = 'FILL_ME_IN';
const description = 'FILL_ME_IN';

const RecipeCard = () =>  {
  return (
    <div className="recipe-card-container">
      <div className="rc-image">{photo}</div>
      <div className="rc-info">
        <div classname="rc-info-top">
          <div className="rc-recipe-name">{recipeName}</div>
          <div className="rc-username">{username}</div>
        </div>
        <div className="rc-info-bottom">{description}</div>
      </div>
    </div>
  );
};

export default RecipeCard;
