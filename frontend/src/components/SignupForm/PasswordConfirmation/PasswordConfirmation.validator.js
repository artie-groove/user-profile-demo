export default function validate(value, statusCodes) {
	// Empty string
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	return true;
}