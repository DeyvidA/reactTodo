import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ completedTodos, totalTodos, color }) => {
  return (
    <div>
      <p className={`items theme-text`}>
        You have {completedTodos} of {totalTodos} completed
      </p>
    </div>
  );
};

export { TodoCounter };
