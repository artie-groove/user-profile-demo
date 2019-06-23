export default function validate(value, statusCodes = {}) {

	// Пустая строка
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Максимум - 30 символов 
	if ( value.length > 30 )
		return statusCodes.E_TOO_LONG;
	
	// Первый символ должен быть буквой
	const firstLetterRegex = /^[a-z]$/;
	let isValid = firstLetterRegex.test(value.charAt(0));
	if ( ! isValid ) {
		return statusCodes.E_FIRST_LETTER;
	}		
	
	// Имя должно соответствовать формату	
	const usernameRegex = /^[-a-z0-9]+$/;
	isValid = usernameRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_FORMAT;
	}

	// Минимум - 5 символов
	if ( value.length < 5 ) 
		return statusCodes.E_TOO_SHORT;

	// Последний символ - буква или цифра
	const lastLetterRegex = /^[a-z0-9]$/;
	isValid = lastLetterRegex.test(value.charAt(value.length - 1));
	if ( ! isValid ) {
		return statusCodes.E_LAST_SYMBOL;
	}		

	return true;
}