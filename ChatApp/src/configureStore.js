import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer} from 'redux-persist';
//import devTools from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import {
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
// import thunk from 'redux-thunk';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const reduxMiddleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.RootStackReducer,
);
const middleware = [sagaMiddleware, reduxMiddleware];

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
	whiteList: ['CommonReducer'],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export default function configureStore(onCompletion) {
	const enhancer = compose(
		applyMiddleware(
			...middleware,
		)
	);

	const store = createStore(persistedReducer, enhancer);
    sagaMiddleware.run(rootSaga);
    persistStore(store,onCompletion);
    
    return {store,persistStore};
}