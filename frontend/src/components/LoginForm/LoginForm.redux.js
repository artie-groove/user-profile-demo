import { connect } from 'react-redux';
import Form from './LoginForm.container';
import { onAuthRequest } from '../Auth/Auth.actions';
import { onSignupLinkClick } from './LoginForm.actions';
import { onFormReset } from '../SignupForm/SignupForm.actions';
import { sha256 } from 'js-sha256';

const mapStateToProps = (state) => ({
	isPending: state.auth.isPending,
	isAuthenticated: state.auth.isAuthenticated,
	externalError: state.auth.externalError,
});

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (event) => {
		event.preventDefault();
		const form = event.target;
		const credentials = {
			username: form.elements['username'].value,
			password: sha256(form.elements['password'].value)
		};
		dispatch(onAuthRequest(credentials));
	},
	signupLinkClick: () => {
		dispatch(onSignupLinkClick());
		dispatch(onFormReset());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);