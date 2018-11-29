import * as CONST from './../../utils/Const';

export function sendNotification(data) {
	return {
		type: CONST.POST_NOTIFICATION,
		data,
	};
}