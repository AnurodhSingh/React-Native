import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AllUsersComponent from './AllUsersComponent';
class AllUsersContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  render() {
    return (
      <AllUsersComponent {...this.props}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(AllUsersContainer);