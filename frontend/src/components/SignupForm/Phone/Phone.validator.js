export default function validate(value, statusCodes = {}) {

	// Empty string
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Maximum 20 characters
	if ( value.length > 20 )
		return statusCodes.E_TOO_LONG;
	
	// First character must be a letter
	const firstSymbolRegex = /^\+/;
	let isValid = firstSymbolRegex.test(value.charAt(0));
	if ( ! isValid ) {
		return statusCodes.E_FIRST_SYMBOL;
	}

	// Only valid characters
	const phoneLexisRegex = /^[-+ 0-9]+$/;
	isValid = phoneLexisRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_CHARS;
	}
	
	// Phone number should comply with the format
	const phoneGrammarRegex = /^\+[0-9]{1,3}(?:(?:[- ][0-9]{2,4}){3,4}|[- ]?[0-9]{5,10})$/;
	isValid = phoneGrammarRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_FORMAT;
	}

	// Minimum 10 characters
	if ( value.length < 10 ) 
		return statusCodes.E_TOO_SHORT;

	return true;
}