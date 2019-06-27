export default function validate(value, statusCodes = {})
{
	// Empty string
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Maximum 40 characters
	if ( value.length > 40 )
		return statusCodes.E_TOO_LONG;
	
	// First character must be a capital letter
	const firstLetterRegex = /^[A-ZА-ЯЁ]$/;
	let isValid = firstLetterRegex.test(value.charAt(0));
	if ( ! isValid ) {
		return statusCodes.E_FIRST_LETTER;
	}		
	
	// Name should comply with the format
	const nameRegex = /^.[a-zа-яё]*$/;
	isValid = nameRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_FORMAT;
	}		

	return true;
}