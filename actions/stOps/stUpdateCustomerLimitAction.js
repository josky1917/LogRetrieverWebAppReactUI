import axios from "axios";

import {
  UPDATE_CUSTOMER_LIMIT_REQUEST,
  UPDATE_CUSTOMER_LIMIT_SUCCESS,
  UPDATE_CUSTOMER_LIMIT_FAILURE,
} from "./stOpsType";

const stUpdateCustomerLimitRequest = () => {
  return {
    type: UPDATE_CUSTOMER_LIMIT_REQUEST,
  };
};

const stUpdateCustomerLimitSuccess = (data) => {
  return {
    type: UPDATE_CUSTOMER_LIMIT_SUCCESS,
    payload: data,
  };
};

const stUpdateCustomerLimitFailure = (error) => {
  return {
    type: UPDATE_CUSTOMER_LIMIT_FAILURE,
    payload: error,
  };
};

export const stUpdateCustomerLimit = (requestData) => {
  return (dispatch) => {
    if (requestData.accountId) {
      dispatch(stUpdateCustomerLimitRequest());
      axios
        .post("/UpdateCustomerLimitRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(stUpdateCustomerLimitSuccess(response.data));
        })
        .catch((error) => {
          dispatch(stUpdateCustomerLimitFailure(error.message));
        });
    }
  };
};
