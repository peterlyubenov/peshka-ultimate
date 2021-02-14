import React from "react";
import ThemeSwitcher from "react-css-vars";

import Input from "./input.component";

import light from "../../themes/light.theme";
import dark from "../../themes/dark.theme";

const template = ({ darkTheme, value }) => (
  <ThemeSwitcher theme={darkTheme ? dark : light}>
    <Input></Input>
  </ThemeSwitcher>
);

export const Default = template.bind({});
Default.args = {
  darkTheme: false,
};

export default {
  title: "Components/Input",
  component: Input,
};
