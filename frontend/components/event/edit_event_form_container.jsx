import React from "react";
import { connect } from "react-redux";
import { fetchEvent, updateEvent } from "../../actions/event_actions";
import EventForm from "./event_form";

class EditEventForm extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render() {
    const { event, formType, submitEvent } = this.props;
    if (!event) {
      return null;
    }
    return (
      <EventForm event={event} formType={formType} submitEvent={submitEvent} />
    );
  }
}

const msp = (state, ownProps) => {
  return {
    event: state.entities.events[ownProps.match.params.eventId],
    formType: "Update"
  };
};

const mdp = dispatch => {
  return {
    submitEvent: event => dispatch(updateEvent(event)),
    fetchEvent: id => dispatch(fetchEvent(id))
  };
};

export default connect(
  msp,
  mdp
)(EditEventForm);
