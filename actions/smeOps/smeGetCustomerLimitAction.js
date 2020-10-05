import axios from "axios";

import {
  GET_CUSTOMER_LIMIT_REQUEST,
  GET_CUSTOMER_LIMIT_SUCCESS,
  GET_CUSTOMER_LIMIT_FAILURE,
} from "./smeOpsType";

const smeGetCustomerLimitRequest = () => {
  return {
    type: GET_CUSTOMER_LIMIT_REQUEST,
  };
};

const smeGetCustomerLimitSuccess = (data) => {
  return {
    type: GET_CUSTOMER_LIMIT_SUCCESS,
    payload: data,
  };
};

const smeGetCustomerLimitFailure = (error) => {
  return {
    type: GET_CUSTOMER_LIMIT_FAILURE,
    payload: error,
  };
};

export const smeGetCustomerLimit = (requestData) => {
  return (dispatch) => {
    if (requestData.accountId) {
      dispatch(smeGetCustomerLimitRequest());
      axios
        .post("/GetCustomerLimitRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(smeGetCustomerLimitSuccess(response.data));
        })
        .catch((error) => {
          dispatch(smeGetCustomerLimitFailure(error.message));
        });
    }
  };
};
