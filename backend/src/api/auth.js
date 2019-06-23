const config = require('../config');
const UserProfile = require('../models/user-profile');
const validator = require('../utils/validator');
const loginFieldsSchema = require('../schemas/schema-user-profile').loginFieldsSchema;
const { respond, respondSuccess, respondFailure, extractData } = require('../utils/helpers');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { messages } = require('../utils/i18n');

module.exports = router.get('/auth', authenticationHandler);

// Обработчик запроса на аутентификацию пользователя
function authenticationHandler(req, res) {
	const localeId = req.locale;
	const localizedMessages = messages[localeId];
	const loginData = extractData(loginFieldsSchema, req.query);
	let loginDataValid = validator.validateAll(loginFieldsSchema, loginData);
	if ( ! loginDataValid ) return respondFailure(res, localizedMessages.authInvalidData.format(), 406);
	UserProfile.find(loginData, "_id", (err, data) => {
		if ( err )
			return respondFailure(res, err)
		else if ( data.length !== 1 )
			return respondFailure(res, localizedMessages.authWrongCredentials.format(), 404);

		const user = data[0];
		const token = jwt.sign({ sub: user._id }, config.jwtSecret);
		console.log(`Successfully authorized ${loginData.username}`);
        return respondSuccess(res, token);
	});
}