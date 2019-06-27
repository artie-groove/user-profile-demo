import React, { useEffect } from 'react';
import { injectIntl } from 'react-intl';
import View from './App.view';
import { withRouter } from 'react-router';

const Container = ({
	isAuthenticated,
	isLocaleSwitchPending,
	localeSwitchError,
	fetchUserProfile,
	intl,
	logicMiddleware,
	history,
	resetUI
}) => {
	useEffect(() => {
		if ( isAuthenticated ) {
			fetchUserProfile();
		}
	}, [isAuthenticated, fetchUserProfile]);
	
	useEffect(() => {
		const unsubscribe = history.listen( (location, action) => {
			resetUI();
		});
		return unsubscribe;
	}, [history, resetUI]);

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

export default injectIntl(withRouter(Container));