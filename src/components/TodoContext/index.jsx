import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const [day, setDay] = useState("");
  const [todos, saveTodos] = useLocalStorage("todos", []);
  const [themes, saveThemes] = useLocalStorage("themes", []);

  const [openModal, setOpenModal] = useState(false);
  const [filterTodo, setFilterTodo] = useState("all");

  let todoIndex = todos.findIndex((dayArray) => dayArray.day === day);
  const completedTodos = todos.filter((todo) => todo.completed).length;

  const themeValues = (valor) => {
    const root = document.querySelector(":root");

    themes.forEach((colors) => {
      if (colors.titleTheme === valor) {
        root.style.setProperty("--main-color--", colors.mainColor);
        root.style.setProperty("--secundary-color--", colors.secundaryColor);
        root.style.setProperty("--main-text-color--", colors.mainColorText);
        root.style.setProperty(
          "--secundary-text-color--",
          colors.secundaryColorText
        );
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
  const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const addTheme = () => {
    let titleTheme = document.getElementById("themeName").value;
    let mainColor = document.getElementById("primaryColor").value;
    let secundaryColor = document.getElementById("secundaryColor").value;
    let mainColorText;
    let secundaryColorText;

    let o = Math.round(
      (parseInt(hexToRgb(mainColor).r) * 299 +
        parseInt(hexToRgb(mainColor).g) * 587 +
        parseInt(hexToRgb(mainColor).b) * 114) /
        1000
    );

    if (o > 125) {
      mainColorText = "black";
      secundaryColorText = "white";
    } else {
      mainColorText = "white";
      secundaryColorText = "black";
    }

    if (titleTheme === "") {
      alert("You need to write the Theme Name");
    } else {
      const newTheme = [...themes];
      newTheme.push({
        titleTheme,
        mainColor,
        secundaryColor,
        mainColorText,
        secundaryColorText,
      });
      saveThemes(newTheme);
    }
  };

  // Filter Todos
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

  const addTodo = (text) => {
    const newTodo = [...todos];
    newTodo[todoIndex].todo.push({
      text,
      completed: false,
      priority: false,
      priorityLevel: 0,
      priorityEdit: false,
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
    let newTodo = todos[todoIndex].todo;
    if (newTodo[index].completed) {
      newTodo[index].completed = false;
    } else {
      newTodo[index].completed = true;
    }
    newTodo = [...todos];
    saveTodos(newTodo);
  };

  const priorityTodo = (index) => {
    let newTodo = todos[todoIndex].todo;

    if (newTodo[index].priorityEdit) {
      newTodo[index].priorityLevel = "0";
      newTodo[index].priority = false;
      newTodo[index].priorityEdit = false;
    } else {
      newTodo[index].priorityEdit = true;
    }

    newTodo = [...todos];
    saveTodos(newTodo);
  };

  const deleteTodo = (index) => {
    let newTodo = todos;
    newTodo[todoIndex].todo.splice(index, 1);
    console.log(newTodo[todoIndex].todo);
    newTodo = [...todos];
    saveTodos(newTodo);
  };

  return (
    <TodoContext.Provider
      value={{
        day,
        todos,
        setDay,
        opModal,
        addTodo,
        addTheme,
        saveTodos,
        openModal,
        checkTodo,
        showTodos,
        deleteTodo,
        todoIndex,
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
