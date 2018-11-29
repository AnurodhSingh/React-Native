import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChatScreenComponent from './ChatScreenComponent';
import * as pushNotificationAction from './../../actions/pushNotificationAction';

class ChatScreenContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  render() {
    console.log('$$$$$$',this.props.userDetail);
    return (
      <ChatScreenComponent {...this.props}/>
    );
  }
}
function mapStateToProps(state) {
  const { UserDetailReducer } = state;
	return {
    userDetail : UserDetailReducer.userDetail
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
    pushNotificationAction: bindActionCreators(pushNotificationAction,dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ChatScreenContainer);