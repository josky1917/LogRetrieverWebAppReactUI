import axios from "axios";

import {
  PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_REQUEST,
  PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_SUCCESS,
  PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_FAILURE,
} from "./smeOpsType";

const smePinCustomerAccountToInstanceSizeRequest = () => {
  return {
    type: PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_REQUEST,
  };
};

const smePinCustomerAccountToInstanceSizeSuccess = (data) => {
  return {
    type: PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_SUCCESS,
    payload: data,
  };
};

const smePinCustomerAccountToInstanceSizeFailure = (error) => {
  return {
    type: PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_FAILURE,
    payload: error,
  };
};

export const smePinCustomerAccountToInstanceSize = (requestData) => {
  return (dispatch) => {
    if (requestData.accountId) {
      dispatch(smePinCustomerAccountToInstanceSizeRequest());
      axios
        .post("/PinCustomerAccountToInstanceSizeRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(smePinCustomerAccountToInstanceSizeSuccess(response.data));
        })
        .catch((error) => {
          dispatch(smePinCustomerAccountToInstanceSizeFailure(error.message));
        });
    }
  };
};
