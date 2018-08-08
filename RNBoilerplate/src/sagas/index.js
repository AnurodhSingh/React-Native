// import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import * as CONST from './../utils/Const';
import { securePost, secureGet, sendJSON } from './../utils/sendJSON';

import { put, takeEvery, call, } from 'redux-saga/effects';
import { fetchLogin } from './loginSaga';



function* rootSaga () {
	console.log('## rootSaga RESET_SIGNIN called 2');
	[
		//yield takeEvery(CONST.RESET_SIGNIN, fetchData), //get data call
		yield takeEvery(CONST.RESET_SIGNIN, fetchLogin) //login call without auth token 
	];
}

export default rootSaga;