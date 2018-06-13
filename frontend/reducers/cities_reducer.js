import { RECEIVE_EVENTS, RECEIVE_EVENT } from "../actions/event_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import merge from "lodash/merge";

const citiesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.payload.cities;
    case RECEIVE_EVENT:
      return merge({}, state, {
        [action.payload.city.id]: action.payload.city
      });
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default citiesReducer;
