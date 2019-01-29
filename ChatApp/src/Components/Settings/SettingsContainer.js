import React, { Component } from 'react';
import SettingsComponent from './SettingsComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CommonAction from '../../actions/commonAction';
import * as UserDetailAction from '../../actions/userDetailAction';
class SettingsContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <SettingsComponent {...this.props}/>
    );
  }
}
function mapStateToProps(state) {
	const { UserDetailReducer } = state;
	return {
        userDetail:UserDetailReducer.userDetail,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
    CommonAction: bindActionCreators(CommonAction,dispatch),
    UserDetailAction: bindActionCreators(UserDetailAction,dispatch),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);