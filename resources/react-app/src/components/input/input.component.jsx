import React, { useState } from "react";

import "./input.styles.scss";

class Input extends React.Component {
  render() {
    return <input className="input" {...this.props}></input>;
  }
}

export default Input;
