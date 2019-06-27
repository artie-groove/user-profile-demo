export default function validate(value, statusCodes = {}) {

	// Empty string
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Maximum 128 characters
	if ( value.length > 128 )
		return statusCodes.E_TOO_LONG;

	// Most sane addresses will comply to this format	
	// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
	const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	let isValid = emailRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_FORMAT;
	}

	return true;
}