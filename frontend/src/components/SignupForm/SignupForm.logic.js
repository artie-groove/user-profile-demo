import fieldApprovalLogic from './ApprovableInput/ApprovableInput.logic';
import passwordConfirmationLogic from './PasswordConfirmation/PasswordConfirmation.logic';

import { createLogic } from 'redux-logic';
import { actionTypes, onSubmitResponse, onSubmitFailure } from './SignupForm.actions';
import axios from 'axios';
import { exractFormData } from './SignupForm.utils';
import { sleeper, ajaxErrorParser } from 'utils';

const formSubmissionLogic = createLogic({
	type: actionTypes.FORM_SUBMIT,
	processOptions: {
		successType: 	onSubmitResponse,
		failType: 		onSubmitFailure
	},
	async process({ getState, appContext: { intl } }) {
		const data = exractFormData(getState().signup.data);
		await sleeper(1000);
		return axios({
				method: "post",
				url: "/api/put-user-profile",
				data,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				timeout: 30000
			})
			.catch( error => Promise.reject(ajaxErrorParser(error, intl)) );
	}
});

export default [
	formSubmissionLogic,
	fieldApprovalLogic,
	...passwordConfirmationLogic
];