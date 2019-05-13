export const actionTypes = {
	REQUEST_APPROVAL: 			'REQUEST_APPROVAL',
	RESPONSE_APPROVAL: 			'RESPONSE_APPROVAL',
	RESPONSE_APPROVAL_ERROR: 	'RESPONSE_APPROVAL_ERROR'
}

export function getActions(fieldName) {
	const requestApproval = () => ({
		type: actionTypes.REQUEST_APPROVAL,
		fieldName
	});

	const responseApproval = response => ({
		type: actionTypes.RESPONSE_APPROVAL,
		fieldName,
		response
	});

	const responseApprovalError = errorMsg => ({
		type: actionTypes.RESPONSE_APPROVAL_ERROR,
		fieldName,
		externalError: errorMsg
	});

	return {
		requestApproval,
		responseApproval,
		responseApprovalError,
	}
}