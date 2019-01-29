import { StyleSheet } from 'react-native';
import * as CONST from './../../../utils/Const';
import scale, { verticalScale } from './../../../utils/scale';

module.exports = StyleSheet.create({
	safeAreaViewStyle: {
		flex: 1,
	},
	mainContainerStyle: {
		flex: 1,
		backgroundColor: CONST.WHITE_COLOR
	},
	mainHeaderStyle: {
		flexDirection:'row',
		height: verticalScale(60),
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: CONST.LOGIN_BG_COLOR
	},
	backIconStyle: {
		marginLeft: scale(10),
	},
	headerTextStyle: {
		fontSize:scale(24),
		color:'black',
		fontWeight:'bold'
	},
	headerStyle: {
		alignSelf:'stretch',
		backgroundColor:CONST.LOGIN_BG_COLOR,
		marginTop:scale(20),
		padding:scale(5)
	},
	headerTextStyle: {
		fontSize:scale(20)
	},
	bodyContainerStyle: {
		flex:1,
		marginTop:scale(10),
		alignSelf:'stretch',
		alignItems:'center'
	},
	imagePickerContainerStyle: {
		backgroundColor:"#cccccc",
		height:scale(120),
		width:scale(120),
		borderRadius:scale(60),
		borderColor:'grey',
		borderWidth:1,
		alignItems:'center',
		justifyContent:'center'
	},
	imageStyle: {
		height:scale(110),
		width:scale(110),
		borderRadius:scale(55),
		borderColor:'grey',
		borderWidth:1,
		alignItems:'center',
		justifyContent:'center'
	},
});