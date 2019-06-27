import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

// To enable Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState, middleware)
{
	// Get a store enhancer that applies the given middleware
	// https://redux.js.org/api/applymiddleware
	middleware = applyMiddleware(middleware);

	// Apply several store enhancers in a row
	// https://redux.js.org/api/compose#composefunctions
	middleware = composeEnhancers(middleware);

	// Finally, create the store
	// https://redux.js.org/api/createstore
	const store = createStore(rootReducer, initialState, middleware);
	return store;
}