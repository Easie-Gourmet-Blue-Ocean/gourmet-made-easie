import React, {useState, useEffect} from "react";
import Searchbar from '../../sharedComponents/Searchbar.js';
import SortMenu from '../../sharedComponents/SortMenu.js';
import RecipeList from'../../sharedComponents/RecipeList.js';


// Will Need completed Axios Requests, and an onEffect hook to handle the change of status
const Search = () => {

 const [status, setStatus] = useState('');
 const [recipes, setRecipes] = useState([{
    recipeName: "chicken and rice",
    userName: "tester1",
    description: "this is a great dish that I make after the gym",
    photo:
      "https://media.istockphoto.com/photos/roasted-whole-french-chicken-picture-id1192828034?k=20&m=1192828034&s=612x612&w=0&h=TUGYWNtQVV2DxjD1hKxHXbhAzj8s8bgupdx0RMo3EDo=",
  },
  {
    recipeName: "chicken and rice",
    userName: "tester1",
    description: "this is a great dish that I make after the gym",
    photo: "",
  },]);



    return (
        <>
            <Searchbar/>
            <SortMenu setStateHook={setStatus} />
            <RecipeList recipes={recipes}/>
        </>
    )
}

export default Search;