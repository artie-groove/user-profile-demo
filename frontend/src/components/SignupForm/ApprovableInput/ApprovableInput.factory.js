import React from 'react';
import { connect } from 'react-redux'; 
import { injectIntl } from 'react-intl';
import validateableInputFactory from '../ValidateableInput';
import View from './ApprovableInput.view';

export default ({
	/* values */	fieldName, inputType, approvedMsg, rejectedMsg, children, externalError, errorStrings, inProgressFilter,
	/* handlers */ 	validate,
}) => {
	const mapStateToProps = (state, ownProps) => {
		const { externalError, isTypingFinished, isPending, isApproved } = state.signup.data[fieldName] || {};
		let errorMsg = '';
		if ( externalError )
			errorMsg = externalError;
		else if ( isTypingFinished && isApproved === false )
			errorMsg = ownProps.intl.formatMessage(rejectedMsg);
		return {
			isInvalid: !!errorMsg,
			errorMsg,
			isPending,
			// isPending: isTypingFinished && !isApproved && !externalError && status === statusCodes.PROPER,
			isApproved: isApproved && isTypingFinished,
			// isDisapproved: isTypingFinished && isApproved === false,
		}
	};

	let Component = connect(
	  mapStateToProps
	)(View);

	Component = injectIntl(Component);

	const ValidateableInput = validateableInputFactory({
		fieldName,
		inputType,
		validMsg: approvedMsg,
		validate,
		errorStrings,
		inProgressFilter
	});

	return ({ label }) => pug`
		Component(
			InputComponent=ValidateableInput
			label=label
		)
	`;
}