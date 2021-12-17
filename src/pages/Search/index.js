import React, {useState, useEffect} from "react";
import Searchbar from '../../sharedComponents/Searchbar.js';
import SortMenu from '../../sharedComponents/SortMenu.js';
import RecipeList from'../../sharedComponents/RecipeList.js';
import routes from '../../requests.js';
import {useLocation} from 'react-router-dom';


// Will Need completed Axios Requests, and an onEffect hook to handle the change of status
const Search = () => {

 const [status, setStatus] = useState('');
 const [recipes, setRecipes] = useState([{}]);
 const [searchTerm, setSearchTerm] = useState('');
 const [renderSearch, setRenderSeatch] = useState(false)
 const location = useLocation();
 const {searchTerm2} = location.state

 const getRecipes = () => {
     routes.getRecipeTilesSearch(searchTerm2)
       .then(result => {
           setRecipes(result);
       })
       .catch(err => {
           console.log('error with axios call in search/index')
       })
 }


 useEffect(() => {
     getRecipes();
 }, [searchTerm2])

    return (
        <>
            <div className="search-page-container">
                <div className="sps">
                    <div className="sp-searchbar"><Searchbar/></div>
                    </div>
                <div className="sp-list-container">
                <div className="sp-list">
                <div className="sp-top">
                    <h3 className="sp-num">Showing {recipes.length} results </h3>
                    <div className="sp-sort-menu">Sort by: <SortMenu setStateHook={setStatus} /></div>
                </div>
                        <RecipeList recipes={recipes}/></div>
                </div>
            </div>
        </>
    )
}

export default Search;