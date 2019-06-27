import { actionTypes } from './ApprovableInput.actions';

// Single field reducer
const fieldData = (state = {}, action) => {
	switch ( action.type ) {
		case actionTypes.REQUEST_APPROVAL:
			return {
				...state,
				isPending: true
			}
		case actionTypes.RESPONSE_APPROVAL:
			return {
				...state,
				isPending: false,
				isApproved: action.response.status === 'APPROVED'
			}
		case actionTypes.RESPONSE_APPROVAL_ERROR:
			return {
				...state,
				isPending: false,
				isApproved: undefined,
				externalError: action.externalError
			}
		default:
			return state;		
	}
}

// Universal (any field) reducer that uses
// previously defined single-field reducer
const data = (state = {}, action) => {
	if ( !action.fieldName )
		return state;
	
	return {
		...state,
		[action.fieldName]: fieldData(state[action.fieldName], action)
	}	
}

export default data;