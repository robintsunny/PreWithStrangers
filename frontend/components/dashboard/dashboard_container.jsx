import { connect } from "react-redux";
import { deleteRsvp } from "../../actions/rsvp_actions";
// import { fetchDashboardEvents } from "../../actions/dashboard_event_actions";
import { fetchEvents } from "../../actions/dashboard_event_actions";
import Dashboard from "./dashboard";

const msp = state => {
  return {
    // events: Object.values(state.entities.events)
    joinedEvents: Object.values(state.entities.events).filter(
      event => event.host_id !== state.session.id
    ),
    hostedEvents: Object.values(state.entities.events).filter(
      event => event.host_id === state.session.id
    )
    // rsvps: Object.values(state.entities.rsvps)
  };
};

const mdp = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteRsvp: id => dispatch(deleteRsvp(id))
  };
};

export default connect(
  msp,
  mdp
)(Dashboard);
