
import * as CONST from './../../utils/Const';
import { takeEvery, takeLatest } from 'redux-saga/effects';
import { postNotification } from './postNotification';

function* rootSaga() {
	[
		yield takeEvery(CONST.POST_NOTIFICATION, postNotification),
	];
}

export default rootSaga;