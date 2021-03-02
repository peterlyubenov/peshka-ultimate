import React from "react";

import Input from "../input/input.component";
import axios from "axios";

import "./input-with-suggestions.styles.scss";

class InputWithSuggestions extends React.Component {
  state = {
    value: "",
    suggestions: [],
    allMajors: [],
    selected: -1,
  };

  componentDidMount() {
    axios(this.props.apiEndpoint).then((response) => {
      this.setState({ allMajors: response.data });
    });
  }

  dispatchChangeEvent = () => {
    const props = {
      ...this.props,
      target: this.target,
      value: this.state.value,
    };

    if (this.props.onChange && this.props.onChange instanceof Function) {
      this.props.onChange(props);
    }
  };

  handleChange = (event) => {
    this.target = event.target;

    this.setState({ value: event.target.value }, () => {
      this.dispatchChangeEvent();
    });
    if (event.target.value.length > 2) {
      // Handle value already entered
      for (let i = 0; i < this.state.allMajors.length; i++) {
        if (event.target.value === this.state.allMajors[i].name) {
          this.setState({ suggestions: [] });
          return;
        }
      }

      // Generate suggestions list
      this.setState({
        suggestions: this.state.allMajors.filter((major) =>
          major.name.toLowerCase().startsWith(event.target.value.toLowerCase())
        ),
      });
    } else {
      this.setState({ suggestions: [] });
    }
  };

  selectSuggestion = (event) => {
    const clickedId = parseInt(
      event.target.attributes.getNamedItem("name").nodeValue
    );

    const suggestion = this.state.suggestions.find((x) => x.id === clickedId);

    this.setState({ value: suggestion.name, suggestions: [] }, () => {
      this.dispatchChangeEvent();
    });
  };

  increaseSelectedIndex = (step) => {
    if (this.state.suggestions.length > 0) {
      let newSelected =
        (this.state.selected + step) % this.state.suggestions.length;

      if (newSelected < 0) {
        newSelected = this.state.suggestions.length - Math.abs(newSelected);
      }

      this.setState({ selected: newSelected });
    } else {
      this.setState({ selected: -1 });
    }
  };

  handleArrowKeysAndEnter = (event) => {
    switch (event.code) {
      case "ArrowDown":
        this.increaseSelectedIndex(1);
        event.preventDefault();
        break;
      case "ArrowUp":
        this.increaseSelectedIndex(-1);
        event.preventDefault();
        break;
      case "Tab":
      case "Enter":
        if (this.state.selected >= 0) {
          this.setState(
            {
              value: this.state.suggestions[this.state.selected].name,
              suggestions: [],
              selected: -1,
            },
            () => {
              this.dispatchChangeEvent();
            }
          );
          event.preventDefault();
        }
        break;
    }
  };

  render() {
    return (
      <div className="input-with-suggestions">
        <Input
          onKeyDown={this.handleArrowKeysAndEnter}
          value={this.state.value}
          onChange={this.handleChange}
          name={this.props.name}
          autocomplete="off"
        ></Input>{" "}
        <div
          className={`suggestions ${
            this.state.suggestions.length > 0 ? "active" : ""
          }`}
        >
          {this.state.suggestions.map((suggestion, index) => (
            <div
              onClick={this.selectSuggestion}
              className={`suggestion ${
                index === this.state.selected ? "selected" : ""
              }`}
              key={suggestion.id}
              name={suggestion.id}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default InputWithSuggestions;
