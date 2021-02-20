import React from "react";
import ThemeSwitcher from "react-css-vars";
import { connect } from "react-redux";

import lightTheme from "./themes/light.theme";
import darkTheme from "./themes/dark.theme";

import ThemeSwitch from "./components/theme-switch/theme-switch.component";
import Home from "./pages/home/home.component";

import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

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
        {settings.theme} <Link to="/">Home </Link>
        <Link to="/settings">Settings</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings">
            <ThemeSwitch />
          </Route>
        </Switch>
      </div>
    </ThemeSwitcher>
  );
}

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(App);
