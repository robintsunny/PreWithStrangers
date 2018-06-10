import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const msp = state => {
  return {
    event: {
      name: '',
      description: '',
      date: '',
      time: '',
      address: '',
      city_id: '',
      host_id: ''
    },
    formType: 'Create'
  }
}


const mdp = dispatch => {
  return {
    submitEvent: event => dispatch(createEvent(event))
  }
}


export default connect(msp,mdp)(EventForm)
