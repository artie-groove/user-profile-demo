export default function validate(value, statusCodes = {}) {
	return value
		? true
		: statusCodes.E_IMPOSED;
}