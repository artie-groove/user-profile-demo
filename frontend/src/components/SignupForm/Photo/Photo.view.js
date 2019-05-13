import React from 'react';
import { FormGroup, FormFeedback, CustomInput, Label, Input } from 'reactstrap';
import './Photo.view.sass';

const View = ({
	/* values */
		fieldName, fileName, label, invalid, errorMsg,
		isDisabled, valid, validMsg, children,
	/* handlers */
		onChange
}) => pug`
	FormGroup
		Label(for=fieldName) #{label}

		CustomInput(
			type="file"
			name=fieldName
			id=fieldName
			label=fileName
			valid=valid
			invalid=invalid
			disabled=isDisabled
			onChange=onChange
		)

		Input(
			type="hidden"
			valid=valid
			invalid=invalid
		)
		
		FormFeedback(valid=true) #{validMsg}

		FormFeedback(valid=false)
			div #{errorMsg}

		= children
`;

export default View;