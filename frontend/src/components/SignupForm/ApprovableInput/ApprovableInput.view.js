import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

const View = ({
	/* values */ 	isInvalid, isPending, isApproved, label,
	/* values */	errorMsg, InputComponent
}) => pug`
	InputComponent(
		isDisabled=isPending
		isInvalid=isInvalid
		isValid=isApproved
		errorMsg=errorMsg
		label=label
	)
		if isPending
			Spinner(size="sm" color="primary")
`;

View.propTypes = {
	isInvalid: PropTypes.bool,
	isPending: PropTypes.bool,
	isValid: PropTypes.oneOfType([
			PropTypes.bool,
			PropTypes.instanceOf('undefined')
		]),
	errorMsg: PropTypes.string,
}

export default View;