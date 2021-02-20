import React from "react";
import { connect } from "react-redux";

import "./home.styles.scss";

const Home = ({ settings, ...otherProps }) => (
  <div
    className="home"
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <span style={{ fontSize: 32, fontWeight: "bold" }}>Success!</span>
  </div>
);

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(Home);
