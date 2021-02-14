module.exports = {
    stories: [
        "../resources/react-app/src/pages/**/*.stories.mdx",
        "../resources/react-app/src/components/**/*.stories.mdx",
        "../resources/react-app/src/pages/**/*.stories.jsx",
        "../resources/react-app/src/components/**/*.stories.jsx",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
    ],
};
