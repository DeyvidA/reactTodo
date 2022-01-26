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

  const onExpandableTextareaInput = ({ target: elm }) => {
    // make sure the input event originated from a textarea and it"s desired to be auto-expandable
    if (!elm.classList.contains("auto-expand") || !elm.nodeName === "TEXTAREA")
      return;

    var minRows = elm.getAttribute("data-min-rows") | 0,
      rows;
    !elm._baseScrollHeight && getScrollHeight(elm);

    elm.rows = minRows;
    rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16);
    elm.rows = minRows + rows;
  };

  // global delegated event listener
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
      <button key={addTodo} className="add-button" onClick={addButton}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </section>
  );
};

export { TodoCreate };
