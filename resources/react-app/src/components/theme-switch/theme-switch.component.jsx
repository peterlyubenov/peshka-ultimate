import React from "react";
import { connect } from "react-redux";

import ThemeButton from "../theme-button/theme-button.component";
import ThemeActionTypes from "../../redux/theme/theme.types";
import "./theme-switch.styles.scss";

const ThemeSwitch = ({ theme, switchTheme }) => {
  const handleClick = (newActiveTheme) => () => {
    switchTheme(newActiveTheme);
  };

  return (
    <div className="theme-switch">
      <ThemeButton
        onClick={handleClick("light")}
        light
        active={theme === "light"}
      />
      <ThemeButton
        onClick={handleClick("dark")}
        dark
        active={theme === "dark"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

const mapDispatchToProps = (dispatch) => ({
  switchTheme: (theme) =>
    dispatch({ type: ThemeActionTypes.SWITCH_THEME, payload: theme }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
