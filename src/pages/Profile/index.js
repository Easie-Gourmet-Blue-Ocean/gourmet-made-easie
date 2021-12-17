import React, { useState, useContext } from "react";
import RecipeList from '../../sharedComponents/RecipeList.js';
import {Link} from 'react-router-dom';
import UserContext from '../../UserContext';

// will need a redirect to add a recipe
// will need to get users recipe cards and a favorite cards
const Profile = () => {

    const [userRecipes, setUserRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    //True means show userRecipes, false means showFavorite Recipes
    const [recipeSwitch, setRecipeSwitch] = useState(true);

    const {user, setUser} = useContext(UserContext);
    return (
        <>
        {/* FOR SAM:Possibly change the tag for the profile while styling */}
        <h1>My Profile</h1>
        <Link to='/addRecipe'>
        <button type='button'>Add Recipe</button>
        </Link>
        <button type='button' onClick={() => setRecipeSwitch(true)}>My Recipes</button>
        <button type='button' onClick={() => setRecipeSwitch(false)}>My Favorites</button>
        <RecipeList recipes={recipeSwitch ? userRecipes : favoriteRecipes}/>
        </>
    )
}

export default Profile;