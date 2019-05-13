import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { Container, Row, Col, Card, CardTitle, CardText, Form, FormText, Alert } from 'reactstrap';
import './SignupForm.view.sass';

// Form inputs
import Username from './Username';
import Password from './Password';
import PasswordConfirmation from './PasswordConfirmation';
import Email from './Email';
import Phone from './Phone';
import Birthdate from './Birthdate';
import Newsletters from './Newsletters';
import Biography from './Biography';
import PersonalInformationProcessing from './PersonalInformationProcessing';
import Photo from './Photo';
import Firstname from './Firstname';
import Lastname from './Lastname';

// Other controls
import SubmitButton from './SubmitButton';
import ErrorDisplay from '../ErrorDisplay';

import { defineMessages } from 'react-intl';

const messages = defineMessages({
	signupFormTitle: "Sign Up",
	signupFormHint: "You need to provide some personal information. Please, fill in the form below",
	firstNameLabel: "Given name",
	lastNameLabel: "Family name",
	userIdLabel: "Username",
	userIdHint: "User identifier. Has to be composed of lowercase latin letters and/or digits. Нyphen is allowed. Should start with a letter and end with a letter or a digit. Minimim - 5 symbols. For example, 'giant-66'",
	passwordLabel: "Password",
	passwordHint: "Only latin letters, digits and special characters (for example, :, ', >, <, =, +, ., &, %, $, #, @, !, *, ), (, -, ~, [, ], /, \\\\, \\{, \\}, _, ^). Minimum 8 characters. At least two character types should be used",
	passwordConfirmationLabel: "Password confirmation",
	passwordConfirmationHint: "Please, confirm the above entered password",
	emailLabel: "Email",
	emailHint: "We use the email for password restoration and critical notifications. No unnecessary newsletters",
	newslettersLabel: "Newsletters",
	newslettersHint: "Switch on if you want to keep up with us",
	phoneLabel: "Phone number",
	phoneHint: "Phone number in the following format: <country code> <number>, for example, +7 926-840-55-49. Minimum 5 characters",
	birthdateLabel: "Birthdate",
	birthdateHint: "Please, choose the date from the popup calendar",
	biographyLabel: "Short biography",
	photoLabel: "Photo",
	photoHint: "PNG and JPEG files only. Maximum size - 5 MB",
	personalInformationProcessingLabel: "I give my consent to process my personal data",
	personalInformationProcessingHint: "According to Russia's federal law from 27/07/2006 number 152-FZ 'On personal data'",
	submitButtonCaption: "Sign up",
	submitButtonInProgressCaption: "Sending",
	signupErrorTitle: "Sign up error",
	alreadySignedUp: "Already signed up?",
	loginLinkCaption: "Log in",
	signupSuccessTitle: "Signed up successfully!",
	signupSuccessMessage: "You're registered. Please, log in to your account",
	populateWithLabel: "Populate form with values",
	btnPopulateValidCaption: "Valid",
	btnPopulateInvalidCaption: "Invalid"
});

const View = ({
	intl: { formatMessage }, onSubmit, isPending, externalError, isRegistered, onPopulateValidClick, onPopulateInvalidClick
}) => pug`
	#SignupForm
		FadeIn(delay=500)
			Container
				Row.align-items-center
					Col.mx-auto
						if ! isRegistered
							Card(body)
								CardTitle.mb-1 #{formatMessage(messages.signupFormTitle)}

								CardText.d-block.text-muted.mt-0 #{formatMessage(messages.signupFormHint)}

								Form(onSubmit=onSubmit)
									Row
										Col(md=6).mb-5.mb-md-0
											Firstname(label=formatMessage(messages.firstNameLabel))

										Col(md=6)
											Lastname(label=formatMessage(messages.lastNameLabel))

									Row
										Col(md=6)
											Username(label=formatMessage(messages.userIdLabel))

										Col(md=6)
											.hint #{formatMessage(messages.userIdHint)}
									
									Row
										Col(md=6)
											Password(label=formatMessage(messages.passwordLabel))

										Col(md=6)
											.hint #{formatMessage(messages.passwordHint)}
									
									Row
										Col(md=6)
											PasswordConfirmation(label=formatMessage(messages.passwordConfirmationLabel))

										Col(md=6)
											.hint #{formatMessage(messages.passwordConfirmationHint)}

									Row#field-email
										Col(md=6)
											Email(label=formatMessage(messages.emailLabel))

										Col(md=6)
											.hint #{formatMessage(messages.emailHint)}

									Row#field-newsletters
										Col(md=6)
											Newsletters(label=formatMessage(messages.newslettersLabel))

										Col(md=6)
											.hint #{formatMessage(messages.newslettersHint)} 

									Row
										Col(md=6)
											Phone(label=formatMessage(messages.phoneLabel))

										Col(md=6)
											.hint #{formatMessage(messages.phoneHint)}

									Row
										Col(md=6)
											Birthdate(label=formatMessage(messages.birthdateLabel))

										Col(md=6)
											.hint #{formatMessage(messages.birthdateHint)}

									Row
										Col
											Biography(label=formatMessage(messages.biographyLabel))

									Row
										Col(md=6)
											Photo(label=formatMessage(messages.photoLabel))

										Col(md=6)
											.hint #{formatMessage(messages.photoHint)} 

									Row#field-personal-information-processing
										Col(md=6)
											PersonalInformationProcessing(label=formatMessage(messages.personalInformationProcessingLabel))
											
										Col(md=6)
											.hint #{formatMessage(messages.personalInformationProcessingHint)}

									SubmitButton.d-block.w-100(
										isPending=true
										caption=formatMessage(messages.submitButtonCaption)
										inProgressCaption=formatMessage(messages.submitButtonInProgressCaption)
									)

									if externalError
										ErrorDisplay(title=formatMessage(messages.signupErrorTitle) errorMsg=externalError)
									
									FormText.mt-3.float-right #{formatMessage(messages.alreadySignedUp)}
										| 
										Link(to="/login/") #{formatMessage(messages.loginLinkCaption)}

						else
							Row
								Col(md=8 lg=6 xl=5).mx-auto
									Alert.p-5(color="primary")
										h4.alert-heading #{formatMessage(messages.signupSuccessTitle)}
										
										p #{formatMessage(messages.signupSuccessMessage)}

										Link.btn.btn-lg.btn-primary.w-100(to="/") #{formatMessage(messages.loginLinkCaption)}
						
						#FormAuxControls
							p #{formatMessage(messages.populateWithLabel)}

							a(onClick=onPopulateValidClick) #{formatMessage(messages.btnPopulateValidCaption)}

							a(onClick=onPopulateInvalidClick) #{formatMessage(messages.btnPopulateInvalidCaption)}
`;

export default View;