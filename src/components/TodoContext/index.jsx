import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const [todos, saveTodos] = useLocalStorage("todos", []);
  const [themes, saveThemes] = useLocalStorage("themes", []);

  const [openModal, setOpenModal] = useState(false);
  const [filterTodo, setFilterTodo] = useState("all");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  // const totalTodos = todos[0].todo.length;
  const totalTodos = todos.length;

  const themeValues = (valor) => {
    const root = document.querySelector(":root");

    themes.forEach((colors) => {
      if (colors.titleTheme === valor) {
        root.style.setProperty("--main-color--", colors.mainColor);
        root.style.setProperty("--secundary-color--", colors.secundaryColor);
        return null;
      } else {
        return null;
      }
    });
  };
  const [priorityLevel, setPriorityLevel] = useState(false);
  // Todo Actions

  const deleteTodoCompleted = () => {
    const newTodo = todos.filter((todo) => todo.completed !== true);
    saveTodos(newTodo);
  };

  const addTheme = () => {
    let titleTheme = document.getElementById("themeName").value;
    let mainColor = document.getElementById("primaryColor").value;
    let secundaryColor = document.getElementById("secundaryColor").value;

    if (titleTheme === "") {
      alert("You need to write the Theme Name");
    } else {
      const newTheme = [...themes];
      newTheme.push({ titleTheme, mainColor, secundaryColor });
      saveThemes(newTheme);
    }
  };

  // Filter Todos
  var showTodos = [];
  if (filterTodo === "all") {
    showTodos = todos[0].todo;

    showTodos.sort((a, b) => {
      return b.priority - a.priority;
    });
    showTodos.sort((a, b) => {
      return b.priorityLevel - a.priorityLevel;
    });
  } else if (filterTodo === "active") {
    showTodos = todos[0].todo.filter((todo) => todo.completed !== true);
  } else if (filterTodo === "completed") {
    showTodos = todos[0].todo.filter((todo) => todo.completed !== false);
  } else if (filterTodo === "priority") {
    showTodos = todos[0].todo.filter((todo) => todo.priority !== false);
  }

  const addTodo = (text) => {
    const newTodo = [...todos];
    console.log(newTodo);
    newTodo[0].todo.push({
      text,
      completed: false,
      priority: false,
      priorityLevel: 1,
    });
    saveTodos(newTodo);
  };

  // Color triggers
  const renderButtons = () => {
    return themes.map((color, index) => {
      return (
        <li
          key={index}
          className={"tooltip-theme color-selector " + color.titleTheme}
          style={{ background: color.mainColor }}
          onClick={() => themeValues(color.titleTheme)}
        >
          <span className="tooltip-theme-text tooltip-theme-text">
            {color.titleTheme}
          </span>
        </li>
      );
    });
  };
  const opModal = () => {
    setOpenModal(!openModal);
  };

  // Todos Actions
  const checkTodo = (index) => {
    let newTodo = todos[0].todo.filter((todo) => todo.text);
    if (newTodo[index].completed) {
      newTodo[index].completed = false;
    } else {
      newTodo[index].completed = true;
    }
    newTodo = [...todos];
    saveTodos(newTodo);
  };

  const priorityTodo = (index) => {
    // let newTodo = todos;
    let newTodo = todos[0].todo;

    console.log(newTodo);
    if (newTodo[index].priority) {
      newTodo[index].priorityLevel = "0";
      newTodo[index].priority = false;
    } else {
      newTodo[index].priority = true;
      newTodo[index].priorityLevel = "1";
    }
    newTodo = [...todos];
    saveTodos(newTodo);
  };

  const deleteTodo = (index) => {
    let newTodo = todos;
    newTodo[0].todo.splice(index, 1);
    saveTodos(newTodo);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        opModal,
        addTodo,
        addTheme,
        saveTodos,
        openModal,
        checkTodo,
        showTodos,
        totalTodos,
        deleteTodo,
        priorityTodo,
        renderButtons,
        setFilterTodo,
        priorityLevel,
        completedTodos,
        setPriorityLevel,
        deleteTodoCompleted,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
