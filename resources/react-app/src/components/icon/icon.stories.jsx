import React from "react";
import ThemeSwitcher from "react-css-vars";

import Icon from "./icon.component";

import light from "../../themes/light.theme";
import dark from "../../themes/dark.theme";

import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/cog.svg";

const template = ({ darkTheme, hasNotifications }) => (
  <ThemeSwitcher theme={darkTheme ? dark : light}>
    <Icon hasNotifications={hasNotifications}>
      <UserIcon />
    </Icon>
    <Icon>
      <SettingsIcon />
    </Icon>
  </ThemeSwitcher>
);

export const Default = template.bind({});
Default.args = {
  darkTheme: false,
  hasNotifications: true,
};

export default {
  title: "Components/Icon",
  component: Icon,
};
