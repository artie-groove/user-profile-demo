import { createLogic } from 'redux-logic';
import { PROPER_VALUE } from '../ValidateableInput/ValidateableInput.factory';
import { getActions } from './ApprovableInput.actions';
import { actionTypes as validateableInputActionTypes } from '../ValidateableInput/ValidateableInput.actions';
import axios from 'axios';
import { sleeper, ajaxErrorParser } from 'utils';

const fieldApprovalLogic = createLogic({
	type: validateableInputActionTypes.FIELD_EDITED,
	validate({ getState, action, ctx }, allow, reject) {
		// only apply the logic for the following fields
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
		// Так как Redux изначально не имеет представления о составе полей,
		// он не может инициализирвоать поле [fieldName] в хранилище
		// (состав полей определяется во время выполнения),
		// мы должны "подложить" {} на случай, если поле будет проверяться
		// после расфокусировки соотвествующего input'a с пустым значением,
		// когда хранилище ещё ничего о нём не знает 
		const { validityStatus, value } = state.signup.data[fieldName];
		// если поле правильно заполнено
		if ( validityStatus === PROPER_VALUE ) {
			// имя поля "зашито" в action creator'ах
			// поэтому мы получаем их здесь и передаём в process через контекст ctx
			const { requestApproval, responseApproval, responseApprovalError } = getActions(fieldName);
			Object.assign(ctx, { requestApproval, responseApproval, responseApprovalError, fieldName, value });
			// разрешаем обработку в process и передаём action далее по конвейеру
			allow(action);
		}
		else reject(action); // мимо process, в следующее middleware
	},
	process({ ctx, intl }, dispatch, done) {
		dispatch(ctx.requestApproval());
		const config = {
			url: "/api/check-uniqueness",
			params: {
				name: ctx.fieldName,
				value: ctx.value
			}
		};
		sleeper(1000)
			.then( () => axios(config) )
			.then(response => dispatch(ctx.responseApproval(response.data)))
			.catch(error => {
				const err = ajaxErrorParser(error, intl); 
				dispatch(ctx.responseApprovalError(err));
			})
			.then(() => done());
	}
});

export default fieldApprovalLogic;