import { connect } from "react-redux";
import { createEvent } from "../../actions/event_actions";
import { receiveErrors } from "../../actions/event_actions";
import EventForm from "./event_form";

const msp = state => {
  return {
    event: {
      name: "",
      description: "",
      date: "",
      time: "",
      address: "",
      city: "",
      host_id: state.session.id
    },
    formType: "Create",
    errors: state.errors.event
  };
};

const mdp = dispatch => {
  return {
    submitEvent: event => dispatch(createEvent(event)),
    clearErrors: error => dispatch(receiveErrors(error))
  };
};

export default connect(
  msp,
  mdp
)(EventForm);
