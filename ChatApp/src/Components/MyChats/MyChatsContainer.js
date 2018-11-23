import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyChatsComponent from './MyChatsComponent';
class MyChatsContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  render() {
    return (
      <MyChatsComponent {...this.props}/>
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
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(MyChatsContainer);