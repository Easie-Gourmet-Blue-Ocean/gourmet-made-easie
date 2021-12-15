import React from 'react';

const Ingredients = ({ingredients}) => {

  return (
    <div>
      <div>Ingredients</div>
      <ul style={{listStyleType: 'none'}}>
        {ingredients.map((value, index) => {
          return (
            <li key={index} style={{listStyleType: 'none'}}>
              <label>
              <input
                type='checkbox'
                value={value}
              />
              <span>{value.amount} {value.measurementUnit} {value.ingredientName}</span>

              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Ingredients;