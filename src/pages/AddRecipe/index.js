import React, {useState} from 'react';

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

  //Methods to handle changes of input

  const onSubmit = (event) => {
    event.preventDefault();
  }

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
    <div className="form-container">
    <form>
      {/* Name of Recipe Form Element */}
      <div className="form-name">
      <label>
        Name of Recipe:
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Name of Recipe'
        ></input>
      </label>
      </div>
      {/* description of Recipe Form Element */}
      <label>
        Description:
        <input
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
          maxLength={10000}
          placeholder='Description of your Recipe'
        />
      </label>
      {/* Active Time Form Element */}
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
      {/* Total Time Form Element */}
      <label>
        Inactive Time
        <select onChange={e => setTotalTime(Number(e.target.value))}>
          {
            time.map((value, index) => {
              return <option key={index} value={value}>{value >= 60 ? `${Math.floor(value/60)}:${value % 60}`: value}</option>
            })
          }
        </select>
        Minutes
      </label>
      {/* Meal Type Picker */}
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
      {/* Protein Type Picker */}
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
      {/* Add Ingredients Form */}
      <label>
        Add Ingerdients
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
      {/* Add instructions Form */}
      <label>
        Add Instructions
        {instructions.map((value, index) => {
          return (
          <div key={index}>
            Step {index + 1}<input type='text' value={instructions[index]} onChange={updateInstructions(index)} placeholder='Add your instructions here!'></input>
          </div>
          )
        })}
        <button onClick={(e) => addInstructions(e)}>+</button>
      </label>
      {/* photos portion of form */}
      <label>
        Photos
        <input type='text' value={photo} onChange={e => setPhoto(e.target.value)} placeholder='Insert Photo URL here' maxLength={500}></input>
      </label>
      <div>
        <button type='submit' onClick={e => {onSubmit(e)}}>Submit</button>
      </div>
    </form>
    </div>
  )
};

export default AddRecipe;