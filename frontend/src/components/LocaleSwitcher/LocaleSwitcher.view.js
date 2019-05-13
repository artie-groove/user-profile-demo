import React from 'react';
import { Button } from 'reactstrap';
import './LocaleSwitcher.view.sass';

const View = ({
	title, switchTo, onClick
}) => pug`
	#LocaleSwitcher
		Button(type="text" value=switchTo, onClick=onClick) #{title}
`;

export default View;