const config = require('../config.json');
const expressJwt = require('express-jwt');

module.exports = jwt;

function jwt() {
	const { secret } = config;
    return expressJwt({ secret }).unless({
	        path: [
	            // public routes that don't require authentication
	            '/api/auth',
	            '/api/get-locale',
	            '/api/check-uniqueness',
	            '/api/put-user-profile',
	            /\/photos\/.+\.(?:jpg|png)$/,
	            /\/i18n\/.+/,
	            /\/assets\/.+$/
	        ]
	    });
}