import React from "react";
import ThemeSwitcher from "react-css-vars";

const lightTheme = {
    textColor: "#131313",
};

const darkTheme = {
    textColor: "#f3f3f3",
};

function App() {
    return (
        <ThemeSwitcher theme={lightTheme}>
            <div className="App"></div>
        </ThemeSwitcher>
    );
}

export default App;
