// import React, { useState } from 'react';
// import View from './LoginForm.view';

// const Component = () => {
// 	const [ state, setState ] = useState({
// 		username: '',
// 		password: ''
// 	});
// 	const onInputFieldChange = (event) => {
// 		console.log(event.target.id, event.target.value);
// 		setState({
// 			...state,
// 			[event.target.id]: event.target.value
// 		});
// 	};
// 	return pug`
// 		View(
// 			onChange=onInputFieldChange
// 		)
// 	`
// };

// export default Component;

import View from './LoginForm.view';
import { injectIntl } from 'react-intl';
export default injectIntl(View);