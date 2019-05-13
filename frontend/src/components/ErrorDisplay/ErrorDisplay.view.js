import React from 'react';
import { Alert } from 'reactstrap';
import './ErrorDisplay.view.sass';

const View = ({
	title, errorMsg
}) => pug`
	Alert.error-display(color="danger")
		h6.alert-heading= title
		p.mb-0= errorMsg
`;

export default View;