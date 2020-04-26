import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchInputChange = (event) => setSearchTerm(event.target.value);

  const resetSearchInput = () => setSearchTerm("");

  const handleSearch = (event) => {
    event.preventDefault();
    props.search(searchTerm);
    resetSearchInput();
  };

  return (
    <form className="search">
      <input value={searchTerm} onChange={onSearchInputChange} type="text" />
      <input onClick={handleSearch} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;