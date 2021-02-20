import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "../pages/welcome/welcome.component";
import WelcomeGuard from "./welcomeGuard.routes";

const MainRoutes = () => (
  <Switch>
    <Route exact path="/welcome" component={Welcome}></Route>
    <Route path="/" component={WelcomeGuard}></Route>
  </Switch>
);

export default MainRoutes;
