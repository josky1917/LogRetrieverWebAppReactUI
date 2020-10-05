import React from "react";
import { connect } from "react-redux";
import WxdLogsPlane from "./WxdLogsPlane";
import PropTypes from "prop-types";

const wxdLogs = (props) => {
  return (
    <div>
      <h1>This is historical logs</h1>
      <div>
        {props.ldap &&
        props.ldap.ldapGroup &&
        (props.ldap.ldapGroup["wx-telemetry-ops"] ||
          props.ldap.ldapGroup["vpc-looking-glass-ops"] ||
          props.ldap.ldapGroup["woodchipper"]) ? (
          <WxdLogsPlane />
        ) : (
          <h3>No LDAP Permission</h3>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ldap: state.ldap.users,
  };
};

wxdLogs.propTypes = {
  ldap: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(wxdLogs);
