import authLogic from 'components/Auth/Auth.logic';
import switchLocaleLogic from 'components/IntlProvider/IntlProvider.logic';
import signupFormLogic from 'components/SignupForm/SignupForm.logic';
import dataFetchLogic from 'components/App/App.logic';

export default [
	...authLogic,
	...switchLocaleLogic,
	...signupFormLogic,
	...dataFetchLogic,
];