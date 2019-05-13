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
	async process({ action, intl }) {		
		await sleeper(1000);
		return axios({
				url: "/api/auth",
				params: action.data			
			})
			.then( (response) => response.data.data )
			.catch( (error) => Promise.reject(ajaxErrorParser(error, intl)));
	}
});

export default [
	authLogic
];