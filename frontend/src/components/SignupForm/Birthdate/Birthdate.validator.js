export default function validate(value, statusCodes = {}) {

	// Empty string
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Incorrect format
	const dateFormat = /^[0-9]{4}-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01])$/;
	const isCorrect = dateFormat.test(value);
	if ( !isCorrect )
		return statusCodes.E_INVALID_FORMAT;

	// Still incorrect
	const tsBirthdate = Date.parse(value);
	if ( isNaN(tsBirthdate) )
		return statusCodes.E_INVALID_FORMAT;

	const tsToday = Date.now();
	

	// Future date
	if ( tsBirthdate > tsToday )
		return statusCodes.E_TOO_EARLY;
	
	// Maximum age: 150 years
	if ( tsToday - tsBirthdate > 150 * 365 * 24 * 60 * 60 * 1000 )
		return statusCodes.E_TOO_OLD;

	return true;
}