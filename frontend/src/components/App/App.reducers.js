import { actionTypes } from './App.actions';

const userProfile = (state = {
	isPending: false,
	data: undefined
}, action) => {
	switch ( action.type ) {
		case actionTypes.DATA_FETCH_REQUEST:
			return {
				isPending: true,
				data: undefined
			}
		case actionTypes.DATA_FETCH_RESPONSE:
			return {
				isPending: false,
				data: action.data
			}
		case actionTypes.DATA_FETCH_FAILURE:
			return {
				isPending: false,
				externalError: action.error,
				data: undefined
			}
		default:
			return state;
	}
}

export default userProfile;