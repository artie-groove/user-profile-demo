import { statusCodes } from './Biography.container';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';

export default function validate(value) {
	// ограничиваем объём текста
	if ( value && value.length > 4000 )
		return statusCodes.E_TOO_LONG;

	return PROPER_VALUE;
}