const config = require('./config');
const db = require('./utils/db')();
const jwt = require('./utils/jwt')();
const { init, errorHandler } = require('./utils/helpers');
const { localeHandler } = require('./utils/i18n');
const apiHandlers = require('./api');
const graphqlHandler = require('./graphql');
const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require("cors")(); // Cross-Origin Resource Sharing
const path = require("path");
const logger = require("morgan");

init();

const app = express();

// Because we want to access the API from a react application that is probably served from another origin,
// the server needs to allow cross-origin requests. Therefore we are going to use a simple module called CORS.
app.use(cors);

// To parse cookies
app.use(cookieParser());

// Handle locale
app.use(localeHandler);

// Use JWT auth to secure the api
app.use(jwt);

// Allow requests for static resources from this folder
app.use(express.static('public', {
	index: "index.html",
	etag: true, // just being explicit about the default
	lastModified: true,  // just being explicit about the default
	setHeaders: (res, path) => {
		if ( path.endsWith('.html') ) {
			// all of the project's HTML files end in .html
			res.setHeader('Cache-Control', 'no-cache');
		}
		else if ( ~path.indexOf('/static/') ) { // versioned URL
			res.setHeader('Cache-Control', 'max-age=31536000'); 
		}
	},

}));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(logger("dev"));

// Global error handler
app.use(errorHandler);

// Attach handlers for API requests with the prefix
app.use("/api", apiHandlers);

// Attach GrqphQL middelware
app.use('/graphql', graphqlHandler);

// The following routes are handled by the frontend's single page application
// Just serve index.html in return
app.get(['/login', '/signup', '/dashboard'], (req, res) => res.sendFile(path.resolve('public/index.html')));

// Expose a port and start listening
app.listen(config.apiPort, () => console.log(`Listening on port ${config.apiPort}`));