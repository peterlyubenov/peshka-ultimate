import React from "react";

import "./with-background.styles.scss";

const WithBackground = ({ children, theme, ...rest }) => (
  <div className={`with-background ${theme}`} {...rest}>
    <div className="content">{children}</div>
  </div>
);

export default WithBackground;
