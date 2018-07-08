import React from "react";

const style = {
  padding: "5px",
  margin: "5px",
  width: "40%",
  height: "45px",
  borderRadius: "5px"
};

const SearchInput = props => {
  return (
    <input
      type="text"
      placeholder="Search anything... "
      className="mdc-text-field__input"
      onKeyPress={event => props.Searched(event)}
    />
  );
};

export default SearchInput;
