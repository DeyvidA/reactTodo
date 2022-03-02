<<<<<<< HEAD
import React, { createContext, useEffect, useState } from "react";
// import moment from "moment";
=======
import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
>>>>>>> c8d8d9611d10190f499bbe5eb72b0a8c5159e870

const TodoContext = createContext();

var data;
const TodoProvider = (props) => {
<<<<<<< HEAD
  const context = (datas) => {
    // datas++;
    data = datas;
    console.log(data);
    return datas;
  };
  // console.log(data);
  let initialTodos = JSON.parse(localStorage.getItem(data));
  if (!initialTodos) {
    initialTodos = [];
  }
  // localStorege color
  let initialThemes = JSON.parse(localStorage.getItem("themes"));
  if (!initialThemes) {
    initialThemes = [];
  }
  // localStora

  const [todos, saveTodos] = useState(initialTodos);
  const [themes, saveThemes] = useState(initialThemes);
=======
  const [todos, saveTodos] = useLocalStorage("todos", []);
  const [themes, saveThemes] = useLocalStorage("themes", []);
>>>>>>> c8d8d9611d10190f499bbe5eb72b0a8c5159e870

  const [openModal, setOpenModal] = useState(false);
  const [filterTodo, setFilterTodo] = useState("all");

  const completedTodos = todos.filter((todo) => todo.completed).length;
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
  const addTodo = (text) => {
    console.log(text);
    const newTodo = [...todos];
    newTodo.push({
      text,
      completed: false,
      priority: false,
      priorityLevel: 1,
    });
    saveTodos(newTodo);
  };

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
  let showTodos = [];
  if (filterTodo === "all") {
    showTodos = todos;
    showTodos.sort((a, b) => {
      return b.priority - a.priority;
    });
    showTodos.sort((a, b) => {
      return b.priorityLevel - a.priorityLevel;
    });
  } else if (filterTodo === "active") {
    showTodos = todos.filter((todo) => todo.completed !== true);
  } else if (filterTodo === "completed") {
    showTodos = todos.filter((todo) => todo.completed !== false);
  } else if (filterTodo === "priority") {
    showTodos = todos.filter((todo) => todo.priority !== false);
  }

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

<<<<<<< HEAD
  // // DateTime
  // let dateOfMoth = moment().date();
  // let dayOfWeek = moment().day();

  // switch (dayOfWeek) {
  //   case 1:
  //     dayOfWeek = "Monday";
  //     break;
  //   case 2:
  //     dayOfWeek = "Tuestday";
  //     break;
  //   case 3:
  //     dayOfWeek = "Wednessday";
  //     break;
  //   case 4:
  //     dayOfWeek = "Thurstday";
  //     break;
  //   case 5:
  //     dayOfWeek = "Friday";
  //     break;
  //   case 6:
  //     dayOfWeek = "Saturday";
  //     break;
  //   default:
  //     dayOfWeek = "Sunday";
  //     break;
  // }

=======
>>>>>>> c8d8d9611d10190f499bbe5eb72b0a8c5159e870
  // Todos Actions
  const checkTodo = (index) => {
    let newTodo = todos.filter((todo) => todo.text);
    if (newTodo[index].completed) {
      newTodo[index].completed = false;
    } else {
      newTodo[index].completed = true;
    }
    newTodo = [...todos];
    saveTodos(newTodo);
  };

  const priorityTodo = (index) => {
    let newTodo = todos.filter((todo) => todo.text);
    // if (newTodo[index].priority) {
    //   if (newTodo[index].priorityLevel < 3) {
    //     newTodo[index].priorityLevel += 1;
    //   } else {
    //     newTodo[index].priority = false;
    //     newTodo[index].priorityLevel = 1;
    //   }
    // } else {
    //   newTodo[index].priority = true;
    //   newTodo[index].priorityLevel = 1;
    // }
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
    const newTodo = todos.filter((todo) => todo.text);
    newTodo.splice(index, 1);
    saveTodos(newTodo);
  };

  return (
    <TodoContext.Provider
      value={{
<<<<<<< HEAD
        color,
        // dayOfWeek,
        // dateOfMoth,
        renderButtons,
=======
        todos,
>>>>>>> c8d8d9611d10190f499bbe5eb72b0a8c5159e870
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
<<<<<<< HEAD
        openModal,
        addThemeValue,
        priorityTodo,
        checkTodo,
        deleteTodo,
        context,
=======
>>>>>>> c8d8d9611d10190f499bbe5eb72b0a8c5159e870
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
