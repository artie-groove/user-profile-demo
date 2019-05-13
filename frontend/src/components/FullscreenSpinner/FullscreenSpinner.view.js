import React from 'react';
import { Spinner } from 'reactstrap';
import './FullscreenSpinner.view.sass';

const View = ({
	caption
}) => pug`
	#FullscreenSpinner
		Spinner(size="lg" color="primary" type="grow")
		.caption.w-100.text-center.text-primary #{caption}
`;

export default View;