import React, { useState } from "react";


const RefineResults = () => {
  const mealType = {
      0: 'breakfast',
      1: 'brunch',
      2: 'lunch',
      3: 'appetizer',
      4: 'dinner',
      5: 'dessert'
    }

    const proteinType = {
      0: 'poultry',
      1: 'beef',
      2: 'pork',
      3: 'seafood',
      4: 'vegetarian',
      5: 'vegan'
    }

    const [selectByMealType, setSelectByMealType] = useState([]);
    const [selectByProtein, setSelectByProtein] = useState([]);

    return (
       <div className="refine-results-container">

           <div className="meal-type-filter">
            <ul>
              {mealType.map((value, index) => {
                return <li key={index} value={value}>{value}</li>
              }) }
            </ul>
           </div>

            <div className="protein-filter">

            </div>


       </div>
    )
}

export default RefineResults;
