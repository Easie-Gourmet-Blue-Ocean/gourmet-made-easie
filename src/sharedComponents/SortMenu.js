import React, {useState} from "react";

const SortMenu = (props) => {

    const sortOptions = ['relevent', 'highest rated', 'newest'];

    return (
        <>
          <select onChange={e => props.setStateHook(e.target.value)}>
              {sortOptions.map((value, index) => {
                  return <option key={index} value={value}>{value}</option>
              })}
          </select>
        </>
    )
}

export default SortMenu;