import {
  PIN_CUSTOMER_TO_AMI_REQUEST,
  PIN_CUSTOMER_TO_AMI_SUCCESS,
  PIN_CUSTOMER_TO_AMI_FAILURE,
} from "../../actions/smeOps/smeOpsType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const smePinCustomerToAmiReducer = (state = initialState, action) => {
  switch (action.type) {
    case PIN_CUSTOMER_TO_AMI_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PIN_CUSTOMER_TO_AMI_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case PIN_CUSTOMER_TO_AMI_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default smePinCustomerToAmiReducer;
