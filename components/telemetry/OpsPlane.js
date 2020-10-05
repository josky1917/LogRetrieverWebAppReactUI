import React from "react";
import PropTypes from "prop-types";
import Counters from "./Counters";

const OpsPlane = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="page-header col-xs-6">
          <h2>
            WX Telemetry <small>Access Level: Ops</small>
          </h2>
        </div>
        <div className="page-header col-xs-6 rightHeader">
          <h2>
            <small>Headend Version: </small>
            {props.wrappedData["Headend Version"]}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <div className="boxHeader">
            <h3>VPN Information</h3>
          </div>
          <div className="boxBody">
            <p>Type: {props.wrappedData["VPN Information"]["vpnType"]}</p>
            <p>CGW IP: {props.wrappedData["VPN Information"]["cgwIp"]}</p>
            <p>
              VGW IP: {props.wrappedData["VPN Information"]["vgwIp"]}
              {"  "}
              <a
                href={props.wrappedData["Admiral Url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Admiral
              </a>
            </p>
            <p>
              CGW INSIDE IP:{" "}
              {props.wrappedData["VPN Information"]["cgwTunnelIp"]}
            </p>
            <p>
              VGW INSIDE IP:{" "}
              {props.wrappedData["VPN Information"]["vgwTunnelIp"]}
            </p>
            <p>CGW BGP AS: {props.wrappedData["VPN Information"]["cgwAsn"]}</p>
            <p>VGW BGP AS: {props.wrappedData["VPN Information"]["vgwAsn"]}</p>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="boxHeader">
            <h3>VPN Status</h3>
          </div>
          <div className="boxBody">
            <p>HeadEnd Uptime: {props.wrappedData["VPN Status"]["uptime"]}</p>
            <p>
              IKE Phase 1: {props.wrappedData["VPN Status"]["phase1Status"]}
            </p>
            <p>
              IPsec Phase 2: {props.wrappedData["VPN Status"]["phase2Status"]}
            </p>
            <p>NAT-T: {props.wrappedData["VPN Status"]["natT"]}</p>
            <p>BGP State: {props.wrappedData["VPN Status"]["bgpState"]}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <div className="boxHeader">
            <h3>IPSec Info</h3>
          </div>
          <div className="boxBody">
            {props.wrappedData["IPSec Info"].map((each) => (
              <p key={each.id}>{each}</p>
            ))}
          </div>
        </div>
        <div className="col-xs-6">
          <div className="boxHeader">
            <h3>Counters</h3>
          </div>
          <div className="boxBody">
            <Counters counter={props.wrappedData["Counters"]} />
          </div>
        </div>
      </div>
      <div className="row">
        {Object.keys(props.wrappedData["Logs"]).map((log, idx) => (
          <div key={idx}>
            <h2>{log}</h2>
            <div className="log_class">
              {Object.keys(props.wrappedData["Logs"][log]).map(
                (sublog, idx2) => (
                  <div key={idx2}>
                    <h3>{sublog}</h3>
                    <p className="telemetryLog">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: props.wrappedData["Logs"][log][sublog],
                        }}
                      />
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
OpsPlane.propTypes = {
  wrappedData: PropTypes.shape({
    "Access Level": PropTypes.string.isRequired,
    "Headend Version": PropTypes.string.isRequired,
    "VPN Information": PropTypes.object.isRequired,
    "Admiral Url": PropTypes.string.isRequired,
    "VPN Status": PropTypes.string.isRequired,
    "IPSec Info": PropTypes.array.isRequired,
    Counters: PropTypes.object.isRequired,
    Logs: PropTypes.object.isRequired,
  }),
};

export default OpsPlane;
