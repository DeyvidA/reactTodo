import React, { useEffect, useState } from "react";
import { SectionRight } from "../layouts/sectionRight";
import { SectionLeft } from "../layouts/sectionLeft";
import { TodoCreate } from "../components/TodoCreate";
import { TodoList } from "../components/TodoList/";
import { Modal } from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose, faSave } from "@fortawesome/free-regular-svg-icons";

import "./App.css";

const App = () => {
  let initialTodos = JSON.parse(localStorage.getItem("todos"));
  if (!initialTodos) {
    initialTodos = [];
  }
  // localStorege color
  let initialThemes = JSON.parse(localStorage.getItem("themes"));
  if (!initialThemes) {
    initialThemes = [];
  }
  // localStorag

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
  // App UI
  return (
    <main className="main">
      <SectionLeft color={color} />

      <section className="section-main">
        <div className="section">
          <div className="header-main">
            <div className="header-main-options">
              <div className="header-title">
                <h2>To Do List</h2>
                <h1>Monday 31</h1>
              </div>
              <div className="dinamic-buttons">
                <div id="toolbox">{renderButtons()}</div>
              </div>
              <button className="open-modal-theme" onClick={() => opModal()}>
                <FontAwesomeIcon icon={faPalette} />
              </button>
            </div>
            <TodoCreate addTodo={addTodo} color={color} />
          </div>
          <TodoList
            todos={todos}
            color={color}
            saveTodos={saveTodos}
            showTodos={showTodos}
            totalTodos={totalTodos}
            setFilterTodo={setFilterTodo}
            completedTodos={completedTodos}
            deleteTodoCompleted={deleteTodoCompleted}
          />
        </div>
      </section>

      <SectionRight color={color} />

      {openModal && (
        <Modal>
          <div className="add-theme-container">
            <h1>Make your own theme</h1>
            <form action="">
              <div className="form">
                <div className="form-theme form-theme-name">
                  <label className="label-modal">Theme Name:</label>
                  <input type="text" required id="themeName" />
                </div>

                <div className="form-theme form-theme-primary-color">
                  <label className="label-modal">Primary Color:</label>
                  <input type="color" name="" id="primaryColor" />
                </div>

                <div className="form-theme form-theme-secundary-color">
                  <label className="label-modal">Secundary color:</label>
                  <input type="color" name="" id="secundaryColor" />
                </div>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="modal-button modal-button-cancel"
                  onClick={opModal}
                >
                  <FontAwesomeIcon icon={faWindowClose} />
                </button>
                <button onClick={addThemeValue} className="modal-button">
                  <FontAwesomeIcon icon={faSave} />
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default App;
