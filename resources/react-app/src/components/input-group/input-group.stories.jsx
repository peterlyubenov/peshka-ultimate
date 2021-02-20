import React from "react";
import ThemeSwitcher from "react-css-vars";

import InputGroup from "./input-group.component";
import Input from "../input/input.component";
import InputNumber from "../input-number/input-number.component";

import light from "../../themes/light.theme";
import dark from "../../themes/dark.theme";

const template = ({ darkTheme, children, label }) => (
  <ThemeSwitcher theme={darkTheme ? dark : light}>
    <InputGroup label={label}>{children}</InputGroup>
  </ThemeSwitcher>
);

export const Default = template.bind({});
Default.args = {
  darkTheme: false,
  label: "Input Group",
  children: <Input></Input>,
};

export const NumberInput = template.bind({});
NumberInput.args = {
  darkTheme: false,
  label: "Number Input Group",
  children: <InputNumber initialValue={2} min={1} max={4}></InputNumber>,
};

export default {
  title: "Components/InputGroup",
  component: InputGroup,
};
