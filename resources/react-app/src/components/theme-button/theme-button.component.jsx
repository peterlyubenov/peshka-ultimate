import React from "react";

import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";

import "./theme-button.styles.scss";

const ThemeButton = ({ light, dark, active, onClick }) => {
  return (
    <div
      className={`theme-button ${light ? "light" : ""} ${dark ? "dark" : ""} ${
        active ? "active" : ""
      }`}
      onClick={onClick}
    >
      {light ? <Sun /> : dark ? <Moon /> : ""}
    </div>
  );
};

export default ThemeButton;
