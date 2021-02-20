import React from "react";
import { connect } from "react-redux";

import Logo from "../../components/logo/logo.component";
import Button from "../../components/button/button.comonent";
import InputGroup from "../../components/input-group/input-group.component";
import Input from "../../components/input/input.component";
import InputNumber from "../../components/input-number/input-number.component";
import Container from "../../components/container/container.component";
import ThemeSwitch from "../../components/theme-switch/theme-switch.component";
import "./welcome.styles.scss";

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <div className="background-image">
          {this.props.theme === "light" ? (
            <img src={require("../../assets/images/hero-bg.jpg")}></img>
          ) : (
            ""
          )}
          {this.props.theme === "dark" ? (
            <img src={require("../../assets/images/hero-bg-dark.jpg")}></img>
          ) : (
            ""
          )}
        </div>
        <div className="page">
          <Container className="header">
            <Logo />
          </Container>
          <Container className="main">
            <InputGroup label="Специалност">
              <Input
                onValueChange={(a) => {
                  console.log(a);
                }}
                value="aaa"
              ></Input>
            </InputGroup>
            <div className="number-inputs">
              <InputGroup label="Курс">
                <InputNumber initialValue={1} min={1} max={4}></InputNumber>
              </InputGroup>
              <InputGroup label="Лаб. група">
                <InputNumber initialValue={1} min={1} max={10}></InputNumber>
              </InputGroup>
            </div>
            <InputGroup label="Тема">
              <ThemeSwitch></ThemeSwitch>
            </InputGroup>
          </Container>
          <Container className="continue">
            <Button>Към програмата</Button>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

export default connect(mapStateToProps)(Welcome);
