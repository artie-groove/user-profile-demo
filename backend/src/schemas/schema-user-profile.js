import usernameValidator from "../../../frontend/src/components/SignupForm/Username/Username.validator";
import passwordValidator from "../../../frontend/src/components/SignupForm/Password/Password.validator";
import emailValidator from "../../../frontend/src/components/SignupForm/Email/Email.validator";
import phoneValidator from "../../../frontend/src/components/SignupForm/Phone/Phone.validator";
import birthdateValidator from "../../../frontend/src/components/SignupForm/Birthdate/Birthdate.validator";
import biographyValidator from "../../../frontend/src/components/SignupForm/Biography/Biography.validator";
import firstnameValidator from "../../../frontend/src/components/SignupForm/Firstname/Firstname.validator";
import lastnameValidator from "../../../frontend/src/components/SignupForm/Lastname/Lastname.validator";

const keyFieldsSchema = [
	{
		name: "username",
		required: true,
		validator: usernameValidator
	},
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
];

const detailFieldsSchema = [
	{
		name: "password",
		required: true,
		validator: passwordValidator
	},
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

const loginFieldsSchema = [].concat(keyFieldsSchema[0], detailFieldsSchema[0]);

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