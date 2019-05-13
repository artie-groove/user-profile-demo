export const actionTypes = {
	SWITCH_LOCALE_REQUEST: 	"SWITCH_LOCALE_REQUEST",
	SWITCH_LOCALE_RESPONSE: "SWITCH_LOCALE_RESPONSE",
	SWITCH_LOCALE_FAILURE: 	"SWITCH_LOCALE_FAILURE"
}

export const onSwitchLocaleRequest = (localeId) => ({
	type: actionTypes.SWITCH_LOCALE_REQUEST,
	localeId
});

export const onSwitchLocaleResponse = (data) => ({
	type: actionTypes.SWITCH_LOCALE_RESPONSE,
	data
});

export const onSwitchLocaleFailure = (error) => ({
	type: actionTypes.SWITCH_LOCALE_FAILURE,
	error
});

export default {
	onSwitchLocaleRequest,
	onSwitchLocaleResponse,
	onSwitchLocaleFailure
}
