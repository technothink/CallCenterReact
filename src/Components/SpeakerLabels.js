import React from "react";

const style = {
  padding: "10px",
  border: "1px solid lightGrey",
  fontSize: "13px",

  margin: "10px",
  borderRadius: "5px",
  textAlign: "left"
};
const SpeakerLables = props => <div style={style}>{props.content}</div>;

export default SpeakerLables;
