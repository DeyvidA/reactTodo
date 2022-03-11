import "./SectionLeft.css";
import React, { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import { TodoContext } from "../../components/TodoContext";
import { TodoWeeklyPin } from "../../components/TodoWeeklyPin";

const SectionLeft = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const { todos, saveTodos, setDay } = useContext(TodoContext);

  let output =
    calendarDate.getFullYear() +
    String(calendarDate.getMonth() + 1).padStart(2, "0") +
    String(calendarDate.getDate()).padStart(2, "0");

  useEffect(() => {
    let day = output;
    todos.forEach((element) => {
      // console.log(out);
      if (element.day === day) {
        // console.log("ya existe");
      } else if (element.day == day) {
        // console.log("se creo uno nuevo");
      }
      setDay(day);
    });

    // setDay(out);
    // console.log(out);

    // console.log("se Creo con exito");
    // const newTodo = [...todos];
    // newTodo.push({ out, todo: [] });
    // saveTodos(newTodo);
  }, [calendarDate]);

  const createNewTodo = () => {
    // Valida que exista
    // console.log("algo pasa");
    let day = output;
    todos.forEach((element) => {
      if (element.out === day) {
        // console.log("ya existe", out);
      } else {
        // console.log("se Creo con exito", out);
        const newTodo = [...todos];
        newTodo.push({ day, todo: [] });
        saveTodos(newTodo);
      }
    });
    setDay(day);
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
