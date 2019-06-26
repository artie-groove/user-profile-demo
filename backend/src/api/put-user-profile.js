const fs = require("fs");
const path = require("path");
const UserProfile = require("../models/user-profile");
const validator = require("../utils/validator");
const { respondSuccess, respondFailure, extractData, isKeyDataUnique } = require("../utils/helpers");
const { messages } = require('../utils/i18n');
const { keyFieldsSchema, detailFieldsSchema } = require("../schemas/schema-user-profile");

const multer = require('multer'); // парсит multipart-form-data
let express = require('express');
let router = express.Router();

// Обработчик загрузки изображения
let uploadHandler = multer({
	dest: path.resolve('uploads'),
	limits: {
		fileSize: 5 * 1024 * 1024,
		files: 1,
		parts: 20
	},
	// fileFilter: (req, file, cb) => {
	// 	console.log(file);
	// 	cb(null, true);
	// }
}).single('photo');

module.exports = router.post('/put-user-profile', uploadHandler, dataHandler);

//  Обработчик запроса на добавление записи
async function dataHandler(req, res) {
	const localizedMessages = messages[req.locale];

	// Вытаскиваем сначала ключ для проверки уникальности записи
	const keyData = extractData(keyFieldsSchema, req.body);
	let keyDataValid = validator.validateAll(keyFieldsSchema, keyData);
	if ( ! keyDataValid ) return respondFailure(res, localizedMessages.invalidKeyFieldsData.format(), 406);

	// Check if the key data is unique
	const isUnique = await isKeyDataUnique(UserProfile, keyData);

	if ( ! isUnique )
		return respondFailure(res, localizedMessages.userAlreadyExists.format(), 409);

	const detailsData = extractData(detailFieldsSchema, req.body);
	const detailsFieldsValid = validator.validateAll(detailFieldsSchema, detailsData);
	if ( !detailsFieldsValid ) {
		return respondFailure(res, localizedMessages.invalidFormData.format(), 406);
	}

	let user = new UserProfile();
	user = Object.assign(user, keyData, detailsData);
	
	// If a photo is attached, move it to the storage
	if ( req.file ) {
		try {
			const tmpUploadedFilePath = path.resolve(req.file.path);
			const dstFilePath = path.resolve('public/photos', `${user.username}.jpg`);
			fs.renameSync(tmpUploadedFilePath, dstFilePath);
		}
		catch (error) {
			respondFailure(res, localizedMessages.failedToSavePhoto.format({errMsg: error}), 500);
			throw new Error(error);
		}
	}

	user.save(err => {
		return err
			? respondFailure(res, err, 500)
			: respondSuccess(res);
	});
}