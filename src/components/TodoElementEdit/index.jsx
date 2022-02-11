import React from "react";
import "./TodoElementEdit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

const TodoElementEdit = ({ valueText, editState, newTextValue }) => {
  const [value, setValue] = React.useState(valueText);

  const sendValue = (text) => {
    let newValue = text;
    return newTextValue(newValue);
  };

  let originalValue = value;

  const enterKey = (event) => {
    let catchValueText = event.target.value;
    setValue(catchValueText);
    let validation = event.target.value.trim().length > 0;

    if (event.charCode === 13 && validation) {
      sendValue(catchValueText);
      alert("has been successfully saved");
    } else if (event.charCode === 13 && validation) {
      alert("You need write something");
    }
  };

  const closeEdit = () => {
    editState(false);
  };

  return (
    <div className="edit-container">
      <input
        className="input-edit"
        value={value}
        onKeyPress={enterKey}
        onChange={enterKey}
        placeholder={originalValue}
      />
      <div className="button-container">
        <button className="cancel-edit tooltip" onClick={closeEdit}>
          <span className="tooltip-text">Cancel</span>
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
      </div>
    </div>
  );
};
export { TodoElementEdit };
