import React from "react";
import Button from "./button.comonent";

const template = ({ text, ...props }) => <Button {...props}>{text}</Button>;

export const Regular = template.bind({});
Regular.args = {
    text: "Regular button",
};

export const Block = template.bind({});
Block.args = {
    text: "Block button",
    block: true,
};

// export const Regular = () => <Button>Regular button</Button>;
// export const Block = () => <Button block>Block button</Button>;

export default {
    title: "Components/Button",
    component: Button,
};
