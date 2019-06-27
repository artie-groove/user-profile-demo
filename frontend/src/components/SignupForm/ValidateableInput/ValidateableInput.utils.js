import { PROPER_VALUE } from './ValidateableInput.factory'; 

// Three distinct rules for controlling error display:
// 1. If the value is correct, no error
// 2. If the value is incorrect and typing is finished, show the error
// 3. If the value is incorrect, but the user is still typing, we use filter
//    to suppress showing errors that can be temporary due to incomplete typing
const shouldShowError = (status, isTypingFinished, inProgressFilter = []) => {
	
	// The value completely complies with the format
	if ( ! status || status === PROPER_VALUE ) {
		return false;
	}

	// User finished editing, allow displaying the error
	if ( isTypingFinished )
		return true

	// If the user is still typing, postpone showing the errors defined by the filter
	return inProgressFilter.some( filteredStatus => filteredStatus === status )
		? false
		: true;
}

// Get translated error message or empty string if the value
// is correct or the error was temporarily suppressed
export const getErrorIntl = (intl, status, errorStrings = {}, isTypingFinished = true, inProgressFilter = []) => {
	return shouldShowError(status, isTypingFinished, inProgressFilter)
		? intl.formatMessage(errorStrings[status])
		: '';
}

// Extract error codes from keys in the error strings object
// and represent them an identitiy array: x[code] = code
export function getErrorCodes(errorStrings) {
	const keys = Object.keys(errorStrings);
	let errorCodes = {};
	for ( let i = 0; i < keys.length; i++ ) {
		errorCodes[keys[i]] = keys[i];
	}
	return errorCodes;
}

// If the value is correct a validator will return true
// or validation error code instead.
// The function returns a validator that utilizes original validator
// to return PROPER_VALUE if the value is correct.
// It will also inject error codes extracted from the error strings object
export function getEnhancedValidator(validate, errorStrings = {}) {
	const errorCodes = getErrorCodes(errorStrings);
	return (value) => {
		const validationResult = validate(value, errorCodes);
		return validationResult === true
			? PROPER_VALUE
			: validationResult;
	}
}