import { actionTypes } from './ValidateableInput.actions';

const fieldData = (state = {}, action) => {
	switch ( action.type ) {
		case actionTypes.VALUE_CHANGED:
			return {
				...state,
				isTypingFinished: false,
				value: action.value,
				validityStatus: action.validityStatus,
				isApproved: undefined,
				externalError: ''
			}
		case actionTypes.FIELD_EDITED:
			return {
				...state,
				isTypingFinished: true
			}
		default:
			return state;		
	}
}

const data = (state = {}, action) => {
	if ( !action.fieldName ) return state;
	return {
		...state,
		[action.fieldName]: fieldData(state[action.fieldName], action)
	}	
}

export default data;