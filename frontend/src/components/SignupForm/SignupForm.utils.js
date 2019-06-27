import { sha256 } from 'js-sha256';

// Preprocesses form data obtained from Redux store
// to be submitted to the server
export function exractFormData(originalFormData)
{
	// Fields to extract, except the 'photo' field
	const fields = [
		'username',
		'email',
		'phone',
		'newsletters',
		'birthdate',
		'biography',
		'firstname',
		'lastname'
	];

	// Browser's native way to store form data in the "multipart/form-data" encoding
	// https://developer.mozilla.org/en-US/docs/Web/API/FormData
	let refinedFormData = new FormData();
	fields.every( item => {
		refinedFormData.set(item, originalFormData[item].value);
		return true;
	});
	
	// Hashing the password
	refinedFormData.set('password', sha256(originalFormData['password'].value));
	
	// If the user provided a photo, add it to FormData
	const photo = originalFormData['photo'].value;
	if ( photo ) {
		refinedFormData.set('photo', photo);
	}

	return refinedFormData;
}