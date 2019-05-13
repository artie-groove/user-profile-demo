const config = require("../config.json");
const fs = require("fs");
const UserProfile = require("../models/user-profile");
const validator = require("../utils/validator");
const { respondSuccess, respondFailure, extractData } = require("../utils/helpers");
const { messages } = require('../utils/i18n');
const { keyFieldsSchema, detailFieldsSchema } = require("esm")(module)("../schemas/schema-user-profile");
const multer = require('multer'); // парсит multipart-form-data
let express = require('express');
let router = express.Router();

// Обработчик загрузки изображения
let uploadHandler = multer({
	dest: 'uploads/',
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
	
	UserProfile.find(keyData, (err, data) => {
		if ( err )
			return respondFailure(res, err);
		
		if ( data.length )
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
				fs.renameSync(`${__dirname}/../${req.file.path}`, `${__dirname}/../public/photos/${user.username}.jpg`);
			}
			catch (error) {
				respondFailure(res, localizedMessage.failedToSavePhoto.format({errMsg: error}), 500);
				throw new Error(error);
			}
		}

		user.save(err => {
			return err
				? respondFailure(res, err, 500)
				: respondSuccess(res);
		});	
	});
}

async function isKeyDataUnique(model, keyData) {
	let alternatives = [];
	for ( let key in keyData ) {
		alternatives.push({ key: keyData[key] });
	}
	model.find({ $or: alternatives }, (err, data) => {
		if ( err ) throw new Error(err);
		return data.length
			? return Promise.resolve(false)
			: return Promise.resolve(true);
	});
}