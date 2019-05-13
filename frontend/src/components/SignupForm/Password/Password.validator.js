import { statusCodes } from './Password.container';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';

export default function validate(value) {

	// Пустая строка
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Максимум - 128 символов 
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

	// Пароль должен содержать как минимум две группы символов
	// 1) буквы латинского алфавита
	// 2) цифры
	// 3) спецсимволы
	regexp = /[a-zA-Z]/;
	const hasLetters = regexp.test(value);

	regexp = /[0-9]/;
	const hasDigits = regexp.test(value);

	regexp = /[-_,.'><=+&%$#@!* )(~\]/\\{}]/;
	const hasSymbols = regexp.test(value);

	if ( hasLetters + hasDigits + hasSymbols < 2 )
		return statusCodes.E_INSUFFICIENT;

	if ( value.length < 8 )
		return statusCodes.E_TOO_SHORT;

	return PROPER_VALUE;
}