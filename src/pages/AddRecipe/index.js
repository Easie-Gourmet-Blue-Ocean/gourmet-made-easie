import React, {useState} from 'react';
import routes from '../../requests.js';
import {Navigate} from 'react-router-dom';

const AddRecipe = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [activeTime, setActiveTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  // Meal Types are Breakfast, Brunch, Lunch, Appertizer, Dinner, Dessert
  const [mealType, setMealType] = useState([false, false, false, false, false, false]);
  // Protein Types are
  const [proteinType, setProteinType] = useState([false, false, false, false, false, false]);
  const [servingSize, setServingSize] = useState(1);
  const [ingredients, setIngredients] = useState([{
    ingredientName: '',
    amount: 1,
    measurementUnit: ''
  }])
  const [instructions, setInstructions] = useState(['']);
  const [photo, setPhoto] = useState('');

 //handle Redirecting on submit

  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Navigate to='/profile'/>
  }
  //Submit Method

  const onSubmit = (event) => {
    event.preventDefault();

    const config = {
      recipeName: name,
      description: description,
      activeTime: activeTime,
      totalTime: totalTime,
      photo: photo,
      instructions: instructions,
      ingredients: ingredients,
      mealType: mealType,
      protein: proteinType,
      servingSize: servingSize
    }
    routes.postRecipe(config)
    .then(result => {
      setRedirect(true);
    })
    .catch (err => console.error(err))
  }

  //Methods to handle changes of input


  const updateMealChange = index => e => {
    let newArr = [...mealType];
    newArr[index] = !newArr[index];
    setMealType(newArr)
  }

  const updateProtein = index => e => {
    let newArr = [...proteinType];
    newArr[index] = !newArr[index];
    setProteinType(newArr);
  }

  const addIngredients = e => {
    e.preventDefault();
    let newArr = [...ingredients]
    newArr.push({
      ingredientName: '',
      amount: 1,
      measurementUnit: ''
    })
    setIngredients(newArr);
  }

  const updateIngredients = (index, key) => e => {
    let newArr = [...ingredients];
    newArr[index][key] = e.target.value;
    setIngredients(newArr);
  }

  const addInstructions = e => {
    e.preventDefault();
    let newArr = [...instructions];
    newArr.push('');
    setInstructions(newArr);
  }

  const updateInstructions = (index) => e => {
    let newArr = [...instructions];
    newArr[index] = e.target.value;
    setInstructions(newArr);
  }

  // base data to fill out drop down menus

  let servings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let time = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
  for (var i = 75; i <= 1440; i += 15) {
    time.push(i);
  }

  let measurementUnitTypes = ['pound(s)', 'ounce(s)', 'gram(s)', 'teaspoon(s)', 'tablespoon(s)', 'fluid ounce(s)', 'cup(s)', 'pint(s)', 'quart(s)', 'gallon(s)', 'ml(s)', 'item(s)']

  return (
    <div className='form'>
    <form>
      {/* Name of Recipe Form Element */}
      <div className='form-recipe-name'>
      <label>
        Name of Recipe:
        <div className='recipe-name-input-div'>
        <input
          className='recipe-name-input'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Name of Recipe'
        ></input>
        </div>
      </label>
      </div>
      {/* description of Recipe Form Element */}
      <div className='form-recipe-description'>
      <label>
        Description:
        <div className='recipe-desc-input-div'>
        <input
          className='recipe-desc-input'
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
          maxLength={10000}
          placeholder='Description of your Recipe'
        />
        </div>
      </label>
      </div>
      {/* Active Time Form Element */}
      <div className='form-time-wrapper'>
      <div className='form-active-time'>
      <label>
        Active Time
        <select onChange={e => setActiveTime(Number(e.target.value))}>
          {
            time.map((value, index) => {
              return <option key={index} value={value}>{value >= 60 ? `${Math.floor(value/60)}:${value % 60}`: value}</option>
            })
          }
        </select>
        Minutes
      </label>
      </div>
      {/* Total Time Form Element */}
      <div className='form-total-time'>
      <label>
        Total Time
        <select onChange={e => setTotalTime(Number(e.target.value))}>
          {
            time.map((value, index) => {
              return <option key={index} value={value}>{value >= 60 ? `${Math.floor(value/60)}:${value % 60}`: value}</option>
            })
          }
        </select>
        Minutes
      </label>
      </div>
      </div>
      {/* Meal Type Picker */}
      <div className='form-select-wrapper'>
      <div className='form-meal-type'>
      <label>
        Meal Type
        <div>
          <input type='checkbox' checked={mealType[0]} onChange={updateMealChange(0)}></input>
          <label>Breakfast</label>
        </div>
        <div>
          <input type='checkbox' checked={mealType[1]} onChange={updateMealChange(1)}></input>
          <label>Brunch</label>
        </div>
        <div>
          <input type='checkbox' checked={mealType[2]} onChange={updateMealChange(2)}></input>
          <label>Lunch</label>
        </div>
        <div>
          <input type='checkbox' checked={mealType[3]} onChange={updateMealChange(3)}></input>
          <label>Appetizer</label>
        </div>
        <div>
          <input type='checkbox' checked={mealType[4]} onChange={updateMealChange(4)}></input>
          <label>Dinner</label>
        </div>
        <div>
          <input type='checkbox' checked={mealType[5]} onChange={updateMealChange(5)}></input>
          <label>Dessert</label>
        </div>
      </label>
      </div>
      {/* Protein Type Picker */}
      <div className='form-protein-type'>
      <label>
        Protein Type
        <div>
          <input type='checkbox' checked={proteinType[0]} onChange={updateProtein(0)}></input>
          <label>Poultry</label>
        </div>
        <div>
          <input type='checkbox' checked={proteinType[1]} onChange={updateProtein(1)}></input>
          <label>Beef</label>
        </div>
        <div>
          <input type='checkbox' checked={proteinType[2]} onChange={updateProtein(2)}></input>
          <label>Pork</label>
        </div>
        <div>
          <input type='checkbox' checked={proteinType[3]} onChange={updateProtein(3)}></input>
          <label>Seafood</label>
        </div>
        <div>
          <input type='checkbox' checked={proteinType[4]} onChange={updateProtein(4)}></input>
          <label>Vegetarian</label>
        </div>
        <div>
          <input type='checkbox' checked={proteinType[5]} onChange={updateProtein(5)}></input>
          <label>Vegan</label>
        </div>
      </label>
      </div>
      <div className='form-serving-size'>
      <label>
        Serving Size
        <select onChange={(e) => setServingSize(Number(e.target.value))}>
          {servings.map((value, index) => {
            return (
              <option key={index} value={value}>{value}</option>
            )
          })}
        </select>
      </label>
      </div>
      </div>
      {/* Add Ingredients Form */}
      <div className='form-add-ingredients'>
      <label>
        Add Ingredients
        {ingredients.map((value, index) => {
          return (
            <div key={index}>
            <input type='text' value={ingredients[index].ingredientName} onChange={updateIngredients(index, 'ingredientName')} placeholder='Ingredient Name' maxLength={255}></input>
            <input type='number' value={ingredients[index].amount} onChange={updateIngredients(index, 'amount')} min={'0'}></input>
            <select onChange={updateIngredients(index, 'measurementUnit')}>
              {measurementUnitTypes.map((value, index) => {
                return <option key={index} value={value}>{value}</option>
              })}
            </select>

            </div>
          )
        })}
        <button onClick={(e) => addIngredients(e)}>+</button>
      </label>
      </div>
      {/* Add instructions Form */}
      <div className='form-add-instructions'>
      <label>
        Add Instructions
        {instructions.map((value, index) => {
          return (
          <div key={index}>
            Step {index + 1}<input className='add-instructions' type='text' value={instructions[index]} onChange={updateInstructions(index)} placeholder='Add your instructions here!'></input>
          </div>
          )
        })}
        <button onClick={(e) => addInstructions(e)}>+</button>
      </label>
      </div>
      {/* photos portion of form */}
      <div className='form-photos'>
      <label>
        Photos
        <input type='url' value={photo} onChange={e => setPhoto(e.target.value)} placeholder='Insert Photo URL here' maxLength={500}></input>
      </label>
      </div>
      <div>
        <button className='button-class form-submit' type='submit' onClick={e => {onSubmit(e)}}>Submit</button>
      </div>
    </form>
    </div>
  )
};

export default AddRecipe;