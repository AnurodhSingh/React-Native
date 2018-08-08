/**
 * @author Systanto Technologies
 * Date August 2, 2018 
 * Description: Signin Screen.
 * 
 */
import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';
import PropTypes from 'prop-types';
import SigninComponent from './SigninComponent';
import showToast from '../../utils/Toast';
import { signinAct } from '../../actions/signinAction';
import { startSpinner, stopSpinner } from '../../actions/commonAction';

class SigninContainer extends Component {

	UNSAFE_componentWillReceiveProps(nextProps) {
		const { navigate } = this.props.navigation;
		console.log('@@@@@@@@ navigate ',navigate);
		if (nextProps.token && nextProps.token != '' && nextProps.status == 'success') {
			console.log('#### ');
			showToast('Login successful. Add next action here.');
			navigate('HomeScreen');
		} else if (!nextProps.status && nextProps.message !== '') {
			showToast(nextProps.message);
		}
	}

	render() {
		return (
			<SigninComponent {...this.props} />
		);
	}
}

function mapStateToProps(state) {
	const { signinReducer } = state;
	return {
		token: signinReducer.token,
		status: signinReducer.status,
		message: signinReducer.message,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSigninClicked: (email, password) => {
			dispatch(signinAct(email, password));
		},
		startSpin: () => {
			dispatch(startSpinner());
		},
		stopSpin: () => {
			dispatch(stopSpinner());
		}
	};
};

SigninContainer.propTypes = {
	navigation: PropTypes.object,
	token: PropTypes.string,
	status: PropTypes.bool,
	message: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);