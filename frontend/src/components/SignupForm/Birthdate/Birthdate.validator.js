import { statusCodes } from './Birthdate.container';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';

export default function validate(value) {

	// Пустая строка
	if ( value.length === 0 )
		return statusCodes.E_EMPTY;

	// Неверный формат
	const dateFormat = /^[0-9]{4}-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01])$/;
	const isCorrect = dateFormat.test(value);
	if ( !isCorrect )
		return statusCodes.E_INVALID_FORMAT;

	const tsBirthdate = Date.parse(value);
	if ( isNaN(tsBirthdate) )
		return statusCodes.E_INVALID_FORMAT;

	const tsToday = Date.now();
	
	// Дата из будущего
	if ( tsBirthdate > tsToday )
		return statusCodes.E_TOO_EARLY;
	
	// Максимум - 150 лет 
	if ( tsToday - tsBirthdate > 150 * 365 * 24 * 60 * 60 * 1000 )
		return statusCodes.E_TOO_OLD;


	return PROPER_VALUE;
}