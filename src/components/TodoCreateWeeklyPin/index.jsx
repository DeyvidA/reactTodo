import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./TodoCreateWeeklypin.css";

const TodoCreateWeeklyPin = ({ addPin, setCreatePin }) => {
  // Add Todo WeeklyPin.
  const addButton = () => {
    let pinTitle = document.getElementById("pinTitle").value;
    let pinDate = document.getElementById("pinDate").value;
    let pinDescription = document.getElementById("pinDescription").value;
    let validation = pinTitle.trim();

    if (validation) {
      addPin({ pinTitle, pinDate, pinDescription });
      document.getElementById("textArea").value = "";
      setCreatePin(false);
    } else {
      alert("Add Title");
    }
  };

  return (
    <section className={`create-pin theme-background`}>
      <div className="pin-data pin">
        <label>Title</label>
        <input type="text" name="" id="pinTitle" required />
      </div>
      <div className="pin-data date-pin">
        <label>Date (Optional)</label>
        <input type="date" name="" id="pinDate" />
      </div>
      <div className="pin-data pin-description">
        <label> Description:</label>
        <textarea
          max="50"
          data-min-rows="1"
          id="pinDescription"
          className="pin-description-input"
          placeholder="Create a new todo..."
        ></textarea>
      </div>
      <div className="pin-data pin-add">
        <button
          key={addPin}
          className="pin-add-button tooltip"
          onClick={addButton}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className="toltip-text">Add Pin</span>
        </button>
        <button
          key={addPin}
          className="pin-add-button tooltip"
          onClick={() => setCreatePin(false)}
        >
          <FontAwesomeIcon icon={faExclamationCircle} />
          <span className="toltip-text">Cancel</span>
        </button>
      </div>
    </section>
  );
};

export { TodoCreateWeeklyPin };
