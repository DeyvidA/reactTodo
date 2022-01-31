import React from "react";
import { TodoElementEdit } from "../TodoElementEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import {
  faSave,
  faTrashAlt,
  faCheckCircle,
  faEdit,
} from "@fortawesome/free-regular-svg-icons";
import "./TodoItem.css";
import "../TodoCreate/TodoCreate.css";

const TodoItem = ({ todo, todos, index, saveTodos }) => {
  const [editTodo, setEditTodo] = React.useState(false);

  var oldTextValue;

  const newTextValue = (text) => {
    return (oldTextValue = text);
  };

  const checkTodo = () => {
    let newTodo = todos.filter((todo) => todo.text);
    if (newTodo[index].completed) {
      newTodo[index].completed = false;
    } else {
      newTodo[index].completed = true;
    }
    newTodo = [...todos];
    saveTodos(newTodo);
  };

  const priorityTodo = () => {
    let newTodo = todos.filter((todo) => todo.text);
    if (newTodo[index].priority) {
      newTodo[index].priority = false;
    } else {
      newTodo[index].priority = true;
    }
    newTodo = [...todos];
    saveTodos(newTodo);
  };

  const deleteTodo = () => {
    const newTodo = todos.filter((todo) => todo.text);
    newTodo.splice(index, 1);
    saveTodos(newTodo);
  };

  const editTodos = (text) => {
    var catchText;

    let element = document.getElementById("buttonEdit");
    element.ariaDisabled = true;
    if (oldTextValue === undefined) {
      catchText = text;
    } else {
      catchText = oldTextValue;
      alert("has been successfully saved");
    }
    let todoEdit = todos.filter((todo) => todo.text === text);
    if (todoEdit[0]) {
      todoEdit[0].text = catchText;
    }
    setEditTodo(!editTodo);
    todoEdit = [...todos];
    saveTodos(todoEdit);
  };

  const sendValue = (text) => {
    let sendValue = text;
    return sendValue;
  };

  return (
    <li
      id={todo.priority ? "task-priority" : "todo-item"}
      className={todo.completed ? "todo-item todo-item-complete " : "todo-item"}
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
            todo={todo}
            valueText={todo.text}
            saveTodos={saveTodos}
            sendValue={sendValue}
            editState={setEditTodo}
            newTextValue={newTextValue}
          />
        )}
      </div>
      <div className={"actions-buttons"}>
        <button
          // button-list button-save-edit tooltip
          className={`button-list button-edit tooltip`}
          onClick={() => editTodos(todo.text)}
        >
          <span className="toooltip-text">
            {editTodo ? "Save Edit " : "Edit Task"}
          </span>
          <FontAwesomeIcon icon={editTodo ? faSave : faEdit} />
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
              ? "  button-list priority-active tooltip"
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
