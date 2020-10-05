import axios from "axios";

import {
  SET_WORKFLOW_STATE_REQUEST,
  SET_WORKFLOW_STATE_SUCCESS,
  SET_WORKFLOW_STATE_FAILURE,
} from "./stOpsType";

const stSetWorkflowStateRequest = () => {
  return {
    type: SET_WORKFLOW_STATE_REQUEST,
  };
};

const stSetWorkflowStateSuccess = (data) => {
  return {
    type: SET_WORKFLOW_STATE_SUCCESS,
    payload: data,
  };
};

const stSetWorkflowStateFailure = (error) => {
  return {
    type: SET_WORKFLOW_STATE_FAILURE,
    payload: error,
  };
};

export const stSetWorkflowState = (requestData) => {
  return (dispatch) => {
    if (requestData.ownerAccount) {
      dispatch(stSetWorkflowStateRequest());
      axios
        .post("/SetWorkflowStateRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(stSetWorkflowStateSuccess(response.data));
        })
        .catch((error) => {
          dispatch(stSetWorkflowStateFailure(error.message));
        });
    }
  };
};
