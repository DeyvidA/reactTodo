import "./SectionLeft.css";
import React, { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import { TodoContext } from "../../components/TodoContext";
import { TodoWeeklyPin } from "../../components/TodoWeeklyPin";

const SectionLeft = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const { todos, saveTodos } = useContext(TodoContext);

  let output =
    calendarDate.getFullYear() +
    String(calendarDate.getMonth() + 1).padStart(2, "0") +
    String(calendarDate.getDate()).padStart(2, "0");

  useEffect(() => {
    let out = "a" + output;
    todos.forEach((element) => {
      // console.log(out);
      if (element.out === out) {
        console.log("ya existe");
      }
    });
    // console.log("se Creo con exito");
    // const newTodo = [...todos];
    // newTodo.push({ out, todo: [] });
    // saveTodos(newTodo);
  }, [calendarDate]);

  const createNewTodo = () => {
    // Valida que exista
    // console.log("algo pasa");
    todos.forEach((element) => {
      let out = "a" + output;
      if (element.out === out) {
        console.log("ya existe", out);
      } else {
        console.log("se Creo con exito", out);
        // const newTodo = [...todos];
        // newTodo.push({ out, todo: [] });
        // saveTodos(newTodo);
      }
    });
  };

  // setTodoDay(output);
  return (
    <section className={`section-dates theme-background`}>
      <div className="section-dates-header">
        <div className={`header-logo theme`}></div>
        <h3>Nicarao Agency</h3>
      </div>
      <div className="section-reminders">
        <div className="reminders-title">
          <h4>Weekly Pinned</h4>
        </div>
        <TodoWeeklyPin />
        <div className="reminder reminder-calendar">
          <div>
            <Calendar
              onChange={setCalendarDate}
              value={calendarDate}
              onClick={() => createNewTodo()}
              onClickDay={() => createNewTodo()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionLeft };
