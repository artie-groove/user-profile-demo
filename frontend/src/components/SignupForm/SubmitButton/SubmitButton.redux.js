import { connect } from 'react-redux';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';
import Component from 'components/SubmitButton';

// Field values are valid if they adhere to the field format
const areAllFieldsValid = (fields) => fields.every(field => field.validityStatus === PROPER_VALUE);

// Field values approval is marked in 'isApproved' property
const areAllApprovableFieldsApproved = (fields) => fields.every(field => field.isApproved !== false );

// Ultimate check of the form data
const isFormFilledInCorrectly = (state) => {
	const formData = state.signup.data;
	const indicators = [
		areAllFieldsValid(Object.values(formData)),
		areAllApprovableFieldsApproved(Object.values(formData)),
		formData.password.value === formData.passwordConfirmation.value
	]
	return indicators.every( item => item );
}

const mapStateToProps = (state) => ({
	disabled: !isFormFilledInCorrectly(state) || state.signup.status.isPending,
	isPending: state.signup.status.isPending
});

export default connect(mapStateToProps)(Component);