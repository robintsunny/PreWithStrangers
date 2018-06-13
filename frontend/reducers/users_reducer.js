import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_EVENT } from "../actions/event_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_EVENT:
      return merge({}, state, {
        [action.payload.host.id]: action.payload.host
      });
    default:
      return state;
  }
};

export default usersReducer;
