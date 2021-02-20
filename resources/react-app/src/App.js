import React from "react";
import ThemeSwitcher from "react-css-vars";
import { connect } from "react-redux";

import lightTheme from "./themes/light.theme";
import darkTheme from "./themes/dark.theme";

import ThemeSwitch from "./components/theme-switch/theme-switch.component";

import "./App.css";

function App({ theme }) {
  let appTheme;
  switch (theme) {
    case "light":
      appTheme = lightTheme;
      break;
    case "dark":
      appTheme = darkTheme;
      break;
    default:
      appTheme = null;
  }

  return (
    <ThemeSwitcher theme={appTheme}>
      <div className="App">
        {theme}
        <ThemeSwitch />
      </div>
    </ThemeSwitcher>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(App);
