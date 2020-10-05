import React from "react";
import { Route, Switch } from "react-router-dom";

import home from "./containers/home/home";
import wxdLogs from "./containers/wxdLogs/wxdLogs";
import smeOps from "./containers/smeOps/smeOps";
import stOps from "./containers/stOps/stOps";

export default (
  <Switch>
    <Route exact path="/" component={home} />
    <Route path="/WxdLogs" component={wxdLogs} />
    <Route path="/SME-Ops" component={smeOps} />
    <Route path="/ST-Ops" component={stOps} />
  </Switch>
);
