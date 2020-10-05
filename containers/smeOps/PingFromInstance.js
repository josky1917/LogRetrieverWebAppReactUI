import React, { useEffect, useState } from "react";
import { smePingFromInstance } from "../../actions";
import PropTypes from "prop-types";
import Notice from "../../components/Notice";
import { connect } from "react-redux";

const PingFromInstance = (props) => {
  const [vpnId, setVpnId] = useState("");
  const [managementIp, setManagementIp] = useState("");
  const [destination, setDestination] = useState("127.0.0.1");
  const [sourceAddress, setSourceAddress] = useState("");
  const [count, setCount] = useState("10");
  const [interval, setInterval] = useState("");
  const [query, setQuery] = useState({
    vpnId: "",
    managementIp: "",
    destination: "",
    sourceAddress: "",
    count: "",
    interval: "",
  });

  useEffect(() => {
    props.smePingFromInstance(query);
  }, [query]);

  useEffect(() => {
    Plane();
  }, [query]);

  const updateVpnId = (e) => {
    e.preventDefault();
    setVpnId(e.target.value);
  };

  const updateManagementIp = (e) => {
    e.preventDefault();
    setManagementIp(e.target.value);
  };

  const updateDestination = (e) => {
    e.preventDefault();
    setDestination(e.target.value);
  };

  const updateSourceAddress = (e) => {
    e.preventDefault();
    setSourceAddress(e.target.value);
  };

  const updateCount = (e) => {
    e.preventDefault();
    setCount(e.target.value);
  };

  const updateInterval = (e) => {
    e.preventDefault();
    setInterval(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({
      vpnId: vpnId,
      managementIp: managementIp,
      destination: destination,
      sourceAddress: sourceAddress,
      count: count,
      interval: interval,
    });
  };

  const Plane = () => {
    return !query.vpnId || !query.managementIp ? (
      <h2>Fill out the form before submission</h2>
    ) : (
      <Notice
        loading={props.smePingFromInstanceState.loading}
        data={props.smePingFromInstanceState.data}
        error={props.smePingFromInstanceState.error}
      />
    );
  };

  return (
    <div>
      <h3>Send ping from instance request.</h3>
      <form onSubmit={updateQuery} className="Search-form">
        VPN Id:
        <br />
        <input
          className="Search-bar"
          type="text"
          required={true}
          size={40}
          value={vpnId}
          onChange={updateVpnId}
        />
        <br />
        Management IP of Headend:
        <br />
        <input
          className="Search-bar"
          type="text"
          required={true}
          size={40}
          value={managementIp}
          onChange={updateManagementIp}
        />
        <br />
        Destination:
        <br />
        <input
          className="Search-bar"
          type="text"
          required={true}
          size={40}
          value={destination}
          onChange={updateDestination}
        />
        <br />
        SourceAddress:
        <br />
        <input
          className="Search-bar"
          type="text"
          placeholder="optional"
          size={40}
          value={sourceAddress}
          onChange={updateSourceAddress}
        />
        <br />
        Count:
        <br />
        <input
          className="Search-bar"
          type="text"
          required={true}
          size={40}
          value={count}
          onChange={updateCount}
        />
        <br />
        Interval:
        <br />
        <input
          className="Search-bar"
          type="text"
          placeholder="optional"
          size={40}
          value={interval}
          onChange={updateInterval}
        />
        <br />
        <button className="Search-button" type="submit">
          Send Ping Request
        </button>
      </form>
      <Plane query={query} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smePingFromInstanceState: state.smePingFromIns,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    smePingFromInstance: (query) => dispatch(smePingFromInstance(query)),
  };
};

PingFromInstance.propTypes = {
  smePingFromInstanceState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  smePingFromInstance: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PingFromInstance);
