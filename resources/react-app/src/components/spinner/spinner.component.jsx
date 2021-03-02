import React from "react";

import "./spinner.styles.scss";

const Spinner = (props) => (
  <div className="spinner-container" {...props}>
    <div className="spinner">⌛</div>
  </div>
);

export default Spinner;
