import React from "react";

import "./subject.styles.scss";

const Subject = ({ time, subject, lecturer, week, room, group }) => (
  <div className="subject">
    <div className="subject-wrapper">
      <div className="time">{time}:15</div>
      <div className="subject-line">
        <div>{subject}</div>
        <div className="lecturer">{lecturer}</div>
      </div>
    </div>
    <div className="footer">
      <div className="group">
        {group === 0 ? (
          "Лекция"
        ) : (
          <span>
            {group} <span className="label"> група</span>
          </span>
        )}
      </div>
      <div className="week">
        {["Всяка", "1, 3", "2, 4"][week]}{" "}
        <span className="label"> Седмица</span>
      </div>
      <div className="room">
        {room} <span className="label"> Зала</span>
      </div>
    </div>
  </div>
);

export default Subject;
