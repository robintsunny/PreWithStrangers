import React from "react";
import { connect } from "react-redux";
import { fetchEvent, deleteEvent } from "../../actions/event_actions";
import { fetchCity } from "../../actions/city_actions";
import { createRsvp, deleteRsvp } from "../../actions/rsvp_actions";
import EventShow from "./event_show";
import { rsvpSelector } from "../../reducers/selectors";

const msp = (state, ownProps) => {
  const event_var = state.entities.events[ownProps.match.params.eventId];

  return {
    event: event_var,
    currentUserId: state.session.id,
    host: !event_var ? undefined : state.entities.users[event_var.host_id],
    cityName: !event_var
      ? undefined
      : state.entities.cities[event_var.city_id].name,
    rsvps: !event_var
      ? undefined
      : rsvpSelector(state.entities.rsvps, event_var.id),
    currentUserRsvp: state.entities.rsvps[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    fetchEvent: id => dispatch(fetchEvent(id)),
    fetchCity: id => dispatch(fetchCity(id)),
    deleteEvent: id => dispatch(deleteEvent(id)),
    createRsvp: rsvp => dispatch(createRsvp(rsvp)),
    deleteRsvp: id => dispatch(deleteRsvp(id))
  };
};

export default connect(
  msp,
  mdp
)(EventShow);
