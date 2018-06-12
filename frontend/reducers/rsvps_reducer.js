import { RECEIVE_RSVP, REMOVE_RSVP } from "../actions/rsvp_actions";
import merge from "lodash/merge";

const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RSVP:
      return merge({}, state, {
        [action.payload.rsvp.id]: action.payload.rsvp
      });
    case REMOVE_RSVP:
      const newState = merge({}, state);
      delete newState[action.rsvpId];
      return newState;
    default:
      return state;
  }
};

export default rsvpsReducer;
