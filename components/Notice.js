import React from "react";
import PropTypes from "prop-types";

const Notice = (props) => {
  if (props.loading) {
    return <h1>Loading</h1>;
  }
  if (props.error) {
    return <h2>{props.error}</h2>;
  }
  if (props.data.successMsg) {
    return <h2> {props.data.successMsg} </h2>;
  }
  if (props.data.exception) {
    return <h2> {props.data.exception} </h2>;
  }
  return <h2> Something goes wrong. Please contact wx-telemetry for help.</h2>;
};

Notice.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    successMsg: PropTypes.object.isRequired,
    exception: PropTypes.string.isRequired,
  }),
};

export default Notice;
