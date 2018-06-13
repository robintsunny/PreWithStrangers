import * as RsvpAPIUtil from "../util/rsvp_api_util";

export const RECEIVE_RSVP = "RECEIVE_RSVP";
export const REMOVE_RSVP = "REMOVE_RSVP";

export const createRsvp = rsvp => {
  return dispatch => {
    return RsvpAPIUtil.createRsvp(rsvp).then(payload => {
      return dispatch({ type: RECEIVE_RSVP, payload: payload });
    });
  };
};

export const deleteRsvp = id => {
  return dispatch => {
    return RsvpAPIUtil.deleteRsvp(id).then(payload => {
      return dispatch({ type: REMOVE_RSVP, rsvpId: payload.rsvp.user_id });
    });
  };
};
