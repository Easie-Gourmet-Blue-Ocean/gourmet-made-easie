import React, { useState } from "react";

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

const RefineResults = () => {

    const [selectByMealType, setSelectByMealType] = useState[[]];
    const [selectByProtein, setSelectByProtein] = useState[[]];

    return (
       <div className="refine-results-container">

           <div className="meal-type-filter">

           </div>

            <div className="protein-filter">

            </div>


       </div>
    )
}

export default RefineResults;
