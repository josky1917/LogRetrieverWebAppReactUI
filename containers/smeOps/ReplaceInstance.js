import React, { useEffect, useState } from "react";
import { smeReplaceInstance } from "../../actions";
import PropTypes from "prop-types";
import Notice from "../../components/Notice";
import { connect } from "react-redux";

const ReplaceInstance = (props) => {
  const [vpnId, setVpnId] = useState("");
  const [managementIp, setManagementIp] = useState("");
  const [comment, setComment] = useState("tt:012345678");
  const [query, setQuery] = useState({
    vpnId: "",
    managementIp: "",
    comment: "",
  });

  useEffect(() => {
    props.smeReplaceInstance(query);
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

  const updateComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({ vpnId: vpnId, managementIp: managementIp, comment: comment });
  };

  const Plane = () => {
    return !query.vpnId || !query.managementIp ? (
      <h2>Fill out the form before submission</h2>
    ) : (
      <Notice
        loading={props.smeReplaceInstanceState.loading}
        data={props.smeReplaceInstanceState.data}
        error={props.smeReplaceInstanceState.error}
      />
    );
  };

  return (
    <div>
      <h3>Send replace instance request.</h3>
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
        Comment:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={comment}
          onChange={updateComment}
        />
        <br />
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
    smeReplaceInstanceState: state.smeReplaceIns,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    smeReplaceInstance: (query) => dispatch(smeReplaceInstance(query)),
  };
};

ReplaceInstance.propTypes = {
  smeReplaceInstanceState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  smeReplaceInstance: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplaceInstance);
