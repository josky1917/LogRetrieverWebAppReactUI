import {
  GET_CUSTOMER_LIMIT_REQUEST,
  GET_CUSTOMER_LIMIT_SUCCESS,
  GET_CUSTOMER_LIMIT_FAILURE,
} from "../../actions/smeOps/smeOpsType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const smeGetCustomerLimitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_LIMIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CUSTOMER_LIMIT_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case GET_CUSTOMER_LIMIT_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default smeGetCustomerLimitReducer;
