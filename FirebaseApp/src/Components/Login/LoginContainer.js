import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
export default class LoginContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  render() {
    return (
      <LoginComponent {...this.props}/>
    );
  }
}