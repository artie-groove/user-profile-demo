export const actionTypes = {
	FORM_SUBMIT: 			'FORM_SUBMIT',
	FORM_SUBMIT_RESPONSE: 	'FORM_SUBMIT_RESPONSE',
	FORM_SUBMIT_FAILURE: 	'FORM_SUBMIT_FAILURE',
	FORM_RESET: 			'FORM_RESET', 
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
	externalError: error
});

export const onSubmitFormReset = () => ({
	type: actionTypes.FORM_RESET
});

