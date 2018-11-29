import { put, call } from 'redux-saga/effects';
import { securePost, secureGet } from './../../utils/sendJSON';
import * as CONST from './../../utils/Const';

export function* postNotification (action) {
	try {
		const data = yield call(securePost,'',action.data);
		if(data.success){  
            alert(JSON.stringify(data))
        }
        else{
            alert(JSON.stringify(data))
        }
	} catch(error) {
        alert(error)
	}
}