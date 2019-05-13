import { connect } from 'react-redux';
import Form from './SignupForm.container';
import { onSubmit,  onPopulateValid , onPopulateInvalid } from './SignupForm.actions';
import { simulateFormFillIn } from 'utils';

const mapStateToProps = (state) => ({
	isPending: state.signup.status.isPending,
	isRegistered: state.signup.status.isRegistered,
	externalError: state.signup.status.externalError,
});

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (event) => {
		event.preventDefault();
		dispatch(onSubmit());
	},
	onPopulateValidClick: () => {
		const formData = {
			// "firstname": "Ivan",
			// "lastname": "Petrov",
			// "username": "ivan-petrov",
			// "password": "somepassword22",
			// "passwordConfirmation": "somepassword22",
			// "email": "example@email.com",
			"newsletters": {
				atOnce: true,
				value: 'checked'
			},
			"phone": "+84 902-355-88-92",
			"birthdate": {
				atOnce: true,
				value: "1988-02-12"
			},
			// "bigoraphy": "Some sample text"
		}
		
		const delay = 100;

		// simulateFormFillIn(formData, delay);
		
		
		dispatch(onPopulateValid());
	},
	onPopulateInvalidClick: () => {
		dispatch(onPopulateInvalid());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);