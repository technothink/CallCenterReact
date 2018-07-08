import React from "react";
import SearchInput from "./SearchInput";

const style = {
  padding: "5px",
  margin: "5px",
  border: "1px solid black"
};

const buttonStyle = {
  position: "fixed",
  right: "10px",
  top: "10px",
  border: "0px"
};
const Header = props => {
  return (
    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
      <span className="mdc-toolbar__input">
        <div className="mdc-text-field">
          <SearchInput Searched={props.Searched} />
        </div>
      </span>
    </section>
  );
};

export default Header;
