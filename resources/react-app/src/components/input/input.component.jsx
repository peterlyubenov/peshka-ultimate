import React, { useState } from "react";

import "./input.styles.scss";

class Input extends React.Component {
  handleChange = (event) => {
    this.props.onValueChange(event.target.value);
  };

  render() {
    return (
      <input
        className="input"
        onChange={this.handleChange}
        {...this.props}
      ></input>
    );
  }
}

export default Input;
