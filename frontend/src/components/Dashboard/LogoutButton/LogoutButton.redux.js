import { connect } from 'react-redux';
import View from './LogoutButton.view';
import { onLogout } from '../../Auth/Auth.actions';

const mapDispatchToProps = (dispatch) => ({
	onLogout: () => dispatch(onLogout())
});

export default connect(null, mapDispatchToProps)(View);