import "./TodoList.css";
import React, { useContext } from "react";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoFilterButtons } from "../TodoFilterButtons";

const TodoList = () => {
  const { showTodos } = useContext(TodoContext);
  return (
    <section className="list-element">
      <TodoCounter />
      <TodoFilterButtons />
      <ul className="todo-list-container">
        {showTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
    </section>
  );
};

export { TodoList };
