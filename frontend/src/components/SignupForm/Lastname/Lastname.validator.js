import { statusCodes } from './Lastname.container';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';

export default function validate(value) {

	// Пустая строка
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Максимум - 50 символов 
	if ( value.length > 50 )
		return statusCodes.E_TOO_LONG;
	
	// Первый символ должен быть заглавной буквой
	const firstLetterRegex = /^[A-ZА-ЯЁ]$/;
	let isValid = firstLetterRegex.test(value.charAt(0));
	if ( ! isValid ) {
		return statusCodes.E_FIRST_LETTER;
	}

	// Последний символ должен быть буквой
	const lastLetterRegex = /^[a-zа-яё]$/;
	isValid = lastLetterRegex.test(value.charAt(value.length-1));
	if ( ! isValid ) {
		return statusCodes.E_LAST_SYMBOL;
	}

	// Минимум две буквы после дефиса
	const endingRegex = /-[a-zа-яё]$/;
	isValid = endingRegex.test(value);
	if ( isValid ) {
		return statusCodes.E_WRONG_ENDING;
	}		
	
	// Фамилия должна соответствовать формату	
	const nameRegex = /^[A-ZА-ЯЁ][-a-zа-яё]*$/;
	isValid = nameRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_FORMAT;
	}

	return PROPER_VALUE;
}