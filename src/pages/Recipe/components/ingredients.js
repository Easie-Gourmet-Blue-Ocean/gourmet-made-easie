import React from 'react';

const Ingredients = ({ingredients}) => {

  return (
    <div className="rp-ingredients-container">
      <div className="rp-ingredients-title">Ingredients</div>
      <ul className="rp-ingredients-list">
        {ingredients.map((value, index) => {
          return (
            <li className="rp-ingredient" key={index}>
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