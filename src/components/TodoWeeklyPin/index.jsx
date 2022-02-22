import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { TodoCreateWeeklyPin } from "../TodoCreateWeeklyPin";
import "./TodoWeeklyPin.css";

const TodoWeeklyPin = () => {
  const [createPin, setCreatePin] = useState(false);

  let initialPin = JSON.parse(localStorage.getItem("weeklyPin"));
  if (!initialPin) {
    initialPin = [];
  }

  const [pin, savePin] = useState(initialPin);
  //  Local Storage State
  useEffect(() => {
    if (initialPin) {
      localStorage.setItem("weeklyPin", JSON.stringify(pin));
    } else {
      localStorage.setItem("weeklyPin", JSON.stringify([]));
    }
  }, [pin, initialPin]);

  // Pin Actions
  const addPin = (values) => {
    const newPin = [...pin];
    newPin.push({
      title: values.pinTitle,
      date: values.pinDate,
      description: values.pinDescription,
    });
    savePin(newPin);
  };

  const deletePin = (index) => {
    const newTodo = pin.filter((pin) => pin);
    newTodo.splice(index, 1);
    savePin(newTodo);
  };

  return (
    <div className="weekly-pin-container">
      {createPin ? (
        <TodoCreateWeeklyPin setCreatePin={setCreatePin} addPin={addPin} />
      ) : (
        <ul className="weekly-pin-list">
          {pin.map((pin, index) => (
            <li key={index} id={index} className="pin-element">
              <button className="pin-icon"></button>
              <div className="pin-data">
                <div className="pin-header">
                  {pin.title}
                  <div className="pin-date">{pin.date}</div>
                </div>
                {pin.description}
              </div>
              <button
                className="pin-icon pin-delete"
                onClick={() => deletePin(index)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div
        className={createPin ? `disabled` : `weekly-pin-add`}
        onClick={() => setCreatePin(true)}
      >
        <button>
          <FontAwesomeIcon icon={faPlus} onClick={() => setCreatePin(true)} />
        </button>
        <h3>Add New Weekly Pin</h3>
      </div>
    </div>
  );
};

export { TodoWeeklyPin };
