/**
 * @author: Systango Pvt Ltd
 * Date: Dec 21 2017
 * 
 * AUTHENTICATION ACTIONS -LOGIN,SIGNUP, AND LOGOUT !
 */

import * as CONST from '../utils/Const';

export function signinAct(email, password) {
	return {
		type: CONST.RESET_SIGNIN,
		email : email,
		password : password,
	};
}

export function loginSuccess (json) {
	return {
		type: CONST.SIGNIN_SUCCESS,
		payload: json
	};
}
  
export function loginFailure (error) {
	return {
		type: CONST.SIGNIN_FAILED,
		payload: error
	};
}