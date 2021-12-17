import React, {useEffect} from "react";
import RecipeCard from "../../../sharedComponents/RecipeCard.js";
import RecipeList from "../../../sharedComponents/RecipeList.js";
import routes from '../../../requests.js';

const TopRecipes = () => {


  const [dinnerRecipes, setDinnerRecipes] = React.useState([{}]);
  const [lunchRecipes, setLunchRecipes] = React.useState([{}]);
  const [breakfastRecipes, setBreakfastRecipes] = React.useState([{}]);
  const [dessertRecipes, setDessertRecipes] = React.useState([{}]);
  const [appetizerRecipes, setAppetizerRecipes] = React.useState([{}]);
  const [brunchRecipes, setBrunchRecipes] = React.useState([{}]);

  const testFunc = () => {
    let test = {
      "mealType": ["breakfast", "brunch"],
      "protein": [""],
      "amount": 10,
      "sort": "relevant"
    };

    routes.homeCardFilter(test)
    .then((test) => {
      console.log('SUCCESS', test)
    })
    .catch((err) => {
      console.log('ERROR' + err)
    })
  }

  const getTopRecipes = (mealTypeString) => {
    let config = {
      "mealType": [mealTypeString],
      "protein": ['poultry', 'vegan'],
      "amount": 2,
      "sort": "relevant"
    };

    routes.homeCardFilter(config)
    .then((test) => {
        if (mealTypeString === 'dinner') {
          setDinnerRecipes(test);
        } else if (mealTypeString === 'lunch') {
          setLunchRecipes(test);
        } else if (mealTypeString === 'breakfast') {
          setBreakfastRecipes(test);
        }else if (mealTypeString === 'dessert') {
          setDessertRecipes(test);
        }else if (mealTypeString === 'appetizers') {
          setAppetizerRecipes(test);
        }else if (mealTypeString === 'brunch') {
          setBrunchRecipes(test);
        }
    })
    .catch((err) => {
      console.log('ERROR' + err)
    })
  }

  useEffect(() => {
    getTopRecipes('dinner');
    getTopRecipes('lunch');
    getTopRecipes('breakfast');
    getTopRecipes('dessert');
    getTopRecipes('appetizers');
    getTopRecipes('brunch');
  }, [])

  return (
    <div className="top-recipes-container">
      <h2 className="tr-title">Today's Top Recipes</h2>
      <div className="tr-list">
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Dinner</h3>
            {/* <button type='button'>See More &#8594;</button> */}
          </div>
          <RecipeList recipes={dinnerRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Lunch</h3>
            {/* <button>See More &#8594;</button> */}
          </div>
          <RecipeList recipes={lunchRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Breakfast</h3>
            {/* <button>See More &#8594;</button> */}
          </div>
          <RecipeList recipes={breakfastRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Dessert</h3>
            {/* <button>See More &#8594;</button> */}
          </div>
          <RecipeList recipes={dessertRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Appetizers</h3>
            {/* <button>See More &#8594;</button> */}
          </div>
          <RecipeList recipes={appetizerRecipes}/>
        </div>
        <div className="tr-type">
          <div className="title-button-row">
            <h3>Brunch</h3>
            {/* <button>See More &#8594;</button> */}
          </div>
          <RecipeList recipes={brunchRecipes}/>
        </div>
      </div>
    </div>
  );
};

export default TopRecipes;