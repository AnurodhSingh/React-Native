import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects';
import * as CONST from '../utils/Const';
import { loginSuccess, loginFailure } from '../actions/signinAction';
import { securePost, securePostSaga, sendJSON } from '../utils/sendJSON';

export function* fetchData (action) {
	try {
		const data = yield call(securePost,'users/login', '',{'login': action.email,'password': action.password});
		yield put({ type: CONST.SIGNIN_SUCCESS, data });
		console.log('@@@@@@@ fetchData ',(data));
	} catch (e) {
		yield put({ type: CONST.SIGNIN_FAILED });
	}
}

export function* fetchLogin (action) {
	try {
		const data = yield call(sendJSON,'login', {'email': action.email,'password': action.password});
		console.log('@@@@@@@ fetchLogin data ',(data));
		yield put(loginSuccess(data));
	} catch (e) {
		yield put(loginFailure(e));
	}
}

// export function* fetchData (action) {
// 	try {
// 		yield put ({type:CONST.START_SPINNER});
// 		const data = yield call(secureGet,'services/get_pricing', '');
// 		yield put({ type: CONST.SIGNIN_SUCCESS, data });
// 		yield put ({type:CONST.STOP_SPINNER});
// 		console.log('@@@@@@@',(data));
// 	} catch (e) {
// 		yield put({ type: CONST.SIGNIN_FAILED });
// 	}
// }