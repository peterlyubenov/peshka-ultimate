import React from "react";

import "./button.styles.scss";

const Button = ({ block, disabled, children, onClick, ...otherProps }) => {
  const handleClick = (event) => {
    if (!disabled) {
      onClick(event);
    }
  };
  return (
    <div
      className={`button ${block ? "block" : ""} ${disabled ? "disabled" : ""}`}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Button;
