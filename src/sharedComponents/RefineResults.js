import React, { useState } from "react";

const RefineResults = () => {
  const [selectByMealType, setSelectByMealType] = useState([]);
  const [selectByProtein, setSelectByProtein] = useState([]);

  return (
    <div className="refine-results-container">

      <h3>Refine Results</h3>

        <div className="refine-mealtype">

          <h5>Meal Type: </h5>

            <div className="r-type">
              <input type="radio" id="Appetizers" value="Appetizers"></input>
              <label>Appetizers</label>
            </div>

            <div className="r-type">
              <input type="radio" id="Breakfast" value="Breakfast"></input>
              <label>Breakfast</label>
            </div>

            <div className="r-type">
              <input type="radio" id="Lunch" value="Lunch"></input>
              <label>Lunch</label>
            </div>

            <div className="r-type">
              <input type="radio" id="Dinner" value="Dinner"></input>
              <label>Dinner</label>
            </div>

            <div className="r-type">
              <input type="radio" id="Dessert" value="Dessert"></input>
              <label>Dessert</label>
            </div>
        </div>

        <div className="refine-protein">

          <h5>Protein Type </h5>

            <div className="r-type">
              <input type="radio" id="Chicken" value="Chicken"></input>
              <label>Chicken</label>
            </div>

            <div className="r-type">
              <input type="radio" id="Beef" value="Beef"></input>
              <label>Beef</label>
            </div>

            <div className="r-type">
              <input type="radio" id="Pork" value="Pork"></input>
              <label>Pork</label>
            </div>

            <div className="r-type">
              <input type="radio" id="Seafood" value="Seafood"></input>
              <label>Seafood</label>
            </div>

            <div className="r-type">
              <input type="radio" id="Vegetarian" value="Vegetarian"></input>
              <label>Vegetarian</label>
            </div>

            <div className="r-type">
              <input type="radio" id="Vegan" value="Vegan"></input>
              <label>Vegan</label>
            </div>

        </div>

    </div>
  );
};

export default RefineResults;
