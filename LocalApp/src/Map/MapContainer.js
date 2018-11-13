import React, { Component } from 'react';
import MapComponent from './MapComponent';
export default class MapContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  render() {
    return (
      <MapComponent {...this.props}/>
    );
  }
}