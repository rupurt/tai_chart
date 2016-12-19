// @flow
import { SET_INSTRUMENT } from "../actions/set-instrument";

export default (state: string = "MSFT", action: Object) => {
  switch (action.type) {
    case SET_INSTRUMENT:
      return action.instrument;
    default:
      return state;
  }
}
