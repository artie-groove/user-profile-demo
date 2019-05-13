import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
import formStateValid from 'formStateValid.json';
import formStateInvalid from 'formStateInvalid.json';

import approvable from './ApprovableInput/ApprovableInput.reducer';
import validateable from './ValidateableInput/ValidateableInput.reducer';
import passwordConfirmation from './PasswordConfirmation/PasswordConfirmation.reducer';

import { actionTypes } from './SignupForm.actions';
import { actionTypes as inputActionTypes } from './ValidateableInput/ValidateableInput.actions';

const status = (state = {}, action) => {
	switch ( action.type ) {
		case actionTypes.FORM_SUBMIT:
			return {
				...state,
				isPending: true,
				externalError: undefined
			}
		case actionTypes.FORM_SUBMIT_RESPONSE:
			return {
				...state,
				isPending: false,
				isRegistered: action.response.status === 'SUCCESS'
			}
		case actionTypes.FORM_SUBMIT_FAILURE:
			return {
				...state,
				isPending: false,
				isRegistered: undefined,
				externalError: action.externalError
			}
		case inputActionTypes.FIELD_EDITED:
			return {
				...state,
				externalError: undefined
			}
		default:
			return state;		
	}
}

const data = reduceReducers(approvable, validateable, passwordConfirmation);

const signup = combineReducers({
	status,
	data
});

const formPopulate = (state = {}, action) => {
	switch ( action.type ) {
		case actionTypes.FORM_POPULATE_VALID:
			return { ...formStateValid };

		case actionTypes.FORM_POPULATE_INVALID:
			return { ...formStateInvalid };

		default:
			return state;
	}
}

export default reduceReducers(signup, formPopulate); 