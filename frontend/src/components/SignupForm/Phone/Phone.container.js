import { defineMessages } from 'react-intl';
import approvableInputFactory from '../ApprovableInput';
import validate from './Phone.validator';

export const statusCodes = {
	E_EMPTY: 			'E_EMPTY',
	E_FIRST_SYMBOL: 	'E_FIRST_SYMBOL',
	E_INVALID_CHARS: 	'E_INVALID_CHARS',
	E_INVALID_FORMAT: 	'E_INVALID_FORMAT',
	E_TOO_SHORT: 		'E_TOO_SHORT',
	E_TOO_LONG: 		'E_TOO_LONG'
}

export const errorStrings = defineMessages({
	E_EMPTY: 			"This field is required. Please, enter your phone number",
	E_FIRST_SYMBOL: 	"The first character should be a plus symbol (+)",
	E_TOO_SHORT: 		"Phone number should be more than 10 characters long. Please, make sure you entered it correctly",
	E_TOO_LONG: 		"The phone number is too long. Please, use a shorter number",
	E_INVALID_CHARS: 	"Phone number can only contain digits, spaces or hyphens and a plus sign. Please, check for typos",
	E_INVALID_FORMAT: 	"The phone number doesn't comply with the format. Please, check if you typed it correctly"
})

const resultMessages = defineMessages({
	rejected: "This phone number has already been in use. Please, choose another one",
	approved: "This phone number will work!"
})

export default approvableInputFactory({
	fieldName: "phone",
	inputType: "tel",
	validate,
	errorStrings,
	inProgressFilter: [statusCodes.E_EMPTY, statusCodes.E_TOO_SHORT, statusCodes.E_INVALID_FORMAT],
	rejectedMsg: resultMessages.rejected,
	approvedMsg: resultMessages.approved,
});