import React from "react";
import "./AddPerson.css";

const addPerson = props => (
  <div className="AddPerson">
    <button onClick={props.addPerson}>Add Person</button>
  </div>
);

export default addPerson;
