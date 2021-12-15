import React from "react";
import { hot } from 'react-hot-loader/root';
import { getRecipeTiles, getRecipe, getRandomRecipe } from './requests.js'

const App = () => {
    let testBody = {
        "mealType": ["lunch", "dinner"],
        "protein": ["poultry"],
        "sort": "newest"
    }
    return (
        <>
        <h1>
            Hello World
        </h1>
        <div>
            {
                getRecipeTiles(testBody)
            }
        </div>
        </>
    )
}

export default hot(App);