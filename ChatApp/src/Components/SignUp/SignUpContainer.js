import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignInComponent from './SignUpComponent';
import * as CommonAction from '../../actions/commonAction';
import * as UserDetailAction from '../../actions/userDetailAction';

class SignUpContainer extends Component {
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
    UserDetailAction: bindActionCreators(UserDetailAction,dispatch),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);