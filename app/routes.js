// @flow
import React from "react";
import { Route, IndexRedirect } from "react-router";
import App from "./containers/app";
import ChooseChart from "./containers/choose-chart";
import ShowChart from "./containers/show-chart";

export default (
  <Route path="/" component={ App }>
    <IndexRedirect to="charts" />
    <Route path="charts" component={ ChooseChart }>
      <Route path=":instrument/:timeframe" component={ ShowChart } />
    </Route>
  </Route>
);
