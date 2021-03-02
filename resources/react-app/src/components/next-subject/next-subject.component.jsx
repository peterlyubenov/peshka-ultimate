import React from "react";

import "./next-subject.styles.scss";

import { getNextClass, localize, getWeek } from "./next-subject.helpers";

class NextSubject extends React.Component {
  state = {
    nextClass: null,
    afterThat: null,
  };
  componentDidMount() {
    const [nextClass, afterThat] = getNextClass(
      this.props.schedule,
      this.props.settings
    );

    this.setState({ nextClass, afterThat, week: getWeek() });
  }

  render() {
    const { nextClass, afterThat, week } = this.state;
    return (
      <div className="next-subject">
        {nextClass !== null ? (
          <div className="next-class class-summary">
            <span className="time">
              {localize(nextClass.date)} в {nextClass.time}:15
            </span>
            <span className={nextClass.group === 0 ? "lecture" : "exercise"}>
              {nextClass.group === 0 ? " Лекция " : " Упр "}
            </span>
            по
            <span className="subject"> {nextClass.subject} </span>в зала
            <span className="room"> {nextClass.room}</span>
          </div>
        ) : (
          ""
        )}

        {afterThat !== null ? (
          <div className="after-that class-summary">
            <span className="time">
              {localize(afterThat.date)} в {afterThat.time}:15
            </span>
            <span className={afterThat === 0 ? "lecture" : "exercise"}>
              {afterThat.group === 0 ? " Лекция " : " Упр "}
            </span>
            по
            <span className="subject"> {afterThat.subject} </span>в зала
            <span className="room"> {afterThat.room}</span>
          </div>
        ) : (
          ""
        )}
        <div className="week-line">
          Седмица
          <span className="week"> {week === 1 ? "1, 3" : "2, 4"}</span>
        </div>
      </div>
    );
  }
}

export default NextSubject;
