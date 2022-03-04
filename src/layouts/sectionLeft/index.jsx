import "./SectionLeft.css";
import React, { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import { TodoContext } from "../../components/TodoContext";
import { TodoWeeklyPin } from "../../components/TodoWeeklyPin";

const SectionLeft = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const { setTodoDay, todos } = useContext(TodoContext);

  useEffect(() => {
    console.log("nombre", calendarDate);
  }, [calendarDate]);

  const createNewTodo = () => {
    console.log("se creo");
    const newTodo = [...todos];
    newTodo.push({
      calendarDate,
      todo: [],
    });
  };
  setTodoDay(calendarDate);
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
              // onClickDay={(value, event) => console.log("Clicked day: ", value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionLeft };
