import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
import promise from './Promise';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(onCompletion){
	const enhancer = compose(
		applyMiddleware(
			sagaMiddleware,
			promise
		)
	);

	const store = createStore(reducer, enhancer);
	sagaMiddleware.run(rootSaga);
	return store;
}