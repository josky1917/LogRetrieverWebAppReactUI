import {
  TCP_DUMP_REQUEST,
  TCP_DUMP_SUCCESS,
  TCP_DUMP_FAILURE,
} from "../../actions/smeOps/smeOpsType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const smeTcpDumpReducer = (state = initialState, action) => {
  switch (action.type) {
    case TCP_DUMP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TCP_DUMP_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case TCP_DUMP_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default smeTcpDumpReducer;
