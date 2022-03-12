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

  let day = output;
  useEffect(() => {
    todos.forEach((element) => {
      if (element.day === day) {
        console.log("ya estaba");
      } else {
        const newTodo = [...todos];
        newTodo.push({ day, todo: [] });
        saveTodos(newTodo);
      }
      setDay(day);
    });
  }, [calendarDate]);
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
            <Calendar onChange={setCalendarDate} value={calendarDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionLeft };
