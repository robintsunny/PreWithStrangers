import { RECEIVE_RSVP, REMOVE_RSVP } from "../actions/rsvp_actions";
import { RECEIVE_EVENT } from "../actions/event_actions";
import merge from "lodash/merge";

const rsvpsReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case RECEIVE_EVENT:
      return action.payload.rsvps;
    case RECEIVE_RSVP:
      return merge({}, state, {
        [action.payload.rsvp.user_id]: action.payload.rsvp
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
