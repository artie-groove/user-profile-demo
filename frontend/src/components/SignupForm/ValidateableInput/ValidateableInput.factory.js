import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { getActions } from './ValidateableInput.actions';
import View from './ValidateableInput.view';
import { getErrorIntl, getEnhancedValidator } from './ValidateableInput.utils';
import { DefaultInput, AlternativeInput } from './ValidateableInput.inputs';

export const PROPER_VALUE = 'PROPER_VALUE';

export default ({
	/* values */	fieldName, inputType, errorStrings, inProgressFilter, validMsg,
	/* handlers */ 	validate = () => true // by default the value is considered correct
}) => {
	const mapStateToProps = (state, ownProps) => {
		const { validityStatus, isTypingFinished, value } = state.signup.data[fieldName];
		const errorMsg = ownProps.errorMsg
			? ownProps.errorMsg
			: getErrorIntl(ownProps.intl, validityStatus, errorStrings, isTypingFinished, inProgressFilter);
		return {
			isInvalid: !!errorMsg,
			errorMsg,
			value
		}
	};

	// Getting pre-configured action handlers for the input
	const { onChange, onBlur } = getActions(fieldName);

	// Transforming supplied validation function and provided error strings object
	// into a function that utilizes both to return the correct result code
	const enhancedValidate = getEnhancedValidator(validate, errorStrings);

	// Wrapping view component with Redux
	const mapDispatchToProps = dispatch => ({
		onChange: event => {
			const target = event.target;
			const value = target.type === 'checkbox' ? target.checked : target.value;
			const validityStatus = enhancedValidate(value);
			dispatch(onChange(value, validityStatus));
		},
		onBlur: () => dispatch(onBlur())
	});

	let Component = connect(
	  mapStateToProps,
	  mapDispatchToProps
	)(View);

	// Setting properties' type contstraints
	Component.propTypes = {
		fieldName: PropTypes.string.isRequired,
		inputType: PropTypes.oneOf(['text', 'textarea', 'email', 'password', 'tel', 'date', 'checkbox', 'switch']).isRequired
	}

	// Picking specific input component depending on the type
	let InputComponent;
	switch ( inputType ) {
		case 'checkbox':
		case 'switch':
			InputComponent = AlternativeInput
			break;

		default:
			InputComponent = DefaultInput
	}

	// Finally, assemblying the configured input component
	const Container = ({
		isDisabled, isInvalid = false, isValid = false, errorMsg, children, label, intl
	}) => {
		const validMsgFormatted = validMsg
			? intl.formatMessage(validMsg)
			: null;
		return pug`
			Component(
				fieldName=fieldName
				inputType=inputType
				label=label
				isInvalid=isInvalid
				errorMsg=errorMsg
				isValid=isValid
				validMsg=validMsgFormatted
				InputComponent=InputComponent
				intl=intl
			)
				= children
		`;
	}

	return injectIntl(Container);
}


