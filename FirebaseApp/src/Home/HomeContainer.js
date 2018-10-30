import React, {Component} from 'react';
import {HomeComponent} from './HomeComponent';

type Props = {};
export default class App extends Component<Props> {
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
