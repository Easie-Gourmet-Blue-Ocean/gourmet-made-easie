import React from 'react';

const Description = ({description}) => {

  //This is left like this as I am unsure how the data will back
  return (
    <div className="rp-description">
    <p>
      {description}
    </p>
    </div>
  )
}

export default Description;