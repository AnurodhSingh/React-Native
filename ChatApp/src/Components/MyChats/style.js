import { StyleSheet } from 'react-native';
import scale, { verticalScale } from '../../../utils/scale';
import * as CONST from '../../../utils/Const';
import screen from '../../../utils/screen';

module.exports = StyleSheet.create({
	safeAreaView: {
        flex: 1,
    },
    imageContainer: {
        height:scale(40),
        width:scale(40),
        borderRadius:scale(20),
        backgroundColor:'grey',
        alignSelf:'flex-start'
    },
    rowStyle: {
        height:scale(70),
        width:screen.width,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:CONST.LOGIN_BG_COLOR,
        margin:scale(10),
        marginBottom:0,
        padding:scale(10),
        paddingHorizontal:scale(20)
    },
    cheveronStyle :{
        width: scale(20), 
        height: scale(20),
        transform: [{ rotate: '180deg'}],
    },
    nameStyle: {
        fontSize:scale(18)
    },
    messageStyle: {
        fontSize:scale(14)
    },
    timeContainerStyle: {
        alignItems:'center',
        width:scale(50),
    },
    timeStyle: {
        fontSize:scale(12)
    }
});