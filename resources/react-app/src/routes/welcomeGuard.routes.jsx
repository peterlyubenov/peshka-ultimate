import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "../pages/home/home.component";
import Settings from "../pages/settings/settings.component";

const WelcomeGuard = ({ settings }) => {
  let displayWelcomeScreen = !(
    settings.group &&
    settings.major &&
    settings.year
  );

  if (displayWelcomeScreen) {
    return <Redirect to="/welcome"></Redirect>;
  }

  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/settings" component={Settings} />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(WelcomeGuard);
