export default function validate(value, statusCodes = {}) {

	// Empty string
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Maximium 30 characters 
	if ( value.length > 30 )
		return statusCodes.E_TOO_LONG;
	
	// First character should be a letter
	const firstLetterRegex = /^[a-z]$/;
	let isValid = firstLetterRegex.test(value.charAt(0));
	if ( ! isValid ) {
		return statusCodes.E_FIRST_LETTER;
	}		
	
	// Name should comply with the format 
	const usernameRegex = /^[-a-z0-9]+$/;
	isValid = usernameRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_FORMAT;
	}

	// Minimum 5 characters
	if ( value.length < 5 ) 
		return statusCodes.E_TOO_SHORT;

	// Last character must be a letter or a digit
	const lastLetterRegex = /^[a-z0-9]$/;
	isValid = lastLetterRegex.test(value.charAt(value.length - 1));
	if ( ! isValid ) {
		return statusCodes.E_LAST_SYMBOL;
	}		

	return true;
}