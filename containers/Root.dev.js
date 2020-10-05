import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import App from "../components/App";

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
