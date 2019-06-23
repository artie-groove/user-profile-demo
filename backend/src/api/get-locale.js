const { respondSuccess, respondFailure } = require('../utils/helpers');
const { setLocaleCookie, messages } = require('../utils/i18n');
let express = require('express');
let router = express.Router();
const fs = require('fs');
const path = require('path');
const AllHtmlEntities = require('html-entities').AllHtmlEntities;
const entities = new AllHtmlEntities();


module.exports = router.get('/get-locale', getLocaleHandler);


let localeData = [];

['ru'].forEach((locale) => {
	let messages = require(`../public/lang/${locale}.json`);
	for ( let key in messages ) {
		messages[key] = entities.decode(messages[key]);
	}
	localeData[locale] = {
		locale,
		messages
		// formats: fs.readFileSync(path.join(__dirname, `../node_modules/react-intl/locale-data/${localeId}.js`)).toString()
	}
});

// Locale request handler
function getLocaleHandler(req, res) {
	const currentLocaleId = req.locale;
	const wantedLocaleId = req.query.id;
	const localizedMessages = messages[currentLocaleId];

	if ( ! localeData[wantedLocaleId] )
		respondFailure(res, localizedMessages.localeNotFound.format(), 404);
	else {
		setLocaleCookie(res, wantedLocaleId);
		respondSuccess(res, localeData[wantedLocaleId]);
	}
}