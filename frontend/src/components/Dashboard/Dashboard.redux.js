import { connect } from 'react-redux';
import View from './Dashboard.view';
import { postProcessUserProfile } from './Dashboard.utils';

const mapStateToProps = (state) => {
	let { data: userProfile, isPending, externalError } = state.userProfile;
	if ( userProfile ) {
		userProfile = postProcessUserProfile(userProfile);
	}
	return {
		data: userProfile,
		isPending,
		externalError
	};
}

export default connect(mapStateToProps)(View);