import React, { createContext, useEffect, useState } from "react";
// import moment from "moment";

const TodoContext = createContext();

var data;
const TodoProvider = (props) => {
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

  const [openModal, setOpenModal] = useState(false);
  const [filterTodo, setFilterTodo] = useState("all");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const [color, setColor] = useState("blue");

  const themeValues = (valor) => {
    themes.forEach((colors) => {
      if (colors.title === valor) {
        setColor(colors.title);
        setPrimaryColorTheme(colors.primaryColor);
        setSecundaryColorTheme(colors.secundaryColor);
        return null;
      } else {
        return null;
      }
    });
  };

  // Todo Actions
  const addTodo = (text) => {
    console.log(text);
    const newTodo = [...todos];
    newTodo.push({ text, completed: false, priority: false, priorityLevel: 1 });
    saveTodos(newTodo);
  };

  const deleteTodoCompleted = () => {
    const newTodo = todos.filter((todo) => todo.completed !== true);
    saveTodos(newTodo);
  };

  const addTheme = (title, primaryColor, secundaryColor) => {
    const newTheme = [...themes];
    newTheme.push({ title, primaryColor, secundaryColor });
    saveThemes(newTheme);
  };

  const addThemeValue = () => {
    let titleTheme = document.getElementById("themeName").value;
    let mainColor = document.getElementById("primaryColor").value;
    let secondColor = document.getElementById("secundaryColor").value;
    if (titleTheme === "") {
      alert("You need to write the Theme Name");
    } else {
      addTheme(titleTheme, mainColor, secondColor);
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

  //  Local Storage State
  useEffect(() => {
    if (initialTodos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  }, [todos, initialTodos]);

  useEffect(() => {
    if (initialThemes) {
      localStorage.setItem("themes", JSON.stringify(themes));
    } else {
      localStorage.setItem("themes", JSON.stringify([]));
    }
  }, [themes, initialThemes]);

  // Dinamic Color
  const root = document.querySelector(":root");

  const setPrimaryColorTheme = (color) => {
    root.style.setProperty("--main-color--", color);
  };

  const setSecundaryColorTheme = (color) => {
    root.style.setProperty("--secundary-color--", color);
  };

  // Color triggers
  const renderButtons = () => {
    return themes.map((color, index) => {
      return (
        <li
          key={index}
          className={"tooltip-theme color-selector " + color.title}
          style={{ background: color.primaryColor }}
          onClick={() => themeValues(color.title)}
        >
          <span className="tooltip-theme-text tooltip-theme-text">
            {color.title}
          </span>
        </li>
      );
    });
  };
  const opModal = () => {
    setOpenModal(!openModal);
  };

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
        color,
        // dayOfWeek,
        // dateOfMoth,
        renderButtons,
        opModal,
        addTodo,
        todos,
        saveTodos,
        showTodos,
        totalTodos,
        setFilterTodo,
        completedTodos,
        deleteTodoCompleted,
        openModal,
        addThemeValue,
        priorityTodo,
        checkTodo,
        deleteTodo,
        context,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
