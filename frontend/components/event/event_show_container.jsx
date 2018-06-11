import React from "react";
import { connect } from "react-redux";
import { fetchEvent, deleteEvent } from "../../actions/event_actions";
import { fetchCity } from "../../actions/city_actions";
import EventShow from "./event_show";

const msp = (state, ownProps) => {
  console.log(state.entities.events);
  return {
    event: state.entities.events[ownProps.match.params.eventId],
    currentUserId: state.session.id
  };
};

const mdp = dispatch => {
  return {
    fetchEvent: id => dispatch(fetchEvent(id)),
    fetchCity: id => dispatch(fetchCity(id)),
    deleteEvent: () => dispatch(deleteEvent())
  };
};

export default connect(
  msp,
  mdp
)(EventShow);
