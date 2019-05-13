import approvableInputFactory from '../ApprovableInput';
import validate from './Username.validator';
import { defineMessages } from 'react-intl'; 

export const statusCodes = {
	E_EMPTY: 			'E_EMPTY',
	E_FIRST_LETTER: 	'E_FIRST_LETTER',
	E_LAST_SYMBOL: 		'E_LAST_SYMBOL',
	E_INVALID_FORMAT: 	'E_INVALID_FORMAT',
	E_TOO_SHORT: 		'E_TOO_SHORT',
	E_TOO_LONG: 		'E_TOO_LONG'
}

export const errorStrings = defineMessages({
	E_EMPTY: 			"This field is required. Please, come up with a username",
	E_FIRST_LETTER: 	"Username should begin with a lowercase latin character",
	E_LAST_SYMBOL: 		"Name should end in a letter or a digit",
	E_INVALID_FORMAT: 	"The name contains illegal characters. Please, adhere to the specified format",
	E_TOO_SHORT: 		"Name should be at least 5 characters long",
	E_TOO_LONG: 		"Name shouldn't be longer than 30 characters"
})

const resultStrings = defineMessages({
	rejected: "Unfortunately, this name has already been taken. Please, come up with another one",
	approved: "Great, this is a suitable name!",
})

export default approvableInputFactory({
	fieldName: "username",
	inputType: "text",
	validate,
	resultStrings,
	errorStrings,
	inProgressFilter: [statusCodes.E_EMPTY, statusCodes.E_TOO_SHORT, statusCodes.E_LAST_SYMBOL],
	rejectedMsg: resultStrings.rejected,
	approvedMsg: resultStrings.approved
});