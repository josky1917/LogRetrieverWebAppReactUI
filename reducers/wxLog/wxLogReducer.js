import {
  WX_LOG_REQUEST,
  WX_LOG_SUCCESS,
  WX_LOG_FAILURE,
} from "../../actions/wxLog/wxLogType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const wxLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case WX_LOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WX_LOG_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case WX_LOG_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default wxLogReducer;
