import createHistory from "history/createBrowserHistory";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const history = createHistory();

export function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, thunk)
    // composeWithDevTools(enhancer)
  );
}
