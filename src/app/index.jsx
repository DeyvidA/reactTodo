import React from "react";
import moment from "moment";
import { Modal } from "../components/Modal";
import { TodoList } from "../components/TodoList";
import { TodoCreate } from "../components/TodoCreate";
import { TodoContext } from "../components/TodoContext";
import { TodoProvider } from "../components/TodoContext";
import { SectionLeft } from "../layouts/sectionLeft";
import { SectionRight } from "../layouts/sectionRight";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faSave } from "@fortawesome/free-regular-svg-icons";

import "./App.css";

const App = () => {
  // DateTime
  let dateOfMoth = moment().date();
  let dayOfWeek = moment().day();

  switch (dayOfWeek) {
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuestday";
      break;
    case 3:
      dayOfWeek = "Wednessday";
      break;
    case 4:
      dayOfWeek = "Thurstday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
    default:
      dayOfWeek = "Sunday";
      break;
  }

  // App UI
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {({ renderButtons, opModal, openModal, addTheme }) => (
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
                <TodoList />
              </div>
            </section>

            <SectionRight />

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
                      <button onClick={addTheme} className="modal-button">
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
