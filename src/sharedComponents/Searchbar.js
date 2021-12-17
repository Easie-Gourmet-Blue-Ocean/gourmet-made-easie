import React from "react";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm)
  };

  return (
    <div className="searchbar-container">
        <input
        className="searchbar"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        />
        <div className="search-submit">
          <Link
            to='/search'
            state={{searchTerm2: searchTerm}}
          >
            <button className="button-class">Submit</button>
          </Link>
        </div>
    </div>
  );
};

export default Searchbar;
