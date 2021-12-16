import React from 'react';

const Ingredients = ({ingredients}) => {

  return (
    <div>
      <div className="rp-ingredients-title">Ingredients</div>
      <ul className="rp-ingredients-list">
        {ingredients.map((value, index) => {
          return (
            <li key={index}>
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