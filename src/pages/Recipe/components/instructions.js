import React from 'react';

const Instructions = ({instructions}) => {

  return (
    <div className="rp-instructions-container">
      <div className="rp-instructions-title">Instructions</div>
      <ol className="rp-instructions-list">
        {instructions.map((value, index) => {
          return(
          <li className="instruction" key={index}>
            {index + 1}. {value.charAt(0).toUpperCase() + value.slice(1)}
          </li>
          )})}

      </ol>
    </div>
  )
}

export default Instructions;