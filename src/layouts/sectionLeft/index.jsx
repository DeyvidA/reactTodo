import "./SectionLeft.css";
import React, { useState } from "react";
import Calendar from "react-calendar";

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
        <div className="reminders-container">
          <div className="reminder reminder1">
            <div className="reminder-icon">
              <div className={`icon theme`}></div>
            </div>
            <div className="reminder-text">
              <div className="reminder-title">
                <h4>Call doctor for test</h4>
                <span className="reminder-date">15 Mar 2022 - 9:00 AM</span>
              </div>
              <div className="reminder-info">
                <button className="theme">Personal</button>
                <p>Ask for blood test and GYM certificate.</p>
              </div>
            </div>
          </div>

          <div className="reminder reminder2">
            <div className="reminder-icon">
              <div className={`icon theme`}></div>
            </div>
            <div className="reminder-text">
              <div className="reminder-title">
                <h4>Beatrice"s Bday</h4>
                <span className="reminder-date">22 mar 2022</span>
              </div>
            </div>
          </div>

          <div className="reminder add-reminder">
            <div className="reminder-icon">
              <div className={`icon theme`}></div>
            </div>
            <div className="reminder-text">
              <h4>Add New weekly pin</h4>
            </div>
          </div>
        </div>

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
