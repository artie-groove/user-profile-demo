import approvableInputFactory from '../ApprovableInput';
import validate from './Email.validator';
import { defineMessages } from 'react-intl';

export const statusCodes = {
	E_EMPTY: 			'E_EMPTY',
	E_INVALID_FORMAT: 	'E_INVALID_FORMAT',
	E_TOO_LONG: 		'E_TOO_LONG'
}

export const errorStrings = defineMessages({
	E_EMPTY: 			"This field is required. Please, enter your email",
	E_TOO_LONG: 		"We don't accept emails longer than 128 symbols. PLease, use a shorter address",
	E_INVALID_FORMAT: 	"Email doesn't comply with the format. Please, make sure you typed the address correctly"
})

const resultMessages = defineMessages({
	rejected: "The address has already been taken by somebody. Please, use another one",
	approved: "This email address is fine!"
})

export default approvableInputFactory({
	fieldName: "email",
	inputType: "email",
	validate,
	errorStrings,
	inProgressFilter: [statusCodes.E_EMPTY, statusCodes.E_INVALID_FORMAT],
	rejectedMsg: resultMessages.rejected,
	approvedMsg: resultMessages.approved
})