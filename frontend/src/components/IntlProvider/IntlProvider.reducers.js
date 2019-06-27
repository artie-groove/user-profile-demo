import { actionTypes } from './IntlProvider.actions'; 

const initialState = {
	locale: 'en',
	messages: null,
	isPending: null
};

export default (state = initialState, action) => {
	switch ( action.type )
	{
		case actionTypes.SWITCH_LOCALE_REQUEST:
			return { 
				...state,
				isPending: true
			}
		
		case actionTypes.SWITCH_LOCALE_RESPONSE:
			return {
				...action.data,
				isPending: false
			}
		
		case actionTypes.SWITCH_LOCALE_FAILURE:
		case actionTypes.SWITCH_LOCALE_RESET:
			return {
				...state,
				isPending: false,
				error: action.error
			}

		default:
			return state
	}
}