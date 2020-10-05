import axios from "axios";

import {
  TCP_DUMP_REQUEST,
  TCP_DUMP_SUCCESS,
  TCP_DUMP_FAILURE,
} from "./smeOpsType";

const smeTcpDumpRequest = () => {
  return {
    type: TCP_DUMP_REQUEST,
  };
};

const smeTcpDumpSuccess = (data) => {
  return {
    type: TCP_DUMP_SUCCESS,
    payload: data,
  };
};

const smeTcpDumpFailure = (error) => {
  return {
    type: TCP_DUMP_FAILURE,
    payload: error,
  };
};

export const smeTcpDump = (requestData) => {
  return (dispatch) => {
    if (requestData.vpnId && requestData.managementIp) {
      dispatch(smeTcpDumpRequest());
      axios
        .post("/TcpDumpRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(smeTcpDumpSuccess(response.data));
        })
        .catch((error) => {
          dispatch(smeTcpDumpFailure(error.message));
        });
    }
  };
};
