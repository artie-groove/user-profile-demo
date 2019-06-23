export default function validate(value, statusCodes) {
	// Пустая строка
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	return true;
}