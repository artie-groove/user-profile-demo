import React, { useEffect } from 'react';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router';
import View from './App.view';

const Container = ({
	isAuthenticated,
	isLocaleSwitchPending,
	localeSwitchError,
	fetchUserProfile,
	logicMiddleware,
	appContext,
	intl,
	history,
	resetUI,
}) => {
	useEffect(() => {
		// Utilize the global 'appContext' variable from the root module
		// to pass changing 'intl' to redux-logic 'process()' handler
		// to enable translations in utility functions outside components
		logicMiddleware.addDeps({ appContext });
		appContext.intl = intl;
	}, [appContext, intl, logicMiddleware]);

	useEffect(() => {
		// Pull out the user profile data right after the user authenticated
		if ( isAuthenticated ) {
			fetchUserProfile();
		}
	}, [isAuthenticated, fetchUserProfile]);
	
	useEffect(() => {
		// Subscribe to URL change events to reset UI every time
		// user travels through screens
		const unsubscribe = history.listen( (location, action) => {
			resetUI();
		});
		return unsubscribe;
	}, [history, resetUI]);
	
	return pug`
		View(
			isAuthenticated=isAuthenticated
			isLocaleSwitchPending=isLocaleSwitchPending
			localeSwitchError=localeSwitchError
			intl=intl
		)
	`;
}

export default injectIntl(withRouter(Container));