import {
  TELEMETRY_REQUEST,
  TELEMETRY_SUCCESS,
  TELEMETRY_FAILURE,
} from "../../actions/home/homeType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const homeTelemetryReducer = (state = initialState, action) => {
  switch (action.type) {
    case TELEMETRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TELEMETRY_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case TELEMETRY_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeTelemetryReducer;
