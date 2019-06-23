export default function validate(value, statusCodes = {}) {
	// ограничиваем объём текста
	if ( value && value.length > 4000 )
		return statusCodes.E_TOO_LONG;

	return true;
}