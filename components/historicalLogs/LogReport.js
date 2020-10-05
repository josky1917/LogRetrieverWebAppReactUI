import React from "react";
import PropTypes from "prop-types";

const LogReport = (props) => {
  return (
    <div className="logDetail">
      <strong>AMAZON CONFIDENTIAL</strong>
      <br />
      Not for customer consumption
      <br />
      <p>
        {props.log.split("\n").map((i, key) => {
          return <div key={key}>{i}</div>;
        })}
      </p>
      <strong>AMAZON CONFIDENTIAL</strong>
      <br />
      Not for customer consumption.
      <br />
    </div>
  );
};

LogReport.propTypes = {
  log: PropTypes.string.isRequired,
};

export default LogReport;
