import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LogReport from "./LogReport";

const WxLogTable = (props) => {
  const [logReport, setLogReport] = useState("");

  useEffect(() => {
    LogReportPlane();
  }, [logReport]);

  const updateLogReport = (e) => {
    e.preventDefault();
    setLogReport(e.target.value);
  };

  const LogReportPlane = () => {
    if (logReport) {
      return <LogReport log={logReport} />;
    }
    return <h2>Click Log Report for details</h2>;
  };

  return (
    <div>
      <h1>This is Log Table </h1>
      <table className="logTable">
        <thead>
          <tr>
            <th>Log Report</th>
            <th>CGW IP</th>
            <th>VGW IP</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Log Name</th>
            <th>Size KB</th>
          </tr>
        </thead>
        <tbody>
          {props.logsList.map((log) => (
            <tr key={log["Log ID"]}>
              <td>
                <button
                  className="Search-button"
                  onClick={(e) => updateLogReport(e)}
                  value={log["Log Report"]}
                >
                  Log Report
                </button>
              </td>
              <td>{log["CGW IP"]}</td>
              <td>{log["VGW IP"]}</td>
              <td>{log["Start Time"]}</td>
              <td>{log["End Time"]}</td>
              <td>{log["Log Name"]}</td>
              <td>{log["Size KB"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <LogReportPlane />
    </div>
  );
};

WxLogTable.propTypes = {
  logsList: PropTypes.array.isRequired,
};

export default WxLogTable;
