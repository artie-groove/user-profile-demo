import Component from './PasswordConfirmation.container';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	const { isValid, isTypingFinished } = state.signup.data['passwordConfirmation'];
	return {
		isValid: isValid && isTypingFinished,
	}

}

export default connect(mapStateToProps)(Component);
