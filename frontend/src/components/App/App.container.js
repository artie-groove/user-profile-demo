import React, { useEffect } from 'react';
import { injectIntl } from 'react-intl';
import View from './App.view';

const Container = ({
	isAuthenticated,
	isLocaleSwitchPending,
	localeSwitchError,
	fetchUserProfile,
	intl,
	logicMiddleware
}) => {
	useEffect(() => {
		if ( isAuthenticated ) {
			fetchUserProfile();
		}
	}, [isAuthenticated, fetchUserProfile]);
	
	useEffect(() => {
		try {
			logicMiddleware.addDeps({ intl });
		}
		catch (e) {}
	}, [intl, logicMiddleware]);
	
	return pug`
		View(
			isAuthenticated=isAuthenticated
			isLocaleSwitchPending=isLocaleSwitchPending
			localeSwitchError=localeSwitchError
			intl=intl
		)
	`;
}

export default injectIntl(Container);