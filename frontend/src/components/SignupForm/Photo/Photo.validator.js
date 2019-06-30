export default function validate(file, statusCodes = {}) {
	// Empty string
	if ( ! file )
		return statusCodes.E_NOT_SELECTED;

	// Only image files
	if ( ! /^image\/jpeg/i.test(file.type) )
		return statusCodes.E_WRONG_IMAGE_TYPE;

	// Maximum size: 5 MB
	if ( file.size > 5 * 1024 * 1024 )
		return statusCodes.E_TOO_BIG;

	return true;
}