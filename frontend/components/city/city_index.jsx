import React from 'react';
import CityIndexItem from './city_index_item';
import { Link } from 'react-router-dom';

class CityIndex extends React.Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {

    return (
      <div>


      </div>
    );
  }
}

export default CityIndex;
