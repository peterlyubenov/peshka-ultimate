import React from "react";
import ThemeSwitcher from "react-css-vars";
import { connect } from "react-redux";

import lightTheme from "./themes/light.theme";
import darkTheme from "./themes/dark.theme";

import Routes from "./routes/main.routes";

import "./App.css";

function App({ settings }) {
  let appTheme;
  switch (settings.theme) {
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
        <Routes />
      </div>
    </ThemeSwitcher>
  );
}

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(App);
