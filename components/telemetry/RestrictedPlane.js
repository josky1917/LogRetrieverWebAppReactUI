import React from "react";
import PropTypes from "prop-types";

const RestrictedPlane = (props) => {
  return (
    <div>
      <p>==Rendering VIEW ONLY restricted information==</p>
      <p>
        For additional support-ops access, you will have to be part of the LDAP
        group
      </p>
      <a href="https://permissions.amazon.com/group.mhtml?target=4317762">
        wx-telemetry-ops
      </a>
      <h1>restricted plane</h1>
      <div className="row">
        {Object.keys(props.wrappedData).map((log, idx) => (
          <div key={idx}>
            <p>
              ******************************************************************
            </p>
            <p>{log}</p>
            <p>
              ******************************************************************
            </p>
            <p>{props.wrappedData[log]}</p>
          </div>
        ))}
        ;
        <p>
          ******************************************************************
        </p>
      </div>
    </div>
  );
};

RestrictedPlane.propTypes = {
  wrappedData: PropTypes.object.isRequired,
};

export default RestrictedPlane;
