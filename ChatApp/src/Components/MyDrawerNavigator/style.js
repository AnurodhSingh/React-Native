import { StyleSheet } from 'react-native';
import scale from '../../../utils/scale';

module.exports = StyleSheet.create({
	imagePickerContainerStyle: {
        alignItems:'center',
		height:scale(250),
		paddingTop:scale(30),
	},
	imagePickerStyle: {
		backgroundColor:"#cccccc",
		height:scale(150),
		width:scale(150),
		borderRadius:scale(75),
		borderColor:'grey',
		borderWidth:1,
		alignItems:'center',
		justifyContent:'center'
	},
	imageStyle: {
		height:scale(140),
		width:scale(140),
		borderRadius:scale(70),
		borderColor:'grey',
		borderWidth:1,
		alignItems:'center',
		justifyContent:'center'
	},
	userNameContainerStyle: {
		marginTop:scale(10),
		padding:scale(10),
		alignSelf:'stretch',
		alignItems:'center',
	},
	userNameStyle: {
		fontSize:scale(18),
	},
	navSectionStyle: {
		alignSelf:'stretch',
	},
	navItemStyle: {
		padding: scale(10),
		marginVertical: scale(10),
		backgroundColor: 'lightgrey',
		paddingLeft:scale(20),
	},
});