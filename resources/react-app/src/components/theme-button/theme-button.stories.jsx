import React from "react";
import ThemeSwitcher from "react-css-vars";

import ThemeButton from "./theme-button.component";

import light from "../../themes/light.theme";
import dark from "../../themes/dark.theme";

const template = ({ light, active }) => (
  <ThemeButton light={light} dark={!light} active={active}></ThemeButton>
);

export const Default = template.bind({});
Default.args = {
  light: true,
  active: false,
};

export default {
  title: "Components/ThemeButton",
  component: ThemeButton,
};
