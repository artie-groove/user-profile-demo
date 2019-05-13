import { connect } from 'react-redux';
import Component from './App.container';
import { onDataFetchRequest } from './App.actions';

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	isLocaleSwitchPending: state.i18n.isPending,
	localeSwitchError: state.i18n.error,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUserProfile: () => {
		dispatch(onDataFetchRequest());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);