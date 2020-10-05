import { HOME_SELECT } from "../../actions/home/homeType";

const initialState = {
  homeOption: "telemetry",
};

const homeSelectOpsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_SELECT:
      return {
        ...state,
        homeOption: action.payload,
      };
    default:
      return state;
  }
};

export default homeSelectOpsReducer;
