import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <div>
      <p className={`items theme-text`}>
        You have {completedTodos} of {totalTodos} completed
      </p>
    </div>
  );
};

export { TodoCounter };
