import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SpinnerEmt from 'react-native-spinkit';
class Spinner extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}
	render() {
		console.log(this.props.isFetching);
		if (this.props.isFetching) {
			return (
				<View style={styles.spinnerContainer}>
					<SpinnerEmt
						style={styles.spinner}
						size={100}
						type={'Wave'}
						color={'#b7b3b3'}
					/>
				</View>
			);
		} else {
			return null;
		}
	}
}
function mapStateToProps(state) {
	const { CommonReducer } = state;
	return {
		isFetching: CommonReducer.isFetching
	};
}

Spinner.propTypes = {
	isFetching: PropTypes.bool
};

export default connect(mapStateToProps)(Spinner);
