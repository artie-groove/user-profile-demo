import { useEffect } from 'react';

export default ({
	isAuthenticated, token,
	updateReduxAuthStatem
}) => {	
	useEffect(() => {
		if ( isAuthenticated && token ) {
			localStorage.setItem('jwt', token);
		}
		else {
			localStorage.removeItem('jwt');
		}
	}, [isAuthenticated, token]);

	return null;
}