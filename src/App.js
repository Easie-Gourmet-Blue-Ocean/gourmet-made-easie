import React from "react";
import { hot } from 'react-hot-loader/root';
import RecipePage from './pages/Recipe'

const App = () => {
    return (
        <>
        <h1>
            Hello World
        </h1>
        <RecipePage></RecipePage>
        </>
    )
}

export default hot(App);