import React, { useState } from "react";
import RecipeList from '../../sharedComponents/RecipeList.js';


// will need a redirect to add a recipe
// will need to get users recipe cards and a favorite cards
const Profile = () => {

    const [userRecipes, setUserRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    //True means show userRecipes, false means showFavorite Recipes
    const [recipeSwitch, setRecipeSwitch] = useState(true);

    return (
        <>
        {/* FOR SAM:Possibly change the tag for the profile while styling */}
        <h1>My Profile</h1>
        <button type='button'>Add Recipe</button>
        <button type='button' onClick={() => setRecipeSwitch(true)}>My Recipes</button>
        <button type='button' onClick={() => setRecipeSwitch(false)}>My Favorites</button>
        <RecipeList recipes={recipeSwitch ? userRecipes : favoriteRecipes}/>
        </>
    )
}

export default Profile;