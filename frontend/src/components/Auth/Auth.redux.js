import { connect } from 'react-redux';
import Component from './Auth.container';
import { onAuthResponse } from './Auth.actions';

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
	updateReduxAuthState: (token) => {
		dispatch(onAuthResponse(token));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);