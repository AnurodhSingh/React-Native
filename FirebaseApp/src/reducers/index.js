/**
 * @author Systango Technologies 
 * Date:
 * Description: INDEX REDUCER !
 * 
 */
import { combineReducers } from 'redux';
import downloadEpisodeReducer from './downloadEpisodeReducer';

export default combineReducers({
	downloadEpisodeReducer,
});