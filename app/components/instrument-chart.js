// @flow
import React, { Component, PropTypes } from "react";
import { format } from "d3-format";
import { scaleTime } from "d3-scale";
import { timeFormat, timeParse } from "d3-time-format";
import { tsv } from "d3-request";
import { ChartCanvas, Chart } from "react-stockcharts";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { CrossHairCursor, MouseCoordinateX, MouseCoordinateY } from "react-stockcharts/lib/coordinates";
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";

// import styles from "./tai-chart.css";

const type = "hybrid";
const ratio = 2.0;
const width = 800;
const height = 400;
const margin = { left: 55, right: 0, top: 10, bottom: 25 };
const parseDate = timeParse("%Y-%m-%d");

const gridHeight = height - margin.top - margin.bottom;
const gridWidth = width - margin.left - margin.right;
const grid = {
  tickStrokeDasharray: "ShortDot",
  tickStrokeOpacity: 0.2,
  tickStrokeWidth: 1
};
const xGrid = Object.assign({ innerTickSize: -1 * gridHeight }, grid);
const yGrid = Object.assign({ innerTickSize: -1 * gridWidth }, grid);

class InstrumentChart extends Component {
  constructor(props) {
    super();
    this.state = { data: [] };
  }

  render() {
    tsv("/Users/alex/workspace/fremantle_capital_tai/vendor/tai_chart/data/MSFT.tsv", (err, data) => {
      data.forEach((d, i) => {
        d.date = new Date(parseDate(d.date).getTime());
        d.open = +d.open;
        d.high = +d.high;
        d.low = +d.low;
        d.close = +d.close;
      });

      this.setState({ data: data });
    });

    return (
      <ChartCanvas
        ratio={ ratio }
        width={ width }
        height={ height }
        margin={ margin }
        type={ type }
        seriesName={ this.props.instrument }
        data={ this.state.data }
        xAccessor={ d => d && d.date }
        xScale={ scaleTime() }
        xExtents={ [new Date(2016, 0, 0), new Date(2016, 10, 24)] }
      >
        <Chart id={ 1 } yExtents={ d => [d.high, d.low] }>
          <XAxis axisAt="bottom" orient="bottom" ticks={ 6 } { ...xGrid } />
          <YAxis axisAt="left" orient="left" ticks={ 5 } { ...yGrid } />
          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={ timeFormat("%Y-%m-%d") }
          />
          <MouseCoordinateY
            at="left"
            orient="left"
            displayFormat={ format(".2f") }
          />
          <CandlestickSeries />
        </Chart>
        <CrossHairCursor />
      </ChartCanvas>
    );
  }
}

InstrumentChart.propTypes = {
  params: PropTypes.object
};

export default InstrumentChart;
