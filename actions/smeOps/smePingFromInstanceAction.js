import axios from "axios";

import {
  PING_FROM_INSTANCE_REQUEST,
  PING_FROM_INSTANCE_SUCCESS,
  PING_FROM_INSTANCE_FAILURE,
} from "./smeOpsType";

const smePingFromInstanceRequest = () => {
  return {
    type: PING_FROM_INSTANCE_REQUEST,
  };
};

const smePingFromInstanceSuccess = (data) => {
  return {
    type: PING_FROM_INSTANCE_SUCCESS,
    payload: data,
  };
};

const smePingFromInstanceFailure = (error) => {
  return {
    type: PING_FROM_INSTANCE_FAILURE,
    payload: error,
  };
};

export const smePingFromInstance = (requestData) => {
  return (dispatch) => {
    if (requestData.vpnId && requestData.managementIp) {
      dispatch(smePingFromInstanceRequest());
      axios
        .post("/PingFromInstanceRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(smePingFromInstanceSuccess(response.data));
        })
        .catch((error) => {
          dispatch(smePingFromInstanceFailure(error.message));
        });
    }
  };
};
