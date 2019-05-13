import { actionTypes } from './Auth.actions';

const auth = (state = {
	isAuthenticated: !!localStorage.getItem('jwt'),
	token: localStorage.getItem('jwt')
}, action) => {
	switch ( action.type ) {
		case actionTypes.AUTH_REQUEST:
			return {
				isPending: true
			}
		case actionTypes.AUTH_RESPONSE:
			return {
				isPending: false,
				isAuthenticated: true,
				token: action.token
			}
		case actionTypes.AUTH_FAILURE:
			return {
				isPending: false,
				isAuthenticated: undefined,
				externalError: action.error,
				token: undefined
			}
		case actionTypes.AUTH_LOGOUT:
			return {
				isPending: false,
				isAuthenticated: false
			}
		default:
			return state;
	}
}

export default auth;