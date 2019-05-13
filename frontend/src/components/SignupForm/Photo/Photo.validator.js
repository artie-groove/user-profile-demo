import { statusCodes } from './Photo.container';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';

export default function validate(file) {
	// Пустая строка
	if ( ! file )
		return statusCodes.E_NOT_SELECTED;

	// Только JPG и PNG
	const ext = file.name.split('.').pop().toLowerCase();
	const isValidExtention = ['jpg', 'png'].some( acceptedExt => acceptedExt === ext );
	if ( ! isValidExtention )
		return statusCodes.E_WRONG_EXTENTION;

	// Максимум - 5 МБ
	if ( file.size > 5 * 1024 * 1024 )
		return statusCodes.E_TOO_BIG;

	return PROPER_VALUE;
}