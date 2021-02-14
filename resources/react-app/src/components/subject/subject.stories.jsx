import React from "react";
import ThemeSwitcher from "react-css-vars";

import Subject from "./subject.component";

import light from "../../themes/light.theme";
import dark from "../../themes/dark.theme";

const template = ({
  darkTheme,
  time,
  subject,
  lecturer,
  week,
  room,
  group,
}) => (
  <ThemeSwitcher theme={darkTheme ? dark : light}>
    <Subject
      time={time}
      subject={subject}
      lecturer={lecturer}
      week={week}
      room={room}
      group={group}
    ></Subject>
  </ThemeSwitcher>
);

export const Default = template.bind({});
Default.args = {
  darkTheme: false,
  time: 14,
  subject: "Уеб програмиране с Java",
  lecturer: "доц. д-р Тодор Йорданов Тодоров",
  week: 1,
  room: 404,
  group: 0,
};

export default {
  title: "Components/Subject",
  component: Subject,
};
