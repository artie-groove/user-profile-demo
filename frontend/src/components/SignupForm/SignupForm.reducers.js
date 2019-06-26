import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
import formStateValid from 'formStateValid.json';
import formStateInvalid from 'formStateInvalid.json';

import approvable from './ApprovableInput/ApprovableInput.reducer';
import validateable from './ValidateableInput/ValidateableInput.reducer';
import passwordConfirmation from './PasswordConfirmation/PasswordConfirmation.reducer';

import { actionTypes } from './SignupForm.actions';
import { actionTypes as inputActionTypes } from './ValidateableInput/ValidateableInput.actions';

import initialState from 'initialState.json';

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
			const keyFields = "lastname password passwordConfirmation email phone birthdate biography".split(" ");
			return {
				...state,
				externalError: undefined,

				currentAwaitingKeyField: ((previousValue) => {
					let fieldNameIndex = keyFields.indexOf(action.fieldName);
					
					// Skip if the field is not a key field
					if ( ! ~ fieldNameIndex )
						return previousValue;
					
					// Also skip if it's not the farthest
					if ( fieldNameIndex < keyFields.indexOf(previousValue) )
						return previousValue;

					// If last edited key field is the final, return it
					if ( fieldNameIndex >= keyFields.length - 1 )
						return action.fieldName;

					// Next key field in the list
					return keyFields[fieldNameIndex + 1];

				})(state.currentAwaitingKeyField),

				// To determine the current step we check action.fieldName against an array of key fields
				// Step counter can only be increased, not the other way
				step: keyFields.reduce( (previousValue, fieldName, index) => {
						if ( previousValue > index ) return previousValue;
						return fieldName === action.fieldName
							? index + 1
							: previousValue
					}, state.step),

			}
		
		default:
			return state;		
	}
}

const signupReset = (state, action) => {
	switch ( action.type ) {
		case actionTypes.FORM_RESET:
			return initialState.signup;

		default:
			return state;
	}
}

const signup = reduceReducers(
	combineReducers({
		status,
		data: reduceReducers(
			approvable,
			validateable,
			passwordConfirmation
		)
	}),
	signupReset
);


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