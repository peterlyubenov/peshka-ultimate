import React from "react";
import ThemeSwitcher from "react-css-vars";

import InputWithSuggestions from "./input-with-suggestions.component";

import light from "../../themes/light.theme";
import dark from "../../themes/dark.theme";

const template = ({ darkTheme, apiEndpoint }) => (
  <ThemeSwitcher theme={darkTheme ? dark : light}>
    <InputWithSuggestions
      apiEndpoint={apiEndpoint}
      onChange={(event) => {}}
    ></InputWithSuggestions>
  </ThemeSwitcher>
);

export const Default = template.bind({});
Default.args = {
  apiEndpoint: "http://localhost:8000/api/majors_suggestions",
  darkTheme: false,
};

export default {
  title: "Components/InputWithSuggestions",
  component: InputWithSuggestions,
};
