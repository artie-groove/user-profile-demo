import { connect } from 'react-redux';
import Form from './SignupForm.container';
import { onSubmit } from './SignupForm.actions';

function setVisibilityFilter(signupState) {
	let filter = [];
	for ( let i = 0; i < signupState.status.step; i++ ) {
		filter.push('revealed');
	}
	const currentKeyField = signupState.data[signupState.status.currentAwaitingKeyField];
	const fieldValueIsProper = currentKeyField.validityStatus === "PROPER_VALUE";
	const fieldIsNotPending = ! currentKeyField.isPending === true;
	const fieldIsBeingEdited = ! currentKeyField.isTypingFinished;

	filter.showProceedButton = fieldValueIsProper && fieldIsNotPending && fieldIsBeingEdited ? 'revealed' : '';

	return filter;

}

const mapStateToProps = (state) => ({
	isPending: state.signup.status.isPending,
	isRegistered: state.signup.status.isRegistered,
	externalError: state.signup.status.externalError,
	steps: setVisibilityFilter(state.signup)
});

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (event) => {
		event.preventDefault();
		dispatch(onSubmit());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);