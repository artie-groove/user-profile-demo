const fs = require('fs');
const path = require('path');
const UserProfile = require("../models/user-profile");
const validator = require("../utils/validator");
const { respondSuccess, respondFailure, extractData } = require("../utils/helpers");
const { messages } = require('../utils/i18n');
// const { loginFieldsSchema } = require("esm")(module)('../schemas/schema-user-profile');
// import { loginFieldsSchema } from '../schemas/schema-user-profile';
const loginFieldsSchema = require('../schemas/schema-user-profile');

let express = require('express');
let router = express.Router();

module.exports = router.get('/get-user-profile', getUserProfileHandler);

// Обработчик запроса на получение данных профиля
function getUserProfileHandler(req, res) {
	UserProfile.findById(req.user.sub, "username email birthdate phone newsletters biography firstname lastname", (err, data) => {
		if ( err )
			return respondFailure(res, err);
		else if ( ! data ) {
			const localizedMessages = messages[req.locale];
			return respondFailure(res, localizedMessages.authWrongCredentials.format(), 404);
		}
		else {
			let { _id, username, ...userProfile } = data.toObject();
			const doesPhotoExist = fs.existsSync(path.resolve('public/photos', `${data.username}.jpg`));
			userProfile.photo = doesPhotoExist
				? `/photos/${data.username}.jpg`
				: '/assets/img/no-photo.svg';

			return respondSuccess(res, userProfile);
		}
	});
};