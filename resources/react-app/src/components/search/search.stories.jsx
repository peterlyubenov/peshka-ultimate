import React from "react";
import ThemeSwitcher from "react-css-vars";

import Search from "./search.component";
import Dropdown from "../dropdown/dropdown.component";

import light from "../../themes/light.theme";
import dark from "../../themes/dark.theme";

const template = ({ darkTheme }) => (
  <ThemeSwitcher theme={darkTheme ? dark : light}>
    <Search></Search>
  </ThemeSwitcher>
);

export const Default = template.bind({});
Default.args = {
  darkTheme: false,
};

export const WithDropdown = ({ darkTheme = false }) => (
  <ThemeSwitcher theme={darkTheme ? dark : light}>
    <Search />
    <Dropdown
      defaultElement={0}
      elements={["Група 1", "Група 2", "Група 3", "Група 4"]}
      style={{ marginLeft: "120px" }}
      label="Група"
    />
  </ThemeSwitcher>
);

export default {
  title: "Components/Search",
  component: Search,
  argTypes: {
    onChange: {
      action: "changed",
    },
  },
};
