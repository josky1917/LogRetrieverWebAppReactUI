import { SMEOPS_SELECT } from "../../actions/smeOps/smeOpsType";

const initialState = {
  smeOpsOption: "replaceInstance",
};

const smeOpsSelectOpsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMEOPS_SELECT:
      return {
        ...state,
        smeOpsOption: action.payload,
      };
    default:
      return state;
  }
};

export default smeOpsSelectOpsReducer;
