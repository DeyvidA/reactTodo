import "./TodoList.css";
import React, { useContext } from "react";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoFilterButtons } from "../TodoFilterButtons";

const TodoList = () => {
  const {
    color,
    showTodos,
    totalTodos,
    completedTodos,
    setFilterTodo,
    deleteTodoCompleted,
  } = useContext(TodoContext);
  return (
    <section className="list-element">
      <TodoCounter
        color={color}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoFilterButtons
        setFilterTodo={setFilterTodo}
        deleteTodoCompleted={deleteTodoCompleted}
      />
      <ul className="todo-list-container">
        {showTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
    </section>
  );
};

export { TodoList };
