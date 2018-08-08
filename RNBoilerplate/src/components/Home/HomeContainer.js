/**
 * @author Systanto Technologies
 * Date August 2, 2018 
 * Description: Home Screen.
 * 
 */
import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';
import PropTypes from 'prop-types';
import HomeComponent from './HomeComponent';
import showToast from '../../utils/Toast';
import { signinAct } from '../../actions/signinAction';
import { startSpinner, stopSpinner } from '../../actions/commonAction';

class HomeContainer extends Component {

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.token && nextProps.status) {
			showToast('Login successful. Add next action here.');
		} else if (!nextProps.status && nextProps.message !== '') {
			showToast(nextProps.message);
		}
	}
	static navigationOptions = {
		title: 'Home',
		headerStyle: {
		backgroundColor: '#3369c6',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
		fontWeight: 'bold',
		},
	  };

	render() {
		return (
			<HomeComponent {...this.props} />
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

HomeContainer.propTypes = {
	navigation: PropTypes.object,
	token: PropTypes.string,
	status: PropTypes.bool,
	message: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);