import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CommonAction from '../../actions/commonAction';
import * as UserDetailAction from '../../actions/userDetailAction';
class LoginContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <LoginComponent {...this.props}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);