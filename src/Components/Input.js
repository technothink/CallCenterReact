import React from "react";
import "./Input.css";

const input = props => (
  <div>
    {props.label}
    <input
      type={props.type}
      className="TextStyle"
      value={props.value}
      onChange={event => props.Changed(event)}
      onKeyPress={props.entered}
    />
  </div>
);

export default input;
