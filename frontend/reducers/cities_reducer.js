import { RECEIVE_EVENTS, RECEIVE_EVENT } from "../actions/event_actions";
import merge from "lodash/merge";

const citiesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.payload.cities;
    case RECEIVE_EVENT:
      return merge({}, state, {
        [action.payload.city.id]: action.payload.city
      });
    default:
      return state;
  }
};

export default citiesReducer;
