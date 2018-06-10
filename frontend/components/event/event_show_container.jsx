import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import { fetchCity } from '../../actions/city_actions';
import EventShow from './event_show';


const msp = (state,ownProps) => {
  return {
    event: state.events[ownProps.match.params.eventId]
    
  }
}

const mdp = dispatch => {
  return {
    fetchEvent: id => dispatch(fetchEvent(id)),
    fetchCity: id => dispatch(fetchCity(id))
  }
}

export default connect(msp,mdp)(EventShow)
