import View from './SignupForm.view';
import { intlShape, injectIntl } from 'react-intl';

View.propTypes = {
	intl: intlShape.isRequired
}

export default injectIntl(View);

