import { RECEIVE_RSVP, REMOVE_RSVP } from "../actions/rsvp_actions";
import { RECEIVE_EVENT } from "../actions/event_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { DASHBOARD_EVENTS } from "../actions/dashboard_event_actions";

import merge from "lodash/merge";

const rsvpsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      return action.payload.rsvps;
    case RECEIVE_RSVP:
      return merge({}, state, {
        [action.payload.rsvp.user_id]: action.payload.rsvp
      });
    case DASHBOARD_EVENTS:
      return merge({}, state, action.payload.rsvps);

    case REMOVE_RSVP:
      const newState = merge({}, state);
      delete newState[action.rsvp.user_id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default rsvpsReducer;
