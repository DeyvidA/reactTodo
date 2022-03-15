import "./TodoList.css";
import React, { useContext } from "react";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoFilterButtons } from "../TodoFilterButtons";

const TodoList = () => {
  const { filterTodo, todos, todoIndex } = useContext(TodoContext);

  let showTodos = [];
  if (filterTodo === "all") {
    if (todoIndex >= 0) {
      showTodos = todos[todoIndex].todo.sort((a, b) => {
        return b.priority - a.priority;
      });
      showTodos = todos[todoIndex].todo.sort((a, b) => {
        return b.priorityLevel - a.priorityLevel;
      });
    }
  } else if (filterTodo === "active") {
    showTodos = todos[todoIndex].todo.filter((todo) => todo.completed !== true);
  } else if (filterTodo === "completed") {
    showTodos = todos[todoIndex].todo.filter(
      (todo) => todo.completed !== false
    );
  } else if (filterTodo === "priority") {
    showTodos = todos[todoIndex].todo.filter((todo) => todo.priority !== false);
  }

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
