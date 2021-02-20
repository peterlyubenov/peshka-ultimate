import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import ThemeSwitch from "./theme-switch.component";

const template = () => (
  <Provider store={store}>
    <ThemeSwitch />
  </Provider>
);

export const Default = template.bind({});
Default.args = {};

export default {
  title: "Components/ThemeSwitch",
  component: ThemeSwitch,
};
