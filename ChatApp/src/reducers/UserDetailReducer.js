import * as CONST from '../../utils/Const';

const initialState = {
	userDetail:null
};

// This reducer stores the state of common spinner and modal.
export default function (state = initialState, action) {
	switch (action.type) {
	case CONST.USER_DETAIL:
		return {
			...state,
			userDetail: action.payload,
		};
	case CONST.USER_LOGOUT:
		return {
			...state,
			userDetail: null,
		}
	default:
		return state;
	}
}
