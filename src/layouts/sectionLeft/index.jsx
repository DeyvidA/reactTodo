import "./SectionLeft.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { TodoWeeklyPin } from "../../components/TodoWeeklyPin";

const SectionLeft = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className={`section-dates theme-background`}>
      <div className="section-dates-header">
        <div className={`header-logo theme`}></div>
        <h3>Nicarao Agency</h3>
      </div>
      <div className="section-reminders">
        <div className="reminders-title">
          <h4>Weekly Pinned</h4>
          <button className={`theme-text`}>View All</button>
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
