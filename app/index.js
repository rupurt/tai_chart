import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import routes from "./routes";
import configureStore from "./store/configure-store";
import "./app.global.css";

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router history={ history } routes={ routes } />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
