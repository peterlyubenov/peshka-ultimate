import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import WithBackground from "../../components/with-background/with-background.component";
import SettingsActionTypes from "../../redux/settings/settings.types";
import Logo from "../../components/logo/logo.component";
import Button from "../../components/button/button.comonent";
import InputGroup from "../../components/input-group/input-group.component";
import InputWithSuggestions from "../../components/input-with-suggestions/input-with-suggestions.component";
import InputNumber from "../../components/input-number/input-number.component";
import Container from "../../components/container/container.component";
import ThemeSwitch from "../../components/theme-switch/theme-switch.component";
import "./welcome.styles.scss";

class Welcome extends React.Component {
  state = {
    group: 1,
    year: 1,
    major: "",
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleIncrement = (name) => (value) => {
    this.setState({ [name]: value });
  };

  isValid = () => {
    console.log({
      group: this.state.group.toString().length,
      year: this.state.year.toString().length,
      major: this.state.major.length,
    });
    return (
      this.state.group.toString().length > 0 &&
      this.state.year.toString().length > 0 &&
      this.state.major.length > 0
    );
  };

  handleSubmit = () => {
    this.props.updateStudentInfo(this.state);

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="welcome">
        <WithBackground theme={this.props.theme}>
          <Container>
            <Logo />
          </Container>
          <form onSubmit={this.handleSubmit}>
            <Container className="main">
              <InputGroup label="Специалност">
                <InputWithSuggestions
                  apiEndpoint="http://localhost:8000/api/majors_suggestions"
                  onChange={this.handleChange}
                  name="major"
                ></InputWithSuggestions>
              </InputGroup>
              <div className="number-inputs">
                <InputGroup label="Курс">
                  <InputNumber
                    onChange={this.handleChange}
                    onIncrement={this.handleIncrement("year")}
                    initialValue={1}
                    min={1}
                    max={4}
                    inputProps={{ name: "year" }}
                  ></InputNumber>
                </InputGroup>
                <InputGroup label="Лаб. група">
                  <InputNumber
                    onChange={this.handleChange}
                    onIncrement={this.handleIncrement("group")}
                    initialValue={1}
                    min={1}
                    max={10}
                    inputProps={{ name: "group" }}
                  ></InputNumber>
                </InputGroup>
              </div>
              <InputGroup label="Тема">
                <ThemeSwitch></ThemeSwitch>
              </InputGroup>
            </Container>
            <Container className="continue" style={{ marginTop: "3em" }}>
              <Button disabled={!this.isValid()} onClick={this.handleSubmit}>
                Към програмата
              </Button>
            </Container>
          </form>
        </WithBackground>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  updateStudentInfo: (payload) =>
    dispatch({ type: SettingsActionTypes.UPDATE_STUDENT_INFO, payload }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Welcome));
