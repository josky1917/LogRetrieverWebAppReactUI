import React from "react";
import PropTypes from "prop-types";

const Counters = (props) => {
  return (
    <div>
      <p>Installed Routes: {props.counter["installedRoutesCount"]}</p>
      <p>BGP Prefixes: {props.counter["bgpTotalPrefixes"]}</p>
      <p>IPSec Tunnel TX Packets: {props.counter["tunnelTxPackets"]}</p>
      <p>IPSec Tunnel TX Bytes: {props.counter["tunnelTxBytes"]}</p>
      <p>IPSec Tunnel RX Packets: {props.counter["tunnelRxPackets"]}</p>
      <p>IPSec Tunnel RX Bytes: {props.counter["tunnelRxBytes"]}</p>
      <p>CX VPC TX Packets: {props.counter["cxVpcTxPackets"]}</p>
      <p>CX VPC TX Bytes: {props.counter["cxVpcTxBytes"]}</p>
      <p>CX VPC RX Packets: {props.counter["cxVpcRxPackets"]}</p>
      <p>CX VPC RX Bytes: {props.counter["cxVpcRxBytes"]}</p>
      <p>Other PE TX Packets: {props.counter["otherTxPackets"]}</p>
      <p>Other PE TX Bytes: {props.counter["otherTxBytes"]}</p>
      <p>Other PE RX Packets: {props.counter["otherRxPackets"]}</p>
      <p>Other PE RX Bytes: {props.counter["otherRxBytes"]}</p>
    </div>
  );
};

Counters.propTypes = {
  counter: PropTypes.objectOf(PropTypes.string),
};

export default Counters;
