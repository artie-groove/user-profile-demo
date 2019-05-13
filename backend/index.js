const config = require('./config.json');
let db = require('./utils/db')();
const jwt = require('./utils/jwt')();
const { errorHandler } = require('./utils/helpers');
const { localeHandler } = require('./utils/i18n');
const apiHandlers = require('./api');
const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require("cors")(); // Cross-Origin Resource Sharing
const logger = require("morgan");


// const bodyParser = require("body-parser"); // парсит простые формы, кроме файлов

const app = express();

// Because we want to access the API from a react application that is probably served from another origin,
// the server needs to allow cross-origin requests. Therefore we are going to use a simple module called CORS.
app.use(cors);

// To parse cookies
app.use(cookieParser());

// use JWT auth to secure the api
app.use(jwt);

// Allow requests for static resources from this folder
app.use(express.static('public'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(logger("dev"));

// global error handler
app.use(errorHandler);

// handle locale
app.use(localeHandler);

// Префикс для API-запросов по HTTP
app.use("/api", apiHandlers);

// Слушаем порт
app.listen(config.API_PORT, () => console.log(`Listening on port ${config.API_PORT}`));