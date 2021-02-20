import React from "react";
import ThemeSwitcher from "react-css-vars";

import Logo from "./logo.component";

import light from "../../themes/light.theme";
import dark from "../../themes/dark.theme";

const template = ({ darkTheme }) => (
  <ThemeSwitcher theme={darkTheme ? dark : light}>
    <Logo></Logo>
  </ThemeSwitcher>
);

export const Default = template.bind({});
Default.args = {
  darkTheme: false,
};

export default {
  title: "Components/Logo",
  component: Logo,
};
