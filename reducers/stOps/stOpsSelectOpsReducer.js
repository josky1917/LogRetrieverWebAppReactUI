import { STOPS_SELECT } from "../../actions/stOps/stOpsType";

const initialState = {
  stOpsOption: "updateCustomerLimit",
};

const stOpsSelectOpsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOPS_SELECT:
      return {
        ...state,
        stOpsOption: action.payload,
      };
    default:
      return state;
  }
};

export default stOpsSelectOpsReducer;
