import * as DashboardEventAPIUtil from "../util/dashboard_event_api_util";

export const DASHBOARD_EVENTS = "DASHBOARD_EVENTS";

export const fetchEvents = () => {
  return dispatch => {
    return DashboardEventAPIUtil.fetchEvents().then(payload => {
      return dispatch({ type: DASHBOARD_EVENTS, payload: payload });
    });
  };
};
