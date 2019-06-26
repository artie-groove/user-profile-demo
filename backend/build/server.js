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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vQmlvZ3JhcGh5L0Jpb2dyYXBoeS52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vQmlydGhkYXRlL0JpcnRoZGF0ZS52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vRW1haWwvRW1haWwudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0ZpcnN0bmFtZS9GaXJzdG5hbWUudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0xhc3RuYW1lL0xhc3RuYW1lLnZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9QYXNzd29yZC9QYXNzd29yZC52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vUGhvbmUvUGhvbmUudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL1VzZXJuYW1lL1VzZXJuYW1lLnZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9jaGVjay11bmlxdWVuZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ2V0LWxvY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2dldC11c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3B1dC11c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy91c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9sYW5nIHN5bmMgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvand0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWNjZXB0LWxhbmd1YWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1qd3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0bWwtZW50aXRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnRsLW1lc3NhZ2Vmb3JtYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlIiwic3RhdHVzQ29kZXMiLCJsZW5ndGgiLCJFX1RPT19MT05HIiwiRV9FTVBUWSIsImRhdGVGb3JtYXQiLCJpc0NvcnJlY3QiLCJ0ZXN0IiwiRV9JTlZBTElEX0ZPUk1BVCIsInRzQmlydGhkYXRlIiwiRGF0ZSIsInBhcnNlIiwiaXNOYU4iLCJ0c1RvZGF5Iiwibm93IiwiRV9UT09fRUFSTFkiLCJFX1RPT19PTEQiLCJlbWFpbFJlZ2V4IiwiaXNWYWxpZCIsImZpcnN0TGV0dGVyUmVnZXgiLCJjaGFyQXQiLCJFX0ZJUlNUX0xFVFRFUiIsIm5hbWVSZWdleCIsImxhc3RMZXR0ZXJSZWdleCIsIkVfTEFTVF9TWU1CT0wiLCJlbmRpbmdSZWdleCIsIkVfV1JPTkdfRU5ESU5HIiwiZ3JwTGV0dGVycyIsImdycERpZ2l0cyIsImdycFN5bWJvbHMiLCJmb3JtYXQiLCJyZWdleHAiLCJSZWdFeHAiLCJoYXNMZXR0ZXJzIiwiaGFzRGlnaXRzIiwiaGFzU3ltYm9scyIsIkVfSU5TVUZGSUNJRU5UIiwiRV9UT09fU0hPUlQiLCJmaXJzdFN5bWJvbFJlZ2V4IiwiRV9GSVJTVF9TWU1CT0wiLCJwaG9uZUxleGlzUmVnZXgiLCJFX0lOVkFMSURfQ0hBUlMiLCJwaG9uZUdyYW1tYXJSZWdleCIsInVzZXJuYW1lUmVnZXgiLCJjb25maWciLCJyZXF1aXJlIiwiVXNlclByb2ZpbGUiLCJ2YWxpZGF0b3IiLCJsb2dpbkZpZWxkc1NjaGVtYSIsInJlc3BvbmQiLCJyZXNwb25kU3VjY2VzcyIsInJlc3BvbmRGYWlsdXJlIiwiZXh0cmFjdERhdGEiLCJqd3QiLCJleHByZXNzIiwicm91dGVyIiwiUm91dGVyIiwibWVzc2FnZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0IiwiYXV0aGVudGljYXRpb25IYW5kbGVyIiwicmVxIiwicmVzIiwibG9jYWxlSWQiLCJsb2NhbGUiLCJsb2NhbGl6ZWRNZXNzYWdlcyIsImxvZ2luRGF0YSIsInF1ZXJ5IiwibG9naW5EYXRhVmFsaWQiLCJ2YWxpZGF0ZUFsbCIsImF1dGhJbnZhbGlkRGF0YSIsImZpbmQiLCJlcnIiLCJkYXRhIiwiYXV0aFdyb25nQ3JlZGVudGlhbHMiLCJ1c2VyIiwidG9rZW4iLCJzaWduIiwic3ViIiwiX2lkIiwiand0U2VjcmV0IiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwiaXNLZXlEYXRhVW5pcXVlIiwiYXBwcm92YWJsZUZpZWxkc1NjaGVtYSIsImNoZWNrVW5pcXVlbmVzc0hhbmRsZXIiLCJuYW1lIiwiZmllbGREYXRhIiwiZmllbGREYXRhVmFsaWQiLCJ2YWxpZGF0ZU9uZSIsImludmFsaWRGb3JtYXQiLCJpc1VuaXF1ZSIsInNldExvY2FsZUNvb2tpZSIsImZzIiwicGF0aCIsIkFsbEh0bWxFbnRpdGllcyIsImVudGl0aWVzIiwiZ2V0TG9jYWxlSGFuZGxlciIsImxvY2FsZURhdGEiLCJmb3JFYWNoIiwia2V5IiwiZGVjb2RlIiwiY3VycmVudExvY2FsZUlkIiwid2FudGVkTG9jYWxlSWQiLCJpZCIsImxvY2FsZU5vdEZvdW5kIiwiZ2V0VXNlclByb2ZpbGVIYW5kbGVyIiwiZmluZEJ5SWQiLCJ1c2VyUHJvZmlsZSIsInRvT2JqZWN0IiwiZG9lc1Bob3RvRXhpc3QiLCJleGlzdHNTeW5jIiwicmVzb2x2ZSIsInBob3RvIiwia2V5RmllbGRzU2NoZW1hIiwiZGV0YWlsRmllbGRzU2NoZW1hIiwibXVsdGVyIiwidXBsb2FkSGFuZGxlciIsImRlc3QiLCJsaW1pdHMiLCJmaWxlU2l6ZSIsImZpbGVzIiwicGFydHMiLCJzaW5nbGUiLCJwb3N0IiwiZGF0YUhhbmRsZXIiLCJrZXlEYXRhIiwiYm9keSIsImtleURhdGFWYWxpZCIsImludmFsaWRLZXlGaWVsZHNEYXRhIiwidXNlckFscmVhZHlFeGlzdHMiLCJkZXRhaWxzRGF0YSIsImRldGFpbHNGaWVsZHNWYWxpZCIsImludmFsaWRGb3JtRGF0YSIsIk9iamVjdCIsImFzc2lnbiIsImZpbGUiLCJ0bXBVcGxvYWRlZEZpbGVQYXRoIiwiZHN0RmlsZVBhdGgiLCJyZW5hbWVTeW5jIiwiZXJyb3IiLCJmYWlsZWRUb1NhdmVQaG90byIsImVyck1zZyIsIkVycm9yIiwic2F2ZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZGJIb3N0IiwiREJfSE9TVCIsImRiUG9ydCIsIkRCX1BPUlQiLCJkYlVzZXIiLCJEQl9VU0VSIiwiZGJQYXNzIiwiREJfUEFTUyIsImRiTmFtZSIsIkRCX05BTUUiLCJkYkNvbm5lY3Rpb25TdHJpbmciLCJhcGlQb3J0IiwiQVBJX1BPUlQiLCJtb25nb29zZSIsIlNjaGVtYSIsIkRhdGFTY2hlbWEiLCJOdW1iZXIiLCJTdHJpbmciLCJwYXNzd29yZCIsImVtYWlsIiwicGhvbmUiLCJuZXdzbGV0dGVycyIsIkJvb2xlYW4iLCJiaXJ0aGRhdGUiLCJiaW9ncmFwaHkiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInRpbWVzdGFtcHMiLCJtb2RlbCIsInJlcXVpcmVkIiwidXNlcm5hbWVWYWxpZGF0b3IiLCJlbWFpbFZhbGlkYXRvciIsInBob25lVmFsaWRhdG9yIiwicGFzc3dvcmRWYWxpZGF0b3IiLCJkZWZhdWx0IiwiYmlydGhkYXRlVmFsaWRhdG9yIiwiYmlvZ3JhcGh5VmFsaWRhdG9yIiwiZmlyc3RuYW1lVmFsaWRhdG9yIiwibGFzdG5hbWVWYWxpZGF0b3IiLCJjb25jYXQiLCJhbGxGaWVsZHNTY2hlbWEiLCJhcHByb3ZhYmxlRmllbGRzIiwiZmlsdGVyIiwiZmllbGRTY2hlbWEiLCJzb21lIiwiZGIiLCJpbml0IiwiZXJyb3JIYW5kbGVyIiwibG9jYWxlSGFuZGxlciIsImFwaUhhbmRsZXJzIiwiY29va2llUGFyc2VyIiwiY29ycyIsImxvZ2dlciIsImFwcCIsInVzZSIsInN0YXRpYyIsImluZGV4IiwiZXRhZyIsImxhc3RNb2RpZmllZCIsInNldEhlYWRlcnMiLCJlbmRzV2l0aCIsInNldEhlYWRlciIsImluZGV4T2YiLCJzZW5kRmlsZSIsImxpc3RlbiIsImRiQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJyZWNvbm5lY3RUcmllcyIsIk1BWF9WQUxVRSIsInJlY29ubmVjdEludGVydmFsIiwiY29ubmVjdGlvbiIsIm9uY2UiLCJvbiIsImNvZGUiLCJzZXRUaW1lb3V0IiwibWtkaXJJZk5vdEV4aXN0cyIsInJlbGF0aXZlUGF0aCIsImFic1BhdGgiLCJta2RpclN5bmMiLCJzdGF0dXMiLCJqc29uIiwiaHR0cFN0YXR1cyIsImRldGFpbHMiLCJzY2hlbWEiLCJzb3VyY2UiLCJmaWVsZCIsIm5leHQiLCJ1bmF1dGhvcml6ZWRFcnJvciIsIm1lc3NhZ2UiLCJhbHRlcm5hdGl2ZXMiLCJwdXNoIiwiJG9yIiwic2VsZWN0IiwiZXhlYyIsIkludGxNZXNzYWdlRm9ybWF0IiwidHJhbnNsYXRpb25zIiwiYWNjZXB0TGFuZ3VhZ2UiLCJwcmVsb2FkTWVzc2FnZXMiLCJkZXRlY3RMb2NhbGUiLCJsYW5ndWFnZXMiLCJjb29raWVzIiwiY29va2llIiwibWF4QWdlIiwiY29va2llTG9jYWxlIiwiaGVhZGVycyIsImV4cHJlc3NKd3QiLCJzZWNyZXQiLCJ1bmxlc3MiLCJhbGdvcml0aG0iLCJzY2hlbWUiLCJpdGVtIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FB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QUFJLElBQUk7QUFDakM7QUFDQSxRQUFLM0wsSUFBSSxDQUFDMkwsSUFBSSxDQUFDN0ssSUFBTixDQUFKLEtBQW9COEssU0FBekIsRUFBcUM7QUFDcEMsYUFBTyxPQUFPRCxJQUFJLENBQUN0TixTQUFaLEtBQTBCLFVBQTFCLENBQXFDO0FBQXJDLFFBQ0pzTixJQUFJLENBQUN0TixTQUFMLENBQWUyQixJQUFJLENBQUMyTCxJQUFJLENBQUM3SyxJQUFOLENBQW5CLENBREksR0FFSixJQUZIO0FBR0EsS0FKRCxDQUtBO0FBTEEsU0FNSyxJQUFLLENBQUM2SyxJQUFJLENBQUNsRixRQUFYLEVBQXNCLE9BQU8sSUFBUDtBQUMzQixHQVRNLENBQVA7QUFVQSxDLENBRUQ7OztBQUNBLFNBQVM3RyxXQUFULENBQXFCOEwsTUFBckIsRUFBNkIxTCxJQUE3QixFQUFtQztBQUNsQyxTQUFPM0UsUUFBUSxDQUFDLE9BQUQsRUFBVXFRLE1BQVYsRUFBa0IxTCxJQUFsQixDQUFmO0FBQ0EsQyxDQUVEOzs7QUFDQSxTQUFTaUIsV0FBVCxDQUFzQnlLLE1BQXRCLEVBQThCQyxJQUE5QixFQUFvQztBQUNuQyxTQUFPdFEsUUFBUSxDQUFDLE1BQUQsRUFBU3FRLE1BQVQsRUFBaUJDLElBQWpCLENBQWY7QUFDQSxDOzs7Ozs7Ozs7OztBQzNCRCw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2RlcyA9IHt9KSB7XHJcblx0Ly8g0L7Qs9GA0LDQvdC40YfQuNCy0LDQtdC8INC+0LHRitGR0Lwg0YLQtdC60YHRgtCwXHJcblx0aWYgKCB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiA0MDAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2RlcyA9IHt9KSB7XHJcblxyXG5cdC8vINCf0YPRgdGC0LDRjyDRgdGC0YDQvtC60LBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9FTVBUWTtcclxuXHJcblx0Ly8g0J3QtdCy0LXRgNC90YvQuSDRhNC+0YDQvNCw0YJcclxuXHRjb25zdCBkYXRlRm9ybWF0ID0gL15bMC05XXs0fS0oPzowWzEtOV18MVswMTJdKS0oPzowWzEtOV18WzEyXVswLTldfDNbMDFdKSQvO1xyXG5cdGNvbnN0IGlzQ29ycmVjdCA9IGRhdGVGb3JtYXQudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhaXNDb3JyZWN0IClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cclxuXHRjb25zdCB0c0JpcnRoZGF0ZSA9IERhdGUucGFyc2UodmFsdWUpO1xyXG5cdGlmICggaXNOYU4odHNCaXJ0aGRhdGUpIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cclxuXHRjb25zdCB0c1RvZGF5ID0gRGF0ZS5ub3coKTtcclxuXHRcclxuXHQvLyDQlNCw0YLQsCDQuNC3INCx0YPQtNGD0YnQtdCz0L5cclxuXHRpZiAoIHRzQmlydGhkYXRlID4gdHNUb2RheSApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fRUFSTFk7XHJcblx0XHJcblx0Ly8g0JzQsNC60YHQuNC80YPQvCAtIDE1MCDQu9C10YIgXHJcblx0aWYgKCB0c1RvZGF5IC0gdHNCaXJ0aGRhdGUgPiAxNTAgKiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19PTEQ7XHJcblxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2RlcyA9IHt9KSB7XHJcblxyXG5cdC8vINCf0YPRgdGC0LDRjyDRgdGC0YDQvtC60LBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9FTVBUWTtcclxuXHJcblx0Ly8g0JzQsNC60YHQuNC80YPQvCAtIDEwMCDRgdC40LzQstC+0LvQvtCyIFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID4gMTI4IClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cdFxyXG5cdC8vINCR0L7Qu9GM0YjQuNC90YHRgtCy0L4g0YDQsNC30YPQvNC90YvRhSDQsNC00YDQtdGB0L7QsiDRg9C00L7QstC70LXRgtCy0L7RgNGP0YIg0Y3RgtC+0LzRgyDRhNC+0YDQvNCw0YLRg1xyXG5cdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ2MTU1L2hvdy10by12YWxpZGF0ZS1hbi1lbWFpbC1hZGRyZXNzLWluLWphdmFzY3JpcHRcclxuXHRjb25zdCBlbWFpbFJlZ2V4ID0gL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kLztcclxuXHRsZXQgaXNWYWxpZCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0ZPUk1BVDtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHN0YXR1c0NvZGVzID0ge30pIHtcclxuXHJcblx0Ly8g0J/Rg9GB0YLQsNGPINGB0YLRgNC+0LrQsFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID09PSAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0VNUFRZO1xyXG5cclxuXHQvLyDQnNCw0LrRgdC40LzRg9C8IC0gNDAg0YHQuNC80LLQvtC70L7QsiBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDQwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cdFxyXG5cdC8vINCf0LXRgNCy0YvQuSDRgdC40LzQstC+0Lsg0LTQvtC70LbQtdC9INCx0YvRgtGMINC30LDQs9C70LDQstC90L7QuSDQsdGD0LrQstC+0LlcclxuXHRjb25zdCBmaXJzdExldHRlclJlZ2V4ID0gL15bQS1a0JAt0K/QgV0kLztcclxuXHRsZXQgaXNWYWxpZCA9IGZpcnN0TGV0dGVyUmVnZXgudGVzdCh2YWx1ZS5jaGFyQXQoMCkpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRklSU1RfTEVUVEVSO1xyXG5cdH1cdFx0XHJcblx0XHJcblx0Ly8g0JjQvNGPINC00L7Qu9C20L3QviDRgdC+0L7RgtCy0LXRgtGB0YLQstC+0LLQsNGC0Ywg0YTQvtGA0LzQsNGC0YNcdFxyXG5cdGNvbnN0IG5hbWVSZWdleCA9IC9eLlthLXrQsC3Rj9GRXSokLztcclxuXHRpc1ZhbGlkID0gbmFtZVJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblx0fVx0XHRcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgc3RhdHVzQ29kZXMgPSB7fSkge1xyXG5cclxuXHQvLyDQn9GD0YHRgtCw0Y8g0YHRgtGA0L7QutCwXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRU1QVFk7XHJcblxyXG5cdC8vINCc0LDQutGB0LjQvNGD0LwgLSA1MCDRgdC40LzQstC+0LvQvtCyIFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID4gNTAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfVE9PX0xPTkc7XHJcblx0XHJcblx0Ly8g0J/QtdGA0LLRi9C5INGB0LjQvNCy0L7QuyDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LfQsNCz0LvQsNCy0L3QvtC5INCx0YPQutCy0L7QuVxyXG5cdGNvbnN0IGZpcnN0TGV0dGVyUmVnZXggPSAvXltBLVrQkC3Qr9CBXSQvO1xyXG5cdGxldCBpc1ZhbGlkID0gZmlyc3RMZXR0ZXJSZWdleC50ZXN0KHZhbHVlLmNoYXJBdCgwKSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9GSVJTVF9MRVRURVI7XHJcblx0fVxyXG5cclxuXHQvLyDQn9C+0YHQu9C10LTQvdC40Lkg0YHQuNC80LLQvtC7INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQsdGD0LrQstC+0LlcclxuXHRjb25zdCBsYXN0TGV0dGVyUmVnZXggPSAvXlthLXrQsC3Rj9GRXSQvO1xyXG5cdGlzVmFsaWQgPSBsYXN0TGV0dGVyUmVnZXgudGVzdCh2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoLTEpKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0xBU1RfU1lNQk9MO1xyXG5cdH1cclxuXHJcblx0Ly8g0JzQuNC90LjQvNGD0Lwg0LTQstC1INCx0YPQutCy0Ysg0L/QvtGB0LvQtSDQtNC10YTQuNGB0LBcclxuXHRjb25zdCBlbmRpbmdSZWdleCA9IC8tW2EtetCwLdGP0ZFdJC87XHJcblx0aXNWYWxpZCA9IGVuZGluZ1JlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1dST05HX0VORElORztcclxuXHR9XHRcdFxyXG5cdFxyXG5cdC8vINCk0LDQvNC40LvQuNGPINC00L7Qu9C20L3QsCDRgdC+0L7RgtCy0LXRgtGB0YLQstC+0LLQsNGC0Ywg0YTQvtGA0LzQsNGC0YNcdFxyXG5cdGNvbnN0IG5hbWVSZWdleCA9IC9eW0EtWtCQLdCv0IFdWy1hLXrQsC3Rj9GRXSokLztcclxuXHRpc1ZhbGlkID0gbmFtZVJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2Rlcykge1xyXG5cclxuXHQvLyDQn9GD0YHRgtCw0Y8g0YHRgtGA0L7QutCwXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRU1QVFk7XHJcblxyXG5cdC8vINCc0LDQutGB0LjQvNGD0LwgLSAxMjgg0YHQuNC80LLQvtC70L7QsiBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDEyOCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHRcclxuXHRjb25zdCBncnBMZXR0ZXJzID0gXCJbYS16QS1aXVwiO1xyXG5cdGNvbnN0IGdycERpZ2l0cyA9IFwiWzAtOV1cIjtcclxuXHRjb25zdCBncnBTeW1ib2xzID0gXCJcIjtcclxuXHRjb25zdCBmb3JtYXQgPSBgKD86JHtncnBMZXR0ZXJzfT8ke2dycERpZ2l0c30/JHtncnBTeW1ib2xzfT8pK2A7XHJcblx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoZm9ybWF0KTtcclxuXHRyZWdleHAgPSAvXig/OlthLXpBLVpdfFswLTldfFstXywuJz48PSsmJSQjQCEqICkoflxcXS9cXFxce31dKSskLztcclxuXHRsZXQgaXNWYWxpZCA9IHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cdH1cclxuXHJcblx0Ly8g0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0LrQsNC6INC80LjQvdC40LzRg9C8INC00LLQtSDQs9GA0YPQv9C/0Ysg0YHQuNC80LLQvtC70L7QslxyXG5cdC8vIDEpINCx0YPQutCy0Ysg0LvQsNGC0LjQvdGB0LrQvtCz0L4g0LDQu9GE0LDQstC40YLQsFxyXG5cdC8vIDIpINGG0LjRhNGA0YtcclxuXHQvLyAzKSDRgdC/0LXRhtGB0LjQvNCy0L7Qu9GLXHJcblx0cmVnZXhwID0gL1thLXpBLVpdLztcclxuXHRjb25zdCBoYXNMZXR0ZXJzID0gcmVnZXhwLnRlc3QodmFsdWUpO1xyXG5cclxuXHRyZWdleHAgPSAvWzAtOV0vO1xyXG5cdGNvbnN0IGhhc0RpZ2l0cyA9IHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuXHJcblx0cmVnZXhwID0gL1stXywuJz48PSsmJSQjQCEqICkoflxcXS9cXFxce31dLztcclxuXHRjb25zdCBoYXNTeW1ib2xzID0gcmVnZXhwLnRlc3QodmFsdWUpO1xyXG5cclxuXHRpZiAoIGhhc0xldHRlcnMgKyBoYXNEaWdpdHMgKyBoYXNTeW1ib2xzIDwgMiApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlNVRkZJQ0lFTlQ7XHJcblxyXG5cdGlmICggdmFsdWUubGVuZ3RoIDwgOCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fU0hPUlQ7XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHN0YXR1c0NvZGVzID0ge30pIHtcclxuXHJcblx0Ly8g0J/Rg9GB0YLQsNGPINGB0YLRgNC+0LrQsFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID09PSAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0VNUFRZO1xyXG5cclxuXHQvLyDQnNCw0LrRgdC40LzRg9C8IC0gMzAg0YHQuNC80LLQvtC70L7QsiBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDMwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cdFxyXG5cdC8vINCf0LXRgNCy0YvQuSDRgdC40LzQstC+0Lsg0LTQvtC70LbQtdC9INCx0YvRgtGMINCx0YPQutCy0L7QuVxyXG5cdGNvbnN0IGZpcnN0U3ltYm9sUmVnZXggPSAvXlxcKy87XHJcblx0bGV0IGlzVmFsaWQgPSBmaXJzdFN5bWJvbFJlZ2V4LnRlc3QodmFsdWUuY2hhckF0KDApKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0ZJUlNUX1NZTUJPTDtcclxuXHR9XHJcblxyXG5cdC8vIE9ubHkgdmFsaWQgY2hhcmFjdGVyc1xyXG5cdGNvbnN0IHBob25lTGV4aXNSZWdleCA9IC9eWy0rIDAtOV0rJC87XHJcblx0aXNWYWxpZCA9IHBob25lTGV4aXNSZWdleC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfQ0hBUlM7XHJcblx0fVxyXG5cdFxyXG5cdC8vINCd0L7QvNC10YAg0LTQvtC70LbQtdC9INGB0L7QvtGC0LLQtdGC0YHRgtCy0L7QstCw0YLRjCDRhNC+0YDQvNCw0YLRg1x0XHJcblx0Y29uc3QgcGhvbmVHcmFtbWFyUmVnZXggPSAvXlxcK1swLTldezEsM30oPzooPzpbLSBdWzAtOV17Miw0fSl7Myw0fXxbLSBdP1swLTldezUsMTB9KSQvO1xyXG5cdGlzVmFsaWQgPSBwaG9uZUdyYW1tYXJSZWdleC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cdH1cclxuXHJcblx0Ly8g0JzQuNC90LjQvNGD0LwgLSA1INGB0LjQvNCy0L7Qu9C+0LJcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA8IDEwICkgXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fU0hPUlQ7XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHN0YXR1c0NvZGVzID0ge30pIHtcclxuXHJcblx0Ly8g0J/Rg9GB0YLQsNGPINGB0YLRgNC+0LrQsFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID09PSAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0VNUFRZO1xyXG5cclxuXHQvLyDQnNCw0LrRgdC40LzRg9C8IC0gMzAg0YHQuNC80LLQvtC70L7QsiBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDMwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cdFxyXG5cdC8vINCf0LXRgNCy0YvQuSDRgdC40LzQstC+0Lsg0LTQvtC70LbQtdC9INCx0YvRgtGMINCx0YPQutCy0L7QuVxyXG5cdGNvbnN0IGZpcnN0TGV0dGVyUmVnZXggPSAvXlthLXpdJC87XHJcblx0bGV0IGlzVmFsaWQgPSBmaXJzdExldHRlclJlZ2V4LnRlc3QodmFsdWUuY2hhckF0KDApKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0ZJUlNUX0xFVFRFUjtcclxuXHR9XHRcdFxyXG5cdFxyXG5cdC8vINCY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC+0YLQstC10YLRgdGC0LLQvtCy0LDRgtGMINGE0L7RgNC80LDRgtGDXHRcclxuXHRjb25zdCB1c2VybmFtZVJlZ2V4ID0gL15bLWEtejAtOV0rJC87XHJcblx0aXNWYWxpZCA9IHVzZXJuYW1lUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0ZPUk1BVDtcclxuXHR9XHJcblxyXG5cdC8vINCc0LjQvdC40LzRg9C8IC0gNSDRgdC40LzQstC+0LvQvtCyXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPCA1ICkgXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fU0hPUlQ7XHJcblxyXG5cdC8vINCf0L7RgdC70LXQtNC90LjQuSDRgdC40LzQstC+0LsgLSDQsdGD0LrQstCwINC40LvQuCDRhtC40YTRgNCwXHJcblx0Y29uc3QgbGFzdExldHRlclJlZ2V4ID0gL15bYS16MC05XSQvO1xyXG5cdGlzVmFsaWQgPSBsYXN0TGV0dGVyUmVnZXgudGVzdCh2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfTEFTVF9TWU1CT0w7XHJcblx0fVx0XHRcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iLCJjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcclxuY29uc3QgVXNlclByb2ZpbGUgPSByZXF1aXJlKCcuLi9tb2RlbHMvdXNlci1wcm9maWxlJyk7XHJcbmNvbnN0IHZhbGlkYXRvciA9IHJlcXVpcmUoJy4uL3V0aWxzL3ZhbGlkYXRvcicpO1xyXG5jb25zdCBsb2dpbkZpZWxkc1NjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZScpLmxvZ2luRmllbGRzU2NoZW1hO1xyXG5jb25zdCB7IHJlc3BvbmQsIHJlc3BvbmRTdWNjZXNzLCByZXNwb25kRmFpbHVyZSwgZXh0cmFjdERhdGEgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2kxOG4nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyLmdldCgnL2F1dGgnLCBhdXRoZW50aWNhdGlvbkhhbmRsZXIpO1xyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0LfQsNC/0YDQvtGB0LAg0L3QsCDQsNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNGOINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG5mdW5jdGlvbiBhdXRoZW50aWNhdGlvbkhhbmRsZXIocmVxLCByZXMpIHtcclxuXHRjb25zdCBsb2NhbGVJZCA9IHJlcS5sb2NhbGU7XHJcblx0Y29uc3QgbG9jYWxpemVkTWVzc2FnZXMgPSBtZXNzYWdlc1tsb2NhbGVJZF07XHJcblx0Y29uc3QgbG9naW5EYXRhID0gZXh0cmFjdERhdGEobG9naW5GaWVsZHNTY2hlbWEsIHJlcS5xdWVyeSk7XHJcblx0bGV0IGxvZ2luRGF0YVZhbGlkID0gdmFsaWRhdG9yLnZhbGlkYXRlQWxsKGxvZ2luRmllbGRzU2NoZW1hLCBsb2dpbkRhdGEpO1xyXG5cdGlmICggISBsb2dpbkRhdGFWYWxpZCApIHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmF1dGhJbnZhbGlkRGF0YS5mb3JtYXQoKSwgNDA2KTtcclxuXHRVc2VyUHJvZmlsZS5maW5kKGxvZ2luRGF0YSwgXCJfaWRcIiwgKGVyciwgZGF0YSkgPT4ge1xyXG5cdFx0aWYgKCBlcnIgKVxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBlcnIpXHJcblx0XHRlbHNlIGlmICggZGF0YS5sZW5ndGggIT09IDEgKVxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy5hdXRoV3JvbmdDcmVkZW50aWFscy5mb3JtYXQoKSwgNDA0KTtcclxuXHJcblx0XHRjb25zdCB1c2VyID0gZGF0YVswXTtcclxuXHRcdGNvbnN0IHRva2VuID0gand0LnNpZ24oeyBzdWI6IHVzZXIuX2lkIH0sIGNvbmZpZy5qd3RTZWNyZXQpO1xyXG5cdFx0Y29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBhdXRob3JpemVkICR7bG9naW5EYXRhLnVzZXJuYW1lfWApO1xyXG4gICAgICAgIHJldHVybiByZXNwb25kU3VjY2VzcyhyZXMsIHRva2VuKTtcclxuXHR9KTtcclxufSIsImNvbnN0IFVzZXJQcm9maWxlID0gcmVxdWlyZSgnLi4vbW9kZWxzL3VzZXItcHJvZmlsZScpO1xyXG5jb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy92YWxpZGF0b3InKTtcclxuY29uc3QgeyByZXNwb25kLCByZXNwb25kRmFpbHVyZSwgaXNLZXlEYXRhVW5pcXVlIH0gPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XHJcbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2kxOG4nKTtcclxuLy8gY29uc3QgeyBhcHByb3ZhYmxlRmllbGRzU2NoZW1hIH0gPSByZXF1aXJlKFwiZXNtXCIpKG1vZHVsZSkoJy4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZScpO1xyXG4vLyBpbXBvcnQgeyBhcHByb3ZhYmxlRmllbGRzU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hcy9zY2hlbWEtdXNlci1wcm9maWxlJztcclxuY29uc3QgYXBwcm92YWJsZUZpZWxkc1NjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZScpLmFwcHJvdmFibGVGaWVsZHNTY2hlbWE7XHJcbmxldCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyLmdldCgnL2NoZWNrLXVuaXF1ZW5lc3MnLCBjaGVja1VuaXF1ZW5lc3NIYW5kbGVyKTtcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC30LDQv9GA0L7RgdCwINC90LAg0L/RgNC+0LLQtdGA0LrRgyDRg9C90LjQutCw0LvRjNC90L7RgdGC0LhcclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tVbmlxdWVuZXNzSGFuZGxlcihyZXEsIHJlcykge1xyXG5cdGNvbnN0IGxvY2FsZUlkID0gcmVxLmxvY2FsZTtcclxuXHRjb25zdCBsb2NhbGl6ZWRNZXNzYWdlcyA9IG1lc3NhZ2VzW2xvY2FsZUlkXTtcclxuXHRjb25zdCBuYW1lID0gcmVxLnF1ZXJ5Lm5hbWU7XHJcblx0Y29uc3QgdmFsdWUgPSByZXEucXVlcnkudmFsdWU7XHJcblx0Y29uc3QgZmllbGREYXRhID0geyBbbmFtZV06IHZhbHVlIH07XHJcblx0bGV0IGZpZWxkRGF0YVZhbGlkID0gdmFsaWRhdG9yLnZhbGlkYXRlT25lKGFwcHJvdmFibGVGaWVsZHNTY2hlbWEsIGZpZWxkRGF0YSk7XHJcblx0aWYgKCAhIGZpZWxkRGF0YVZhbGlkICkgcmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMuaW52YWxpZEZvcm1hdC5mb3JtYXQoKSwgNDAwKTtcclxuXHRcclxuXHRjb25zdCBpc1VuaXF1ZSA9IGF3YWl0IGlzS2V5RGF0YVVuaXF1ZShVc2VyUHJvZmlsZSwgZmllbGREYXRhKTtcclxuXHJcblx0cmV0dXJuIGlzVW5pcXVlXHJcblx0XHQ/IHJlc3BvbmQocmVzLCBcIkFQUFJPVkVEXCIpXHJcblx0XHQ6IHJlc3BvbmQocmVzLCBcIlJFSkVDVEVEXCIpXHJcbn07IiwiY29uc3QgeyByZXNwb25kU3VjY2VzcywgcmVzcG9uZEZhaWx1cmUgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcclxuY29uc3QgeyBzZXRMb2NhbGVDb29raWUsIG1lc3NhZ2VzIH0gPSByZXF1aXJlKCcuLi91dGlscy9pMThuJyk7XHJcbmxldCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCBBbGxIdG1sRW50aXRpZXMgPSByZXF1aXJlKCdodG1sLWVudGl0aWVzJykuQWxsSHRtbEVudGl0aWVzO1xyXG5jb25zdCBlbnRpdGllcyA9IG5ldyBBbGxIdG1sRW50aXRpZXMoKTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlci5nZXQoJy9nZXQtbG9jYWxlJywgZ2V0TG9jYWxlSGFuZGxlcik7XHJcblxyXG5cclxubGV0IGxvY2FsZURhdGEgPSBbXTtcclxuXHJcblsncnUnXS5mb3JFYWNoKChsb2NhbGUpID0+IHtcclxuXHRsZXQgbWVzc2FnZXMgPSByZXF1aXJlKGAuLi9wdWJsaWMvbGFuZy8ke2xvY2FsZX0uanNvbmApO1xyXG5cdGZvciAoIGxldCBrZXkgaW4gbWVzc2FnZXMgKSB7XHJcblx0XHRtZXNzYWdlc1trZXldID0gZW50aXRpZXMuZGVjb2RlKG1lc3NhZ2VzW2tleV0pO1xyXG5cdH1cclxuXHRsb2NhbGVEYXRhW2xvY2FsZV0gPSB7XHJcblx0XHRsb2NhbGUsXHJcblx0XHRtZXNzYWdlc1xyXG5cdFx0Ly8gZm9ybWF0czogZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsIGAuLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50bC9sb2NhbGUtZGF0YS8ke2xvY2FsZUlkfS5qc2ApKS50b1N0cmluZygpXHJcblx0fVxyXG59KTtcclxuXHJcbi8vIExvY2FsZSByZXF1ZXN0IGhhbmRsZXJcclxuZnVuY3Rpb24gZ2V0TG9jYWxlSGFuZGxlcihyZXEsIHJlcykge1xyXG5cdGNvbnN0IGN1cnJlbnRMb2NhbGVJZCA9IHJlcS5sb2NhbGU7XHJcblx0Y29uc3Qgd2FudGVkTG9jYWxlSWQgPSByZXEucXVlcnkuaWQ7XHJcblx0Y29uc3QgbG9jYWxpemVkTWVzc2FnZXMgPSBtZXNzYWdlc1tjdXJyZW50TG9jYWxlSWRdO1xyXG5cclxuXHRpZiAoICEgbG9jYWxlRGF0YVt3YW50ZWRMb2NhbGVJZF0gKVxyXG5cdFx0cmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy5sb2NhbGVOb3RGb3VuZC5mb3JtYXQoKSwgNDA0KTtcclxuXHRlbHNlIHtcclxuXHRcdHNldExvY2FsZUNvb2tpZShyZXMsIHdhbnRlZExvY2FsZUlkKTtcclxuXHRcdHJlc3BvbmRTdWNjZXNzKHJlcywgbG9jYWxlRGF0YVt3YW50ZWRMb2NhbGVJZF0pO1xyXG5cdH1cclxufSIsImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgVXNlclByb2ZpbGUgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3VzZXItcHJvZmlsZVwiKTtcclxuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZhbGlkYXRvclwiKTtcclxuY29uc3QgeyByZXNwb25kU3VjY2VzcywgcmVzcG9uZEZhaWx1cmUsIGV4dHJhY3REYXRhIH0gPSByZXF1aXJlKFwiLi4vdXRpbHMvaGVscGVyc1wiKTtcclxuY29uc3QgeyBtZXNzYWdlcyB9ID0gcmVxdWlyZSgnLi4vdXRpbHMvaTE4bicpO1xyXG5cclxubGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIuZ2V0KCcvZ2V0LXVzZXItcHJvZmlsZScsIGdldFVzZXJQcm9maWxlSGFuZGxlcik7XHJcblxyXG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQt9Cw0L/RgNC+0YHQsCDQvdCwINC/0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L/RgNC+0YTQuNC70Y9cclxuZnVuY3Rpb24gZ2V0VXNlclByb2ZpbGVIYW5kbGVyKHJlcSwgcmVzKSB7XHJcblx0VXNlclByb2ZpbGUuZmluZEJ5SWQocmVxLnVzZXIuc3ViLCBcInVzZXJuYW1lIGVtYWlsIGJpcnRoZGF0ZSBwaG9uZSBuZXdzbGV0dGVycyBiaW9ncmFwaHkgZmlyc3RuYW1lIGxhc3RuYW1lXCIsIChlcnIsIGRhdGEpID0+IHtcclxuXHRcdGlmICggZXJyIClcclxuXHRcdFx0cmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgZXJyKTtcclxuXHRcdGVsc2UgaWYgKCAhIGRhdGEgKSB7XHJcblx0XHRcdGNvbnN0IGxvY2FsaXplZE1lc3NhZ2VzID0gbWVzc2FnZXNbcmVxLmxvY2FsZV07XHJcblx0XHRcdHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmF1dGhXcm9uZ0NyZWRlbnRpYWxzLmZvcm1hdCgpLCA0MDQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGxldCB7IF9pZCwgdXNlcm5hbWUsIC4uLnVzZXJQcm9maWxlIH0gPSBkYXRhLnRvT2JqZWN0KCk7XHJcblx0XHRcdGNvbnN0IGRvZXNQaG90b0V4aXN0ID0gZnMuZXhpc3RzU3luYyhwYXRoLnJlc29sdmUoJ3B1YmxpYy9waG90b3MnLCBgJHtkYXRhLnVzZXJuYW1lfS5qcGdgKSk7XHJcblx0XHRcdHVzZXJQcm9maWxlLnBob3RvID0gZG9lc1Bob3RvRXhpc3RcclxuXHRcdFx0XHQ/IGAvcGhvdG9zLyR7ZGF0YS51c2VybmFtZX0uanBnYFxyXG5cdFx0XHRcdDogJy9hc3NldHMvaW1nL25vLXBob3RvLnN2Zyc7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uZFN1Y2Nlc3MocmVzLCB1c2VyUHJvZmlsZSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBbXHJcblx0cmVxdWlyZSgnLi9hdXRoJyksXHJcblx0cmVxdWlyZSgnLi9nZXQtbG9jYWxlJyksXHJcblx0cmVxdWlyZSgnLi9jaGVjay11bmlxdWVuZXNzJyksXHJcblx0cmVxdWlyZSgnLi9nZXQtdXNlci1wcm9maWxlJyksXHJcblx0cmVxdWlyZSgnLi9wdXQtdXNlci1wcm9maWxlJyksXHJcbl0iLCJjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5jb25zdCBVc2VyUHJvZmlsZSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvdXNlci1wcm9maWxlXCIpO1xyXG5jb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKFwiLi4vdXRpbHMvdmFsaWRhdG9yXCIpO1xyXG5jb25zdCB7IHJlc3BvbmRTdWNjZXNzLCByZXNwb25kRmFpbHVyZSwgZXh0cmFjdERhdGEsIGlzS2V5RGF0YVVuaXF1ZSB9ID0gcmVxdWlyZShcIi4uL3V0aWxzL2hlbHBlcnNcIik7XHJcbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2kxOG4nKTtcclxuY29uc3QgeyBrZXlGaWVsZHNTY2hlbWEsIGRldGFpbEZpZWxkc1NjaGVtYSB9ID0gcmVxdWlyZShcIi4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZVwiKTtcclxuXHJcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpOyAvLyDQv9Cw0YDRgdC40YIgbXVsdGlwYXJ0LWZvcm0tZGF0YVxyXG5sZXQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQt9Cw0LPRgNGD0LfQutC4INC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxubGV0IHVwbG9hZEhhbmRsZXIgPSBtdWx0ZXIoe1xyXG5cdGRlc3Q6IHBhdGgucmVzb2x2ZSgndXBsb2FkcycpLFxyXG5cdGxpbWl0czoge1xyXG5cdFx0ZmlsZVNpemU6IDUgKiAxMDI0ICogMTAyNCxcclxuXHRcdGZpbGVzOiAxLFxyXG5cdFx0cGFydHM6IDIwXHJcblx0fSxcclxuXHQvLyBmaWxlRmlsdGVyOiAocmVxLCBmaWxlLCBjYikgPT4ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coZmlsZSk7XHJcblx0Ly8gXHRjYihudWxsLCB0cnVlKTtcclxuXHQvLyB9XHJcbn0pLnNpbmdsZSgncGhvdG8nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyLnBvc3QoJy9wdXQtdXNlci1wcm9maWxlJywgdXBsb2FkSGFuZGxlciwgZGF0YUhhbmRsZXIpO1xyXG5cclxuLy8gINCe0LHRgNCw0LHQvtGC0YfQuNC6INC30LDQv9GA0L7RgdCwINC90LAg0LTQvtCx0LDQstC70LXQvdC40LUg0LfQsNC/0LjRgdC4XHJcbmFzeW5jIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKHJlcSwgcmVzKSB7XHJcblx0Y29uc3QgbG9jYWxpemVkTWVzc2FnZXMgPSBtZXNzYWdlc1tyZXEubG9jYWxlXTtcclxuXHJcblx0Ly8g0JLRi9GC0LDRgdC60LjQstCw0LXQvCDRgdC90LDRh9Cw0LvQsCDQutC70Y7RhyDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCDRg9C90LjQutCw0LvRjNC90L7RgdGC0Lgg0LfQsNC/0LjRgdC4XHJcblx0Y29uc3Qga2V5RGF0YSA9IGV4dHJhY3REYXRhKGtleUZpZWxkc1NjaGVtYSwgcmVxLmJvZHkpO1xyXG5cdGxldCBrZXlEYXRhVmFsaWQgPSB2YWxpZGF0b3IudmFsaWRhdGVBbGwoa2V5RmllbGRzU2NoZW1hLCBrZXlEYXRhKTtcclxuXHRpZiAoICEga2V5RGF0YVZhbGlkICkgcmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMuaW52YWxpZEtleUZpZWxkc0RhdGEuZm9ybWF0KCksIDQwNik7XHJcblxyXG5cdC8vIENoZWNrIGlmIHRoZSBrZXkgZGF0YSBpcyB1bmlxdWVcclxuXHRjb25zdCBpc1VuaXF1ZSA9IGF3YWl0IGlzS2V5RGF0YVVuaXF1ZShVc2VyUHJvZmlsZSwga2V5RGF0YSk7XHJcblxyXG5cdGlmICggISBpc1VuaXF1ZSApXHJcblx0XHRyZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy51c2VyQWxyZWFkeUV4aXN0cy5mb3JtYXQoKSwgNDA5KTtcclxuXHJcblx0Y29uc3QgZGV0YWlsc0RhdGEgPSBleHRyYWN0RGF0YShkZXRhaWxGaWVsZHNTY2hlbWEsIHJlcS5ib2R5KTtcclxuXHRjb25zdCBkZXRhaWxzRmllbGRzVmFsaWQgPSB2YWxpZGF0b3IudmFsaWRhdGVBbGwoZGV0YWlsRmllbGRzU2NoZW1hLCBkZXRhaWxzRGF0YSk7XHJcblx0aWYgKCAhZGV0YWlsc0ZpZWxkc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMuaW52YWxpZEZvcm1EYXRhLmZvcm1hdCgpLCA0MDYpO1xyXG5cdH1cclxuXHJcblx0bGV0IHVzZXIgPSBuZXcgVXNlclByb2ZpbGUoKTtcclxuXHR1c2VyID0gT2JqZWN0LmFzc2lnbih1c2VyLCBrZXlEYXRhLCBkZXRhaWxzRGF0YSk7XHJcblx0XHJcblx0Ly8gSWYgYSBwaG90byBpcyBhdHRhY2hlZCwgbW92ZSBpdCB0byB0aGUgc3RvcmFnZVxyXG5cdGlmICggcmVxLmZpbGUgKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCB0bXBVcGxvYWRlZEZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKHJlcS5maWxlLnBhdGgpO1xyXG5cdFx0XHRjb25zdCBkc3RGaWxlUGF0aCA9IHBhdGgucmVzb2x2ZSgncHVibGljL3Bob3RvcycsIGAke3VzZXIudXNlcm5hbWV9LmpwZ2ApO1xyXG5cdFx0XHRmcy5yZW5hbWVTeW5jKHRtcFVwbG9hZGVkRmlsZVBhdGgsIGRzdEZpbGVQYXRoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRyZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmZhaWxlZFRvU2F2ZVBob3RvLmZvcm1hdCh7ZXJyTXNnOiBlcnJvcn0pLCA1MDApO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXNlci5zYXZlKGVyciA9PiB7XHJcblx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdD8gcmVzcG9uZEZhaWx1cmUocmVzLCBlcnIsIDUwMClcclxuXHRcdFx0OiByZXNwb25kU3VjY2VzcyhyZXMpO1xyXG5cdH0pO1xyXG59IiwiY29uc3Qgand0U2VjcmV0ID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCBcIkp1c3QgYSByYW5kb20gdW5pcXVlIHN0cmluZyB0byBiZSB1c2VkIHdpdGggSldUXCI7XHJcbmNvbnN0IGRiSG9zdCA9IHByb2Nlc3MuZW52LkRCX0hPU1QgfHwgXCJsb2NhbGhvc3RcIjtcclxuY29uc3QgZGJQb3J0ID0gcHJvY2Vzcy5lbnYuREJfUE9SVCB8fCAyNzAxNztcclxuY29uc3QgZGJVc2VyID0gcHJvY2Vzcy5lbnYuREJfVVNFUiB8fCBcInVzZXItc2VydmljZVwiO1xyXG5jb25zdCBkYlBhc3MgPSBwcm9jZXNzLmVudi5EQl9QQVNTIHx8IFwiZXhhbXBsZVwiO1xyXG5jb25zdCBkYk5hbWUgPSBwcm9jZXNzLmVudi5EQl9OQU1FIHx8IFwiYXBwXCI7XHJcbmNvbnN0IGRiQ29ubmVjdGlvblN0cmluZyA9IGBtb25nb2RiOi8vJHtkYlVzZXJ9OiR7ZGJQYXNzfUAke2RiSG9zdH06JHtkYlBvcnR9LyR7ZGJOYW1lfWA7XHJcbmNvbnN0IGFwaVBvcnQgPSBwcm9jZXNzLmVudi5BUElfUE9SVCB8fCA4MDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGp3dFNlY3JldCwgXHJcblx0ZGJDb25uZWN0aW9uU3RyaW5nLFxyXG5cdGFwaVBvcnRcclxufSIsIi8vIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG4vLyByZXF1aXJlKCdAYmFiZWwvcmVnaXN0ZXInKSh7XHJcbi8vIFx0cm9vdE1vZGU6IFwidXB3YXJkXCIsXHJcbi8vIFx0Ly8gaW5jbHVkZTogW1xyXG4vLyAgLy8gICAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi5cIiksXHJcbi8vICAvLyAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vZnJvbnRlbmQvKlwiKSxcclxuLy8gIC8vICAgIF0sXHJcbi8vIH0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NlcnZlci5qcycpOyIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcblxyXG4vLyBVc2VyIHByb2ZpbGUgc2NoZW1hXHJcbmNvbnN0IERhdGFTY2hlbWEgPSBuZXcgU2NoZW1hKFxyXG4gIHtcclxuICAgIGlkOiBOdW1iZXIsXHJcbiAgICB1c2VybmFtZTogU3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IFN0cmluZyxcclxuICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICBwaG9uZTogU3RyaW5nLFxyXG4gICAgbmV3c2xldHRlcnM6IEJvb2xlYW4sXHJcbiAgICBiaXJ0aGRhdGU6IERhdGUsXHJcbiAgICBiaW9ncmFwaHk6IFN0cmluZyxcclxuICAgIGZpcnN0bmFtZTogU3RyaW5nLFxyXG4gICAgbGFzdG5hbWU6IFN0cmluZyxcclxuICAgIHBob3RvOiBTdHJpbmdcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKFwiVXNlclByb2ZpbGVcIiwgRGF0YVNjaGVtYSk7IiwidmFyIG1hcCA9IHtcblx0XCIuL2VuLmpzb25cIjogXCIuL3NyYy9wdWJsaWMvbGFuZy9lbi5qc29uXCIsXG5cdFwiLi9ydS5qc29uXCI6IFwiLi9zcmMvcHVibGljL2xhbmcvcnUuanNvblwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9wdWJsaWMvbGFuZyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qc29uJFwiOyIsImltcG9ydCB1c2VybmFtZVZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9Vc2VybmFtZS9Vc2VybmFtZS52YWxpZGF0b3JcIjtcclxuaW1wb3J0IHBhc3N3b3JkVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL1Bhc3N3b3JkL1Bhc3N3b3JkLnZhbGlkYXRvclwiO1xyXG5pbXBvcnQgZW1haWxWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vRW1haWwvRW1haWwudmFsaWRhdG9yXCI7XHJcbmltcG9ydCBwaG9uZVZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9QaG9uZS9QaG9uZS52YWxpZGF0b3JcIjtcclxuaW1wb3J0IGJpcnRoZGF0ZVZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9CaXJ0aGRhdGUvQmlydGhkYXRlLnZhbGlkYXRvclwiO1xyXG5pbXBvcnQgYmlvZ3JhcGh5VmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0Jpb2dyYXBoeS9CaW9ncmFwaHkudmFsaWRhdG9yXCI7XHJcbmltcG9ydCBmaXJzdG5hbWVWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vRmlyc3RuYW1lL0ZpcnN0bmFtZS52YWxpZGF0b3JcIjtcclxuaW1wb3J0IGxhc3RuYW1lVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0xhc3RuYW1lL0xhc3RuYW1lLnZhbGlkYXRvclwiO1xyXG5cclxuY29uc3Qga2V5RmllbGRzU2NoZW1hID0gW1xyXG5cdHtcclxuXHRcdG5hbWU6IFwidXNlcm5hbWVcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiB1c2VybmFtZVZhbGlkYXRvclxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJlbWFpbFwiLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHR2YWxpZGF0b3I6IGVtYWlsVmFsaWRhdG9yXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcInBob25lXCIsXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdHZhbGlkYXRvcjogcGhvbmVWYWxpZGF0b3JcclxuXHR9XHJcbl07XHJcblxyXG5jb25zdCBkZXRhaWxGaWVsZHNTY2hlbWEgPSBbXHJcblx0e1xyXG5cdFx0bmFtZTogXCJwYXNzd29yZFwiLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHR2YWxpZGF0b3I6IHBhc3N3b3JkVmFsaWRhdG9yXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcIm5ld3NsZXR0ZXJzXCIsXHJcblx0XHRyZXF1aXJlZDogZmFsc2UsXHJcblx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJiaXJ0aGRhdGVcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiBiaXJ0aGRhdGVWYWxpZGF0b3JcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiYmlvZ3JhcGh5XCIsXHJcblx0XHRyZXF1aXJlZDogZmFsc2UsXHJcblx0XHR2YWxpZGF0b3I6IGJpb2dyYXBoeVZhbGlkYXRvclxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJmaXJzdG5hbWVcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiBmaXJzdG5hbWVWYWxpZGF0b3JcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwibGFzdG5hbWVcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiBsYXN0bmFtZVZhbGlkYXRvclxyXG5cdH1cclxuXTtcclxuXHJcbmNvbnN0IGxvZ2luRmllbGRzU2NoZW1hID0gW10uY29uY2F0KGtleUZpZWxkc1NjaGVtYVswXSwgZGV0YWlsRmllbGRzU2NoZW1hWzBdKTtcclxuXHJcbmNvbnN0IGFsbEZpZWxkc1NjaGVtYSA9IGtleUZpZWxkc1NjaGVtYS5jb25jYXQoZGV0YWlsRmllbGRzU2NoZW1hKTtcclxuXHJcbmNvbnN0IGFwcHJvdmFibGVGaWVsZHMgPSBbXHJcblx0J3VzZXJuYW1lJyxcclxuXHQnZW1haWwnLFxyXG5cdCdwaG9uZSdcclxuXTtcclxuY29uc3QgYXBwcm92YWJsZUZpZWxkc1NjaGVtYSA9IGFsbEZpZWxkc1NjaGVtYS5maWx0ZXIoIGZpZWxkU2NoZW1hID0+IGFwcHJvdmFibGVGaWVsZHMuc29tZSggbmFtZSA9PiBmaWVsZFNjaGVtYS5uYW1lID09PSBuYW1lICkgKTtcclxuXHJcblxyXG5leHBvcnQge1xyXG5cdGxvZ2luRmllbGRzU2NoZW1hLFxyXG5cdGtleUZpZWxkc1NjaGVtYSxcclxuXHRkZXRhaWxGaWVsZHNTY2hlbWEsXHJcblx0YWxsRmllbGRzU2NoZW1hLFxyXG5cdGFwcHJvdmFibGVGaWVsZHNTY2hlbWFcclxufTsiLCJjb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xyXG5jb25zdCBkYiA9IHJlcXVpcmUoJy4vdXRpbHMvZGInKSgpO1xyXG5jb25zdCBqd3QgPSByZXF1aXJlKCcuL3V0aWxzL2p3dCcpKCk7XHJcbmNvbnN0IHsgaW5pdCwgZXJyb3JIYW5kbGVyIH0gPSByZXF1aXJlKCcuL3V0aWxzL2hlbHBlcnMnKTtcclxuY29uc3QgeyBsb2NhbGVIYW5kbGVyIH0gPSByZXF1aXJlKCcuL3V0aWxzL2kxOG4nKTtcclxuY29uc3QgYXBpSGFuZGxlcnMgPSByZXF1aXJlKCcuL2FwaScpO1xyXG5jb25zdCBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJyk7XHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpKCk7IC8vIENyb3NzLU9yaWdpbiBSZXNvdXJjZSBTaGFyaW5nXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3QgbG9nZ2VyID0gcmVxdWlyZShcIm1vcmdhblwiKTtcclxuXHJcbmluaXQoKTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbi8vIEJlY2F1c2Ugd2Ugd2FudCB0byBhY2Nlc3MgdGhlIEFQSSBmcm9tIGEgcmVhY3QgYXBwbGljYXRpb24gdGhhdCBpcyBwcm9iYWJseSBzZXJ2ZWQgZnJvbSBhbm90aGVyIG9yaWdpbixcclxuLy8gdGhlIHNlcnZlciBuZWVkcyB0byBhbGxvdyBjcm9zcy1vcmlnaW4gcmVxdWVzdHMuIFRoZXJlZm9yZSB3ZSBhcmUgZ29pbmcgdG8gdXNlIGEgc2ltcGxlIG1vZHVsZSBjYWxsZWQgQ09SUy5cclxuYXBwLnVzZShjb3JzKTtcclxuXHJcbi8vIFRvIHBhcnNlIGNvb2tpZXNcclxuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XHJcblxyXG4vLyBIYW5kbGUgbG9jYWxlXHJcbmFwcC51c2UobG9jYWxlSGFuZGxlcik7XHJcblxyXG4vLyBVc2UgSldUIGF1dGggdG8gc2VjdXJlIHRoZSBhcGlcclxuYXBwLnVzZShqd3QpO1xyXG5cclxuLy8gQWxsb3cgcmVxdWVzdHMgZm9yIHN0YXRpYyByZXNvdXJjZXMgZnJvbSB0aGlzIGZvbGRlclxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnLCB7XHJcblx0aW5kZXg6IFwiaW5kZXguaHRtbFwiLFxyXG5cdGV0YWc6IHRydWUsIC8vIGp1c3QgYmVpbmcgZXhwbGljaXQgYWJvdXQgdGhlIGRlZmF1bHRcclxuXHRsYXN0TW9kaWZpZWQ6IHRydWUsICAvLyBqdXN0IGJlaW5nIGV4cGxpY2l0IGFib3V0IHRoZSBkZWZhdWx0XHJcblx0c2V0SGVhZGVyczogKHJlcywgcGF0aCkgPT4ge1xyXG5cdFx0aWYgKCBwYXRoLmVuZHNXaXRoKCcuaHRtbCcpICkge1xyXG5cdFx0XHQvLyBhbGwgb2YgdGhlIHByb2plY3QncyBIVE1MIGZpbGVzIGVuZCBpbiAuaHRtbFxyXG5cdFx0XHRyZXMuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggfnBhdGguaW5kZXhPZignL3N0YXRpYy8nKSApIHsgLy8gdmVyc2lvbmVkIFVSTFxyXG5cdFx0XHRyZXMuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ21heC1hZ2U9MzE1MzYwMDAnKTsgXHJcblx0XHR9XHJcblx0fSxcclxuXHJcbn0pKTtcclxuXHJcbi8vIChvcHRpb25hbCkgb25seSBtYWRlIGZvciBsb2dnaW5nIGFuZFxyXG4vLyBib2R5UGFyc2VyLCBwYXJzZXMgdGhlIHJlcXVlc3QgYm9keSB0byBiZSBhIHJlYWRhYmxlIGpzb24gZm9ybWF0XHJcbi8vIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuLy8gYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UobG9nZ2VyKFwiZGV2XCIpKTtcclxuXHJcbi8vIEdsb2JhbCBlcnJvciBoYW5kbGVyXHJcbmFwcC51c2UoZXJyb3JIYW5kbGVyKTtcclxuXHJcbi8vIEF0dGFjaCBoYW5kbGVycyBmb3IgQVBJIHJlcXVlc3RzIHdpdGggdGhlIHByZWZpeFxyXG5hcHAudXNlKFwiL2FwaVwiLCBhcGlIYW5kbGVycyk7XHJcblxyXG4vLyBUaGUgZm9sbG93aW5nIHJvdXRlcyBhcmUgaGFuZGxlZCBieSB0aGUgZnJvbnRlbmQncyBzaW5nbGUgcGFnZSBhcHBsaWNhdGlvblxyXG4vLyBKdXN0IHNlcnZlIGluZGV4Lmh0bWwgaW4gcmV0dXJuXHJcbmFwcC5nZXQoWycvbG9naW4nLCAnL3NpZ251cCcsICcvZGFzaGJvYXJkJ10sIChyZXEsIHJlcykgPT4gcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZSgncHVibGljL2luZGV4Lmh0bWwnKSkpO1xyXG5cclxuLy8gRXhwb3NlIGEgcG9ydCBhbmQgc3RhcnQgbGlzdGVuaW5nXHJcbmFwcC5saXN0ZW4oY29uZmlnLmFwaVBvcnQsICgpID0+IGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke2NvbmZpZy5hcGlQb3J0fWApKTsiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGJDb25uZWN0aW9uO1xyXG5cclxuZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuXHRyZXR1cm4gbW9uZ29vc2UuY29ubmVjdChcclxuXHRcdGNvbmZpZy5kYkNvbm5lY3Rpb25TdHJpbmcsXHJcblx0XHR7XHJcblx0XHRcdHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgLy8gdXNlIG5ldyBNb25nb0RCIGRyaXZlciBpbnRlcmZhY2UgKHNlZSBkZXRhaWxzIGhlcmU6IGh0dHBzOi8vbW9uZ29vc2Vqcy5jb20vZG9jcy9jb25uZWN0aW9ucy5odG1sKVxyXG5cdFx0XHRyZWNvbm5lY3RUcmllczogTnVtYmVyLk1BWF9WQUxVRSwgLy8gbmV2ZXIgc3RvcCB0cnlpbmcgdG8gcmVjb25uZWN0XHJcbiAgXHRcdFx0cmVjb25uZWN0SW50ZXJ2YWw6IDEwMDAsIC8vIHJlY29ubmVjdCBldmVyeSBzZWNvbmRcclxuXHRcdH1cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYkNvbm5lY3Rpb24oKSB7XHJcblx0Y29uc3QgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cdGRiLm9uY2UoXCJvcGVuXCIsICgpID0+IGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZVwiKSk7XHJcblx0ZGIub24oXCJlcnJvclwiLCAoZXJyb3IpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOiBcIiwgZXJyb3IpO1xyXG5cdFx0aWYgKCBlcnJvci5jb2RlID09PSAnRUNPTk5SRUZVU0VEJykge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlJlY29ubmVjdGluZy4uLlwiKTtcclxuXHRcdFx0XHRjb25uZWN0KCk7XHJcblx0XHRcdH0sIDUwMDApOyAvLyB0cnkgcmVjb25uZWN0aW5nIGluIDUgc2Vjb25kc1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRjb25uZWN0KCk7XHJcbn1cclxuXHJcblxyXG4iLCJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHJlcXVpcmUoJy4vaTE4bicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aW5pdCxcclxuXHRyZXNwb25kLFxyXG5cdHJlc3BvbmRTdWNjZXNzLFxyXG5cdHJlc3BvbmRGYWlsdXJlLFxyXG5cdGV4dHJhY3REYXRhLFxyXG5cdGVycm9ySGFuZGxlcixcclxuXHRpc0tleURhdGFVbmlxdWVcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRta2RpcklmTm90RXhpc3RzKCd1cGxvYWRzJyk7XHJcblx0bWtkaXJJZk5vdEV4aXN0cygncHVibGljL3Bob3RvcycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBta2RpcklmTm90RXhpc3RzKHJlbGF0aXZlUGF0aCkge1xyXG5cdGNvbnN0IGFic1BhdGggPSBwYXRoLnJlc29sdmUocmVsYXRpdmVQYXRoKTtcclxuXHRpZiAoICEgZnMuZXhpc3RzU3luYyhhYnNQYXRoKSApIHtcclxuXHRcdGZzLm1rZGlyU3luYyhhYnNQYXRoKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbmQocmVzLCBzdGF0dXMsIGRhdGEpIHtcclxuXHRjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgc3RhdHVzLCBkYXRhIHx8ICdbbm8gZGF0YV0nKTtcclxuXHRyZXR1cm4gcmVzLmpzb24oe1xyXG5cdFx0c3RhdHVzLFxyXG5cdFx0ZGF0YVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNwb25kU3VjY2VzcyhyZXMsIGRhdGEpIHtcclxuXHRyZXR1cm4gcmVzcG9uZChyZXMsIFwiU1VDQ0VTU1wiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzcG9uZEZhaWx1cmUocmVzLCBlcnJvciwgaHR0cFN0YXR1cyA9IDQwMCkge1xyXG5cdGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCBlcnJvcik7XHJcblx0cmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cykuanNvbih7XHJcblx0XHRzdGF0dXM6IFwiRkFJTFVSRVwiLFxyXG5cdFx0ZGV0YWlsczogZXJyb3JcclxuXHR9KTtcclxufVxyXG5cclxuLy8g0JLRi9GC0LDRidC40YLRjCDQt9Cw0LTQsNC90L3Ri9C1INGB0YXQtdC80L7QuSDQv9C+0LvRjyDQuNC3INGC0LXQu9CwINC30LDQv9GA0L7RgdCwIHNvdXJjZVxyXG5mdW5jdGlvbiBleHRyYWN0RGF0YShzY2hlbWEsIHNvdXJjZSkge1xyXG5cdGxldCBkYXRhID0ge307XHJcblx0c2NoZW1hLmZvckVhY2goIGZpZWxkID0+IGRhdGFbZmllbGQubmFtZV0gPSBzb3VyY2VbZmllbGQubmFtZV0gKTtcclxuXHRyZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXJyb3JIYW5kbGVyKGVyciwgcmVxLCByZXMsIG5leHQpIHtcclxuXHRjb25zdCBsb2NhbGl6ZWRNZXNzYWdlcyA9IG1lc3NhZ2VzW3JlcS5sb2NhbGVdO1xyXG5cclxuICAgIGlmICggdHlwZW9mIChlcnIpID09PSAnc3RyaW5nJyApIHtcclxuICAgICAgICAvLyBjdXN0b20gYXBwbGljYXRpb24gZXJyb3JcclxuICAgICAgICByZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggZXJyLm5hbWUgPT09ICdVbmF1dGhvcml6ZWRFcnJvcicgKSB7XHJcbiAgICAgICAgLy8gand0IGF1dGhlbnRpY2F0aW9uIGVycm9yXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMudW5hdXRob3JpemVkRXJyb3IuZm9ybWF0KCksIDQwMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVmYXVsdCB0byA1MDAgc2VydmVyIGVycm9yXHJcbiAgICByZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBlcnIubWVzc2FnZSwgNTAwKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaXNLZXlEYXRhVW5pcXVlKG1vZGVsLCBrZXlEYXRhKSB7XHJcblx0bGV0IGFsdGVybmF0aXZlcyA9IFtdO1xyXG5cdGZvciAoIGxldCBrZXkgaW4ga2V5RGF0YSApIHtcclxuXHRcdGFsdGVybmF0aXZlcy5wdXNoKHsgW2tleV06IGtleURhdGFba2V5XSB9KTtcclxuXHR9XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IG1vZGVsXHJcblx0XHQuZmluZCh7ICRvcjogYWx0ZXJuYXRpdmVzIH0pXHJcblx0IFx0LnNlbGVjdChcIl9pZFwiKVxyXG5cdCBcdC5leGVjKCk7XHJcblxyXG5cdHJldHVybiBkYXRhLmxlbmd0aFxyXG5cdFx0PyBmYWxzZVxyXG5cdFx0OiB0cnVlO1xyXG59IiwiY29uc3QgSW50bE1lc3NhZ2VGb3JtYXQgPSByZXF1aXJlKCdpbnRsLW1lc3NhZ2Vmb3JtYXQnKTtcclxuY29uc3QgdHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vbGFuZ3MuanNvbicpO1xyXG5jb25zdCBhY2NlcHRMYW5ndWFnZSA9IHJlcXVpcmUoJ2FjY2VwdC1sYW5ndWFnZScpO1xyXG5jb25zdCBBbGxIdG1sRW50aXRpZXMgPSByZXF1aXJlKCdodG1sLWVudGl0aWVzJykuQWxsSHRtbEVudGl0aWVzO1xyXG5jb25zdCBlbnRpdGllcyA9IG5ldyBBbGxIdG1sRW50aXRpZXMoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG1lc3NhZ2VzOiBwcmVsb2FkTWVzc2FnZXMoKSxcclxuXHRsb2NhbGVIYW5kbGVyLFxyXG5cdGRldGVjdExvY2FsZSxcclxuXHRzZXRMb2NhbGVDb29raWUsXHJcbn1cclxuXHJcbmFjY2VwdExhbmd1YWdlLmxhbmd1YWdlcyhbJ2VuJywgJ3J1J10pO1xyXG5cclxuZnVuY3Rpb24gcHJlbG9hZE1lc3NhZ2VzKCkge1xyXG5cdGxldCBtZXNzYWdlcyA9IHt9O1xyXG5cdGZvciAoIGxldCBsb2NhbGVJZCBpbiB0cmFuc2xhdGlvbnMgKSB7XHJcblx0XHRtZXNzYWdlc1tsb2NhbGVJZF0gPSB7fTtcclxuXHRcdGZvciAoIGxldCBrZXkgaW4gdHJhbnNsYXRpb25zW2xvY2FsZUlkXSApIHtcclxuXHRcdFx0bGV0IHZhbHVlID0gdHJhbnNsYXRpb25zW2xvY2FsZUlkXVtrZXldO1xyXG5cdFx0XHR2YWx1ZSA9IGVudGl0aWVzLmRlY29kZSh2YWx1ZSk7XHJcblx0XHRcdHZhbHVlID0gbmV3IEludGxNZXNzYWdlRm9ybWF0KHZhbHVlLCBsb2NhbGVJZCk7XHJcblx0XHRcdG1lc3NhZ2VzW2xvY2FsZUlkXVtrZXldID0gdmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBtZXNzYWdlcztcclxufVxyXG5cclxuZnVuY3Rpb24gbG9jYWxlSGFuZGxlcihyZXEsIHJlcywgbmV4dCkge1xyXG5cdGNvbnN0IGxvY2FsZUlkID0gZGV0ZWN0TG9jYWxlKHJlcSk7XHJcblxyXG5cdC8vIElmIHRoZSBsb2NhbGUgaXMgbm90IHlldCBpbiBjb29raWVzXHJcblx0aWYgKCAhIHJlcS5jb29raWVzLmxvY2FsZSApXHJcblx0XHRyZXMuY29va2llKCdsb2NhbGUnLCBsb2NhbGVJZCwgeyBtYXhBZ2U6IChuZXcgRGF0ZSgpICogMC4wMDEpICsgKDM2NSAqIDI0ICogMzYwMCkgfSk7XHJcblxyXG5cdHJlcS5sb2NhbGUgPSBsb2NhbGVJZDtcclxuXHRuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRldGVjdExvY2FsZShyZXEpIHtcclxuXHRjb25zdCBjb29raWVMb2NhbGUgPSByZXEuY29va2llcy5sb2NhbGU7XHJcblxyXG5cdHJldHVybiBhY2NlcHRMYW5ndWFnZS5nZXQoY29va2llTG9jYWxlIHx8IHJlcS5oZWFkZXJzWydhY2NlcHQtbGFuZ3VhZ2UnXSkgfHwgJ2VuJztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TG9jYWxlQ29va2llKHJlcywgbG9jYWxlSWQpIHtcclxuXHRyZXMuY29va2llKCdsb2NhbGUnLCBsb2NhbGVJZCwgeyBtYXhBZ2U6IChuZXcgRGF0ZSgpICogMC4wMDEpICsgKDM2NSAqIDI0ICogMzYwMCkgfSk7XHJcbn0iLCJjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcclxuY29uc3QgZXhwcmVzc0p3dCA9IHJlcXVpcmUoJ2V4cHJlc3Mtand0Jyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGp3dDtcclxuXHJcbmZ1bmN0aW9uIGp3dCgpIHtcclxuICAgIHJldHVybiBleHByZXNzSnd0KHsgc2VjcmV0OiBjb25maWcuand0U2VjcmV0IH0pLnVubGVzcyh7XHJcblx0ICAgICAgICBwYXRoOiBbXHJcblx0ICAgICAgICAgICAgLy8gcHVibGljIHJvdXRlcyB0aGF0IGRvbid0IHJlcXVpcmUgYXV0aGVudGljYXRpb25cclxuXHQgICAgICAgICAgICAnL2FwaS9hdXRoJyxcclxuXHQgICAgICAgICAgICAnL2FwaS9nZXQtbG9jYWxlJyxcclxuXHQgICAgICAgICAgICAnL2FwaS9jaGVjay11bmlxdWVuZXNzJyxcclxuXHQgICAgICAgICAgICAnL2FwaS9wdXQtdXNlci1wcm9maWxlJyxcclxuXHQgICAgICAgICAgICAnLycsXHJcblx0ICAgICAgICAgICAgL1xcL3Bob3Rvc1xcLy4rXFwuKD86anBnfHBuZykkLyxcclxuXHQgICAgICAgICAgICAvXFwvaTE4blxcLy4rLyxcclxuXHQgICAgICAgICAgICAvXFwvYXNzZXRzXFwvLiskLyxcclxuXHQgICAgICAgICAgICAvXFwvc3RhdGljXFwvLiskLyxcclxuXHQgICAgICAgICAgICAvXFwvW14vXStcXC5bXi9dKyQvLFxyXG5cdCAgICAgICAgICAgIC9cXC9sb2dpblxcLz8kLyxcclxuXHQgICAgICAgICAgICAvXFwvc2lnbnVwXFwvPyQvLFxyXG5cdCAgICAgICAgICAgIC9cXC9kYXNoYm9hcmRcXC8/JC8sXHJcblx0ICAgICAgICBdXHJcblx0ICAgIH0pO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0dmFsaWRhdGVBbGwsXHJcblx0dmFsaWRhdGVPbmVcclxufVxyXG5cclxuLy8g0KTRg9C90LrRhtC40Y8g0L/RgNC+0LLQtdGA0LrQuCDRgdC+0L7RgtCy0LXRgtGB0YLQstC40Y8g0L/QvtC70LXQuSDQt9Cw0LTQsNC90L3QvtC5INGB0YXQtdC80LVcclxuZnVuY3Rpb24gdmFsaWRhdGUoYWxnb3JpdGhtLCBzY2hlbWUsIGRhdGEpIHtcclxuXHRyZXR1cm4gc2NoZW1lW2FsZ29yaXRobV0oIGl0ZW0gPT4ge1xyXG5cdFx0Ly8g0JXRgdC70Lgg0L/QvtC70LUg0L/QtdGA0LXQtNCw0L3QvlxyXG5cdFx0aWYgKCBkYXRhW2l0ZW0ubmFtZV0gIT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpdGVtLnZhbGlkYXRvciA9PT0gXCJmdW5jdGlvblwiIC8vINC10YHQu9C4INC30LDQtNCw0L0g0YTQvtGA0LzQsNGCLCDQv9GA0L7QstC10YDRj9C10LxcclxuXHRcdFx0XHQ/IGl0ZW0udmFsaWRhdG9yKGRhdGFbaXRlbS5uYW1lXSlcclxuXHRcdFx0XHQ6IHRydWVcclxuXHRcdH1cclxuXHRcdC8vINCV0YHQu9C4INC90LXRgiwg0L3QviDQv9C+0LvQtSDQvtC/0YbQuNC+0L3QsNC70YzQvdC+0LVcclxuXHRcdGVsc2UgaWYgKCAhaXRlbS5yZXF1aXJlZCApIHJldHVybiB0cnVlO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDQn9GA0L7QstC10YDRj9C10YIg0LLRgdC1INC/0L7Qu9GPINC/0L4g0YHRhdC10LzQtVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUFsbChzY2hlbWUsIGRhdGEpIHtcclxuXHRyZXR1cm4gdmFsaWRhdGUoJ2V2ZXJ5Jywgc2NoZW1lLCBkYXRhKTtcclxufVxyXG5cclxuLy8g0J/RgNC+0LLQtdGA0Y/QtdGCINGC0L7Qu9GM0LrQviDQvtC00L3QviDQv9C+0LvQtSAo0LXRgdC70Lgg0L3Rg9C20L3QviDQv9GA0L7QstC10YDQuNGC0Ywg0LXQtNC40L3RgdGC0LLQtdC90L3QvtC1INC/0L7Qu9C1INC90LAg0YHQvtC+0YLQstC10YLRgdGC0LLQuNC1INGB0YXQtdC80LUpXHJcbmZ1bmN0aW9uIHZhbGlkYXRlT25lIChzY2hlbWUsIGl0ZW0pIHsgXHJcblx0cmV0dXJuIHZhbGlkYXRlKCdzb21lJywgc2NoZW1lLCBpdGVtKTtcclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNjZXB0LWxhbmd1YWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtand0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0bWwtZW50aXRpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW50bC1tZXNzYWdlZm9ybWF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==