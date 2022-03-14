import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

const TodoCounter = () => {
  const { completedTodos, todos, todoIndex } = useContext(TodoContext);
  if (todoIndex >= 0) {
    var totalTodos = todos[todoIndex].todo.length;
  }

  return (
    <div>
      <p className={`items theme-text`}>
        You have {completedTodos} of {totalTodos} completed
      </p>
    </div>
  );
};

export { TodoCounter };
