import React, { useRef } from "react";
import "./style.css";

const SearchForm = props => {
  const ageInput = useRef();

  return (
    <form className="search">
      <div className="form-group">
      <label htmlFor="ageSort">Sort By Age:</label>
        <select className="form-control" 
        id="ageSort" 
        onChange={props.handleSortSelect}
        >
          <option>Select an Option</option>
          <option>Oldest to Youngest</option>
          <option>Youngest to Oldest</option>
        </select>
        <br />
        <label htmlFor="age">Filter By Age:</label>
        <input
          name="age"
          type="text"
          className="form-control"
          placeholder="Type in an age to filter by"
          id="age"
          onChange={props.handleAgeChange}
          ref={ageInput}
        />
        <button type="submit" onClick={props.handleFilterFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
      {/* <div className="form-group">
        <label htmlFor="ageSort">Sort By Age:</label>
        <select className="form-control" 
        id="ageSort" 
        onChange={props.handleSortSelect}
        >
          <option>Select an Option</option>
          <option>Oldest to Youngest</option>
          <option>Youngest to Oldest</option>
        </select>

      </div> */}
    </form>
  );
}

export default SearchForm;
