import React from "react";
import "./TodoCreate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoCreate = ({ addTodo }) => {
  // Add Todo con enter

  const addButton = () => {
    let inputValue = document.getElementById("textArea").value;
    let validation = inputValue.trim();

    if (validation) {
      addTodo(inputValue);
      document.getElementById("textArea").value = "";
    } else if (inputValue === "") {
      alert("You need write something");
    } else if (validation.length === 0) {
      alert("You can not add 'Blank Spaces'");
    }
  };

  const getScrollHeight = (elm) => {
    var savedValue = elm.value;
    elm.value = "";
    elm._baseScrollHeight = elm.scrollHeight;
    elm.value = savedValue;
  };

  const onExpandableTextareaInput = ({ target }) => {
    if (
      !target.classList.contains("auto-expand") ||
      !target.nodeName === "TEXTAREA"
    )
      return;

    var minRows = target.getAttribute("data-min-rows") | 0,
      rows;
    !target._baseScrollHeight && getScrollHeight(target);

    target.rows = minRows;
    rows = Math.ceil((target.scrollHeight - target._baseScrollHeight) / 16);
    target.rows = minRows + rows;
  };

  document.addEventListener("input", onExpandableTextareaInput);

  return (
    <section className="create-todo">
      <textarea
        rows="1"
        id="textArea"
        data-min-rows="1"
        className="input auto-expand"
        placeholder="Create a new todo..."
      ></textarea>
      <button key={addTodo} className="add-button tooltip" onClick={addButton}>
        <FontAwesomeIcon icon={faPlus} />
        <span className="toltip-text">Add Task</span>
      </button>
    </section>
  );
};

export { TodoCreate };
