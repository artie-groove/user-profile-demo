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
/*! exports provided: components.App.localeSwitchErrorTitle, components.App.notAuthorizedException, components.Dashboard.biographyBlockTitle, components.Dashboard.birthdate, components.Dashboard.dataLoadingErrorTitle, components.Dashboard.dataLoadingSpinnerMsg, components.Dashboard.logoutButtonCaption, components.Dashboard.newslettersStatusIndicatorLabel, components.LoginForm.authErrorTitle, components.LoginForm.formHint, components.LoginForm.formTitle, components.LoginForm.msgNoAccountQuestion, components.LoginForm.passwordLabel, components.LoginForm.signupLinkCaption, components.LoginForm.submitButtonCaption, components.LoginForm.submitButtonInProgressCaption, components.LoginForm.usernameLabel, components.SignupForm.Biography.E_TOO_LONG, components.SignupForm.Birthdate.E_EMPTY, components.SignupForm.Birthdate.E_INVALID_FORMAT, components.SignupForm.Birthdate.E_TOO_EARLY, components.SignupForm.Birthdate.E_TOO_OLD, components.SignupForm.Email.E_EMPTY, components.SignupForm.Email.E_INVALID_FORMAT, components.SignupForm.Email.E_TOO_LONG, components.SignupForm.Email.approved, components.SignupForm.Email.rejected, components.SignupForm.Firstname.E_EMPTY, components.SignupForm.Firstname.E_FIRST_LETTER, components.SignupForm.Firstname.E_INVALID_FORMAT, components.SignupForm.Firstname.E_TOO_LONG, components.SignupForm.Lastname.E_EMPTY, components.SignupForm.Lastname.E_FIRST_LETTER, components.SignupForm.Lastname.E_INVALID_FORMAT, components.SignupForm.Lastname.E_LAST_SYMBOL, components.SignupForm.Lastname.E_TOO_LONG, components.SignupForm.Lastname.E_WRONG_ENDING, components.SignupForm.Password.E_EMPTY, components.SignupForm.Password.E_INSUFFICIENT, components.SignupForm.Password.E_INVALID_FORMAT, components.SignupForm.Password.E_TOO_LONG, components.SignupForm.Password.E_TOO_SHORT, components.SignupForm.PasswordConfirmation.E_EMPTY, components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH, components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID, components.SignupForm.PasswordConfirmation.valid, components.SignupForm.PersonalInformationProcessing.E_IMPOSED, components.SignupForm.Phone.E_EMPTY, components.SignupForm.Phone.E_FIRST_SYMBOL, components.SignupForm.Phone.E_INVALID_FORMAT, components.SignupForm.Phone.E_TOO_LONG, components.SignupForm.Phone.E_TOO_SHORT, components.SignupForm.Phone.approved, components.SignupForm.Phone.rejected, components.SignupForm.Photo.E_NOT_SELECTED, components.SignupForm.Photo.E_TOO_BIG, components.SignupForm.Photo.E_WRONG_EXTENTION, components.SignupForm.Photo.photoPickerButtonCaption, components.SignupForm.Username.E_EMPTY, components.SignupForm.Username.E_FIRST_LETTER, components.SignupForm.Username.E_INVALID_FORMAT, components.SignupForm.Username.E_LAST_SYMBOL, components.SignupForm.Username.E_TOO_LONG, components.SignupForm.Username.E_TOO_SHORT, components.SignupForm.Username.approved, components.SignupForm.Username.rejected, components.SignupForm.alreadySignedUp, components.SignupForm.biographyLabel, components.SignupForm.birthdateHint, components.SignupForm.birthdateLabel, components.SignupForm.emailHint, components.SignupForm.emailLabel, components.SignupForm.firstNameLabel, components.SignupForm.lastNameLabel, components.SignupForm.loginLinkCaption, components.SignupForm.newslettersHint, components.SignupForm.newslettersLabel, components.SignupForm.passwordConfirmationHint, components.SignupForm.passwordConfirmationLabel, components.SignupForm.passwordHint, components.SignupForm.passwordLabel, components.SignupForm.personalInformationProcessingHint, components.SignupForm.personalInformationProcessingLabel, components.SignupForm.phoneHint, components.SignupForm.phoneLabel, components.SignupForm.photoHint, components.SignupForm.photoLabel, components.SignupForm.signupErrorTitle, components.SignupForm.signupFormHint, components.SignupForm.signupFormTitle, components.SignupForm.signupSuccessMessage, components.SignupForm.signupSuccessTitle, components.SignupForm.submitButtonCaption, components.SignupForm.submitButtonInProgressCaption, components.SignupForm.userIdHint, components.SignupForm.userIdLabel, components.SignupForm.btnDemoCaption, serverConnectionError, somethingWentWrong, default */
/***/ (function(module) {

module.exports = {"components.App.localeSwitchErrorTitle":"Couldn't switch locale","components.App.notAuthorizedException":"Not authorized. Probably due to an application error. Try logging in again","components.Dashboard.biographyBlockTitle":"Short biography","components.Dashboard.birthdate":"{birthdate, date, medium} ({age, number} {age, plural, one {year} other {years}} old)","components.Dashboard.dataLoadingErrorTitle":"Error loading profile data","components.Dashboard.dataLoadingSpinnerMsg":"Loading data...","components.Dashboard.logoutButtonCaption":"Log out","components.Dashboard.newslettersStatusIndicatorLabel":"Newsletters","components.LoginForm.authErrorTitle":"Authentication error","components.LoginForm.formHint":"Please, enter your user name and password to get access to your profile","components.LoginForm.formTitle":"Log in","components.LoginForm.msgNoAccountQuestion":"No account?","components.LoginForm.passwordLabel":"Password","components.LoginForm.signupLinkCaption":"Register","components.LoginForm.submitButtonCaption":"Log in","components.LoginForm.submitButtonInProgressCaption":"Sending","components.LoginForm.usernameLabel":"Username","components.SignupForm.Biography.E_TOO_LONG":"Please, shorten your biography to 4000 symbols","components.SignupForm.Birthdate.E_EMPTY":"This field is required. Please, enter your date of birth","components.SignupForm.Birthdate.E_INVALID_FORMAT":"Wrong data format. Please, make sure you enter the date in YYYY-MM-DD format","components.SignupForm.Birthdate.E_TOO_EARLY":"Only dates from the past are accepted","components.SignupForm.Birthdate.E_TOO_OLD":"We accept that a human can live longer than 150 years. If that's your case, please contact us via phone or email. We will consider your application in exceptional order","components.SignupForm.Email.E_EMPTY":"This field is required. Please, enter your email","components.SignupForm.Email.E_INVALID_FORMAT":"Email doesn't comply with the format. Please, make sure you typed the address correctly","components.SignupForm.Email.E_TOO_LONG":"We don't accept emails longer than 128 symbols. Please, use a shorter address","components.SignupForm.Email.approved":"This email address is fine!","components.SignupForm.Email.rejected":"The address has already been taken by somebody. Please, use another one","components.SignupForm.Firstname.E_EMPTY":"This field is required. Please, enter your name","components.SignupForm.Firstname.E_FIRST_LETTER":"Name should begin with a capital letter","components.SignupForm.Firstname.E_INVALID_FORMAT":"The name contains illegal characters. Please, adhere to the specified format","components.SignupForm.Firstname.E_TOO_LONG":"Name shouldn't exceed 40 characters","components.SignupForm.Lastname.E_EMPTY":"This field is required. Please, enter your family name","components.SignupForm.Lastname.E_FIRST_LETTER":"Family name should start with capital letter","components.SignupForm.Lastname.E_INVALID_FORMAT":"The family name doesn't follow the format. Please, use only letters and a hyphen","components.SignupForm.Lastname.E_LAST_SYMBOL":"Family name should end in lowercase letter","components.SignupForm.Lastname.E_TOO_LONG":"Family name shouldn't exceed 50 characters","components.SignupForm.Lastname.E_WRONG_ENDING":"Minimum 2 letters after a hyphen","components.SignupForm.Password.E_EMPTY":"This is a required field. Please, enter a password","components.SignupForm.Password.E_INSUFFICIENT":"Please, use at least 2 symbol groups: letters, digits or special characters","components.SignupForm.Password.E_INVALID_FORMAT":"The password contains illegal symbols. Please, adhere to the specified format","components.SignupForm.Password.E_TOO_LONG":"Password should be less that 128 symbols long. Please, use a shorter password","components.SignupForm.Password.E_TOO_SHORT":"Password should be at least 8 symbols long","components.SignupForm.PasswordConfirmation.E_EMPTY":"This field is required. Please, confirm the above entered password","components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH":"Passwords don't match","components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID":"Please, make sure both passwords follow the specified format","components.SignupForm.PasswordConfirmation.valid":"Passwords match","components.SignupForm.PersonalInformationProcessing.E_IMPOSED":"Consent to personal information processing is required to sign up to our service","components.SignupForm.Phone.E_EMPTY":"This field is required. Please, enter your phone number","components.SignupForm.Phone.E_FIRST_SYMBOL":"The first character should be a plus symbol (+)","components.SignupForm.Phone.E_INVALID_FORMAT":"The phone number doesn't comply with the format. Please, check if you typed it correctly","components.SignupForm.Phone.E_TOO_LONG":"The phone number is too long. Please, use a shorter number","components.SignupForm.Phone.E_TOO_SHORT":"Phone number should be more than 10 characters long. Please, make sure you entered it correctly","components.SignupForm.Phone.approved":"This phone number will work!","components.SignupForm.Phone.rejected":"This phone number has already been in use. Please, choose another one","components.SignupForm.Photo.E_NOT_SELECTED":"Please, choose a photo for your profile","components.SignupForm.Photo.E_TOO_BIG":"File size shouldn't exceed 5 MB","components.SignupForm.Photo.E_WRONG_EXTENTION":"We only support files of JPG and PNG formats","components.SignupForm.Photo.photoPickerButtonCaption":"Pick a photo","components.SignupForm.Username.E_EMPTY":"This field is required. Please, come up with a username","components.SignupForm.Username.E_FIRST_LETTER":"Username should begin with a lowercase Latin character","components.SignupForm.Username.E_INVALID_FORMAT":"The name contains illegal characters. Please, adhere to the specified format","components.SignupForm.Username.E_LAST_SYMBOL":"Name should end in a letter or a digit","components.SignupForm.Username.E_TOO_LONG":"Name shouldn't be longer than 30 characters","components.SignupForm.Username.E_TOO_SHORT":"Name should be at least 5 characters long","components.SignupForm.Username.approved":"Great, this is a suitable name!","components.SignupForm.Username.rejected":"Unfortunately, this name has already been taken. Please, come up with another one","components.SignupForm.alreadySignedUp":"Already signed up?","components.SignupForm.biographyLabel":"Short biography","components.SignupForm.birthdateHint":"Please, choose the date from the popup calendar","components.SignupForm.birthdateLabel":"Birthdate","components.SignupForm.emailHint":"We use the email for password restoration and critical notifications. No unnecessary newsletters","components.SignupForm.emailLabel":"Email","components.SignupForm.firstNameLabel":"Given name","components.SignupForm.lastNameLabel":"Family name","components.SignupForm.loginLinkCaption":"Log in","components.SignupForm.newslettersHint":"Switch on if you want to keep up with us","components.SignupForm.newslettersLabel":"Newsletters","components.SignupForm.passwordConfirmationHint":"Please, confirm the above entered password","components.SignupForm.passwordConfirmationLabel":"Password confirmation","components.SignupForm.passwordHint":"Only latin letters, digits and special characters (for example, :, ', >, <, =, +, ., &, %, $, #, @, !, *, ), (, -, ~, [, ], /, \\\\, \\{, \\}, _, ^). Minimum 8 characters. At least two character types should be used","components.SignupForm.passwordLabel":"Password","components.SignupForm.personalInformationProcessingHint":"According to Russia's federal law from 27/07/2006 number 152-FZ 'On personal data'","components.SignupForm.personalInformationProcessingLabel":"I give my consent to process my personal data","components.SignupForm.phoneHint":"Phone number in the following format: <country code> <number>, for example, +7 926-840-55-49. Minimum 5 characters","components.SignupForm.phoneLabel":"Phone number","components.SignupForm.photoHint":"PNG and JPEG files only. Maximum size - 5 MB","components.SignupForm.photoLabel":"Photo","components.SignupForm.signupErrorTitle":"Sign up error","components.SignupForm.signupFormHint":"You need to provide some personal information. Please, fill in the form below","components.SignupForm.signupFormTitle":"Sign Up","components.SignupForm.signupSuccessMessage":"You're registered. Please, log in to your account","components.SignupForm.signupSuccessTitle":"Signed up successfully!","components.SignupForm.submitButtonCaption":"Sign up","components.SignupForm.submitButtonInProgressCaption":"Sending","components.SignupForm.userIdHint":"User identifier. Has to be composed of lowercase latin letters and/or digits. Нyphen is allowed. Should start with a letter and end with a letter or a digit. Minimim - 5 symbols. For example, 'giant-66'","components.SignupForm.userIdLabel":"Username","components.SignupForm.btnDemoCaption":"Demo","serverConnectionError":"Couldn't connect to server: \"{errorMsg}\". Please, try again later. If you can't submit the form, please contact us. We bring our apologies for the inconvenience","somethingWentWrong":"Something went wrong. Probably, due to a server fault or connection problems. Please, try again later. If you can't submit the form, please contact us. We bring our apologies for the inconvenience"};

/***/ }),

/***/ "./src/public/lang/ru.json":
/*!*********************************!*\
  !*** ./src/public/lang/ru.json ***!
  \*********************************/
/*! exports provided: components.App.localeSwitchErrorTitle, components.App.notAuthorizedException, components.Dashboard.biographyBlockTitle, components.Dashboard.birthdate, components.Dashboard.dataLoadingErrorTitle, components.Dashboard.dataLoadingSpinnerMsg, components.Dashboard.logoutButtonCaption, components.Dashboard.newslettersStatusIndicatorLabel, components.LoginForm.authErrorTitle, components.LoginForm.formHint, components.LoginForm.formTitle, components.LoginForm.msgNoAccountQuestion, components.LoginForm.passwordLabel, components.LoginForm.signupLinkCaption, components.LoginForm.submitButtonCaption, components.LoginForm.submitButtonInProgressCaption, components.LoginForm.usernameLabel, components.SignupForm.Biography.E_TOO_LONG, components.SignupForm.Birthdate.E_EMPTY, components.SignupForm.Birthdate.E_INVALID_FORMAT, components.SignupForm.Birthdate.E_TOO_EARLY, components.SignupForm.Birthdate.E_TOO_OLD, components.SignupForm.Email.E_EMPTY, components.SignupForm.Email.E_INVALID_FORMAT, components.SignupForm.Email.E_TOO_LONG, components.SignupForm.Email.approved, components.SignupForm.Email.rejected, components.SignupForm.Firstname.E_EMPTY, components.SignupForm.Firstname.E_FIRST_LETTER, components.SignupForm.Firstname.E_INVALID_FORMAT, components.SignupForm.Firstname.E_TOO_LONG, components.SignupForm.Lastname.E_EMPTY, components.SignupForm.Lastname.E_FIRST_LETTER, components.SignupForm.Lastname.E_INVALID_FORMAT, components.SignupForm.Lastname.E_LAST_SYMBOL, components.SignupForm.Lastname.E_TOO_LONG, components.SignupForm.Lastname.E_WRONG_ENDING, components.SignupForm.Password.E_EMPTY, components.SignupForm.Password.E_INSUFFICIENT, components.SignupForm.Password.E_INVALID_FORMAT, components.SignupForm.Password.E_TOO_LONG, components.SignupForm.Password.E_TOO_SHORT, components.SignupForm.PasswordConfirmation.E_EMPTY, components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH, components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID, components.SignupForm.PasswordConfirmation.valid, components.SignupForm.PersonalInformationProcessing.E_IMPOSED, components.SignupForm.Phone.E_EMPTY, components.SignupForm.Phone.E_FIRST_SYMBOL, components.SignupForm.Phone.E_INVALID_FORMAT, components.SignupForm.Phone.E_TOO_LONG, components.SignupForm.Phone.E_TOO_SHORT, components.SignupForm.Phone.approved, components.SignupForm.Phone.rejected, components.SignupForm.Photo.E_NOT_SELECTED, components.SignupForm.Photo.E_TOO_BIG, components.SignupForm.Photo.E_WRONG_EXTENTION, components.SignupForm.Photo.photoPickerButtonCaption, components.SignupForm.Username.E_EMPTY, components.SignupForm.Username.E_FIRST_LETTER, components.SignupForm.Username.E_INVALID_FORMAT, components.SignupForm.Username.E_LAST_SYMBOL, components.SignupForm.Username.E_TOO_LONG, components.SignupForm.Username.E_TOO_SHORT, components.SignupForm.Username.approved, components.SignupForm.Username.rejected, components.SignupForm.alreadySignedUp, components.SignupForm.biographyLabel, components.SignupForm.birthdateHint, components.SignupForm.birthdateLabel, components.SignupForm.emailHint, components.SignupForm.emailLabel, components.SignupForm.firstNameLabel, components.SignupForm.lastNameLabel, components.SignupForm.loginLinkCaption, components.SignupForm.newslettersHint, components.SignupForm.newslettersLabel, components.SignupForm.passwordConfirmationHint, components.SignupForm.passwordConfirmationLabel, components.SignupForm.passwordHint, components.SignupForm.passwordLabel, components.SignupForm.personalInformationProcessingHint, components.SignupForm.personalInformationProcessingLabel, components.SignupForm.phoneHint, components.SignupForm.phoneLabel, components.SignupForm.photoHint, components.SignupForm.photoLabel, components.SignupForm.signupErrorTitle, components.SignupForm.signupFormHint, components.SignupForm.signupFormTitle, components.SignupForm.signupSuccessMessage, components.SignupForm.signupSuccessTitle, components.SignupForm.submitButtonCaption, components.SignupForm.submitButtonInProgressCaption, components.SignupForm.userIdHint, components.SignupForm.userIdLabel, components.SignupForm.btnDemoCaption, serverConnectionError, somethingWentWrong, default */
/***/ (function(module) {

module.exports = {"components.App.localeSwitchErrorTitle":"Не&nbsp;удалось сменить локализацию","components.App.notAuthorizedException":"Вы&nbsp;не&nbsp;авторизованы. Возможно, это ошибка приложения. Попробуйте авторизоваться заново","components.Dashboard.biographyBlockTitle":"Краткая биография","components.Dashboard.birthdate":"{birthdate, date, medium} ({age, plural, offset: 1 =0 {младенец} other {{age, number} {age, plural, one {год} few {года} many {лет} other {}}}})","components.Dashboard.dataLoadingErrorTitle":"Ошибка загрузки данных профиля","components.Dashboard.dataLoadingSpinnerMsg":"Загрузка...","components.Dashboard.logoutButtonCaption":"Выйти","components.Dashboard.newslettersStatusIndicatorLabel":"Информационные рассылки","components.LoginForm.authErrorTitle":"Ошибка аутентификации","components.LoginForm.formHint":"Пожалуйста, введите имя пользователя и&nbsp;пароль для получения доступа к&nbsp;личному кабинету","components.LoginForm.formTitle":"Авторизация","components.LoginForm.msgNoAccountQuestion":"Нет аккаунта?","components.LoginForm.passwordLabel":"Пароль","components.LoginForm.signupLinkCaption":"Регистрация","components.LoginForm.submitButtonCaption":"Войти","components.LoginForm.submitButtonInProgressCaption":"Отправка","components.LoginForm.usernameLabel":"Имя пользователя","components.SignupForm.Biography.E_TOO_LONG":"Пожалуйста, сократите свою биографию до&nbsp;4000 символов","components.SignupForm.Birthdate.E_EMPTY":"Это обязательное поле. Пожалуйста, введите дату рождения","components.SignupForm.Birthdate.E_INVALID_FORMAT":"Неверный формат даты. Пожалуйста, убедитесь, что вводите дату в&nbsp;формате ГГГГ-ММ-ДД","components.SignupForm.Birthdate.E_TOO_EARLY":"Допускаются только даты из&nbsp;прошлого","components.SignupForm.Birthdate.E_TOO_OLD":"Мы&nbsp;допускаем, что человек может прожить более 150-ти лет. Если это ваш случай, пожалуйста, свяжитесь с&nbsp;нами по&nbsp;телефону или напишите нам на&nbsp;почту, мы&nbsp;рассмотрим вашу заявку в&nbsp;исключительном порядке.","components.SignupForm.Email.E_EMPTY":"Это обязательное поле. Пожалуйста, введите адрес","components.SignupForm.Email.E_INVALID_FORMAT":"Адрес не&nbsp;соответствует формату. Пожалуйста, проверьте правильность написания адреса","components.SignupForm.Email.E_TOO_LONG":"Мы&nbsp;не&nbsp;поддерживаем адреса длиннее 128-ми символов. Пожалуйста, используйте более короткий адрес","components.SignupForm.Email.approved":"Электронная почта в&nbsp;порядке!","components.SignupForm.Email.rejected":"Такой адреc уже занят кем-то. Пожалуйста, используйте другой","components.SignupForm.Firstname.E_EMPTY":"Это обязательное поле. Пожалуйста, введите имя","components.SignupForm.Firstname.E_FIRST_LETTER":"Имя должно начинаться с&nbsp;заглавной буквы","components.SignupForm.Firstname.E_INVALID_FORMAT":"Имя содержит недопустимые символы. Пожалуйста, придерживайтесь заданного формата","components.SignupForm.Firstname.E_TOO_LONG":"Имя не&nbsp;должно превышать 40-ка символов","components.SignupForm.Lastname.E_EMPTY":"Это обязательное поле. Пожалуйста, введите фамилию","components.SignupForm.Lastname.E_FIRST_LETTER":"Фамилия должна начинаться с&nbsp;заглавной буквы","components.SignupForm.Lastname.E_INVALID_FORMAT":"Фамилия не&nbsp;соответствует формату. Пожалуйста, используйте только буквы и&nbsp;дефис","components.SignupForm.Lastname.E_LAST_SYMBOL":"Фамилия должна заканчиваться строчной буквой","components.SignupForm.Lastname.E_TOO_LONG":"Фамилия не&nbsp;должна превышать 50-ти символов","components.SignupForm.Lastname.E_WRONG_ENDING":"Как минимум&nbsp;&mdash; две буквы после дефиса","components.SignupForm.Password.E_EMPTY":"Это обязательное поле. Пожалуйста, введите пароль","components.SignupForm.Password.E_INSUFFICIENT":"Пожалуйста, используйте хотя&nbsp;бы две группы символов: буквы, цифры или спецсимволы","components.SignupForm.Password.E_INVALID_FORMAT":"Пароль содержит недопустимые символы. Пожалуйста, придерживайтесь формата","components.SignupForm.Password.E_TOO_LONG":"Пароль не&nbsp;может превышать 128&nbsp;символов. Пожалуйста, используйте более короткий пароль","components.SignupForm.Password.E_TOO_SHORT":"Пароль должен содержать не&nbsp;менее 8-ми символов","components.SignupForm.PasswordConfirmation.E_EMPTY":"Это обязательное поле. Пожалуйста, подтвердите введённый ранее пароль","components.SignupForm.PasswordConfirmation.E_PASSWORDS_MISMATCH":"Пароли не&nbsp;совпадают","components.SignupForm.PasswordConfirmation.E_PASSWORD_NOT_VALID":"Пожалуйста, убедитесь, что оба пароля соответствуют формату","components.SignupForm.PasswordConfirmation.valid":"Пароли совпадают","components.SignupForm.PersonalInformationProcessing.E_IMPOSED":"Согласие на&nbsp;обработку персональных данных обязательно для регистрации на&nbsp;нашем сервисе","components.SignupForm.Phone.E_EMPTY":"Это обязательное поле. Пожалуйста, введите номер","components.SignupForm.Phone.E_FIRST_SYMBOL":"Первый символ должен быть плюсом (+)","components.SignupForm.Phone.E_INVALID_FORMAT":"Номер не&nbsp;соответствует формату. Пожалуйста, проверьте правильность ввода номера","components.SignupForm.Phone.E_TOO_LONG":"Номер слишком длинный. Пожалуйста, используйте более короткий номер","components.SignupForm.Phone.E_TOO_SHORT":"Номер должен быть длиннее 10&nbsp;символов. Пожалуйста, проверьте правильность ввода","components.SignupForm.Phone.approved":"Телефон подходит!","components.SignupForm.Phone.rejected":"Этот номер уже используется кем-то. Пожалуйста, используйте другой","components.SignupForm.Photo.E_NOT_SELECTED":"Пожалуйста, выберите фото для вашего профиля","components.SignupForm.Photo.E_TOO_BIG":"Размер файла не&nbsp;должен превышать 5&nbsp;МБ","components.SignupForm.Photo.E_WRONG_EXTENTION":"Мы&nbsp;поддерживаем только файлы форматов JPG и&nbsp;PNG","components.SignupForm.Photo.photoPickerButtonCaption":"Выберите фото","components.SignupForm.Username.E_EMPTY":"Это обязательное поле. Пожалуйста, придумайте имя","components.SignupForm.Username.E_FIRST_LETTER":"Имя должно начинаться со&nbsp;строчной буквы латинского алфавита","components.SignupForm.Username.E_INVALID_FORMAT":"Имя содержит недопустимые символы. Пожалуйста, придерживайтесь заданного формата","components.SignupForm.Username.E_LAST_SYMBOL":"Имя должно заканчиваться буквой или цифрой","components.SignupForm.Username.E_TOO_LONG":"Имя не&nbsp;должно превышать 30-ти символов","components.SignupForm.Username.E_TOO_SHORT":"Имя должно содержать не&nbsp;менее 5-ти символов","components.SignupForm.Username.approved":"Отлично, это имя подходит!","components.SignupForm.Username.rejected":"К&nbsp;сожалению, это имя уже занято. Пожалуйста, придумайте другое","components.SignupForm.alreadySignedUp":"Уже зарегистрированы?","components.SignupForm.biographyLabel":"Краткая биография","components.SignupForm.birthdateHint":"Пожалуйста, выберите дату из&nbsp;всплывающего календаря","components.SignupForm.birthdateLabel":"Дата рождения","components.SignupForm.emailHint":"Мы&nbsp;используем адрес электронной почты для восстановления пароля и&nbsp;критических уведомлений. Никаких лишних рассылок","components.SignupForm.emailLabel":"Адрес электронной почты","components.SignupForm.firstNameLabel":"Имя","components.SignupForm.lastNameLabel":"Фамилия","components.SignupForm.loginLinkCaption":"Войти","components.SignupForm.newslettersHint":"Включите, если хотите получать последние новости на&nbsp;почту","components.SignupForm.newslettersLabel":"Информационные рассылки","components.SignupForm.passwordConfirmationHint":"Повторите, пожалуйста, введённый ранее пароль","components.SignupForm.passwordConfirmationLabel":"Подтверждение пароля","components.SignupForm.passwordHint":"Только латинские буквы, цифры и&nbsp;спецсимволы (например, :, &rsquo;, >, <, =, +, ., &, %, $, #, @, ! , *, ), (, -, ~, [, ], /, \\\\, \\{, \\}, _, ^). Минимальная длина&nbsp;&mdash; 8&nbsp;знаков, при этом должны использоваться хотя&nbsp;бы две группы символов","components.SignupForm.passwordLabel":"Пароль","components.SignupForm.personalInformationProcessingHint":"В&nbsp;соответствии с&nbsp;Федеральным законом от&nbsp;27.07.2006&nbsp;г. &#8470;&nbsp;152&#x2011ФЗ &laquo;О&nbsp;персональных данных&raquo;","components.SignupForm.personalInformationProcessingLabel":"Я&nbsp;даю согласие на&nbsp;обработку моих персональных данных","components.SignupForm.phoneHint":"Номер телефона в&nbsp;формате &lt;код страны&gt; &lt;номер&gt;, например: +7&nbsp;926-840-55-49. Минимальная длина&nbsp;&mdash; 5&nbsp;символов","components.SignupForm.phoneLabel":"Номер телефона","components.SignupForm.photoHint":"Принимаются фотографии форматов JPG и&nbsp;PNG размером не&nbsp;более 5&nbsp;МБ","components.SignupForm.photoLabel":"Фотография","components.SignupForm.signupErrorTitle":"Ошибка регистрации","components.SignupForm.signupFormHint":"Вам необходимо предоставить некоторую информацию о&nbsp;себе. Пожалуйста, заполните нижеследующую форму.","components.SignupForm.signupFormTitle":"Регистрация","components.SignupForm.signupSuccessMessage":"Вы&nbsp;зарегистрированы. Пожалуйста, авторизуйтесь для входа в&nbsp;свой профиль","components.SignupForm.signupSuccessTitle":"Регистрация прошла успешно!","components.SignupForm.submitButtonCaption":"Зарегистрироваться","components.SignupForm.submitButtonInProgressCaption":"Отправка","components.SignupForm.userIdHint":"Идентификатор пользователя для входа в&nbsp;систему. Может содержать только строчные латинские буквы, цифры и&nbsp;дефис. Должен начинаться с&nbsp;буквы и&nbsp;заканчиваться буквой или цифрой. Минимум&nbsp;&mdash; 5&nbsp;символов. Например, giant-166","components.SignupForm.userIdLabel":"Имя пользователя","components.SignupForm.btnDemoCaption":"Демо","serverConnectionError":"Не&nbsp;удалось связаться с&nbsp;сервером: &laquo;{errorMsg}&raquo;. Пожалуйста, повторите попытку позже. Если вам не&nbsp;удалось отправить форму, пожалуйста, свяжитесь с&nbsp;нами. Приносим извинения за&nbsp;доставленные неудобства","somethingWentWrong":"Что-то пошло не&nbsp;так. Возможно, неполадки сервера, либо проблемы с&nbsp;соединением. Пожалуйста, повторите попытку позже. Если вам не&nbsp;удалось отправить форму, пожалуйста, свяжитесь с&nbsp;нами. Приносим извинения за&nbsp;доставленные неудобства"};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vQmlvZ3JhcGh5L0Jpb2dyYXBoeS52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vQmlydGhkYXRlL0JpcnRoZGF0ZS52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vRW1haWwvRW1haWwudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0ZpcnN0bmFtZS9GaXJzdG5hbWUudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0xhc3RuYW1lL0xhc3RuYW1lLnZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9QYXNzd29yZC9QYXNzd29yZC52YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vUGhvbmUvUGhvbmUudmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL1VzZXJuYW1lL1VzZXJuYW1lLnZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9jaGVjay11bmlxdWVuZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ2V0LWxvY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2dldC11c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3B1dC11c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy91c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9sYW5nIHN5bmMgXlxcLlxcLy4qXFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvand0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWNjZXB0LWxhbmd1YWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1qd3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0bWwtZW50aXRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnRsLW1lc3NhZ2Vmb3JtYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlIiwic3RhdHVzQ29kZXMiLCJsZW5ndGgiLCJFX1RPT19MT05HIiwiRV9FTVBUWSIsImRhdGVGb3JtYXQiLCJpc0NvcnJlY3QiLCJ0ZXN0IiwiRV9JTlZBTElEX0ZPUk1BVCIsInRzQmlydGhkYXRlIiwiRGF0ZSIsInBhcnNlIiwiaXNOYU4iLCJ0c1RvZGF5Iiwibm93IiwiRV9UT09fRUFSTFkiLCJFX1RPT19PTEQiLCJlbWFpbFJlZ2V4IiwiaXNWYWxpZCIsImZpcnN0TGV0dGVyUmVnZXgiLCJjaGFyQXQiLCJFX0ZJUlNUX0xFVFRFUiIsIm5hbWVSZWdleCIsImxhc3RMZXR0ZXJSZWdleCIsIkVfTEFTVF9TWU1CT0wiLCJlbmRpbmdSZWdleCIsIkVfV1JPTkdfRU5ESU5HIiwiZ3JwTGV0dGVycyIsImdycERpZ2l0cyIsImdycFN5bWJvbHMiLCJmb3JtYXQiLCJyZWdleHAiLCJSZWdFeHAiLCJoYXNMZXR0ZXJzIiwiaGFzRGlnaXRzIiwiaGFzU3ltYm9scyIsIkVfSU5TVUZGSUNJRU5UIiwiRV9UT09fU0hPUlQiLCJmaXJzdFN5bWJvbFJlZ2V4IiwiRV9GSVJTVF9TWU1CT0wiLCJwaG9uZUxleGlzUmVnZXgiLCJFX0lOVkFMSURfQ0hBUlMiLCJwaG9uZUdyYW1tYXJSZWdleCIsInVzZXJuYW1lUmVnZXgiLCJjb25maWciLCJyZXF1aXJlIiwiVXNlclByb2ZpbGUiLCJ2YWxpZGF0b3IiLCJsb2dpbkZpZWxkc1NjaGVtYSIsInJlc3BvbmQiLCJyZXNwb25kU3VjY2VzcyIsInJlc3BvbmRGYWlsdXJlIiwiZXh0cmFjdERhdGEiLCJqd3QiLCJleHByZXNzIiwicm91dGVyIiwiUm91dGVyIiwibWVzc2FnZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0IiwiYXV0aGVudGljYXRpb25IYW5kbGVyIiwicmVxIiwicmVzIiwibG9jYWxlSWQiLCJsb2NhbGUiLCJsb2NhbGl6ZWRNZXNzYWdlcyIsImxvZ2luRGF0YSIsInF1ZXJ5IiwibG9naW5EYXRhVmFsaWQiLCJ2YWxpZGF0ZUFsbCIsImF1dGhJbnZhbGlkRGF0YSIsImZpbmQiLCJlcnIiLCJkYXRhIiwiYXV0aFdyb25nQ3JlZGVudGlhbHMiLCJ1c2VyIiwidG9rZW4iLCJzaWduIiwic3ViIiwiX2lkIiwiand0U2VjcmV0IiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwiaXNLZXlEYXRhVW5pcXVlIiwiYXBwcm92YWJsZUZpZWxkc1NjaGVtYSIsImNoZWNrVW5pcXVlbmVzc0hhbmRsZXIiLCJuYW1lIiwiZmllbGREYXRhIiwiZmllbGREYXRhVmFsaWQiLCJ2YWxpZGF0ZU9uZSIsImludmFsaWRGb3JtYXQiLCJpc1VuaXF1ZSIsInNldExvY2FsZUNvb2tpZSIsImZzIiwicGF0aCIsIkFsbEh0bWxFbnRpdGllcyIsImVudGl0aWVzIiwiZ2V0TG9jYWxlSGFuZGxlciIsImxvY2FsZURhdGEiLCJmb3JFYWNoIiwia2V5IiwiZGVjb2RlIiwiY3VycmVudExvY2FsZUlkIiwid2FudGVkTG9jYWxlSWQiLCJpZCIsImxvY2FsZU5vdEZvdW5kIiwiZ2V0VXNlclByb2ZpbGVIYW5kbGVyIiwiZmluZEJ5SWQiLCJ1c2VyUHJvZmlsZSIsInRvT2JqZWN0IiwiZG9lc1Bob3RvRXhpc3QiLCJleGlzdHNTeW5jIiwicmVzb2x2ZSIsInBob3RvIiwia2V5RmllbGRzU2NoZW1hIiwiZGV0YWlsRmllbGRzU2NoZW1hIiwibXVsdGVyIiwidXBsb2FkSGFuZGxlciIsImRlc3QiLCJsaW1pdHMiLCJmaWxlU2l6ZSIsImZpbGVzIiwicGFydHMiLCJzaW5nbGUiLCJwb3N0IiwiZGF0YUhhbmRsZXIiLCJrZXlEYXRhIiwiYm9keSIsImtleURhdGFWYWxpZCIsImludmFsaWRLZXlGaWVsZHNEYXRhIiwidXNlckFscmVhZHlFeGlzdHMiLCJkZXRhaWxzRGF0YSIsImRldGFpbHNGaWVsZHNWYWxpZCIsImludmFsaWRGb3JtRGF0YSIsIk9iamVjdCIsImFzc2lnbiIsInBhc3N3b3JkIiwiYWxsRGV0YWlscyIsImRhdGFTdHJpbmciLCJrZXlzIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJmaWxlIiwib3JpZ2luYWxuYW1lIiwiTWF0aCIsImNlaWwiLCJzaXplIiwidG1wVXBsb2FkZWRGaWxlUGF0aCIsImRzdEZpbGVQYXRoIiwicmVuYW1lU3luYyIsImVycm9yIiwiZmFpbGVkVG9TYXZlUGhvdG8iLCJlcnJNc2ciLCJFcnJvciIsInNhdmUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImRiSG9zdCIsIkRCX0hPU1QiLCJkYlBvcnQiLCJEQl9QT1JUIiwiZGJVc2VyIiwiREJfVVNFUiIsImRiUGFzcyIsIkRCX1BBU1MiLCJkYk5hbWUiLCJEQl9OQU1FIiwiZGJDb25uZWN0aW9uU3RyaW5nIiwiYXBpUG9ydCIsIkFQSV9QT1JUIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJEYXRhU2NoZW1hIiwiTnVtYmVyIiwiU3RyaW5nIiwiZW1haWwiLCJwaG9uZSIsIm5ld3NsZXR0ZXJzIiwiQm9vbGVhbiIsImJpcnRoZGF0ZSIsImJpb2dyYXBoeSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwidGltZXN0YW1wcyIsIm1vZGVsIiwicmVxdWlyZWQiLCJ1c2VybmFtZVZhbGlkYXRvciIsImVtYWlsVmFsaWRhdG9yIiwicGhvbmVWYWxpZGF0b3IiLCJwYXNzd29yZFZhbGlkYXRvciIsImRlZmF1bHQiLCJiaXJ0aGRhdGVWYWxpZGF0b3IiLCJiaW9ncmFwaHlWYWxpZGF0b3IiLCJmaXJzdG5hbWVWYWxpZGF0b3IiLCJsYXN0bmFtZVZhbGlkYXRvciIsImNvbmNhdCIsImFsbEZpZWxkc1NjaGVtYSIsImFwcHJvdmFibGVGaWVsZHMiLCJmaWx0ZXIiLCJmaWVsZFNjaGVtYSIsInNvbWUiLCJkYiIsImluaXQiLCJlcnJvckhhbmRsZXIiLCJsb2NhbGVIYW5kbGVyIiwiYXBpSGFuZGxlcnMiLCJjb29raWVQYXJzZXIiLCJjb3JzIiwibG9nZ2VyIiwiYXBwIiwidXNlIiwic3RhdGljIiwiaW5kZXgiLCJldGFnIiwibGFzdE1vZGlmaWVkIiwic2V0SGVhZGVycyIsImVuZHNXaXRoIiwic2V0SGVhZGVyIiwiaW5kZXhPZiIsInNlbmRGaWxlIiwibGlzdGVuIiwiZGJDb25uZWN0aW9uIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInJlY29ubmVjdFRyaWVzIiwiTUFYX1ZBTFVFIiwicmVjb25uZWN0SW50ZXJ2YWwiLCJjb25uZWN0aW9uIiwib25jZSIsIm9uIiwiY29kZSIsInNldFRpbWVvdXQiLCJta2RpcklmTm90RXhpc3RzIiwicmVsYXRpdmVQYXRoIiwiYWJzUGF0aCIsIm1rZGlyU3luYyIsInN0YXR1cyIsImpzb24iLCJodHRwU3RhdHVzIiwiZGV0YWlscyIsInNjaGVtYSIsInNvdXJjZSIsImZpZWxkIiwibmV4dCIsInVuYXV0aG9yaXplZEVycm9yIiwibWVzc2FnZSIsImFsdGVybmF0aXZlcyIsInB1c2giLCIkb3IiLCJzZWxlY3QiLCJleGVjIiwiSW50bE1lc3NhZ2VGb3JtYXQiLCJ0cmFuc2xhdGlvbnMiLCJhY2NlcHRMYW5ndWFnZSIsInByZWxvYWRNZXNzYWdlcyIsImRldGVjdExvY2FsZSIsImxhbmd1YWdlcyIsImNvb2tpZXMiLCJjb29raWUiLCJtYXhBZ2UiLCJjb29raWVMb2NhbGUiLCJoZWFkZXJzIiwiZXhwcmVzc0p3dCIsInNlY3JldCIsInVubGVzcyIsImFsZ29yaXRobSIsInNjaGVtZSIsIml0ZW0iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QU8sSUFBUDtBQUMzQixHQVRNLENBQVA7QUFVQSxDLENBRUQ7OztBQUNBLFNBQVN2SCxXQUFULENBQXFCd00sTUFBckIsRUFBNkJwTSxJQUE3QixFQUFtQztBQUNsQyxTQUFPM0UsUUFBUSxDQUFDLE9BQUQsRUFBVStRLE1BQVYsRUFBa0JwTSxJQUFsQixDQUFmO0FBQ0EsQyxDQUVEOzs7QUFDQSxTQUFTaUIsV0FBVCxDQUFzQm1MLE1BQXRCLEVBQThCQyxJQUE5QixFQUFvQztBQUNuQyxTQUFPaFIsUUFBUSxDQUFDLE1BQUQsRUFBUytRLE1BQVQsRUFBaUJDLElBQWpCLENBQWY7QUFDQSxDOzs7Ozs7Ozs7OztBQzNCRCw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2RlcyA9IHt9KSB7XHJcblx0Ly8g0L7Qs9GA0LDQvdC40YfQuNCy0LDQtdC8INC+0LHRitGR0Lwg0YLQtdC60YHRgtCwXHJcblx0aWYgKCB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiA0MDAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2RlcyA9IHt9KSB7XHJcblxyXG5cdC8vINCf0YPRgdGC0LDRjyDRgdGC0YDQvtC60LBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9FTVBUWTtcclxuXHJcblx0Ly8g0J3QtdCy0LXRgNC90YvQuSDRhNC+0YDQvNCw0YJcclxuXHRjb25zdCBkYXRlRm9ybWF0ID0gL15bMC05XXs0fS0oPzowWzEtOV18MVswMTJdKS0oPzowWzEtOV18WzEyXVswLTldfDNbMDFdKSQvO1xyXG5cdGNvbnN0IGlzQ29ycmVjdCA9IGRhdGVGb3JtYXQudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhaXNDb3JyZWN0IClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cclxuXHRjb25zdCB0c0JpcnRoZGF0ZSA9IERhdGUucGFyc2UodmFsdWUpO1xyXG5cdGlmICggaXNOYU4odHNCaXJ0aGRhdGUpIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cclxuXHRjb25zdCB0c1RvZGF5ID0gRGF0ZS5ub3coKTtcclxuXHRcclxuXHQvLyDQlNCw0YLQsCDQuNC3INCx0YPQtNGD0YnQtdCz0L5cclxuXHRpZiAoIHRzQmlydGhkYXRlID4gdHNUb2RheSApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fRUFSTFk7XHJcblx0XHJcblx0Ly8g0JzQsNC60YHQuNC80YPQvCAtIDE1MCDQu9C10YIgXHJcblx0aWYgKCB0c1RvZGF5IC0gdHNCaXJ0aGRhdGUgPiAxNTAgKiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19PTEQ7XHJcblxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2RlcyA9IHt9KSB7XHJcblxyXG5cdC8vINCf0YPRgdGC0LDRjyDRgdGC0YDQvtC60LBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9FTVBUWTtcclxuXHJcblx0Ly8g0JzQsNC60YHQuNC80YPQvCAtIDEwMCDRgdC40LzQstC+0LvQvtCyIFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID4gMTI4IClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cdFxyXG5cdC8vINCR0L7Qu9GM0YjQuNC90YHRgtCy0L4g0YDQsNC30YPQvNC90YvRhSDQsNC00YDQtdGB0L7QsiDRg9C00L7QstC70LXRgtCy0L7RgNGP0YIg0Y3RgtC+0LzRgyDRhNC+0YDQvNCw0YLRg1xyXG5cdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ2MTU1L2hvdy10by12YWxpZGF0ZS1hbi1lbWFpbC1hZGRyZXNzLWluLWphdmFzY3JpcHRcclxuXHRjb25zdCBlbWFpbFJlZ2V4ID0gL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kLztcclxuXHRsZXQgaXNWYWxpZCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0ZPUk1BVDtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHN0YXR1c0NvZGVzID0ge30pIHtcclxuXHJcblx0Ly8g0J/Rg9GB0YLQsNGPINGB0YLRgNC+0LrQsFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID09PSAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0VNUFRZO1xyXG5cclxuXHQvLyDQnNCw0LrRgdC40LzRg9C8IC0gNDAg0YHQuNC80LLQvtC70L7QsiBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDQwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cdFxyXG5cdC8vINCf0LXRgNCy0YvQuSDRgdC40LzQstC+0Lsg0LTQvtC70LbQtdC9INCx0YvRgtGMINC30LDQs9C70LDQstC90L7QuSDQsdGD0LrQstC+0LlcclxuXHRjb25zdCBmaXJzdExldHRlclJlZ2V4ID0gL15bQS1a0JAt0K/QgV0kLztcclxuXHRsZXQgaXNWYWxpZCA9IGZpcnN0TGV0dGVyUmVnZXgudGVzdCh2YWx1ZS5jaGFyQXQoMCkpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRklSU1RfTEVUVEVSO1xyXG5cdH1cdFx0XHJcblx0XHJcblx0Ly8g0JjQvNGPINC00L7Qu9C20L3QviDRgdC+0L7RgtCy0LXRgtGB0YLQstC+0LLQsNGC0Ywg0YTQvtGA0LzQsNGC0YNcdFxyXG5cdGNvbnN0IG5hbWVSZWdleCA9IC9eLlthLXrQsC3Rj9GRXSokLztcclxuXHRpc1ZhbGlkID0gbmFtZVJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblx0fVx0XHRcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgc3RhdHVzQ29kZXMgPSB7fSkge1xyXG5cclxuXHQvLyDQn9GD0YHRgtCw0Y8g0YHRgtGA0L7QutCwXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRU1QVFk7XHJcblxyXG5cdC8vINCc0LDQutGB0LjQvNGD0LwgLSA1MCDRgdC40LzQstC+0LvQvtCyIFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID4gNTAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfVE9PX0xPTkc7XHJcblx0XHJcblx0Ly8g0J/QtdGA0LLRi9C5INGB0LjQvNCy0L7QuyDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LfQsNCz0LvQsNCy0L3QvtC5INCx0YPQutCy0L7QuVxyXG5cdGNvbnN0IGZpcnN0TGV0dGVyUmVnZXggPSAvXltBLVrQkC3Qr9CBXSQvO1xyXG5cdGxldCBpc1ZhbGlkID0gZmlyc3RMZXR0ZXJSZWdleC50ZXN0KHZhbHVlLmNoYXJBdCgwKSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9GSVJTVF9MRVRURVI7XHJcblx0fVxyXG5cclxuXHQvLyDQn9C+0YHQu9C10LTQvdC40Lkg0YHQuNC80LLQvtC7INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQsdGD0LrQstC+0LlcclxuXHRjb25zdCBsYXN0TGV0dGVyUmVnZXggPSAvXlthLXrQsC3Rj9GRXSQvO1xyXG5cdGlzVmFsaWQgPSBsYXN0TGV0dGVyUmVnZXgudGVzdCh2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoLTEpKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0xBU1RfU1lNQk9MO1xyXG5cdH1cclxuXHJcblx0Ly8g0JzQuNC90LjQvNGD0Lwg0LTQstC1INCx0YPQutCy0Ysg0L/QvtGB0LvQtSDQtNC10YTQuNGB0LBcclxuXHRjb25zdCBlbmRpbmdSZWdleCA9IC8tW2EtetCwLdGP0ZFdJC87XHJcblx0aXNWYWxpZCA9IGVuZGluZ1JlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1dST05HX0VORElORztcclxuXHR9XHRcdFxyXG5cdFxyXG5cdC8vINCk0LDQvNC40LvQuNGPINC00L7Qu9C20L3QsCDRgdC+0L7RgtCy0LXRgtGB0YLQstC+0LLQsNGC0Ywg0YTQvtGA0LzQsNGC0YNcdFxyXG5cdGNvbnN0IG5hbWVSZWdleCA9IC9eW0EtWtCQLdCv0IFdWy1hLXrQsC3Rj9GRXSokLztcclxuXHRpc1ZhbGlkID0gbmFtZVJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfSU5WQUxJRF9GT1JNQVQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBzdGF0dXNDb2Rlcykge1xyXG5cclxuXHQvLyDQn9GD0YHRgtCw0Y8g0YHRgtGA0L7QutCwXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDAgKVxyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfRU1QVFk7XHJcblxyXG5cdC8vINCc0LDQutGB0LjQvNGD0LwgLSAxMjgg0YHQuNC80LLQvtC70L7QsiBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDEyOCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fTE9ORztcclxuXHRcclxuXHRjb25zdCBncnBMZXR0ZXJzID0gXCJbYS16QS1aXVwiO1xyXG5cdGNvbnN0IGdycERpZ2l0cyA9IFwiWzAtOV1cIjtcclxuXHRjb25zdCBncnBTeW1ib2xzID0gXCJcIjtcclxuXHRjb25zdCBmb3JtYXQgPSBgKD86JHtncnBMZXR0ZXJzfT8ke2dycERpZ2l0c30/JHtncnBTeW1ib2xzfT8pK2A7XHJcblx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoZm9ybWF0KTtcclxuXHRyZWdleHAgPSAvXig/OlthLXpBLVpdfFswLTldfFstXywuJz48PSsmJSQjQCEqICkoflxcXS9cXFxce31dKSskLztcclxuXHRsZXQgaXNWYWxpZCA9IHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cdH1cclxuXHJcblx0Ly8g0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0LrQsNC6INC80LjQvdC40LzRg9C8INC00LLQtSDQs9GA0YPQv9C/0Ysg0YHQuNC80LLQvtC70L7QslxyXG5cdC8vIDEpINCx0YPQutCy0Ysg0LvQsNGC0LjQvdGB0LrQvtCz0L4g0LDQu9GE0LDQstC40YLQsFxyXG5cdC8vIDIpINGG0LjRhNGA0YtcclxuXHQvLyAzKSDRgdC/0LXRhtGB0LjQvNCy0L7Qu9GLXHJcblx0cmVnZXhwID0gL1thLXpBLVpdLztcclxuXHRjb25zdCBoYXNMZXR0ZXJzID0gcmVnZXhwLnRlc3QodmFsdWUpO1xyXG5cclxuXHRyZWdleHAgPSAvWzAtOV0vO1xyXG5cdGNvbnN0IGhhc0RpZ2l0cyA9IHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuXHJcblx0cmVnZXhwID0gL1stXywuJz48PSsmJSQjQCEqICkoflxcXS9cXFxce31dLztcclxuXHRjb25zdCBoYXNTeW1ib2xzID0gcmVnZXhwLnRlc3QodmFsdWUpO1xyXG5cclxuXHRpZiAoIGhhc0xldHRlcnMgKyBoYXNEaWdpdHMgKyBoYXNTeW1ib2xzIDwgMiApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlNVRkZJQ0lFTlQ7XHJcblxyXG5cdGlmICggdmFsdWUubGVuZ3RoIDwgOCApXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fU0hPUlQ7XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHN0YXR1c0NvZGVzID0ge30pIHtcclxuXHJcblx0Ly8g0J/Rg9GB0YLQsNGPINGB0YLRgNC+0LrQsFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID09PSAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0VNUFRZO1xyXG5cclxuXHQvLyDQnNCw0LrRgdC40LzRg9C8IC0gMzAg0YHQuNC80LLQvtC70L7QsiBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDMwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cdFxyXG5cdC8vINCf0LXRgNCy0YvQuSDRgdC40LzQstC+0Lsg0LTQvtC70LbQtdC9INCx0YvRgtGMINCx0YPQutCy0L7QuVxyXG5cdGNvbnN0IGZpcnN0U3ltYm9sUmVnZXggPSAvXlxcKy87XHJcblx0bGV0IGlzVmFsaWQgPSBmaXJzdFN5bWJvbFJlZ2V4LnRlc3QodmFsdWUuY2hhckF0KDApKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0ZJUlNUX1NZTUJPTDtcclxuXHR9XHJcblxyXG5cdC8vIE9ubHkgdmFsaWQgY2hhcmFjdGVyc1xyXG5cdGNvbnN0IHBob25lTGV4aXNSZWdleCA9IC9eWy0rIDAtOV0rJC87XHJcblx0aXNWYWxpZCA9IHBob25lTGV4aXNSZWdleC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfQ0hBUlM7XHJcblx0fVxyXG5cdFxyXG5cdC8vINCd0L7QvNC10YAg0LTQvtC70LbQtdC9INGB0L7QvtGC0LLQtdGC0YHRgtCy0L7QstCw0YLRjCDRhNC+0YDQvNCw0YLRg1x0XHJcblx0Y29uc3QgcGhvbmVHcmFtbWFyUmVnZXggPSAvXlxcK1swLTldezEsM30oPzooPzpbLSBdWzAtOV17Miw0fSl7Myw0fXxbLSBdP1swLTldezUsMTB9KSQvO1xyXG5cdGlzVmFsaWQgPSBwaG9uZUdyYW1tYXJSZWdleC50ZXN0KHZhbHVlKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0lOVkFMSURfRk9STUFUO1xyXG5cdH1cclxuXHJcblx0Ly8g0JzQuNC90LjQvNGD0LwgLSA1INGB0LjQvNCy0L7Qu9C+0LJcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA8IDEwICkgXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fU0hPUlQ7XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHN0YXR1c0NvZGVzID0ge30pIHtcclxuXHJcblx0Ly8g0J/Rg9GB0YLQsNGPINGB0YLRgNC+0LrQsFxyXG5cdGlmICggdmFsdWUubGVuZ3RoID09PSAwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0VNUFRZO1xyXG5cclxuXHQvLyDQnNCw0LrRgdC40LzRg9C8IC0gMzAg0YHQuNC80LLQvtC70L7QsiBcclxuXHRpZiAoIHZhbHVlLmxlbmd0aCA+IDMwIClcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX1RPT19MT05HO1xyXG5cdFxyXG5cdC8vINCf0LXRgNCy0YvQuSDRgdC40LzQstC+0Lsg0LTQvtC70LbQtdC9INCx0YvRgtGMINCx0YPQutCy0L7QuVxyXG5cdGNvbnN0IGZpcnN0TGV0dGVyUmVnZXggPSAvXlthLXpdJC87XHJcblx0bGV0IGlzVmFsaWQgPSBmaXJzdExldHRlclJlZ2V4LnRlc3QodmFsdWUuY2hhckF0KDApKTtcclxuXHRpZiAoICEgaXNWYWxpZCApIHtcclxuXHRcdHJldHVybiBzdGF0dXNDb2Rlcy5FX0ZJUlNUX0xFVFRFUjtcclxuXHR9XHRcdFxyXG5cdFxyXG5cdC8vINCY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC+0YLQstC10YLRgdGC0LLQvtCy0LDRgtGMINGE0L7RgNC80LDRgtGDXHRcclxuXHRjb25zdCB1c2VybmFtZVJlZ2V4ID0gL15bLWEtejAtOV0rJC87XHJcblx0aXNWYWxpZCA9IHVzZXJuYW1lUmVnZXgudGVzdCh2YWx1ZSk7XHJcblx0aWYgKCAhIGlzVmFsaWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9JTlZBTElEX0ZPUk1BVDtcclxuXHR9XHJcblxyXG5cdC8vINCc0LjQvdC40LzRg9C8IC0gNSDRgdC40LzQstC+0LvQvtCyXHJcblx0aWYgKCB2YWx1ZS5sZW5ndGggPCA1ICkgXHJcblx0XHRyZXR1cm4gc3RhdHVzQ29kZXMuRV9UT09fU0hPUlQ7XHJcblxyXG5cdC8vINCf0L7RgdC70LXQtNC90LjQuSDRgdC40LzQstC+0LsgLSDQsdGD0LrQstCwINC40LvQuCDRhtC40YTRgNCwXHJcblx0Y29uc3QgbGFzdExldHRlclJlZ2V4ID0gL15bYS16MC05XSQvO1xyXG5cdGlzVmFsaWQgPSBsYXN0TGV0dGVyUmVnZXgudGVzdCh2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkpO1xyXG5cdGlmICggISBpc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHN0YXR1c0NvZGVzLkVfTEFTVF9TWU1CT0w7XHJcblx0fVx0XHRcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iLCJjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcclxuY29uc3QgVXNlclByb2ZpbGUgPSByZXF1aXJlKCcuLi9tb2RlbHMvdXNlci1wcm9maWxlJyk7XHJcbmNvbnN0IHZhbGlkYXRvciA9IHJlcXVpcmUoJy4uL3V0aWxzL3ZhbGlkYXRvcicpO1xyXG5jb25zdCBsb2dpbkZpZWxkc1NjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZScpLmxvZ2luRmllbGRzU2NoZW1hO1xyXG5jb25zdCB7IHJlc3BvbmQsIHJlc3BvbmRTdWNjZXNzLCByZXNwb25kRmFpbHVyZSwgZXh0cmFjdERhdGEgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2kxOG4nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyLmdldCgnL2F1dGgnLCBhdXRoZW50aWNhdGlvbkhhbmRsZXIpO1xyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0LfQsNC/0YDQvtGB0LAg0L3QsCDQsNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNGOINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG5mdW5jdGlvbiBhdXRoZW50aWNhdGlvbkhhbmRsZXIocmVxLCByZXMpIHtcclxuXHRjb25zdCBsb2NhbGVJZCA9IHJlcS5sb2NhbGU7XHJcblx0Y29uc3QgbG9jYWxpemVkTWVzc2FnZXMgPSBtZXNzYWdlc1tsb2NhbGVJZF07XHJcblx0Y29uc3QgbG9naW5EYXRhID0gZXh0cmFjdERhdGEobG9naW5GaWVsZHNTY2hlbWEsIHJlcS5xdWVyeSk7XHJcblx0bGV0IGxvZ2luRGF0YVZhbGlkID0gdmFsaWRhdG9yLnZhbGlkYXRlQWxsKGxvZ2luRmllbGRzU2NoZW1hLCBsb2dpbkRhdGEpO1xyXG5cdGlmICggISBsb2dpbkRhdGFWYWxpZCApIHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmF1dGhJbnZhbGlkRGF0YS5mb3JtYXQoKSwgNDA2KTtcclxuXHRVc2VyUHJvZmlsZS5maW5kKGxvZ2luRGF0YSwgXCJfaWRcIiwgKGVyciwgZGF0YSkgPT4ge1xyXG5cdFx0aWYgKCBlcnIgKVxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBlcnIpXHJcblx0XHRlbHNlIGlmICggZGF0YS5sZW5ndGggIT09IDEgKVxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy5hdXRoV3JvbmdDcmVkZW50aWFscy5mb3JtYXQoKSwgNDA0KTtcclxuXHJcblx0XHRjb25zdCB1c2VyID0gZGF0YVswXTtcclxuXHRcdGNvbnN0IHRva2VuID0gand0LnNpZ24oeyBzdWI6IHVzZXIuX2lkIH0sIGNvbmZpZy5qd3RTZWNyZXQpO1xyXG5cdFx0Y29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBhdXRob3JpemVkICR7bG9naW5EYXRhLnVzZXJuYW1lfWApO1xyXG4gICAgICAgIHJldHVybiByZXNwb25kU3VjY2VzcyhyZXMsIHRva2VuKTtcclxuXHR9KTtcclxufSIsImNvbnN0IFVzZXJQcm9maWxlID0gcmVxdWlyZSgnLi4vbW9kZWxzL3VzZXItcHJvZmlsZScpO1xyXG5jb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy92YWxpZGF0b3InKTtcclxuY29uc3QgeyByZXNwb25kLCByZXNwb25kRmFpbHVyZSwgaXNLZXlEYXRhVW5pcXVlIH0gPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XHJcbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2kxOG4nKTtcclxuLy8gY29uc3QgeyBhcHByb3ZhYmxlRmllbGRzU2NoZW1hIH0gPSByZXF1aXJlKFwiZXNtXCIpKG1vZHVsZSkoJy4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZScpO1xyXG4vLyBpbXBvcnQgeyBhcHByb3ZhYmxlRmllbGRzU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hcy9zY2hlbWEtdXNlci1wcm9maWxlJztcclxuY29uc3QgYXBwcm92YWJsZUZpZWxkc1NjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZScpLmFwcHJvdmFibGVGaWVsZHNTY2hlbWE7XHJcbmxldCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyLmdldCgnL2NoZWNrLXVuaXF1ZW5lc3MnLCBjaGVja1VuaXF1ZW5lc3NIYW5kbGVyKTtcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC30LDQv9GA0L7RgdCwINC90LAg0L/RgNC+0LLQtdGA0LrRgyDRg9C90LjQutCw0LvRjNC90L7RgdGC0LhcclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tVbmlxdWVuZXNzSGFuZGxlcihyZXEsIHJlcykge1xyXG5cdGNvbnN0IGxvY2FsZUlkID0gcmVxLmxvY2FsZTtcclxuXHRjb25zdCBsb2NhbGl6ZWRNZXNzYWdlcyA9IG1lc3NhZ2VzW2xvY2FsZUlkXTtcclxuXHRjb25zdCBuYW1lID0gcmVxLnF1ZXJ5Lm5hbWU7XHJcblx0Y29uc3QgdmFsdWUgPSByZXEucXVlcnkudmFsdWU7XHJcblx0Y29uc3QgZmllbGREYXRhID0geyBbbmFtZV06IHZhbHVlIH07XHJcblx0bGV0IGZpZWxkRGF0YVZhbGlkID0gdmFsaWRhdG9yLnZhbGlkYXRlT25lKGFwcHJvdmFibGVGaWVsZHNTY2hlbWEsIGZpZWxkRGF0YSk7XHJcblx0aWYgKCAhIGZpZWxkRGF0YVZhbGlkICkgcmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMuaW52YWxpZEZvcm1hdC5mb3JtYXQoKSwgNDAwKTtcclxuXHRcclxuXHRjb25zdCBpc1VuaXF1ZSA9IGF3YWl0IGlzS2V5RGF0YVVuaXF1ZShVc2VyUHJvZmlsZSwgZmllbGREYXRhKTtcclxuXHJcblx0cmV0dXJuIGlzVW5pcXVlXHJcblx0XHQ/IHJlc3BvbmQocmVzLCBcIkFQUFJPVkVEXCIpXHJcblx0XHQ6IHJlc3BvbmQocmVzLCBcIlJFSkVDVEVEXCIpXHJcbn07IiwiY29uc3QgeyByZXNwb25kU3VjY2VzcywgcmVzcG9uZEZhaWx1cmUgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcclxuY29uc3QgeyBzZXRMb2NhbGVDb29raWUsIG1lc3NhZ2VzIH0gPSByZXF1aXJlKCcuLi91dGlscy9pMThuJyk7XHJcbmxldCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCBBbGxIdG1sRW50aXRpZXMgPSByZXF1aXJlKCdodG1sLWVudGl0aWVzJykuQWxsSHRtbEVudGl0aWVzO1xyXG5jb25zdCBlbnRpdGllcyA9IG5ldyBBbGxIdG1sRW50aXRpZXMoKTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlci5nZXQoJy9nZXQtbG9jYWxlJywgZ2V0TG9jYWxlSGFuZGxlcik7XHJcblxyXG5cclxubGV0IGxvY2FsZURhdGEgPSBbXTtcclxuXHJcblsncnUnXS5mb3JFYWNoKChsb2NhbGUpID0+IHtcclxuXHRsZXQgbWVzc2FnZXMgPSByZXF1aXJlKGAuLi9wdWJsaWMvbGFuZy8ke2xvY2FsZX0uanNvbmApO1xyXG5cdGZvciAoIGxldCBrZXkgaW4gbWVzc2FnZXMgKSB7XHJcblx0XHRtZXNzYWdlc1trZXldID0gZW50aXRpZXMuZGVjb2RlKG1lc3NhZ2VzW2tleV0pO1xyXG5cdH1cclxuXHRsb2NhbGVEYXRhW2xvY2FsZV0gPSB7XHJcblx0XHRsb2NhbGUsXHJcblx0XHRtZXNzYWdlc1xyXG5cdFx0Ly8gZm9ybWF0czogZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsIGAuLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50bC9sb2NhbGUtZGF0YS8ke2xvY2FsZUlkfS5qc2ApKS50b1N0cmluZygpXHJcblx0fVxyXG59KTtcclxuXHJcbi8vIExvY2FsZSByZXF1ZXN0IGhhbmRsZXJcclxuZnVuY3Rpb24gZ2V0TG9jYWxlSGFuZGxlcihyZXEsIHJlcykge1xyXG5cdGNvbnN0IGN1cnJlbnRMb2NhbGVJZCA9IHJlcS5sb2NhbGU7XHJcblx0Y29uc3Qgd2FudGVkTG9jYWxlSWQgPSByZXEucXVlcnkuaWQ7XHJcblx0Y29uc3QgbG9jYWxpemVkTWVzc2FnZXMgPSBtZXNzYWdlc1tjdXJyZW50TG9jYWxlSWRdO1xyXG5cclxuXHRpZiAoICEgbG9jYWxlRGF0YVt3YW50ZWRMb2NhbGVJZF0gKVxyXG5cdFx0cmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy5sb2NhbGVOb3RGb3VuZC5mb3JtYXQoKSwgNDA0KTtcclxuXHRlbHNlIHtcclxuXHRcdHNldExvY2FsZUNvb2tpZShyZXMsIHdhbnRlZExvY2FsZUlkKTtcclxuXHRcdHJlc3BvbmRTdWNjZXNzKHJlcywgbG9jYWxlRGF0YVt3YW50ZWRMb2NhbGVJZF0pO1xyXG5cdH1cclxufSIsImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgVXNlclByb2ZpbGUgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3VzZXItcHJvZmlsZVwiKTtcclxuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZhbGlkYXRvclwiKTtcclxuY29uc3QgeyByZXNwb25kU3VjY2VzcywgcmVzcG9uZEZhaWx1cmUsIGV4dHJhY3REYXRhIH0gPSByZXF1aXJlKFwiLi4vdXRpbHMvaGVscGVyc1wiKTtcclxuY29uc3QgeyBtZXNzYWdlcyB9ID0gcmVxdWlyZSgnLi4vdXRpbHMvaTE4bicpO1xyXG5cclxubGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIuZ2V0KCcvZ2V0LXVzZXItcHJvZmlsZScsIGdldFVzZXJQcm9maWxlSGFuZGxlcik7XHJcblxyXG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQt9Cw0L/RgNC+0YHQsCDQvdCwINC/0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0L/RgNC+0YTQuNC70Y9cclxuZnVuY3Rpb24gZ2V0VXNlclByb2ZpbGVIYW5kbGVyKHJlcSwgcmVzKSB7XHJcblx0VXNlclByb2ZpbGUuZmluZEJ5SWQocmVxLnVzZXIuc3ViLCBcInVzZXJuYW1lIGVtYWlsIGJpcnRoZGF0ZSBwaG9uZSBuZXdzbGV0dGVycyBiaW9ncmFwaHkgZmlyc3RuYW1lIGxhc3RuYW1lXCIsIChlcnIsIGRhdGEpID0+IHtcclxuXHRcdGlmICggZXJyIClcclxuXHRcdFx0cmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgZXJyKTtcclxuXHRcdGVsc2UgaWYgKCAhIGRhdGEgKSB7XHJcblx0XHRcdGNvbnN0IGxvY2FsaXplZE1lc3NhZ2VzID0gbWVzc2FnZXNbcmVxLmxvY2FsZV07XHJcblx0XHRcdHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGxvY2FsaXplZE1lc3NhZ2VzLmF1dGhXcm9uZ0NyZWRlbnRpYWxzLmZvcm1hdCgpLCA0MDQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGxldCB7IF9pZCwgdXNlcm5hbWUsIC4uLnVzZXJQcm9maWxlIH0gPSBkYXRhLnRvT2JqZWN0KCk7XHJcblx0XHRcdGNvbnN0IGRvZXNQaG90b0V4aXN0ID0gZnMuZXhpc3RzU3luYyhwYXRoLnJlc29sdmUoJ3B1YmxpYy9waG90b3MnLCBgJHtkYXRhLnVzZXJuYW1lfS5qcGdgKSk7XHJcblx0XHRcdHVzZXJQcm9maWxlLnBob3RvID0gZG9lc1Bob3RvRXhpc3RcclxuXHRcdFx0XHQ/IGAvcGhvdG9zLyR7ZGF0YS51c2VybmFtZX0uanBnYFxyXG5cdFx0XHRcdDogJy9hc3NldHMvaW1nL25vLXBob3RvLnN2Zyc7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uZFN1Y2Nlc3MocmVzLCB1c2VyUHJvZmlsZSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBbXHJcblx0cmVxdWlyZSgnLi9hdXRoJyksXHJcblx0cmVxdWlyZSgnLi9nZXQtbG9jYWxlJyksXHJcblx0cmVxdWlyZSgnLi9jaGVjay11bmlxdWVuZXNzJyksXHJcblx0cmVxdWlyZSgnLi9nZXQtdXNlci1wcm9maWxlJyksXHJcblx0cmVxdWlyZSgnLi9wdXQtdXNlci1wcm9maWxlJyksXHJcbl0iLCJjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5jb25zdCBVc2VyUHJvZmlsZSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvdXNlci1wcm9maWxlXCIpO1xyXG5jb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKFwiLi4vdXRpbHMvdmFsaWRhdG9yXCIpO1xyXG5jb25zdCB7IHJlc3BvbmRTdWNjZXNzLCByZXNwb25kRmFpbHVyZSwgZXh0cmFjdERhdGEsIGlzS2V5RGF0YVVuaXF1ZSB9ID0gcmVxdWlyZShcIi4uL3V0aWxzL2hlbHBlcnNcIik7XHJcbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2kxOG4nKTtcclxuY29uc3QgeyBrZXlGaWVsZHNTY2hlbWEsIGRldGFpbEZpZWxkc1NjaGVtYSB9ID0gcmVxdWlyZShcIi4uL3NjaGVtYXMvc2NoZW1hLXVzZXItcHJvZmlsZVwiKTtcclxuXHJcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpOyAvLyDQv9Cw0YDRgdC40YIgbXVsdGlwYXJ0LWZvcm0tZGF0YVxyXG5sZXQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQt9Cw0LPRgNGD0LfQutC4INC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxubGV0IHVwbG9hZEhhbmRsZXIgPSBtdWx0ZXIoe1xyXG5cdGRlc3Q6IHBhdGgucmVzb2x2ZSgndXBsb2FkcycpLFxyXG5cdGxpbWl0czoge1xyXG5cdFx0ZmlsZVNpemU6IDUgKiAxMDI0ICogMTAyNCxcclxuXHRcdGZpbGVzOiAxLFxyXG5cdFx0cGFydHM6IDIwXHJcblx0fSxcclxuXHQvLyBmaWxlRmlsdGVyOiAocmVxLCBmaWxlLCBjYikgPT4ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coZmlsZSk7XHJcblx0Ly8gXHRjYihudWxsLCB0cnVlKTtcclxuXHQvLyB9XHJcbn0pLnNpbmdsZSgncGhvdG8nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyLnBvc3QoJy9wdXQtdXNlci1wcm9maWxlJywgdXBsb2FkSGFuZGxlciwgZGF0YUhhbmRsZXIpO1xyXG5cclxuLy8gINCe0LHRgNCw0LHQvtGC0YfQuNC6INC30LDQv9GA0L7RgdCwINC90LAg0LTQvtCx0LDQstC70LXQvdC40LUg0LfQsNC/0LjRgdC4XHJcbmFzeW5jIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKHJlcSwgcmVzKSB7XHJcblx0Y29uc3QgbG9jYWxpemVkTWVzc2FnZXMgPSBtZXNzYWdlc1tyZXEubG9jYWxlXTtcclxuXHJcblx0Ly8g0JLRi9GC0LDRgdC60LjQstCw0LXQvCDRgdC90LDRh9Cw0LvQsCDQutC70Y7RhyDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCDRg9C90LjQutCw0LvRjNC90L7RgdGC0Lgg0LfQsNC/0LjRgdC4XHJcblx0Y29uc3Qga2V5RGF0YSA9IGV4dHJhY3REYXRhKGtleUZpZWxkc1NjaGVtYSwgcmVxLmJvZHkpO1xyXG5cdGxldCBrZXlEYXRhVmFsaWQgPSB2YWxpZGF0b3IudmFsaWRhdGVBbGwoa2V5RmllbGRzU2NoZW1hLCBrZXlEYXRhKTtcclxuXHRpZiAoICEga2V5RGF0YVZhbGlkICkgcmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMuaW52YWxpZEtleUZpZWxkc0RhdGEuZm9ybWF0KCksIDQwNik7XHJcblxyXG5cdC8vIENoZWNrIGlmIHRoZSBrZXkgZGF0YSBpcyB1bmlxdWVcclxuXHRjb25zdCBpc1VuaXF1ZSA9IGF3YWl0IGlzS2V5RGF0YVVuaXF1ZShVc2VyUHJvZmlsZSwga2V5RGF0YSk7XHJcblxyXG5cdGlmICggISBpc1VuaXF1ZSApXHJcblx0XHRyZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy51c2VyQWxyZWFkeUV4aXN0cy5mb3JtYXQoKSwgNDA5KTtcclxuXHJcblx0Y29uc3QgZGV0YWlsc0RhdGEgPSBleHRyYWN0RGF0YShkZXRhaWxGaWVsZHNTY2hlbWEsIHJlcS5ib2R5KTtcclxuXHRjb25zdCBkZXRhaWxzRmllbGRzVmFsaWQgPSB2YWxpZGF0b3IudmFsaWRhdGVBbGwoZGV0YWlsRmllbGRzU2NoZW1hLCBkZXRhaWxzRGF0YSk7XHJcblx0aWYgKCAhZGV0YWlsc0ZpZWxkc1ZhbGlkICkge1xyXG5cdFx0cmV0dXJuIHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMuaW52YWxpZEZvcm1EYXRhLmZvcm1hdCgpLCA0MDYpO1xyXG5cdH1cclxuXHJcblx0bGV0IHVzZXIgPSBuZXcgVXNlclByb2ZpbGUoKTtcclxuXHR1c2VyID0gT2JqZWN0LmFzc2lnbih1c2VyLCBrZXlEYXRhLCBkZXRhaWxzRGF0YSk7XHJcblxyXG5cdGNvbnN0IHsgcGFzc3dvcmQsIC4uLmFsbERldGFpbHMgfSA9IE9iamVjdC5hc3NpZ24oe30sIGtleURhdGEsIGRldGFpbHNEYXRhKTtcclxuXHRjb25zdCBkYXRhU3RyaW5nID0gT2JqZWN0LmtleXMoYWxsRGV0YWlscykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XHJcblx0XHRyZXR1cm4gYCR7cHJldn1cXG4ke2N1cnJlbnR9OiBcIiR7YWxsRGV0YWlsc1tjdXJyZW50XX1cImA7XHJcblx0fSwgJycpO1xyXG5cdGNvbnNvbGUubG9nKGBVc2VyIGRhdGEgc3VtYml0dGVkOiAke2RhdGFTdHJpbmd9YCk7XHJcblx0XHJcblx0Ly8gSWYgYSBwaG90byBpcyBhdHRhY2hlZCwgbW92ZSBpdCB0byB0aGUgc3RvcmFnZVxyXG5cdGlmICggcmVxLmZpbGUgKSB7XHJcblx0XHRjb25zb2xlLmxvZyhgUGhvdG8gYXR0YWNoZWQ6ICR7cmVxLmZpbGUub3JpZ2luYWxuYW1lfSBbJHtNYXRoLmNlaWwocmVxLmZpbGUuc2l6ZSAvIDEwMjQpfSBLQl1gKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHRtcFVwbG9hZGVkRmlsZVBhdGggPSBwYXRoLnJlc29sdmUocmVxLmZpbGUucGF0aCk7XHJcblx0XHRcdGNvbnN0IGRzdEZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKCdwdWJsaWMvcGhvdG9zJywgYCR7dXNlci51c2VybmFtZX0uanBnYCk7XHJcblx0XHRcdGZzLnJlbmFtZVN5bmModG1wVXBsb2FkZWRGaWxlUGF0aCwgZHN0RmlsZVBhdGgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHJlc3BvbmRGYWlsdXJlKHJlcywgbG9jYWxpemVkTWVzc2FnZXMuZmFpbGVkVG9TYXZlUGhvdG8uZm9ybWF0KHtlcnJNc2c6IGVycm9yfSksIDUwMCk7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zb2xlLmxvZyhcIlNhdmluZyB1c2VyIHByb2ZpbGUgZGF0YVwiKTtcclxuXHR1c2VyLnNhdmUoZXJyID0+IHtcclxuXHRcdHJldHVybiBlcnJcclxuXHRcdFx0PyByZXNwb25kRmFpbHVyZShyZXMsIGVyciwgNTAwKVxyXG5cdFx0XHQ6IHJlc3BvbmRTdWNjZXNzKHJlcyk7XHJcblx0fSk7XHJcbn0iLCJjb25zdCBqd3RTZWNyZXQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8IFwiSnVzdCBhIHJhbmRvbSB1bmlxdWUgc3RyaW5nIHRvIGJlIHVzZWQgd2l0aCBKV1RcIjtcclxuY29uc3QgZGJIb3N0ID0gcHJvY2Vzcy5lbnYuREJfSE9TVCB8fCBcImxvY2FsaG9zdFwiO1xyXG5jb25zdCBkYlBvcnQgPSBwcm9jZXNzLmVudi5EQl9QT1JUIHx8IDI3MDE3O1xyXG5jb25zdCBkYlVzZXIgPSBwcm9jZXNzLmVudi5EQl9VU0VSIHx8IFwidXNlci1zZXJ2aWNlXCI7XHJcbmNvbnN0IGRiUGFzcyA9IHByb2Nlc3MuZW52LkRCX1BBU1MgfHwgXCJleGFtcGxlXCI7XHJcbmNvbnN0IGRiTmFtZSA9IHByb2Nlc3MuZW52LkRCX05BTUUgfHwgXCJhcHBcIjtcclxuY29uc3QgZGJDb25uZWN0aW9uU3RyaW5nID0gYG1vbmdvZGI6Ly8ke2RiVXNlcn06JHtkYlBhc3N9QCR7ZGJIb3N0fToke2RiUG9ydH0vJHtkYk5hbWV9YDtcclxuY29uc3QgYXBpUG9ydCA9IHByb2Nlc3MuZW52LkFQSV9QT1JUIHx8IDgwO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0and0U2VjcmV0LCBcclxuXHRkYkNvbm5lY3Rpb25TdHJpbmcsXHJcblx0YXBpUG9ydFxyXG59IiwiLy8gY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbi8vIHJlcXVpcmUoJ0BiYWJlbC9yZWdpc3RlcicpKHtcclxuLy8gXHRyb290TW9kZTogXCJ1cHdhcmRcIixcclxuLy8gXHQvLyBpbmNsdWRlOiBbXHJcbi8vICAvLyAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLlwiKSxcclxuLy8gIC8vICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9mcm9udGVuZC8qXCIpLFxyXG4vLyAgLy8gICAgXSxcclxuLy8gfSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc2VydmVyLmpzJyk7IiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuXHJcbi8vIFVzZXIgcHJvZmlsZSBzY2hlbWFcclxuY29uc3QgRGF0YVNjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgaWQ6IE51bWJlcixcclxuICAgIHVzZXJuYW1lOiBTdHJpbmcsXHJcbiAgICBwYXNzd29yZDogU3RyaW5nLFxyXG4gICAgZW1haWw6IFN0cmluZyxcclxuICAgIHBob25lOiBTdHJpbmcsXHJcbiAgICBuZXdzbGV0dGVyczogQm9vbGVhbixcclxuICAgIGJpcnRoZGF0ZTogRGF0ZSxcclxuICAgIGJpb2dyYXBoeTogU3RyaW5nLFxyXG4gICAgZmlyc3RuYW1lOiBTdHJpbmcsXHJcbiAgICBsYXN0bmFtZTogU3RyaW5nLFxyXG4gICAgcGhvdG86IFN0cmluZ1xyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoXCJVc2VyUHJvZmlsZVwiLCBEYXRhU2NoZW1hKTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZW4uanNvblwiOiBcIi4vc3JjL3B1YmxpYy9sYW5nL2VuLmpzb25cIixcblx0XCIuL3J1Lmpzb25cIjogXCIuL3NyYy9wdWJsaWMvbGFuZy9ydS5qc29uXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3B1YmxpYy9sYW5nIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzb24kXCI7IiwiaW1wb3J0IHVzZXJuYW1lVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL1VzZXJuYW1lL1VzZXJuYW1lLnZhbGlkYXRvclwiO1xyXG5pbXBvcnQgcGFzc3dvcmRWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vUGFzc3dvcmQvUGFzc3dvcmQudmFsaWRhdG9yXCI7XHJcbmltcG9ydCBlbWFpbFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9FbWFpbC9FbWFpbC52YWxpZGF0b3JcIjtcclxuaW1wb3J0IHBob25lVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL1Bob25lL1Bob25lLnZhbGlkYXRvclwiO1xyXG5pbXBvcnQgYmlydGhkYXRlVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaWdudXBGb3JtL0JpcnRoZGF0ZS9CaXJ0aGRhdGUudmFsaWRhdG9yXCI7XHJcbmltcG9ydCBiaW9ncmFwaHlWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vQmlvZ3JhcGh5L0Jpb2dyYXBoeS52YWxpZGF0b3JcIjtcclxuaW1wb3J0IGZpcnN0bmFtZVZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2lnbnVwRm9ybS9GaXJzdG5hbWUvRmlyc3RuYW1lLnZhbGlkYXRvclwiO1xyXG5pbXBvcnQgbGFzdG5hbWVWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1NpZ251cEZvcm0vTGFzdG5hbWUvTGFzdG5hbWUudmFsaWRhdG9yXCI7XHJcblxyXG5jb25zdCBrZXlGaWVsZHNTY2hlbWEgPSBbXHJcblx0e1xyXG5cdFx0bmFtZTogXCJ1c2VybmFtZVwiLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHR2YWxpZGF0b3I6IHVzZXJuYW1lVmFsaWRhdG9yXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcImVtYWlsXCIsXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdHZhbGlkYXRvcjogZW1haWxWYWxpZGF0b3JcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwicGhvbmVcIixcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dmFsaWRhdG9yOiBwaG9uZVZhbGlkYXRvclxyXG5cdH1cclxuXTtcclxuXHJcbmNvbnN0IGRldGFpbEZpZWxkc1NjaGVtYSA9IFtcclxuXHR7XHJcblx0XHRuYW1lOiBcInBhc3N3b3JkXCIsXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdHZhbGlkYXRvcjogcGFzc3dvcmRWYWxpZGF0b3JcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwibmV3c2xldHRlcnNcIixcclxuXHRcdHJlcXVpcmVkOiBmYWxzZSxcclxuXHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcImJpcnRoZGF0ZVwiLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHR2YWxpZGF0b3I6IGJpcnRoZGF0ZVZhbGlkYXRvclxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJiaW9ncmFwaHlcIixcclxuXHRcdHJlcXVpcmVkOiBmYWxzZSxcclxuXHRcdHZhbGlkYXRvcjogYmlvZ3JhcGh5VmFsaWRhdG9yXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcImZpcnN0bmFtZVwiLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHR2YWxpZGF0b3I6IGZpcnN0bmFtZVZhbGlkYXRvclxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJsYXN0bmFtZVwiLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHR2YWxpZGF0b3I6IGxhc3RuYW1lVmFsaWRhdG9yXHJcblx0fVxyXG5dO1xyXG5cclxuY29uc3QgbG9naW5GaWVsZHNTY2hlbWEgPSBbXS5jb25jYXQoa2V5RmllbGRzU2NoZW1hWzBdLCBkZXRhaWxGaWVsZHNTY2hlbWFbMF0pO1xyXG5cclxuY29uc3QgYWxsRmllbGRzU2NoZW1hID0ga2V5RmllbGRzU2NoZW1hLmNvbmNhdChkZXRhaWxGaWVsZHNTY2hlbWEpO1xyXG5cclxuY29uc3QgYXBwcm92YWJsZUZpZWxkcyA9IFtcclxuXHQndXNlcm5hbWUnLFxyXG5cdCdlbWFpbCcsXHJcblx0J3Bob25lJ1xyXG5dO1xyXG5jb25zdCBhcHByb3ZhYmxlRmllbGRzU2NoZW1hID0gYWxsRmllbGRzU2NoZW1hLmZpbHRlciggZmllbGRTY2hlbWEgPT4gYXBwcm92YWJsZUZpZWxkcy5zb21lKCBuYW1lID0+IGZpZWxkU2NoZW1hLm5hbWUgPT09IG5hbWUgKSApO1xyXG5cclxuXHJcbmV4cG9ydCB7XHJcblx0bG9naW5GaWVsZHNTY2hlbWEsXHJcblx0a2V5RmllbGRzU2NoZW1hLFxyXG5cdGRldGFpbEZpZWxkc1NjaGVtYSxcclxuXHRhbGxGaWVsZHNTY2hlbWEsXHJcblx0YXBwcm92YWJsZUZpZWxkc1NjaGVtYVxyXG59OyIsImNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XHJcbmNvbnN0IGRiID0gcmVxdWlyZSgnLi91dGlscy9kYicpKCk7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJy4vdXRpbHMvand0JykoKTtcclxuY29uc3QgeyBpbml0LCBlcnJvckhhbmRsZXIgfSA9IHJlcXVpcmUoJy4vdXRpbHMvaGVscGVycycpO1xyXG5jb25zdCB7IGxvY2FsZUhhbmRsZXIgfSA9IHJlcXVpcmUoJy4vdXRpbHMvaTE4bicpO1xyXG5jb25zdCBhcGlIYW5kbGVycyA9IHJlcXVpcmUoJy4vYXBpJyk7XHJcbmNvbnN0IGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTtcclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5jb25zdCBjb3JzID0gcmVxdWlyZShcImNvcnNcIikoKTsgLy8gQ3Jvc3MtT3JpZ2luIFJlc291cmNlIFNoYXJpbmdcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5jb25zdCBsb2dnZXIgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xyXG5cclxuaW5pdCgpO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuLy8gQmVjYXVzZSB3ZSB3YW50IHRvIGFjY2VzcyB0aGUgQVBJIGZyb20gYSByZWFjdCBhcHBsaWNhdGlvbiB0aGF0IGlzIHByb2JhYmx5IHNlcnZlZCBmcm9tIGFub3RoZXIgb3JpZ2luLFxyXG4vLyB0aGUgc2VydmVyIG5lZWRzIHRvIGFsbG93IGNyb3NzLW9yaWdpbiByZXF1ZXN0cy4gVGhlcmVmb3JlIHdlIGFyZSBnb2luZyB0byB1c2UgYSBzaW1wbGUgbW9kdWxlIGNhbGxlZCBDT1JTLlxyXG5hcHAudXNlKGNvcnMpO1xyXG5cclxuLy8gVG8gcGFyc2UgY29va2llc1xyXG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcclxuXHJcbi8vIEhhbmRsZSBsb2NhbGVcclxuYXBwLnVzZShsb2NhbGVIYW5kbGVyKTtcclxuXHJcbi8vIFVzZSBKV1QgYXV0aCB0byBzZWN1cmUgdGhlIGFwaVxyXG5hcHAudXNlKGp3dCk7XHJcblxyXG4vLyBBbGxvdyByZXF1ZXN0cyBmb3Igc3RhdGljIHJlc291cmNlcyBmcm9tIHRoaXMgZm9sZGVyXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycsIHtcclxuXHRpbmRleDogXCJpbmRleC5odG1sXCIsXHJcblx0ZXRhZzogdHJ1ZSwgLy8ganVzdCBiZWluZyBleHBsaWNpdCBhYm91dCB0aGUgZGVmYXVsdFxyXG5cdGxhc3RNb2RpZmllZDogdHJ1ZSwgIC8vIGp1c3QgYmVpbmcgZXhwbGljaXQgYWJvdXQgdGhlIGRlZmF1bHRcclxuXHRzZXRIZWFkZXJzOiAocmVzLCBwYXRoKSA9PiB7XHJcblx0XHRpZiAoIHBhdGguZW5kc1dpdGgoJy5odG1sJykgKSB7XHJcblx0XHRcdC8vIGFsbCBvZiB0aGUgcHJvamVjdCdzIEhUTUwgZmlsZXMgZW5kIGluIC5odG1sXHJcblx0XHRcdHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCB+cGF0aC5pbmRleE9mKCcvc3RhdGljLycpICkgeyAvLyB2ZXJzaW9uZWQgVVJMXHJcblx0XHRcdHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCAnbWF4LWFnZT0zMTUzNjAwMCcpOyBcclxuXHRcdH1cclxuXHR9LFxyXG5cclxufSkpO1xyXG5cclxuLy8gKG9wdGlvbmFsKSBvbmx5IG1hZGUgZm9yIGxvZ2dpbmcgYW5kXHJcbi8vIGJvZHlQYXJzZXIsIHBhcnNlcyB0aGUgcmVxdWVzdCBib2R5IHRvIGJlIGEgcmVhZGFibGUganNvbiBmb3JtYXRcclxuLy8gYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG4vLyBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShsb2dnZXIoXCJkZXZcIikpO1xyXG5cclxuLy8gR2xvYmFsIGVycm9yIGhhbmRsZXJcclxuYXBwLnVzZShlcnJvckhhbmRsZXIpO1xyXG5cclxuLy8gQXR0YWNoIGhhbmRsZXJzIGZvciBBUEkgcmVxdWVzdHMgd2l0aCB0aGUgcHJlZml4XHJcbmFwcC51c2UoXCIvYXBpXCIsIGFwaUhhbmRsZXJzKTtcclxuXHJcbi8vIFRoZSBmb2xsb3dpbmcgcm91dGVzIGFyZSBoYW5kbGVkIGJ5IHRoZSBmcm9udGVuZCdzIHNpbmdsZSBwYWdlIGFwcGxpY2F0aW9uXHJcbi8vIEp1c3Qgc2VydmUgaW5kZXguaHRtbCBpbiByZXR1cm5cclxuYXBwLmdldChbJy9sb2dpbicsICcvc2lnbnVwJywgJy9kYXNoYm9hcmQnXSwgKHJlcSwgcmVzKSA9PiByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKCdwdWJsaWMvaW5kZXguaHRtbCcpKSk7XHJcblxyXG4vLyBFeHBvc2UgYSBwb3J0IGFuZCBzdGFydCBsaXN0ZW5pbmdcclxuYXBwLmxpc3Rlbihjb25maWcuYXBpUG9ydCwgKCkgPT4gY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7Y29uZmlnLmFwaVBvcnR9YCkpOyIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkYkNvbm5lY3Rpb247XHJcblxyXG5mdW5jdGlvbiBjb25uZWN0KCkge1xyXG5cdHJldHVybiBtb25nb29zZS5jb25uZWN0KFxyXG5cdFx0Y29uZmlnLmRiQ29ubmVjdGlvblN0cmluZyxcclxuXHRcdHtcclxuXHRcdFx0dXNlTmV3VXJsUGFyc2VyOiB0cnVlLCAvLyB1c2UgbmV3IE1vbmdvREIgZHJpdmVyIGludGVyZmFjZSAoc2VlIGRldGFpbHMgaGVyZTogaHR0cHM6Ly9tb25nb29zZWpzLmNvbS9kb2NzL2Nvbm5lY3Rpb25zLmh0bWwpXHJcblx0XHRcdHJlY29ubmVjdFRyaWVzOiBOdW1iZXIuTUFYX1ZBTFVFLCAvLyBuZXZlciBzdG9wIHRyeWluZyB0byByZWNvbm5lY3RcclxuICBcdFx0XHRyZWNvbm5lY3RJbnRlcnZhbDogMTAwMCwgLy8gcmVjb25uZWN0IGV2ZXJ5IHNlY29uZFxyXG5cdFx0fVxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRiQ29ubmVjdGlvbigpIHtcclxuXHRjb25zdCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcblx0ZGIub25jZShcIm9wZW5cIiwgKCkgPT4gY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlXCIpKTtcclxuXHRkYi5vbihcImVycm9yXCIsIChlcnJvcikgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coXCJNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6IFwiLCBlcnJvcik7XHJcblx0XHRpZiAoIGVycm9yLmNvZGUgPT09ICdFQ09OTlJFRlVTRUQnKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUmVjb25uZWN0aW5nLi4uXCIpO1xyXG5cdFx0XHRcdGNvbm5lY3QoKTtcclxuXHRcdFx0fSwgNTAwMCk7IC8vIHRyeSByZWNvbm5lY3RpbmcgaW4gNSBzZWNvbmRzXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGNvbm5lY3QoKTtcclxufVxyXG5cclxuXHJcbiIsImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgeyBtZXNzYWdlcyB9ID0gcmVxdWlyZSgnLi9pMThuJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpbml0LFxyXG5cdHJlc3BvbmQsXHJcblx0cmVzcG9uZFN1Y2Nlc3MsXHJcblx0cmVzcG9uZEZhaWx1cmUsXHJcblx0ZXh0cmFjdERhdGEsXHJcblx0ZXJyb3JIYW5kbGVyLFxyXG5cdGlzS2V5RGF0YVVuaXF1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cdG1rZGlySWZOb3RFeGlzdHMoJ3VwbG9hZHMnKTtcclxuXHRta2RpcklmTm90RXhpc3RzKCdwdWJsaWMvcGhvdG9zJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1rZGlySWZOb3RFeGlzdHMocmVsYXRpdmVQYXRoKSB7XHJcblx0Y29uc3QgYWJzUGF0aCA9IHBhdGgucmVzb2x2ZShyZWxhdGl2ZVBhdGgpO1xyXG5cdGlmICggISBmcy5leGlzdHNTeW5jKGFic1BhdGgpICkge1xyXG5cdFx0ZnMubWtkaXJTeW5jKGFic1BhdGgpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzcG9uZChyZXMsIHN0YXR1cywgZGF0YSkge1xyXG5cdGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiLCBzdGF0dXMsIGRhdGEgfHwgJ1tubyBkYXRhXScpO1xyXG5cdHJldHVybiByZXMuanNvbih7XHJcblx0XHRzdGF0dXMsXHJcblx0XHRkYXRhXHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbmRTdWNjZXNzKHJlcywgZGF0YSkge1xyXG5cdHJldHVybiByZXNwb25kKHJlcywgXCJTVUNDRVNTXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNwb25kRmFpbHVyZShyZXMsIGVycm9yLCBodHRwU3RhdHVzID0gNDAwKSB7XHJcblx0Y29uc29sZS5sb2coXCJlcnJvcjogXCIsIGVycm9yKTtcclxuXHRyZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzKS5qc29uKHtcclxuXHRcdHN0YXR1czogXCJGQUlMVVJFXCIsXHJcblx0XHRkZXRhaWxzOiBlcnJvclxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDQktGL0YLQsNGJ0LjRgtGMINC30LDQtNCw0L3QvdGL0LUg0YHRhdC10LzQvtC5INC/0L7Qu9GPINC40Lcg0YLQtdC70LAg0LfQsNC/0YDQvtGB0LAgc291cmNlXHJcbmZ1bmN0aW9uIGV4dHJhY3REYXRhKHNjaGVtYSwgc291cmNlKSB7XHJcblx0bGV0IGRhdGEgPSB7fTtcclxuXHRzY2hlbWEuZm9yRWFjaCggZmllbGQgPT4gZGF0YVtmaWVsZC5uYW1lXSA9IHNvdXJjZVtmaWVsZC5uYW1lXSApO1xyXG5cdHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyLCByZXEsIHJlcywgbmV4dCkge1xyXG5cdGNvbnN0IGxvY2FsaXplZE1lc3NhZ2VzID0gbWVzc2FnZXNbcmVxLmxvY2FsZV07XHJcblxyXG4gICAgaWYgKCB0eXBlb2YgKGVycikgPT09ICdzdHJpbmcnICkge1xyXG4gICAgICAgIC8vIGN1c3RvbSBhcHBsaWNhdGlvbiBlcnJvclxyXG4gICAgICAgIHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCBlcnIubmFtZSA9PT0gJ1VuYXV0aG9yaXplZEVycm9yJyApIHtcclxuICAgICAgICAvLyBqd3QgYXV0aGVudGljYXRpb24gZXJyb3JcclxuICAgICAgICByZXR1cm4gcmVzcG9uZEZhaWx1cmUocmVzLCBsb2NhbGl6ZWRNZXNzYWdlcy51bmF1dGhvcml6ZWRFcnJvci5mb3JtYXQoKSwgNDAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZWZhdWx0IHRvIDUwMCBzZXJ2ZXIgZXJyb3JcclxuICAgIHJldHVybiByZXNwb25kRmFpbHVyZShyZXMsIGVyci5tZXNzYWdlLCA1MDApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpc0tleURhdGFVbmlxdWUobW9kZWwsIGtleURhdGEpIHtcclxuXHRsZXQgYWx0ZXJuYXRpdmVzID0gW107XHJcblx0Zm9yICggbGV0IGtleSBpbiBrZXlEYXRhICkge1xyXG5cdFx0YWx0ZXJuYXRpdmVzLnB1c2goeyBba2V5XToga2V5RGF0YVtrZXldIH0pO1xyXG5cdH1cclxuXHRjb25zdCBkYXRhID0gYXdhaXQgbW9kZWxcclxuXHRcdC5maW5kKHsgJG9yOiBhbHRlcm5hdGl2ZXMgfSlcclxuXHQgXHQuc2VsZWN0KFwiX2lkXCIpXHJcblx0IFx0LmV4ZWMoKTtcclxuXHJcblx0cmV0dXJuIGRhdGEubGVuZ3RoXHJcblx0XHQ/IGZhbHNlXHJcblx0XHQ6IHRydWU7XHJcbn0iLCJjb25zdCBJbnRsTWVzc2FnZUZvcm1hdCA9IHJlcXVpcmUoJ2ludGwtbWVzc2FnZWZvcm1hdCcpO1xyXG5jb25zdCB0cmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi9sYW5ncy5qc29uJyk7XHJcbmNvbnN0IGFjY2VwdExhbmd1YWdlID0gcmVxdWlyZSgnYWNjZXB0LWxhbmd1YWdlJyk7XHJcbmNvbnN0IEFsbEh0bWxFbnRpdGllcyA9IHJlcXVpcmUoJ2h0bWwtZW50aXRpZXMnKS5BbGxIdG1sRW50aXRpZXM7XHJcbmNvbnN0IGVudGl0aWVzID0gbmV3IEFsbEh0bWxFbnRpdGllcygpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0bWVzc2FnZXM6IHByZWxvYWRNZXNzYWdlcygpLFxyXG5cdGxvY2FsZUhhbmRsZXIsXHJcblx0ZGV0ZWN0TG9jYWxlLFxyXG5cdHNldExvY2FsZUNvb2tpZSxcclxufVxyXG5cclxuYWNjZXB0TGFuZ3VhZ2UubGFuZ3VhZ2VzKFsnZW4nLCAncnUnXSk7XHJcblxyXG5mdW5jdGlvbiBwcmVsb2FkTWVzc2FnZXMoKSB7XHJcblx0bGV0IG1lc3NhZ2VzID0ge307XHJcblx0Zm9yICggbGV0IGxvY2FsZUlkIGluIHRyYW5zbGF0aW9ucyApIHtcclxuXHRcdG1lc3NhZ2VzW2xvY2FsZUlkXSA9IHt9O1xyXG5cdFx0Zm9yICggbGV0IGtleSBpbiB0cmFuc2xhdGlvbnNbbG9jYWxlSWRdICkge1xyXG5cdFx0XHRsZXQgdmFsdWUgPSB0cmFuc2xhdGlvbnNbbG9jYWxlSWRdW2tleV07XHJcblx0XHRcdHZhbHVlID0gZW50aXRpZXMuZGVjb2RlKHZhbHVlKTtcclxuXHRcdFx0dmFsdWUgPSBuZXcgSW50bE1lc3NhZ2VGb3JtYXQodmFsdWUsIGxvY2FsZUlkKTtcclxuXHRcdFx0bWVzc2FnZXNbbG9jYWxlSWRdW2tleV0gPSB2YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG1lc3NhZ2VzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2NhbGVIYW5kbGVyKHJlcSwgcmVzLCBuZXh0KSB7XHJcblx0Y29uc3QgbG9jYWxlSWQgPSBkZXRlY3RMb2NhbGUocmVxKTtcclxuXHJcblx0Ly8gSWYgdGhlIGxvY2FsZSBpcyBub3QgeWV0IGluIGNvb2tpZXNcclxuXHRpZiAoICEgcmVxLmNvb2tpZXMubG9jYWxlIClcclxuXHRcdHJlcy5jb29raWUoJ2xvY2FsZScsIGxvY2FsZUlkLCB7IG1heEFnZTogKG5ldyBEYXRlKCkgKiAwLjAwMSkgKyAoMzY1ICogMjQgKiAzNjAwKSB9KTtcclxuXHJcblx0cmVxLmxvY2FsZSA9IGxvY2FsZUlkO1xyXG5cdG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGV0ZWN0TG9jYWxlKHJlcSkge1xyXG5cdGNvbnN0IGNvb2tpZUxvY2FsZSA9IHJlcS5jb29raWVzLmxvY2FsZTtcclxuXHJcblx0cmV0dXJuIGFjY2VwdExhbmd1YWdlLmdldChjb29raWVMb2NhbGUgfHwgcmVxLmhlYWRlcnNbJ2FjY2VwdC1sYW5ndWFnZSddKSB8fCAnZW4nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMb2NhbGVDb29raWUocmVzLCBsb2NhbGVJZCkge1xyXG5cdHJlcy5jb29raWUoJ2xvY2FsZScsIGxvY2FsZUlkLCB7IG1heEFnZTogKG5ldyBEYXRlKCkgKiAwLjAwMSkgKyAoMzY1ICogMjQgKiAzNjAwKSB9KTtcclxufSIsImNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xyXG5jb25zdCBleHByZXNzSnd0ID0gcmVxdWlyZSgnZXhwcmVzcy1qd3QnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gand0O1xyXG5cclxuZnVuY3Rpb24gand0KCkge1xyXG4gICAgcmV0dXJuIGV4cHJlc3NKd3QoeyBzZWNyZXQ6IGNvbmZpZy5qd3RTZWNyZXQgfSkudW5sZXNzKHtcclxuXHQgICAgICAgIHBhdGg6IFtcclxuXHQgICAgICAgICAgICAvLyBwdWJsaWMgcm91dGVzIHRoYXQgZG9uJ3QgcmVxdWlyZSBhdXRoZW50aWNhdGlvblxyXG5cdCAgICAgICAgICAgICcvYXBpL2F1dGgnLFxyXG5cdCAgICAgICAgICAgICcvYXBpL2dldC1sb2NhbGUnLFxyXG5cdCAgICAgICAgICAgICcvYXBpL2NoZWNrLXVuaXF1ZW5lc3MnLFxyXG5cdCAgICAgICAgICAgICcvYXBpL3B1dC11c2VyLXByb2ZpbGUnLFxyXG5cdCAgICAgICAgICAgICcvJyxcclxuXHQgICAgICAgICAgICAvXFwvcGhvdG9zXFwvLitcXC4oPzpqcGd8cG5nKSQvLFxyXG5cdCAgICAgICAgICAgIC9cXC9pMThuXFwvLisvLFxyXG5cdCAgICAgICAgICAgIC9cXC9hc3NldHNcXC8uKyQvLFxyXG5cdCAgICAgICAgICAgIC9cXC9zdGF0aWNcXC8uKyQvLFxyXG5cdCAgICAgICAgICAgIC9cXC9bXi9dK1xcLlteL10rJC8sXHJcblx0ICAgICAgICAgICAgL1xcL2xvZ2luXFwvPyQvLFxyXG5cdCAgICAgICAgICAgIC9cXC9zaWdudXBcXC8/JC8sXHJcblx0ICAgICAgICAgICAgL1xcL2Rhc2hib2FyZFxcLz8kLyxcclxuXHQgICAgICAgIF1cclxuXHQgICAgfSk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHR2YWxpZGF0ZUFsbCxcclxuXHR2YWxpZGF0ZU9uZVxyXG59XHJcblxyXG4vLyDQpNGD0L3QutGG0LjRjyDQv9GA0L7QstC10YDQutC4INGB0L7QvtGC0LLQtdGC0YHRgtCy0LjRjyDQv9C+0LvQtdC5INC30LDQtNCw0L3QvdC+0Lkg0YHRhdC10LzQtVxyXG5mdW5jdGlvbiB2YWxpZGF0ZShhbGdvcml0aG0sIHNjaGVtZSwgZGF0YSkge1xyXG5cdHJldHVybiBzY2hlbWVbYWxnb3JpdGhtXSggaXRlbSA9PiB7XHJcblx0XHQvLyDQldGB0LvQuCDQv9C+0LvQtSDQv9C10YDQtdC00LDQvdC+XHJcblx0XHRpZiAoIGRhdGFbaXRlbS5uYW1lXSAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGl0ZW0udmFsaWRhdG9yID09PSBcImZ1bmN0aW9uXCIgLy8g0LXRgdC70Lgg0LfQsNC00LDQvSDRhNC+0YDQvNCw0YIsINC/0YDQvtCy0LXRgNGP0LXQvFxyXG5cdFx0XHRcdD8gaXRlbS52YWxpZGF0b3IoZGF0YVtpdGVtLm5hbWVdKVxyXG5cdFx0XHRcdDogdHJ1ZVxyXG5cdFx0fVxyXG5cdFx0Ly8g0JXRgdC70Lgg0L3QtdGCLCDQvdC+INC/0L7Qu9C1INC+0L/RhtC40L7QvdCw0LvRjNC90L7QtVxyXG5cdFx0ZWxzZSBpZiAoICFpdGVtLnJlcXVpcmVkICkgcmV0dXJuIHRydWU7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vINCf0YDQvtCy0LXRgNGP0LXRgiDQstGB0LUg0L/QvtC70Y8g0L/QviDRgdGF0LXQvNC1XHJcbmZ1bmN0aW9uIHZhbGlkYXRlQWxsKHNjaGVtZSwgZGF0YSkge1xyXG5cdHJldHVybiB2YWxpZGF0ZSgnZXZlcnknLCBzY2hlbWUsIGRhdGEpO1xyXG59XHJcblxyXG4vLyDQn9GA0L7QstC10YDRj9C10YIg0YLQvtC70YzQutC+INC+0LTQvdC+INC/0L7Qu9C1ICjQtdGB0LvQuCDQvdGD0LbQvdC+INC/0YDQvtCy0LXRgNC40YLRjCDQtdC00LjQvdGB0YLQstC10L3QvdC+0LUg0L/QvtC70LUg0L3QsCDRgdC+0L7RgtCy0LXRgtGB0YLQstC40LUg0YHRhdC10LzQtSlcclxuZnVuY3Rpb24gdmFsaWRhdGVPbmUgKHNjaGVtZSwgaXRlbSkgeyBcclxuXHRyZXR1cm4gdmFsaWRhdGUoJ3NvbWUnLCBzY2hlbWUsIGl0ZW0pO1xyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY2NlcHQtbGFuZ3VhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qd3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHRtbC1lbnRpdGllc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnRsLW1lc3NhZ2Vmb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtdWx0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9