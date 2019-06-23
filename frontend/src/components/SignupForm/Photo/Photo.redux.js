import { connect } from 'react-redux'; 
import { defineMessages, injectIntl } from 'react-intl';
import Container from './Photo.container';
import validate from './Photo.validator';
import { onChange } from '../ValidateableInput/ValidateableInput.actions';
import { getErrorIntl, getEnhancedValidator } from '../ValidateableInput/ValidateableInput.utils';
import { errorStrings } from './Photo.container';

const fieldName = 'photo';

const messages = defineMessages({
	photoPickerButtonCaption: "Pick a photo"
})

const enhancedValidate = getEnhancedValidator(validate, errorStrings);

const mapStateToProps = (state, ownProps) => {
	const { validityStatus, value } = state.signup.data[fieldName];
	const fileName = value.name || ownProps.intl.formatMessage(messages.photoPickerButtonCaption);
	const errorMsg = ownProps.errorMsg
		? ownProps.errorMsg
		: getErrorIntl(ownProps.intl, validityStatus, errorStrings);
	return {
		isInvalid: !!errorMsg,
		errorMsg,
		fileName
	}
};

const mapDispatchToProps = dispatch => ({
	onChange: event => {
		const file = event.target.files[0];
		if ( ! file ) return false;
		const validityStatus = enhancedValidate(file);
		dispatch(onChange(fieldName, file, validityStatus));
	}
});

let Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default injectIntl(Component);