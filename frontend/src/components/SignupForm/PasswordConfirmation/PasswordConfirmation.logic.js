import { createLogic } from 'redux-logic';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';
import { statusCodes } from './PasswordConfirmation.container';
import { passwordsCheckedAction, passwordValidityError } from './PasswordConfirmation.actions';
import { actionTypes as validateableInputActionTypes, getActions } from '../ValidateableInput/ValidateableInput.actions';

const comparePasswordsOnFinishedEditing = createLogic({
	type: validateableInputActionTypes.FIELD_EDITED,
	validate({ getState, action }, allow, reject) {
		if ( action.fieldName === 'passwordConfirmation' ) {
			// Don't touch an empty field
			const { value } = getState().signup.data['passwordConfirmation'] || {};
			if ( value && value.length ) {
				allow(action);
			}
		}
		reject(action);
	},
	process({ getState, action }) {
		const state = getState();
		// Getting the values and statuses for password and its confirmation
		const { validityStatus: passwordValidityStatus, value: passwordValue } = state.signup.data['password'];
		const { validityStatus: passwordConfirmationValidityStatus, value: passwordConfirmationValue } = state.signup.data['passwordConfirmation'] || {};
		// If the both password fields are filled in correctly
		if 	(
				passwordValidityStatus === PROPER_VALUE 
				&&
				passwordConfirmationValidityStatus === PROPER_VALUE
			) {
			const areEqual = passwordValue === passwordConfirmationValue;
			return passwordsCheckedAction(areEqual);
		}
		else return passwordValidityError();
	}
});

const clearFieldOnPasswordChange = createLogic({
	type: validateableInputActionTypes.VALUE_CHANGED,
	validate({ getState, action }, allow, reject) {
		action.fieldName === 'password'
			? allow(action)
			: reject(action);
	},
	process({ getState, action }, dispatch, done) {
		const { onChange } = getActions('passwordConfirmation');
		dispatch(onChange('', statusCodes.E_EMPTY));
		done();
	}
});

export default [
	comparePasswordsOnFinishedEditing,
	clearFieldOnPasswordChange
];