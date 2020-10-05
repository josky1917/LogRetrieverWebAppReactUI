import axios from "axios";

import {
  REPLACE_INSTANCE_REQUEST,
  REPLACE_INSTANCE_SUCCESS,
  REPLACE_INSTANCE_FAILURE,
} from "./smeOpsType";

const smeReplaceInstanceRequest = () => {
  return {
    type: REPLACE_INSTANCE_REQUEST,
  };
};

const smeReplaceInstanceSuccess = (data) => {
  return {
    type: REPLACE_INSTANCE_SUCCESS,
    payload: data,
  };
};

const smeReplaceInstanceFailure = (error) => {
  return {
    type: REPLACE_INSTANCE_FAILURE,
    payload: error,
  };
};

export const smeReplaceInstance = (requestData) => {
  return (dispatch) => {
    if (requestData.vpnId && requestData.managementIp) {
      dispatch(smeReplaceInstanceRequest());
      axios
        .post("/ReplaceInstanceRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(smeReplaceInstanceSuccess(response.data));
        })
        .catch((error) => {
          dispatch(smeReplaceInstanceFailure(error.message));
        });
    }
  };
};
