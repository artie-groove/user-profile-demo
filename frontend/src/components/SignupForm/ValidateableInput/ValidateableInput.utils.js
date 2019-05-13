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