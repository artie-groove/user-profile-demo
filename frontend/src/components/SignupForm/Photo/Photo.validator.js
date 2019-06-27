export default function validate(file, statusCodes = {}) {
	// Empty string
	if ( ! file )
		return statusCodes.E_NOT_SELECTED;

	// Only JPG and PNG
	const ext = file.name.split('.').pop().toLowerCase();
	const isValidExtention = ['jpg', 'png'].some( acceptedExt => acceptedExt === ext );
	if ( ! isValidExtention )
		return statusCodes.E_WRONG_EXTENTION;

	// Maximum size: 5 MB
	if ( file.size > 5 * 1024 * 1024 )
		return statusCodes.E_TOO_BIG;

	return true;
}