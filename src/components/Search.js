import React from "react";

function Search({searchName, setSearchName}) {;
  console.log("Rendering Search component");
  function handleChange(e) {
    setSearchName(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchName}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
