import React, {useState} from 'react';

const Title = ({recipeName, activeTime, totalTime, servingSize}) => {

  return (
    <div className="rp-title-container">
      <div className="rp-name">{recipeName}</div>
      <div className="rp-cook-time">Cook Time: {activeTime} minutes</div>
      <div className="rp-total-time"> Total Time: {totalTime} minutes</div>
      <div className="rp-serving-size">Serves {servingSize}</div>
    </div>
  )
}

export default Title;