import {StyleSheet, Platform} from 'react-native';
import screen from '@utils/screen';
import scale from '../../utils/scale';

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6c93d1',
	},
	title: {
		marginTop:20,
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#FFF',
	},
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});