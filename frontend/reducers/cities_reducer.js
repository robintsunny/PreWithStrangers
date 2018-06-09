import {
  RECEIVE_CITIES,
  RECEIVE_CITY,
} from '../actions/city_actions';
import merge from 'lodash/merge';

const citiesReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CITIES:
      return merge({},state,action.cities)
    case RECEIVE_CITY:
      return merge({},state,{[action.city.id]: action.city})
    default: return state
  }
};

export default citiesReducer;
