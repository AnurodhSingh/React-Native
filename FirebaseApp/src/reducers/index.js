import { combineReducers } from 'redux';
import CommonReducer from './CommonReducer';
import UserDetailReducer from './UserDetailReducer';

export default combineReducers({
	CommonReducer,
	UserDetailReducer
});