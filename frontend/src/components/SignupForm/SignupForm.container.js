import View from './SignupForm.view';
import { intlShape, injectIntl } from 'react-intl';

// const Container = ({ intl: { formatMessage }, ...props }) => pug`
// 	View(
// 		formatMessage=formatMessage,
// 		...props
// 	)
// `;

View.propTypes = {
	intl: intlShape.isRequired
}

export default injectIntl(View);

