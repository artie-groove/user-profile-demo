import { createLogic } from 'redux-logic';
import { actionTypes, onAuthResponse, onAuthFailure } from './Auth.actions';
import axios from 'axios';
import { sleeper, ajaxErrorParser } from 'utils.js';

const authLogic = createLogic({
	type: actionTypes.AUTH_REQUEST,
	processOptions: {
		successType: 	onAuthResponse,
		failType: 		onAuthFailure
	},
	async process({ action,  appContext: { intl } }) {
		await sleeper(1000);
		try {
			const response = await axios({
				url: "/api/auth",
				params: action.data			
			});
			return response.data.data;
		}
		catch ( error ) {
			return Promise.reject(ajaxErrorParser(error, intl));
		}
	}
});

export default [
	authLogic
];