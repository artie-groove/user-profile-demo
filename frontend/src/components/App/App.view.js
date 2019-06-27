import React from 'react';
import { defineMessages } from 'react-intl';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";
import Dashboard from "components/Dashboard";
import ErrorDisplay from 'components/ErrorDisplay';
import Auth from "components/Auth";
import LocaleSwitcher from "components/LocaleSwitcher";
import { Container, Row, Col } from "reactstrap";
import FullscreenSpinner from 'components/FullscreenSpinner';
import './App.view.sass';

const messages = defineMessages({
	localeSwitchErrorTitle: "Couldn't switch locale"
});

const AppView = ({
	intl,
	isAuthenticated,
	isLocaleSwitchPending,
	localeSwitchError,
}) => pug`
	#app
		Auth

		if isLocaleSwitchPending
			FullscreenSpinner

		else
			.localeSwitchWrapper
				Container
					Row
						Col
							if localeSwitchError
								ErrorDisplay(title=intl.formatMessage(messages.localeSwitchErrorTitle) errorMsg=localeSwitchError)
							
							else
								.d-flex.justify-content-end
									LocaleSwitcher

			Switch
				LoginRoute(exact=true path="/login/" isAuthenticated=isAuthenticated)

				Route(exact=true path="/signup/" component=SignupForm)
				
				ProtectedRoute(exact=true path="/dashboard/" component=Dashboard isAuthenticated=isAuthenticated redirectTo="/login")
				
				DefaultRoute(isAuthenticated=isAuthenticated)
`;

export default AppView;

const ProtectedRoute = ({
	component: Component,
	exact, path, isAuthenticated, redirectTo
}) => {
	const actualComponent = isAuthenticated
		? () => pug`Component()`
		: () => pug`Redirect(to=redirectTo)`;
	return pug`
		Route(exact=exact path=path render=actualComponent)
	`
};

const DefaultRoute = ({isAuthenticated}) => {
	const actualComponent = isAuthenticated
		? () => pug`Redirect(to="/dashboard")`
		: () => pug`Redirect(to="/login")`;
	return pug`
		Route(exact=true path="/" render=actualComponent)
	`;
}

const LoginRoute = ({
	isAuthenticated, exact, path
}) => {
	const actualComponent = isAuthenticated
		? () => pug`Redirect(to="/dashboard")`
		: () => pug`LoginForm`;
	return pug`
		Route(exact=exact path=path render=actualComponent)
	`;
}