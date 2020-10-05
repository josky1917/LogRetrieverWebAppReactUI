import React from "react";
import { Link } from "react-router-dom";
import Routes from "../routes";

const MainPlane = () => {
  return (
    <div>
      <nav className="nav-bar">
        <h1>Wx-Telemetry</h1>
        <Link to="/">Home</Link>
        <Link to="/WxdLogs">Historical Logs</Link>
        <Link to="/SME-Ops">Support Ops</Link>
        <Link to="/ST-Ops">Service Team Ops</Link>
      </nav>
      {Routes}
    </div>
  );
};

export default MainPlane;
