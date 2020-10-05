import axios from "axios";

import {
  SINGLE_TUNNEL_NOTIFICATION_REQUEST,
  SINGLE_TUNNEL_NOTIFICATION_SUCCESS,
  SINGLE_TUNNEL_NOTIFICATION_FAILURE,
} from "./homeType";

const homeNotificationRequest = () => {
  return {
    type: SINGLE_TUNNEL_NOTIFICATION_REQUEST,
  };
};

const homeNotificationSuccess = (data) => {
  return {
    type: SINGLE_TUNNEL_NOTIFICATION_SUCCESS,
    payload: data,
  };
};

const homeNotificationFailure = (error) => {
  return {
    type: SINGLE_TUNNEL_NOTIFICATION_FAILURE,
    payload: error,
  };
};

export const homeSingleTunnelNotification = (requestData) => {
  return (dispatch) => {
    if (requestData.accountId) {
      dispatch(homeNotificationRequest());
      axios
        .post("/NotificationsRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(homeNotificationSuccess(response.data));
        })
        .catch((error) => {
          dispatch(homeNotificationFailure(error.message));
        });
    }
  };
};
