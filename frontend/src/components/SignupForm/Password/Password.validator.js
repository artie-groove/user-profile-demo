export default function validate(value, statusCodes) {

	// Empty string
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Maximum 128 characters 
	if ( value.length > 128 )
		return statusCodes.E_TOO_LONG;
	
	const grpLetters = "[a-zA-Z]";
	const grpDigits = "[0-9]";
	const grpSymbols = "";
	const format = `(?:${grpLetters}?${grpDigits}?${grpSymbols}?)+`;
	let regexp = new RegExp(format);
	regexp = /^(?:[a-zA-Z]|[0-9]|[-_,.'><=+&%$#@!* )(~\]/\\{}])+$/;
	let isValid = regexp.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_FORMAT;
	}

	// Password must contain at least two character groups
	// 1) Latin letters
	// 2) Digits
	// 3) Special characters
	regexp = /[a-zA-Z]/;
	const hasLetters = regexp.test(value);

	regexp = /[0-9]/;
	const hasDigits = regexp.test(value);

	regexp = /[-_,.'><=+&%$#@!* )(~\]/\\{}]/;
	const hasSymbols = regexp.test(value);

	if ( hasLetters + hasDigits + hasSymbols < 2 )
		return statusCodes.E_INSUFFICIENT;

	// Minimum 8 characters
	if ( value.length < 8 )
		return statusCodes.E_TOO_SHORT;

	return true;
}