export default function validate(value, statusCodes = {})
{
	// Empty string
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Maximum 50 characters 
	if ( value.length > 50 )
		return statusCodes.E_TOO_LONG;
	
	// First character must be a capital letter
	const firstLetterRegex = /^[A-ZА-ЯЁ]$/;
	let isValid = firstLetterRegex.test(value.charAt(0));
	if ( ! isValid ) {
		return statusCodes.E_FIRST_LETTER;
	}

	// Last character must be a letter
	const lastLetterRegex = /^[a-zа-яё]$/;
	isValid = lastLetterRegex.test(value.charAt(value.length-1));
	if ( ! isValid ) {
		return statusCodes.E_LAST_SYMBOL;
	}

	// Minimum two letters after a hyphen
	const endingRegex = /-[a-zа-яё]$/;
	isValid = endingRegex.test(value);
	if ( isValid ) {
		return statusCodes.E_WRONG_ENDING;
	}		
	
	// Surname should comply with the format
	const nameRegex = /^[A-ZА-ЯЁ][-a-zа-яё]*$/;
	isValid = nameRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_FORMAT;
	}

	return true;
}