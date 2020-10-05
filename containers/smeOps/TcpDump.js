import React, { useEffect, useState } from "react";
import { smeTcpDump } from "../../actions";
import PropTypes from "prop-types";
import Notice from "../../components/Notice";
import { connect } from "react-redux";

const TcpDump = (props) => {
  const [vpnId, setVpnId] = useState("");
  const [managementIp, setManagementIp] = useState("");
  const [protocol, setProtocol] = useState("");
  const [packetCount, setPacketCount] = useState("5");
  const [listenOnInterface, setListenOnInterface] = useState("");
  const [port, setPort] = useState("");
  const [query, setQuery] = useState({
    vpnId: "",
    managementIp: "",
    protocol: "",
    packetCount: "",
    listenOnInterface: "",
    port: "",
  });

  useEffect(() => {
    props.smeTcpDump(query);
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

  const updateProtocol = (e) => {
    e.preventDefault();
    setProtocol(e.target.value);
  };

  const updatePacketCount = (e) => {
    e.preventDefault();
    setPacketCount(e.target.value);
  };

  const updateListenOnInterface = (e) => {
    e.preventDefault();
    setListenOnInterface(e.target.value);
  };

  const updatePort = (e) => {
    e.preventDefault();
    setPort(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({
      vpnId: vpnId,
      managementIp: managementIp,
      protocol: protocol,
      packetCount: packetCount,
      listenOnInterface: protocol === "icmp" ? listenOnInterface : "",
      port: protocol === "udp" ? port : "",
    });
  };

  const Plane = () => {
    return !query.vpnId || !query.managementIp ? (
      <h2>Fill out the form before submission</h2>
    ) : (
      <Notice
        loading={props.smeTcpDumpState.loading}
        data={props.smeTcpDumpState.data}
        error={props.smeTcpDumpState.error}
      />
    );
  };

  return (
    <div>
      <h3>Send TCP dump request.</h3>
      <form onSubmit={updateQuery} className="Search-form">
        VPN Id:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={vpnId}
          onChange={updateVpnId}
        />
        <br />
        Management IP of Headend:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={managementIp}
          onChange={updateManagementIp}
        />
        <br />
        Packet Count:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={packetCount}
          onChange={updatePacketCount}
        />
        <br />
        Protocol:
        <br />
        <select name="protocol" onChange={updateProtocol}>
          <option value="default">Select a protocol</option>
          <option value="icmp">ICMP</option>
          <option value="udp">UDP</option>
        </select>
        <br />
        <div
          id="tcpdump_interface_div"
          style={{ display: protocol === "icmp" ? "block" : "none" }}
        >
          Interface:
          <br />
          <input
            className="Search-bar"
            type="text"
            size={40}
            required={false}
            value={listenOnInterface}
            onChange={updateListenOnInterface}
          />
        </div>
        <div
          id=" tcpdump_port_div"
          style={{ display: protocol === "udp" ? "block" : "none" }}
        >
          Port:
          <br />
          <input
            className="Search-bar"
            type="text"
            size={40}
            required={false}
            value={port}
            onChange={updatePort}
          />
        </div>
        <button className="Search-button" type="submit">
          Send Replace Instance Request
        </button>
      </form>
      <Plane query={query} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smeTcpDumpState: state.smeTcpDump,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    smeTcpDump: (query) => dispatch(smeTcpDump(query)),
  };
};

TcpDump.propTypes = {
  smeTcpDumpState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  smeTcpDump: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TcpDump);
