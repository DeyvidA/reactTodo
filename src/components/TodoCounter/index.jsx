import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ completedTodos, totalTodos, color }) => {
  return (
    <div>
      <p className={`items ${color}-text`}>
        You have {completedTodos} of {totalTodos} completed
      </p>
    </div>
  );
};

export { TodoCounter };
