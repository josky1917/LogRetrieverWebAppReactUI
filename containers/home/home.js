import React from "react";
import { connect } from "react-redux";
import { selectHomeOption } from "../../actions";
import HomeTelemetry from "./HomeTelemetry";
import HomeNotification from "./HomeNotification";
import PropTypes from "prop-types";

const NOTIFICATION = "notification";
const TELEMETRY = "telemetry";

const home = (props) => {
  const showSelectedContent = (str = props.homeOption) => {
    switch (str) {
      case TELEMETRY:
        return <HomeTelemetry />;
      case NOTIFICATION:
        return <HomeNotification />;
      default:
        return <HomeTelemetry />;
    }
  };

  return (
    <div>
      <h1>Welcome to Wx-Telemetry Homepage</h1>
      <div>
        {props.ldap &&
        props.ldap.ldapGroup &&
        (props.ldap.ldapGroup["wx-telemetry-ops"] ||
          props.ldap.ldapGroup["vpc-looking-glass-ops"] ||
          props.ldap.ldapGroup["woodchipper"]) ? (
          <div>
            <select
              value={props.homeOption}
              onChange={(e) => props.selectHomeOption(e.target.value)}
            >
              <option value="telemetry">
                Telemetry for Woodchipper endpoints
              </option>
              <option value="notification">
                Enable/Disable Single Tunnel Notifications
              </option>
            </select>
            <div>{showSelectedContent()}</div>
          </div>
        ) : (
          <div>
            <h3>No LDAP Permission</h3>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    homeOption: state.home.homeOption,
    ldap: state.ldap.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectHomeOption: (optionValue) => dispatch(selectHomeOption(optionValue)),
  };
};

home.propTypes = {
  ldap: PropTypes.object.isRequired,
  homeOption: PropTypes.string.isRequired,
  selectHomeOption: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
