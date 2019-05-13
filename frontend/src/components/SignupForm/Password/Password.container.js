import validateableInputFactory from '../ValidateableInput';
import validate from './Password.validator';
import { defineMessages } from 'react-intl';

export const statusCodes = {
	E_EMPTY: 			'E_EMPTY',
	E_INVALID_FORMAT: 	'E_INVALID_FORMAT',
	E_INSUFFICIENT: 	'E_INSUFFICIENT',
	E_TOO_SHORT: 		'E_TOO_SHORT',
	E_TOO_LONG: 		'E_TOO_LONG'
}

export const errorStrings = defineMessages({
	E_EMPTY: 			"This is a requried field. Please, enter a password",
	E_INVALID_FORMAT:	"The password contains illegal symbols. Please, adhere to the specified format",
	E_INSUFFICIENT: 	"Please, use at least 2 symbol groups: letters, digits or special characters",
	E_TOO_SHORT:		"Password should be at least 8 symbols long",
	E_TOO_LONG: 		"Password should be less that 128 symbols long. Please, use a shorter password"
})

export default validateableInputFactory({
	fieldName: "password",
	inputType: "password",
	validate,
	errorStrings,
	inProgressFilter: [statusCodes.E_EMPTY, statusCodes.E_TOO_SHORT, statusCodes.E_INSUFFICIENT]
})