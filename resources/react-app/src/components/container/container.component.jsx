import React from "react";

import "./container.styles.scss";

const Container = ({ children, className, ...otherProps }) => (
  <div className={`container ${className}`} {...otherProps}>
    {children}
  </div>
);

export default Container;
