import * as CONST from '../../utils/Const';

// This action saves the user object into the async storage.
export function saveUserDetail(userObj) {
	return{
		type: CONST.USER_DETAIL, 
		payload: userObj
	};
}

