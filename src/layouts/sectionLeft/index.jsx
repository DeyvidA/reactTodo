import "./SectionLeft.css";
import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import { TodoContext } from "../../components/TodoContext";
import { TodoWeeklyPin } from "../../components/TodoWeeklyPin";

const SectionLeft = () => {
  const [value, onChange] = useState(new Date());
  const { context } = useContext(TodoContext);

  context(value);
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
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionLeft };
