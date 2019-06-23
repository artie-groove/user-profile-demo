export default function validate(value, statusCodes = {}) {

	// Пустая строка
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Максимум - 30 символов 
	if ( value.length > 30 )
		return statusCodes.E_TOO_LONG;
	
	// Первый символ должен быть буквой
	const firstSymbolRegex = /^\+/;
	let isValid = firstSymbolRegex.test(value.charAt(0));
	if ( ! isValid ) {
		return statusCodes.E_FIRST_SYMBOL;
	}

	// Only valid characters
	const phoneLexisRegex = /^[-+ 0-9]+$/;
	isValid = phoneLexisRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_CHARS;
	}
	
	// Номер должен соответствовать формату	
	const phoneGrammarRegex = /^\+[0-9]{1,3}(?:(?:[- ][0-9]{2,4}){3,4}|[- ]?[0-9]{5,10})$/;
	isValid = phoneGrammarRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_FORMAT;
	}

	// Минимум - 5 символов
	if ( value.length < 10 ) 
		return statusCodes.E_TOO_SHORT;

	return true;
}