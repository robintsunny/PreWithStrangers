import { RECEIVE_EVENT_ERRORS, RECEIVE_EVENT } from "../actions/event_actions";

const eventErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return [];
      }
    case RECEIVE_EVENT:
      return [];
    default:
      return state;
  }
};

export default eventErrorsReducer;
