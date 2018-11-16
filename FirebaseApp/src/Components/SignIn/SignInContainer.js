import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignInComponent from './SignInComponent';
import * as CommonAction from './../../actions/commonAction';

class SignInContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  render() {
    return (
      <SignInComponent {...this.props}/>
    );
  }
}
function mapStateToProps(state) {
	const { } = state;
	return {
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
    CommonAction: bindActionCreators(CommonAction,dispatch),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);