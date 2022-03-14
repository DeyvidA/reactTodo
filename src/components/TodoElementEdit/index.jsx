import React, { useState } from "react";
import "./TodoElementEdit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faSave } from "@fortawesome/free-regular-svg-icons";

const TodoElementEdit = ({ valueText, editState, newTextValue }) => {
  const [value, setValue] = useState(valueText);

  const saveEdit = (state) => {
    let catchValueText = document.getElementById("inputEdit").value;
    setValue(catchValueText);
    let validation = catchValueText.trim().length > 0;
    if (validation && state) {
      newTextValue(catchValueText);
      alert("Save");
      editState(false);
    } else if (validation === false && state) {
      alert("you Need write Something");
    }
  };

  return (
    <div className="edit-container">
      <textarea
        id="inputEdit"
        rows="1"
        className="auto-expand input text-area"
        value={value}
        placeholder={valueText}
        onChange={() => saveEdit(false)}
      />
      <div className="button-container">
        <button
          className="cancel-edit tooltip"
          onClick={() => editState(false)}
        >
          <span className="tooltip-text">Cancel</span>
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
        <button className="cancel-edit tooltip" onClick={() => saveEdit(true)}>
          <span className="tooltip-text">Save</span>
          <FontAwesomeIcon icon={faSave} />
        </button>
      </div>
    </div>
  );
};
export { TodoElementEdit };
