import * as CONST from '../../utils/Const';

// This action saves the user object into the async storage.
export function userLogout() {
	return{
		type: CONST.USER_LOGOUT, 
	};
}
