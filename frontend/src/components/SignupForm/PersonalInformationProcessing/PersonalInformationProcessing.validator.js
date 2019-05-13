import { statusCodes } from './PersonalInformationProcessing.container';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';

export default function validate(value) {
	return value ? PROPER_VALUE : statusCodes.E_IMPOSED;
}