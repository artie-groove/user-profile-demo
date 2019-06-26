import { actionTypes } from './LoginForm.actions';

const authErrorCleaner = (state, action) => {
	switch ( action.type ) {
		case actionTypes.SIGNUP_LINK_CLICK:
			return {
				...state,
				externalError: ''
			}
		default:
			return state;
	}
}

export default authErrorCleaner;