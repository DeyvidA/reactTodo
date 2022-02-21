import React from "react";
import { TodoElementEdit } from "../TodoElementEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import {
  faTrashAlt,
  faCheckCircle,
  faEdit,
} from "@fortawesome/free-regular-svg-icons";
import "./TodoItem.css";
import "../TodoCreate/TodoCreate.css";

const TodoItem = ({ todo, todos, index, saveTodos }) => {
  const [editTodo, setEditTodo] = React.useState(false);

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
      if (newTodo[index].priorityLevel < 3) {
        newTodo[index].priorityLevel += 1;
      } else {
        newTodo[index].priority = false;
        newTodo[index].priorityLevel = 1;
      }
    } else {
      newTodo[index].priority = true;
      newTodo[index].priorityLevel = 1;
    }
    newTodo = [...todos];
    saveTodos(newTodo);
  };

  const deleteTodo = () => {
    const newTodo = todos.filter((todo) => todo.text);
    newTodo.splice(index, 1);
    saveTodos(newTodo);
  };
  return (
    <li
      id={
        todo.priority
          ? todo.priorityLevel == "1"
            ? "bronze"
            : todo.priorityLevel == "2"
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
          onClick={() => priorityTodo()}
          className={
            todo.priority
              ? todo.priorityLevel == "1"
                ? "button-list tooltip bronze"
                : todo.priorityLevel == "2"
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
