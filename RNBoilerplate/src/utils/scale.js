import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import * as CONST from '../utils/Const';

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function( units = 1 ) {
	return ( (units) * height ) / CONST.SCREEN_HEIGHT;
}


const verticalScale = size => height / CONST.SCREEN_HEIGHT * size;

export { verticalScale };