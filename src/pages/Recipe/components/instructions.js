import React from 'react';

const Instructions = ({instructions}) => {

  return (
    <div>
      <div>Instructions</div>
      <ol>
        {instructions.map((value, index) => {
          return(
          <li key={index}>
            {value}
          </li>
          )})}

      </ol>
    </div>
  )
}

export default Instructions;