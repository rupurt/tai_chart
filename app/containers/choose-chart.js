import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Toolbar from "../components/toolbar";
import { setInstrument } from "../actions/set-instrument";
import { setTimeframe } from "../actions/set-timeframe";

const showChart = (dispatch, instrument, timeframe) => {
  if (instrument && timeframe) {
    const path = `/charts/${instrument}/${timeframe}`;
    dispatch(push(path));
  }
}

const ChooseChart = ({
  instrument,
  instruments,
  timeframe,
  timeframes,
  dispatch,
  children
}) => {
  return (
    <div>
      <Toolbar
        instruments={ instruments }
        timeframes={ timeframes }
        instrument={ instrument }
        timeframe={ timeframe }
        onInstrumentChange={
          instrument => setInstrument(instrument) &&
            showChart(dispatch, instrument, timeframe)
        }
        onTimeframeChange={
          timeframe => setTimeframe(timeframe) &&
            showChart(dispatch, instrument, timeframe)
        }
      />
      { children }
    </div>
  );
}

export default connect(
  state => ({
    instrument: state.instrument,
    instruments: state.instruments,
    timeframe: state.timeframe,
    timeframes: state.timeframes
  })
)(ChooseChart);
