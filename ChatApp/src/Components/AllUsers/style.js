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
        width: scale(20), 
        height: scale(20),
        transform: [{ rotate: '180deg'}]
    },
    nameStyle: {
        fontSize:scale(18)
    },
});