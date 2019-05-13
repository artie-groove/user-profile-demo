export const actionTypes = {
	FORM_SUBMIT: 			'FORM_SUBMIT',
	FORM_SUBMIT_RESPONSE: 	'FORM_SUBMIT_RESPONSE',
	FORM_SUBMIT_FAILURE: 	'FORM_SUBMIT_FAILURE',
	FORM_POPULATE_VALID: 	'FORM_POPULATE_VALID',
	FORM_POPULATE_INVALID: 	'FORM_POPULATE_INVALID'
}

export const onSubmit = () => ({
	type: actionTypes.FORM_SUBMIT
});

export const onSubmitResponse = (response) => ({
	type: actionTypes.FORM_SUBMIT_RESPONSE,
	response: response.data
});

export const onSubmitFailure = (error) => ({
	type: actionTypes.FORM_SUBMIT_FAILURE,
	// externalError: error.response.data.details
	externalError: error
});

export const onPopulateValid = () => ({
	type: actionTypes.FORM_POPULATE_VALID
});

export const onPopulateInvalid = () => ({
	type: actionTypes.FORM_POPULATE_INVALID
});