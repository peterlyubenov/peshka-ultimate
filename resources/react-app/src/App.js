import React from "react";
import ThemeSwitcher from "react-css-vars";
import { connect } from "react-redux";

import lightTheme from "./themes/light.theme";
import darkTheme from "./themes/dark.theme";

import "./App.css";

function App({ theme }) {
  return (
    <ThemeSwitcher theme={darkTheme}>
      <div className="App">{theme}</div>
    </ThemeSwitcher>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(App);
