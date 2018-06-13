import * as DashboardEventAPIUtil from "../util/dashboard_event_api_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
// export const DASHBOARD_EVENTS = "DASHBOARD_EVENTS";

export const fetchEvents = () => {
  return dispatch => {
    return DashboardEventAPIUtil.fetchEvents().then(payload => {
      return dispatch({ type: RECEIVE_EVENTS, payload: payload });
    });
  };
};

// export const fetchDashboardEvents = () => {
//   return dispatch => {
//     return DashboardEventAPIUtil.fetchDashboardEvents().then(payload => {
//       return dispatch({ type: DASHBOARD_EVENTS, payload: payload });
//     });
//   };
// };
