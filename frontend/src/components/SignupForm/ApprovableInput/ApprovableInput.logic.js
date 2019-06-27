import { createLogic } from 'redux-logic';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';
import { getActions } from './ApprovableInput.actions';
import { actionTypes as validateableInputActionTypes } from '../ValidateableInput/ValidateableInput.actions';
import axios from 'axios';
import { sleeper, ajaxErrorParser } from 'utils';

const fieldApprovalLogic = createLogic({
	type: validateableInputActionTypes.FIELD_EDITED,
	validate({ getState, action, ctx }, allow, reject)
	{
		// Only apply the logic for the following fields
		const approvableFields = [
			'username',
			'email',
			'phone',
		];
		const fieldName = action.fieldName;
		if ( ! approvableFields.some( field => field === fieldName ) ) {
			return reject(action);
		}
		const state = getState();
		const { validityStatus, value } = state.signup.data[fieldName];
		
		// If the field is filled in properly:		
		if ( validityStatus === PROPER_VALUE )
		{
			// 1. Get action creators for the field from a factory,
			//    because field's name needs to be sticked to
			//    the action by design
			const { requestApproval, responseApproval, responseApprovalError } = getActions(fieldName);
			
			// 2. Pass that data to the 'ctx' variable to use it
			//    later in process() handler
			Object.assign(ctx, { requestApproval, responseApproval, responseApprovalError, fieldName, value });
			
			// Allow processing the action and forward it to the next middleware
			allow(action);
		}
		else reject(action); // bypass process() handler, skip to next middleware
	},
	async process({ ctx, appContext: { intl } }, dispatch, done)
	{
		dispatch(ctx.requestApproval());
		const config = {
			url: "/api/check-uniqueness",
			params: {
				name: ctx.fieldName,
				value: ctx.value
			}
		};
		await sleeper(1000);
		try {
			const response = await axios(config);
			dispatch(ctx.responseApproval(response.data));
		}
		catch ( error ) {
			const err = ajaxErrorParser(error, intl); 
			dispatch(ctx.responseApprovalError(err));
		}
		done();
	}
});

export default fieldApprovalLogic;