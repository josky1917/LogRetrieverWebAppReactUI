import React, { useEffect, useState } from "react";
import { stSetWorkflowState } from "../../actions";
import PropTypes from "prop-types";
import Notice from "../../components/Notice";
import { connect } from "react-redux";

const SetWorkflowState = (props) => {
  const [ownerAccount, setOwnerAccount] = useState("0123456789");
  const [rowType, setRowType] = useState("vpn_headend");
  const [rowId, setRowId] = useState("99999999");
  const [oldState, setOldState] = useState(
    "pending:waitForReplacementInstanceReady"
  );
  const [newState, setNewState] = useState("pending");
  const [forcedStateChange, setForcedStateChange] = useState("");
  const [query, setQuery] = useState({
    ownerAccount: "",
    rowType: "",
    rowId: "",
    oldState: "",
    newState: "",
    forcedStateChange: "",
  });

  useEffect(() => {
    props.stSetWorkflowState(query);
  }, [query]);

  useEffect(() => {
    Plane();
  }, [query]);

  const updateOwnerAccount = (e) => {
    e.preventDefault();
    setOwnerAccount(e.target.value);
  };

  const updateRowType = (e) => {
    e.preventDefault();
    setRowType(e.target.value);
  };

  const updateRowId = (e) => {
    e.preventDefault();
    setRowId(e.target.value);
  };

  const updateOldState = (e) => {
    e.preventDefault();
    setOldState(e.target.value);
  };

  const updateNewState = (e) => {
    e.preventDefault();
    setNewState(e.target.value);
  };

  const updateForcedStateChange = (e) => {
    e.preventDefault();
    setForcedStateChange(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({
      ownerAccount: ownerAccount,
      rowType: rowType,
      rowId: rowId,
      oldState: oldState,
      newState: newState,
      forcedStateChange: forcedStateChange,
    });
  };

  const Plane = () => {
    return !query.ownerAccount ? (
      <h2>Fill out the form before submission</h2>
    ) : (
      <Notice
        loading={props.stSetWorkflowStateState.loading}
        data={props.stSetWorkflowStateState.data}
        error={props.stSetWorkflowStateState.error}
      />
    );
  };

  return (
    <div>
      <h3>Send set workflow state request.</h3>
      <form onSubmit={updateQuery} className="Search-form">
        Account Id:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={ownerAccount}
          onChange={updateOwnerAccount}
        />
        <br />
        Raw Type:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={rowType}
          onChange={updateRowType}
        />
        <br />
        Raw ID:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={rowId}
          onChange={updateRowId}
        />
        <br />
        Old State:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={oldState}
          onChange={updateOldState}
        />
        <br />
        New State:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={newState}
          onChange={updateNewState}
        />
        <br />
        Forced State Change:
        <br />
        <select name="forceStateChange" onChange={updateForcedStateChange}>
          <option value="false">False (default)</option>
          <option value="true">True</option>
        </select>
        <br />
        <button className="Search-button" type="submit">
          Send Set Workflow State Request
        </button>
      </form>
      <Plane query={query} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    stSetWorkflowStateState: state.stWorkflowState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stSetWorkflowState: (query) => dispatch(stSetWorkflowState(query)),
  };
};

SetWorkflowState.propTypes = {
  stSetWorkflowStateState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  stSetWorkflowState: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetWorkflowState);
