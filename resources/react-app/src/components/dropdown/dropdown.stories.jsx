import React from "react";
import ThemeSwitcher from "react-css-vars";

import light from "../../themes/light.theme";
import dark from "../../themes/dark.theme";
import Dropdown from "./dropdown.component";

const template = ({ darkTheme, defaultSelected, label, elements }) => (
  <ThemeSwitcher theme={darkTheme ? dark : light}>
    <Dropdown
      defaultSelected={defaultSelected}
      elements={elements}
      label={label}
    ></Dropdown>
  </ThemeSwitcher>
);

export const Default = template.bind({});
Default.args = {
  darkTheme: false,
  elements: ["Group 1", "Group 2", "Group 3", "Group 4"],
  label: "Group:",
  defaultSelected: 0,
};

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};
