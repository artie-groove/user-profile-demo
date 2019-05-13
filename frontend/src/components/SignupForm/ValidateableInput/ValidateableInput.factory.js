import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { getActions } from './ValidateableInput.actions';
import View from './ValidateableInput.view';
import { getErrorIntl } from './ValidateableInput.utils';
import { DefaultInput, AlternativeInput } from './ValidateableInput.inputs';

export const PROPER_VALUE = 'PROPER_VALUE';

export default ({
	/* values */	fieldName, inputType, errorStrings, inProgressFilter, validMsg,
	/* handlers */ 	validate = () => PROPER_VALUE
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

	const { onChange, onBlur } = getActions(fieldName);

	const mapDispatchToProps = dispatch => ({
		onChange: event => {
			const target = event.target;
			const value = target.type === 'checkbox' ? target.checked : target.value;
			const validityStatus = validate(value);
			dispatch(onChange(value, validityStatus));
		},
		onBlur: () => dispatch(onBlur())
	});

	let Component = connect(
	  mapStateToProps,
	  mapDispatchToProps
	)(View);


	Component.propTypes = {
		fieldName: PropTypes.string.isRequired,
		inputType: PropTypes.oneOf(['text', 'textarea', 'email', 'password', 'tel', 'date', 'checkbox', 'switch']).isRequired
	}

	let InputComponent;

	switch ( inputType ) {
		case 'checkbox':
		case 'switch':
			InputComponent = AlternativeInput
			break;

		default:
			InputComponent = DefaultInput
	}

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


