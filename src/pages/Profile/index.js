import React, { useState, useContext, useEffect } from "react";
import RecipeList from '../../sharedComponents/RecipeList.js';
import SortMenu from '../../sharedComponents/SortMenu.js';
import {Link} from 'react-router-dom';
import UserContext from '../../UserContext.js';
import routes from '../../requests';


// will need a redirect to add a recipe
// will need to get users recipe cards and a favorite cards
const Profile = () => {

    const [userRecipes, setUserRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    //True means show userRecipes, false means showFavorite Recipes
    const [recipeSwitch, setRecipeSwitch] = useState(true);
    //
    const {user, setUser} = useContext(UserContext);

    const test = () => {
        if(user.userId) {
            routes.getUserRecipes(user.userId)
              .then(result => {
                  setUserRecipes(result)
              })
              .catch(err => console.error(err))
        }
    };

    useEffect (() => {
        test()
    }, [user])


    return (

        <div className="profile-page-wrapper">
            <div className="profile-page">
                <div className="pp-top-wrapper">
                <div className="profile-page-title">
                    <h1>My Recipes</h1>
                </div>
                <div className="profile-page-button">
                    <Link to='/addRecipe'>
                        <button className="button-class" type='button'>Add Recipe</button>
                    </Link>
                </div>
                </div>
                <div className="profile-page-list">
                <div className="pp-top">
                    <h3 className="pp-num">Showing {userRecipes.length} results </h3>
                    <div className="pp-sort-menu">Sort by: <SortMenu /></div>
                </div>
                    <RecipeList recipes={userRecipes}/>
                </div>
            </div>
        </div>


)
}

export default Profile;


/* FOR SAM:Possibly change the tag for the profile while styling */

/* <button className="button-class" type='button' onClick={() => setRecipeSwitch(true)}>My Recipes</button>
<button className="button-class" type='button' onClick={() => setRecipeSwitch(false)}>My Favorites</button>
<RecipeList recipes={recipeSwitch ? userRecipes : favoriteRecipes}/> */