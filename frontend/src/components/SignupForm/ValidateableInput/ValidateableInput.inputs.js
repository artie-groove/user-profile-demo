import React from 'react';
import { CustomInput, Input, Label } from 'reactstrap';

const DefaultInput = ({
	type, name, label, value, valid, invalid, disabled, onChange, onBlur, children
}) => pug`
	div
		Label(for=name) #{label}

		Input(
			type=type
			name=name
			id=name
			value=value
			valid=valid
			invalid=invalid
			disabled=disabled
			onChange=onChange
			onBlur=onBlur
		)

		= children
`;

const AlternativeInput = ({
	type, name, label, value, valid, invalid, disabled, onChange, children
}) => pug`
	CustomInput(
		type=type
		name=name
		id=name
		label=label
		checked=value
		valid=valid
		invalid=invalid
		disabled=disabled
		onChange=onChange
	)
		= children
`;

export { DefaultInput, AlternativeInput };