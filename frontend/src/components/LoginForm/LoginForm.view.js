import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardTitle, CardText, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import SubmitButton from 'components/SubmitButton';
import ErrorDisplay from '../ErrorDisplay';
import FadeIn from 'react-fade-in';
import { defineMessages } from 'react-intl'; 
import './LoginForm.view.sass';

const messages = defineMessages({
	formTitle: "Log in",
	formHint: "Please, enter your user name and password to get access to your profile",
	usernameLabel: "Username",
	passwordLabel: "Password",
	submitButtonCaption: "Log in",
	submitButtonInProgressCaption: "Sending",
	authErrorTitle: "Authentication error",
	msgNoAccountQuestion: "No account?",
	signupLinkCaption: "Register"
});

export default ({
	intl: { formatMessage }, isPending, isAuthenticated, externalError, onSubmit, onChange
}) => pug`
	#LoginForm
		FadeIn(delay=500)
			Container
				Row.align-items-center
					Col.mx-auto
						Card(body)
							CardTitle.mb-1 #{formatMessage(messages.formTitle)}
							//Авторизация

							CardText.d-block.text-muted.mt-0 #{formatMessage(messages.formHint)}
							// Пожалуйста, введите имя пользователя и&nbsp;пароль для получения доступа к&nbsp;личному кабинету.

							Form(onSubmit=onSubmit)
								FormGroup
									Label(for="username") #{formatMessage(messages.usernameLabel)}
									Input(type="text" name="username" id="username" onChange=onChange defaultValue="artie")

								FormGroup
									Label(for="password") #{formatMessage(messages.passwordLabel)}
									Input(type="password" name="password" id="password" onChange=onChange defaultValue="jxldcjon1")

								//FormGroup
								//	CustomInput(type="checkbox" id="remember" label="Запомнить меня")

								SubmitButton.d-block.w-100.mt-4(
									caption=formatMessage(messages.submitButtonCaption)
									inProgressCaption=formatMessage(messages.submitButtonInProgressCaption)
									disabled=isPending
									isPending=isPending
								)

								if externalError
									ErrorDisplay(title=formatMessage(messages.authErrorTitle) errorMsg=externalError)

								FormText.mt-3 #{formatMessage(messages.msgNoAccountQuestion)}
									| 
									Link(to="/signup/") #{formatMessage(messages.signupLinkCaption)}
`;