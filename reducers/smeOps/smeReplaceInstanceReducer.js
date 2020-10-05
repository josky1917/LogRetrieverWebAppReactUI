import {
  REPLACE_INSTANCE_REQUEST,
  REPLACE_INSTANCE_SUCCESS,
  REPLACE_INSTANCE_FAILURE,
} from "../../actions/smeOps/smeOpsType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const smeReplaceInstanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPLACE_INSTANCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REPLACE_INSTANCE_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case REPLACE_INSTANCE_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default smeReplaceInstanceReducer;
