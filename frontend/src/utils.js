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

const inputEvent = new Event('input', {bubbles: true});
const blurEvent = new Event('blur', {bubbles: true});
const fieldBlurDelayMultiplier = 2;
const pauseDelayMultiplier = 10;

async function runSequenceText(element, sequence, delay) {
	for ( let i = 0; i < sequence.length; i++ ) {
		setNativeValue(element, element.value + sequence[i]);
		element.dispatchEvent(inputEvent);
		await sleeper(delay);
	}
}

function runSequenceAtOnce(element, value) {
	setNativeValue(element, value);
	element.dispatchEvent(inputEvent);
}

async function runSequence(elementId, sequence, delay) {
	const element = document.getElementById(elementId);

	let strategy = runSequenceText;
	if ( sequence.atOnce ) {
		sequence = sequence.value;
		strategy = runSequenceAtOnce;
	}

	await strategy(element, sequence, delay);
	await sleeper(delay * fieldBlurDelayMultiplier);
	element.dispatchEvent(blurEvent);
}

export async function simulateFormFillIn(sequences, delay) {
	for ( let elementId in sequences ) {
		await runSequence(elementId, sequences[elementId], delay);
		await sleeper(delay * pauseDelayMultiplier);
	}
}

function setNativeValue(element, value) {
	const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
	const prototype = Object.getPrototypeOf(element);
	const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

	if (valueSetter && valueSetter !== prototypeValueSetter) {
		prototypeValueSetter.call(element, value);
	} else {
		valueSetter.call(element, value);
	}
}