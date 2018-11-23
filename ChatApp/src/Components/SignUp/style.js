import { StyleSheet } from 'react-native';
import * as CONST from './../../../utils/Const';
import scale, { verticalScale } from './../../../utils/scale';

module.exports = StyleSheet.create({
	safeAreaViewStyle: {
		flex: 1,
	},
	mainContainerStyle: {
		flex: 1,
		backgroundColor: CONST.LOGIN_BG_COLOR
	},
	logoContainer: {
		alignItems: 'center',
		paddingTop: verticalScale(60),
	},
	logoStyle: {
		height: scale(60),
		width: scale(100),
	},
	logoTextStyle: {
		paddingVertical: scale(10),
		fontSize: scale(20),
		fontWeight: 'bold',
		color: CONST.WHITE_COLOR,
	},
	bottomContainer: {
		flex: 1,
		alignSelf: 'stretch',
		// backgroundColor:'green'
	},
	textInputStyle: {
		marginTop: scale(20),
		marginHorizontal: scale(20),
		borderWidth: 1,
		borderRadius: scale(25),
		justifyContent: 'center',
		alignItems: 'center',
		height: verticalScale(50),
		borderColor: CONST.INPUT_TEXT_BORDER_COLOR,
		fontSize: scale(18),
		textAlign: 'left',
		padding: verticalScale(10),
		paddingHorizontal: scale(20),
		backgroundColor:CONST.INPUT_TEXT_BG_COLOR,
		color:'white'
	},
	buttonStyle: {
		marginTop: scale(30),
		marginHorizontal: scale(60),
		borderWidth: 1,
		borderRadius: scale(25),
		justifyContent: 'center',
		alignItems: 'center',
		height: verticalScale(50),
		borderColor: CONST.INPUT_TEXT_BORDER_COLOR,
		backgroundColor:CONST.SUBMIT_BUTTON_BG_COLOR,
	},
	buttonTextStyle: {
		fontSize: scale(22),
		textAlign: 'left',
		color:'white'
	},
});