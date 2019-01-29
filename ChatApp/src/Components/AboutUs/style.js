import { StyleSheet, Dimensions } from 'react-native';
import * as CONST from './../../../utils/Const';
import scale, { verticalScale } from './../../../utils/scale';
const {height, width } = Dimensions.get('window');

module.exports = StyleSheet.create({
	safeAreaViewStyle: {
		flex: 1,
	},
	mainContainerStyle: {
		flex: 1,
		justifyContent:'center',
		backgroundColor: CONST.LOGIN_BG_COLOR
	},
	bodyContainerStyle: {
		flex: 1,
	},
	headerStyle: {
		paddingLeft: scale(5),
		height:scale(20),
		marginBottom:scale(5),
		flexDirection:'row',
		alignItems:'center'
	},
	headerTextStyle: {
		paddingHorizontal: scale(10),
		fontSize: scale(16)
	}
});