import validateableInputFactory from '../ValidateableInput';
import validate from './Lastname.validator';
import { defineMessages } from 'react-intl';

export const statusCodes = {
	E_EMPTY: 			'E_EMPTY',
	E_FIRST_LETTER: 	'E_FIRST_LETTER',
	E_INVALID_FORMAT: 	'E_INVALID_FORMAT',
	E_TOO_LONG: 		'E_TOO_LONG',
	E_LAST_SYMBOL: 		'E_LAST_SYMBOL',
	E_WRONG_ENDING: 	'E_WRONG_ENDING'
}

export const errorStrings = defineMessages({
	E_EMPTY: 			"This field is required. Please, enter your family name",
	E_FIRST_LETTER: 	"Family name should start with captial letter",
	E_INVALID_FORMAT: 	"The family name doesn't follow the format. Please, use only letters and a hyphen",
	E_TOO_LONG: 		"Family name shouldn't exceed 50 characters",
	E_LAST_SYMBOL: 		"Family name should end in lowercase letter",
	E_WRONG_ENDING: 	"Minimum 2 letters after a hyphen",
})

export default validateableInputFactory({
	fieldName: "lastname",
	inputType: "text",
	validate,
	errorStrings,
	inProgressFilter: [statusCodes.E_EMPTY, statusCodes.E_LAST_SYMBOL, statusCodes.E_WRONG_ENDING]
});