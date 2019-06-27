export const actionTypes = {
	VALUE_CHANGED: 		'VALUE_CHANGED',
	FIELD_EDITED: 		'FIELD_EDITED'
}

export const onChange = (fieldName, value, validityStatus) => ({
	type: actionTypes.VALUE_CHANGED,
	fieldName,
	value,
	validityStatus
});

export const onBlur = (fieldName) => ({
	type: actionTypes.FIELD_EDITED,
	fieldName
});

// Action factory
export function getActions(fieldName) {
	const onChangeFixed = (value, validityStatus) => onChange(fieldName, value, validityStatus);
	const onBlurFixed = () => onBlur(fieldName);
	return {
		onChange: onChangeFixed,
		onBlur: onBlurFixed
	}
}