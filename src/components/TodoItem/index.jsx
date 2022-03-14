import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import { TodoElementEdit } from "../TodoElementEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faMedal } from "@fortawesome/free-solid-svg-icons";
import "../TodoCreate/TodoCreate.css";
import "./TodoItem.css";
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
    todoIndex,
  } = useContext(TodoContext);

  const [editTodo, setEditTodo] = useState(false);

  const newTextValue = (text) => {
    let todoEdit = todos[todoIndex].todo.filter((todo) => todo.text);

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
    let todoEdit = todos[todoIndex].todo;
    if (todoEdit) {
      todoEdit[index].priorityLevel = priorityLevel;
    }

    todoEdit = [...todos];
    saveTodos(todoEdit);
  };

  const asignPriorityLevel = (level) => {
    let todoEdit = todos[todoIndex].todo;

    todoEdit[index].priorityLevel = level;
    todoEdit[index].priorityEdit = false;
    todoEdit[index].priority = true;

    todoEdit = [...todos];
    saveTodos(todoEdit);
  };

  return (
    <li
      id={
        todo.priority
          ? todo.priorityLevel === "1"
            ? "bronze"
            : todo.priorityLevel === "2"
            ? "silver"
            : todo.priorityLevel === "3"
            ? "gold"
            : "normal"
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
          <button
            className={
              todo.priority
                ? todo.priorityLevel === "1"
                  ? "button-list tooltip bronze"
                  : todo.priorityLevel === "2"
                  ? "button-list tooltip silver"
                  : todo.priorityLevel === "3"
                  ? "button-list tooltip gold"
                  : "display-none"
                : "button-list priority-desable tooltip"
            }
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
              <FontAwesomeIcon icon={faMedal} />
            )}
          </button>
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
              ? todo.priorityLevel === "1"
                ? "button-list tooltip bronze"
                : todo.priorityLevel === "2"
                ? "button-list tooltip silver"
                : todo.priorityLevel === "3"
                ? "button-list tooltip gold"
                : "button-list tooltip normal"
              : "button-list priority-desable  tooltip"
          }
        >
          <span className="toooltip-text">Set Priority</span>
          <FontAwesomeIcon icon={faCrown} />
        </button>
      </div>
      <div className={todo.priorityEdit ? "absolute" : "disable"}>
        <button
          className="priorityButtons"
          onClick={() => asignPriorityLevel("3")}
        >
          {" "}
          <FontAwesomeIcon className="gold" icon={faMedal} /> Priority
        </button>
        <button
          className="priorityButtons"
          onClick={() => asignPriorityLevel("2")}
        >
          {" "}
          <FontAwesomeIcon className="silver" icon={faMedal} /> Priority
        </button>
        <button
          className="priorityButtons"
          onClick={() => asignPriorityLevel("1")}
        >
          {" "}
          <FontAwesomeIcon className="bronze" icon={faMedal} /> Priority
        </button>
        <button
          className="priorityButtons"
          onClick={() => asignPriorityLevel("0")}
        >
          Normal
        </button>
        <button className="priorityButtons" onClick={() => priorityTodo(index)}>
          isn't
        </button>
      </div>
    </li>
  );
};

export { TodoItem };
