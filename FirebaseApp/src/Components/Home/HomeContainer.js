import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
export default class HomeContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  render() {
    return (
      <HomeComponent {...this.props}/>
    );
  }
}