import validateableInputFactory from '../ValidateableInput';
import validate from './Birthdate.validator';
import { defineMessages } from 'react-intl';

export const statusCodes = {
	E_EMPTY: 			'E_EMPTY',
	E_TOO_OLD: 			'E_TOO_OLD',
	E_TOO_EARLY: 		'E_TOO_EARLY',
	E_INVALID_FORMAT:  	'E_INVALID_FORMAT'
}

export const errorStrings = defineMessages({
	E_EMPTY: 			"This field is required. Please, enter your date of birth",
	E_TOO_OLD: 			"We accept that a human can live longer than 150 years. If that's your case, please contact us via phone or email. We will consider your application in exceptional order",
	E_TOO_EARLY: 		"Only dates from the past are accepted",
	E_INVALID_FORMAT: 	"Wrong data format. Please, make sure you enter the date in YYYY-MM-DD format",
})

export default validateableInputFactory({
	fieldName: "birthdate",
	inputType: "date",
	validate,
	errorStrings,
	inProgressFilter: [statusCodes.E_EMPTY, statusCodes.E_TOO_OLD, statusCodes.E_TOO_EARLY, statusCodes.E_INVALID_FORMAT]
})