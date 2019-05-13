export const actionTypes = {
	AUTH_REQUEST: 	'AUTH_REQUEST',
	AUTH_RESPONSE: 	'AUTH_RESPONSE',
	AUTH_FAILURE: 	'AUTH_FAILURE',
	AUTH_LOGOUT: 	'AUTH_LOGOUT',
}

export const onAuthRequest = (data) => ({
	type: actionTypes.AUTH_REQUEST,
	data
});

export const onAuthResponse = (token) => ({
	type: actionTypes.AUTH_RESPONSE,
	token
});

export const onAuthFailure = (error) => ({
	type: actionTypes.AUTH_FAILURE,
	error
});

export const onLogout = () => ({
	type: actionTypes.AUTH_LOGOUT
})



