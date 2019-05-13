import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState, middleware) {
	middleware = applyMiddleware(middleware);
	middleware = composeEnhancers(middleware);
	const store = createStore(rootReducer, initialState, middleware);
	return store;
}