import {
  SINGLE_TUNNEL_NOTIFICATION_REQUEST,
  SINGLE_TUNNEL_NOTIFICATION_SUCCESS,
  SINGLE_TUNNEL_NOTIFICATION_FAILURE,
} from "../../actions/home/homeType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const homeSingleTunnelNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_TUNNEL_NOTIFICATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_TUNNEL_NOTIFICATION_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case SINGLE_TUNNEL_NOTIFICATION_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeSingleTunnelNotificationReducer;
