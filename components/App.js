import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/app.css";

import { Event, withARTWebMetrics } from "@art/react-metrics"; //withARTWebMetrics is a HOC
import LdapAuth from "./LdapAuth";

const event = new Event("AppComponent", "atf");

class App extends Component {
  componentDidMount() {
    this.props.record(event);
  }
  render() {
    return (
      <div className="app">
        <LdapAuth />
      </div>
    );
  }
}

App.propTypes = {
  record: PropTypes.func.isRequired,
};

export default withARTWebMetrics(App);
