import { sleeper } from 'utils'; 

export async function simulateFormFillIn(sequences, delay) {
	for ( let elementId in sequences ) {
		await runSequence(elementId, sequences[elementId], delay);
		await sleeper(delay * pauseDelayMultiplier);
	}
}

// --- Internals ---


const inputEvent = new Event('input', {bubbles: true});
const blurEvent = new Event('blur', {bubbles: true});
const focusEvent = new Event('focus', {bubbles: false});
const fieldBlurDelayMultiplier = 2;
const pauseDelayMultiplier = 10;



function putTextInTextarea(element, value) {
	element.value = value;
	// element.innerHTML = value;
	// setNativeValue(element, value);
	// const changeEvent = new Event('change', {bubbles: true});
	// const keypressEvent = new Event('keypress', {bubbles: true});
	// element.dispatchEvent(inputEvent);
	// element.dispatchEvent(changeEvent);
	// element.dispatchEvent(keypressEvent);
}

async function simulateTypingTextarea(element, sequence, delay) {
	return simulateTyping(putTextInTextarea, element, sequence, delay);
} 

async function simulateTypingInputElements(element, sequence, delay) {
	return simulateTyping(setNativeValue, element, sequence, delay);
}

async function simulateTyping(strategy, element, sequence, delay) {
	for ( let i = 0; i < sequence.length; i++ ) {
		strategy(element, sequence.slice(0, i+1));
		element.dispatchEvent(inputEvent);
		await sleeper(delay);
	}
}

function clickElement(element) {
	element.click();
}

function putTextAtOnce(element, value) {
	setNativeValue(element, value);
	element.dispatchEvent(inputEvent);
}

async function runSequence(elementId, sequence, delay) {
	const element = document.getElementById(elementId);

	let strategy = null;
	switch ( sequence.type ) {
		case "click":
			strategy = clickElement;
			sequence = null;
			break;

		case "instant":
			strategy = putTextAtOnce;
			sequence = sequence.value;
			break;

		case "textarea":
			strategy = simulateTypingTextarea;
			sequence = sequence.value;
			break;

		default:
			strategy = simulateTypingInputElements;
	}

	element.dispatchEvent(focusEvent);
	element.focus();
	await sleeper(1000);
	await strategy(element, sequence, delay);
	await sleeper(delay * fieldBlurDelayMultiplier);
	element.dispatchEvent(blurEvent);
}

function setNativeValue(element, value) {
	const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
	const prototype = Object.getPrototypeOf(element);
	const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

	if ( valueSetter && valueSetter !== prototypeValueSetter ) {
		prototypeValueSetter.call(element, value);
	} else {
		valueSetter.call(element, value);
	}
}

