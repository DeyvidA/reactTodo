import React from "react";
import { SectionRight } from "../layouts/sectionRight";
import { SectionLeft } from "../layouts/sectionLeft";
import { TodoCreate } from "../components/TodoCreate";
import { TodoList } from "../components/TodoList/";
import { Modal } from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose, faSave } from "@fortawesome/free-regular-svg-icons";
import { TodoProvider } from "../components/TodoContext";
import { TodoContext } from "../components/TodoContext";

import "./App.css";

const App = () => {
  // App UI
  const saveimages = () => {
    const image = document.getElementById("element").value;
    console.log(image);
  };
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {({
          color,
          dayOfWeek,
          dateOfMoth,
          renderButtons,
          opModal,
          todos,
          saveTodos,
          showTodos,
          totalTodos,
          setFilterTodo,
          completedTodos,
          deleteTodoCompleted,
          openModal,
          addThemeValue,
        }) => (
          <main className="main">
            <SectionLeft />

            <section className="section-main">
              <div className="section">
                <div className="header-main">
                  <div className="header-main-options">
                    <div className="header-title">
                      <h2>To Do List</h2>
                      <h1>
                        {dayOfWeek} {dateOfMoth}
                      </h1>
                    </div>
                    <div className="dinamic-buttons">
                      <div id="toolbox">{renderButtons()}</div>
                    </div>
                    <button
                      className="open-modal-theme"
                      onClick={() => opModal()}
                    >
                      <FontAwesomeIcon icon={faPalette} />
                    </button>
                  </div>
                  <TodoCreate />
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
              <form action="">
                <input
                  required
                  type="file"
                  id="element"
                  accept="image/png, image/jpeg"
                />
                <button type="button" onClick={saveimages}>
                  send
                </button>
              </form>
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
        )}
      </TodoContext.Consumer>
    </TodoProvider>
  );
};

export default App;
