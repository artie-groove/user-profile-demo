const UserProfile = require('../models/user-profile');
const validator = require('../utils/validator');
const { isKeyDataUnique } = require('../utils/helpers');
const { messages } = require('../utils/i18n');
const approvableFieldsSchema = require('../schemas/schema-user-profile').approvableFieldsSchema;

module.exports = isUnique;

// Uniqueness check resolver
async function isUnique(args, req) {
	const localeId = req.locale;
	const localizedMessages = messages[localeId];
	const fieldData = { [args.name]: args.value };
	let fieldDataValid = validator.validateOne(approvableFieldsSchema, fieldData);
	// if ( ! fieldDataValid ) return respondFailure(res, localizedMessages.invalidFormat.format(), 400);
	
	if ( ! fieldDataValid ) throw new Error(localizedMessages.invalidFormat.format());

	return await isKeyDataUnique(UserProfile, fieldData);
};