import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withToastManager } from "react-toast-notifications";

import Spinner from "../../components/spinner/spinner.component";
import NextSubject from "../../components/next-subject/next-subject.component";
import WithBackground from "../../components/with-background/with-background.component";
import Header from "../../components/header/header.component";

import "./home.styles.scss";

class Home extends React.Component {
  state = {
    schedule: null,
  };

  componentDidMount() {
    axios("http://localhost:8000/api/schedule", {
      params: {
        major: this.props.settings.major,
        year: this.props.settings.year,
      },
    }).then((response) => {
      this.setState({ schedule: response.data.result });
    });

    this.props.toastManager.add("Hello world", {
      appearance: "info",
    });
  }

  render() {
    return (
      <div className="home">
        <WithBackground theme={this.props.settings.theme}>
          <Header />
          {this.state.schedule ? (
            <NextSubject
              settings={this.props.settings}
              schedule={this.state.schedule}
            />
          ) : (
            <Spinner style={{ height: "50vh" }} />
          )}
        </WithBackground>
        <div style={{ position: "absolute", top: "100vh" }}>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            labore vero dicta sed, molestiae cum voluptatem placeat earum.
            Repellendus, ab.
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(withToastManager(Home));
