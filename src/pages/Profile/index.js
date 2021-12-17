import React, { useState } from "react";
import RecipeList from '../../sharedComponents/RecipeList.js';
import {Link} from 'react-router-dom';


// will need a redirect to add a recipe
// will need to get users recipe cards and a favorite cards
const Profile = () => {

    const [userRecipes, setUserRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    //True means show userRecipes, false means showFavorite Recipes
    const [recipeSwitch, setRecipeSwitch] = useState(true);

    return (
        <div className="profile-page">
        {/* FOR SAM:Possibly change the tag for the profile while styling */}
        <h1>My Profile</h1>
        <Link to='/addRecipe'>
        <button className="button-class" type='button'>Add Recipe</button>
        </Link>
        <button className="button-class" type='button' onClick={() => setRecipeSwitch(true)}>My Recipes</button>
        <button className="button-class" type='button' onClick={() => setRecipeSwitch(false)}>My Favorites</button>
        <RecipeList recipes={recipeSwitch ? userRecipes : favoriteRecipes}/>
        </div>
    )
}

export default Profile;