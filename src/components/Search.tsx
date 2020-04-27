import React, { useState } from "react";

type SearchProps = { search: Function };

const Search = ({search}: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchInputChange = (event: React.FormEvent<HTMLInputElement>) => setSearchTerm(event.currentTarget.value);

  const resetSearchInput = () => setSearchTerm("");

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    search(searchTerm);
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