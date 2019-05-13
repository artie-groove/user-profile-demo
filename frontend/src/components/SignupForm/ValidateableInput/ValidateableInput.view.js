import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormFeedback } from 'reactstrap';

const View = ({
	/* values */
		fieldName, value, label, inputType, isInvalid, errorMsg,
		isDisabled, isValid, validMsg, children, InputComponent,
	/* handlers */
		onChange, onBlur
}) => pug`
	FormGroup
		InputComponent(
			type=inputType
			name=fieldName
			id=fieldName
			label=label
			value=value
			valid=isValid
			invalid=isInvalid
			disabled=isDisabled
			onChange=onChange
			onBlur=onBlur
		)
			FormFeedback(valid=true) #{validMsg}

			FormFeedback(valid=false)
				div #{errorMsg}

			= children
`;

View.propTypes = {
	fieldName: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	inputType: PropTypes.oneOf(['text', 'textarea','email', 'password', 'tel', 'date', 'checkbox', 'switch']),
	isInvalid: PropTypes.bool,
	error: PropTypes.string,
	isValid: PropTypes.bool,
	validMsg: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
}

export default View;