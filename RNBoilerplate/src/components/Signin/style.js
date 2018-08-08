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
		fontSize: scale(21),
		textAlign: 'center',
		margin: 10,
		color: '#FFF',
	},
	topContainer: {
		flexDirection: 'row', 
		paddingVertical: 2,
	},
	signinLabel: {
		color: '#1d224f',
		fontSize: scale(24),
		fontFamily: 'OpenSans',
		textAlign: 'left',
	},
	label: {
		color: '#001e60',
		fontSize: scale(9),
		fontFamily: 'OpenSans',
		textAlign: 'left',
		marginVertical: scale(5),
	},
	midLabel: {
		color: '#001e60',
		fontSize: scale(11),
		fontFamily: 'OpenSans',
		textAlign: 'left',
		marginVertical: scale(1),
	},
	bigLabel: {
		color: '#1d224f',
		fontSize: scale(13),
		fontFamily: 'OpenSans-Semibold',
		textAlign: 'left',
		marginVertical: scale(1),
	},
	inputContainer: {
		marginTop: scale(10),
	},
	passBottomBrd: {
		borderBottomWidth: 1, 
		borderColor:'#001e60', 
		marginTop: scale(-3),
	},
	inputBox : {
		paddingVertical:5,
		paddingHorizontal:5,
		backgroundColor:'#FFF',
		alignSelf:'stretch',
		borderColor:'transparent',
		borderWidth:1,
		height:scale(40),
		fontSize: scale(14),
	},
	remPassConteiner: {
		marginTop: scale(15),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	chkboxContainer: {
		flexDirection: 'row', 
		alignItems: 'flex-end' ,
	},
	chkIcon: {
		height:scale(20),
		width:20,
	},
	submitButtonContainer: {
		marginTop: scale(30), 
		alignItems: 'center', 
		justifyContent: 'center',
	},
	submitButton: {
		backgroundColor:'#001e60',
		width: 200,
		height:scale(40),
		alignItems: 'center', 
		justifyContent: 'center',
	},
	submitBtnText: {
		color: '#ffffff',
		fontSize: scale(12),
		fontFamily: 'OpenSans-Semibold',
		textAlign: 'center',
	},
	hDivider: {
		marginVertical: scale(24),
		height: scale(2), 
		backgroundColor:'#ffffff',
	},
	socialBtn: {
		marginTop: scale(10),
		width:200, height:scale(40), flexDirection:'row'
	},
	socialButtonContainer: {
		zIndex: 11,
		alignItems: 'center', 
		justifyContent: 'center', 
	},
	socialIconContainer: {
		backgroundColor:'#fff',
		width: 47,
		height:scale(40),
		alignItems: 'center', 
		justifyContent: 'center',
	},
	socialTextContainer: {
		backgroundColor:'#fff',
		width: 157,
		height:scale(40),
		alignItems: 'center', 
		justifyContent: 'center',
	},
	socialBtnText: {
		color: '#001e60',
		fontSize: scale(12),
		fontWeight: '600',
		fontFamily: 'OpenSans-Semibold',
		textAlign: 'center',
	},
	socialVdivide: {
		backgroundColor:'#c2e6e1',
		width: 2,
		height:scale(40),
	},
	bottomBar: {
		position: 'absolute',
		bottom:0,
		flexDirection : 'row',
		height: scale(50),
		width: screen.WIDTH, 
		alignItems: 'center',
		padding: 5,
		paddingHorizontal: 20,
		backgroundColor: '#001e60',
	},
	bgImage: {
		zIndex: -1,
		position: 'absolute',
		bottom:0,
		width: screen.WIDTH, 
	},
	letsStartText: {
		color: '#c2e6e1',
		fontSize: scale(22),
		fontFamily:  Platform.OS === 'ios' ? 'MrsEavesItalic' : 'MrsEavesItalic_Italic',
		textAlign: 'left',
	},
	signUpBtn :{
		borderColor: '#c2e6e1',
		borderWidth: 1.5,
	},
	signUpText: {
		color: '#c2e6e1',
		fontSize: scale(10),
		paddingHorizontal:15, 
		paddingVertical:5,
		textAlign: 'center',
	},
	focusedInputBox:{
		borderColor:'#7bacb5',
		borderWidth:1,
	},
	errorMsgTextStyle :{
		color: '#b3441b',
		fontSize : scale(9),
		textAlign : 'left',
		fontStyle : 'italic',
		fontWeight : '600'
	},
	errorMsgViewStyle :{
		paddingVertical : 7.5,
		height : scale(11)
	},
	containerSignIn : {
		flex: 1,
		//justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: '#6c93d1',
	},
	logoContainer : {
		flex : 0.4,
		alignItems: 'center', 
		justifyContent: 'center',
	},
	logo : {
		//marginBottom : 0,	
	},
	createAccountText : {
		fontSize : 30,
		flex : 0.1,
		fontWeight: 'bold',
	},
	Emailcontainer : {
		flex : 0.1,
		
	},
	emailcontainerWrapper : {
		borderColor : 'grey',
		borderWidth : 2,
		flexDirection : 'row',
	},
	vectorIcon : {
		padding : 10,
		borderRightColor : 'gray',
		  borderRightWidth: 2,
		justifyContent : 'center',
	},
	inputfieldEmail : {
		height: 60,
		width : 240,
		fontSize : 20,
		paddingLeft : 20,

	},
	cancelIcon : {
		justifyContent : 'center',
		marginRight : 10
	},
	continueForSubsriptionContainer : {
		flex : 0.1,
		marginTop : 20,
	},
	continueForSubsription : {
		fontSize : 15,
		color : 'white',
		padding : 20,
		backgroundColor : 'black',
		paddingLeft : 53,
		paddingRight : 52,
		fontWeight: 'bold',
		
	},
	RvAccountAlready : {
		flexDirection  : 'row',
		flex : 0.1,
	},
	textRvAlready : {
	//	font
		fontWeight: 'bold',
	},
	GoogleContainer : {
		flex : 0.1, 
	},
	googlecontainerInner : {
		flexDirection : 'row',
		backgroundColor : 'rgb(249,67,66)',
	},
	googlelogo : {
		padding : scale(10),
		paddingLeft : scale(30),
		justifyContent : 'center',	
	},
	logInGoogle : {
		padding : 20,
		fontSize : 16,
		paddingLeft : 45,
		paddingRight : 50,
		color : 'white',
	},
	skipTextContainer : {
		flex : 0.1,
		justifyContent: 'center',
	},
	skipText : {
		textDecorationLine : 'underline'
	},
	FaceBookbtnClic : {
		padding : 20,
		fontSize : 16,
		paddingLeft : 42,
		paddingRight : 50,
		color : 'white',
	},
	facebookSignIncontainer : {
		flexDirection : 'row',
		backgroundColor : 'rgb(59, 89, 152)',
		
	},
	facebookSignIncontainertop : {
		flex : 0.1,
	},
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	  },
});