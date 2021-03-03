import React from "react";

import Container from "../container/container.component";
import { Link } from "react-router-dom";
import "./schedule-not-found.styles.scss";

const ScheduleNotFound = ({ settings }) => (
  <div className="schedule-not-found">
    <Container>
      <div>
        Не можахме да намерим график за {settings.major}, {settings.year} курс
        😟
      </div>
      Може би сте допуснали грешка при въвеждането? Моля проверете от{" "}
      <Link to="/settings">настройките</Link>
    </Container>
  </div>
);

export default ScheduleNotFound;
