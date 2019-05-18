import React from 'react';
import './Demo.view.sass';

const View = ({
	onClick, caption
}) => pug`
	#FormDemo
		a(onClick=onClick) #{caption}
		.arrow-wrapper
			.arrow
				.pointer
`;

export default View;