import React from "react";
import PropTypes from "prop-types";
import WxLogTable from "./historicalLogs/WxLogTable";

const WxLogPlane = (props) => {
  if (props.loading) {
    return (
      <h1>
        Loading... Be patient. Log Retriever is working and it may take a
        while...
      </h1>
    );
  }
  if (props.error) {
    return <h2>{props.error}</h2>;
  }
  if ("exception" in props.data && props.data.exception) {
    return <h2> {props.data.exception} </h2>;
  }
  if (props.data.logsList) {
    return <WxLogTable logsList={props.data.logsList} />;
  }
  return <h2> Something goes wrong. Please contact wx-telemetry for help.</h2>;
};

WxLogPlane.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    logsList: PropTypes.array.isRequired,
    exception: PropTypes.string.isRequired,
  }),
};

export default WxLogPlane;
