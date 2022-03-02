import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import { TodoElementEdit } from "../TodoElementEdit";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faMedal } from "@fortawesome/free-solid-svg-icons";
import "../TodoCreate/TodoCreate.css";
import "./TodoItem.css";
=======
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
>>>>>>> c8d8d9611d10190f499bbe5eb72b0a8c5159e870
import {
  faTrashAlt,
  faCheckCircle,
  faEdit,
} from "@fortawesome/free-regular-svg-icons";

import "./TodoItem.css";

const TodoItem = ({ index, todo }) => {
  const {
    todos,
    saveTodos,
    checkTodo,
    deleteTodo,
    priorityTodo,
    priorityLevel,
    setPriorityLevel,
  } = useContext(TodoContext);

  const [priorityLevel, setPriorityLevel] = useState(false);

  const [editTodo, setEditTodo] = useState(false);

  const newTextValue = (text) => {
    let todoEdit = todos.filter((todo) => todo.text);
    if (todoEdit[index]) {
      todoEdit[index].text = text;
    }
    setEditTodo(!editTodo);
    todoEdit = [...todos];
    saveTodos(todoEdit);
    return text;
  };
  const enterKey = (event) => {
    let catchValue = event.target.value;
    let validation = event.target.value.trim().length > 0;
    if (event.charCode === 13) {
      setPriorityLevel(false);
      editPriorityLevel(catchValue, index);
    } else if (event.charCode === 13 && validation) {
      alert("You need write something");
    }
  };
  const editPriorityLevel = (priorityLevel, index) => {
    let todoEdit = todos.filter((todo) => todo.text);
    if (todoEdit[0]) {
      console.log(priorityLevel);
      todoEdit[index].priorityLevel = priorityLevel;
    }
    todoEdit = [...todos];
    saveTodos(todoEdit);
  };

  const editPriorityLevel = (priorityLevel, index) => {
    let todoEdit = todos.filter((todo) => todo.text);
    if (todoEdit[0]) {
      console.log(priorityLevel);
      todoEdit[index].priorityLevel = priorityLevel;
    }
    todoEdit = [...todos];
    saveTodos(todoEdit);
  };

  const enterKey = (event) => {
    let catchValue = event.target.value;
    let validation = event.target.value.trim().length > 0;
    if (event.charCode === 13) {
      setPriorityLevel(false);
      editPriorityLevel(catchValue, index);
    } else if (event.charCode === 13 && validation) {
      alert("You need write something");
    }
  };

  return (
    <li
      id={
        todo.priority
          ? todo.priorityLevel === 1
            ? "bronze"
            : todo.priorityLevel === 2
            ? "silver"
            : "gold"
          : "default"
      }
      className={
        todo.completed
          ? `todo-item todo-item-complete theme-background-complete`
          : `todo-item theme-background`
      }
    >
      <div
        id={editTodo ? "disabled" : "n"}
        className={`circulo ${todo.completed}`}
      >
        <button
          className={editTodo ? `display-none ` : `button-list tooltip`}
          onClick={() => checkTodo(index)}
        >
          <span className="toooltip-text tooltip-text-right">
            {todo.completed ? "uncheck" : "Complete"}
          </span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
      </div>
      <div
        key={todo.text}
        className={
          editTodo
            ? `text-edit`
            : `todo-text ${todo.completed && "todo-text-check"}`
        }
      >
        {editTodo === false ? (
          todo.text
        ) : (
          <TodoElementEdit
            valueText={todo.text}
            editState={setEditTodo}
            newTextValue={newTextValue}
          />
        )}
      </div>
      <div className={"actions-buttons"}>
        {todo.priority && (
<<<<<<< HEAD
          <button
            className={
              todo.priority
                ? todo.priorityLevel === "1"
                  ? "button-list tooltip bronze"
                  : todo.priorityLevel === "2"
                  ? "button-list tooltip silver"
                  : "button-list tooltip gold"
                : "button-list priority-desable tooltip"
            }
=======
          <div
            className="priority-level"
>>>>>>> c8d8d9611d10190f499bbe5eb72b0a8c5159e870
            onDoubleClick={() => setPriorityLevel(true)}
          >
            {priorityLevel ? (
              <input
                id="priorityLevelValue"
                className="priority-level"
                onKeyPress={enterKey}
                onChange={enterKey}
                type="number"
                max="3"
                min="1"
              />
            ) : (
<<<<<<< HEAD
              <FontAwesomeIcon icon={faMedal} />
            )}
          </button>
=======
              todo.priorityLevel
            )}
          </div>
>>>>>>> c8d8d9611d10190f499bbe5eb72b0a8c5159e870
        )}
        <button
          className={editTodo ? `disable` : `button-list button-edit tooltip`}
          onClick={() => setEditTodo(!editTodo)}
        >
          <span className="toooltip-text">{"Edit Task"}</span>
          <FontAwesomeIcon icon={faEdit} />
        </button>

        <button
          onClick={() => deleteTodo(index)}
          className={
            editTodo
              ? `display-none button-list`
              : `button-list button-delete tooltip`
          }
        >
          <span className="toooltip-text">Delete task</span>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button
          id={editTodo ? "disabled" : "buttonEdit"}
          onClick={() => priorityTodo(index)}
          className={
            todo.priority
<<<<<<< HEAD
              ? todo.priorityLevel === "1"
                ? "button-list tooltip bronze"
                : todo.priorityLevel === "2"
=======
              ? todo.priorityLevel === 1
                ? "button-list tooltip bronze"
                : todo.priorityLevel === 2
>>>>>>> c8d8d9611d10190f499bbe5eb72b0a8c5159e870
                ? "button-list tooltip silver"
                : "button-list tooltip gold"
              : "button-list priority-desable tooltip"
          }
        >
          <span className="toooltip-text">Set Priority</span>
          <FontAwesomeIcon icon={faCrown} />
        </button>
      </div>
    </li>
  );
};

export { TodoItem };
