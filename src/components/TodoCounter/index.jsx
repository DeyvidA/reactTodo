import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ completedTodos, totalTodos }) => {
  return (
    <div>
      <p className="items">
        You have {completedTodos} of {totalTodos} completed
      </p>
    </div>
  );
};

export { TodoCounter };
