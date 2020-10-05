import axios from "axios";

import {
  TELEMETRY_REQUEST,
  TELEMETRY_SUCCESS,
  TELEMETRY_FAILURE,
} from "./homeType";

const homeTelemetryRequest = () => {
  return {
    type: TELEMETRY_REQUEST,
  };
};

const homeTelemetrySuccess = (data) => {
  return {
    type: TELEMETRY_SUCCESS,
    payload: data,
  };
};

const homeTelemetryFailure = (error) => {
  return {
    type: TELEMETRY_FAILURE,
    payload: error,
  };
};

export const homeTelemetry = (requestData) => {
  return (dispatch) => {
    if (requestData.controlIp) {
      dispatch(homeTelemetryRequest());
      axios
        .post("/TelemetryRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(homeTelemetrySuccess(response.data));
        })
        .catch((error) => {
          dispatch(homeTelemetryFailure(error.message));
        });
    }
  };
};
