import {
  LDAP_FETCH_USER_REQUEST,
  LDAP_FETCH_USER_SUCCESS,
  LDAP_FETCH_USER_FAILURE,
} from "../actions/ldapType";

const initialState = {
  loading: false,
  users: {},
  error: "",
};

const ldapFetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LDAP_FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LDAP_FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: Object.assign({}, action.payload),
        error: "",
      };
    case LDAP_FETCH_USER_FAILURE:
      return {
        loading: false,
        users: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ldapFetchUserReducer;
