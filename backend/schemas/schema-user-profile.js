import usernameValidator from "../../frontend/src/components/SignupForm/Username/Username.validator.js";
import passwordValidator from "../../frontend/src/components/SignupForm/Password/Password.validator.js";
import emailValidator from "../../frontend/src/components/SignupForm/Email/Email.validator.js";
import phoneValidator from "../../frontend/src/components/SignupForm/Phone/Phone.validator.js";
import birthdateValidator from "../../frontend/src/components/SignupForm/Birthdate/Birthdate.validator.js";
import biographyValidator from "../../frontend/src/components/SignupForm/Biography/Biography.validator.js";
import firstnameValidator from "../../frontend/src/components/SignupForm/Firstname/Firstname.validator.js";
import lastnameValidator from "../../frontend/src/components/SignupForm/Lastname/Lastname.validator.js";

const loginFieldsSchema = [
	{
		name: "username",
		required: true,
		validator: usernameValidator
	},
	{
		name: "password",
		required: true,
		validator: passwordValidator
	}
];

const keyFieldsSchema = [
	{
		name: "email",
		required: true,
		validator: emailValidator
	},
	{
		name: "phone",
		required: true,
		validator: phoneValidator
	}
].concat(loginFieldsSchema);

const detailFieldsSchema = [		
	{
		name: "newsletters",
		required: false,
		default: false
	},
	{
		name: "birthdate",
		required: true,
		validator: birthdateValidator
	},
	{
		name: "biography",
		required: false,
		validator: biographyValidator
	},
	{
		name: "firstname",
		required: true,
		validator: firstnameValidator
	},
	{
		name: "lastname",
		required: true,
		validator: lastnameValidator
	}
];

const allFieldsSchema = keyFieldsSchema.concat(detailFieldsSchema);

const approvableFields = [
	'username',
	'email',
	'phone'
];
const approvableFieldsSchema = allFieldsSchema.filter( fieldSchema => approvableFields.some( name => fieldSchema.name === name ) );


export {
	loginFieldsSchema,
	keyFieldsSchema,
	detailFieldsSchema,
	allFieldsSchema,
	approvableFieldsSchema
};