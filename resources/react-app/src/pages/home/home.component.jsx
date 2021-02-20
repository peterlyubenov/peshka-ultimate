import React from "react";
import { connect } from "react-redux";

import "./home.styles.scss";

const Home = ({ settings, ...otherProps }) => (
  <div className="home">
    <h1>Hello wrodl</h1>
  </div>
);

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(Home);
