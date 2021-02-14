import React, { useState } from "react";

import Input from "../input/input.component";
import "./input-number.styles.scss";

import { ReactComponent as ChevronUp } from "../../assets/icons/chevron-up.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";

const InputNumber = ({ inputProps, initialValue, min, max, ...props }) => {
  const [value, setValue] = useState(initialValue);

  const increment = (step) => () => {
    let newValue = value + step;

    if (newValue < min) {
      newValue = min;
    } else if (newValue > max) {
      newValue = max;
    }
    setValue(newValue);
  };

  return (
    <div className="input-number" {...props}>
      <Input {...inputProps} value={value} type="number" />
      <div className="buttons">
        <div onClick={increment(1)} className={value === max ? "disabled" : ""}>
          <ChevronUp />
        </div>
        <div
          onClick={increment(-1)}
          className={value === min ? "disabled" : ""}
        >
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
