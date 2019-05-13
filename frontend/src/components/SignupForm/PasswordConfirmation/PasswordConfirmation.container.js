import validateableInputFactory from '../ValidateableInput';
import validate from './PasswordConfirmation.validator';
import { defineMessages } from 'react-intl';

export const statusCodes = {
	E_EMPTY: 				'E_EMPTY',
	E_PASSWORD_NOT_VALID: 	'E_PASSWORD_NOT_VALID',
	E_PASSWORDS_MISMATCH: 	'E_PASSWORDS_MISMATCH'
}

export const errorStrings = defineMessages({
	E_EMPTY: 				"This field is required. Please, confirm the above entered password",
	E_PASSWORDS_MISMATCH: 	"Passwords don't match",
	E_PASSWORD_NOT_VALID: 	"Please, make sure both passwords follow the specified format"
})

const resultMessages = defineMessages({
	valid: "Passwords match"
})

const Component = validateableInputFactory({
	fieldName: "passwordConfirmation",
	inputType: "password",
	validMsg: resultMessages.valid,
	validate,
	errorStrings,
	inProgressFilter: [statusCodes.E_EMPTY]
});

export default Component;