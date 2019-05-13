import { createLogic } from 'redux-logic';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';
import { statusCodes } from './PasswordConfirmation.container';
import { passwordsCheckedAction, passwordValidityError } from './PasswordConfirmation.actions';
import { actionTypes as validateableInputActionTypes, getActions } from '../ValidateableInput/ValidateableInput.actions';

const comparePasswordsOnFinishedEditing = createLogic({
	type: validateableInputActionTypes.FIELD_EDITED,
	validate({ getState, action }, allow, reject) {
		if ( action.fieldName === 'passwordConfirmation' ) {
			// оставляем в покое пустое поле
			const { value } = getState().signup.data['passwordConfirmation'] || {};
			if ( value && value.length ) {
				allow(action);
			}
		}
		reject(action);
	},
	// processOptions: {
	// 	successType: 	passwordsCheckedAction,
	// 	failType: 		passwordValidityError
	// },
	process({ getState, action }) {
		const state = getState();
		// Так как Redux изначально не имеет представления о составе полей,
		// он не может инициализирвоать поле [fieldName] в хранилище
		// (состав полей определяется во время выполнения),
		// мы должны "подложить" {} на случай, если поле будет проверяться
		// после расфокусировки соотвествующего input'a с пустым значением,
		// когда хранилище ещё ничего о нём не знает 
		const { validityStatus: passwordValidityStatus, value: passwordValue } = state.signup.data['password'] || {};
		const { validityStatus: passwordConfirmationValidityStatus, value: passwordConfirmationValue } = state.signup.data['passwordConfirmation'] || {};
		// если поле пароля правильно заполнено
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