export const SET_TIMEFRAME = "SET_TIMEFRAME";

export function setTimeframe(timeframe) {
  return {
    type: SET_TIMEFRAME,
    timeframe: timeframe
  };
}
