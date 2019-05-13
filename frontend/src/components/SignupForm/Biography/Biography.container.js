import validateableInputFactory from '../ValidateableInput';
import validate from './Biography.validator';
import { defineMessages } from 'react-intl';

export const statusCodes = {
	E_TOO_LONG: 'E_TOO_LONG',
}

export const errorStrings = defineMessages({
	E_TOO_LONG: "Please, shorten your biography to 4000 symbols",
})

export default validateableInputFactory({
	fieldName: "biography",
	inputType: "textarea",
	validate,
	errorStrings
});