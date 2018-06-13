import { connect } from "react-redux";
import { deleteRsvp } from "../../actions/rsvp_actions";
import { fetchJoinedEvents } from "../../actions/dashboard_event_actions";
import Dashboard from "./dashboard";

const msp = state => {
  return {
    joinedEvents: Object.values(state.entities.events),
    hostedEvents: "something"
  };
};

const mdp = dispatch => {
  return {
    fetchJoinedEvents: () => dispatch(fetchJoinedEvents()),
    deleteRsvp: id => dispatch(deleteRsvp(id))
  };
};

export default connect(
  msp,
  mdp
)(Dashboard);
