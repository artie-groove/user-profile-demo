import { createLogic } from 'redux-logic';
import { actionTypes, onSwitchLocaleResponse, onSwitchLocaleFailure } from './IntlProvider.actions';
import { sleeper, ajaxErrorParser, fetchStoredMessages } from 'utils';
import axios from 'axios';
import cookie from 'js-cookie';



const localeSwitchLogic = createLogic({
	type: actionTypes.SWITCH_LOCALE_REQUEST,
	validate({ action }, allow, reject) {
		// For English we just alter the locale value in cookies;
		// default messages will be used and locale data is built-in 
		if ( action.localeId === 'en' ) {
			cookie.set('locale', 'en');
			localStorage.removeItem('locale');
			return reject(onSwitchLocaleResponse({ locale: 'en' }));
		}
		else {
			// Also, check if messages are already stored locally
			const messages = fetchStoredMessages(action.localeId);
			if ( messages ) {
				cookie.set('locale', action.localeId);
				return reject(onSwitchLocaleResponse({ locale: action.localeId, messages }));
			}
		}
		allow(action);
	},
	processOptions: {
		successType: 	onSwitchLocaleResponse,
		failType: 		onSwitchLocaleFailure
	},
	async process({ action }) {
		await sleeper(1000);
		return axios({
				url: "/api/get-locale",
				params: {
					id: action.localeId
				}
			})
			.then( async (response) => {
				const data = response.data.data;
				const serializedLocale = JSON.stringify(data);
				localStorage.setItem('locale', serializedLocale);
				return Promise.resolve(data);
			})
			.catch( error => Promise.reject(ajaxErrorParser(error)) );
	}
});

export default [
	localeSwitchLogic,
];