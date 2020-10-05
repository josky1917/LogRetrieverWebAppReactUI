import axios from "axios";

import {
  REMOVE_CUSTOMER_LIMIT_REQUEST,
  REMOVE_CUSTOMER_LIMIT_SUCCESS,
  REMOVE_CUSTOMER_LIMIT_FAILURE,
} from "./stOpsType";

const stRemoveCustomerLimitRequest = () => {
  return {
    type: REMOVE_CUSTOMER_LIMIT_REQUEST,
  };
};

const stRemoveCustomerLimitSuccess = (data) => {
  return {
    type: REMOVE_CUSTOMER_LIMIT_SUCCESS,
    payload: data,
  };
};

const stRemoveCustomerLimitFailure = (error) => {
  return {
    type: REMOVE_CUSTOMER_LIMIT_FAILURE,
    payload: error,
  };
};

export const stRemoveCustomerLimit = (requestData) => {
  return (dispatch) => {
    if (requestData.accountId) {
      dispatch(stRemoveCustomerLimitRequest());
      axios
        .post("/RemoveCustomerLimitRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(stRemoveCustomerLimitSuccess(response.data));
        })
        .catch((error) => {
          dispatch(stRemoveCustomerLimitFailure(error.message));
        });
    }
  };
};
