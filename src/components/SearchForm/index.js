import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a name to begin"
          id="breed"
        />

      </div>
    </form>
  );
}

export default SearchForm;
