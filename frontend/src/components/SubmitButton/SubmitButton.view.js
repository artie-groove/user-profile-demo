import React from 'react';
import { Button, Spinner } from 'reactstrap';
import './SubmitButton.view.sass';

export default ({
	disabled, className, isPending, inProgressCaption, caption
}) => pug`
	Button.btn-submit(
		type="submit"
		disabled=disabled
		size="lg"
		color="primary"
		className=className
	)
		if isPending
			| #{inProgressCaption}

			.spinner-wrapper
				Spinner(size="lg" color="light" type="grow")

		else
			| #{caption}
`;