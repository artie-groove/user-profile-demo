const UserProfile = require("../models/user-profile");
const validator = require("../utils/validator");
const { respond, respondFailure, isKeyDataUnique } = require("../utils/helpers");
const { messages } = require("../utils/i18n");
const { approvableFieldsSchema } = require("esm")(module)("../schemas/schema-user-profile");
let express = require('express');
let router = express.Router();

module.exports = router.get('/check-uniqueness', checkUniquenessHandler);

// Обработчик запроса на проверку уникальности
async function checkUniquenessHandler(req, res) {
	const localeId = req.locale;
	const localizedMessages = messages[localeId];
	const name = req.query.name;
	const value = req.query.value;
	const fieldData = { [name]: value };
	let fieldDataValid = validator.validateOne(approvableFieldsSchema, fieldData);
	if ( ! fieldDataValid ) return respondFailure(res, localizedMessages.invalidFormat.format(), 400);
	
	isUnique = await isKeyDataUnique(UserProfile, fieldData);

	return isUnique
		? respond(res, "APPROVED")
		: respond(res, "REJECTED")
};