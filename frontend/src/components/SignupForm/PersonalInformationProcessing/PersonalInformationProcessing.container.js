import validateableInputFactory from '../ValidateableInput';
import validate from './PersonalInformationProcessing.validator';
import { defineMessages } from 'react-intl';

export const statusCodes = {
	E_IMPOSED: 'E_IMPOSED',
}

export const errorStrings = defineMessages({
	E_IMPOSED: "Consent to personal information processing is required to sign up to our serivce",
})

export default validateableInputFactory({
	fieldName: "personal-information-processing",
	inputType: "checkbox",
	validate,
	errorStrings
})