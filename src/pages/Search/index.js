import React, {useState} from "react";
import Searchbar from '../../sharedComponents/Searchbar.js';
import SortMenu from '../../sharedComponents/SortMenu.js';

const Search = () => {

 const [status, setStatus] = useState('');
 const [recipes, setRecipes] = useState([{}]);



    return (
        <>
            <Searchbar/>
            <SortMenu setStateHook={setStatus} />
        </>
    )
}

export default Search;