import axios from "axios";

import {
  PIN_CUSTOMER_TO_AMI_REQUEST,
  PIN_CUSTOMER_TO_AMI_SUCCESS,
  PIN_CUSTOMER_TO_AMI_FAILURE,
} from "./smeOpsType";

const smePinCustomerToAmiRequest = () => {
  return {
    type: PIN_CUSTOMER_TO_AMI_REQUEST,
  };
};

const smePinCustomerToAmiSuccess = (data) => {
  return {
    type: PIN_CUSTOMER_TO_AMI_SUCCESS,
    payload: data,
  };
};

const smePinCustomerToAmiFailure = (error) => {
  return {
    type: PIN_CUSTOMER_TO_AMI_FAILURE,
    payload: error,
  };
};

export const smePinCustomerToAmi = (requestData) => {
  return (dispatch) => {
    if (requestData.accountId) {
      dispatch(smePinCustomerToAmiRequest());
      axios
        .post("/PinCustomerToAmiRequestCall", {
          requestData,
        })
        .then((response) => {
          dispatch(smePinCustomerToAmiSuccess(response.data));
        })
        .catch((error) => {
          dispatch(smePinCustomerToAmiFailure(error.message));
        });
    }
  };
};
