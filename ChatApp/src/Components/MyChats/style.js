import { StyleSheet } from 'react-native';
import scale, { verticalScale } from '../../../utils/scale';
import * as CONST from '../../../utils/Const';
import screen from '../../../utils/screen';

module.exports = StyleSheet.create({
	safeAreaView: {
        flex: 1,
    },
    imageContainer: {
        height:scale(50),
        width:scale(50),
        borderRadius:scale(25),
        backgroundColor:'rgb(21,119,100)',
        justifyContent:'center',
        alignItems:'center',
    },
    rowStyle: {
        height:scale(70),
        width:screen.width,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:CONST.LOGIN_BG_COLOR,
        margin:scale(10),
        marginBottom:0,
        paddingHorizontal:scale(10),
        borderRadius:scale(10)
    },
    cheveronStyle :{
        width: scale(16), 
        height: scale(16),
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
        fontSize:scale(12),
        paddingVertical:scale(5),
    }
});