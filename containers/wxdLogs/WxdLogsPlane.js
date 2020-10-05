import React, { useState, useEffect } from "react";
import { wxLog } from "../../actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import WxLogPlane from "../../components/WxLogPlane";

const WxdLogsPlane = (props) => {
  const [startTime, setStartTime] = useState(
    new Date(new Date().getTime() - 7200000).toISOString()
  );
  const [cgwIp, setCgwIp] = useState("");
  const [vgwIp, setVgwIp] = useState("");
  const [query, setQuery] = useState({ startTime: "", cgwIp: "", vgwIp: "" });

  useEffect(() => {
    props.wxLog(query);
  }, [query]);

  useEffect(() => {
    Plane();
  }, [query]);

  const updateStartTime = (e) => {
    e.preventDefault();
    setStartTime(e.target.value);
  };

  const updateCgwIp = (e) => {
    e.preventDefault();
    setCgwIp(e.target.value);
  };

  const updateVgwIp = (e) => {
    e.preventDefault();
    setVgwIp(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({ startTime: startTime, cgwIp: cgwIp, vgwIp: vgwIp });
  };

  const Plane = () => {
    return !query.startTime || !query.cgwIp || !query.vgwIp ? (
      <h2>All fields are required!</h2>
    ) : (
      <WxLogPlane
        loading={props.wxLogState.loading}
        data={props.wxLogState.data}
        error={props.wxLogState.error}
      />
    );
  };

  return (
    <div>
      <h1>This is wxdlogPlane</h1>
      <form onSubmit={updateQuery} className="Search-form">
        Start Time (ISO format):
        <br />
        <input
          className="Search-bar"
          type="text"
          required={true}
          size={40}
          value={startTime}
          onChange={updateStartTime}
        />
        <br />
        CGW IP of VPN:
        <br />
        <input
          className="Search-bar"
          type="text"
          required={true}
          size={40}
          value={cgwIp}
          onChange={updateCgwIp}
        />
        <br />
        VGW IP of VPN:
        <br />
        <input
          className="Search-bar"
          type="text"
          required={true}
          size={40}
          value={vgwIp}
          onChange={updateVgwIp}
        />
        <br />
        <button className="Search-button" type="submit">
          Search Logs
        </button>
      </form>
      <Plane />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wxLogState: state.wxLog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    wxLog: (query) => dispatch(wxLog(query)),
  };
};

WxdLogsPlane.propTypes = {
  wxLogState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  wxLog: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WxdLogsPlane);
