import { statusCodes } from './PasswordConfirmation.container';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';

export default function validate(value) {
	// Пустая строка
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	return PROPER_VALUE;
}