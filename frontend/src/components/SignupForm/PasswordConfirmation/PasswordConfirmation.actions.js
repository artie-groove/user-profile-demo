export const PASSWORDS_CHECKED 		= 'PASSWORDS_CHECKED';
export const E_PASSWORD_NOT_VALID 	= 'E_PASSWORD_NOT_VALID';

const passwordsCheckedAction = areEqual => ({
	type: PASSWORDS_CHECKED,
	areEqual
});

const passwordValidityError = () => ({
	type: E_PASSWORD_NOT_VALID
});

export {
	passwordsCheckedAction,
	passwordValidityError
}