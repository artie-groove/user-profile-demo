import validateableInputFactory from '../ValidateableInput';
import validate from './Firstname.validator';
import { defineMessages } from 'react-intl';

export const statusCodes = {
	E_EMPTY: 			'E_EMPTY',
	E_FIRST_LETTER: 	'E_FIRST_LETTER',
	E_INVALID_FORMAT: 	'E_INVALID_FORMAT',
	E_TOO_LONG: 		'E_TOO_LONG'
}

export const errorStrings = defineMessages({
	E_EMPTY: 			"This field is required. Please, enter your name",
	E_FIRST_LETTER: 	"Name should begin with a captial letter",
	E_INVALID_FORMAT: 	"The name contains illegal characters. Please, adhere to the specified format",
	E_TOO_LONG: 		"Name shouldn't exceed 40 characters"
})

export default validateableInputFactory({
	fieldName: "firstname",
	inputType: "text",
	validate,
	errorStrings,
	inProgressFilter: [statusCodes.E_EMPTY]
});