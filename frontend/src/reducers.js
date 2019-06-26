import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

import i18n from './components/IntlProvider/IntlProvider.reducers';
import auth from './components/Auth/Auth.reducers';
import authErrorCleaner from './components/LoginForm/LoginForm.reducers';
import signup from './components/SignupForm/SignupForm.reducers';
import userProfile from './components/App/App.reducers';

export default combineReducers({
	i18n,
	auth: reduceReducers(auth, authErrorCleaner),
	signup,
	userProfile,
});