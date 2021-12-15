import React, {useState} from 'react';

const Title = ({recipeName, activeTime, totalTime, servingSize}) => {

  return (
    <div>
      <div>{recipeName}</div>
      <div>Cook Time: {activeTime} minutes</div>
      <div> Total Time: {totalTime} minutes</div>
      <div>Serves {servingSize}</div>
    </div>
  )
}

export default Title;