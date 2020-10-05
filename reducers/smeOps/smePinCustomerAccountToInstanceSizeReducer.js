import {
  PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_REQUEST,
  PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_SUCCESS,
  PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_FAILURE,
} from "../../actions/smeOps/smeOpsType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const smePinCustomerAccountToInstanceSizeReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default smePinCustomerAccountToInstanceSizeReducer;
