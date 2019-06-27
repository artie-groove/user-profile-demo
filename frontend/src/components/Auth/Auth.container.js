import { useEffect } from 'react';

export default ({
	isAuthenticated, token,
	updateReduxAuthStatem
}) => {	
	useEffect(() => {
		// Store the token locally when authenticated 
		if ( isAuthenticated && token ) {
			localStorage.setItem('jwt', token);
		}
		else {
			// Remove token otherwise (logout requested)
			localStorage.removeItem('jwt');
		}
	}, [isAuthenticated, token]);

	return null;
}