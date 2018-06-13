import { connect } from "react-redux";
import { createRsvp, deleteRsvp } from "../../actions/rsvp_actions";
import { fetchEvents } from "../../actions/event_actions";
import Dashboard from "./dashboard";

const msp = state => {
  return {};
};

const mdp = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    createRsvp: () => dispatch(createRsvp()),
    deleteRsvp: () => dispatch(deleteRsvp())
  };
};

export default connect(
  null,
  null
)(Dashboard);
