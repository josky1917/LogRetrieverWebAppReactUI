import {
  REMOVE_CUSTOMER_LIMIT_REQUEST,
  REMOVE_CUSTOMER_LIMIT_SUCCESS,
  REMOVE_CUSTOMER_LIMIT_FAILURE,
} from "../../actions/stOps/stOpsType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const stRemoveCustomerLimitReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CUSTOMER_LIMIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_CUSTOMER_LIMIT_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case REMOVE_CUSTOMER_LIMIT_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stRemoveCustomerLimitReducer;
