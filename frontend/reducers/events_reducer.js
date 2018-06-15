import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT
} from "../actions/event_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { DASHBOARD_EVENTS } from "../actions/dashboard_event_actions";
import { REMOVE_RSVP } from "../actions/rsvp_actions";

import merge from "lodash/merge";

const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return merge({}, action.payload.events);
    case DASHBOARD_EVENTS:
      return Object.assign(
        {},
        action.payload.joined_events,
        action.payload.hosted_events
      );
    case RECEIVE_EVENT:
      return merge({}, state, {
        [action.payload.event.id]: action.payload.event
      });
    case REMOVE_EVENT:
      let newState = merge({}, state);

      delete newState[action.eventId];
      return newState;
    case REMOVE_RSVP:
      newState = merge({}, state);
      newState[action.event.id] = action.event;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default eventsReducer;
