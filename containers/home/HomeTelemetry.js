import React, { useState, useEffect } from "react";
import { homeTelemetry } from "../../actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TelemetryPlane from "../../components/TelemetryPlane";

const HomeTelemetry = (props) => {
  const [controlIp, setControlIp] = useState("");
  const [query, setQuery] = useState({ controlIp: "" });

  useEffect(() => {
    props.homeTelemetry(query);
  }, [query]);

  useEffect(() => {
    Plane();
  }, [query]);

  const updateControlIp = (e) => {
    e.preventDefault();
    setControlIp(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({ controlIp: controlIp });
  };

  const Plane = () => {
    return !query.controlIp ? (
      <h2>Control IP is needed</h2>
    ) : (
      <TelemetryPlane
        loading={props.telemetryState.loading}
        data={props.telemetryState.data}
        error={props.telemetryState.error}
      />
    );
  };

  return (
    <div>
      <h1>This is for telemetry</h1>
      <form onSubmit={updateQuery} className="Search-form">
        Control IP of VPN:
        <input
          className="Search-bar"
          type="text"
          required={true}
          value={controlIp}
          onChange={updateControlIp}
        />
        <button className="Search-button" type="submit">
          Send
        </button>
      </form>
      <Plane />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    telemetryState: state.homeTelemetry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    homeTelemetry: (query) => dispatch(homeTelemetry(query)),
  };
};

HomeTelemetry.propTypes = {
  telemetryState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  homeTelemetry: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTelemetry);
