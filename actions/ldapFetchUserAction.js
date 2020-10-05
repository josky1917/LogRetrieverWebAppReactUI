import axios from "axios";

import {
  LDAP_FETCH_USER_REQUEST,
  LDAP_FETCH_USER_SUCCESS,
  LDAP_FETCH_USER_FAILURE,
} from "./ldapType";

const ldapFetchUserRequest = () => {
  return {
    type: LDAP_FETCH_USER_REQUEST,
  };
};

const ldapFetchUserSuccess = (users) => {
  return {
    type: LDAP_FETCH_USER_SUCCESS,
    payload: users,
  };
};

const ldapFetchUserFailure = (error) => {
  return {
    type: LDAP_FETCH_USER_FAILURE,
    payload: error,
  };
};

export const ldapFetchUser = () => {
  return (dispatch) => {
    const ldapGroupName = [
      "wx-telemetry-ops",
      "vpc-looking-glass-ops",
      "aws-support-sme-vpn",
      "woodchipper",
      "woodchipper-interns",
    ];
    dispatch(ldapFetchUserRequest());
    axios
      .post("/LdapRequestCall", {
        ldapGroupName,
      })
      .then((response) => {
        dispatch(ldapFetchUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(ldapFetchUserFailure(error.message));
      });
  };
};
