// @flow
const timeframes = [
  { value: "1m", text: "1 minute" },
  { value: "5m", text: "5 minutes" },
  { value: "15m", text: "15 minutes" },
  { value: "30m", text: "30 minutes" },
  { value: "1h", text: "1 hour" },
  { value: "2h", text: "2 hours" },
  { value: "4h", text: "4 hours" },
  { value: "6h", text: "6 hours" },
  { value: "12h", text: "12 hours" },
  { value: "1d", text: "1 day" },
  { value: "1w", text: "1 week" },
  { value: "2w", text: "2 weeks" },
  { value: "1m", text: "1 month" },
  { value: "1y", text: "1 year" }
];

export default (state = timeframes, action: Object) => {
  return state;
}
