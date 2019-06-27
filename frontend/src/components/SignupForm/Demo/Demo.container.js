import React from 'react';
import View from './Demo.view';
import { simulateFormFillIn } from './Demo.utils';
// import { scrollIntoElement } from 'utils';

const Container = ({
	caption
}) => {
	const onDemo = async () => {
		// Data to fill in
		const formData = {
			"firstname": "Linus",
			"lastname": "Torvalds",
			"username": "linus-torvalds",
			"password": "linus-torvalds",
			"passwordConfirmation": "linus-torvalds",
			"email": "torvalds@linux.org",
			"newsletters": {
				type: "click"
			},
			"phone": "+1 702-355-88-92",
			"birthdate": {
				type: "instant",
				value: "1969-12-28"
			},
			"biography": {
				type: "textarea",
				value: "That's interesting, how did you manage to make it do that?"
			}
		}
		
		const characterTypingDelay = 100;

		await simulateFormFillIn(formData, characterTypingDelay);

		// const submitButton = document.getElementById("SubmitButton");
		// submitButton.addEventListener('focus', scrollIntoElement);
		// const focusEvent = new Event('focus');
		// submitButton.dispatchEvent(focusEvent);
	}

	return pug`
		View(
			onClick=onDemo
			caption=caption
		)
	`;
}

export default Container;