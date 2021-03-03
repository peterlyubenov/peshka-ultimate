import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withToastManager } from "react-toast-notifications";

import Container from "../../components/container/container.component";
import Spinner from "../../components/spinner/spinner.component";
import NextSubject from "../../components/next-subject/next-subject.component";
import WithBackground from "../../components/with-background/with-background.component";
import Header from "../../components/header/header.component";
import Button from "../../components/button/button.comonent";
import ScheduleNotFound from "../../components/schedule-not-found/schedule-not-found.component";

import "./home.styles.scss";

class Home extends React.Component {
  state = {
    schedule: null,
    notFound: false,
  };

  componentDidMount() {
    axios("http://localhost:8000/api/schedule", {
      params: {
        major: this.props.settings.major,
        year: this.props.settings.year,
      },
    }).then((response) => {
      if (response.data.result.length > 0) {
        this.setState({ schedule: response.data.result });
      } else {
        this.setState({ notFound: true });
      }
    });

    const title = (
      <span style={{ fontWeight: "bold" }}>Доц. д-р Златко Върбанов</span>
    );
    const content = "Ще закъснея 15 мин";

    this.props.toastManager.removeAll();

    this.props.toastManager.add(
      <div>
        {title}: {content}
      </div>,
      {
        appearance: "info",
      }
    );
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
          ) : this.state.notFound ? (
            <ScheduleNotFound settings={this.props.settings} />
          ) : (
            <Spinner style={{ height: "50vh" }} />
          )}
        </WithBackground>
        <Container>
          <div style={{ margin: "3em 0" }}>
            <Button
              onClick={() => {
                localStorage.clear();
              }}
            >
              Clear localStorage
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(withToastManager(Home));
