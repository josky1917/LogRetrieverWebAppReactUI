import {
  UPDATE_CUSTOMER_LIMIT_REQUEST,
  UPDATE_CUSTOMER_LIMIT_SUCCESS,
  UPDATE_CUSTOMER_LIMIT_FAILURE,
} from "../../actions/stOps/stOpsType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const stUpdateCustomerLimitReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_LIMIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CUSTOMER_LIMIT_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case UPDATE_CUSTOMER_LIMIT_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stUpdateCustomerLimitReducer;
