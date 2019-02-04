import { Alert } from 'react-native';
import resetRoute from './resetRoute';
import { getRootNavigation } from '../AppRoot';
import * as CONST from './Const';
import AsyncStorageUtil from './asyncStore';

export default function tokenExpired() {
	Alert.alert(
		'Token Expired',
		'Login to continue',
		[
			{
				text: 'OK', onPress: () => {			
					AsyncStorageUtil.removeAsyncstorage(CONST.AUTH_TOKEN_KEY);
					AsyncStorageUtil.removeAsyncstorage(CONST.USER_OBJECT);
					resetRoute('SignupScreen',getRootNavigation());
				}
			}
		],
		{ cancelable: false }
	);
}