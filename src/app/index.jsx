import React, { Fragment, useEffect, useState } from "react";
import { SectionRight } from "../layouts/sectionRight";
import { SectionLeft } from "../layouts/sectionLeft";
import { TodoCreate } from "../components/TodoCreate";
import { TodoList } from "../components/TodoList/";

import "./App.css";

const App = () => {
  // localStorage
  let initialTodos = JSON.parse(localStorage.getItem("todos"));
  if (!initialTodos) {
    initialTodos = [];
  }

  const [todos, saveTodos] = useState(initialTodos);
  const [filterTodo, setFilterTodo] = useState("all");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // Todo Actions
  const addTodo = (text) => {
    const newTodo = [...todos];
    newTodo.push({ text, completed: false, priority: false });
    saveTodos(newTodo);
  };

  const deleteTodoCompleted = () => {
    const newTodo = todos.filter((todo) => todo.completed !== true);
    saveTodos(newTodo);
  };

  // Filter Todos
  let showTodos = [];
  if (filterTodo === "all") {
    showTodos = todos;
    showTodos.sort((a, b) => {
      return b.priority - a.priority;
    });
  } else if (filterTodo === "active") {
    showTodos = todos.filter((todo) => todo.completed !== true);
  } else if (filterTodo === "completed") {
    showTodos = todos.filter((todo) => todo.completed !== false);
  } else if (filterTodo === "priority") {
    showTodos = todos.filter((todo) => todo.priority !== false);
  }

  //  Local Storage State
  useEffect(() => {
    if (initialTodos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  }, [todos, initialTodos]);

  // App UI
  return (
    <Fragment>
      <main className="main">
        <SectionLeft />
        <section className="section-main">
          <div className="section">
            <div className="header-main">
              <div>
                <h2>To Do List</h2>
                <h2 className="days">Monday 31</h2>
              </div>
              <TodoCreate addTodo={addTodo} />
            </div>
            <TodoList
              todos={todos}
              saveTodos={saveTodos}
              showTodos={showTodos}
              totalTodos={totalTodos}
              setFilterTodo={setFilterTodo}
              completedTodos={completedTodos}
              deleteTodoCompleted={deleteTodoCompleted}
            />
          </div>
        </section>

        <SectionRight />
      </main>
    </Fragment>
  );
};

export default App;
