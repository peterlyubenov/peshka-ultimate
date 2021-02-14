import React from "react";

import "./button.styles.scss";

const Button = ({ block, children, onClick }) => (
    <div className={`button ${block ? "block" : ""}`}>{children}</div>
);

export default Button;
