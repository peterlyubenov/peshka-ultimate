import React from "react";

import "./with-background.styles.scss";

const WithBackground = ({ children, theme, ...rest }) => (
  <div className="with-background" {...rest}>
    <div className="background-image">
      {theme === "light" ? (
        <img src={require("../../assets/images/hero-bg.jpg")}></img>
      ) : (
        ""
      )}
      {theme === "dark" ? (
        <img src={require("../../assets/images/hero-bg-dark.jpg")}></img>
      ) : (
        ""
      )}
    </div>
    <div className="content">{children}</div>
  </div>
);

export default WithBackground;
