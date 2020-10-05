import React from "react";
import { connect } from "react-redux";
import { selectStOpsOption } from "../../actions";
import RemoveCustomerLimit from "./RemoveCustomerLimit";
import SetWorkflowState from "./SetWorkflowState";
import UpdateCustomerLimit from "./UpdateCustomerLimit";
import PropTypes from "prop-types";

const REMOVE_CUSTOMER_LIMIT = "removeCustomerLimit";
const SET_WORKFLOW_STATE = "setWorkflowState";
const UPDATE_CUSTOMER_LIMIT = "updateCustomerLimit";

const stOps = (props) => {
  const showSelectedContent = (str = props.stOpsOption) => {
    switch (str) {
      case REMOVE_CUSTOMER_LIMIT:
        return <RemoveCustomerLimit />;
      case SET_WORKFLOW_STATE:
        return <SetWorkflowState />;
      case UPDATE_CUSTOMER_LIMIT:
        return <UpdateCustomerLimit />;
      default:
        return <UpdateCustomerLimit />;
    }
  };

  return (
    <div>
      <h1>This is stOps page for Service team</h1>
      {props.ldap &&
      props.ldap.ldapGroup &&
      (props.ldap.ldapGroup["woodchipper"] ||
        props.ldap.ldapGroup["woodchipper-interns"]) ? (
        <div>
          <select
            value={props.stOpsOption}
            onChange={(e) => props.selectStOpsOption(e.target.value)}
          >
            <option value="updateCustomerLimit">Update Customer Limit</option>
            <option value="removeCustomerLimit">Remove Customer Limit</option>
            <option value="setWorkflowState">Set Workflow State</option>
          </select>
          <div>{showSelectedContent()}</div>
        </div>
      ) : (
        <h3>No LDAP Permission</h3>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stOpsOption: state.stOps.stOpsOption,
    ldap: state.ldap.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectStOpsOption: (optionValue) =>
      dispatch(selectStOpsOption(optionValue)),
  };
};

stOps.propTypes = {
  ldap: PropTypes.object.isRequired,
  stOpsOption: PropTypes.string.isRequired,
  selectStOpsOption: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stOps);
