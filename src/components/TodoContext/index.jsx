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

  const [priorityLevel, setPriorityLevel] = useState(false);

  // Theme actions
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

  const hexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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

  return (
    <TodoContext.Provider
      value={{
        day,
        todos,
        setDay,
        addTheme,
        todoIndex,
        openModal,
        saveTodos,
        filterTodo,
        setOpenModal,
        renderButtons,
        setFilterTodo,
        priorityLevel,
        completedTodos,
        setPriorityLevel,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
