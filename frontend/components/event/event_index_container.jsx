import { connect } from "react-redux";
import { fetchEvents, deleteEvent } from "../../actions/event_actions";
import EventIndex from "./event_index";

const msp = state => {
  return {
    events: Object.values(state.entities.events),
    cities: Object.values(state.entities.cities)
  };
};

const mdp = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: id => dispatch(deleteEvent(id))
  };
};

export default connect(
  msp,
  mdp
)(EventIndex);
