import { createLogic } from 'redux-logic';
import { actionTypes, onDataFetchResponse, onDataFetchFailure } from './App.actions';
import { sleeper, ajaxErrorParser } from 'utils';
import { defineMessages } from 'react-intl';
import axios from 'axios';
import { onAuthReset } from 'components/Auth/Auth.actions';
import { onSubmitFormReset } from 'components/SignupForm/SignupForm.actions';
import { onSwitchLocaleReset } from 'components/IntlProvider/IntlProvider.actions';

const messages = defineMessages({
	notAuthorizedException: "Not authorized. Probably due to an application error. Try logging in again"
});

const dataFetchLogic = createLogic({
	type: actionTypes.DATA_FETCH_REQUEST,
	processOptions: {
		successType: 	onDataFetchResponse,
		failType: 		onDataFetchFailure
	},
	async process({ action, getState, intl }) {
		const { token } = getState().auth;
		if ( ! token ) {
			return Promise.reject(intl.formatMessage(messages.notAuthorizedException));
		}
		await sleeper(3000);
		return axios({
				url: "/api/get-user-profile",
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
			.then( response => response.data.data )
			.catch( error => Promise.reject(ajaxErrorParser(error)) );
	}
});

const uiResetLogic = createLogic({
	type: actionTypes.UI_RESET,
	process(deps, dispatch, done) {
		dispatch(onAuthReset());
		dispatch(onSubmitFormReset());
		dispatch(onSwitchLocaleReset());
		done();
	}
})

export default [
	dataFetchLogic,
	uiResetLogic
];