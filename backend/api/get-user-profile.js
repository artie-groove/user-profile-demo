const fs = require('fs');
const UserProfile = require("../models/user-profile");
const validator = require("../utils/validator");
const { respondSuccess, respondFailure, extractData } = require("../utils/helpers");
const { messages } = require('../utils/i18n');
const { loginFieldsSchema } = require("esm")(module)("../schemas/schema-user-profile");
let express = require('express');
let router = express.Router();

module.exports = router.get('/get-user-profile', getUserProfileHandler);

// Обработчик запроса на получение данных профиля
function getUserProfileHandler(req, res) {
	UserProfile.findById(req.user.sub, "username email birthdate phone newsletters biography firstname lastname", (err, data) => {
		if ( err )
			return respondFailure(res, err);
		else if ( ! data ) {
			const localizedMessages = messages[res.locale];
			return respondFailure(res, localizedMessages.authWrongCredentials.format(), 404);
		}
		else {
			let { _id, username, ...userProfile } = data.toObject();
			const doesPhotoExist = fs.existsSync(`${__dirname}/../public/photos/${data.username}.jpg`);
			if ( doesPhotoExist ) userProfile.photo = `/photos/${data.username}.jpg`;

			return respondSuccess(res, userProfile);
		}
	});
};