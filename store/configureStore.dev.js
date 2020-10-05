/* global module */
import { createBrowserHistory as createHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";

export const history = createHistory();

// Middleware you want to use in development:
const enhancer = applyMiddleware(logger, thunk);

export function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(enhancer)
  );

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(
        require("../reducers") /*.default if you use Babel 6+ */
      )
    );
  }

  return store;
}
