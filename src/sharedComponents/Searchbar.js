import React from "react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
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
        <button>Submit</button>
        </div>
    </div>
  );
};

export default Searchbar;
