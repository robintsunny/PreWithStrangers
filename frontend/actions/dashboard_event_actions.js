import * as DashboardEventAPIUtil from "../util/dashboard_event_api_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

export const fetchJoinedEvents = () => {
  return dispatch => {
    return DashboardEventAPIUtil.fetchJoinedEvents().then(payload => {
      return dispatch({ type: RECEIVE_EVENTS, payload: payload });
    });
  };
};
export const fetchHostedEvents = () => {
  return dispatch => {
    return DashboardEventAPIUtil.fetchHostedEvents().then(payload => {
      return dispatch({ type: RECEIVE_EVENTS, payload: payload });
    });
  };
};
