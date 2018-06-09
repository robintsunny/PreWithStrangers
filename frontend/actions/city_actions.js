import * as CityAPIUtil from '../util/city_api_util';

export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_CITY = 'RECEIVE_CITY';

export const fetchCities = () => {
  return dispatch => {
    return CityAPIUtil.fetchCities().then(cities => {
      return dispatch({type: RECEIVE_CITIES, cities: cities})
    })
  }
}

export const fetchCity = (id) => {
  return dispatch => {
    return CityAPIUtil.fetchCity(id).then(city => {
      return dispatch({type: RECEIVE_CITY, city: city})
    })
  }
}
