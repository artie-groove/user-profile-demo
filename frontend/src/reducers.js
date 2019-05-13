import { combineReducers } from 'redux';

import i18n from './components/IntlProvider/IntlProvider.reducers';
import auth from './components/Auth/Auth.reducers';
import signup from './components/SignupForm/SignupForm.reducers';
import userProfile from './components/App/App.reducers';

export default combineReducers({
	i18n,
	auth,
	signup,
	userProfile,
});