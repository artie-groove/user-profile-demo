const config = require('../config');
const expressJwt = require('express-jwt');

module.exports = jwt;

function jwt() {
    return expressJwt({ secret: config.jwtSecret }).unless({
	        path: [
	            // public routes that don't require authentication
	            '/api/auth',
	            '/api/get-locale',
	            '/api/check-uniqueness',
	            '/api/put-user-profile',
	            '/',
	            /\/photos\/.+\.(?:jpg|png)$/,
	            /\/i18n\/.+/,
	            /\/assets\/.+$/,
	            /\/static\/.+$/,
	            /\/[^/]+\.[^/]+$/,
	            /\/login\/?$/,
	            /\/signup\/?$/,
	            /\/dashboard\/?$/,
	        ]
	    });
}