import { connect } from 'react-redux';
import { fetchCities } from '../../actions/city_actions';
import { fetchEvents } from '../../actions/event_actions';
import CityIndex from './city_index';

const msp = state => {
  return {
    cities: Object.values(state.entities.cities)
  }
}


const mdp = dispatch => {
  return {
    fetchCities: () => dispatch(fetchCities()),
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(msp,mdp)(CityIndex)
