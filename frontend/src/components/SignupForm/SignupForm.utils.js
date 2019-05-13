import { sha256 } from 'js-sha256';

export function exractFormData(originalFormData) {
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
	let refinedFormData = new FormData();
	fields.every( item => {
		refinedFormData.set(item, originalFormData[item].value);
		return true;
	});
	refinedFormData.set('password', sha256(originalFormData['password'].value));
	const photo = originalFormData['photo'].value;
	if ( photo ) {
		refinedFormData.append('photo', photo);
	}

	return refinedFormData;
}