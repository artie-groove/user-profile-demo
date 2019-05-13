const IntlMessageFormat = require('intl-messageformat');
const translations = require('../langs.json');
const acceptLanguage = require('accept-language');
const AllHtmlEntities = require('html-entities').AllHtmlEntities;
const entities = new AllHtmlEntities();

module.exports = {
	messages: preloadMessages(),
	localeHandler,
	detectLocale,
	setLocaleCookie,
}

acceptLanguage.languages(['en', 'ru']);

function preloadMessages() {
	let messages = {};
	for ( let localeId in translations ) {
		messages[localeId] = {};
		for ( let key in translations[localeId] ) {
			let value = translations[localeId][key];
			value = entities.decode(value);
			value = new IntlMessageFormat(value, localeId);
			messages[localeId][key] = value;
		}
	}
	return messages;
}

function localeHandler(req, res, next) {
	const localeId = detectLocale(req);

	// If the locale is not yet in cookies
	if ( ! req.cookies.locale )
		res.cookie('locale', localeId, { maxAge: (new Date() * 0.001) + (365 * 24 * 3600) });

	req.locale = localeId;
	next();
}

function detectLocale(req) {
	const cookieLocale = req.cookies.locale;

	return acceptLanguage.get(cookieLocale || req.headers['accept-language']) || 'en';
}

function setLocaleCookie(res, localeId) {
	res.cookie('locale', localeId, { maxAge: (new Date() * 0.001) + (365 * 24 * 3600) });
}