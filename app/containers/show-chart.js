import React from "react";
import { connect } from "react-redux";
import InstrumentChart from "../components/instrument-chart";

export default connect(
  (state, ownProps) => ({
    instrument: ownProps.params.instrument,
    timeframe: ownProps.params.timeframe
  })
)(InstrumentChart);
