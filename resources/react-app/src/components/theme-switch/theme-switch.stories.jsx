import React from "react";

import ThemeSwitch from "./theme-switch.component";

const template = () => <ThemeSwitch />;

export const Default = template.bind({});
Default.args = {};

export default {
  title: "Components/ThemeSwitch",
  component: ThemeSwitch,
};
