import React, { useState } from "react";

import Input from "../input/input.component";
import "./input-number.styles.scss";

import { ReactComponent as ChevronUp } from "../../assets/icons/chevron-up.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";

class InputNumber extends React.Component {
  state = {
    value: this.props.initialValue,
  };

  clipValueToRange = (value) => {
    if (value < this.props.min) {
      return this.props.min;
    } else if (value > this.props.max) {
      return this.props.max;
    }

    return value;
  };

  increment = (step) => () => {
    this.setState(
      {
        value: this.clipValueToRange(this.state.value + step),
      },
      () => {
        this.props.onIncrement(this.state.value);
      }
    );
  };

  handleChange = (event) => {
    if (event.target.value.length === 0) {
      this.setState({ value: "" }, this.props.onIncrement(this.state.value));
    } else {
      this.setState(
        {
          value: this.clipValueToRange(Number(event.target.value)),
        },
        () => {
          this.props.onIncrement(this.state.value);
        }
      );
    }
  };

  render() {
    return (
      <div className="input-number">
        <Input
          {...this.props.inputProps}
          value={this.state.value}
          onChange={this.handleChange}
          type="number"
        />
        <div className="buttons">
          <div
            onClick={this.increment(1)}
            className={this.state.value === this.props.max ? "disabled" : ""}
          >
            <ChevronUp />
          </div>
          <div
            onClick={this.increment(-1)}
            className={this.state.value === this.props.min ? "disabled" : ""}
          >
            <ChevronDown />
          </div>
        </div>
      </div>
    );
  }
}

export default InputNumber;
