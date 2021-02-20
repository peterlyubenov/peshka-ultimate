import React, { useState } from "react";

import ThemeButton from "../theme-button/theme-button.component";
import "./theme-switch.styles.scss";

const ThemeSwitch = ({ defaultTheme, onChange }) => {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

  const handleClick = (newActiveTheme) => () => {
    setActiveTheme(newActiveTheme);

    onChange(newActiveTheme);
  };

  return (
    <div className="theme-switch">
      <ThemeButton
        onClick={handleClick("light")}
        light
        active={activeTheme === "light"}
      />
      <ThemeButton
        onClick={handleClick("dark")}
        dark
        active={activeTheme === "dark"}
      />
    </div>
  );
};

export default ThemeSwitch;
