import React from "react";
import { connect } from "react-redux";

import ThemeButton from "../theme-button/theme-button.component";
import ThemeActionTypes from "../../redux/settings/settings.types";
import "./theme-switch.styles.scss";

const ThemeSwitch = ({ settings, switchTheme }) => {
  const handleClick = (newActiveTheme) => () => {
    switchTheme(newActiveTheme);
  };

  return (
    <div className="theme-switch">
      <ThemeButton
        onClick={handleClick("light")}
        light
        active={settings.theme === "light"}
      />
      <ThemeButton
        onClick={handleClick("dark")}
        dark
        active={settings.theme === "dark"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapDispatchToProps = (dispatch) => ({
  switchTheme: (theme) =>
    dispatch({ type: ThemeActionTypes.SWITCH_THEME, payload: theme }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
