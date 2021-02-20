import React from "react";

import "./input-group.styles.scss";

const InputGroup = ({ label, children }) => (
  <div className="input-group">
    <div className="label">{label}</div>
    <div className="input-element">{children}</div>
  </div>
);

export default InputGroup;
