import React, {Component} from 'react';
import AnimationComponent from './AnimationComponent';

type Props = {};
export default class AnimationContainer extends Component<Props> {
  constructor(props) {
		super(props);
		this.state = {
		};
	}
  render() {
    return (
      <AnimationComponent {...this.props}/>
    );
  }
}
