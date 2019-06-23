import { PROPER_VALUE } from './ValidateableInput.factory'; 

const shouldShowError = (status, isTypingFinished, inProgressFilter = []) => {
	// Имя полностью соответствует формату
	if ( ! status || status === PROPER_VALUE ) {
		return false;
	}

	// Пользователь завершил редактирование, показывем ошибку
	if ( isTypingFinished )
		return true

	// Если пользователь ещё в процессе набора, молчим про ошибки, определяемые фильтром
	return inProgressFilter.some( filteredStatus => filteredStatus === status )
		? false
		: true;
}

export const getErrorIntl = (intl, status, errorStrings = {}, isTypingFinished = true, inProgressFilter = []) => {
	return shouldShowError(status, isTypingFinished, inProgressFilter)
		? intl.formatMessage(errorStrings[status])
		: '';
}

export function getErrorCodes(errorStrings) {
	const keys = Object.keys(errorStrings);
	let errorCodes = {};
	for ( let i = 0; i < keys.length; i++ ) {
		errorCodes[keys[i]] = keys[i];
	}
	return errorCodes;
}

export function getEnhancedValidator(validate, errorStrings = {}) {
	const errorCodes = getErrorCodes(errorStrings);
	return (value) => {
		const validationResult = validate(value, errorCodes);
		return validationResult === true
			? PROPER_VALUE
			: validationResult;
	}
}