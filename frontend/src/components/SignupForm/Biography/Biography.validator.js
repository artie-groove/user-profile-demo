export default function validate(value, statusCodes = {})
{
	// No more than 4000 characters
	if ( value && value.length > 4000 )
		return statusCodes.E_TOO_LONG;

	return true;
}