import React from 'react';
import { Button } from 'reactstrap';
import './LogoutButton.view.sass';

const View = ({
	onLogout, caption
}) => pug`
	#LogoutButton
		Button(onClick=onLogout) #{caption}
`;

export default View;