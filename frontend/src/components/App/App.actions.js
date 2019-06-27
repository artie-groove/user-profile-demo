export const actionTypes = {
	'DATA_FETCH_REQUEST': 'DATA_FETCH_REQUEST',
	'DATA_FETCH_RESPONSE': 'DATA_FETCH_RESPONSE',
	'DATA_FETCH_FAILURE': 'DATA_FETCH_FAILURE',
	'UI_RESET': 'UI_RESET'
}

export const onDataFetchRequest = () => ({
	type: actionTypes.DATA_FETCH_REQUEST,
});

export const onDataFetchResponse = (data) => ({
	type: actionTypes.DATA_FETCH_RESPONSE,
	data
});

export const onDataFetchFailure = (error) => ({
	type: actionTypes.DATA_FETCH_FAILURE,
	error
});

export const onUiReset = () => ({
	type: actionTypes.UI_RESET,
});