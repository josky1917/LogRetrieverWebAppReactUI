import axios from "axios";

import { WX_LOG_REQUEST, WX_LOG_SUCCESS, WX_LOG_FAILURE } from "./wxLogType";

const wxLogRequest = () => {
  return {
    type: WX_LOG_REQUEST,
  };
};

const wxLogSuccess = (data) => {
  return {
    type: WX_LOG_SUCCESS,
    payload: data,
  };
};

const wxLogFailure = (error) => {
  return {
    type: WX_LOG_FAILURE,
    payload: error,
  };
};

export const wxLog = (requestData) => {
  return (dispatch) => {
    if (requestData.cgwIp && requestData.vgwIp) {
      dispatch(wxLogRequest());
      axios
        .post("/HistoricalLogRequestCall", { requestData })
        .then((response) => {
          dispatch(wxLogSuccess(response.data));
        })
        .catch((error) => {
          dispatch(wxLogFailure(error.message));
        });
    }
  };
};
