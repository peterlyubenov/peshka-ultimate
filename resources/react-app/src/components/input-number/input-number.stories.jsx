import React from "react";
import ThemeSwitcher from "react-css-vars";

import InputNumber from "./input-number.component";

import light from "../../themes/light.theme";
import dark from "../../themes/dark.theme";

const template = ({ darkTheme, value, min, max }) => (
  <ThemeSwitcher theme={darkTheme ? dark : light}>
    <InputNumber initialValue={value} min={min} max={max}></InputNumber>
  </ThemeSwitcher>
);

export const Default = template.bind({});
Default.args = {
  darkTheme: false,
  min: 0,
  max: 4,
  value: 0,
};

export default {
  title: "Components/Number Input",
  component: InputNumber,
};
