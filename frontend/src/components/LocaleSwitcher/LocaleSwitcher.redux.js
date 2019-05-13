import { connect } from "react-redux";
import View from "./LocaleSwitcher.view";
import { onSwitchLocaleRequest } from 'components/IntlProvider/IntlProvider.actions';

const mapStateToProps = state => {
	const { locale } = state['i18n'];
	return {
		title: locale === 'en' ? 'На русском' : 'Switch to English',
		switchTo: locale === 'en' ? 'ru' : 'en'
	}
}

const mapDispatchToProps = dispatch => ({
	onClick: (e) => dispatch(onSwitchLocaleRequest(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(View);