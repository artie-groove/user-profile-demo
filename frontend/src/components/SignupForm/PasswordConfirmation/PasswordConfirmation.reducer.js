import { PASSWORDS_CHECKED, E_PASSWORD_NOT_VALID } from './PasswordConfirmation.actions';
import { statusCodes } from './PasswordConfirmation.container';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';

export default (state, action) => {
	switch (action.type) {
		case PASSWORDS_CHECKED:
			return {
				...state,
				passwordConfirmation: {
					...state.passwordConfirmation,
					isValid: action.areEqual,
					validityStatus: action.areEqual ? PROPER_VALUE : statusCodes.E_PASSWORDS_MISMATCH
				}
			}
		case E_PASSWORD_NOT_VALID:
			return {
				...state,
				passwordConfirmation: {
					...state.passwordConfirmation,
					isValid: undefined,
					validityStatus: statusCodes.E_PASSWORD_NOT_VALID
				}
			}
		default:
			return state;
	}
}