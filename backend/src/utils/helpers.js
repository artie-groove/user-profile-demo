const path = require('path');
const fs = require('fs');
const { messages } = require('./i18n');

module.exports = {
	init,
	respond,
	respondSuccess,
	respondFailure,
	extractData,
	errorHandler,
	isKeyDataUnique
}

function init() {
	mkdirIfNotExists('uploads');
	mkdirIfNotExists('public/photos');
}

function mkdirIfNotExists(relativePath) {
	const absPath = path.resolve(relativePath);
	if ( ! fs.existsSync(absPath) ) {
		fs.mkdirSync(absPath);
	}
}

function respond(res, status, data) {
	console.log("response: ", status, data || '[no data]');
	return res.json({
		status,
		data
	});
}

function respondSuccess(res, data) {
	return respond(res, "SUCCESS", data);
}

function respondFailure(res, error, httpStatus = 400) {
	console.log("error: ", error);
	return res.status(httpStatus).json({
		status: "FAILURE",
		details: error
	});
}

// Вытащить заданные схемой поля из тела запроса source
function extractData(schema, source) {
	let data = {};
	schema.forEach( field => data[field.name] = source[field.name] );
	return data;
}

function errorHandler(err, req, res, next) {
	const localizedMessages = messages[req.locale];

    if ( typeof (err) === 'string' ) {
        // custom application error
        return respondFailure(res, err);
    }

    if ( err.name === 'UnauthorizedError' ) {
        // jwt authentication error
        return respondFailure(res, localizedMessages.unauthorizedError.format(), 401);
    }

    // default to 500 server error
    return respondFailure(res, err.message, 500);
}

async function isKeyDataUnique(model, keyData) {
	let alternatives = [];
	for ( let key in keyData ) {
		alternatives.push({ [key]: keyData[key] });
	}
	const data = await model
		.find({ $or: alternatives })
	 	.select("_id")
	 	.exec();

	return data.length
		? false
		: true;
}