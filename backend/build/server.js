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
  // ограничиваем объём текста
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
  // Пустая строка
  if (value.length === 0) return statusCodes.E_EMPTY; // Неверный формат

  const dateFormat = /^[0-9]{4}-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01])$/;
  const isCorrect = dateFormat.test(value);
  if (!isCorrect) return statusCodes.E_INVALID_FORMAT;
  const tsBirthdate = Date.parse(value);
  if (isNaN(tsBirthdate)) return statusCodes.E_INVALID_FORMAT;
  const tsToday = Date.now(); // Дата из будущего

  if (tsBirthdate > tsToday) return statusCodes.E_TOO_EARLY; // Максимум - 150 лет 

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
  // Пустая строка
  if (value.length === 0) return statusCodes.E_EMPTY; // Максимум - 100 символов 

  if (value.length > 128) return statusCodes.E_TOO_LONG; // Большинство разумных адресов удовлетворят этому формату
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
  // Пустая строка
  if (value.length === 0) return statusCodes.E_EMPTY; // Максимум - 40 символов 

  if (value.length > 40) return statusCodes.E_TOO_LONG; // Первый символ должен быть заглавной буквой

  const firstLetterRegex = /^[A-ZА-ЯЁ]$/;
  let isValid = firstLetterRegex.test(value.charAt(0));

  if (!isValid) {
    return statusCodes.E_FIRST_LETTER;
  } // Имя должно соответствовать формату	


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
  // Пустая строка
  if (value.length === 0) return statusCodes.E_EMPTY; // Максимум - 50 символов 

  if (value.length > 50) return statusCodes.E_TOO_LONG; // Первый символ должен быть заглавной буквой

  const firstLetterRegex = /^[A-ZА-ЯЁ]$/;
  let isValid = firstLetterRegex.test(value.charAt(0));

  if (!isValid) {
    return statusCodes.E_FIRST_LETTER;
  } // Последний символ должен быть буквой


  const lastLetterRegex = /^[a-zа-яё]$/;
  isValid = lastLetterRegex.test(value.charAt(value.length - 1));

  if (!isValid) {
    return statusCodes.E_LAST_SYMBOL;
  } // Минимум две буквы после дефиса


  const endingRegex = /-[a-zа-яё]$/;
  isValid = endingRegex.test(value);

  if (isValid) {
    return statusCodes.E_WRONG_ENDING;
  } // Фамилия должна соответствовать формату	


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
  // Пустая строка
  if (value.length === 0) return statusCodes.E_EMPTY; // Максимум - 128 символов 

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
  } // Пароль должен содержать как минимум две группы символов
  // 1) буквы латинского алфавита
  // 2) цифры
  // 3) спецсимволы


  regexp = /[a-zA-Z]/;
  const hasLetters = regexp.test(value);
  regexp = /[0-9]/;
  const hasDigits = regexp.test(value);
  regexp = /[-_,.'><=+&%$#@!* )(~\]/\\{}]/;
  const hasSymbols = regexp.test(value);
  if (hasLetters + hasDigits + hasSymbols < 2) return statusCodes.E_INSUFFICIENT;
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
  // Пустая строка
  if (value.length === 0) return statusCodes.E_EMPTY; // Максимум - 30 символов 

  if (value.length > 30) return statusCodes.E_TOO_LONG; // Первый символ должен быть буквой

  const firstSymbolRegex = /^\+/;
  let isValid = firstSymbolRegex.test(value.charAt(0));

  if (!isValid) {
    return statusCodes.E_FIRST_SYMBOL;
  } // Only valid characters


  const phoneLexisRegex = /^[-+ 0-9]+$/;
  isValid = phoneLexisRegex.test(value);

  if (!isValid) {
    return statusCodes.E_INVALID_CHARS;
  } // Номер должен соответствовать формату	


  const phoneGrammarRegex = /^\+[0-9]{1,3}(?:(?:[- ][0-9]{2,4}){3,4}|[- ]?[0-9]{5,10})$/;
  isValid = phoneGrammarRegex.test(value);

  if (!isValid) {
    return statusCodes.E_INVALID_FORMAT;
  } // Минимум - 5 символов


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
  // Пустая строка
  if (value.length === 0) return statusCodes.E_EMPTY; // Максимум - 30 символов 

  if (value.length > 30) return statusCodes.E_TOO_LONG; // Первый символ должен быть буквой

  const firstLetterRegex = /^[a-z]$/;
  let isValid = firstLetterRegex.test(value.charAt(0));

  if (!isValid) {
    return statusCodes.E_FIRST_LETTER;
  } // Имя должно соответствовать формату	


  const usernameRegex = /^[-a-z0-9]+$/;
  isValid = usernameRegex.test(value);

  if (!isValid) {
    return statusCodes.E_INVALID_FORMAT;
  } // Минимум - 5 символов


  if (value.length < 5) return statusCodes.E_TOO_SHORT; // Последний символ - буква или цифра

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
} = __webpack_require__(/*! ../utils/i18n */ "./src/utils/i18n.js"); // const { keyFieldsSchema, detailFieldsSchema } = require("esm")(module)("../schemas/schema-user-profile");
// import { keyFieldsSchema, detailFieldsSchema } from "../schemas/schema-user-profile";


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
  user = Object.assign(user, keyData, detailsData); // If a photo is attached, move it to the storage

  if (req.file) {
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
/*! exports provided: components.App.localeSwitchErrorTitle, components.App.notAuthorizedException, components.Dashboard.biographyBlockTitle, components.Dashboard.birthdate, components.Dashboard.dataLoadingErrorTitle, components.Dashboard.dataLoadingSpinnerMsg, components.Dashboard.logoutButtonCaption, components.Dashboard.newslettersStatusIndicatorLabel, components.LoginForm.authErrorTitle, components.LoginForm.formHint, components.LoginForm.formTitle, components.LoginForm.msgNoAccountQuestion, components.LoginForm.passwordLabel, components.LoginForm.signupLinkCaption, components.LoginForm.submitButtonCaption, components.LoginForm.submitButtonInProgressCaption, components.LoginForm.usernameLabel, components.SignupForm.Biography.E_TOO_LONG, components.SignupForm.Birthdate.E_EMPTY, components.SignupForm.Birthdate.E_INVALID_FORMAT, components.SignupForm.Birthdate.E_TOO_EARLY, components.SignupForm.Birthdate.E_TOO_OLD, components.SignupForm.Email.E_EMPTY, components.SignupForm.Email.E_INVALID_FORMAT, components.SignupForm.Email.E_TOO_LONG, components.SignupForm.Email.approved, components.SignupForm.Email.rejected, components.SignupForm.Firstname.E_EMPTY, components.SignupForm.Firstname.E_FIRST_LETTER, components.SignupForm.Firstname.E_INVALID_FORMAT, components.SignupForm.Firstname.E_TOO_LONG, components.SignupForm.Lastname.E_EMPTY, components.SignupForm.Lastname.E_FIRST_LETTER, components.SignupForm.Lastname.E_INVALID_FORMAT, components.SignupForm.Lastname.E_LAST_SYMBOL, components.SignupForm.Lastname.E_TOO_LONG, components.SignupForm.Lastname.E_WRONG_ENDING, components.SignupForm.Password.E_EMPTY, components.SignupForm.Password.E_INSUFFICIENT, components.SignupForm.Password.E_INVALID_FORMAT, components.SignupForm.Password.E_TOO_LONG, components.SignupForm.Password.E_TOO_SHORT, components.SignupForm.PasswordConfirmation.E_EMPTY, components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH, components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID, components.SignupForm.PasswordConfirmation.valid, components.SignupForm.PersonalInformationProcessing.E_IMPOSED, components.SignupForm.Phone.E_EMPTY, components.SignupForm.Phone.E_FIRST_SYMBOL, components.SignupForm.Phone.E_INVALID_FORMAT, components.SignupForm.Phone.E_TOO_LONG, components.SignupForm.Phone.E_TOO_SHORT, components.SignupForm.Phone.approved, components.SignupForm.Phone.rejected, components.SignupForm.Photo.E_NOT_SELECTED, components.SignupForm.Photo.E_TOO_BIG, components.SignupForm.Photo.E_WRONG_EXTENTION, components.SignupForm.Photo.photoPickerButtonCaption, components.SignupForm.Username.E_EMPTY, components.SignupForm.Username.E_FIRST_LETTER, components.SignupForm.Username.E_INVALID_FORMAT, components.SignupForm.Username.E_LAST_SYMBOL, components.SignupForm.Username.E_TOO_LONG, components.SignupForm.Username.E_TOO_SHORT, components.SignupForm.Username.approved, components.SignupForm.Username.rejected, components.SignupForm.alreadySignedUp, components.SignupForm.biographyLabel, components.SignupForm.birthdateHint, components.SignupForm.birthdateLabel, components.SignupForm.emailHint, components.SignupForm.emailLabel, components.SignupForm.firstNameLabel, components.SignupForm.lastNameLabel, components.SignupForm.loginLinkCaption, components.SignupForm.newslettersHint, components.SignupForm.newslettersLabel, components.SignupForm.passwordConfirmationHint, components.SignupForm.passwordConfirmationLabel, components.SignupForm.passwordHint, components.SignupForm.passwordLabel, components.SignupForm.personalInformationProcessingHint, components.SignupForm.personalInformationProcessingLabel, components.SignupForm.phoneHint, components.SignupForm.phoneLabel, components.SignupForm.photoHint, components.SignupForm.photoLabel, components.SignupForm.signupErrorTitle, components.SignupForm.signupFormHint, components.SignupForm.signupFormTitle, components.SignupForm.signupSuccessMessage, components.SignupForm.signupSuccessTitle, components.SignupForm.submitButtonCaption, components.SignupForm.submitButtonInProgressCaption, components.SignupForm.userIdHint, components.SignupForm.userIdLabel, components.SignupForm.btnDemoCaption, serverConnectionError, default */
/***/ (function(module) {

module.exports = {"components.App.localeSwitchErrorTitle":"Couldn't switch locale","components.App.notAuthorizedException":"Not authorized. Probably due to an application error. Try logging in again","components.Dashboard.biographyBlockTitle":"Short biography","components.Dashboard.birthdate":"{birthdate, date, medium} ({age, number} {age, plural, one {year} other {years}} old)","components.Dashboard.dataLoadingErrorTitle":"Error loading profile data","components.Dashboard.dataLoadingSpinnerMsg":"Loading data...","components.Dashboard.logoutButtonCaption":"Log out","components.Dashboard.newslettersStatusIndicatorLabel":"Newsletters","components.LoginForm.authErrorTitle":"Authentication error","components.LoginForm.formHint":"Please, enter your user name and password to get access to your profile","components.LoginForm.formTitle":"Log in","components.LoginForm.msgNoAccountQuestion":"No account?","components.LoginForm.passwordLabel":"Password","components.LoginForm.signupLinkCaption":"Register","components.LoginForm.submitButtonCaption":"Log in","components.LoginForm.submitButtonInProgressCaption":"Sending","components.LoginForm.usernameLabel":"Username","components.SignupForm.Biography.E_TOO_LONG":"Please, shorten your biography to 4000 symbols","components.SignupForm.Birthdate.E_EMPTY":"This field is required. Please, enter your date of birth","components.SignupForm.Birthdate.E_INVALID_FORMAT":"Wrong data format. Please, make sure you enter the date in YYYY-MM-DD format","components.SignupForm.Birthdate.E_TOO_EARLY":"Only dates from the past are accepted","components.SignupForm.Birthdate.E_TOO_OLD":"We accept that a human can live longer than 150 years. If that's your case, please contact us via phone or email. We will consider your application in exceptional order","components.SignupForm.Email.E_EMPTY":"This field is required. Please, enter your email","components.SignupForm.Email.E_INVALID_FORMAT":"Email doesn't comply with the format. Please, make sure you typed the address correctly","components.SignupForm.Email.E_TOO_LONG":"We don't accept emails longer than 128 symbols. Please, use a shorter address","components.SignupForm.Email.approved":"This email address is fine!","components.SignupForm.Email.rejected":"The address has already been taken by somebody. Please, use another one","components.SignupForm.Firstname.E_EMPTY":"This field is required. Please, enter your name","components.SignupForm.Firstname.E_FIRST_LETTER":"Name should begin with a capital letter","components.SignupForm.Firstname.E_INVALID_FORMAT":"The name contains illegal characters. Please, adhere to the specified format","components.SignupForm.Firstname.E_TOO_LONG":"Name shouldn't exceed 40 characters","components.SignupForm.Lastname.E_EMPTY":"This field is required. Please, enter your family name","components.SignupForm.Lastname.E_FIRST_LETTER":"Family name should start with capital letter","components.SignupForm.Lastname.E_INVALID_FORMAT":"The family name doesn't follow the format. Please, use only letters and a hyphen","components.SignupForm.Lastname.E_LAST_SYMBOL":"Family name should end in lowercase letter","components.SignupForm.Lastname.E_TOO_LONG":"Family name shouldn't exceed 50 characters","components.SignupForm.Lastname.E_WRONG_ENDING":"Minimum 2 letters after a hyphen","components.SignupForm.Password.E_EMPTY":"This is a required field. Please, enter a password","components.SignupForm.Password.E_INSUFFICIENT":"Please, use at least 2 symbol groups: letters, digits or special characters","components.SignupForm.Password.E_INVALID_FORMAT":"The password contains illegal symbols. Please, adhere to the specified format","components.SignupForm.Password.E_TOO_LONG":"Password should be less that 128 symbols long. Please, use a shorter password","components.SignupForm.Password.E_TOO_SHORT":"Password should be at least 8 symbols long","components.SignupForm.PasswordConfirmation.E_EMPTY":"This field is required. Please, confirm the above entered password","components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH":"Passwords don't match","components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID":"Please, make sure both passwords follow the specified format","components.SignupForm.PasswordConfirmation.valid":"Passwords match","components.SignupForm.PersonalInformationProcessing.E_IMPOSED":"Consent to personal information processing is required to sign up to our service","components.SignupForm.Phone.E_EMPTY":"This field is required. Please, enter your phone number","components.SignupForm.Phone.E_FIRST_SYMBOL":"The first character should be a plus symbol (+)","components.SignupForm.Phone.E_INVALID_FORMAT":"The phone number doesn't comply with the format. Please, check if you typed it correctly","components.SignupForm.Phone.E_TOO_LONG":"The phone number is too long. Please, use a shorter number","components.SignupForm.Phone.E_TOO_SHORT":"Phone number should be more than 10 characters long. Please, make sure you entered it correctly","components.SignupForm.Phone.approved":"This phone number will work!","components.SignupForm.Phone.rejected":"This phone number has already been in use. Please, choose another one","components.SignupForm.Photo.E_NOT_SELECTED":"Please, choose a photo for your profile","components.SignupForm.Photo.E_TOO_BIG":"File size shouldn't exceed 5 MB","components.SignupForm.Photo.E_WRONG_EXTENTION":"We only support files of JPG and PNG formats","components.SignupForm.Photo.photoPickerButtonCaption":"Pick a photo","components.SignupForm.Username.E_EMPTY":"This field is required. Please, come up with a username","components.SignupForm.Username.E_FIRST_LETTER":"Username should begin with a lowercase Latin character","components.SignupForm.Username.E_INVALID_FORMAT":"The name contains illegal characters. Please, adhere to the specified format","components.SignupForm.Username.E_LAST_SYMBOL":"Name should end in a letter or a digit","components.SignupForm.Username.E_TOO_LONG":"Name shouldn't be longer than 30 characters","components.SignupForm.Username.E_TOO_SHORT":"Name should be at least 5 characters long","components.SignupForm.Username.approved":"Great, this is a suitable name!","components.SignupForm.Username.rejected":"Unfortunately, this name has already been taken. Please, come up with another one","components.SignupForm.alreadySignedUp":"Already signed up?","components.SignupForm.biographyLabel":"Short biography","components.SignupForm.birthdateHint":"Please, choose the date from the popup calendar","components.SignupForm.birthdateLabel":"Birthdate","components.SignupForm.emailHint":"We use the email for password restoration and critical notifications. No unnecessary newsletters","components.SignupForm.emailLabel":"Email","components.SignupForm.firstNameLabel":"Given name","components.SignupForm.lastNameLabel":"Family name","components.SignupForm.loginLinkCaption":"Log in","components.SignupForm.newslettersHint":"Switch on if you want to keep up with us","components.SignupForm.newslettersLabel":"Newsletters","components.SignupForm.passwordConfirmationHint":"Please, confirm the above entered password","components.SignupForm.passwordConfirmationLabel":"Password confirmation","components.SignupForm.passwordHint":"Only latin letters, digits and special characters (for example, :, ', >, <, =, +, ., &, %, $, #, @, !, *, ), (, -, ~, [, ], /, \\\\, \\{, \\}, _, ^). Minimum 8 characters. At least two character types should be used","components.SignupForm.passwordLabel":"Password","components.SignupForm.personalInformationProcessingHint":"According to Russia's federal law from 27/07/2006 number 152-FZ 'On personal data'","components.SignupForm.personalInformationProcessingLabel":"I give my consent to process my personal data","components.SignupForm.phoneHint":"Phone number in the following format: <country code> <number>, for example, +7 926-840-55-49. Minimum 5 characters","components.SignupForm.phoneLabel":"Phone number","components.SignupForm.photoHint":"PNG and JPEG files only. Maximum size - 5 MB","components.SignupForm.photoLabel":"Photo","components.SignupForm.signupErrorTitle":"Sign up error","components.SignupForm.signupFormHint":"You need to provide some personal information. Please, fill in the form below","components.SignupForm.signupFormTitle":"Sign Up","components.SignupForm.signupSuccessMessage":"You're registered. Please, log in to your account","components.SignupForm.signupSuccessTitle":"Signed up successfully!","components.SignupForm.submitButtonCaption":"Sign up","components.SignupForm.submitButtonInProgressCaption":"Sending","components.SignupForm.userIdHint":"User identifier. Has to be composed of lowercase latin letters and/or digits. Нyphen is allowed. Should start with a letter and end with a letter or a digit. Minimim - 5 symbols. For example, 'giant-66'","components.SignupForm.userIdLabel":"Username","components.SignupForm.btnDemoCaption":"Demo","serverConnectionError":"Couldn't connect to server: \"{errorMsg}\". Please, try again later. If you can't submit the form, please contact us. We bring our apologies for the inconvenience."};

/***/ }),

/***/ "./src/public/lang/ru.json":
/*!*********************************!*\
  !*** ./src/public/lang/ru.json ***!
  \*********************************/
/*! exports provided: components.App.localeSwitchErrorTitle, components.App.notAuthorizedException, components.Dashboard.biographyBlockTitle, components.Dashboard.birthdate, components.Dashboard.dataLoadingErrorTitle, components.Dashboard.dataLoadingSpinnerMsg, components.Dashboard.logoutButtonCaption, components.Dashboard.newslettersStatusIndicatorLabel, components.LoginForm.authErrorTitle, components.LoginForm.formHint, components.LoginForm.formTitle, components.LoginForm.msgNoAccountQuestion, components.LoginForm.passwordLabel, components.LoginForm.signupLinkCaption, components.LoginForm.submitButtonCaption, components.LoginForm.submitButtonInProgressCaption, components.LoginForm.usernameLabel, components.SignupForm.Biography.E_TOO_LONG, components.SignupForm.Birthdate.E_EMPTY, components.SignupForm.Birthdate.E_INVALID_FORMAT, components.SignupForm.Birthdate.E_TOO_EARLY, components.SignupForm.Birthdate.E_TOO_OLD, components.SignupForm.Email.E_EMPTY, components.SignupForm.Email.E_INVALID_FORMAT, components.SignupForm.Email.E_TOO_LONG, components.SignupForm.Email.approved, components.SignupForm.Email.rejected, components.SignupForm.Firstname.E_EMPTY, components.SignupForm.Firstname.E_FIRST_LETTER, components.SignupForm.Firstname.E_INVALID_FORMAT, components.SignupForm.Firstname.E_TOO_LONG, components.SignupForm.Lastname.E_EMPTY, components.SignupForm.Lastname.E_FIRST_LETTER, components.SignupForm.Lastname.E_INVALID_FORMAT, components.SignupForm.Lastname.E_LAST_SYMBOL, components.SignupForm.Lastname.E_TOO_LONG, components.SignupForm.Lastname.E_WRONG_ENDING, components.SignupForm.Password.E_EMPTY, components.SignupForm.Password.E_INSUFFICIENT, components.SignupForm.Password.E_INVALID_FORMAT, components.SignupForm.Password.E_TOO_LONG, components.SignupForm.Password.E_TOO_SHORT, components.SignupForm.PasswordConfirmation.E_EMPTY, components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH, components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID, components.SignupForm.PasswordConfirmation.valid, components.SignupForm.PersonalInformationProcessing.E_IMPOSED, components.SignupForm.Phone.E_EMPTY, components.SignupForm.Phone.E_FIRST_SYMBOL, components.SignupForm.Phone.E_INVALID_FORMAT, components.SignupForm.Phone.E_TOO_LONG, components.SignupForm.Phone.E_TOO_SHORT, components.SignupForm.Phone.approved, components.SignupForm.Phone.rejected, components.SignupForm.Photo.E_NOT_SELECTED, components.SignupForm.Photo.E_TOO_BIG, components.SignupForm.Photo.E_WRONG_EXTENTION, components.SignupForm.Photo.photoPickerButtonCaption, components.SignupForm.Username.E_EMPTY, components.SignupForm.Username.E_FIRST_LETTER, components.SignupForm.Username.E_INVALID_FORMAT, components.SignupForm.Username.E_LAST_SYMBOL, components.SignupForm.Username.E_TOO_LONG, components.SignupForm.Username.E_TOO_SHORT, components.SignupForm.Username.approved, components.SignupForm.Username.rejected, components.SignupForm.alreadySignedUp, components.SignupForm.biographyLabel, components.SignupForm.birthdateHint, components.SignupForm.birthdateLabel, components.SignupForm.emailHint, components.SignupForm.emailLabel, components.SignupForm.firstNameLabel, components.SignupForm.lastNameLabel, components.SignupForm.loginLinkCaption, components.SignupForm.newslettersHint, components.SignupForm.newslettersLabel, components.SignupForm.passwordConfirmationHint, components.SignupForm.passwordConfirmationLabel, components.SignupForm.passwordHint, components.SignupForm.passwordLabel, components.SignupForm.personalInformationProcessingHint, components.SignupForm.personalInformationProcessingLabel, components.SignupForm.phoneHint, components.SignupForm.phoneLabel, components.SignupForm.photoHint, components.SignupForm.photoLabel, components.SignupForm.signupErrorTitle, components.SignupForm.signupFormHint, components.SignupForm.signupFormTitle, components.SignupForm.signupSuccessMessage, components.SignupForm.signupSuccessTitle, components.SignupForm.submitButtonCaption, components.SignupForm.submitButtonInProgressCaption, components.SignupForm.userIdHint, components.SignupForm.userIdLabel, components.SignupForm.btnDemoCaption, serverConnectionError, default */
/***/ (function(module) {

module.exports = {"components.App.localeSwitchErrorTitle":"Не&nbsp;удалось сменить локализацию","components.App.notAuthorizedException":"Вы&nbsp;не&nbsp;авторизованы. Возможно, это ошибка приложения. Попробуйте авторизоваться заново","components.Dashboard.biographyBlockTitle":"Краткая биография","components.Dashboard.birthdate":"{birthdate, date, medium} ({age, plural, offset: 1 =0 {младенец} other {{age, number} {age, plural, one {год} few {года} many {лет} other {}}}})","components.Dashboard.dataLoadingErrorTitle":"Ошибка загрузки данных профиля","components.Dashboard.dataLoadingSpinnerMsg":"Загрузка...","components.Dashboard.logoutButtonCaption":"Выйти","components.Dashboard.newslettersStatusIndicatorLabel":"Информационные рассылки","components.LoginForm.authErrorTitle":"Ошибка аутентификации","components.LoginForm.formHint":"Пожалуйста, введите имя пользователя и&nbsp;пароль для получения доступа к&nbsp;личному кабинету","components.LoginForm.formTitle":"Авторизация","components.LoginForm.msgNoAccountQuestion":"Нет аккаунта?","components.LoginForm.passwordLabel":"Пароль","components.LoginForm.signupLinkCaption":"Регистрация","components.LoginForm.submitButtonCaption":"Войти","components.LoginForm.submitButtonInProgressCaption":"Отправка","components.LoginForm.usernameLabel":"Имя пользователя","components.SignupForm.Biography.E_TOO_LONG":"Пожалуйста, сократите свою биографию до&nbsp;4000 символов","components.SignupForm.Birthdate.E_EMPTY":"Это обязательное поле. Пожалуйста, введите дату рождения","components.SignupForm.Birthdate.E_INVALID_FORMAT":"Неверный формат даты. Пожалуйста, убедитесь, что вводите дату в&nbsp;формате ГГГГ-ММ-ДД","components.SignupForm.Birthdate.E_TOO_EARLY":"Допускаются только даты из&nbsp;прошлого","components.SignupForm.Birthdate.E_TOO_OLD":"Мы&nbsp;допускаем, что человек может прожить более 150-ти лет. Если это ваш случай, пожалуйста, свяжитесь с&nbsp;нами по&nbsp;телефону или напишите нам на&nbsp;почту, мы&nbsp;рассмотрим вашу заявку в&nbsp;исключительном порядке.","components.SignupForm.Email.E_EMPTY":"Это обязательное поле. Пожалуйста, введите адрес","components.SignupForm.Email.E_INVALID_FORMAT":"Адрес не&nbsp;соответствует формату. Пожалуйста, проверьте правильность написания адреса","components.SignupForm.Email.E_TOO_LONG":"Мы&nbsp;не&nbsp;поддерживаем адреса длиннее 128-ми символов. Пожалуйста, используйте более короткий адрес","components.SignupForm.Email.approved":"Электронная почта в&nbsp;порядке!","components.SignupForm.Email.rejected":"Такой адреc уже занят кем-то. Пожалуйста, используйте другой","components.SignupForm.Firstname.E_EMPTY":"Это обязательное поле. Пожалуйста, введите имя","components.SignupForm.Firstname.E_FIRST_LETTER":"Имя должно начинаться с&nbsp;заглавной буквы","components.SignupForm.Firstname.E_INVALID_FORMAT":"Имя содержит недопустимые символы. Пожалуйста, придерживайтесь заданного формата","components.SignupForm.Firstname.E_TOO_LONG":"Имя не&nbsp;должно превышать 40-ка символов","components.SignupForm.Lastname.E_EMPTY":"Это обязательное поле. Пожалуйста, введите фамилию","components.SignupForm.Lastname.E_FIRST_LETTER":"Фамилия должна начинаться с&nbsp;заглавной буквы","components.SignupForm.Lastname.E_INVALID_FORMAT":"Фамилия не&nbsp;соответствует формату. Пожалуйста, используйте только буквы и&nbsp;дефис","components.SignupForm.Lastname.E_LAST_SYMBOL":"Фамилия должна заканчиваться строчной буквой","components.SignupForm.Lastname.E_TOO_LONG":"Фамилия не&nbsp;должна превышать 50-ти символов","components.SignupForm.Lastname.E_WRONG_ENDING":"Как минимум&nbsp;&mdash; две буквы после дефиса","components.SignupForm.Password.E_EMPTY":"Это обязательное поле. Пожалуйста, введите пароль","components.SignupForm.Password.E_INSUFFICIENT":"Пожалуйста, используйте хотя&nbsp;бы две группы символов: буквы, цифры или спецсимволы","components.SignupForm.Password.E_INVALID_FORMAT":"Пароль содержит недопустимые символы. Пожалуйста, придерживайтесь формата","components.SignupForm.Password.E_TOO_LONG":"Пароль не&nbsp;может превышать 128&nbsp;символов. Пожалуйста, используйте более короткий пароль","components.SignupForm.Password.E_TOO_SHORT":"Пароль должен содержать не&nbsp;менее 8-ми символов","components.SignupForm.PasswordConfirmation.E_EMPTY":"Это обязательное поле. Пожалуйста, подтвердите введённый ранее пароль","components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH":"Пароли не&nbsp;совпадают","components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID":"Пожалуйста, убедитесь, что оба пароля соответствуют формату","components.SignupForm.PasswordConfirmation.valid":"Пароли совпадают","components.SignupForm.PersonalInformationProcessing.E_IMPOSED":"Согласие на&nbsp;обработку персональных данных обязательно для регистрации на&nbsp;нашем сервисе","components.SignupForm.Phone.E_EMPTY":"Это обязательное поле. Пожалуйста, введите номер","components.SignupForm.Phone.E_FIRST_SYMBOL":"Первый символ должен быть плюсом (+)","components.SignupForm.Phone.E_INVALID_FORMAT":"Номер не&nbsp;соответствует формату. Пожалуйста, проверьте правильность ввода номера","components.SignupForm.Phone.E_TOO_LONG":"Номер слишком длинный. Пожалуйста, используйте более короткий номер","components.SignupForm.Phone.E_TOO_SHORT":"Номер должен быть длиннее 10&nbsp;символов. Пожалуйста, проверьте правильность ввода","components.SignupForm.Phone.approved":"Телефон подходит!","components.SignupForm.Phone.rejected":"Этот номер уже используется кем-то. Пожалуйста, используйте другой","components.SignupForm.Photo.E_NOT_SELECTED":"Пожалуйста, выберите фото для вашего профиля","components.SignupForm.Photo.E_TOO_BIG":"Размер файла не&nbsp;должен превышать 5&nbsp;МБ","components.SignupForm.Photo.E_WRONG_EXTENTION":"Мы&nbsp;поддерживаем только файлы форматов JPG и&nbsp;PNG","components.SignupForm.Photo.photoPickerButtonCaption":"Выберите фото","components.SignupForm.Username.E_EMPTY":"Это обязательное поле. Пожалуйста, придумайте имя","components.SignupForm.Username.E_FIRST_LETTER":"Имя должно начинаться со&nbsp;строчной буквы латинского алфавита","components.SignupForm.Username.E_INVALID_FORMAT":"Имя содержит недопустимые символы. Пожалуйста, придерживайтесь заданного формата","components.SignupForm.Username.E_LAST_SYMBOL":"Имя должно заканчиваться буквой или цифрой","components.SignupForm.Username.E_TOO_LONG":"Имя не&nbsp;должно превышать 30-ти символов","components.SignupForm.Username.E_TOO_SHORT":"Имя должно содержать не&nbsp;менее 5-ти символов","components.SignupForm.Username.approved":"Отлично, это имя подходит!","components.SignupForm.Username.rejected":"К&nbsp;сожалению, это имя уже занято. Пожалуйста, придумайте другое","components.SignupForm.alreadySignedUp":"Уже зарегистрированы?","components.SignupForm.biographyLabel":"Краткая биография","components.SignupForm.birthdateHint":"Пожалуйста, выберите дату из&nbsp;всплывающего календаря","components.SignupForm.birthdateLabel":"Дата рождения","components.SignupForm.emailHint":"Мы&nbsp;используем адрес электронной почты для восстановления пароля и&nbsp;критических уведомлений. Никаких лишних рассылок","components.SignupForm.emailLabel":"Адрес электронной почты","components.SignupForm.firstNameLabel":"Имя","components.SignupForm.lastNameLabel":"Фамилия","components.SignupForm.loginLinkCaption":"Войти","components.SignupForm.newslettersHint":"Включите, если хотите получать последние новости на&nbsp;почту","components.SignupForm.newslettersLabel":"Информационные рассылки","components.SignupForm.passwordConfirmationHint":"Повторите, пожалуйста, введённый ранее пароль","components.SignupForm.passwordConfirmationLabel":"Подтверждение пароля","components.SignupForm.passwordHint":"Только латинские буквы, цифры и&nbsp;спецсимволы (например, :, &rsquo;, >, <, =, +, ., &, %, $, #, @, ! , *, ), (, -, ~, [, ], /, \\\\, \\{, \\}, _, ^). Минимальная длина&nbsp;&mdash; 8&nbsp;знаков, при этом должны использоваться хотя&nbsp;бы две группы символов","components.SignupForm.passwordLabel":"Пароль","components.SignupForm.personalInformationProcessingHint":"В&nbsp;соответствии с&nbsp;Федеральным законом от&nbsp;27.07.2006&nbsp;г. &#8470;&nbsp;152&#x2011ФЗ &laquo;О&nbsp;персональных данных&raquo;","components.SignupForm.personalInformationProcessingLabel":"Я&nbsp;даю согласие на&nbsp;обработку моих персональных данных","components.SignupForm.phoneHint":"Номер телефона в&nbsp;формате &lt;код страны&gt; &lt;номер&gt;, например: +7&nbsp;926-840-55-49. Минимальная длина&nbsp;&mdash; 5&nbsp;символов","components.SignupForm.phoneLabel":"Номер телефона","components.SignupForm.photoHint":"Принимаются фотографии форматов JPG и&nbsp;PNG размером не&nbsp;более 5&nbsp;МБ","components.SignupForm.photoLabel":"Фотография","components.SignupForm.signupErrorTitle":"Ошибка регистрации","components.SignupForm.signupFormHint":"Вам необходимо предоставить некоторую информацию о&nbsp;себе. Пожалуйста, заполните нижеследующую форму.","components.SignupForm.signupFormTitle":"Регистрация","components.SignupForm.signupSuccessMessage":"Вы&nbsp;зарегистрированы. Пожалуйста, авторизуйтесь для входа в&nbsp;свой профиль","components.SignupForm.signupSuccessTitle":"Регистрация прошла успешно!","components.SignupForm.submitButtonCaption":"Зарегистрироваться","components.SignupForm.submitButtonInProgressCaption":"Отправка","components.SignupForm.userIdHint":"Идентификатор пользователя для входа в&nbsp;систему. Может содержать только строчные латинские буквы, цифры и&nbsp;дефис. Должен начинаться с&nbsp;буквы и&nbsp;заканчиваться буквой или цифрой. Минимум&nbsp;&mdash; 5&nbsp;символов. Например, giant-166","components.SignupForm.userIdLabel":"Имя пользователя","components.SignupForm.btnDemoCaption":"Демо","serverConnectionError":"Не&nbsp;удалось связаться с&nbsp;сервером: &laquo;{errorMsg}&raquo;. Пожалуйста, повторите попытку позже. Если вам не&nbsp;удалось отправить форму, пожалуйста, свяжитесь с&nbsp;нами. Приносим извинения за&nbsp;доставленные неудобства."};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vQmlvZ3JhcGh5L0Jpb2dyYXBoeS52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vQmlydGhkYXRlL0JpcnRoZGF0ZS52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vRW1haWwvRW1haWwudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0ZpcnN0bmFtZS9GaXJzdG5hbWUudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0xhc3RuYW1lL0xhc3RuYW1lLnZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9QYXNzd29yZC9QYXNzd29yZC52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vUGhvbmUvUGhvbmUudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL1VzZXJuYW1lL1VzZXJuYW1lLnZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9jaGVjay11bmlxdWVuZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ2V0LWxvY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2dldC11c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3B1dC11c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy91c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9sYW5nIHN5bmMgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvand0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWNjZXB0LWxhbmd1YWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1qd3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0bWwtZW50aXRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnRsLW1lc3NhZ2Vmb3JtYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlIiwic3RhdHVzQ29kZXMiLCJsZW5ndGgiLCJFX1RPT19MT05HIiwiRV9FTVBUWSIsImRhdGVGb3JtYXQiLCJpc0NvcnJlY3QiLCJ0ZXN0IiwiRV9JTlZBTElEX0ZPUk1BVCIsInRzQmlydGhkYXRlIiwiRGF0ZSIsInBhcnNlIiwiaXNOYU4iLCJ0c1RvZGF5Iiwibm93IiwiRV9UT09fRUFSTFkiLCJFX1RPT19PTEQiLCJlbWFpbFJlZ2V4IiwiaXNWYWxpZCIsImZpcnN0TGV0dGVyUmVnZXgiLCJjaGFyQXQiLCJFX0ZJUlNUX0xFVFRFUiIsIm5hbWVSZWdleCIsImxhc3RMZXR0ZXJSZWdleCIsIkVfTEFTVF9TWU1CT0wiLCJlbmRpbmdSZWdleCIsIkVfV1JPTkdfRU5ESU5HIiwiZ3JwTGV0dGVycyIsImdycERpZ2l0cyIsImdycFN5bWJvbHMiLCJmb3JtYXQiLCJyZWdleHAiLCJSZWdFeHAiLCJoYXNMZXR0ZXJzIiwiaGFzRGlnaXRzIiwiaGFzU3ltYm9scyIsIkVfSU5TVUZGSUNJRU5UIiwiRV9UT09fU0hPUlQiLCJmaXJzdFN5bWJvbFJlZ2V4IiwiRV9GSVJTVF9TWU1CT0wiLCJwaG9uZUxleGlzUmVnZXgiLCJFX0lOVkFMSURfQ0hBUlMiLCJwaG9uZUdyYW1tYXJSZWdleCIsInVzZXJuYW1lUmVnZXgiLCJjb25maWciLCJyZXF1aXJlIiwiVXNlclByb2ZpbGUiLCJ2YWxpZGF0b3IiLCJsb2dpbkZpZWxkc1NjaGVtYSIsInJlc3BvbmQiLCJyZXNwb25kU3VjY2VzcyIsInJlc3BvbmRGYWlsdXJlIiwiZXh0cmFjdERhdGEiLCJqd3QiLCJleHByZXNzIiwicm91dGVyIiwiUm91dGVyIiwibWVzc2FnZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0IiwiYXV0aGVudGljYXRpb25IYW5kbGVyIiwicmVxIiwicmVzIiwibG9jYWxlSWQiLCJsb2NhbGUiLCJsb2NhbGl6ZWRNZXNzYWdlcyIsImxvZ2luRGF0YSIsInF1ZXJ5IiwibG9naW5EYXRhVmFsaWQiLCJ2YWxpZGF0ZUFsbCIsImF1dGhJbnZhbGlkRGF0YSIsImZpbmQiLCJlcnIiLCJkYXRhIiwiYXV0aFdyb25nQ3JlZGVudGlhbHMiLCJ1c2VyIiwidG9rZW4iLCJzaWduIiwic3ViIiwiX2lkIiwiand0U2VjcmV0IiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwiaXNLZXlEYXRhVW5pcXVlIiwiYXBwcm92YWJsZUZpZWxkc1NjaGVtYSIsImNoZWNrVW5pcXVlbmVzc0hhbmRsZXIiLCJuYW1lIiwiZmllbGREYXRhIiwiZmllbGREYXRhVmFsaWQiLCJ2YWxpZGF0ZU9uZSIsImludmFsaWRGb3JtYXQiLCJpc1VuaXF1ZSIsInNldExvY2FsZUNvb2tpZSIsImZzIiwicGF0aCIsIkFsbEh0bWxFbnRpdGllcyIsImVudGl0aWVzIiwiZ2V0TG9jYWxlSGFuZGxlciIsImxvY2FsZURhdGEiLCJmb3JFYWNoIiwia2V5IiwiZGVjb2RlIiwiY3VycmVudExvY2FsZUlkIiwid2FudGVkTG9jYWxlSWQiLCJpZCIsImxvY2FsZU5vdEZvdW5kIiwiZ2V0VXNlclByb2ZpbGVIYW5kbGVyIiwiZmluZEJ5SWQiLCJ1c2VyUHJvZmlsZSIsInRvT2JqZWN0IiwiZG9lc1Bob3RvRXhpc3QiLCJleGlzdHNTeW5jIiwicmVzb2x2ZSIsInBob3RvIiwia2V5RmllbGRzU2NoZW1hIiwiZGV0YWlsRmllbGRzU2NoZW1hIiwibXVsdGVyIiwidXBsb2FkSGFuZGxlciIsImRlc3QiLCJsaW1pdHMiLCJmaWxlU2l6ZSIsImZpbGVzIiwicGFydHMiLCJzaW5nbGUiLCJwb3N0IiwiZGF0YUhhbmRsZXIiLCJrZXlEYXRhIiwiYm9keSIsImtleURhdGFWYWxpZCIsImludmFsaWRLZXlGaWVsZHNEYXRhIiwidXNlckFscmVhZHlFeGlzdHMiLCJkZXRhaWxzRGF0YSIsImRldGFpbHNGaWVsZHNWYWxpZCIsImludmFsaWRGb3JtRGF0YSIsIk9iamVjdCIsImFzc2lnbiIsImZpbGUiLCJ0bXBVcGxvYWRlZEZpbGVQYXRoIiwiZHN0RmlsZVBhdGgiLCJyZW5hbWVTeW5jIiwiZXJyb3IiLCJmYWlsZWRUb1NhdmVQaG90byIsImVyck1zZyIsIkVycm9yIiwic2F2ZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZGJIb3N0IiwiREJfSE9TVCIsImRiUG9ydCIsIkRCX1BPUlQiLCJkYlVzZXIiLCJEQl9VU0VSIiwiZGJQYXNzIiwiREJfUEFTUyIsImRiTmFtZSIsIkRCX05BTUUiLCJkYkNvbm5lY3Rpb25TdHJpbmciLCJhcGlQb3J0IiwiQVBJX1BPUlQiLCJtb25nb29zZSIsIlNjaGVtYSIsIkRhdGFTY2hlbWEiLCJOdW1iZXIiLCJTdHJpbmciLCJwYXNzd29yZCIsImVtYWlsIiwicGhvbmUiLCJuZXdzbGV0dGVycyIsIkJvb2xlYW4iLCJiaXJ0aGRhdGUiLCJiaW9ncmFwaHkiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInRpbWVzdGFtcHMiLCJtb2RlbCIsInJlcXVpcmVkIiwidXNlcm5hbWVWYWxpZGF0b3IiLCJlbWFpbFZhbGlkYXRvciIsInBob25lVmFsaWRhdG9yIiwicGFzc3dvcmRWYWxpZGF0b3IiLCJkZWZhdWx0IiwiYmlydGhkYXRlVmFsaWRhdG9yIiwiYmlvZ3JhcGh5VmFsaWRhdG9yIiwiZmlyc3RuYW1lVmFsaWRhdG9yIiwibGFzdG5hbWVWYWxpZGF0b3IiLCJjb25jYXQiLCJhbGxGaWVsZHNTY2hlbWEiLCJhcHByb3ZhYmxlRmllbGRzIiwiZmlsdGVyIiwiZmllbGRTY2hlbWEiLCJzb21lIiwiZGIiLCJpbml0IiwiZXJyb3JIYW5kbGVyIiwibG9jYWxlSGFuZGxlciIsImFwaUhhbmRsZXJzIiwiY29va2llUGFyc2VyIiwiY29ycyIsImxvZ2dlciIsImFwcCIsInVzZSIsInN0YXRpYyIsImluZGV4IiwiZXRhZyIsImxhc3RNb2RpZmllZCIsInNldEhlYWRlcnMiLCJlbmRzV2l0aCIsInNldEhlYWRlciIsImluZGV4T2YiLCJzZW5kRmlsZSIsImxpc3RlbiIsImRiQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJyZWNvbm5lY3RUcmllcyIsIk1BWF9WQUxVRSIsInJlY29ubmVjdEludGVydmFsIiwiY29ubmVjdGlvbiIsIm9uY2UiLCJvbiIsImNvZGUiLCJzZXRUaW1lb3V0IiwibWtkaXJJZk5vdEV4aXN0cyIsInJlbGF0aXZlUGF0aCIsImFic1BhdGgiLCJta2RpclN5bmMiLCJzdGF0dXMiLCJqc29uIiwiaHR0cFN0YXR1cyIsImRldGFpbHMiLCJzY2hlbWEiLCJzb3VyY2UiLCJmaWVsZCIsIm5leHQiLCJ1bmF1dGhvcml6ZWRFcnJvciIsIm1lc3NhZ2UiLCJhbHRlcm5hdGl2ZXMiLCJwdXNoIiwiJG9yIiwic2VsZWN0IiwiZXhlYyIsIkludGxNZXNzYWdlRm9ybWF0IiwidHJhbnNsYXRpb25zIiwiYWNjZXB0TGFuZ3VhZ2UiLCJwcmVsb2FkTWVzc2FnZXMiLCJkZXRlY3RMb2NhbGUiLCJsYW5ndWFnZXMiLCJjb29raWVzIiwiY29va2llIiwibWF4QWdlIiwiY29va2llTG9jYWxlIiwiaGVhZGVycyIsImV4cHJlc3NKd3QiLCJzZWNyZXQiLCJ1bmxlc3MiLCJhbGdvcml0aG0iLCJzY2hlbWUiLCJpdGVtIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FB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Q0FBTixDQUFtQkUsSUFBSSxJQUFJO0FBQ2pDO0FBQ0EsUUFBSzNMLElBQUksQ0FBQzJMLElBQUksQ0FBQzdLLElBQU4sQ0FBSixLQUFvQjhLLFNBQXpCLEVBQXFDO0FBQ3BDLGFBQU8sT0FBT0QsSUFBSSxDQUFDdE4sU0FBWixLQUEwQixVQUExQixDQUFxQztBQUFyQyxRQUNKc04sSUFBSSxDQUFDdE4sU0FBTCxDQUFlMkIsSUFBSSxDQUFDMkwsSUFBSSxDQUFDN0ssSUFBTixDQUFuQixDQURJLEdBRUosSUFGSDtBQUdBLEtBSkQsQ0FLQTtBQUxBLFNBTUssSUFBSyxDQUFDNkssSUFBSSxDQUFDbEYsUUFBWCxFQUFzQixPQUFPLElBQVA7QUFDM0IsR0FUTSxDQUFQO0FBVUEsQyxDQUVEOzs7QUFDQSxTQUFTN0csV0FBVCxDQUFxQjhMLE1BQXJCLEVBQTZCMUwsSUFBN0IsRUFBbUM7QUFDbEMsU0FBTzNFLFFBQVEsQ0FBQyxPQUFELEVBQVVxUSxNQUFWLEVBQWtCMUwsSUFBbEIsQ0FBZjtBQUNBLEMsQ0FFRDs7O0FBQ0EsU0FBU2lCLFdBQVQsQ0FBc0J5SyxNQUF0QixFQUE4QkMsSUFBOUIsRUFBb0M7QUFDbkMsU0FBT3RRLFFBQVEsQ0FBQyxNQUFELEVBQVNxUSxNQUFULEVBQWlCQyxJQUFqQixDQUFmO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUMzQkQsNEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgc3RhdHVzQ29kZXMgPSB7fSkge1xyXG5cdC8vINC+0LPRgNCw0L3QuNGH0LjQstCw0LXQvCDQvtCx0YrRkdC8INGC0LXQutGB0YLQsFxyXG5cdGlmICggdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gNDAwMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgc3RhdHVzQ29kZXMgPSB7fSkge1xyXG5cclxuXHQvLyDQn9GD0YHRgtCw0Y8g0YHRgtGA0L7QutCwXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRU1QVFk7XHJcblxyXG5cdC8vINCd0LXQstC10YDQvdGL0Lkg0YTQvtGA0LzQsNGCXHJcblx0Y29uc3QgZGF0ZUZvcm1hdCA9IC9eWzAtOV17NH0tKD86MFsxLTldfDFbMDEyXSktKD86MFsxLTldfFsxMl1bMC05XXwzWzAxXSkkLztcclxuXHRjb25zdCBpc0NvcnJlY3QgPSBkYXRlRm9ybWF0LnRlc3QodmFsdWUpO1xyXG5cdGlmICggIWlzQ29ycmVjdCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0ZPUk1BVDtcclxuXHJcblx0Y29uc3QgdHNCaXJ0aGRhdGUgPSBEYXRlLnBhcnNlKHZhbHVlKTtcclxuXHRpZiAoIGlzTmFOKHRzQmlydGhkYXRlKSApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0ZPUk1BVDtcclxuXHJcblx0Y29uc3QgdHNUb2RheSA9IERhdGUubm93KCk7XHJcblx0XHJcblx0Ly8g0JTQsNGC0LAg0LjQtyDQsdGD0LTRg9GJ0LXQs9C+XHJcblx0aWYgKCB0c0JpcnRoZGF0ZSA+IHRzVG9kYXkgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfVE9PX0VBUkxZO1xyXG5cdFxyXG5cdC8vINCc0LDQutGB0LjQvNGD0LwgLSAxNTAg0LvQtdGCIFxyXG5cdGlmICggdHNUb2RheSAtIHRzQmlydGhkYXRlID4gMTUwICogMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fT0xEO1xyXG5cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgc3RhdHVzQ29kZXMgPSB7fSkge1xyXG5cclxuXHQvLyDQn9GD0YHRgtCw0Y8g0YHRgtGA0L7QutCwXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRU1QVFk7XHJcblxyXG5cdC8vINCc0LDQutGB0LjQvNGD0LwgLSAxMDAg0YHQuNC80LLQvtC70L7QsiBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDEyOCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHRcclxuXHQvLyDQkdC+0LvRjNGI0LjQvdGB0YLQstC+INGA0LDQt9GD0LzQvdGL0YUg0LDQtNGA0LXRgdC+0LIg0YPQtNC+0LLQu9C10YLQstC+0YDRj9GCINGN0YLQvtC80YMg0YTQvtGA0LzQsNGC0YNcclxuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NjE1NS9ob3ctdG8tdmFsaWRhdGUtYW4tZW1haWwtYWRkcmVzcy1pbi1qYXZhc2NyaXB0XHJcblx0Y29uc3QgZW1haWxSZWdleCA9IC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC87XHJcblx0bGV0IGlzVmFsaWQgPSBlbWFpbFJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2RlcyA9IHt9KSB7XHJcblxyXG5cdC8vINCf0YPRgdGC0LDRjyDRgdGC0YDQvtC60LBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9FTVBUWTtcclxuXHJcblx0Ly8g0JzQsNC60YHQuNC80YPQvCAtIDQwINGB0LjQvNCy0L7Qu9C+0LIgXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPiA0MCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHRcclxuXHQvLyDQn9C10YDQstGL0Lkg0YHQuNC80LLQvtC7INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQt9Cw0LPQu9Cw0LLQvdC+0Lkg0LHRg9C60LLQvtC5XHJcblx0Y29uc3QgZmlyc3RMZXR0ZXJSZWdleCA9IC9eW0EtWtCQLdCv0IFdJC87XHJcblx0bGV0IGlzVmFsaWQgPSBmaXJzdExldHRlclJlZ2V4LnRlc3QodmFsdWUuY2hhckF0KDApKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0ZJUlNUX0xFVFRFUjtcclxuXHR9XHRcdFxyXG5cdFxyXG5cdC8vINCY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC+0YLQstC10YLRgdGC0LLQvtCy0LDRgtGMINGE0L7RgNC80LDRgtGDXHRcclxuXHRjb25zdCBuYW1lUmVnZXggPSAvXi5bYS160LAt0Y/RkV0qJC87XHJcblx0aXNWYWxpZCA9IG5hbWVSZWdleC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cdH1cdFx0XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHN0YXR1c0NvZGVzID0ge30pIHtcclxuXHJcblx0Ly8g0J/Rg9GB0YLQsNGPINGB0YLRgNC+0LrQsFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID09PSAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0VNUFRZO1xyXG5cclxuXHQvLyDQnNCw0LrRgdC40LzRg9C8IC0gNTAg0YHQuNC80LLQvtC70L7QsiBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDUwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cdFxyXG5cdC8vINCf0LXRgNCy0YvQuSDRgdC40LzQstC+0Lsg0LTQvtC70LbQtdC9INCx0YvRgtGMINC30LDQs9C70LDQstC90L7QuSDQsdGD0LrQstC+0LlcclxuXHRjb25zdCBmaXJzdExldHRlclJlZ2V4ID0gL15bQS1a0JAt0K/QgV0kLztcclxuXHRsZXQgaXNWYWxpZCA9IGZpcnN0TGV0dGVyUmVnZXgudGVzdCh2YWx1ZS5jaGFyQXQoMCkpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRklSU1RfTEVUVEVSO1xyXG5cdH1cclxuXHJcblx0Ly8g0J/QvtGB0LvQtdC00L3QuNC5INGB0LjQvNCy0L7QuyDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LHRg9C60LLQvtC5XHJcblx0Y29uc3QgbGFzdExldHRlclJlZ2V4ID0gL15bYS160LAt0Y/RkV0kLztcclxuXHRpc1ZhbGlkID0gbGFzdExldHRlclJlZ2V4LnRlc3QodmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aC0xKSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9MQVNUX1NZTUJPTDtcclxuXHR9XHJcblxyXG5cdC8vINCc0LjQvdC40LzRg9C8INC00LLQtSDQsdGD0LrQstGLINC/0L7RgdC70LUg0LTQtdGE0LjRgdCwXHJcblx0Y29uc3QgZW5kaW5nUmVnZXggPSAvLVthLXrQsC3Rj9GRXSQvO1xyXG5cdGlzVmFsaWQgPSBlbmRpbmdSZWdleC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9XUk9OR19FTkRJTkc7XHJcblx0fVx0XHRcclxuXHRcclxuXHQvLyDQpNCw0LzQuNC70LjRjyDQtNC+0LvQttC90LAg0YHQvtC+0YLQstC10YLRgdGC0LLQvtCy0LDRgtGMINGE0L7RgNC80LDRgtGDXHRcclxuXHRjb25zdCBuYW1lUmVnZXggPSAvXltBLVrQkC3Qr9CBXVstYS160LAt0Y/RkV0qJC87XHJcblx0aXNWYWxpZCA9IG5hbWVSZWdleC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgc3RhdHVzQ29kZXMpIHtcclxuXHJcblx0Ly8g0J/Rg9GB0YLQsNGPINGB0YLRgNC+0LrQsFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID09PSAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0VNUFRZO1xyXG5cclxuXHQvLyDQnNCw0LrRgdC40LzRg9C8IC0gMTI4INGB0LjQvNCy0L7Qu9C+0LIgXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPiAxMjggKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfVE9PX0xPTkc7XHJcblx0XHJcblx0Y29uc3QgZ3JwTGV0dGVycyA9IFwiW2EtekEtWl1cIjtcclxuXHRjb25zdCBncnBEaWdpdHMgPSBcIlswLTldXCI7XHJcblx0Y29uc3QgZ3JwU3ltYm9scyA9IFwiXCI7XHJcblx0Y29uc3QgZm9ybWF0ID0gYCg/OiR7Z3JwTGV0dGVyc30/JHtncnBEaWdpdHN9PyR7Z3JwU3ltYm9sc30/KStgO1xyXG5cdGxldCByZWdleHAgPSBuZXcgUmVnRXhwKGZvcm1hdCk7XHJcblx0cmVnZXhwID0gL14oPzpbYS16QS1aXXxbMC05XXxbLV8sLic+PD0rJiUkI0AhKiApKH5cXF0vXFxcXHt9XSkrJC87XHJcblx0bGV0IGlzVmFsaWQgPSByZWdleHAudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0ZPUk1BVDtcclxuXHR9XHJcblxyXG5cdC8vINCf0LDRgNC+0LvRjCDQtNC+0LvQttC10L0g0YHQvtC00LXRgNC20LDRgtGMINC60LDQuiDQvNC40L3QuNC80YPQvCDQtNCy0LUg0LPRgNGD0L/Qv9GLINGB0LjQvNCy0L7Qu9C+0LJcclxuXHQvLyAxKSDQsdGD0LrQstGLINC70LDRgtC40L3RgdC60L7Qs9C+INCw0LvRhNCw0LLQuNGC0LBcclxuXHQvLyAyKSDRhtC40YTRgNGLXHJcblx0Ly8gMykg0YHQv9C10YbRgdC40LzQstC+0LvRi1xyXG5cdHJlZ2V4cCA9IC9bYS16QS1aXS87XHJcblx0Y29uc3QgaGFzTGV0dGVycyA9IHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuXHJcblx0cmVnZXhwID0gL1swLTldLztcclxuXHRjb25zdCBoYXNEaWdpdHMgPSByZWdleHAudGVzdCh2YWx1ZSk7XHJcblxyXG5cdHJlZ2V4cCA9IC9bLV8sLic+PD0rJiUkI0AhKiApKH5cXF0vXFxcXHt9XS87XHJcblx0Y29uc3QgaGFzU3ltYm9scyA9IHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuXHJcblx0aWYgKCBoYXNMZXR0ZXJzICsgaGFzRGlnaXRzICsgaGFzU3ltYm9scyA8IDIgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5TVUZGSUNJRU5UO1xyXG5cclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA8IDggKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfVE9PX1NIT1JUO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2RlcyA9IHt9KSB7XHJcblxyXG5cdC8vINCf0YPRgdGC0LDRjyDRgdGC0YDQvtC60LBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9FTVBUWTtcclxuXHJcblx0Ly8g0JzQsNC60YHQuNC80YPQvCAtIDMwINGB0LjQvNCy0L7Qu9C+0LIgXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPiAzMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHRcclxuXHQvLyDQn9C10YDQstGL0Lkg0YHQuNC80LLQvtC7INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQsdGD0LrQstC+0LlcclxuXHRjb25zdCBmaXJzdFN5bWJvbFJlZ2V4ID0gL15cXCsvO1xyXG5cdGxldCBpc1ZhbGlkID0gZmlyc3RTeW1ib2xSZWdleC50ZXN0KHZhbHVlLmNoYXJBdCgwKSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9GSVJTVF9TWU1CT0w7XHJcblx0fVxyXG5cclxuXHQvLyBPbmx5IHZhbGlkIGNoYXJhY3RlcnNcclxuXHRjb25zdCBwaG9uZUxleGlzUmVnZXggPSAvXlstKyAwLTldKyQvO1xyXG5cdGlzVmFsaWQgPSBwaG9uZUxleGlzUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0NIQVJTO1xyXG5cdH1cclxuXHRcclxuXHQvLyDQndC+0LzQtdGAINC00L7Qu9C20LXQvSDRgdC+0L7RgtCy0LXRgtGB0YLQstC+0LLQsNGC0Ywg0YTQvtGA0LzQsNGC0YNcdFxyXG5cdGNvbnN0IHBob25lR3JhbW1hclJlZ2V4ID0gL15cXCtbMC05XXsxLDN9KD86KD86Wy0gXVswLTldezIsNH0pezMsNH18Wy0gXT9bMC05XXs1LDEwfSkkLztcclxuXHRpc1ZhbGlkID0gcGhvbmVHcmFtbWFyUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0ZPUk1BVDtcclxuXHR9XHJcblxyXG5cdC8vINCc0LjQvdC40LzRg9C8IC0gNSDRgdC40LzQstC+0LvQvtCyXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPCAxMCApIFxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfVE9PX1NIT1JUO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2RlcyA9IHt9KSB7XHJcblxyXG5cdC8vINCf0YPRgdGC0LDRjyDRgdGC0YDQvtC60LBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9FTVBUWTtcclxuXHJcblx0Ly8g0JzQsNC60YHQuNC80YPQvCAtIDMwINGB0LjQvNCy0L7Qu9C+0LIgXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPiAzMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHRcclxuXHQvLyDQn9C10YDQstGL0Lkg0YHQuNC80LLQvtC7INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQsdGD0LrQstC+0LlcclxuXHRjb25zdCBmaXJzdExldHRlclJlZ2V4ID0gL15bYS16XSQvO1xyXG5cdGxldCBpc1ZhbGlkID0gZmlyc3RMZXR0ZXJSZWdleC50ZXN0KHZhbHVlLmNoYXJBdCgwKSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9GSVJTVF9MRVRURVI7XHJcblx0fVx0XHRcclxuXHRcclxuXHQvLyDQmNC80Y8g0LTQvtC70LbQvdC+INGB0L7QvtGC0LLQtdGC0YHRgtCy0L7QstCw0YLRjCDRhNC+0YDQvNCw0YLRg1x0XHJcblx0Y29uc3QgdXNlcm5hbWVSZWdleCA9IC9eWy1hLXowLTldKyQvO1xyXG5cdGlzVmFsaWQgPSB1c2VybmFtZVJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblx0fVxyXG5cclxuXHQvLyDQnNC40L3QuNC80YPQvCAtIDUg0YHQuNC80LLQvtC70L7QslxyXG5cdGlmICggdmFsdWUubGVuZ3RoIDwgNSApIFxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfVE9PX1NIT1JUO1xyXG5cclxuXHQvLyDQn9C+0YHQu9C10LTQvdC40Lkg0YHQuNC80LLQvtC7IC0g0LHRg9C60LLQsCDQuNC70Lgg0YbQuNGE0YDQsFxyXG5cdGNvbnN0IGxhc3RMZXR0ZXJSZWdleCA9IC9eW2EtejAtOV0kLztcclxuXHRpc1ZhbGlkID0gbGFzdExldHRlclJlZ2V4LnRlc3QodmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0xBU1RfU1lNQk9MO1xyXG5cdH1cdFx0XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XHJcbmNvbnN0IFVzZXJQcm9maWxlID0gcmVxdWlyZSgnLi4vbW9kZWxzL3VzZXItcHJvZmlsZScpO1xyXG5jb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy92YWxpZGF0b3InKTtcclxuY29uc3QgbG9naW5GaWVsZHNTY2hlbWEgPSByZXF1aXJlKCcuLi9zY2hlbWFzL3NjaGVtYS11c2VyLXByb2ZpbGUnKS5sb2dpbkZpZWxkc1NjaGVtYTtcclxuY29uc3QgeyByZXNwb25kLCByZXNwb25kU3VjY2VzcywgcmVzcG9uZEZhaWx1cmUsIGV4dHJhY3REYXRhIH0gPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xyXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCB7IG1lc3NhZ2VzIH0gPSByZXF1aXJlKCcuLi91dGlscy9pMThuJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlci5nZXQoJy9hdXRoJywgYXV0aGVudGljYXRpb25IYW5kbGVyKTtcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC30LDQv9GA0L7RgdCwINC90LAg0LDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjRjiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuZnVuY3Rpb24gYXV0aGVudGljYXRpb25IYW5kbGVyKHJlcSwgcmVzKSB7XHJcblx0Y29uc3QgbG9jYWxlSWQgPSByZXEubG9jYWxlO1xyXG5cdGNvbnN0IGxvY2FsaXplZE1lc3NhZ2VzID0gbWVzc2FnZXNbbG9jYWxlSWRdO1xyXG5cdGNvbnN0IGxvZ2luRGF0YSA9IGV4dHJhY3REYXRhKGxvZ2luRmllbGRzU2NoZW1hLCByZXEucXVlcnkpO1xyXG5cdGxldCBsb2dpbkRhdGFWYWxpZCA9IHZhbGlkYXRvci52YWxpZGF0ZUFsbChsb2dpbkZpZWxkc1NjaGVtYSwgbG9naW5EYXRhKTtcclxuXHRpZiAoICEgbG9naW5EYXRhVmFsaWQgKSByZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy5hdXRoSW52YWxpZERhdGEuZm9ybWF0KCksIDQwNik7XHJcblx0VXNlclByb2ZpbGUuZmluZChsb2dpbkRhdGEsIFwiX2lkXCIsIChlcnIsIGRhdGEpID0+IHtcclxuXHRcdGlmICggZXJyIClcclxuXHRcdFx0cmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgZXJyKVxyXG5cdFx0ZWxzZSBpZiAoIGRhdGEubGVuZ3RoICE9PSAxIClcclxuXHRcdFx0cmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMuYXV0aFdyb25nQ3JlZGVudGlhbHMuZm9ybWF0KCksIDQwNCk7XHJcblxyXG5cdFx0Y29uc3QgdXNlciA9IGRhdGFbMF07XHJcblx0XHRjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgc3ViOiB1c2VyLl9pZCB9LCBjb25maWcuand0U2VjcmV0KTtcclxuXHRcdGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgYXV0aG9yaXplZCAke2xvZ2luRGF0YS51c2VybmFtZX1gKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uZFN1Y2Nlc3MocmVzLCB0b2tlbik7XHJcblx0fSk7XHJcbn0iLCJjb25zdCBVc2VyUHJvZmlsZSA9IHJlcXVpcmUoJy4uL21vZGVscy91c2VyLXByb2ZpbGUnKTtcclxuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZSgnLi4vdXRpbHMvdmFsaWRhdG9yJyk7XHJcbmNvbnN0IHsgcmVzcG9uZCwgcmVzcG9uZEZhaWx1cmUsIGlzS2V5RGF0YVVuaXF1ZSB9ID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xyXG5jb25zdCB7IG1lc3NhZ2VzIH0gPSByZXF1aXJlKCcuLi91dGlscy9pMThuJyk7XHJcbi8vIGNvbnN0IHsgYXBwcm92YWJsZUZpZWxkc1NjaGVtYSB9ID0gcmVxdWlyZShcImVzbVwiKShtb2R1bGUpKCcuLi9zY2hlbWFzL3NjaGVtYS11c2VyLXByb2ZpbGUnKTtcclxuLy8gaW1wb3J0IHsgYXBwcm92YWJsZUZpZWxkc1NjaGVtYSB9IGZyb20gJy4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZSc7XHJcbmNvbnN0IGFwcHJvdmFibGVGaWVsZHNTY2hlbWEgPSByZXF1aXJlKCcuLi9zY2hlbWFzL3NjaGVtYS11c2VyLXByb2ZpbGUnKS5hcHByb3ZhYmxlRmllbGRzU2NoZW1hO1xyXG5sZXQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlci5nZXQoJy9jaGVjay11bmlxdWVuZXNzJywgY2hlY2tVbmlxdWVuZXNzSGFuZGxlcik7XHJcblxyXG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQt9Cw0L/RgNC+0YHQsCDQvdCwINC/0YDQvtCy0LXRgNC60YMg0YPQvdC40LrQsNC70YzQvdC+0YHRgtC4XHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrVW5pcXVlbmVzc0hhbmRsZXIocmVxLCByZXMpIHtcclxuXHRjb25zdCBsb2NhbGVJZCA9IHJlcS5sb2NhbGU7XHJcblx0Y29uc3QgbG9jYWxpemVkTWVzc2FnZXMgPSBtZXNzYWdlc1tsb2NhbGVJZF07XHJcblx0Y29uc3QgbmFtZSA9IHJlcS5xdWVyeS5uYW1lO1xyXG5cdGNvbnN0IHZhbHVlID0gcmVxLnF1ZXJ5LnZhbHVlO1xyXG5cdGNvbnN0IGZpZWxkRGF0YSA9IHsgW25hbWVdOiB2YWx1ZSB9O1xyXG5cdGxldCBmaWVsZERhdGFWYWxpZCA9IHZhbGlkYXRvci52YWxpZGF0ZU9uZShhcHByb3ZhYmxlRmllbGRzU2NoZW1hLCBmaWVsZERhdGEpO1xyXG5cdGlmICggISBmaWVsZERhdGFWYWxpZCApIHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmludmFsaWRGb3JtYXQuZm9ybWF0KCksIDQwMCk7XHJcblx0XHJcblx0Y29uc3QgaXNVbmlxdWUgPSBhd2FpdCBpc0tleURhdGFVbmlxdWUoVXNlclByb2ZpbGUsIGZpZWxkRGF0YSk7XHJcblxyXG5cdHJldHVybiBpc1VuaXF1ZVxyXG5cdFx0PyByZXNwb25kKHJlcywgXCJBUFBST1ZFRFwiKVxyXG5cdFx0OiByZXNwb25kKHJlcywgXCJSRUpFQ1RFRFwiKVxyXG59OyIsImNvbnN0IHsgcmVzcG9uZFN1Y2Nlc3MsIHJlc3BvbmRGYWlsdXJlIH0gPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XHJcbmNvbnN0IHsgc2V0TG9jYWxlQ29va2llLCBtZXNzYWdlcyB9ID0gcmVxdWlyZSgnLi4vdXRpbHMvaTE4bicpO1xyXG5sZXQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgQWxsSHRtbEVudGl0aWVzID0gcmVxdWlyZSgnaHRtbC1lbnRpdGllcycpLkFsbEh0bWxFbnRpdGllcztcclxuY29uc3QgZW50aXRpZXMgPSBuZXcgQWxsSHRtbEVudGl0aWVzKCk7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIuZ2V0KCcvZ2V0LWxvY2FsZScsIGdldExvY2FsZUhhbmRsZXIpO1xyXG5cclxuXHJcbmxldCBsb2NhbGVEYXRhID0gW107XHJcblxyXG5bJ3J1J10uZm9yRWFjaCgobG9jYWxlKSA9PiB7XHJcblx0bGV0IG1lc3NhZ2VzID0gcmVxdWlyZShgLi4vcHVibGljL2xhbmcvJHtsb2NhbGV9Lmpzb25gKTtcclxuXHRmb3IgKCBsZXQga2V5IGluIG1lc3NhZ2VzICkge1xyXG5cdFx0bWVzc2FnZXNba2V5XSA9IGVudGl0aWVzLmRlY29kZShtZXNzYWdlc1trZXldKTtcclxuXHR9XHJcblx0bG9jYWxlRGF0YVtsb2NhbGVdID0ge1xyXG5cdFx0bG9jYWxlLFxyXG5cdFx0bWVzc2FnZXNcclxuXHRcdC8vIGZvcm1hdHM6IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCBgLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbG9jYWxlLWRhdGEvJHtsb2NhbGVJZH0uanNgKSkudG9TdHJpbmcoKVxyXG5cdH1cclxufSk7XHJcblxyXG4vLyBMb2NhbGUgcmVxdWVzdCBoYW5kbGVyXHJcbmZ1bmN0aW9uIGdldExvY2FsZUhhbmRsZXIocmVxLCByZXMpIHtcclxuXHRjb25zdCBjdXJyZW50TG9jYWxlSWQgPSByZXEubG9jYWxlO1xyXG5cdGNvbnN0IHdhbnRlZExvY2FsZUlkID0gcmVxLnF1ZXJ5LmlkO1xyXG5cdGNvbnN0IGxvY2FsaXplZE1lc3NhZ2VzID0gbWVzc2FnZXNbY3VycmVudExvY2FsZUlkXTtcclxuXHJcblx0aWYgKCAhIGxvY2FsZURhdGFbd2FudGVkTG9jYWxlSWRdIClcclxuXHRcdHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMubG9jYWxlTm90Rm91bmQuZm9ybWF0KCksIDQwNCk7XHJcblx0ZWxzZSB7XHJcblx0XHRzZXRMb2NhbGVDb29raWUocmVzLCB3YW50ZWRMb2NhbGVJZCk7XHJcblx0XHRyZXNwb25kU3VjY2VzcyhyZXMsIGxvY2FsZURhdGFbd2FudGVkTG9jYWxlSWRdKTtcclxuXHR9XHJcbn0iLCJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IFVzZXJQcm9maWxlID0gcmVxdWlyZShcIi4uL21vZGVscy91c2VyLXByb2ZpbGVcIik7XHJcbmNvbnN0IHZhbGlkYXRvciA9IHJlcXVpcmUoXCIuLi91dGlscy92YWxpZGF0b3JcIik7XHJcbmNvbnN0IHsgcmVzcG9uZFN1Y2Nlc3MsIHJlc3BvbmRGYWlsdXJlLCBleHRyYWN0RGF0YSB9ID0gcmVxdWlyZShcIi4uL3V0aWxzL2hlbHBlcnNcIik7XHJcbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2kxOG4nKTtcclxuXHJcbmxldCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyLmdldCgnL2dldC11c2VyLXByb2ZpbGUnLCBnZXRVc2VyUHJvZmlsZUhhbmRsZXIpO1xyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0LfQsNC/0YDQvtGB0LAg0L3QsCDQv9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFINC/0YDQvtGE0LjQu9GPXHJcbmZ1bmN0aW9uIGdldFVzZXJQcm9maWxlSGFuZGxlcihyZXEsIHJlcykge1xyXG5cdFVzZXJQcm9maWxlLmZpbmRCeUlkKHJlcS51c2VyLnN1YiwgXCJ1c2VybmFtZSBlbWFpbCBiaXJ0aGRhdGUgcGhvbmUgbmV3c2xldHRlcnMgYmlvZ3JhcGh5IGZpcnN0bmFtZSBsYXN0bmFtZVwiLCAoZXJyLCBkYXRhKSA9PiB7XHJcblx0XHRpZiAoIGVyciApXHJcblx0XHRcdHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGVycik7XHJcblx0XHRlbHNlIGlmICggISBkYXRhICkge1xyXG5cdFx0XHRjb25zdCBsb2NhbGl6ZWRNZXNzYWdlcyA9IG1lc3NhZ2VzW3JlcS5sb2NhbGVdO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy5hdXRoV3JvbmdDcmVkZW50aWFscy5mb3JtYXQoKSwgNDA0KTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRsZXQgeyBfaWQsIHVzZXJuYW1lLCAuLi51c2VyUHJvZmlsZSB9ID0gZGF0YS50b09iamVjdCgpO1xyXG5cdFx0XHRjb25zdCBkb2VzUGhvdG9FeGlzdCA9IGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKCdwdWJsaWMvcGhvdG9zJywgYCR7ZGF0YS51c2VybmFtZX0uanBnYCkpO1xyXG5cdFx0XHR1c2VyUHJvZmlsZS5waG90byA9IGRvZXNQaG90b0V4aXN0XHJcblx0XHRcdFx0PyBgL3Bob3Rvcy8ke2RhdGEudXNlcm5hbWV9LmpwZ2BcclxuXHRcdFx0XHQ6ICcvYXNzZXRzL2ltZy9uby1waG90by5zdmcnO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3BvbmRTdWNjZXNzKHJlcywgdXNlclByb2ZpbGUpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gW1xyXG5cdHJlcXVpcmUoJy4vYXV0aCcpLFxyXG5cdHJlcXVpcmUoJy4vZ2V0LWxvY2FsZScpLFxyXG5cdHJlcXVpcmUoJy4vY2hlY2stdW5pcXVlbmVzcycpLFxyXG5cdHJlcXVpcmUoJy4vZ2V0LXVzZXItcHJvZmlsZScpLFxyXG5cdHJlcXVpcmUoJy4vcHV0LXVzZXItcHJvZmlsZScpLFxyXG5dIiwiY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3QgVXNlclByb2ZpbGUgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3VzZXItcHJvZmlsZVwiKTtcclxuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZhbGlkYXRvclwiKTtcclxuY29uc3QgeyByZXNwb25kU3VjY2VzcywgcmVzcG9uZEZhaWx1cmUsIGV4dHJhY3REYXRhLCBpc0tleURhdGFVbmlxdWUgfSA9IHJlcXVpcmUoXCIuLi91dGlscy9oZWxwZXJzXCIpO1xyXG5jb25zdCB7IG1lc3NhZ2VzIH0gPSByZXF1aXJlKCcuLi91dGlscy9pMThuJyk7XHJcbi8vIGNvbnN0IHsga2V5RmllbGRzU2NoZW1hLCBkZXRhaWxGaWVsZHNTY2hlbWEgfSA9IHJlcXVpcmUoXCJlc21cIikobW9kdWxlKShcIi4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZVwiKTtcclxuLy8gaW1wb3J0IHsga2V5RmllbGRzU2NoZW1hLCBkZXRhaWxGaWVsZHNTY2hlbWEgfSBmcm9tIFwiLi4vc2NoZW1hcy9zY2hlbWEtdXNlci1wcm9maWxlXCI7XHJcbmNvbnN0IHsga2V5RmllbGRzU2NoZW1hLCBkZXRhaWxGaWVsZHNTY2hlbWEgfSA9IHJlcXVpcmUoXCIuLi9zY2hlbWFzL3NjaGVtYS11c2VyLXByb2ZpbGVcIik7XHJcblxyXG5jb25zdCBtdWx0ZXIgPSByZXF1aXJlKCdtdWx0ZXInKTsgLy8g0L/QsNGA0YHQuNGCIG11bHRpcGFydC1mb3JtLWRhdGFcclxubGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0LfQsNCz0YDRg9C30LrQuCDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbmxldCB1cGxvYWRIYW5kbGVyID0gbXVsdGVyKHtcclxuXHRkZXN0OiBwYXRoLnJlc29sdmUoJ3VwbG9hZHMnKSxcclxuXHRsaW1pdHM6IHtcclxuXHRcdGZpbGVTaXplOiA1ICogMTAyNCAqIDEwMjQsXHJcblx0XHRmaWxlczogMSxcclxuXHRcdHBhcnRzOiAyMFxyXG5cdH0sXHJcblx0Ly8gZmlsZUZpbHRlcjogKHJlcSwgZmlsZSwgY2IpID0+IHtcclxuXHQvLyBcdGNvbnNvbGUubG9nKGZpbGUpO1xyXG5cdC8vIFx0Y2IobnVsbCwgdHJ1ZSk7XHJcblx0Ly8gfVxyXG59KS5zaW5nbGUoJ3Bob3RvJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlci5wb3N0KCcvcHV0LXVzZXItcHJvZmlsZScsIHVwbG9hZEhhbmRsZXIsIGRhdGFIYW5kbGVyKTtcclxuXHJcbi8vICDQntCx0YDQsNCx0L7RgtGH0LjQuiDQt9Cw0L/RgNC+0YHQsCDQvdCwINC00L7QsdCw0LLQu9C10L3QuNC1INC30LDQv9C40YHQuFxyXG5hc3luYyBmdW5jdGlvbiBkYXRhSGFuZGxlcihyZXEsIHJlcykge1xyXG5cdGNvbnN0IGxvY2FsaXplZE1lc3NhZ2VzID0gbWVzc2FnZXNbcmVxLmxvY2FsZV07XHJcblxyXG5cdC8vINCS0YvRgtCw0YHQutC40LLQsNC10Lwg0YHQvdCw0YfQsNC70LAg0LrQu9GO0Ycg0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0YPQvdC40LrQsNC70YzQvdC+0YHRgtC4INC30LDQv9C40YHQuFxyXG5cdGNvbnN0IGtleURhdGEgPSBleHRyYWN0RGF0YShrZXlGaWVsZHNTY2hlbWEsIHJlcS5ib2R5KTtcclxuXHRsZXQga2V5RGF0YVZhbGlkID0gdmFsaWRhdG9yLnZhbGlkYXRlQWxsKGtleUZpZWxkc1NjaGVtYSwga2V5RGF0YSk7XHJcblx0aWYgKCAhIGtleURhdGFWYWxpZCApIHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmludmFsaWRLZXlGaWVsZHNEYXRhLmZvcm1hdCgpLCA0MDYpO1xyXG5cclxuXHQvLyBDaGVjayBpZiB0aGUga2V5IGRhdGEgaXMgdW5pcXVlXHJcblx0Y29uc3QgaXNVbmlxdWUgPSBhd2FpdCBpc0tleURhdGFVbmlxdWUoVXNlclByb2ZpbGUsIGtleURhdGEpO1xyXG5cclxuXHRpZiAoICEgaXNVbmlxdWUgKVxyXG5cdFx0cmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMudXNlckFscmVhZHlFeGlzdHMuZm9ybWF0KCksIDQwOSk7XHJcblxyXG5cdGNvbnN0IGRldGFpbHNEYXRhID0gZXh0cmFjdERhdGEoZGV0YWlsRmllbGRzU2NoZW1hLCByZXEuYm9keSk7XHJcblx0Y29uc3QgZGV0YWlsc0ZpZWxkc1ZhbGlkID0gdmFsaWRhdG9yLnZhbGlkYXRlQWxsKGRldGFpbEZpZWxkc1NjaGVtYSwgZGV0YWlsc0RhdGEpO1xyXG5cdGlmICggIWRldGFpbHNGaWVsZHNWYWxpZCApIHtcclxuXHRcdHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmludmFsaWRGb3JtRGF0YS5mb3JtYXQoKSwgNDA2KTtcclxuXHR9XHJcblxyXG5cdGxldCB1c2VyID0gbmV3IFVzZXJQcm9maWxlKCk7XHJcblx0dXNlciA9IE9iamVjdC5hc3NpZ24odXNlciwga2V5RGF0YSwgZGV0YWlsc0RhdGEpO1xyXG5cdFxyXG5cdC8vIElmIGEgcGhvdG8gaXMgYXR0YWNoZWQsIG1vdmUgaXQgdG8gdGhlIHN0b3JhZ2VcclxuXHRpZiAoIHJlcS5maWxlICkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgdG1wVXBsb2FkZWRGaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShyZXEuZmlsZS5wYXRoKTtcclxuXHRcdFx0Y29uc3QgZHN0RmlsZVBhdGggPSBwYXRoLnJlc29sdmUoJ3B1YmxpYy9waG90b3MnLCBgJHt1c2VyLnVzZXJuYW1lfS5qcGdgKTtcclxuXHRcdFx0ZnMucmVuYW1lU3luYyh0bXBVcGxvYWRlZEZpbGVQYXRoLCBkc3RGaWxlUGF0aCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0cmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy5mYWlsZWRUb1NhdmVQaG90by5mb3JtYXQoe2Vyck1zZzogZXJyb3J9KSwgNTAwKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVzZXIuc2F2ZShlcnIgPT4ge1xyXG5cdFx0cmV0dXJuIGVyclxyXG5cdFx0XHQ/IHJlc3BvbmRGYWlsdXJlKHJlcywgZXJyLCA1MDApXHJcblx0XHRcdDogcmVzcG9uZFN1Y2Nlc3MocmVzKTtcclxuXHR9KTtcclxufSIsImNvbnN0IGp3dFNlY3JldCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJKdXN0IGEgcmFuZG9tIHVuaXF1ZSBzdHJpbmcgdG8gYmUgdXNlZCB3aXRoIEpXVFwiO1xyXG5jb25zdCBkYkhvc3QgPSBwcm9jZXNzLmVudi5EQl9IT1NUIHx8IFwibG9jYWxob3N0XCI7XHJcbmNvbnN0IGRiUG9ydCA9IHByb2Nlc3MuZW52LkRCX1BPUlQgfHwgMjcwMTc7XHJcbmNvbnN0IGRiVXNlciA9IHByb2Nlc3MuZW52LkRCX1VTRVIgfHwgXCJ1c2VyLXNlcnZpY2VcIjtcclxuY29uc3QgZGJQYXNzID0gcHJvY2Vzcy5lbnYuREJfUEFTUyB8fCBcImV4YW1wbGVcIjtcclxuY29uc3QgZGJOYW1lID0gcHJvY2Vzcy5lbnYuREJfTkFNRSB8fCBcImFwcFwiO1xyXG5jb25zdCBkYkNvbm5lY3Rpb25TdHJpbmcgPSBgbW9uZ29kYjovLyR7ZGJVc2VyfToke2RiUGFzc31AJHtkYkhvc3R9OiR7ZGJQb3J0fS8ke2RiTmFtZX1gO1xyXG5jb25zdCBhcGlQb3J0ID0gcHJvY2Vzcy5lbnYuQVBJX1BPUlQgfHwgODA7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRqd3RTZWNyZXQsIFxyXG5cdGRiQ29ubmVjdGlvblN0cmluZyxcclxuXHRhcGlQb3J0XHJcbn0iLCIvLyBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5cclxuLy8gcmVxdWlyZSgnQGJhYmVsL3JlZ2lzdGVyJykoe1xyXG4vLyBcdHJvb3RNb2RlOiBcInVwd2FyZFwiLFxyXG4vLyBcdC8vIGluY2x1ZGU6IFtcclxuLy8gIC8vICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuXCIpLFxyXG4vLyAgLy8gICAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL2Zyb250ZW5kLypcIiksXHJcbi8vICAvLyAgICBdLFxyXG4vLyB9KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zZXJ2ZXIuanMnKTsiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5cclxuLy8gVXNlciBwcm9maWxlIHNjaGVtYVxyXG5jb25zdCBEYXRhU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBpZDogTnVtYmVyLFxyXG4gICAgdXNlcm5hbWU6IFN0cmluZyxcclxuICAgIHBhc3N3b3JkOiBTdHJpbmcsXHJcbiAgICBlbWFpbDogU3RyaW5nLFxyXG4gICAgcGhvbmU6IFN0cmluZyxcclxuICAgIG5ld3NsZXR0ZXJzOiBCb29sZWFuLFxyXG4gICAgYmlydGhkYXRlOiBEYXRlLFxyXG4gICAgYmlvZ3JhcGh5OiBTdHJpbmcsXHJcbiAgICBmaXJzdG5hbWU6IFN0cmluZyxcclxuICAgIGxhc3RuYW1lOiBTdHJpbmcsXHJcbiAgICBwaG90bzogU3RyaW5nXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbChcIlVzZXJQcm9maWxlXCIsIERhdGFTY2hlbWEpOyIsInZhciBtYXAgPSB7XG5cdFwiLi9lbi5qc29uXCI6IFwiLi9zcmMvcHVibGljL2xhbmcvZW4uanNvblwiLFxuXHRcIi4vcnUuanNvblwiOiBcIi4vc3JjL3B1YmxpYy9sYW5nL3J1Lmpzb25cIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvcHVibGljL2xhbmcgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanNvbiRcIjsiLCJpbXBvcnQgdXNlcm5hbWVWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vVXNlcm5hbWUvVXNlcm5hbWUudmFsaWRhdG9yXCI7XHJcbmltcG9ydCBwYXNzd29yZFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9QYXNzd29yZC9QYXNzd29yZC52YWxpZGF0b3JcIjtcclxuaW1wb3J0IGVtYWlsVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0VtYWlsL0VtYWlsLnZhbGlkYXRvclwiO1xyXG5pbXBvcnQgcGhvbmVWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vUGhvbmUvUGhvbmUudmFsaWRhdG9yXCI7XHJcbmltcG9ydCBiaXJ0aGRhdGVWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vQmlydGhkYXRlL0JpcnRoZGF0ZS52YWxpZGF0b3JcIjtcclxuaW1wb3J0IGJpb2dyYXBoeVZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9CaW9ncmFwaHkvQmlvZ3JhcGh5LnZhbGlkYXRvclwiO1xyXG5pbXBvcnQgZmlyc3RuYW1lVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0ZpcnN0bmFtZS9GaXJzdG5hbWUudmFsaWRhdG9yXCI7XHJcbmltcG9ydCBsYXN0bmFtZVZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9MYXN0bmFtZS9MYXN0bmFtZS52YWxpZGF0b3JcIjtcclxuXHJcbmNvbnN0IGtleUZpZWxkc1NjaGVtYSA9IFtcclxuXHR7XHJcblx0XHRuYW1lOiBcInVzZXJuYW1lXCIsXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdHZhbGlkYXRvcjogdXNlcm5hbWVWYWxpZGF0b3JcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiZW1haWxcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiBlbWFpbFZhbGlkYXRvclxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJwaG9uZVwiLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHR2YWxpZGF0b3I6IHBob25lVmFsaWRhdG9yXHJcblx0fVxyXG5dO1xyXG5cclxuY29uc3QgZGV0YWlsRmllbGRzU2NoZW1hID0gW1xyXG5cdHtcclxuXHRcdG5hbWU6IFwicGFzc3dvcmRcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiBwYXNzd29yZFZhbGlkYXRvclxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJuZXdzbGV0dGVyc1wiLFxyXG5cdFx0cmVxdWlyZWQ6IGZhbHNlLFxyXG5cdFx0ZGVmYXVsdDogZmFsc2VcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiYmlydGhkYXRlXCIsXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdHZhbGlkYXRvcjogYmlydGhkYXRlVmFsaWRhdG9yXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcImJpb2dyYXBoeVwiLFxyXG5cdFx0cmVxdWlyZWQ6IGZhbHNlLFxyXG5cdFx0dmFsaWRhdG9yOiBiaW9ncmFwaHlWYWxpZGF0b3JcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiZmlyc3RuYW1lXCIsXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdHZhbGlkYXRvcjogZmlyc3RuYW1lVmFsaWRhdG9yXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcImxhc3RuYW1lXCIsXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdHZhbGlkYXRvcjogbGFzdG5hbWVWYWxpZGF0b3JcclxuXHR9XHJcbl07XHJcblxyXG5jb25zdCBsb2dpbkZpZWxkc1NjaGVtYSA9IFtdLmNvbmNhdChrZXlGaWVsZHNTY2hlbWFbMF0sIGRldGFpbEZpZWxkc1NjaGVtYVswXSk7XHJcblxyXG5jb25zdCBhbGxGaWVsZHNTY2hlbWEgPSBrZXlGaWVsZHNTY2hlbWEuY29uY2F0KGRldGFpbEZpZWxkc1NjaGVtYSk7XHJcblxyXG5jb25zdCBhcHByb3ZhYmxlRmllbGRzID0gW1xyXG5cdCd1c2VybmFtZScsXHJcblx0J2VtYWlsJyxcclxuXHQncGhvbmUnXHJcbl07XHJcbmNvbnN0IGFwcHJvdmFibGVGaWVsZHNTY2hlbWEgPSBhbGxGaWVsZHNTY2hlbWEuZmlsdGVyKCBmaWVsZFNjaGVtYSA9PiBhcHByb3ZhYmxlRmllbGRzLnNvbWUoIG5hbWUgPT4gZmllbGRTY2hlbWEubmFtZSA9PT0gbmFtZSApICk7XHJcblxyXG5cclxuZXhwb3J0IHtcclxuXHRsb2dpbkZpZWxkc1NjaGVtYSxcclxuXHRrZXlGaWVsZHNTY2hlbWEsXHJcblx0ZGV0YWlsRmllbGRzU2NoZW1hLFxyXG5cdGFsbEZpZWxkc1NjaGVtYSxcclxuXHRhcHByb3ZhYmxlRmllbGRzU2NoZW1hXHJcbn07IiwiY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKTtcclxuY29uc3QgZGIgPSByZXF1aXJlKCcuL3V0aWxzL2RiJykoKTtcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnLi91dGlscy9qd3QnKSgpO1xyXG5jb25zdCB7IGluaXQsIGVycm9ySGFuZGxlciB9ID0gcmVxdWlyZSgnLi91dGlscy9oZWxwZXJzJyk7XHJcbmNvbnN0IHsgbG9jYWxlSGFuZGxlciB9ID0gcmVxdWlyZSgnLi91dGlscy9pMThuJyk7XHJcbmNvbnN0IGFwaUhhbmRsZXJzID0gcmVxdWlyZSgnLi9hcGknKTtcclxuY29uc3QgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO1xyXG5jb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKFwiY29yc1wiKSgpOyAvLyBDcm9zcy1PcmlnaW4gUmVzb3VyY2UgU2hhcmluZ1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XHJcblxyXG5pbml0KCk7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG4vLyBCZWNhdXNlIHdlIHdhbnQgdG8gYWNjZXNzIHRoZSBBUEkgZnJvbSBhIHJlYWN0IGFwcGxpY2F0aW9uIHRoYXQgaXMgcHJvYmFibHkgc2VydmVkIGZyb20gYW5vdGhlciBvcmlnaW4sXHJcbi8vIHRoZSBzZXJ2ZXIgbmVlZHMgdG8gYWxsb3cgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzLiBUaGVyZWZvcmUgd2UgYXJlIGdvaW5nIHRvIHVzZSBhIHNpbXBsZSBtb2R1bGUgY2FsbGVkIENPUlMuXHJcbmFwcC51c2UoY29ycyk7XHJcblxyXG4vLyBUbyBwYXJzZSBjb29raWVzXHJcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xyXG5cclxuLy8gSGFuZGxlIGxvY2FsZVxyXG5hcHAudXNlKGxvY2FsZUhhbmRsZXIpO1xyXG5cclxuLy8gVXNlIEpXVCBhdXRoIHRvIHNlY3VyZSB0aGUgYXBpXHJcbmFwcC51c2Uoand0KTtcclxuXHJcbi8vIEFsbG93IHJlcXVlc3RzIGZvciBzdGF0aWMgcmVzb3VyY2VzIGZyb20gdGhpcyBmb2xkZXJcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJywge1xyXG5cdGluZGV4OiBcImluZGV4Lmh0bWxcIixcclxuXHRldGFnOiB0cnVlLCAvLyBqdXN0IGJlaW5nIGV4cGxpY2l0IGFib3V0IHRoZSBkZWZhdWx0XHJcblx0bGFzdE1vZGlmaWVkOiB0cnVlLCAgLy8ganVzdCBiZWluZyBleHBsaWNpdCBhYm91dCB0aGUgZGVmYXVsdFxyXG5cdHNldEhlYWRlcnM6IChyZXMsIHBhdGgpID0+IHtcclxuXHRcdGlmICggcGF0aC5lbmRzV2l0aCgnLmh0bWwnKSApIHtcclxuXHRcdFx0Ly8gYWxsIG9mIHRoZSBwcm9qZWN0J3MgSFRNTCBmaWxlcyBlbmQgaW4gLmh0bWxcclxuXHRcdFx0cmVzLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIH5wYXRoLmluZGV4T2YoJy9zdGF0aWMvJykgKSB7IC8vIHZlcnNpb25lZCBVUkxcclxuXHRcdFx0cmVzLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICdtYXgtYWdlPTMxNTM2MDAwJyk7IFxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG59KSk7XHJcblxyXG4vLyAob3B0aW9uYWwpIG9ubHkgbWFkZSBmb3IgbG9nZ2luZyBhbmRcclxuLy8gYm9keVBhcnNlciwgcGFyc2VzIHRoZSByZXF1ZXN0IGJvZHkgdG8gYmUgYSByZWFkYWJsZSBqc29uIGZvcm1hdFxyXG4vLyBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcbi8vIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGxvZ2dlcihcImRldlwiKSk7XHJcblxyXG4vLyBHbG9iYWwgZXJyb3IgaGFuZGxlclxyXG5hcHAudXNlKGVycm9ySGFuZGxlcik7XHJcblxyXG4vLyBBdHRhY2ggaGFuZGxlcnMgZm9yIEFQSSByZXF1ZXN0cyB3aXRoIHRoZSBwcmVmaXhcclxuYXBwLnVzZShcIi9hcGlcIiwgYXBpSGFuZGxlcnMpO1xyXG5cclxuLy8gVGhlIGZvbGxvd2luZyByb3V0ZXMgYXJlIGhhbmRsZWQgYnkgdGhlIGZyb250ZW5kJ3Mgc2luZ2xlIHBhZ2UgYXBwbGljYXRpb25cclxuLy8gSnVzdCBzZXJ2ZSBpbmRleC5odG1sIGluIHJldHVyblxyXG5hcHAuZ2V0KFsnL2xvZ2luJywgJy9zaWdudXAnLCAnL2Rhc2hib2FyZCddLCAocmVxLCByZXMpID0+IHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoJ3B1YmxpYy9pbmRleC5odG1sJykpKTtcclxuXHJcbi8vIEV4cG9zZSBhIHBvcnQgYW5kIHN0YXJ0IGxpc3RlbmluZ1xyXG5hcHAubGlzdGVuKGNvbmZpZy5hcGlQb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtjb25maWcuYXBpUG9ydH1gKSk7IiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuLi9jb25maWdcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRiQ29ubmVjdGlvbjtcclxuXHJcbmZ1bmN0aW9uIGNvbm5lY3QoKSB7XHJcblx0cmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QoXHJcblx0XHRjb25maWcuZGJDb25uZWN0aW9uU3RyaW5nLFxyXG5cdFx0e1xyXG5cdFx0XHR1c2VOZXdVcmxQYXJzZXI6IHRydWUsIC8vIHVzZSBuZXcgTW9uZ29EQiBkcml2ZXIgaW50ZXJmYWNlIChzZWUgZGV0YWlscyBoZXJlOiBodHRwczovL21vbmdvb3NlanMuY29tL2RvY3MvY29ubmVjdGlvbnMuaHRtbClcclxuXHRcdFx0cmVjb25uZWN0VHJpZXM6IE51bWJlci5NQVhfVkFMVUUsIC8vIG5ldmVyIHN0b3AgdHJ5aW5nIHRvIHJlY29ubmVjdFxyXG4gIFx0XHRcdHJlY29ubmVjdEludGVydmFsOiAxMDAwLCAvLyByZWNvbm5lY3QgZXZlcnkgc2Vjb25kXHJcblx0XHR9XHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGJDb25uZWN0aW9uKCkge1xyXG5cdGNvbnN0IGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcclxuXHRkYi5vbmNlKFwib3BlblwiLCAoKSA9PiBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2VcIikpO1xyXG5cdGRiLm9uKFwiZXJyb3JcIiwgKGVycm9yKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcIk1vbmdvREIgY29ubmVjdGlvbiBlcnJvcjogXCIsIGVycm9yKTtcclxuXHRcdGlmICggZXJyb3IuY29kZSA9PT0gJ0VDT05OUkVGVVNFRCcpIHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJSZWNvbm5lY3RpbmcuLi5cIik7XHJcblx0XHRcdFx0Y29ubmVjdCgpO1xyXG5cdFx0XHR9LCA1MDAwKTsgLy8gdHJ5IHJlY29ubmVjdGluZyBpbiA1IHNlY29uZHNcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Y29ubmVjdCgpO1xyXG59XHJcblxyXG5cclxuIiwiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCB7IG1lc3NhZ2VzIH0gPSByZXF1aXJlKCcuL2kxOG4nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGluaXQsXHJcblx0cmVzcG9uZCxcclxuXHRyZXNwb25kU3VjY2VzcyxcclxuXHRyZXNwb25kRmFpbHVyZSxcclxuXHRleHRyYWN0RGF0YSxcclxuXHRlcnJvckhhbmRsZXIsXHJcblx0aXNLZXlEYXRhVW5pcXVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcblx0bWtkaXJJZk5vdEV4aXN0cygndXBsb2FkcycpO1xyXG5cdG1rZGlySWZOb3RFeGlzdHMoJ3B1YmxpYy9waG90b3MnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWtkaXJJZk5vdEV4aXN0cyhyZWxhdGl2ZVBhdGgpIHtcclxuXHRjb25zdCBhYnNQYXRoID0gcGF0aC5yZXNvbHZlKHJlbGF0aXZlUGF0aCk7XHJcblx0aWYgKCAhIGZzLmV4aXN0c1N5bmMoYWJzUGF0aCkgKSB7XHJcblx0XHRmcy5ta2RpclN5bmMoYWJzUGF0aCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNwb25kKHJlcywgc3RhdHVzLCBkYXRhKSB7XHJcblx0Y29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHN0YXR1cywgZGF0YSB8fCAnW25vIGRhdGFdJyk7XHJcblx0cmV0dXJuIHJlcy5qc29uKHtcclxuXHRcdHN0YXR1cyxcclxuXHRcdGRhdGFcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzcG9uZFN1Y2Nlc3MocmVzLCBkYXRhKSB7XHJcblx0cmV0dXJuIHJlc3BvbmQocmVzLCBcIlNVQ0NFU1NcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbmRGYWlsdXJlKHJlcywgZXJyb3IsIGh0dHBTdGF0dXMgPSA0MDApIHtcclxuXHRjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xyXG5cdHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMpLmpzb24oe1xyXG5cdFx0c3RhdHVzOiBcIkZBSUxVUkVcIixcclxuXHRcdGRldGFpbHM6IGVycm9yXHJcblx0fSk7XHJcbn1cclxuXHJcbi8vINCS0YvRgtCw0YnQuNGC0Ywg0LfQsNC00LDQvdC90YvQtSDRgdGF0LXQvNC+0Lkg0L/QvtC70Y8g0LjQtyDRgtC10LvQsCDQt9Cw0L/RgNC+0YHQsCBzb3VyY2VcclxuZnVuY3Rpb24gZXh0cmFjdERhdGEoc2NoZW1hLCBzb3VyY2UpIHtcclxuXHRsZXQgZGF0YSA9IHt9O1xyXG5cdHNjaGVtYS5mb3JFYWNoKCBmaWVsZCA9PiBkYXRhW2ZpZWxkLm5hbWVdID0gc291cmNlW2ZpZWxkLm5hbWVdICk7XHJcblx0cmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XHJcblx0Y29uc3QgbG9jYWxpemVkTWVzc2FnZXMgPSBtZXNzYWdlc1tyZXEubG9jYWxlXTtcclxuXHJcbiAgICBpZiAoIHR5cGVvZiAoZXJyKSA9PT0gJ3N0cmluZycgKSB7XHJcbiAgICAgICAgLy8gY3VzdG9tIGFwcGxpY2F0aW9uIGVycm9yXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGVyci5uYW1lID09PSAnVW5hdXRob3JpemVkRXJyb3InICkge1xyXG4gICAgICAgIC8vIGp3dCBhdXRoZW50aWNhdGlvbiBlcnJvclxyXG4gICAgICAgIHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLnVuYXV0aG9yaXplZEVycm9yLmZvcm1hdCgpLCA0MDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRlZmF1bHQgdG8gNTAwIHNlcnZlciBlcnJvclxyXG4gICAgcmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgZXJyLm1lc3NhZ2UsIDUwMCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGlzS2V5RGF0YVVuaXF1ZShtb2RlbCwga2V5RGF0YSkge1xyXG5cdGxldCBhbHRlcm5hdGl2ZXMgPSBbXTtcclxuXHRmb3IgKCBsZXQga2V5IGluIGtleURhdGEgKSB7XHJcblx0XHRhbHRlcm5hdGl2ZXMucHVzaCh7IFtrZXldOiBrZXlEYXRhW2tleV0gfSk7XHJcblx0fVxyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBtb2RlbFxyXG5cdFx0LmZpbmQoeyAkb3I6IGFsdGVybmF0aXZlcyB9KVxyXG5cdCBcdC5zZWxlY3QoXCJfaWRcIilcclxuXHQgXHQuZXhlYygpO1xyXG5cclxuXHRyZXR1cm4gZGF0YS5sZW5ndGhcclxuXHRcdD8gZmFsc2VcclxuXHRcdDogdHJ1ZTtcclxufSIsImNvbnN0IEludGxNZXNzYWdlRm9ybWF0ID0gcmVxdWlyZSgnaW50bC1tZXNzYWdlZm9ybWF0Jyk7XHJcbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL2xhbmdzLmpzb24nKTtcclxuY29uc3QgYWNjZXB0TGFuZ3VhZ2UgPSByZXF1aXJlKCdhY2NlcHQtbGFuZ3VhZ2UnKTtcclxuY29uc3QgQWxsSHRtbEVudGl0aWVzID0gcmVxdWlyZSgnaHRtbC1lbnRpdGllcycpLkFsbEh0bWxFbnRpdGllcztcclxuY29uc3QgZW50aXRpZXMgPSBuZXcgQWxsSHRtbEVudGl0aWVzKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRtZXNzYWdlczogcHJlbG9hZE1lc3NhZ2VzKCksXHJcblx0bG9jYWxlSGFuZGxlcixcclxuXHRkZXRlY3RMb2NhbGUsXHJcblx0c2V0TG9jYWxlQ29va2llLFxyXG59XHJcblxyXG5hY2NlcHRMYW5ndWFnZS5sYW5ndWFnZXMoWydlbicsICdydSddKTtcclxuXHJcbmZ1bmN0aW9uIHByZWxvYWRNZXNzYWdlcygpIHtcclxuXHRsZXQgbWVzc2FnZXMgPSB7fTtcclxuXHRmb3IgKCBsZXQgbG9jYWxlSWQgaW4gdHJhbnNsYXRpb25zICkge1xyXG5cdFx0bWVzc2FnZXNbbG9jYWxlSWRdID0ge307XHJcblx0XHRmb3IgKCBsZXQga2V5IGluIHRyYW5zbGF0aW9uc1tsb2NhbGVJZF0gKSB7XHJcblx0XHRcdGxldCB2YWx1ZSA9IHRyYW5zbGF0aW9uc1tsb2NhbGVJZF1ba2V5XTtcclxuXHRcdFx0dmFsdWUgPSBlbnRpdGllcy5kZWNvZGUodmFsdWUpO1xyXG5cdFx0XHR2YWx1ZSA9IG5ldyBJbnRsTWVzc2FnZUZvcm1hdCh2YWx1ZSwgbG9jYWxlSWQpO1xyXG5cdFx0XHRtZXNzYWdlc1tsb2NhbGVJZF1ba2V5XSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbWVzc2FnZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvY2FsZUhhbmRsZXIocmVxLCByZXMsIG5leHQpIHtcclxuXHRjb25zdCBsb2NhbGVJZCA9IGRldGVjdExvY2FsZShyZXEpO1xyXG5cclxuXHQvLyBJZiB0aGUgbG9jYWxlIGlzIG5vdCB5ZXQgaW4gY29va2llc1xyXG5cdGlmICggISByZXEuY29va2llcy5sb2NhbGUgKVxyXG5cdFx0cmVzLmNvb2tpZSgnbG9jYWxlJywgbG9jYWxlSWQsIHsgbWF4QWdlOiAobmV3IERhdGUoKSAqIDAuMDAxKSArICgzNjUgKiAyNCAqIDM2MDApIH0pO1xyXG5cclxuXHRyZXEubG9jYWxlID0gbG9jYWxlSWQ7XHJcblx0bmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXRlY3RMb2NhbGUocmVxKSB7XHJcblx0Y29uc3QgY29va2llTG9jYWxlID0gcmVxLmNvb2tpZXMubG9jYWxlO1xyXG5cclxuXHRyZXR1cm4gYWNjZXB0TGFuZ3VhZ2UuZ2V0KGNvb2tpZUxvY2FsZSB8fCByZXEuaGVhZGVyc1snYWNjZXB0LWxhbmd1YWdlJ10pIHx8ICdlbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExvY2FsZUNvb2tpZShyZXMsIGxvY2FsZUlkKSB7XHJcblx0cmVzLmNvb2tpZSgnbG9jYWxlJywgbG9jYWxlSWQsIHsgbWF4QWdlOiAobmV3IERhdGUoKSAqIDAuMDAxKSArICgzNjUgKiAyNCAqIDM2MDApIH0pO1xyXG59IiwiY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XHJcbmNvbnN0IGV4cHJlc3NKd3QgPSByZXF1aXJlKCdleHByZXNzLWp3dCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBqd3Q7XHJcblxyXG5mdW5jdGlvbiBqd3QoKSB7XHJcbiAgICByZXR1cm4gZXhwcmVzc0p3dCh7IHNlY3JldDogY29uZmlnLmp3dFNlY3JldCB9KS51bmxlc3Moe1xyXG5cdCAgICAgICAgcGF0aDogW1xyXG5cdCAgICAgICAgICAgIC8vIHB1YmxpYyByb3V0ZXMgdGhhdCBkb24ndCByZXF1aXJlIGF1dGhlbnRpY2F0aW9uXHJcblx0ICAgICAgICAgICAgJy9hcGkvYXV0aCcsXHJcblx0ICAgICAgICAgICAgJy9hcGkvZ2V0LWxvY2FsZScsXHJcblx0ICAgICAgICAgICAgJy9hcGkvY2hlY2stdW5pcXVlbmVzcycsXHJcblx0ICAgICAgICAgICAgJy9hcGkvcHV0LXVzZXItcHJvZmlsZScsXHJcblx0ICAgICAgICAgICAgJy8nLFxyXG5cdCAgICAgICAgICAgIC9cXC9waG90b3NcXC8uK1xcLig/OmpwZ3xwbmcpJC8sXHJcblx0ICAgICAgICAgICAgL1xcL2kxOG5cXC8uKy8sXHJcblx0ICAgICAgICAgICAgL1xcL2Fzc2V0c1xcLy4rJC8sXHJcblx0ICAgICAgICAgICAgL1xcL3N0YXRpY1xcLy4rJC8sXHJcblx0ICAgICAgICAgICAgL1xcL1teL10rXFwuW14vXSskLyxcclxuXHQgICAgICAgICAgICAvXFwvbG9naW5cXC8/JC8sXHJcblx0ICAgICAgICAgICAgL1xcL3NpZ251cFxcLz8kLyxcclxuXHQgICAgICAgICAgICAvXFwvZGFzaGJvYXJkXFwvPyQvLFxyXG5cdCAgICAgICAgXVxyXG5cdCAgICB9KTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHZhbGlkYXRlQWxsLFxyXG5cdHZhbGlkYXRlT25lXHJcbn1cclxuXHJcbi8vINCk0YPQvdC60YbQuNGPINC/0YDQvtCy0LXRgNC60Lgg0YHQvtC+0YLQstC10YLRgdGC0LLQuNGPINC/0L7Qu9C10Lkg0LfQsNC00LDQvdC90L7QuSDRgdGF0LXQvNC1XHJcbmZ1bmN0aW9uIHZhbGlkYXRlKGFsZ29yaXRobSwgc2NoZW1lLCBkYXRhKSB7XHJcblx0cmV0dXJuIHNjaGVtZVthbGdvcml0aG1dKCBpdGVtID0+IHtcclxuXHRcdC8vINCV0YHQu9C4INC/0L7Qu9C1INC/0LXRgNC10LTQsNC90L5cclxuXHRcdGlmICggZGF0YVtpdGVtLm5hbWVdICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdHJldHVybiB0eXBlb2YgaXRlbS52YWxpZGF0b3IgPT09IFwiZnVuY3Rpb25cIiAvLyDQtdGB0LvQuCDQt9Cw0LTQsNC9INGE0L7RgNC80LDRgiwg0L/RgNC+0LLQtdGA0Y/QtdC8XHJcblx0XHRcdFx0PyBpdGVtLnZhbGlkYXRvcihkYXRhW2l0ZW0ubmFtZV0pXHJcblx0XHRcdFx0OiB0cnVlXHJcblx0XHR9XHJcblx0XHQvLyDQldGB0LvQuCDQvdC10YIsINC90L4g0L/QvtC70LUg0L7Qv9GG0LjQvtC90LDQu9GM0L3QvtC1XHJcblx0XHRlbHNlIGlmICggIWl0ZW0ucmVxdWlyZWQgKSByZXR1cm4gdHJ1ZTtcclxuXHR9KTtcclxufVxyXG5cclxuLy8g0J/RgNC+0LLQtdGA0Y/QtdGCINCy0YHQtSDQv9C+0LvRjyDQv9C+INGB0YXQtdC80LVcclxuZnVuY3Rpb24gdmFsaWRhdGVBbGwoc2NoZW1lLCBkYXRhKSB7XHJcblx0cmV0dXJuIHZhbGlkYXRlKCdldmVyeScsIHNjaGVtZSwgZGF0YSk7XHJcbn1cclxuXHJcbi8vINCf0YDQvtCy0LXRgNGP0LXRgiDRgtC+0LvRjNC60L4g0L7QtNC90L4g0L/QvtC70LUgKNC10YHQu9C4INC90YPQttC90L4g0L/RgNC+0LLQtdGA0LjRgtGMINC10LTQuNC90YHRgtCy0LXQvdC90L7QtSDQv9C+0LvQtSDQvdCwINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQtSDRgdGF0LXQvNC1KVxyXG5mdW5jdGlvbiB2YWxpZGF0ZU9uZSAoc2NoZW1lLCBpdGVtKSB7IFxyXG5cdHJldHVybiB2YWxpZGF0ZSgnc29tZScsIHNjaGVtZSwgaXRlbSk7XHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFjY2VwdC1sYW5ndWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWp3dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLWVudGl0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludGwtbWVzc2FnZWZvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm11bHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=