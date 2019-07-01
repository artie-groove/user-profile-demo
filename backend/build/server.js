/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../frontend/src/components/SignupForm/Biography/Biography.validator.js":
/*!******************************************************************************!*\
  !*** ../frontend/src/components/SignupForm/Biography/Biography.validator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validate(value, statusCodes = {}) {
  // No more than 4000 characters
  if (value && value.length > 4000) return statusCodes.E_TOO_LONG;
  return true;
}

/***/ }),

/***/ "../frontend/src/components/SignupForm/Birthdate/Birthdate.validator.js":
/*!******************************************************************************!*\
  !*** ../frontend/src/components/SignupForm/Birthdate/Birthdate.validator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validate(value, statusCodes = {}) {
  // Empty string
  if (value.length === 0) return statusCodes.E_EMPTY; // Incorrect format

  const dateFormat = /^[0-9]{4}-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01])$/;
  const isCorrect = dateFormat.test(value);
  if (!isCorrect) return statusCodes.E_INVALID_FORMAT; // Still incorrect

  const tsBirthdate = Date.parse(value);
  if (isNaN(tsBirthdate)) return statusCodes.E_INVALID_FORMAT;
  const tsToday = Date.now(); // Future date

  if (tsBirthdate > tsToday) return statusCodes.E_TOO_EARLY; // Maximum age: 150 years

  if (tsToday - tsBirthdate > 150 * 365 * 24 * 60 * 60 * 1000) return statusCodes.E_TOO_OLD;
  return true;
}

/***/ }),

/***/ "../frontend/src/components/SignupForm/Email/Email.validator.js":
/*!**********************************************************************!*\
  !*** ../frontend/src/components/SignupForm/Email/Email.validator.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validate(value, statusCodes = {}) {
  // Empty string
  if (value.length === 0) return statusCodes.E_EMPTY; // Maximum 128 characters

  if (value.length > 128) return statusCodes.E_TOO_LONG; // Most sane addresses will comply to this format	
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

  const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let isValid = emailRegex.test(value);

  if (!isValid) {
    return statusCodes.E_INVALID_FORMAT;
  }

  return true;
}

/***/ }),

/***/ "../frontend/src/components/SignupForm/Firstname/Firstname.validator.js":
/*!******************************************************************************!*\
  !*** ../frontend/src/components/SignupForm/Firstname/Firstname.validator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validate(value, statusCodes = {}) {
  // Empty string
  if (value.length === 0) return statusCodes.E_EMPTY; // Maximum 40 characters

  if (value.length > 40) return statusCodes.E_TOO_LONG; // First character must be a capital letter

  const firstLetterRegex = /^[A-ZА-ЯЁ]$/;
  let isValid = firstLetterRegex.test(value.charAt(0));

  if (!isValid) {
    return statusCodes.E_FIRST_LETTER;
  } // Name should comply with the format


  const nameRegex = /^.[a-zа-яё]*$/;
  isValid = nameRegex.test(value);

  if (!isValid) {
    return statusCodes.E_INVALID_FORMAT;
  }

  return true;
}

/***/ }),

/***/ "../frontend/src/components/SignupForm/Lastname/Lastname.validator.js":
/*!****************************************************************************!*\
  !*** ../frontend/src/components/SignupForm/Lastname/Lastname.validator.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validate(value, statusCodes = {}) {
  // Empty string
  if (value.length === 0) return statusCodes.E_EMPTY; // Maximum 50 characters 

  if (value.length > 50) return statusCodes.E_TOO_LONG; // First character must be a capital letter

  const firstLetterRegex = /^[A-ZА-ЯЁ]$/;
  let isValid = firstLetterRegex.test(value.charAt(0));

  if (!isValid) {
    return statusCodes.E_FIRST_LETTER;
  } // Last character must be a letter


  const lastLetterRegex = /^[a-zа-яё]$/;
  isValid = lastLetterRegex.test(value.charAt(value.length - 1));

  if (!isValid) {
    return statusCodes.E_LAST_SYMBOL;
  } // Minimum two letters after a hyphen


  const endingRegex = /-[a-zа-яё]$/;
  isValid = endingRegex.test(value);

  if (isValid) {
    return statusCodes.E_WRONG_ENDING;
  } // Surname should comply with the format


  const nameRegex = /^[A-ZА-ЯЁ][-a-zа-яё]*$/;
  isValid = nameRegex.test(value);

  if (!isValid) {
    return statusCodes.E_INVALID_FORMAT;
  }

  return true;
}

/***/ }),

/***/ "../frontend/src/components/SignupForm/Password/Password.validator.js":
/*!****************************************************************************!*\
  !*** ../frontend/src/components/SignupForm/Password/Password.validator.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validate(value, statusCodes) {
  // Empty string
  if (value.length === 0) return statusCodes.E_EMPTY; // Maximum 128 characters 

  if (value.length > 128) return statusCodes.E_TOO_LONG;
  const grpLetters = "[a-zA-Z]";
  const grpDigits = "[0-9]";
  const grpSymbols = "";
  const format = `(?:${grpLetters}?${grpDigits}?${grpSymbols}?)+`;
  let regexp = new RegExp(format);
  regexp = /^(?:[a-zA-Z]|[0-9]|[-_,.'><=+&%$#@!* )(~\]/\\{}])+$/;
  let isValid = regexp.test(value);

  if (!isValid) {
    return statusCodes.E_INVALID_FORMAT;
  } // Password must contain at least two character groups
  // 1) Latin letters
  // 2) Digits
  // 3) Special characters


  regexp = /[a-zA-Z]/;
  const hasLetters = regexp.test(value);
  regexp = /[0-9]/;
  const hasDigits = regexp.test(value);
  regexp = /[-_,.'><=+&%$#@!* )(~\]/\\{}]/;
  const hasSymbols = regexp.test(value);
  if (hasLetters + hasDigits + hasSymbols < 2) return statusCodes.E_INSUFFICIENT; // Minimum 8 characters

  if (value.length < 8) return statusCodes.E_TOO_SHORT;
  return true;
}

/***/ }),

/***/ "../frontend/src/components/SignupForm/Phone/Phone.validator.js":
/*!**********************************************************************!*\
  !*** ../frontend/src/components/SignupForm/Phone/Phone.validator.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validate(value, statusCodes = {}) {
  // Empty string
  if (value.length === 0) return statusCodes.E_EMPTY; // Maximum 20 characters

  if (value.length > 20) return statusCodes.E_TOO_LONG; // First character must be a letter

  const firstSymbolRegex = /^\+/;
  let isValid = firstSymbolRegex.test(value.charAt(0));

  if (!isValid) {
    return statusCodes.E_FIRST_SYMBOL;
  } // Only valid characters


  const phoneLexisRegex = /^[-+ 0-9]+$/;
  isValid = phoneLexisRegex.test(value);

  if (!isValid) {
    return statusCodes.E_INVALID_CHARS;
  } // Phone number should comply with the format


  const phoneGrammarRegex = /^\+[0-9]{1,3}(?:(?:[- ][0-9]{2,4}){3,4}|[- ]?[0-9]{5,10})$/;
  isValid = phoneGrammarRegex.test(value);

  if (!isValid) {
    return statusCodes.E_INVALID_FORMAT;
  } // Minimum 10 characters


  if (value.length < 10) return statusCodes.E_TOO_SHORT;
  return true;
}

/***/ }),

/***/ "../frontend/src/components/SignupForm/Username/Username.validator.js":
/*!****************************************************************************!*\
  !*** ../frontend/src/components/SignupForm/Username/Username.validator.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validate(value, statusCodes = {}) {
  // Empty string
  if (value.length === 0) return statusCodes.E_EMPTY; // Maximium 30 characters 

  if (value.length > 30) return statusCodes.E_TOO_LONG; // First character should be a letter

  const firstLetterRegex = /^[a-z]$/;
  let isValid = firstLetterRegex.test(value.charAt(0));

  if (!isValid) {
    return statusCodes.E_FIRST_LETTER;
  } // Name should comply with the format 


  const usernameRegex = /^[-a-z0-9]+$/;
  isValid = usernameRegex.test(value);

  if (!isValid) {
    return statusCodes.E_INVALID_FORMAT;
  } // Minimum 5 characters


  if (value.length < 5) return statusCodes.E_TOO_SHORT; // Last character must be a letter or a digit

  const lastLetterRegex = /^[a-z0-9]$/;
  isValid = lastLetterRegex.test(value.charAt(value.length - 1));

  if (!isValid) {
    return statusCodes.E_LAST_SYMBOL;
  }

  return true;
}

/***/ }),

/***/ "./src/api/auth.js":
/*!*************************!*\
  !*** ./src/api/auth.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const config = __webpack_require__(/*! ../config */ "./src/config.js");

const UserProfile = __webpack_require__(/*! ../models/user-profile */ "./src/models/user-profile.js");

const validator = __webpack_require__(/*! ../utils/validator */ "./src/utils/validator.js");

const loginFieldsSchema = __webpack_require__(/*! ../schemas/schema-user-profile */ "./src/schemas/schema-user-profile.js").loginFieldsSchema;

const {
  respond,
  respondSuccess,
  respondFailure,
  extractData
} = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const express = __webpack_require__(/*! express */ "express");

const router = express.Router();

const {
  messages
} = __webpack_require__(/*! ../utils/i18n */ "./src/utils/i18n.js");

module.exports = router.get('/auth', authenticationHandler); // Обработчик запроса на аутентификацию пользователя

function authenticationHandler(req, res) {
  const localeId = req.locale;
  const localizedMessages = messages[localeId];
  const loginData = extractData(loginFieldsSchema, req.query);
  let loginDataValid = validator.validateAll(loginFieldsSchema, loginData);
  if (!loginDataValid) return respondFailure(res, localizedMessages.authInvalidData.format(), 406);
  UserProfile.find(loginData, "_id", (err, data) => {
    if (err) return respondFailure(res, err);else if (data.length !== 1) return respondFailure(res, localizedMessages.authWrongCredentials.format(), 404);
    const user = data[0];
    const token = jwt.sign({
      sub: user._id
    }, config.jwtSecret);
    console.log(`Successfully authorized ${loginData.username}`);
    return respondSuccess(res, token);
  });
}

/***/ }),

/***/ "./src/api/check-uniqueness.js":
/*!*************************************!*\
  !*** ./src/api/check-uniqueness.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const UserProfile = __webpack_require__(/*! ../models/user-profile */ "./src/models/user-profile.js");

const validator = __webpack_require__(/*! ../utils/validator */ "./src/utils/validator.js");

const {
  respond,
  respondFailure,
  isKeyDataUnique
} = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");

const {
  messages
} = __webpack_require__(/*! ../utils/i18n */ "./src/utils/i18n.js"); // const { approvableFieldsSchema } = require("esm")(module)('../schemas/schema-user-profile');
// import { approvableFieldsSchema } from '../schemas/schema-user-profile';


const approvableFieldsSchema = __webpack_require__(/*! ../schemas/schema-user-profile */ "./src/schemas/schema-user-profile.js").approvableFieldsSchema;

let express = __webpack_require__(/*! express */ "express");

let router = express.Router();
module.exports = router.get('/check-uniqueness', checkUniquenessHandler); // Обработчик запроса на проверку уникальности

async function checkUniquenessHandler(req, res) {
  const localeId = req.locale;
  const localizedMessages = messages[localeId];
  const name = req.query.name;
  const value = req.query.value;
  const fieldData = {
    [name]: value
  };
  let fieldDataValid = validator.validateOne(approvableFieldsSchema, fieldData);
  if (!fieldDataValid) return respondFailure(res, localizedMessages.invalidFormat.format(), 400);
  const isUnique = await isKeyDataUnique(UserProfile, fieldData);
  return isUnique ? respond(res, "APPROVED") : respond(res, "REJECTED");
}

;

/***/ }),

/***/ "./src/api/get-locale.js":
/*!*******************************!*\
  !*** ./src/api/get-locale.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  respondSuccess,
  respondFailure
} = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");

const {
  setLocaleCookie,
  messages
} = __webpack_require__(/*! ../utils/i18n */ "./src/utils/i18n.js");

let express = __webpack_require__(/*! express */ "express");

let router = express.Router();

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const AllHtmlEntities = __webpack_require__(/*! html-entities */ "html-entities").AllHtmlEntities;

const entities = new AllHtmlEntities();
module.exports = router.get('/get-locale', getLocaleHandler);
let localeData = [];
['ru'].forEach(locale => {
  let messages = __webpack_require__("./src/public/lang sync recursive ^\\.\\/.*\\.json$")(`./${locale}.json`);

  for (let key in messages) {
    messages[key] = entities.decode(messages[key]);
  }

  localeData[locale] = {
    locale,
    messages // formats: fs.readFileSync(path.join(__dirname, `../node_modules/react-intl/locale-data/${localeId}.js`)).toString()

  };
}); // Locale request handler

function getLocaleHandler(req, res) {
  const currentLocaleId = req.locale;
  const wantedLocaleId = req.query.id;
  const localizedMessages = messages[currentLocaleId];
  if (!localeData[wantedLocaleId]) respondFailure(res, localizedMessages.localeNotFound.format(), 404);else {
    setLocaleCookie(res, wantedLocaleId);
    respondSuccess(res, localeData[wantedLocaleId]);
  }
}

/***/ }),

/***/ "./src/api/get-user-profile.js":
/*!*************************************!*\
  !*** ./src/api/get-user-profile.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const UserProfile = __webpack_require__(/*! ../models/user-profile */ "./src/models/user-profile.js");

const validator = __webpack_require__(/*! ../utils/validator */ "./src/utils/validator.js");

const {
  respondSuccess,
  respondFailure,
  extractData
} = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");

const {
  messages
} = __webpack_require__(/*! ../utils/i18n */ "./src/utils/i18n.js");

let express = __webpack_require__(/*! express */ "express");

let router = express.Router();
module.exports = router.get('/get-user-profile', getUserProfileHandler); // Обработчик запроса на получение данных профиля

function getUserProfileHandler(req, res) {
  UserProfile.findById(req.user.sub, "username email birthdate phone newsletters biography firstname lastname", (err, data) => {
    if (err) return respondFailure(res, err);else if (!data) {
      const localizedMessages = messages[req.locale];
      return respondFailure(res, localizedMessages.authWrongCredentials.format(), 404);
    } else {
      let {
        _id,
        username,
        ...userProfile
      } = data.toObject();
      const doesPhotoExist = fs.existsSync(path.resolve('public/photos', `${data.username}.jpg`));
      userProfile.photo = doesPhotoExist ? `/photos/${data.username}.jpg` : '/assets/img/no-photo.svg';
      return respondSuccess(res, userProfile);
    }
  });
}

;

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [__webpack_require__(/*! ./auth */ "./src/api/auth.js"), __webpack_require__(/*! ./get-locale */ "./src/api/get-locale.js"), __webpack_require__(/*! ./check-uniqueness */ "./src/api/check-uniqueness.js"), __webpack_require__(/*! ./get-user-profile */ "./src/api/get-user-profile.js"), __webpack_require__(/*! ./put-user-profile */ "./src/api/put-user-profile.js")];

/***/ }),

/***/ "./src/api/put-user-profile.js":
/*!*************************************!*\
  !*** ./src/api/put-user-profile.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const UserProfile = __webpack_require__(/*! ../models/user-profile */ "./src/models/user-profile.js");

const validator = __webpack_require__(/*! ../utils/validator */ "./src/utils/validator.js");

const {
  respondSuccess,
  respondFailure,
  extractData,
  isKeyDataUnique
} = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");

const {
  messages
} = __webpack_require__(/*! ../utils/i18n */ "./src/utils/i18n.js");

const {
  keyFieldsSchema,
  detailFieldsSchema
} = __webpack_require__(/*! ../schemas/schema-user-profile */ "./src/schemas/schema-user-profile.js");

const multer = __webpack_require__(/*! multer */ "multer"); // парсит multipart-form-data


let express = __webpack_require__(/*! express */ "express");

let router = express.Router(); // Обработчик загрузки изображения

let uploadHandler = multer({
  dest: path.resolve('uploads'),
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1,
    parts: 20
  } // fileFilter: (req, file, cb) => {
  // 	console.log(file);
  // 	cb(null, true);
  // }

}).single('photo');
module.exports = router.post('/put-user-profile', uploadHandler, dataHandler); //  Обработчик запроса на добавление записи

async function dataHandler(req, res) {
  const localizedMessages = messages[req.locale]; // Вытаскиваем сначала ключ для проверки уникальности записи

  const keyData = extractData(keyFieldsSchema, req.body);
  let keyDataValid = validator.validateAll(keyFieldsSchema, keyData);
  if (!keyDataValid) return respondFailure(res, localizedMessages.invalidKeyFieldsData.format(), 406); // Check if the key data is unique

  const isUnique = await isKeyDataUnique(UserProfile, keyData);
  if (!isUnique) return respondFailure(res, localizedMessages.userAlreadyExists.format(), 409);
  const detailsData = extractData(detailFieldsSchema, req.body);
  const detailsFieldsValid = validator.validateAll(detailFieldsSchema, detailsData);

  if (!detailsFieldsValid) {
    return respondFailure(res, localizedMessages.invalidFormData.format(), 406);
  }

  let user = new UserProfile();
  user = Object.assign(user, keyData, detailsData);
  const {
    password,
    ...allDetails
  } = Object.assign({}, keyData, detailsData);
  const dataString = Object.keys(allDetails).reduce((prev, current) => {
    return `${prev}\n${current}: "${allDetails[current]}"`;
  }, '');
  console.log(`User data sumbitted: ${dataString}`); // If a photo is attached, move it to the storage

  if (req.file) {
    console.log(`Photo attached: ${req.file.originalname} [${Math.ceil(req.file.size / 1024)} KB]`);

    try {
      const tmpUploadedFilePath = path.resolve(req.file.path);
      const dstFilePath = path.resolve('public/photos', `${user.username}.jpg`);
      fs.renameSync(tmpUploadedFilePath, dstFilePath);
    } catch (error) {
      respondFailure(res, localizedMessages.failedToSavePhoto.format({
        errMsg: error
      }), 500);
      throw new Error(error);
    }
  }

  console.log("Saving user profile data");
  user.save(err => {
    return err ? respondFailure(res, err, 500) : respondSuccess(res);
  });
}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

const jwtSecret = process.env.JWT_SECRET || "Just a random unique string to be used with JWT";
const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || 27017;
const dbUser = process.env.DB_USER || "user-service";
const dbPass = process.env.DB_PASS || "example";
const dbName = process.env.DB_NAME || "app";
const dbConnectionString = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
const apiPort = process.env.API_PORT || 80;
module.exports = {
  jwtSecret,
  dbConnectionString,
  apiPort
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const path = require('path');
// require('@babel/register')({
// 	rootMode: "upward",
// 	// include: [
//  //      path.resolve(__dirname, "."),
//  //      path.resolve(__dirname, "../frontend/*"),
//  //    ],
// });
module.exports = __webpack_require__(/*! ./server.js */ "./src/server.js");

/***/ }),

/***/ "./src/langs.json":
/*!************************!*\
  !*** ./src/langs.json ***!
  \************************/
/*! exports provided: en, ru, default */
/***/ (function(module) {

module.exports = {"en":{"authInvalidData":"Please, supply data in the correct format","authWrongCredentials":"Incorrect username or password","localeNotFound":"The requested locale is not supported","invalidFormat":"Format error. Please, provide correct data","invalidKeyFieldsData":"Invalid data provided for the key fields","userAlreadyExists":"A user with the provided key fields already exists. Please, use unique data","invalidFormData":"Form was filled in incorrectly. Please, adhere to the specified requirements","failedToSavePhoto":"Failed to save photo: {errMsg}","unauthorizedError":"You are not authorized to access the resource or your session has expired. Please, log in again"},"ru":{"authInvalidData":"Пожалуйста, предоставьте данные в корректном формате","authWrongCredentials":"Неверное имя пользователя или пароль","localeNotFound":"К сожалению, сервер не поддерживает указанную локаль","invalidFormat":"Ошибка формата. Пожалуйста, предоставьте корректные данные","invalidKeyFieldsData":"Неверно заполнены ключевые поля","userAlreadyExists":"Пользователь с указанными ключевыми параметрами уже существует. Пожалуйста, используйте уникальные данные","invalidFormData":"Форма заполнена некорректно. Пожалуйста, придерживайтесь описанных требований","failedToSavePhoto":"Ошибка сохранения фотографии: {errMsg}","unauthorizedError":"Вы не авторизованы для доступа к ресурсу или ваша сессия истекла. Пожалуйста, авторизуйтесь заново"}};

/***/ }),

/***/ "./src/models/user-profile.js":
/*!************************************!*\
  !*** ./src/models/user-profile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const Schema = mongoose.Schema; // User profile schema

const DataSchema = new Schema({
  id: Number,
  username: String,
  password: String,
  email: String,
  phone: String,
  newsletters: Boolean,
  birthdate: Date,
  biography: String,
  firstname: String,
  lastname: String,
  photo: String
}, {
  timestamps: true
});
module.exports = mongoose.model("UserProfile", DataSchema);

/***/ }),

/***/ "./src/public/lang sync recursive ^\\.\\/.*\\.json$":
/*!*********************************************!*\
  !*** ./src/public/lang sync ^\.\/.*\.json$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": "./src/public/lang/en.json",
	"./ru.json": "./src/public/lang/ru.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/public/lang sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./src/public/lang/en.json":
/*!*********************************!*\
  !*** ./src/public/lang/en.json ***!
  \*********************************/
/*! exports provided: components.App.localeSwitchErrorTitle, components.App.notAuthorizedException, components.Dashboard.biographyBlockTitle, components.Dashboard.birthdate, components.Dashboard.dataLoadingErrorTitle, components.Dashboard.dataLoadingSpinnerMsg, components.Dashboard.logoutButtonCaption, components.Dashboard.newslettersStatusIndicatorLabel, components.LoginForm.authErrorTitle, components.LoginForm.formHint, components.LoginForm.formTitle, components.LoginForm.msgNoAccountQuestion, components.LoginForm.passwordLabel, components.LoginForm.signupLinkCaption, components.LoginForm.submitButtonCaption, components.LoginForm.submitButtonInProgressCaption, components.LoginForm.usernameLabel, components.SignupForm.Biography.E_TOO_LONG, components.SignupForm.Birthdate.E_EMPTY, components.SignupForm.Birthdate.E_INVALID_FORMAT, components.SignupForm.Birthdate.E_TOO_EARLY, components.SignupForm.Birthdate.E_TOO_OLD, components.SignupForm.Email.E_EMPTY, components.SignupForm.Email.E_INVALID_FORMAT, components.SignupForm.Email.E_TOO_LONG, components.SignupForm.Email.approved, components.SignupForm.Email.rejected, components.SignupForm.Firstname.E_EMPTY, components.SignupForm.Firstname.E_FIRST_LETTER, components.SignupForm.Firstname.E_INVALID_FORMAT, components.SignupForm.Firstname.E_TOO_LONG, components.SignupForm.Lastname.E_EMPTY, components.SignupForm.Lastname.E_FIRST_LETTER, components.SignupForm.Lastname.E_INVALID_FORMAT, components.SignupForm.Lastname.E_LAST_SYMBOL, components.SignupForm.Lastname.E_TOO_LONG, components.SignupForm.Lastname.E_WRONG_ENDING, components.SignupForm.Password.E_EMPTY, components.SignupForm.Password.E_INSUFFICIENT, components.SignupForm.Password.E_INVALID_FORMAT, components.SignupForm.Password.E_TOO_LONG, components.SignupForm.Password.E_TOO_SHORT, components.SignupForm.PasswordConfirmation.E_EMPTY, components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH, components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID, components.SignupForm.PasswordConfirmation.valid, components.SignupForm.PersonalInformationProcessing.E_IMPOSED, components.SignupForm.Phone.E_EMPTY, components.SignupForm.Phone.E_FIRST_SYMBOL, components.SignupForm.Phone.E_INVALID_FORMAT, components.SignupForm.Phone.E_TOO_LONG, components.SignupForm.Phone.E_TOO_SHORT, components.SignupForm.Phone.approved, components.SignupForm.Phone.rejected, components.SignupForm.Photo.E_NOT_SELECTED, components.SignupForm.Photo.E_TOO_BIG, components.SignupForm.Photo.E_WRONG_IMAGE_TYPE, components.SignupForm.Photo.photoPickerButtonCaption, components.SignupForm.Username.E_EMPTY, components.SignupForm.Username.E_FIRST_LETTER, components.SignupForm.Username.E_INVALID_FORMAT, components.SignupForm.Username.E_LAST_SYMBOL, components.SignupForm.Username.E_TOO_LONG, components.SignupForm.Username.E_TOO_SHORT, components.SignupForm.Username.approved, components.SignupForm.Username.rejected, components.SignupForm.alreadySignedUp, components.SignupForm.biographyLabel, components.SignupForm.birthdateHint, components.SignupForm.birthdateLabel, components.SignupForm.emailHint, components.SignupForm.emailLabel, components.SignupForm.firstNameLabel, components.SignupForm.lastNameLabel, components.SignupForm.loginLinkCaption, components.SignupForm.newslettersHint, components.SignupForm.newslettersLabel, components.SignupForm.passwordConfirmationHint, components.SignupForm.passwordConfirmationLabel, components.SignupForm.passwordHint, components.SignupForm.passwordLabel, components.SignupForm.personalInformationProcessingHint, components.SignupForm.personalInformationProcessingLabel, components.SignupForm.phoneHint, components.SignupForm.phoneLabel, components.SignupForm.photoHint, components.SignupForm.photoLabel, components.SignupForm.signupErrorTitle, components.SignupForm.signupFormHint, components.SignupForm.signupFormTitle, components.SignupForm.signupSuccessMessage, components.SignupForm.signupSuccessTitle, components.SignupForm.submitButtonCaption, components.SignupForm.submitButtonInProgressCaption, components.SignupForm.userIdHint, components.SignupForm.userIdLabel, components.SignupForm.btnDemoCaption, serverConnectionError, somethingWentWrong, default */
/***/ (function(module) {

module.exports = {"components.App.localeSwitchErrorTitle":"Couldn't switch locale","components.App.notAuthorizedException":"Not authorized. Probably due to an application error. Try logging in again","components.Dashboard.biographyBlockTitle":"Short biography","components.Dashboard.birthdate":"{birthdate, date, medium} ({age, number} {age, plural, one {year} other {years}} old)","components.Dashboard.dataLoadingErrorTitle":"Error loading profile data","components.Dashboard.dataLoadingSpinnerMsg":"Loading data...","components.Dashboard.logoutButtonCaption":"Log out","components.Dashboard.newslettersStatusIndicatorLabel":"Newsletters","components.LoginForm.authErrorTitle":"Authentication error","components.LoginForm.formHint":"Please, enter your user name and password to get access to your profile","components.LoginForm.formTitle":"Log in","components.LoginForm.msgNoAccountQuestion":"No account?","components.LoginForm.passwordLabel":"Password","components.LoginForm.signupLinkCaption":"Register","components.LoginForm.submitButtonCaption":"Log in","components.LoginForm.submitButtonInProgressCaption":"Sending","components.LoginForm.usernameLabel":"Username","components.SignupForm.Biography.E_TOO_LONG":"Please, shorten your biography to 4000 symbols","components.SignupForm.Birthdate.E_EMPTY":"This field is required. Please, enter your date of birth","components.SignupForm.Birthdate.E_INVALID_FORMAT":"Wrong data format. Please, make sure you enter the date in YYYY-MM-DD format","components.SignupForm.Birthdate.E_TOO_EARLY":"Only dates from the past are accepted","components.SignupForm.Birthdate.E_TOO_OLD":"We accept that a human can live longer than 150 years. If that's your case, please contact us via phone or email. We will consider your application in exceptional order","components.SignupForm.Email.E_EMPTY":"This field is required. Please, enter your email","components.SignupForm.Email.E_INVALID_FORMAT":"Email doesn't comply with the format. Please, make sure you typed the address correctly","components.SignupForm.Email.E_TOO_LONG":"We don't accept emails longer than 128 symbols. Please, use a shorter address","components.SignupForm.Email.approved":"This email address is fine!","components.SignupForm.Email.rejected":"The address has already been taken by somebody. Please, use another one","components.SignupForm.Firstname.E_EMPTY":"This field is required. Please, enter your name","components.SignupForm.Firstname.E_FIRST_LETTER":"Name should begin with a capital letter","components.SignupForm.Firstname.E_INVALID_FORMAT":"The name contains illegal characters. Please, adhere to the specified format","components.SignupForm.Firstname.E_TOO_LONG":"Name shouldn't exceed 40 characters","components.SignupForm.Lastname.E_EMPTY":"This field is required. Please, enter your family name","components.SignupForm.Lastname.E_FIRST_LETTER":"Family name should start with capital letter","components.SignupForm.Lastname.E_INVALID_FORMAT":"The family name doesn't follow the format. Please, use only letters and a hyphen","components.SignupForm.Lastname.E_LAST_SYMBOL":"Family name should end in lowercase letter","components.SignupForm.Lastname.E_TOO_LONG":"Family name shouldn't exceed 50 characters","components.SignupForm.Lastname.E_WRONG_ENDING":"Minimum 2 letters after a hyphen","components.SignupForm.Password.E_EMPTY":"This is a required field. Please, enter a password","components.SignupForm.Password.E_INSUFFICIENT":"Please, use at least 2 symbol groups: letters, digits or special characters","components.SignupForm.Password.E_INVALID_FORMAT":"The password contains illegal symbols. Please, adhere to the specified format","components.SignupForm.Password.E_TOO_LONG":"Password should be less that 128 symbols long. Please, use a shorter password","components.SignupForm.Password.E_TOO_SHORT":"Password should be at least 8 symbols long","components.SignupForm.PasswordConfirmation.E_EMPTY":"This field is required. Please, confirm the above entered password","components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH":"Passwords don't match","components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID":"Please, make sure both passwords follow the specified format","components.SignupForm.PasswordConfirmation.valid":"Passwords match","components.SignupForm.PersonalInformationProcessing.E_IMPOSED":"Consent to personal information processing is required to sign up to our service","components.SignupForm.Phone.E_EMPTY":"This field is required. Please, enter your phone number","components.SignupForm.Phone.E_FIRST_SYMBOL":"The first character should be a plus symbol (+)","components.SignupForm.Phone.E_INVALID_FORMAT":"The phone number doesn't comply with the format. Please, check if you typed it correctly","components.SignupForm.Phone.E_TOO_LONG":"The phone number is too long. Please, use a shorter number","components.SignupForm.Phone.E_TOO_SHORT":"Phone number should be more than 10 characters long. Please, make sure you entered it correctly","components.SignupForm.Phone.approved":"This phone number will work!","components.SignupForm.Phone.rejected":"This phone number has already been in use. Please, choose another one","components.SignupForm.Photo.E_NOT_SELECTED":"Please, choose a photo for your profile","components.SignupForm.Photo.E_TOO_BIG":"File size shouldn't exceed 5 MB","components.SignupForm.Photo.E_WRONG_IMAGE_TYPE":"We only support images of JPEG format","components.SignupForm.Photo.photoPickerButtonCaption":"Pick a photo","components.SignupForm.Username.E_EMPTY":"This field is required. Please, come up with a username","components.SignupForm.Username.E_FIRST_LETTER":"Username should begin with a lowercase Latin character","components.SignupForm.Username.E_INVALID_FORMAT":"The name contains illegal characters. Please, adhere to the specified format","components.SignupForm.Username.E_LAST_SYMBOL":"Name should end in a letter or a digit","components.SignupForm.Username.E_TOO_LONG":"Name shouldn't be longer than 30 characters","components.SignupForm.Username.E_TOO_SHORT":"Name should be at least 5 characters long","components.SignupForm.Username.approved":"Great, this is a suitable name!","components.SignupForm.Username.rejected":"Unfortunately, this name has already been taken. Please, come up with another one","components.SignupForm.alreadySignedUp":"Already signed up?","components.SignupForm.biographyLabel":"Short biography","components.SignupForm.birthdateHint":"Please, choose the date from the popup calendar","components.SignupForm.birthdateLabel":"Birthdate","components.SignupForm.emailHint":"We use the email for password restoration and critical notifications. No unnecessary newsletters","components.SignupForm.emailLabel":"Email","components.SignupForm.firstNameLabel":"Given name","components.SignupForm.lastNameLabel":"Family name","components.SignupForm.loginLinkCaption":"Log in","components.SignupForm.newslettersHint":"Switch on if you want to keep up with us","components.SignupForm.newslettersLabel":"Newsletters","components.SignupForm.passwordConfirmationHint":"Please, confirm the above entered password","components.SignupForm.passwordConfirmationLabel":"Password confirmation","components.SignupForm.passwordHint":"Only latin letters, digits and special characters (for example, :, ', >, <, =, +, ., &, %, $, #, @, !, *, ), (, -, ~, [, ], /, \\\\, \\{, \\}, _, ^). Minimum 8 characters. At least two character types should be used","components.SignupForm.passwordLabel":"Password","components.SignupForm.personalInformationProcessingHint":"According to Russia's federal law from 27/07/2006 number 152-FZ 'On personal data'","components.SignupForm.personalInformationProcessingLabel":"I give my consent to process my personal data","components.SignupForm.phoneHint":"Phone number in the following format: <country code> <number>, for example, +7 926-840-55-49. Minimum 5 characters","components.SignupForm.phoneLabel":"Phone number","components.SignupForm.photoHint":"JPEG files only. Maximum size - 5 MB","components.SignupForm.photoLabel":"Photo","components.SignupForm.signupErrorTitle":"Sign up error","components.SignupForm.signupFormHint":"You need to provide some personal information. Please, fill in the form below","components.SignupForm.signupFormTitle":"Sign Up","components.SignupForm.signupSuccessMessage":"You're registered. Please, log in to your account","components.SignupForm.signupSuccessTitle":"Signed up successfully!","components.SignupForm.submitButtonCaption":"Sign up","components.SignupForm.submitButtonInProgressCaption":"Sending","components.SignupForm.userIdHint":"User identifier. Has to be composed of lowercase latin letters and/or digits. Нyphen is allowed. Should start with a letter and end with a letter or a digit. Minimim - 5 symbols. For example, 'giant-66'","components.SignupForm.userIdLabel":"Username","components.SignupForm.btnDemoCaption":"Demo","serverConnectionError":"Couldn't connect to server: \"{errorMsg}\". Please, try again later. If you can't submit the form, please contact us. We bring our apologies for the inconvenience","somethingWentWrong":"Something went wrong. Probably, due to a server fault or connection problems. Please, try again later. If you can't submit the form, please contact us. We bring our apologies for the inconvenience"};

/***/ }),

/***/ "./src/public/lang/ru.json":
/*!*********************************!*\
  !*** ./src/public/lang/ru.json ***!
  \*********************************/
/*! exports provided: components.App.localeSwitchErrorTitle, components.App.notAuthorizedException, components.Dashboard.biographyBlockTitle, components.Dashboard.birthdate, components.Dashboard.dataLoadingErrorTitle, components.Dashboard.dataLoadingSpinnerMsg, components.Dashboard.logoutButtonCaption, components.Dashboard.newslettersStatusIndicatorLabel, components.LoginForm.authErrorTitle, components.LoginForm.formHint, components.LoginForm.formTitle, components.LoginForm.msgNoAccountQuestion, components.LoginForm.passwordLabel, components.LoginForm.signupLinkCaption, components.LoginForm.submitButtonCaption, components.LoginForm.submitButtonInProgressCaption, components.LoginForm.usernameLabel, components.SignupForm.Biography.E_TOO_LONG, components.SignupForm.Birthdate.E_EMPTY, components.SignupForm.Birthdate.E_INVALID_FORMAT, components.SignupForm.Birthdate.E_TOO_EARLY, components.SignupForm.Birthdate.E_TOO_OLD, components.SignupForm.Email.E_EMPTY, components.SignupForm.Email.E_INVALID_FORMAT, components.SignupForm.Email.E_TOO_LONG, components.SignupForm.Email.approved, components.SignupForm.Email.rejected, components.SignupForm.Firstname.E_EMPTY, components.SignupForm.Firstname.E_FIRST_LETTER, components.SignupForm.Firstname.E_INVALID_FORMAT, components.SignupForm.Firstname.E_TOO_LONG, components.SignupForm.Lastname.E_EMPTY, components.SignupForm.Lastname.E_FIRST_LETTER, components.SignupForm.Lastname.E_INVALID_FORMAT, components.SignupForm.Lastname.E_LAST_SYMBOL, components.SignupForm.Lastname.E_TOO_LONG, components.SignupForm.Lastname.E_WRONG_ENDING, components.SignupForm.Password.E_EMPTY, components.SignupForm.Password.E_INSUFFICIENT, components.SignupForm.Password.E_INVALID_FORMAT, components.SignupForm.Password.E_TOO_LONG, components.SignupForm.Password.E_TOO_SHORT, components.SignupForm.PasswordConfirmation.E_EMPTY, components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH, components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID, components.SignupForm.PasswordConfirmation.valid, components.SignupForm.PersonalInformationProcessing.E_IMPOSED, components.SignupForm.Phone.E_EMPTY, components.SignupForm.Phone.E_FIRST_SYMBOL, components.SignupForm.Phone.E_INVALID_FORMAT, components.SignupForm.Phone.E_TOO_LONG, components.SignupForm.Phone.E_TOO_SHORT, components.SignupForm.Phone.approved, components.SignupForm.Phone.rejected, components.SignupForm.Photo.E_NOT_SELECTED, components.SignupForm.Photo.E_TOO_BIG, components.SignupForm.Photo.E_WRONG_IMAGE_TYPE, components.SignupForm.Photo.photoPickerButtonCaption, components.SignupForm.Username.E_EMPTY, components.SignupForm.Username.E_FIRST_LETTER, components.SignupForm.Username.E_INVALID_FORMAT, components.SignupForm.Username.E_LAST_SYMBOL, components.SignupForm.Username.E_TOO_LONG, components.SignupForm.Username.E_TOO_SHORT, components.SignupForm.Username.approved, components.SignupForm.Username.rejected, components.SignupForm.alreadySignedUp, components.SignupForm.biographyLabel, components.SignupForm.birthdateHint, components.SignupForm.birthdateLabel, components.SignupForm.emailHint, components.SignupForm.emailLabel, components.SignupForm.firstNameLabel, components.SignupForm.lastNameLabel, components.SignupForm.loginLinkCaption, components.SignupForm.newslettersHint, components.SignupForm.newslettersLabel, components.SignupForm.passwordConfirmationHint, components.SignupForm.passwordConfirmationLabel, components.SignupForm.passwordHint, components.SignupForm.passwordLabel, components.SignupForm.personalInformationProcessingHint, components.SignupForm.personalInformationProcessingLabel, components.SignupForm.phoneHint, components.SignupForm.phoneLabel, components.SignupForm.photoHint, components.SignupForm.photoLabel, components.SignupForm.signupErrorTitle, components.SignupForm.signupFormHint, components.SignupForm.signupFormTitle, components.SignupForm.signupSuccessMessage, components.SignupForm.signupSuccessTitle, components.SignupForm.submitButtonCaption, components.SignupForm.submitButtonInProgressCaption, components.SignupForm.userIdHint, components.SignupForm.userIdLabel, components.SignupForm.btnDemoCaption, serverConnectionError, somethingWentWrong, default */
/***/ (function(module) {

module.exports = {"components.App.localeSwitchErrorTitle":"Не&nbsp;удалось сменить локализацию","components.App.notAuthorizedException":"Вы&nbsp;не&nbsp;авторизованы. Возможно, это ошибка приложения. Попробуйте авторизоваться заново","components.Dashboard.biographyBlockTitle":"Краткая биография","components.Dashboard.birthdate":"{birthdate, date, medium} ({age, plural, offset: 1 =0 {младенец} other {{age, number} {age, plural, one {год} few {года} many {лет} other {}}}})","components.Dashboard.dataLoadingErrorTitle":"Ошибка загрузки данных профиля","components.Dashboard.dataLoadingSpinnerMsg":"Загрузка...","components.Dashboard.logoutButtonCaption":"Выйти","components.Dashboard.newslettersStatusIndicatorLabel":"Информационные рассылки","components.LoginForm.authErrorTitle":"Ошибка аутентификации","components.LoginForm.formHint":"Пожалуйста, введите имя пользователя и&nbsp;пароль для получения доступа к&nbsp;личному кабинету","components.LoginForm.formTitle":"Авторизация","components.LoginForm.msgNoAccountQuestion":"Нет аккаунта?","components.LoginForm.passwordLabel":"Пароль","components.LoginForm.signupLinkCaption":"Регистрация","components.LoginForm.submitButtonCaption":"Войти","components.LoginForm.submitButtonInProgressCaption":"Отправка","components.LoginForm.usernameLabel":"Имя пользователя","components.SignupForm.Biography.E_TOO_LONG":"Пожалуйста, сократите свою биографию до&nbsp;4000 символов","components.SignupForm.Birthdate.E_EMPTY":"Это обязательное поле. Пожалуйста, введите дату рождения","components.SignupForm.Birthdate.E_INVALID_FORMAT":"Неверный формат даты. Пожалуйста, убедитесь, что вводите дату в&nbsp;формате ГГГГ-ММ-ДД","components.SignupForm.Birthdate.E_TOO_EARLY":"Допускаются только даты из&nbsp;прошлого","components.SignupForm.Birthdate.E_TOO_OLD":"Мы&nbsp;допускаем, что человек может прожить более 150-ти лет. Если это ваш случай, пожалуйста, свяжитесь с&nbsp;нами по&nbsp;телефону или напишите нам на&nbsp;почту, мы&nbsp;рассмотрим вашу заявку в&nbsp;исключительном порядке.","components.SignupForm.Email.E_EMPTY":"Это обязательное поле. Пожалуйста, введите адрес","components.SignupForm.Email.E_INVALID_FORMAT":"Адрес не&nbsp;соответствует формату. Пожалуйста, проверьте правильность написания адреса","components.SignupForm.Email.E_TOO_LONG":"Мы&nbsp;не&nbsp;поддерживаем адреса длиннее 128-ми символов. Пожалуйста, используйте более короткий адрес","components.SignupForm.Email.approved":"Электронная почта в&nbsp;порядке!","components.SignupForm.Email.rejected":"Такой адреc уже занят кем-то. Пожалуйста, используйте другой","components.SignupForm.Firstname.E_EMPTY":"Это обязательное поле. Пожалуйста, введите имя","components.SignupForm.Firstname.E_FIRST_LETTER":"Имя должно начинаться с&nbsp;заглавной буквы","components.SignupForm.Firstname.E_INVALID_FORMAT":"Имя содержит недопустимые символы. Пожалуйста, придерживайтесь заданного формата","components.SignupForm.Firstname.E_TOO_LONG":"Имя не&nbsp;должно превышать 40-ка символов","components.SignupForm.Lastname.E_EMPTY":"Это обязательное поле. Пожалуйста, введите фамилию","components.SignupForm.Lastname.E_FIRST_LETTER":"Фамилия должна начинаться с&nbsp;заглавной буквы","components.SignupForm.Lastname.E_INVALID_FORMAT":"Фамилия не&nbsp;соответствует формату. Пожалуйста, используйте только буквы и&nbsp;дефис","components.SignupForm.Lastname.E_LAST_SYMBOL":"Фамилия должна заканчиваться строчной буквой","components.SignupForm.Lastname.E_TOO_LONG":"Фамилия не&nbsp;должна превышать 50-ти символов","components.SignupForm.Lastname.E_WRONG_ENDING":"Как минимум&nbsp;&mdash; две буквы после дефиса","components.SignupForm.Password.E_EMPTY":"Это обязательное поле. Пожалуйста, введите пароль","components.SignupForm.Password.E_INSUFFICIENT":"Пожалуйста, используйте хотя&nbsp;бы две группы символов: буквы, цифры или спецсимволы","components.SignupForm.Password.E_INVALID_FORMAT":"Пароль содержит недопустимые символы. Пожалуйста, придерживайтесь формата","components.SignupForm.Password.E_TOO_LONG":"Пароль не&nbsp;может превышать 128&nbsp;символов. Пожалуйста, используйте более короткий пароль","components.SignupForm.Password.E_TOO_SHORT":"Пароль должен содержать не&nbsp;менее 8-ми символов","components.SignupForm.PasswordConfirmation.E_EMPTY":"Это обязательное поле. Пожалуйста, подтвердите введённый ранее пароль","components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH":"Пароли не&nbsp;совпадают","components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID":"Пожалуйста, убедитесь, что оба пароля соответствуют формату","components.SignupForm.PasswordConfirmation.valid":"Пароли совпадают","components.SignupForm.PersonalInformationProcessing.E_IMPOSED":"Согласие на&nbsp;обработку персональных данных обязательно для регистрации на&nbsp;нашем сервисе","components.SignupForm.Phone.E_EMPTY":"Это обязательное поле. Пожалуйста, введите номер","components.SignupForm.Phone.E_FIRST_SYMBOL":"Первый символ должен быть плюсом (+)","components.SignupForm.Phone.E_INVALID_FORMAT":"Номер не&nbsp;соответствует формату. Пожалуйста, проверьте правильность ввода номера","components.SignupForm.Phone.E_TOO_LONG":"Номер слишком длинный. Пожалуйста, используйте более короткий номер","components.SignupForm.Phone.E_TOO_SHORT":"Номер должен быть длиннее 10&nbsp;символов. Пожалуйста, проверьте правильность ввода","components.SignupForm.Phone.approved":"Телефон подходит!","components.SignupForm.Phone.rejected":"Этот номер уже используется кем-то. Пожалуйста, используйте другой","components.SignupForm.Photo.E_NOT_SELECTED":"Пожалуйста, выберите фото для вашего профиля","components.SignupForm.Photo.E_TOO_BIG":"Размер файла не&nbsp;должен превышать 5&nbsp;МБ","components.SignupForm.Photo.E_WRONG_IMAGE_TYPE":"Мы&nbsp;поддерживаем только изображения формата JPEG","components.SignupForm.Photo.photoPickerButtonCaption":"Выберите фото","components.SignupForm.Username.E_EMPTY":"Это обязательное поле. Пожалуйста, придумайте имя","components.SignupForm.Username.E_FIRST_LETTER":"Имя должно начинаться со&nbsp;строчной буквы латинского алфавита","components.SignupForm.Username.E_INVALID_FORMAT":"Имя содержит недопустимые символы. Пожалуйста, придерживайтесь заданного формата","components.SignupForm.Username.E_LAST_SYMBOL":"Имя должно заканчиваться буквой или цифрой","components.SignupForm.Username.E_TOO_LONG":"Имя не&nbsp;должно превышать 30-ти символов","components.SignupForm.Username.E_TOO_SHORT":"Имя должно содержать не&nbsp;менее 5-ти символов","components.SignupForm.Username.approved":"Отлично, это имя подходит!","components.SignupForm.Username.rejected":"К&nbsp;сожалению, это имя уже занято. Пожалуйста, придумайте другое","components.SignupForm.alreadySignedUp":"Уже зарегистрированы?","components.SignupForm.biographyLabel":"Краткая биография","components.SignupForm.birthdateHint":"Пожалуйста, выберите дату из&nbsp;всплывающего календаря","components.SignupForm.birthdateLabel":"Дата рождения","components.SignupForm.emailHint":"Мы&nbsp;используем адрес электронной почты для восстановления пароля и&nbsp;критических уведомлений. Никаких лишних рассылок","components.SignupForm.emailLabel":"Адрес электронной почты","components.SignupForm.firstNameLabel":"Имя","components.SignupForm.lastNameLabel":"Фамилия","components.SignupForm.loginLinkCaption":"Войти","components.SignupForm.newslettersHint":"Включите, если хотите получать последние новости на&nbsp;почту","components.SignupForm.newslettersLabel":"Информационные рассылки","components.SignupForm.passwordConfirmationHint":"Повторите, пожалуйста, введённый ранее пароль","components.SignupForm.passwordConfirmationLabel":"Подтверждение пароля","components.SignupForm.passwordHint":"Только латинские буквы, цифры и&nbsp;спецсимволы (например, :, &rsquo;, >, <, =, +, ., &, %, $, #, @, ! , *, ), (, -, ~, [, ], /, \\\\, \\{, \\}, _, ^). Минимальная длина&nbsp;&mdash; 8&nbsp;знаков, при этом должны использоваться хотя&nbsp;бы две группы символов","components.SignupForm.passwordLabel":"Пароль","components.SignupForm.personalInformationProcessingHint":"В&nbsp;соответствии с&nbsp;Федеральным законом от&nbsp;27.07.2006&nbsp;г. &#8470;&nbsp;152&#x2011ФЗ &laquo;О&nbsp;персональных данных&raquo;","components.SignupForm.personalInformationProcessingLabel":"Я&nbsp;даю согласие на&nbsp;обработку моих персональных данных","components.SignupForm.phoneHint":"Номер телефона в&nbsp;формате &lt;код страны&gt; &lt;номер&gt;, например: +7&nbsp;926-840-55-49. Минимальная длина&nbsp;&mdash; 5&nbsp;символов","components.SignupForm.phoneLabel":"Номер телефона","components.SignupForm.photoHint":"Принимаются только изображения форматов JPEG размером не&nbsp;более 5&nbsp;МБ","components.SignupForm.photoLabel":"Фотография","components.SignupForm.signupErrorTitle":"Ошибка регистрации","components.SignupForm.signupFormHint":"Вам необходимо предоставить некоторую информацию о&nbsp;себе. Пожалуйста, заполните нижеследующую форму.","components.SignupForm.signupFormTitle":"Регистрация","components.SignupForm.signupSuccessMessage":"Вы&nbsp;зарегистрированы. Пожалуйста, авторизуйтесь для входа в&nbsp;свой профиль","components.SignupForm.signupSuccessTitle":"Регистрация прошла успешно!","components.SignupForm.submitButtonCaption":"Зарегистрироваться","components.SignupForm.submitButtonInProgressCaption":"Отправка","components.SignupForm.userIdHint":"Идентификатор пользователя для входа в&nbsp;систему. Может содержать только строчные латинские буквы, цифры и&nbsp;дефис. Должен начинаться с&nbsp;буквы и&nbsp;заканчиваться буквой или цифрой. Минимум&nbsp;&mdash; 5&nbsp;символов. Например, giant-166","components.SignupForm.userIdLabel":"Имя пользователя","components.SignupForm.btnDemoCaption":"Демо","serverConnectionError":"Не&nbsp;удалось связаться с&nbsp;сервером: &laquo;{errorMsg}&raquo;. Пожалуйста, повторите попытку позже. Если вам не&nbsp;удалось отправить форму, пожалуйста, свяжитесь с&nbsp;нами. Приносим извинения за&nbsp;доставленные неудобства","somethingWentWrong":"Что-то пошло не&nbsp;так. Возможно, неполадки сервера, либо проблемы с&nbsp;соединением. Пожалуйста, повторите попытку позже. Если вам не&nbsp;удалось отправить форму, пожалуйста, свяжитесь с&nbsp;нами. Приносим извинения за&nbsp;доставленные неудобства"};

/***/ }),

/***/ "./src/schemas/schema-user-profile.js":
/*!********************************************!*\
  !*** ./src/schemas/schema-user-profile.js ***!
  \********************************************/
/*! exports provided: loginFieldsSchema, keyFieldsSchema, detailFieldsSchema, allFieldsSchema, approvableFieldsSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFieldsSchema", function() { return loginFieldsSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyFieldsSchema", function() { return keyFieldsSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailFieldsSchema", function() { return detailFieldsSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allFieldsSchema", function() { return allFieldsSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvableFieldsSchema", function() { return approvableFieldsSchema; });
/* harmony import */ var _frontend_src_components_SignupForm_Username_Username_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frontend/src/components/SignupForm/Username/Username.validator */ "../frontend/src/components/SignupForm/Username/Username.validator.js");
/* harmony import */ var _frontend_src_components_SignupForm_Password_Password_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../frontend/src/components/SignupForm/Password/Password.validator */ "../frontend/src/components/SignupForm/Password/Password.validator.js");
/* harmony import */ var _frontend_src_components_SignupForm_Email_Email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../frontend/src/components/SignupForm/Email/Email.validator */ "../frontend/src/components/SignupForm/Email/Email.validator.js");
/* harmony import */ var _frontend_src_components_SignupForm_Phone_Phone_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../frontend/src/components/SignupForm/Phone/Phone.validator */ "../frontend/src/components/SignupForm/Phone/Phone.validator.js");
/* harmony import */ var _frontend_src_components_SignupForm_Birthdate_Birthdate_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../frontend/src/components/SignupForm/Birthdate/Birthdate.validator */ "../frontend/src/components/SignupForm/Birthdate/Birthdate.validator.js");
/* harmony import */ var _frontend_src_components_SignupForm_Biography_Biography_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../frontend/src/components/SignupForm/Biography/Biography.validator */ "../frontend/src/components/SignupForm/Biography/Biography.validator.js");
/* harmony import */ var _frontend_src_components_SignupForm_Firstname_Firstname_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../frontend/src/components/SignupForm/Firstname/Firstname.validator */ "../frontend/src/components/SignupForm/Firstname/Firstname.validator.js");
/* harmony import */ var _frontend_src_components_SignupForm_Lastname_Lastname_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../frontend/src/components/SignupForm/Lastname/Lastname.validator */ "../frontend/src/components/SignupForm/Lastname/Lastname.validator.js");








const keyFieldsSchema = [{
  name: "username",
  required: true,
  validator: _frontend_src_components_SignupForm_Username_Username_validator__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  name: "email",
  required: true,
  validator: _frontend_src_components_SignupForm_Email_Email_validator__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  name: "phone",
  required: true,
  validator: _frontend_src_components_SignupForm_Phone_Phone_validator__WEBPACK_IMPORTED_MODULE_3__["default"]
}];
const detailFieldsSchema = [{
  name: "password",
  required: true,
  validator: _frontend_src_components_SignupForm_Password_Password_validator__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  name: "newsletters",
  required: false,
  default: false
}, {
  name: "birthdate",
  required: true,
  validator: _frontend_src_components_SignupForm_Birthdate_Birthdate_validator__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: "biography",
  required: false,
  validator: _frontend_src_components_SignupForm_Biography_Biography_validator__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: "firstname",
  required: true,
  validator: _frontend_src_components_SignupForm_Firstname_Firstname_validator__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  name: "lastname",
  required: true,
  validator: _frontend_src_components_SignupForm_Lastname_Lastname_validator__WEBPACK_IMPORTED_MODULE_7__["default"]
}];
const loginFieldsSchema = [].concat(keyFieldsSchema[0], detailFieldsSchema[0]);
const allFieldsSchema = keyFieldsSchema.concat(detailFieldsSchema);
const approvableFields = ['username', 'email', 'phone'];
const approvableFieldsSchema = allFieldsSchema.filter(fieldSchema => approvableFields.some(name => fieldSchema.name === name));


/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const config = __webpack_require__(/*! ./config */ "./src/config.js");

const db = __webpack_require__(/*! ./utils/db */ "./src/utils/db.js")();

const jwt = __webpack_require__(/*! ./utils/jwt */ "./src/utils/jwt.js")();

const {
  init,
  errorHandler
} = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.js");

const {
  localeHandler
} = __webpack_require__(/*! ./utils/i18n */ "./src/utils/i18n.js");

const apiHandlers = __webpack_require__(/*! ./api */ "./src/api/index.js");

const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");

const express = __webpack_require__(/*! express */ "express");

const cors = __webpack_require__(/*! cors */ "cors")(); // Cross-Origin Resource Sharing


const path = __webpack_require__(/*! path */ "path");

const logger = __webpack_require__(/*! morgan */ "morgan");

init();
const app = express(); // Because we want to access the API from a react application that is probably served from another origin,
// the server needs to allow cross-origin requests. Therefore we are going to use a simple module called CORS.

app.use(cors); // To parse cookies

app.use(cookieParser()); // Handle locale

app.use(localeHandler); // Use JWT auth to secure the api

app.use(jwt); // Allow requests for static resources from this folder

app.use(express.static('public', {
  index: "index.html",
  etag: true,
  // just being explicit about the default
  lastModified: true,
  // just being explicit about the default
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      // all of the project's HTML files end in .html
      res.setHeader('Cache-Control', 'no-cache');
    } else if (~path.indexOf('/static/')) {
      // versioned URL
      res.setHeader('Cache-Control', 'max-age=31536000');
    }
  }
})); // (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(logger("dev")); // Global error handler

app.use(errorHandler); // Attach handlers for API requests with the prefix

app.use("/api", apiHandlers); // The following routes are handled by the frontend's single page application
// Just serve index.html in return

app.get(['/login', '/signup', '/dashboard'], (req, res) => res.sendFile(path.resolve('public/index.html'))); // Expose a port and start listening

app.listen(config.apiPort, () => console.log(`Listening on port ${config.apiPort}`));

/***/ }),

/***/ "./src/utils/db.js":
/*!*************************!*\
  !*** ./src/utils/db.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const config = __webpack_require__(/*! ../config */ "./src/config.js");

module.exports = dbConnection;

function connect() {
  return mongoose.connect(config.dbConnectionString, {
    useNewUrlParser: true,
    // use new MongoDB driver interface (see details here: https://mongoosejs.com/docs/connections.html)
    reconnectTries: Number.MAX_VALUE,
    // never stop trying to reconnect
    reconnectInterval: 1000 // reconnect every second

  });
}

function dbConnection() {
  const db = mongoose.connection;
  db.once("open", () => console.log("Connected to the database"));
  db.on("error", error => {
    console.log("MongoDB connection error: ", error);

    if (error.code === 'ECONNREFUSED') {
      setTimeout(() => {
        console.log("Reconnecting...");
        connect();
      }, 5000); // try reconnecting in 5 seconds
    }
  });
  connect();
}

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs */ "fs");

const {
  messages
} = __webpack_require__(/*! ./i18n */ "./src/utils/i18n.js");

module.exports = {
  init,
  respond,
  respondSuccess,
  respondFailure,
  extractData,
  errorHandler,
  isKeyDataUnique
};

function init() {
  mkdirIfNotExists('uploads');
  mkdirIfNotExists('public/photos');
}

function mkdirIfNotExists(relativePath) {
  const absPath = path.resolve(relativePath);

  if (!fs.existsSync(absPath)) {
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
} // Вытащить заданные схемой поля из тела запроса source


function extractData(schema, source) {
  let data = {};
  schema.forEach(field => data[field.name] = source[field.name]);
  return data;
}

function errorHandler(err, req, res, next) {
  const localizedMessages = messages[req.locale];

  if (typeof err === 'string') {
    // custom application error
    return respondFailure(res, err);
  }

  if (err.name === 'UnauthorizedError') {
    // jwt authentication error
    return respondFailure(res, localizedMessages.unauthorizedError.format(), 401);
  } // default to 500 server error


  return respondFailure(res, err.message, 500);
}

async function isKeyDataUnique(model, keyData) {
  let alternatives = [];

  for (let key in keyData) {
    alternatives.push({
      [key]: keyData[key]
    });
  }

  const data = await model.find({
    $or: alternatives
  }).select("_id").exec();
  return data.length ? false : true;
}

/***/ }),

/***/ "./src/utils/i18n.js":
/*!***************************!*\
  !*** ./src/utils/i18n.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const IntlMessageFormat = __webpack_require__(/*! intl-messageformat */ "intl-messageformat");

const translations = __webpack_require__(/*! ../langs.json */ "./src/langs.json");

const acceptLanguage = __webpack_require__(/*! accept-language */ "accept-language");

const AllHtmlEntities = __webpack_require__(/*! html-entities */ "html-entities").AllHtmlEntities;

const entities = new AllHtmlEntities();
module.exports = {
  messages: preloadMessages(),
  localeHandler,
  detectLocale,
  setLocaleCookie
};
acceptLanguage.languages(['en', 'ru']);

function preloadMessages() {
  let messages = {};

  for (let localeId in translations) {
    messages[localeId] = {};

    for (let key in translations[localeId]) {
      let value = translations[localeId][key];
      value = entities.decode(value);
      value = new IntlMessageFormat(value, localeId);
      messages[localeId][key] = value;
    }
  }

  return messages;
}

function localeHandler(req, res, next) {
  const localeId = detectLocale(req); // If the locale is not yet in cookies

  if (!req.cookies.locale) res.cookie('locale', localeId, {
    maxAge: new Date() * 0.001 + 365 * 24 * 3600
  });
  req.locale = localeId;
  next();
}

function detectLocale(req) {
  const cookieLocale = req.cookies.locale;
  return acceptLanguage.get(cookieLocale || req.headers['accept-language']) || 'en';
}

function setLocaleCookie(res, localeId) {
  res.cookie('locale', localeId, {
    maxAge: new Date() * 0.001 + 365 * 24 * 3600
  });
}

/***/ }),

/***/ "./src/utils/jwt.js":
/*!**************************!*\
  !*** ./src/utils/jwt.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const config = __webpack_require__(/*! ../config */ "./src/config.js");

const expressJwt = __webpack_require__(/*! express-jwt */ "express-jwt");

module.exports = jwt;

function jwt() {
  return expressJwt({
    secret: config.jwtSecret
  }).unless({
    path: [// public routes that don't require authentication
    '/api/auth', '/api/get-locale', '/api/check-uniqueness', '/api/put-user-profile', '/', /\/photos\/.+\.(?:jpg|png)$/, /\/i18n\/.+/, /\/assets\/.+$/, /\/static\/.+$/, /\/[^/]+\.[^/]+$/, /\/login\/?$/, /\/signup\/?$/, /\/dashboard\/?$/]
  });
}

/***/ }),

/***/ "./src/utils/validator.js":
/*!********************************!*\
  !*** ./src/utils/validator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  validateAll,
  validateOne // Функция проверки соответствия полей заданной схеме

};

function validate(algorithm, scheme, data) {
  return scheme[algorithm](item => {
    // Если поле передано
    if (data[item.name] !== undefined) {
      return typeof item.validator === "function" // если задан формат, проверяем
      ? item.validator(data[item.name]) : true;
    } // Если нет, но поле опциональное
    else if (!item.required) return true;
  });
} // Проверяет все поля по схеме


function validateAll(scheme, data) {
  return validate('every', scheme, data);
} // Проверяет только одно поле (если нужно проверить единственное поле на соответствие схеме)


function validateOne(scheme, item) {
  return validate('some', scheme, item);
}

/***/ }),

/***/ "accept-language":
/*!**********************************!*\
  !*** external "accept-language" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("accept-language");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "html-entities":
/*!********************************!*\
  !*** external "html-entities" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-entities");

/***/ }),

/***/ "intl-messageformat":
/*!*************************************!*\
  !*** external "intl-messageformat" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("intl-messageformat");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vQmlvZ3JhcGh5L0Jpb2dyYXBoeS52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vQmlydGhkYXRlL0JpcnRoZGF0ZS52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vRW1haWwvRW1haWwudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0ZpcnN0bmFtZS9GaXJzdG5hbWUudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0xhc3RuYW1lL0xhc3RuYW1lLnZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9QYXNzd29yZC9QYXNzd29yZC52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vUGhvbmUvUGhvbmUudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL1VzZXJuYW1lL1VzZXJuYW1lLnZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9jaGVjay11bmlxdWVuZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ2V0LWxvY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2dldC11c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3B1dC11c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy91c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9sYW5nIHN5bmMgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvand0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWNjZXB0LWxhbmd1YWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1qd3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0bWwtZW50aXRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnRsLW1lc3NhZ2Vmb3JtYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlIiwic3RhdHVzQ29kZXMiLCJsZW5ndGgiLCJFX1RPT19MT05HIiwiRV9FTVBUWSIsImRhdGVGb3JtYXQiLCJpc0NvcnJlY3QiLCJ0ZXN0IiwiRV9JTlZBTElEX0ZPUk1BVCIsInRzQmlydGhkYXRlIiwiRGF0ZSIsInBhcnNlIiwiaXNOYU4iLCJ0c1RvZGF5Iiwibm93IiwiRV9UT09fRUFSTFkiLCJFX1RPT19PTEQiLCJlbWFpbFJlZ2V4IiwiaXNWYWxpZCIsImZpcnN0TGV0dGVyUmVnZXgiLCJjaGFyQXQiLCJFX0ZJUlNUX0xFVFRFUiIsIm5hbWVSZWdleCIsImxhc3RMZXR0ZXJSZWdleCIsIkVfTEFTVF9TWU1CT0wiLCJlbmRpbmdSZWdleCIsIkVfV1JPTkdfRU5ESU5HIiwiZ3JwTGV0dGVycyIsImdycERpZ2l0cyIsImdycFN5bWJvbHMiLCJmb3JtYXQiLCJyZWdleHAiLCJSZWdFeHAiLCJoYXNMZXR0ZXJzIiwiaGFzRGlnaXRzIiwiaGFzU3ltYm9scyIsIkVfSU5TVUZGSUNJRU5UIiwiRV9UT09fU0hPUlQiLCJmaXJzdFN5bWJvbFJlZ2V4IiwiRV9GSVJTVF9TWU1CT0wiLCJwaG9uZUxleGlzUmVnZXgiLCJFX0lOVkFMSURfQ0hBUlMiLCJwaG9uZUdyYW1tYXJSZWdleCIsInVzZXJuYW1lUmVnZXgiLCJjb25maWciLCJyZXF1aXJlIiwiVXNlclByb2ZpbGUiLCJ2YWxpZGF0b3IiLCJsb2dpbkZpZWxkc1NjaGVtYSIsInJlc3BvbmQiLCJyZXNwb25kU3VjY2VzcyIsInJlc3BvbmRGYWlsdXJlIiwiZXh0cmFjdERhdGEiLCJqd3QiLCJleHByZXNzIiwicm91dGVyIiwiUm91dGVyIiwibWVzc2FnZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0IiwiYXV0aGVudGljYXRpb25IYW5kbGVyIiwicmVxIiwicmVzIiwibG9jYWxlSWQiLCJsb2NhbGUiLCJsb2NhbGl6ZWRNZXNzYWdlcyIsImxvZ2luRGF0YSIsInF1ZXJ5IiwibG9naW5EYXRhVmFsaWQiLCJ2YWxpZGF0ZUFsbCIsImF1dGhJbnZhbGlkRGF0YSIsImZpbmQiLCJlcnIiLCJkYXRhIiwiYXV0aFdyb25nQ3JlZGVudGlhbHMiLCJ1c2VyIiwidG9rZW4iLCJzaWduIiwic3ViIiwiX2lkIiwiand0U2VjcmV0IiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwiaXNLZXlEYXRhVW5pcXVlIiwiYXBwcm92YWJsZUZpZWxkc1NjaGVtYSIsImNoZWNrVW5pcXVlbmVzc0hhbmRsZXIiLCJuYW1lIiwiZmllbGREYXRhIiwiZmllbGREYXRhVmFsaWQiLCJ2YWxpZGF0ZU9uZSIsImludmFsaWRGb3JtYXQiLCJpc1VuaXF1ZSIsInNldExvY2FsZUNvb2tpZSIsImZzIiwicGF0aCIsIkFsbEh0bWxFbnRpdGllcyIsImVudGl0aWVzIiwiZ2V0TG9jYWxlSGFuZGxlciIsImxvY2FsZURhdGEiLCJmb3JFYWNoIiwia2V5IiwiZGVjb2RlIiwiY3VycmVudExvY2FsZUlkIiwid2FudGVkTG9jYWxlSWQiLCJpZCIsImxvY2FsZU5vdEZvdW5kIiwiZ2V0VXNlclByb2ZpbGVIYW5kbGVyIiwiZmluZEJ5SWQiLCJ1c2VyUHJvZmlsZSIsInRvT2JqZWN0IiwiZG9lc1Bob3RvRXhpc3QiLCJleGlzdHNTeW5jIiwicmVzb2x2ZSIsInBob3RvIiwia2V5RmllbGRzU2NoZW1hIiwiZGV0YWlsRmllbGRzU2NoZW1hIiwibXVsdGVyIiwidXBsb2FkSGFuZGxlciIsImRlc3QiLCJsaW1pdHMiLCJmaWxlU2l6ZSIsImZpbGVzIiwicGFydHMiLCJzaW5nbGUiLCJwb3N0IiwiZGF0YUhhbmRsZXIiLCJrZXlEYXRhIiwiYm9keSIsImtleURhdGFWYWxpZCIsImludmFsaWRLZXlGaWVsZHNEYXRhIiwidXNlckFscmVhZHlFeGlzdHMiLCJkZXRhaWxzRGF0YSIsImRldGFpbHNGaWVsZHNWYWxpZCIsImludmFsaWRGb3JtRGF0YSIsIk9iamVjdCIsImFzc2lnbiIsInBhc3N3b3JkIiwiYWxsRGV0YWlscyIsImRhdGFTdHJpbmciLCJrZXlzIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJmaWxlIiwib3JpZ2luYWxuYW1lIiwiTWF0aCIsImNlaWwiLCJzaXplIiwidG1wVXBsb2FkZWRGaWxlUGF0aCIsImRzdEZpbGVQYXRoIiwicmVuYW1lU3luYyIsImVycm9yIiwiZmFpbGVkVG9TYXZlUGhvdG8iLCJlcnJNc2ciLCJFcnJvciIsInNhdmUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImRiSG9zdCIsIkRCX0hPU1QiLCJkYlBvcnQiLCJEQl9QT1JUIiwiZGJVc2VyIiwiREJfVVNFUiIsImRiUGFzcyIsIkRCX1BBU1MiLCJkYk5hbWUiLCJEQl9OQU1FIiwiZGJDb25uZWN0aW9uU3RyaW5nIiwiYXBpUG9ydCIsIkFQSV9QT1JUIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJEYXRhU2NoZW1hIiwiTnVtYmVyIiwiU3RyaW5nIiwiZW1haWwiLCJwaG9uZSIsIm5ld3NsZXR0ZXJzIiwiQm9vbGVhbiIsImJpcnRoZGF0ZSIsImJpb2dyYXBoeSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwidGltZXN0YW1wcyIsIm1vZGVsIiwicmVxdWlyZWQiLCJ1c2VybmFtZVZhbGlkYXRvciIsImVtYWlsVmFsaWRhdG9yIiwicGhvbmVWYWxpZGF0b3IiLCJwYXNzd29yZFZhbGlkYXRvciIsImRlZmF1bHQiLCJiaXJ0aGRhdGVWYWxpZGF0b3IiLCJiaW9ncmFwaHlWYWxpZGF0b3IiLCJmaXJzdG5hbWVWYWxpZGF0b3IiLCJsYXN0bmFtZVZhbGlkYXRvciIsImNvbmNhdCIsImFsbEZpZWxkc1NjaGVtYSIsImFwcHJvdmFibGVGaWVsZHMiLCJmaWx0ZXIiLCJmaWVsZFNjaGVtYSIsInNvbWUiLCJkYiIsImluaXQiLCJlcnJvckhhbmRsZXIiLCJsb2NhbGVIYW5kbGVyIiwiYXBpSGFuZGxlcnMiLCJjb29raWVQYXJzZXIiLCJjb3JzIiwibG9nZ2VyIiwiYXBwIiwidXNlIiwic3RhdGljIiwiaW5kZXgiLCJldGFnIiwibGFzdE1vZGlmaWVkIiwic2V0SGVhZGVycyIsImVuZHNXaXRoIiwic2V0SGVhZGVyIiwiaW5kZXhPZiIsInNlbmRGaWxlIiwibGlzdGVuIiwiZGJDb25uZWN0aW9uIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInJlY29ubmVjdFRyaWVzIiwiTUFYX1ZBTFVFIiwicmVjb25uZWN0SW50ZXJ2YWwiLCJjb25uZWN0aW9uIiwib25jZSIsIm9uIiwiY29kZSIsInNldFRpbWVvdXQiLCJta2RpcklmTm90RXhpc3RzIiwicmVsYXRpdmVQYXRoIiwiYWJzUGF0aCIsIm1rZGlyU3luYyIsInN0YXR1cyIsImpzb24iLCJodHRwU3RhdHVzIiwiZGV0YWlscyIsInNjaGVtYSIsInNvdXJjZSIsImZpZWxkIiwibmV4dCIsInVuYXV0aG9yaXplZEVycm9yIiwibWVzc2FnZSIsImFsdGVybmF0aXZlcyIsInB1c2giLCIkb3IiLCJzZWxlY3QiLCJleGVjIiwiSW50bE1lc3NhZ2VGb3JtYXQiLCJ0cmFuc2xhdGlvbnMiLCJhY2NlcHRMYW5ndWFnZSIsInByZWxvYWRNZXNzYWdlcyIsImRldGVjdExvY2FsZSIsImxhbmd1YWdlcyIsImNvb2tpZXMiLCJjb29raWUiLCJtYXhBZ2UiLCJjb29raWVMb2NhbGUiLCJoZWFkZXJzIiwiZXhwcmVzc0p3dCIsInNlY3JldCIsInVubGVzcyIsImFsZ29yaXRobSIsInNjaGVtZSIsIml0ZW0iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QXNCLE9BQU8sSUFBUDtBQUMzQixHQVRNLENBQVA7QUFVQSxDLENBRUQ7OztBQUNBLFNBQVN2SCxXQUFULENBQXFCd00sTUFBckIsRUFBNkJwTSxJQUE3QixFQUFtQztBQUNsQyxTQUFPM0UsUUFBUSxDQUFDLE9BQUQsRUFBVStRLE1BQVYsRUFBa0JwTSxJQUFsQixDQUFmO0FBQ0EsQyxDQUVEOzs7QUFDQSxTQUFTaUIsV0FBVCxDQUFzQm1MLE1BQXRCLEVBQThCQyxJQUE5QixFQUFvQztBQUNuQyxTQUFPaFIsUUFBUSxDQUFDLE1BQUQsRUFBUytRLE1BQVQsRUFBaUJDLElBQWpCLENBQWY7QUFDQSxDOzs7Ozs7Ozs7OztBQzNCRCw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2RlcyA9IHt9KVxyXG57XHJcblx0Ly8gTm8gbW9yZSB0aGFuIDQwMDAgY2hhcmFjdGVyc1xyXG5cdGlmICggdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gNDAwMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgc3RhdHVzQ29kZXMgPSB7fSkge1xyXG5cclxuXHQvLyBFbXB0eSBzdHJpbmdcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9FTVBUWTtcclxuXHJcblx0Ly8gSW5jb3JyZWN0IGZvcm1hdFxyXG5cdGNvbnN0IGRhdGVGb3JtYXQgPSAvXlswLTldezR9LSg/OjBbMS05XXwxWzAxMl0pLSg/OjBbMS05XXxbMTJdWzAtOV18M1swMV0pJC87XHJcblx0Y29uc3QgaXNDb3JyZWN0ID0gZGF0ZUZvcm1hdC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICFpc0NvcnJlY3QgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblxyXG5cdC8vIFN0aWxsIGluY29ycmVjdFxyXG5cdGNvbnN0IHRzQmlydGhkYXRlID0gRGF0ZS5wYXJzZSh2YWx1ZSk7XHJcblx0aWYgKCBpc05hTih0c0JpcnRoZGF0ZSkgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblxyXG5cdGNvbnN0IHRzVG9kYXkgPSBEYXRlLm5vdygpO1xyXG5cdFxyXG5cclxuXHQvLyBGdXR1cmUgZGF0ZVxyXG5cdGlmICggdHNCaXJ0aGRhdGUgPiB0c1RvZGF5IClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19FQVJMWTtcclxuXHRcclxuXHQvLyBNYXhpbXVtIGFnZTogMTUwIHllYXJzXHJcblx0aWYgKCB0c1RvZGF5IC0gdHNCaXJ0aGRhdGUgPiAxNTAgKiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19PTEQ7XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHN0YXR1c0NvZGVzID0ge30pIHtcclxuXHJcblx0Ly8gRW1wdHkgc3RyaW5nXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRU1QVFk7XHJcblxyXG5cdC8vIE1heGltdW0gMTI4IGNoYXJhY3RlcnNcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDEyOCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHJcblx0Ly8gTW9zdCBzYW5lIGFkZHJlc3NlcyB3aWxsIGNvbXBseSB0byB0aGlzIGZvcm1hdFx0XHJcblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDYxNTUvaG93LXRvLXZhbGlkYXRlLWFuLWVtYWlsLWFkZHJlc3MtaW4tamF2YXNjcmlwdFxyXG5cdGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvO1xyXG5cdGxldCBpc1ZhbGlkID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgc3RhdHVzQ29kZXMgPSB7fSlcclxue1xyXG5cdC8vIEVtcHR5IHN0cmluZ1xyXG5cdGlmICggdmFsdWUubGVuZ3RoID09PSAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0VNUFRZO1xyXG5cclxuXHQvLyBNYXhpbXVtIDQwIGNoYXJhY3RlcnNcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDQwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cdFxyXG5cdC8vIEZpcnN0IGNoYXJhY3RlciBtdXN0IGJlIGEgY2FwaXRhbCBsZXR0ZXJcclxuXHRjb25zdCBmaXJzdExldHRlclJlZ2V4ID0gL15bQS1a0JAt0K/QgV0kLztcclxuXHRsZXQgaXNWYWxpZCA9IGZpcnN0TGV0dGVyUmVnZXgudGVzdCh2YWx1ZS5jaGFyQXQoMCkpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRklSU1RfTEVUVEVSO1xyXG5cdH1cdFx0XHJcblx0XHJcblx0Ly8gTmFtZSBzaG91bGQgY29tcGx5IHdpdGggdGhlIGZvcm1hdFxyXG5cdGNvbnN0IG5hbWVSZWdleCA9IC9eLlthLXrQsC3Rj9GRXSokLztcclxuXHRpc1ZhbGlkID0gbmFtZVJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblx0fVx0XHRcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgc3RhdHVzQ29kZXMgPSB7fSlcclxue1xyXG5cdC8vIEVtcHR5IHN0cmluZ1xyXG5cdGlmICggdmFsdWUubGVuZ3RoID09PSAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0VNUFRZO1xyXG5cclxuXHQvLyBNYXhpbXVtIDUwIGNoYXJhY3RlcnMgXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPiA1MCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHRcclxuXHQvLyBGaXJzdCBjaGFyYWN0ZXIgbXVzdCBiZSBhIGNhcGl0YWwgbGV0dGVyXHJcblx0Y29uc3QgZmlyc3RMZXR0ZXJSZWdleCA9IC9eW0EtWtCQLdCv0IFdJC87XHJcblx0bGV0IGlzVmFsaWQgPSBmaXJzdExldHRlclJlZ2V4LnRlc3QodmFsdWUuY2hhckF0KDApKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0ZJUlNUX0xFVFRFUjtcclxuXHR9XHJcblxyXG5cdC8vIExhc3QgY2hhcmFjdGVyIG11c3QgYmUgYSBsZXR0ZXJcclxuXHRjb25zdCBsYXN0TGV0dGVyUmVnZXggPSAvXlthLXrQsC3Rj9GRXSQvO1xyXG5cdGlzVmFsaWQgPSBsYXN0TGV0dGVyUmVnZXgudGVzdCh2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoLTEpKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0xBU1RfU1lNQk9MO1xyXG5cdH1cclxuXHJcblx0Ly8gTWluaW11bSB0d28gbGV0dGVycyBhZnRlciBhIGh5cGhlblxyXG5cdGNvbnN0IGVuZGluZ1JlZ2V4ID0gLy1bYS160LAt0Y/RkV0kLztcclxuXHRpc1ZhbGlkID0gZW5kaW5nUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfV1JPTkdfRU5ESU5HO1xyXG5cdH1cdFx0XHJcblx0XHJcblx0Ly8gU3VybmFtZSBzaG91bGQgY29tcGx5IHdpdGggdGhlIGZvcm1hdFxyXG5cdGNvbnN0IG5hbWVSZWdleCA9IC9eW0EtWtCQLdCv0IFdWy1hLXrQsC3Rj9GRXSokLztcclxuXHRpc1ZhbGlkID0gbmFtZVJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2Rlcykge1xyXG5cclxuXHQvLyBFbXB0eSBzdHJpbmdcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9FTVBUWTtcclxuXHJcblx0Ly8gTWF4aW11bSAxMjggY2hhcmFjdGVycyBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDEyOCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHRcclxuXHRjb25zdCBncnBMZXR0ZXJzID0gXCJbYS16QS1aXVwiO1xyXG5cdGNvbnN0IGdycERpZ2l0cyA9IFwiWzAtOV1cIjtcclxuXHRjb25zdCBncnBTeW1ib2xzID0gXCJcIjtcclxuXHRjb25zdCBmb3JtYXQgPSBgKD86JHtncnBMZXR0ZXJzfT8ke2dycERpZ2l0c30/JHtncnBTeW1ib2xzfT8pK2A7XHJcblx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoZm9ybWF0KTtcclxuXHRyZWdleHAgPSAvXig/OlthLXpBLVpdfFswLTldfFstXywuJz48PSsmJSQjQCEqICkoflxcXS9cXFxce31dKSskLztcclxuXHRsZXQgaXNWYWxpZCA9IHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cdH1cclxuXHJcblx0Ly8gUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IHR3byBjaGFyYWN0ZXIgZ3JvdXBzXHJcblx0Ly8gMSkgTGF0aW4gbGV0dGVyc1xyXG5cdC8vIDIpIERpZ2l0c1xyXG5cdC8vIDMpIFNwZWNpYWwgY2hhcmFjdGVyc1xyXG5cdHJlZ2V4cCA9IC9bYS16QS1aXS87XHJcblx0Y29uc3QgaGFzTGV0dGVycyA9IHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuXHJcblx0cmVnZXhwID0gL1swLTldLztcclxuXHRjb25zdCBoYXNEaWdpdHMgPSByZWdleHAudGVzdCh2YWx1ZSk7XHJcblxyXG5cdHJlZ2V4cCA9IC9bLV8sLic+PD0rJiUkI0AhKiApKH5cXF0vXFxcXHt9XS87XHJcblx0Y29uc3QgaGFzU3ltYm9scyA9IHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuXHJcblx0aWYgKCBoYXNMZXR0ZXJzICsgaGFzRGlnaXRzICsgaGFzU3ltYm9scyA8IDIgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5TVUZGSUNJRU5UO1xyXG5cclxuXHQvLyBNaW5pbXVtIDggY2hhcmFjdGVyc1xyXG5cdGlmICggdmFsdWUubGVuZ3RoIDwgOCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fU0hPUlQ7XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHN0YXR1c0NvZGVzID0ge30pIHtcclxuXHJcblx0Ly8gRW1wdHkgc3RyaW5nXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRU1QVFk7XHJcblxyXG5cdC8vIE1heGltdW0gMjAgY2hhcmFjdGVyc1xyXG5cdGlmICggdmFsdWUubGVuZ3RoID4gMjAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfVE9PX0xPTkc7XHJcblx0XHJcblx0Ly8gRmlyc3QgY2hhcmFjdGVyIG11c3QgYmUgYSBsZXR0ZXJcclxuXHRjb25zdCBmaXJzdFN5bWJvbFJlZ2V4ID0gL15cXCsvO1xyXG5cdGxldCBpc1ZhbGlkID0gZmlyc3RTeW1ib2xSZWdleC50ZXN0KHZhbHVlLmNoYXJBdCgwKSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9GSVJTVF9TWU1CT0w7XHJcblx0fVxyXG5cclxuXHQvLyBPbmx5IHZhbGlkIGNoYXJhY3RlcnNcclxuXHRjb25zdCBwaG9uZUxleGlzUmVnZXggPSAvXlstKyAwLTldKyQvO1xyXG5cdGlzVmFsaWQgPSBwaG9uZUxleGlzUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0NIQVJTO1xyXG5cdH1cclxuXHRcclxuXHQvLyBQaG9uZSBudW1iZXIgc2hvdWxkIGNvbXBseSB3aXRoIHRoZSBmb3JtYXRcclxuXHRjb25zdCBwaG9uZUdyYW1tYXJSZWdleCA9IC9eXFwrWzAtOV17MSwzfSg/Oig/OlstIF1bMC05XXsyLDR9KXszLDR9fFstIF0/WzAtOV17NSwxMH0pJC87XHJcblx0aXNWYWxpZCA9IHBob25lR3JhbW1hclJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblx0fVxyXG5cclxuXHQvLyBNaW5pbXVtIDEwIGNoYXJhY3RlcnNcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA8IDEwICkgXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fU0hPUlQ7XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHN0YXR1c0NvZGVzID0ge30pIHtcclxuXHJcblx0Ly8gRW1wdHkgc3RyaW5nXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRU1QVFk7XHJcblxyXG5cdC8vIE1heGltaXVtIDMwIGNoYXJhY3RlcnMgXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPiAzMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHRcclxuXHQvLyBGaXJzdCBjaGFyYWN0ZXIgc2hvdWxkIGJlIGEgbGV0dGVyXHJcblx0Y29uc3QgZmlyc3RMZXR0ZXJSZWdleCA9IC9eW2Etel0kLztcclxuXHRsZXQgaXNWYWxpZCA9IGZpcnN0TGV0dGVyUmVnZXgudGVzdCh2YWx1ZS5jaGFyQXQoMCkpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRklSU1RfTEVUVEVSO1xyXG5cdH1cdFx0XHJcblx0XHJcblx0Ly8gTmFtZSBzaG91bGQgY29tcGx5IHdpdGggdGhlIGZvcm1hdCBcclxuXHRjb25zdCB1c2VybmFtZVJlZ2V4ID0gL15bLWEtejAtOV0rJC87XHJcblx0aXNWYWxpZCA9IHVzZXJuYW1lUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0ZPUk1BVDtcclxuXHR9XHJcblxyXG5cdC8vIE1pbmltdW0gNSBjaGFyYWN0ZXJzXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPCA1ICkgXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fU0hPUlQ7XHJcblxyXG5cdC8vIExhc3QgY2hhcmFjdGVyIG11c3QgYmUgYSBsZXR0ZXIgb3IgYSBkaWdpdFxyXG5cdGNvbnN0IGxhc3RMZXR0ZXJSZWdleCA9IC9eW2EtejAtOV0kLztcclxuXHRpc1ZhbGlkID0gbGFzdExldHRlclJlZ2V4LnRlc3QodmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0xBU1RfU1lNQk9MO1xyXG5cdH1cdFx0XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XHJcbmNvbnN0IFVzZXJQcm9maWxlID0gcmVxdWlyZSgnLi4vbW9kZWxzL3VzZXItcHJvZmlsZScpO1xyXG5jb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy92YWxpZGF0b3InKTtcclxuY29uc3QgbG9naW5GaWVsZHNTY2hlbWEgPSByZXF1aXJlKCcuLi9zY2hlbWFzL3NjaGVtYS11c2VyLXByb2ZpbGUnKS5sb2dpbkZpZWxkc1NjaGVtYTtcclxuY29uc3QgeyByZXNwb25kLCByZXNwb25kU3VjY2VzcywgcmVzcG9uZEZhaWx1cmUsIGV4dHJhY3REYXRhIH0gPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xyXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCB7IG1lc3NhZ2VzIH0gPSByZXF1aXJlKCcuLi91dGlscy9pMThuJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlci5nZXQoJy9hdXRoJywgYXV0aGVudGljYXRpb25IYW5kbGVyKTtcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC30LDQv9GA0L7RgdCwINC90LAg0LDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjRjiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuZnVuY3Rpb24gYXV0aGVudGljYXRpb25IYW5kbGVyKHJlcSwgcmVzKSB7XHJcblx0Y29uc3QgbG9jYWxlSWQgPSByZXEubG9jYWxlO1xyXG5cdGNvbnN0IGxvY2FsaXplZE1lc3NhZ2VzID0gbWVzc2FnZXNbbG9jYWxlSWRdO1xyXG5cdGNvbnN0IGxvZ2luRGF0YSA9IGV4dHJhY3REYXRhKGxvZ2luRmllbGRzU2NoZW1hLCByZXEucXVlcnkpO1xyXG5cdGxldCBsb2dpbkRhdGFWYWxpZCA9IHZhbGlkYXRvci52YWxpZGF0ZUFsbChsb2dpbkZpZWxkc1NjaGVtYSwgbG9naW5EYXRhKTtcclxuXHRpZiAoICEgbG9naW5EYXRhVmFsaWQgKSByZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy5hdXRoSW52YWxpZERhdGEuZm9ybWF0KCksIDQwNik7XHJcblx0VXNlclByb2ZpbGUuZmluZChsb2dpbkRhdGEsIFwiX2lkXCIsIChlcnIsIGRhdGEpID0+IHtcclxuXHRcdGlmICggZXJyIClcclxuXHRcdFx0cmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgZXJyKVxyXG5cdFx0ZWxzZSBpZiAoIGRhdGEubGVuZ3RoICE9PSAxIClcclxuXHRcdFx0cmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMuYXV0aFdyb25nQ3JlZGVudGlhbHMuZm9ybWF0KCksIDQwNCk7XHJcblxyXG5cdFx0Y29uc3QgdXNlciA9IGRhdGFbMF07XHJcblx0XHRjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgc3ViOiB1c2VyLl9pZCB9LCBjb25maWcuand0U2VjcmV0KTtcclxuXHRcdGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgYXV0aG9yaXplZCAke2xvZ2luRGF0YS51c2VybmFtZX1gKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uZFN1Y2Nlc3MocmVzLCB0b2tlbik7XHJcblx0fSk7XHJcbn0iLCJjb25zdCBVc2VyUHJvZmlsZSA9IHJlcXVpcmUoJy4uL21vZGVscy91c2VyLXByb2ZpbGUnKTtcclxuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZSgnLi4vdXRpbHMvdmFsaWRhdG9yJyk7XHJcbmNvbnN0IHsgcmVzcG9uZCwgcmVzcG9uZEZhaWx1cmUsIGlzS2V5RGF0YVVuaXF1ZSB9ID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xyXG5jb25zdCB7IG1lc3NhZ2VzIH0gPSByZXF1aXJlKCcuLi91dGlscy9pMThuJyk7XHJcbi8vIGNvbnN0IHsgYXBwcm92YWJsZUZpZWxkc1NjaGVtYSB9ID0gcmVxdWlyZShcImVzbVwiKShtb2R1bGUpKCcuLi9zY2hlbWFzL3NjaGVtYS11c2VyLXByb2ZpbGUnKTtcclxuLy8gaW1wb3J0IHsgYXBwcm92YWJsZUZpZWxkc1NjaGVtYSB9IGZyb20gJy4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZSc7XHJcbmNvbnN0IGFwcHJvdmFibGVGaWVsZHNTY2hlbWEgPSByZXF1aXJlKCcuLi9zY2hlbWFzL3NjaGVtYS11c2VyLXByb2ZpbGUnKS5hcHByb3ZhYmxlRmllbGRzU2NoZW1hO1xyXG5sZXQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlci5nZXQoJy9jaGVjay11bmlxdWVuZXNzJywgY2hlY2tVbmlxdWVuZXNzSGFuZGxlcik7XHJcblxyXG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQt9Cw0L/RgNC+0YHQsCDQvdCwINC/0YDQvtCy0LXRgNC60YMg0YPQvdC40LrQsNC70YzQvdC+0YHRgtC4XHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrVW5pcXVlbmVzc0hhbmRsZXIocmVxLCByZXMpIHtcclxuXHRjb25zdCBsb2NhbGVJZCA9IHJlcS5sb2NhbGU7XHJcblx0Y29uc3QgbG9jYWxpemVkTWVzc2FnZXMgPSBtZXNzYWdlc1tsb2NhbGVJZF07XHJcblx0Y29uc3QgbmFtZSA9IHJlcS5xdWVyeS5uYW1lO1xyXG5cdGNvbnN0IHZhbHVlID0gcmVxLnF1ZXJ5LnZhbHVlO1xyXG5cdGNvbnN0IGZpZWxkRGF0YSA9IHsgW25hbWVdOiB2YWx1ZSB9O1xyXG5cdGxldCBmaWVsZERhdGFWYWxpZCA9IHZhbGlkYXRvci52YWxpZGF0ZU9uZShhcHByb3ZhYmxlRmllbGRzU2NoZW1hLCBmaWVsZERhdGEpO1xyXG5cdGlmICggISBmaWVsZERhdGFWYWxpZCApIHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmludmFsaWRGb3JtYXQuZm9ybWF0KCksIDQwMCk7XHJcblx0XHJcblx0Y29uc3QgaXNVbmlxdWUgPSBhd2FpdCBpc0tleURhdGFVbmlxdWUoVXNlclByb2ZpbGUsIGZpZWxkRGF0YSk7XHJcblxyXG5cdHJldHVybiBpc1VuaXF1ZVxyXG5cdFx0PyByZXNwb25kKHJlcywgXCJBUFBST1ZFRFwiKVxyXG5cdFx0OiByZXNwb25kKHJlcywgXCJSRUpFQ1RFRFwiKVxyXG59OyIsImNvbnN0IHsgcmVzcG9uZFN1Y2Nlc3MsIHJlc3BvbmRGYWlsdXJlIH0gPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XHJcbmNvbnN0IHsgc2V0TG9jYWxlQ29va2llLCBtZXNzYWdlcyB9ID0gcmVxdWlyZSgnLi4vdXRpbHMvaTE4bicpO1xyXG5sZXQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgQWxsSHRtbEVudGl0aWVzID0gcmVxdWlyZSgnaHRtbC1lbnRpdGllcycpLkFsbEh0bWxFbnRpdGllcztcclxuY29uc3QgZW50aXRpZXMgPSBuZXcgQWxsSHRtbEVudGl0aWVzKCk7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIuZ2V0KCcvZ2V0LWxvY2FsZScsIGdldExvY2FsZUhhbmRsZXIpO1xyXG5cclxuXHJcbmxldCBsb2NhbGVEYXRhID0gW107XHJcblxyXG5bJ3J1J10uZm9yRWFjaCgobG9jYWxlKSA9PiB7XHJcblx0bGV0IG1lc3NhZ2VzID0gcmVxdWlyZShgLi4vcHVibGljL2xhbmcvJHtsb2NhbGV9Lmpzb25gKTtcclxuXHRmb3IgKCBsZXQga2V5IGluIG1lc3NhZ2VzICkge1xyXG5cdFx0bWVzc2FnZXNba2V5XSA9IGVudGl0aWVzLmRlY29kZShtZXNzYWdlc1trZXldKTtcclxuXHR9XHJcblx0bG9jYWxlRGF0YVtsb2NhbGVdID0ge1xyXG5cdFx0bG9jYWxlLFxyXG5cdFx0bWVzc2FnZXNcclxuXHRcdC8vIGZvcm1hdHM6IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCBgLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbG9jYWxlLWRhdGEvJHtsb2NhbGVJZH0uanNgKSkudG9TdHJpbmcoKVxyXG5cdH1cclxufSk7XHJcblxyXG4vLyBMb2NhbGUgcmVxdWVzdCBoYW5kbGVyXHJcbmZ1bmN0aW9uIGdldExvY2FsZUhhbmRsZXIocmVxLCByZXMpIHtcclxuXHRjb25zdCBjdXJyZW50TG9jYWxlSWQgPSByZXEubG9jYWxlO1xyXG5cdGNvbnN0IHdhbnRlZExvY2FsZUlkID0gcmVxLnF1ZXJ5LmlkO1xyXG5cdGNvbnN0IGxvY2FsaXplZE1lc3NhZ2VzID0gbWVzc2FnZXNbY3VycmVudExvY2FsZUlkXTtcclxuXHJcblx0aWYgKCAhIGxvY2FsZURhdGFbd2FudGVkTG9jYWxlSWRdIClcclxuXHRcdHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMubG9jYWxlTm90Rm91bmQuZm9ybWF0KCksIDQwNCk7XHJcblx0ZWxzZSB7XHJcblx0XHRzZXRMb2NhbGVDb29raWUocmVzLCB3YW50ZWRMb2NhbGVJZCk7XHJcblx0XHRyZXNwb25kU3VjY2VzcyhyZXMsIGxvY2FsZURhdGFbd2FudGVkTG9jYWxlSWRdKTtcclxuXHR9XHJcbn0iLCJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IFVzZXJQcm9maWxlID0gcmVxdWlyZShcIi4uL21vZGVscy91c2VyLXByb2ZpbGVcIik7XHJcbmNvbnN0IHZhbGlkYXRvciA9IHJlcXVpcmUoXCIuLi91dGlscy92YWxpZGF0b3JcIik7XHJcbmNvbnN0IHsgcmVzcG9uZFN1Y2Nlc3MsIHJlc3BvbmRGYWlsdXJlLCBleHRyYWN0RGF0YSB9ID0gcmVxdWlyZShcIi4uL3V0aWxzL2hlbHBlcnNcIik7XHJcbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2kxOG4nKTtcclxuXHJcbmxldCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyLmdldCgnL2dldC11c2VyLXByb2ZpbGUnLCBnZXRVc2VyUHJvZmlsZUhhbmRsZXIpO1xyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0LfQsNC/0YDQvtGB0LAg0L3QsCDQv9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFINC/0YDQvtGE0LjQu9GPXHJcbmZ1bmN0aW9uIGdldFVzZXJQcm9maWxlSGFuZGxlcihyZXEsIHJlcykge1xyXG5cdFVzZXJQcm9maWxlLmZpbmRCeUlkKHJlcS51c2VyLnN1YiwgXCJ1c2VybmFtZSBlbWFpbCBiaXJ0aGRhdGUgcGhvbmUgbmV3c2xldHRlcnMgYmlvZ3JhcGh5IGZpcnN0bmFtZSBsYXN0bmFtZVwiLCAoZXJyLCBkYXRhKSA9PiB7XHJcblx0XHRpZiAoIGVyciApXHJcblx0XHRcdHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGVycik7XHJcblx0XHRlbHNlIGlmICggISBkYXRhICkge1xyXG5cdFx0XHRjb25zdCBsb2NhbGl6ZWRNZXNzYWdlcyA9IG1lc3NhZ2VzW3JlcS5sb2NhbGVdO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy5hdXRoV3JvbmdDcmVkZW50aWFscy5mb3JtYXQoKSwgNDA0KTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRsZXQgeyBfaWQsIHVzZXJuYW1lLCAuLi51c2VyUHJvZmlsZSB9ID0gZGF0YS50b09iamVjdCgpO1xyXG5cdFx0XHRjb25zdCBkb2VzUGhvdG9FeGlzdCA9IGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKCdwdWJsaWMvcGhvdG9zJywgYCR7ZGF0YS51c2VybmFtZX0uanBnYCkpO1xyXG5cdFx0XHR1c2VyUHJvZmlsZS5waG90byA9IGRvZXNQaG90b0V4aXN0XHJcblx0XHRcdFx0PyBgL3Bob3Rvcy8ke2RhdGEudXNlcm5hbWV9LmpwZ2BcclxuXHRcdFx0XHQ6ICcvYXNzZXRzL2ltZy9uby1waG90by5zdmcnO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3BvbmRTdWNjZXNzKHJlcywgdXNlclByb2ZpbGUpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gW1xyXG5cdHJlcXVpcmUoJy4vYXV0aCcpLFxyXG5cdHJlcXVpcmUoJy4vZ2V0LWxvY2FsZScpLFxyXG5cdHJlcXVpcmUoJy4vY2hlY2stdW5pcXVlbmVzcycpLFxyXG5cdHJlcXVpcmUoJy4vZ2V0LXVzZXItcHJvZmlsZScpLFxyXG5cdHJlcXVpcmUoJy4vcHV0LXVzZXItcHJvZmlsZScpLFxyXG5dIiwiY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3QgVXNlclByb2ZpbGUgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3VzZXItcHJvZmlsZVwiKTtcclxuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZhbGlkYXRvclwiKTtcclxuY29uc3QgeyByZXNwb25kU3VjY2VzcywgcmVzcG9uZEZhaWx1cmUsIGV4dHJhY3REYXRhLCBpc0tleURhdGFVbmlxdWUgfSA9IHJlcXVpcmUoXCIuLi91dGlscy9oZWxwZXJzXCIpO1xyXG5jb25zdCB7IG1lc3NhZ2VzIH0gPSByZXF1aXJlKCcuLi91dGlscy9pMThuJyk7XHJcbmNvbnN0IHsga2V5RmllbGRzU2NoZW1hLCBkZXRhaWxGaWVsZHNTY2hlbWEgfSA9IHJlcXVpcmUoXCIuLi9zY2hlbWFzL3NjaGVtYS11c2VyLXByb2ZpbGVcIik7XHJcblxyXG5jb25zdCBtdWx0ZXIgPSByZXF1aXJlKCdtdWx0ZXInKTsgLy8g0L/QsNGA0YHQuNGCIG11bHRpcGFydC1mb3JtLWRhdGFcclxubGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0LfQsNCz0YDRg9C30LrQuCDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbmxldCB1cGxvYWRIYW5kbGVyID0gbXVsdGVyKHtcclxuXHRkZXN0OiBwYXRoLnJlc29sdmUoJ3VwbG9hZHMnKSxcclxuXHRsaW1pdHM6IHtcclxuXHRcdGZpbGVTaXplOiA1ICogMTAyNCAqIDEwMjQsXHJcblx0XHRmaWxlczogMSxcclxuXHRcdHBhcnRzOiAyMFxyXG5cdH0sXHJcblx0Ly8gZmlsZUZpbHRlcjogKHJlcSwgZmlsZSwgY2IpID0+IHtcclxuXHQvLyBcdGNvbnNvbGUubG9nKGZpbGUpO1xyXG5cdC8vIFx0Y2IobnVsbCwgdHJ1ZSk7XHJcblx0Ly8gfVxyXG59KS5zaW5nbGUoJ3Bob3RvJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlci5wb3N0KCcvcHV0LXVzZXItcHJvZmlsZScsIHVwbG9hZEhhbmRsZXIsIGRhdGFIYW5kbGVyKTtcclxuXHJcbi8vICDQntCx0YDQsNCx0L7RgtGH0LjQuiDQt9Cw0L/RgNC+0YHQsCDQvdCwINC00L7QsdCw0LLQu9C10L3QuNC1INC30LDQv9C40YHQuFxyXG5hc3luYyBmdW5jdGlvbiBkYXRhSGFuZGxlcihyZXEsIHJlcykge1xyXG5cdGNvbnN0IGxvY2FsaXplZE1lc3NhZ2VzID0gbWVzc2FnZXNbcmVxLmxvY2FsZV07XHJcblxyXG5cdC8vINCS0YvRgtCw0YHQutC40LLQsNC10Lwg0YHQvdCw0YfQsNC70LAg0LrQu9GO0Ycg0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0YPQvdC40LrQsNC70YzQvdC+0YHRgtC4INC30LDQv9C40YHQuFxyXG5cdGNvbnN0IGtleURhdGEgPSBleHRyYWN0RGF0YShrZXlGaWVsZHNTY2hlbWEsIHJlcS5ib2R5KTtcclxuXHRsZXQga2V5RGF0YVZhbGlkID0gdmFsaWRhdG9yLnZhbGlkYXRlQWxsKGtleUZpZWxkc1NjaGVtYSwga2V5RGF0YSk7XHJcblx0aWYgKCAhIGtleURhdGFWYWxpZCApIHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmludmFsaWRLZXlGaWVsZHNEYXRhLmZvcm1hdCgpLCA0MDYpO1xyXG5cclxuXHQvLyBDaGVjayBpZiB0aGUga2V5IGRhdGEgaXMgdW5pcXVlXHJcblx0Y29uc3QgaXNVbmlxdWUgPSBhd2FpdCBpc0tleURhdGFVbmlxdWUoVXNlclByb2ZpbGUsIGtleURhdGEpO1xyXG5cclxuXHRpZiAoICEgaXNVbmlxdWUgKVxyXG5cdFx0cmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMudXNlckFscmVhZHlFeGlzdHMuZm9ybWF0KCksIDQwOSk7XHJcblxyXG5cdGNvbnN0IGRldGFpbHNEYXRhID0gZXh0cmFjdERhdGEoZGV0YWlsRmllbGRzU2NoZW1hLCByZXEuYm9keSk7XHJcblx0Y29uc3QgZGV0YWlsc0ZpZWxkc1ZhbGlkID0gdmFsaWRhdG9yLnZhbGlkYXRlQWxsKGRldGFpbEZpZWxkc1NjaGVtYSwgZGV0YWlsc0RhdGEpO1xyXG5cdGlmICggIWRldGFpbHNGaWVsZHNWYWxpZCApIHtcclxuXHRcdHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmludmFsaWRGb3JtRGF0YS5mb3JtYXQoKSwgNDA2KTtcclxuXHR9XHJcblxyXG5cdGxldCB1c2VyID0gbmV3IFVzZXJQcm9maWxlKCk7XHJcblx0dXNlciA9IE9iamVjdC5hc3NpZ24odXNlciwga2V5RGF0YSwgZGV0YWlsc0RhdGEpO1xyXG5cclxuXHRjb25zdCB7IHBhc3N3b3JkLCAuLi5hbGxEZXRhaWxzIH0gPSBPYmplY3QuYXNzaWduKHt9LCBrZXlEYXRhLCBkZXRhaWxzRGF0YSk7XHJcblx0Y29uc3QgZGF0YVN0cmluZyA9IE9iamVjdC5rZXlzKGFsbERldGFpbHMpLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xyXG5cdFx0cmV0dXJuIGAke3ByZXZ9XFxuJHtjdXJyZW50fTogXCIke2FsbERldGFpbHNbY3VycmVudF19XCJgO1xyXG5cdH0sICcnKTtcclxuXHRjb25zb2xlLmxvZyhgVXNlciBkYXRhIHN1bWJpdHRlZDogJHtkYXRhU3RyaW5nfWApO1xyXG5cdFxyXG5cdC8vIElmIGEgcGhvdG8gaXMgYXR0YWNoZWQsIG1vdmUgaXQgdG8gdGhlIHN0b3JhZ2VcclxuXHRpZiAoIHJlcS5maWxlICkge1xyXG5cdFx0Y29uc29sZS5sb2coYFBob3RvIGF0dGFjaGVkOiAke3JlcS5maWxlLm9yaWdpbmFsbmFtZX0gWyR7TWF0aC5jZWlsKHJlcS5maWxlLnNpemUgLyAxMDI0KX0gS0JdYCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCB0bXBVcGxvYWRlZEZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKHJlcS5maWxlLnBhdGgpO1xyXG5cdFx0XHRjb25zdCBkc3RGaWxlUGF0aCA9IHBhdGgucmVzb2x2ZSgncHVibGljL3Bob3RvcycsIGAke3VzZXIudXNlcm5hbWV9LmpwZ2ApO1xyXG5cdFx0XHRmcy5yZW5hbWVTeW5jKHRtcFVwbG9hZGVkRmlsZVBhdGgsIGRzdEZpbGVQYXRoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRyZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmZhaWxlZFRvU2F2ZVBob3RvLmZvcm1hdCh7ZXJyTXNnOiBlcnJvcn0pLCA1MDApO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc29sZS5sb2coXCJTYXZpbmcgdXNlciBwcm9maWxlIGRhdGFcIik7XHJcblx0dXNlci5zYXZlKGVyciA9PiB7XHJcblx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdD8gcmVzcG9uZEZhaWx1cmUocmVzLCBlcnIsIDUwMClcclxuXHRcdFx0OiByZXNwb25kU3VjY2VzcyhyZXMpO1xyXG5cdH0pO1xyXG59IiwiY29uc3Qgand0U2VjcmV0ID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCBcIkp1c3QgYSByYW5kb20gdW5pcXVlIHN0cmluZyB0byBiZSB1c2VkIHdpdGggSldUXCI7XHJcbmNvbnN0IGRiSG9zdCA9IHByb2Nlc3MuZW52LkRCX0hPU1QgfHwgXCJsb2NhbGhvc3RcIjtcclxuY29uc3QgZGJQb3J0ID0gcHJvY2Vzcy5lbnYuREJfUE9SVCB8fCAyNzAxNztcclxuY29uc3QgZGJVc2VyID0gcHJvY2Vzcy5lbnYuREJfVVNFUiB8fCBcInVzZXItc2VydmljZVwiO1xyXG5jb25zdCBkYlBhc3MgPSBwcm9jZXNzLmVudi5EQl9QQVNTIHx8IFwiZXhhbXBsZVwiO1xyXG5jb25zdCBkYk5hbWUgPSBwcm9jZXNzLmVudi5EQl9OQU1FIHx8IFwiYXBwXCI7XHJcbmNvbnN0IGRiQ29ubmVjdGlvblN0cmluZyA9IGBtb25nb2RiOi8vJHtkYlVzZXJ9OiR7ZGJQYXNzfUAke2RiSG9zdH06JHtkYlBvcnR9LyR7ZGJOYW1lfWA7XHJcbmNvbnN0IGFwaVBvcnQgPSBwcm9jZXNzLmVudi5BUElfUE9SVCB8fCA4MDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGp3dFNlY3JldCwgXHJcblx0ZGJDb25uZWN0aW9uU3RyaW5nLFxyXG5cdGFwaVBvcnRcclxufSIsIi8vIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG4vLyByZXF1aXJlKCdAYmFiZWwvcmVnaXN0ZXInKSh7XHJcbi8vIFx0cm9vdE1vZGU6IFwidXB3YXJkXCIsXHJcbi8vIFx0Ly8gaW5jbHVkZTogW1xyXG4vLyAgLy8gICAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi5cIiksXHJcbi8vICAvLyAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vZnJvbnRlbmQvKlwiKSxcclxuLy8gIC8vICAgIF0sXHJcbi8vIH0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NlcnZlci5qcycpOyIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcblxyXG4vLyBVc2VyIHByb2ZpbGUgc2NoZW1hXHJcbmNvbnN0IERhdGFTY2hlbWEgPSBuZXcgU2NoZW1hKFxyXG4gIHtcclxuICAgIGlkOiBOdW1iZXIsXHJcbiAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IFN0cmluZyxcclxuICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICBwaG9uZTogU3RyaW5nLFxyXG4gICAgbmV3c2xldHRlcnM6IEJvb2xlYW4sXHJcbiAgICBiaXJ0aGRhdGU6IERhdGUsXHJcbiAgICBiaW9ncmFwaHk6IFN0cmluZyxcclxuICAgIGZpcnN0bmFtZTogU3RyaW5nLFxyXG4gICAgbGFzdG5hbWU6IFN0cmluZyxcclxuICAgIHBob3RvOiBTdHJpbmdcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKFwiVXNlclByb2ZpbGVcIiwgRGF0YVNjaGVtYSk7IiwidmFyIG1hcCA9IHtcblx0XCIuL2VuLmpzb25cIjogXCIuL3NyYy9wdWJsaWMvbGFuZy9lbi5qc29uXCIsXG5cdFwiLi9ydS5qc29uXCI6IFwiLi9zcmMvcHVibGljL2xhbmcvcnUuanNvblwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9wdWJsaWMvbGFuZyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qc29uJFwiOyIsImltcG9ydCB1c2VybmFtZVZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9Vc2VybmFtZS9Vc2VybmFtZS52YWxpZGF0b3JcIjtcclxuaW1wb3J0IHBhc3N3b3JkVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL1Bhc3N3b3JkL1Bhc3N3b3JkLnZhbGlkYXRvclwiO1xyXG5pbXBvcnQgZW1haWxWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vRW1haWwvRW1haWwudmFsaWRhdG9yXCI7XHJcbmltcG9ydCBwaG9uZVZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9QaG9uZS9QaG9uZS52YWxpZGF0b3JcIjtcclxuaW1wb3J0IGJpcnRoZGF0ZVZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9CaXJ0aGRhdGUvQmlydGhkYXRlLnZhbGlkYXRvclwiO1xyXG5pbXBvcnQgYmlvZ3JhcGh5VmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0Jpb2dyYXBoeS9CaW9ncmFwaHkudmFsaWRhdG9yXCI7XHJcbmltcG9ydCBmaXJzdG5hbWVWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vRmlyc3RuYW1lL0ZpcnN0bmFtZS52YWxpZGF0b3JcIjtcclxuaW1wb3J0IGxhc3RuYW1lVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0xhc3RuYW1lL0xhc3RuYW1lLnZhbGlkYXRvclwiO1xyXG5cclxuY29uc3Qga2V5RmllbGRzU2NoZW1hID0gW1xyXG5cdHtcclxuXHRcdG5hbWU6IFwidXNlcm5hbWVcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiB1c2VybmFtZVZhbGlkYXRvclxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJlbWFpbFwiLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHR2YWxpZGF0b3I6IGVtYWlsVmFsaWRhdG9yXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcInBob25lXCIsXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdHZhbGlkYXRvcjogcGhvbmVWYWxpZGF0b3JcclxuXHR9XHJcbl07XHJcblxyXG5jb25zdCBkZXRhaWxGaWVsZHNTY2hlbWEgPSBbXHJcblx0e1xyXG5cdFx0bmFtZTogXCJwYXNzd29yZFwiLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHR2YWxpZGF0b3I6IHBhc3N3b3JkVmFsaWRhdG9yXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcIm5ld3NsZXR0ZXJzXCIsXHJcblx0XHRyZXF1aXJlZDogZmFsc2UsXHJcblx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJiaXJ0aGRhdGVcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiBiaXJ0aGRhdGVWYWxpZGF0b3JcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiYmlvZ3JhcGh5XCIsXHJcblx0XHRyZXF1aXJlZDogZmFsc2UsXHJcblx0XHR2YWxpZGF0b3I6IGJpb2dyYXBoeVZhbGlkYXRvclxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJmaXJzdG5hbWVcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiBmaXJzdG5hbWVWYWxpZGF0b3JcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwibGFzdG5hbWVcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiBsYXN0bmFtZVZhbGlkYXRvclxyXG5cdH1cclxuXTtcclxuXHJcbmNvbnN0IGxvZ2luRmllbGRzU2NoZW1hID0gW10uY29uY2F0KGtleUZpZWxkc1NjaGVtYVswXSwgZGV0YWlsRmllbGRzU2NoZW1hWzBdKTtcclxuXHJcbmNvbnN0IGFsbEZpZWxkc1NjaGVtYSA9IGtleUZpZWxkc1NjaGVtYS5jb25jYXQoZGV0YWlsRmllbGRzU2NoZW1hKTtcclxuXHJcbmNvbnN0IGFwcHJvdmFibGVGaWVsZHMgPSBbXHJcblx0J3VzZXJuYW1lJyxcclxuXHQnZW1haWwnLFxyXG5cdCdwaG9uZSdcclxuXTtcclxuY29uc3QgYXBwcm92YWJsZUZpZWxkc1NjaGVtYSA9IGFsbEZpZWxkc1NjaGVtYS5maWx0ZXIoIGZpZWxkU2NoZW1hID0+IGFwcHJvdmFibGVGaWVsZHMuc29tZSggbmFtZSA9PiBmaWVsZFNjaGVtYS5uYW1lID09PSBuYW1lICkgKTtcclxuXHJcblxyXG5leHBvcnQge1xyXG5cdGxvZ2luRmllbGRzU2NoZW1hLFxyXG5cdGtleUZpZWxkc1NjaGVtYSxcclxuXHRkZXRhaWxGaWVsZHNTY2hlbWEsXHJcblx0YWxsRmllbGRzU2NoZW1hLFxyXG5cdGFwcHJvdmFibGVGaWVsZHNTY2hlbWFcclxufTsiLCJjb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xyXG5jb25zdCBkYiA9IHJlcXVpcmUoJy4vdXRpbHMvZGInKSgpO1xyXG5jb25zdCBqd3QgPSByZXF1aXJlKCcuL3V0aWxzL2p3dCcpKCk7XHJcbmNvbnN0IHsgaW5pdCwgZXJyb3JIYW5kbGVyIH0gPSByZXF1aXJlKCcuL3V0aWxzL2hlbHBlcnMnKTtcclxuY29uc3QgeyBsb2NhbGVIYW5kbGVyIH0gPSByZXF1aXJlKCcuL3V0aWxzL2kxOG4nKTtcclxuY29uc3QgYXBpSGFuZGxlcnMgPSByZXF1aXJlKCcuL2FwaScpO1xyXG5jb25zdCBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJyk7XHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpKCk7IC8vIENyb3NzLU9yaWdpbiBSZXNvdXJjZSBTaGFyaW5nXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3QgbG9nZ2VyID0gcmVxdWlyZShcIm1vcmdhblwiKTtcclxuXHJcbmluaXQoKTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbi8vIEJlY2F1c2Ugd2Ugd2FudCB0byBhY2Nlc3MgdGhlIEFQSSBmcm9tIGEgcmVhY3QgYXBwbGljYXRpb24gdGhhdCBpcyBwcm9iYWJseSBzZXJ2ZWQgZnJvbSBhbm90aGVyIG9yaWdpbixcclxuLy8gdGhlIHNlcnZlciBuZWVkcyB0byBhbGxvdyBjcm9zcy1vcmlnaW4gcmVxdWVzdHMuIFRoZXJlZm9yZSB3ZSBhcmUgZ29pbmcgdG8gdXNlIGEgc2ltcGxlIG1vZHVsZSBjYWxsZWQgQ09SUy5cclxuYXBwLnVzZShjb3JzKTtcclxuXHJcbi8vIFRvIHBhcnNlIGNvb2tpZXNcclxuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XHJcblxyXG4vLyBIYW5kbGUgbG9jYWxlXHJcbmFwcC51c2UobG9jYWxlSGFuZGxlcik7XHJcblxyXG4vLyBVc2UgSldUIGF1dGggdG8gc2VjdXJlIHRoZSBhcGlcclxuYXBwLnVzZShqd3QpO1xyXG5cclxuLy8gQWxsb3cgcmVxdWVzdHMgZm9yIHN0YXRpYyByZXNvdXJjZXMgZnJvbSB0aGlzIGZvbGRlclxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnLCB7XHJcblx0aW5kZXg6IFwiaW5kZXguaHRtbFwiLFxyXG5cdGV0YWc6IHRydWUsIC8vIGp1c3QgYmVpbmcgZXhwbGljaXQgYWJvdXQgdGhlIGRlZmF1bHRcclxuXHRsYXN0TW9kaWZpZWQ6IHRydWUsICAvLyBqdXN0IGJlaW5nIGV4cGxpY2l0IGFib3V0IHRoZSBkZWZhdWx0XHJcblx0c2V0SGVhZGVyczogKHJlcywgcGF0aCkgPT4ge1xyXG5cdFx0aWYgKCBwYXRoLmVuZHNXaXRoKCcuaHRtbCcpICkge1xyXG5cdFx0XHQvLyBhbGwgb2YgdGhlIHByb2plY3QncyBIVE1MIGZpbGVzIGVuZCBpbiAuaHRtbFxyXG5cdFx0XHRyZXMuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggfnBhdGguaW5kZXhPZignL3N0YXRpYy8nKSApIHsgLy8gdmVyc2lvbmVkIFVSTFxyXG5cdFx0XHRyZXMuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ21heC1hZ2U9MzE1MzYwMDAnKTsgXHJcblx0XHR9XHJcblx0fSxcclxuXHJcbn0pKTtcclxuXHJcbi8vIChvcHRpb25hbCkgb25seSBtYWRlIGZvciBsb2dnaW5nIGFuZFxyXG4vLyBib2R5UGFyc2VyLCBwYXJzZXMgdGhlIHJlcXVlc3QgYm9keSB0byBiZSBhIHJlYWRhYmxlIGpzb24gZm9ybWF0XHJcbi8vIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuLy8gYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UobG9nZ2VyKFwiZGV2XCIpKTtcclxuXHJcbi8vIEdsb2JhbCBlcnJvciBoYW5kbGVyXHJcbmFwcC51c2UoZXJyb3JIYW5kbGVyKTtcclxuXHJcbi8vIEF0dGFjaCBoYW5kbGVycyBmb3IgQVBJIHJlcXVlc3RzIHdpdGggdGhlIHByZWZpeFxyXG5hcHAudXNlKFwiL2FwaVwiLCBhcGlIYW5kbGVycyk7XHJcblxyXG4vLyBUaGUgZm9sbG93aW5nIHJvdXRlcyBhcmUgaGFuZGxlZCBieSB0aGUgZnJvbnRlbmQncyBzaW5nbGUgcGFnZSBhcHBsaWNhdGlvblxyXG4vLyBKdXN0IHNlcnZlIGluZGV4Lmh0bWwgaW4gcmV0dXJuXHJcbmFwcC5nZXQoWycvbG9naW4nLCAnL3NpZ251cCcsICcvZGFzaGJvYXJkJ10sIChyZXEsIHJlcykgPT4gcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZSgncHVibGljL2luZGV4Lmh0bWwnKSkpO1xyXG5cclxuLy8gRXhwb3NlIGEgcG9ydCBhbmQgc3RhcnQgbGlzdGVuaW5nXHJcbmFwcC5saXN0ZW4oY29uZmlnLmFwaVBvcnQsICgpID0+IGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke2NvbmZpZy5hcGlQb3J0fWApKTsiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGJDb25uZWN0aW9uO1xyXG5cclxuZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuXHRyZXR1cm4gbW9uZ29vc2UuY29ubmVjdChcclxuXHRcdGNvbmZpZy5kYkNvbm5lY3Rpb25TdHJpbmcsXHJcblx0XHR7XHJcblx0XHRcdHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgLy8gdXNlIG5ldyBNb25nb0RCIGRyaXZlciBpbnRlcmZhY2UgKHNlZSBkZXRhaWxzIGhlcmU6IGh0dHBzOi8vbW9uZ29vc2Vqcy5jb20vZG9jcy9jb25uZWN0aW9ucy5odG1sKVxyXG5cdFx0XHRyZWNvbm5lY3RUcmllczogTnVtYmVyLk1BWF9WQUxVRSwgLy8gbmV2ZXIgc3RvcCB0cnlpbmcgdG8gcmVjb25uZWN0XHJcbiAgXHRcdFx0cmVjb25uZWN0SW50ZXJ2YWw6IDEwMDAsIC8vIHJlY29ubmVjdCBldmVyeSBzZWNvbmRcclxuXHRcdH1cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYkNvbm5lY3Rpb24oKSB7XHJcblx0Y29uc3QgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cdGRiLm9uY2UoXCJvcGVuXCIsICgpID0+IGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZVwiKSk7XHJcblx0ZGIub24oXCJlcnJvclwiLCAoZXJyb3IpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOiBcIiwgZXJyb3IpO1xyXG5cdFx0aWYgKCBlcnJvci5jb2RlID09PSAnRUNPTk5SRUZVU0VEJykge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlJlY29ubmVjdGluZy4uLlwiKTtcclxuXHRcdFx0XHRjb25uZWN0KCk7XHJcblx0XHRcdH0sIDUwMDApOyAvLyB0cnkgcmVjb25uZWN0aW5nIGluIDUgc2Vjb25kc1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRjb25uZWN0KCk7XHJcbn1cclxuXHJcblxyXG4iLCJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHJlcXVpcmUoJy4vaTE4bicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aW5pdCxcclxuXHRyZXNwb25kLFxyXG5cdHJlc3BvbmRTdWNjZXNzLFxyXG5cdHJlc3BvbmRGYWlsdXJlLFxyXG5cdGV4dHJhY3REYXRhLFxyXG5cdGVycm9ySGFuZGxlcixcclxuXHRpc0tleURhdGFVbmlxdWVcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRta2RpcklmTm90RXhpc3RzKCd1cGxvYWRzJyk7XHJcblx0bWtkaXJJZk5vdEV4aXN0cygncHVibGljL3Bob3RvcycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBta2RpcklmTm90RXhpc3RzKHJlbGF0aXZlUGF0aCkge1xyXG5cdGNvbnN0IGFic1BhdGggPSBwYXRoLnJlc29sdmUocmVsYXRpdmVQYXRoKTtcclxuXHRpZiAoICEgZnMuZXhpc3RzU3luYyhhYnNQYXRoKSApIHtcclxuXHRcdGZzLm1rZGlyU3luYyhhYnNQYXRoKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbmQocmVzLCBzdGF0dXMsIGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgc3RhdHVzLCBkYXRhIHx8ICdbbm8gZGF0YV0nKTtcclxuXHRyZXR1cm4gcmVzLmpzb24oe1xyXG5cdFx0c3RhdHVzLFxyXG5cdFx0ZGF0YVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNwb25kU3VjY2VzcyhyZXMsIGRhdGEpIHtcclxuXHRyZXR1cm4gcmVzcG9uZChyZXMsIFwiU1VDQ0VTU1wiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzcG9uZEZhaWx1cmUocmVzLCBlcnJvciwgaHR0cFN0YXR1cyA9IDQwMCkge1xyXG5cdGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCBlcnJvcik7XHJcblx0cmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cykuanNvbih7XHJcblx0XHRzdGF0dXM6IFwiRkFJTFVSRVwiLFxyXG5cdFx0ZGV0YWlsczogZXJyb3JcclxuXHR9KTtcclxufVxyXG5cclxuLy8g0JLRi9GC0LDRidC40YLRjCDQt9Cw0LTQsNC90L3Ri9C1INGB0YXQtdC80L7QuSDQv9C+0LvRjyDQuNC3INGC0LXQu9CwINC30LDQv9GA0L7RgdCwIHNvdXJjZVxyXG5mdW5jdGlvbiBleHRyYWN0RGF0YShzY2hlbWEsIHNvdXJjZSkge1xyXG5cdGxldCBkYXRhID0ge307XHJcblx0c2NoZW1hLmZvckVhY2goIGZpZWxkID0+IGRhdGFbZmllbGQubmFtZV0gPSBzb3VyY2VbZmllbGQubmFtZV0gKTtcclxuXHRyZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXJyb3JIYW5kbGVyKGVyciwgcmVxLCByZXMsIG5leHQpIHtcclxuXHRjb25zdCBsb2NhbGl6ZWRNZXNzYWdlcyA9IG1lc3NhZ2VzW3JlcS5sb2NhbGVdO1xyXG5cclxuICAgIGlmICggdHlwZW9mIChlcnIpID09PSAnc3RyaW5nJyApIHtcclxuICAgICAgICAvLyBjdXN0b20gYXBwbGljYXRpb24gZXJyb3JcclxuICAgICAgICByZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggZXJyLm5hbWUgPT09ICdVbmF1dGhvcml6ZWRFcnJvcicgKSB7XHJcbiAgICAgICAgLy8gand0IGF1dGhlbnRpY2F0aW9uIGVycm9yXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMudW5hdXRob3JpemVkRXJyb3IuZm9ybWF0KCksIDQwMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVmYXVsdCB0byA1MDAgc2VydmVyIGVycm9yXHJcbiAgICByZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBlcnIubWVzc2FnZSwgNTAwKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaXNLZXlEYXRhVW5pcXVlKG1vZGVsLCBrZXlEYXRhKSB7XHJcblx0bGV0IGFsdGVybmF0aXZlcyA9IFtdO1xyXG5cdGZvciAoIGxldCBrZXkgaW4ga2V5RGF0YSApIHtcclxuXHRcdGFsdGVybmF0aXZlcy5wdXNoKHsgW2tleV06IGtleURhdGFba2V5XSB9KTtcclxuXHR9XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IG1vZGVsXHJcblx0XHQuZmluZCh7ICRvcjogYWx0ZXJuYXRpdmVzIH0pXHJcblx0IFx0LnNlbGVjdChcIl9pZFwiKVxyXG5cdCBcdC5leGVjKCk7XHJcblxyXG5cdHJldHVybiBkYXRhLmxlbmd0aFxyXG5cdFx0PyBmYWxzZVxyXG5cdFx0OiB0cnVlO1xyXG59IiwiY29uc3QgSW50bE1lc3NhZ2VGb3JtYXQgPSByZXF1aXJlKCdpbnRsLW1lc3NhZ2Vmb3JtYXQnKTtcclxuY29uc3QgdHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vbGFuZ3MuanNvbicpO1xyXG5jb25zdCBhY2NlcHRMYW5ndWFnZSA9IHJlcXVpcmUoJ2FjY2VwdC1sYW5ndWFnZScpO1xyXG5jb25zdCBBbGxIdG1sRW50aXRpZXMgPSByZXF1aXJlKCdodG1sLWVudGl0aWVzJykuQWxsSHRtbEVudGl0aWVzO1xyXG5jb25zdCBlbnRpdGllcyA9IG5ldyBBbGxIdG1sRW50aXRpZXMoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG1lc3NhZ2VzOiBwcmVsb2FkTWVzc2FnZXMoKSxcclxuXHRsb2NhbGVIYW5kbGVyLFxyXG5cdGRldGVjdExvY2FsZSxcclxuXHRzZXRMb2NhbGVDb29raWUsXHJcbn1cclxuXHJcbmFjY2VwdExhbmd1YWdlLmxhbmd1YWdlcyhbJ2VuJywgJ3J1J10pO1xyXG5cclxuZnVuY3Rpb24gcHJlbG9hZE1lc3NhZ2VzKCkge1xyXG5cdGxldCBtZXNzYWdlcyA9IHt9O1xyXG5cdGZvciAoIGxldCBsb2NhbGVJZCBpbiB0cmFuc2xhdGlvbnMgKSB7XHJcblx0XHRtZXNzYWdlc1tsb2NhbGVJZF0gPSB7fTtcclxuXHRcdGZvciAoIGxldCBrZXkgaW4gdHJhbnNsYXRpb25zW2xvY2FsZUlkXSApIHtcclxuXHRcdFx0bGV0IHZhbHVlID0gdHJhbnNsYXRpb25zW2xvY2FsZUlkXVtrZXldO1xyXG5cdFx0XHR2YWx1ZSA9IGVudGl0aWVzLmRlY29kZSh2YWx1ZSk7XHJcblx0XHRcdHZhbHVlID0gbmV3IEludGxNZXNzYWdlRm9ybWF0KHZhbHVlLCBsb2NhbGVJZCk7XHJcblx0XHRcdG1lc3NhZ2VzW2xvY2FsZUlkXVtrZXldID0gdmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBtZXNzYWdlcztcclxufVxyXG5cclxuZnVuY3Rpb24gbG9jYWxlSGFuZGxlcihyZXEsIHJlcywgbmV4dCkge1xyXG5cdGNvbnN0IGxvY2FsZUlkID0gZGV0ZWN0TG9jYWxlKHJlcSk7XHJcblxyXG5cdC8vIElmIHRoZSBsb2NhbGUgaXMgbm90IHlldCBpbiBjb29raWVzXHJcblx0aWYgKCAhIHJlcS5jb29raWVzLmxvY2FsZSApXHJcblx0XHRyZXMuY29va2llKCdsb2NhbGUnLCBsb2NhbGVJZCwgeyBtYXhBZ2U6IChuZXcgRGF0ZSgpICogMC4wMDEpICsgKDM2NSAqIDI0ICogMzYwMCkgfSk7XHJcblxyXG5cdHJlcS5sb2NhbGUgPSBsb2NhbGVJZDtcclxuXHRuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRldGVjdExvY2FsZShyZXEpIHtcclxuXHRjb25zdCBjb29raWVMb2NhbGUgPSByZXEuY29va2llcy5sb2NhbGU7XHJcblxyXG5cdHJldHVybiBhY2NlcHRMYW5ndWFnZS5nZXQoY29va2llTG9jYWxlIHx8IHJlcS5oZWFkZXJzWydhY2NlcHQtbGFuZ3VhZ2UnXSkgfHwgJ2VuJztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TG9jYWxlQ29va2llKHJlcywgbG9jYWxlSWQpIHtcclxuXHRyZXMuY29va2llKCdsb2NhbGUnLCBsb2NhbGVJZCwgeyBtYXhBZ2U6IChuZXcgRGF0ZSgpICogMC4wMDEpICsgKDM2NSAqIDI0ICogMzYwMCkgfSk7XHJcbn0iLCJjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcclxuY29uc3QgZXhwcmVzc0p3dCA9IHJlcXVpcmUoJ2V4cHJlc3Mtand0Jyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGp3dDtcclxuXHJcbmZ1bmN0aW9uIGp3dCgpIHtcclxuICAgIHJldHVybiBleHByZXNzSnd0KHsgc2VjcmV0OiBjb25maWcuand0U2VjcmV0IH0pLnVubGVzcyh7XHJcblx0ICAgICAgICBwYXRoOiBbXHJcblx0ICAgICAgICAgICAgLy8gcHVibGljIHJvdXRlcyB0aGF0IGRvbid0IHJlcXVpcmUgYXV0aGVudGljYXRpb25cclxuXHQgICAgICAgICAgICAnL2FwaS9hdXRoJyxcclxuXHQgICAgICAgICAgICAnL2FwaS9nZXQtbG9jYWxlJyxcclxuXHQgICAgICAgICAgICAnL2FwaS9jaGVjay11bmlxdWVuZXNzJyxcclxuXHQgICAgICAgICAgICAnL2FwaS9wdXQtdXNlci1wcm9maWxlJyxcclxuXHQgICAgICAgICAgICAnLycsXHJcblx0ICAgICAgICAgICAgL1xcL3Bob3Rvc1xcLy4rXFwuKD86anBnfHBuZykkLyxcclxuXHQgICAgICAgICAgICAvXFwvaTE4blxcLy4rLyxcclxuXHQgICAgICAgICAgICAvXFwvYXNzZXRzXFwvLiskLyxcclxuXHQgICAgICAgICAgICAvXFwvc3RhdGljXFwvLiskLyxcclxuXHQgICAgICAgICAgICAvXFwvW14vXStcXC5bXi9dKyQvLFxyXG5cdCAgICAgICAgICAgIC9cXC9sb2dpblxcLz8kLyxcclxuXHQgICAgICAgICAgICAvXFwvc2lnbnVwXFwvPyQvLFxyXG5cdCAgICAgICAgICAgIC9cXC9kYXNoYm9hcmRcXC8/JC8sXHJcblx0ICAgICAgICBdXHJcblx0ICAgIH0pO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0dmFsaWRhdGVBbGwsXHJcblx0dmFsaWRhdGVPbmVcclxufVxyXG5cclxuLy8g0KTRg9C90LrRhtC40Y8g0L/RgNC+0LLQtdGA0LrQuCDRgdC+0L7RgtCy0LXRgtGB0YLQstC40Y8g0L/QvtC70LXQuSDQt9Cw0LTQsNC90L3QvtC5INGB0YXQtdC80LVcclxuZnVuY3Rpb24gdmFsaWRhdGUoYWxnb3JpdGhtLCBzY2hlbWUsIGRhdGEpIHtcclxuXHRyZXR1cm4gc2NoZW1lW2FsZ29yaXRobV0oIGl0ZW0gPT4ge1xyXG5cdFx0Ly8g0JXRgdC70Lgg0L/QvtC70LUg0L/QtdGA0LXQtNCw0L3QvlxyXG5cdFx0aWYgKCBkYXRhW2l0ZW0ubmFtZV0gIT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpdGVtLnZhbGlkYXRvciA9PT0gXCJmdW5jdGlvblwiIC8vINC10YHQu9C4INC30LDQtNCw0L0g0YTQvtGA0LzQsNGCLCDQv9GA0L7QstC10YDRj9C10LxcclxuXHRcdFx0XHQ/IGl0ZW0udmFsaWRhdG9yKGRhdGFbaXRlbS5uYW1lXSlcclxuXHRcdFx0XHQ6IHRydWVcclxuXHRcdH1cclxuXHRcdC8vINCV0YHQu9C4INC90LXRgiwg0L3QviDQv9C+0LvQtSDQvtC/0YbQuNC+0L3QsNC70YzQvdC+0LVcclxuXHRcdGVsc2UgaWYgKCAhaXRlbS5yZXF1aXJlZCApIHJldHVybiB0cnVlO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDQn9GA0L7QstC10YDRj9C10YIg0LLRgdC1INC/0L7Qu9GPINC/0L4g0YHRhdC10LzQtVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUFsbChzY2hlbWUsIGRhdGEpIHtcclxuXHRyZXR1cm4gdmFsaWRhdGUoJ2V2ZXJ5Jywgc2NoZW1lLCBkYXRhKTtcclxufVxyXG5cclxuLy8g0J/RgNC+0LLQtdGA0Y/QtdGCINGC0L7Qu9GM0LrQviDQvtC00L3QviDQv9C+0LvQtSAo0LXRgdC70Lgg0L3Rg9C20L3QviDQv9GA0L7QstC10YDQuNGC0Ywg0LXQtNC40L3RgdGC0LLQtdC90L3QvtC1INC/0L7Qu9C1INC90LAg0YHQvtC+0YLQstC10YLRgdGC0LLQuNC1INGB0YXQtdC80LUpXHJcbmZ1bmN0aW9uIHZhbGlkYXRlT25lIChzY2hlbWUsIGl0ZW0pIHsgXHJcblx0cmV0dXJuIHZhbGlkYXRlKCdzb21lJywgc2NoZW1lLCBpdGVtKTtcclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNjZXB0LWxhbmd1YWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtand0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0bWwtZW50aXRpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW50bC1tZXNzYWdlZm9ybWF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==