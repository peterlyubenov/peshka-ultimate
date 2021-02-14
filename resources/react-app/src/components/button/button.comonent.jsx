import React from "react";

import "./button.styles.scss";

const Button = ({ block, children, ...otherProps }) => (
  <div className={`button ${block ? "block" : ""}`} {...otherProps}>
    {children}
  </div>
);

export default Button;
