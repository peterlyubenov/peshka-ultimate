import React from "react";
import { connect } from "react-redux";

import ThemeSwitch from "../../components/theme-switch/theme-switch.component";
import "./settings.styles.scss";

const Settings = ({ settings }) => (
  <div className="settings">
    <h1>Settings</h1>
    <ThemeSwitch></ThemeSwitch>
  </div>
);

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(Settings);
