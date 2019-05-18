import { defineMessages } from 'react-intl';
import cookie from 'js-cookie';

const messages = defineMessages({
	serverConnectionError: "Couldn't connect to server: \"{errorMsg}\". Please, try again later. If you can't submit the form, please contact us. We bring our apologies for the inconvenience."
});

export function sleeper(ms) {
	return new Promise(resolve => setTimeout(() => resolve(), ms));
}

export function ajaxErrorParser(error, intl) {
	let err;
	if ( error.response ) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx 
		err = `${error.response.data.details}. ${error.response.status} ${error.response.statusText}`;
	}
	else if ( error.request ) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		//err = `Не удалось связаться с сервером: "${error.message}". Пожалуйста, повторите попытку позже. Если вам не удалось отправить форму, пожалуйста, свяжитесь с нами. Приносим извинения за доставленные неудобства.`;
		console.log(error.message);
		err = intl.formatMessage(messages.serverConnectionError, { errorMsg: error.message });
	}
	else {
		// Something happened in setting up the request that triggered an Error
		err = error.message;
	}
	return err;
}

export function fetchStoredMessages(localeId) {
	// First, check if there's a 'locale' value in the local storage
	const serializedLocale = localStorage.getItem('locale');
	if ( ! serializedLocale ) return null;
	
	// If it's there, check if the data is for the requested locale 
	const { locale: storedLocaleId, messages } = JSON.parse(serializedLocale);
	if ( storedLocaleId !== localeId ) return null;

	return messages;
}

export function hydrate(initialState = {}) {
	// Check if the localized messages are already in the storage
	const locale = cookie.get('locale') || 'en';
	const messages = fetchStoredMessages(locale);

	// Set the cookie for subsequent responses to server
	cookie.set('locale', locale);

	initialState.i18n = {
		...initialState.i18n,
		locale,
		messages
	}

	return initialState;
}

export async function scrollIntoElement(e) {
	const element = e.target;
	const rect = element.getBoundingClientRect();
	const viewportHeight = document.documentElement.clientHeight;

	// Required offset from the top for the element to be in the center
	const offsetY = (viewportHeight - rect.height) / 2;
	
	// Difference between needed offset and actual relative position from the top
	const deltaY = Math.floor(rect.top - offsetY);

	const transitionTime = 500;
	const stepDelay = 5;
	const stepsTotal = transitionTime / stepDelay;
	const stepSize = Math.ceil(deltaY / stepsTotal);

	// console.log(`Total: ${stepsTotal}. Size: ${stepSize}. Initial top: ${rect.top}. Target: ${offsetY}. Initial delta: ${deltaY}`);

	setTimeout( function step(stepsLeft) {
		if ( stepsLeft === 0 ) return;
		window.scrollBy(0, stepSize);
		setTimeout(step, stepDelay, --stepsLeft);

		// const progress = Math.floor(element.getBoundingClientRect().top);
		// const target = Math.floor(offsetY);
		// const delta = Math.floor(element.getBoundingClientRect().top - offsetY);
		// console.log(`Top: ${progress}. Delta: ${delta} (${stepsLeft})`);

	}, 0, stepsTotal);
}