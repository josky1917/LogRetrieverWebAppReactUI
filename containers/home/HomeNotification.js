import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { homeSingleTunnelNotification } from "../../actions";
import PropTypes from "prop-types";
import Notice from "../../components/Notice";

const HomeNotification = (props) => {
  const [accountId, setAccountId] = useState("");
  const [tunnelOpt, setTunnelOpt] = useState("");
  const [query, setQuery] = useState({ accountId: "", tunnelOpt: "" });

  useEffect(() => {
    props.homeNotification(query);
  }, [query]);

  useEffect(() => {
    Plane();
  }, [query]);

  const updateAccountId = (e) => {
    e.preventDefault();
    setAccountId(e.target.value);
  };

  const updateTunnelOptDisable = () => {
    setTunnelOpt("Disable");
  };

  const updateTunnelOptEnable = () => {
    setTunnelOpt("Enable");
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({ accountId: accountId, tunnelOpt: tunnelOpt });
  };

  const Plane = () => {
    return !query.accountId ? (
      <h2>AccountId is needed</h2>
    ) : (
      <Notice
        loading={props.notificationState.loading}
        data={props.notificationState.data}
        error={props.notificationState.error}
      />
    );
  };

  return (
    <div>
      <h3>Change the state of notification about single tunnel usage.</h3>
      <form onSubmit={updateQuery} className="Search-form">
        AccountId:
        <input
          className="Search-bar"
          type="text"
          required={true}
          value={accountId}
          onChange={updateAccountId}
        />
        <button
          className="Search-button"
          onClick={() => updateTunnelOptDisable()}
        >
          Disable
        </button>
        <button
          className="Search-button"
          onClick={() => updateTunnelOptEnable()}
        >
          Enable
        </button>
      </form>
      <Plane query={query} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notificationState: state.homeNotification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    homeNotification: (query) => dispatch(homeSingleTunnelNotification(query)),
  };
};

HomeNotification.propTypes = {
  notificationState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  homeNotification: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeNotification);
