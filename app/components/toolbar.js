import React, { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";

export default ({
  instrument,
  instruments,
  timeframe,
  timeframes,
  onInstrumentChange,
  onTimeframeChange
}) => {
  const timeframeDisabled = !instrument;
  let timeframeHint = "timeframe";
  if (timeframeDisabled) {
    timeframeHint += " (choose an instrument)";
  }

  return (
    <div>
      { /* TODO (ak): Figure out how to show instrument from URL. Currently it's showing the first item */ }
      <AutoComplete
        hintText="instrument"
        dataSource={ instruments }
        filter={ AutoComplete.fuzzyFilter }
        onNewRequest={ instrument => onInstrumentChange(instrument) }
        value={ instrument }
        openOnFocus
      />
      { /* TODO (ak): Figure out how to show timeframe from URL */ }
      <AutoComplete
        hintText={ timeframeHint }
        dataSource={ timeframes }
        filter={ AutoComplete.fuzzyFilter }
        onNewRequest={ option => onTimeframeChange(option.value) }
        value={ timeframe }
        disabled={ timeframeDisabled }
        openOnFocus
      />
    </div>
  );
}
