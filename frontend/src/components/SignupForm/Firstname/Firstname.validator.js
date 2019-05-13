import { statusCodes } from './Firstname.container';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';

export default function validate(value) {

	// Пустая строка
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Максимум - 40 символов 
	if ( value.length > 40 )
		return statusCodes.E_TOO_LONG;
	
	// Первый символ должен быть заглавной буквой
	const firstLetterRegex = /^[A-ZА-ЯЁ]$/;
	let isValid = firstLetterRegex.test(value.charAt(0));
	if ( ! isValid ) {
		return statusCodes.E_FIRST_LETTER;
	}		
	
	// Имя должно соответствовать формату	
	const nameRegex = /^.[a-zа-яё]*$/;
	isValid = nameRegex.test(value);
	if ( ! isValid ) {
		return statusCodes.E_INVALID_FORMAT;
	}		

	return PROPER_VALUE;
}