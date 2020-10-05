import {
  SET_WORKFLOW_STATE_REQUEST,
  SET_WORKFLOW_STATE_SUCCESS,
  SET_WORKFLOW_STATE_FAILURE,
} from "../../actions/stOps/stOpsType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const stSetWorkflowStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKFLOW_STATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_WORKFLOW_STATE_SUCCESS:
      return {
        loading: false,
        data: Object.assign({}, action.payload),
        error: "",
      };
    case SET_WORKFLOW_STATE_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stSetWorkflowStateReducer;
