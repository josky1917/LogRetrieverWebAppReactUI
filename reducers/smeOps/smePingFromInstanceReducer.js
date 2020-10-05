import {
  PING_FROM_INSTANCE_REQUEST,
  PING_FROM_INSTANCE_SUCCESS,
  PING_FROM_INSTANCE_FAILURE,
} from "../../actions/smeOps/smeOpsType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const smePingFromInstanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case PING_FROM_INSTANCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PING_FROM_INSTANCE_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case PING_FROM_INSTANCE_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default smePingFromInstanceReducer;
