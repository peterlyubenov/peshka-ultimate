import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withToastManager } from "react-toast-notifications";

import SettingsActionTypes from "../../redux/settings/settings.types";
import WithBackground from "../../components/with-background/with-background.component";
import Header from "../../components/header/header.component";
import Button from "../../components/button/button.comonent";
import InputGroup from "../../components/input-group/input-group.component";
import InputWithSuggestions from "../../components/input-with-suggestions/input-with-suggestions.component";
import InputNumber from "../../components/input-number/input-number.component";
import Container from "../../components/container/container.component";
import ThemeSwitch from "../../components/theme-switch/theme-switch.component";
import "./settings.styles.scss";

class Settings extends React.Component {
  state = {
    group: this.props.settings.group,
    year: this.props.settings.year,
    major: this.props.settings.major,
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleIncrement = (name) => (value) => {
    this.setState({ [name]: value });
  };

  isValid = () => {
    console.log(this.state);
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

  componentDidMount = () => {
    this.props.toastManager.removeAll();
  };

  render() {
    return (
      <div className="settings">
        <WithBackground theme={this.props.settings.theme}>
          <Container>
            <Header />
            <div className="heading">Настройки</div>
          </Container>
          <form onSubmit={this.handleSubmit}>
            <Container className="main">
              <InputGroup label="Специалност">
                <InputWithSuggestions
                  apiEndpoint="http://localhost:8000/api/majors_suggestions"
                  onChange={this.handleChange}
                  value={this.props.settings.major}
                  name="major"
                ></InputWithSuggestions>
              </InputGroup>
              <div className="number-inputs">
                <InputGroup label="Курс">
                  <InputNumber
                    onChange={this.handleChange}
                    onIncrement={this.handleIncrement("year")}
                    initialValue={this.props.settings.year}
                    min={1}
                    max={4}
                    inputProps={{ name: "year" }}
                  ></InputNumber>
                </InputGroup>
                <InputGroup label="Лаб. група">
                  <InputNumber
                    onChange={this.handleChange}
                    onIncrement={this.handleIncrement("group")}
                    initialValue={this.props.settings.group}
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
                Запази
              </Button>

              <Link className="back-link" to="/">
                Отказ
              </Link>
            </Container>
          </form>
        </WithBackground>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapDispatchToProps = (dispatch) => ({
  updateStudentInfo: (payload) =>
    dispatch({ type: SettingsActionTypes.UPDATE_STUDENT_INFO, payload }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withToastManager(Settings));
