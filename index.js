/* global module */
import "react-hot-loader/patch";
import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { configureStore, history } from "./store/configureStore";
import Root from "./containers/Root";
const store = configureStore();
import CSMProvider from "@art/csm-metrics-provider";
import ARTWebMetrics, { Event } from "@art/react-metrics";
import { configureAxios } from "./utils/axiosUtils";
const event = new Event("rootComponent", "cf");

const csm = new CSMProvider();
csm.configure({});
configureAxios(document);

ARTWebMetrics.setDefaultMetricsProviders([csm]);
render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById("root")
);
ARTWebMetrics.record(event);

if (module.hot) {
  module.hot.accept("./containers/Root", () => {
    const newConfigureStore = require("./store/configureStore");
    const newStore = newConfigureStore.configureStore();
    const newHistory = newConfigureStore.history;
    const NewRoot = require("./containers/Root").default;
    render(
      <AppContainer>
        <NewRoot store={newStore} history={newHistory} />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
