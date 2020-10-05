import React from "react";
import PropTypes from "prop-types";
import OpsPlane from "./telemetry/OpsPlane";
import RestrictedPlane from "./telemetry/RestrictedPlane";

const OPS = "Ops";
const RESTRICTED = "restricted";

const TelemetryPlane = (props) => {
  if (props.loading) {
    return <h1>Loading</h1>;
  }
  if (props.error) {
    return <h2>{props.error}</h2>;
  }
  if ("exception" in props.data && props.data.exception) {
    return <h2> {props.data.exception} </h2>;
  }
  if (
    "wrappedData" in props.data &&
    "Access Level" in props.data.wrappedData &&
    props.data.wrappedData["Access Level"] === OPS
  ) {
    return <OpsPlane wrappedData={props.data.wrappedData} />;
  }
  if (
    "wrappedData" in props.data &&
    "Access Level" in props.data.wrappedData &&
    props.data.wrappedData["Access Level"] === RESTRICTED
  ) {
    return <RestrictedPlane wrappedData={props.data.wrappedData} />;
  }
  return <h2> Something goes wrong. Please contact wx-telemetry for help.</h2>;
};

TelemetryPlane.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    wrappedData: PropTypes.object.isRequired,
    exception: PropTypes.string.isRequired,
  }),
};

export default TelemetryPlane;
