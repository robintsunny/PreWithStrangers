import * as EventAPIUtil from "../util/event_api_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const fetchEvents = () => {
  return dispatch => {
    return EventAPIUtil.fetchEvents().then(payload => {
      return dispatch({ type: RECEIVE_EVENTS, payload: payload });
    });
  };
};

export const fetchEvent = id => {
  return dispatch => {
    return EventAPIUtil.fetchEvent(id).then(payload => {
      return dispatch({ type: RECEIVE_EVENT, payload: payload });
    });
  };
};

export const createEvent = event => {
  return dispatch => {
    return EventAPIUtil.createEvent(event).then(payload => {
      return dispatch({ type: RECEIVE_EVENT, payload: payload });
    });
  };
};

export const updateEvent = event => {
  return dispatch => {
    return EventAPIUtil.updateEvent(event).then(event => {
      return dispatch({ type: RECEIVE_EVENT, event: event });
    });
  };
};

export const deleteEvent = id => {
  return dispatch => {
    return EventAPIUtil.deleteEvent(id).then(event => {
      return dispatch({ type: REMOVE_EVENT, eventId: id });
    });
  };
};
