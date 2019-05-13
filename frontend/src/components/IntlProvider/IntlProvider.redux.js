import { IntlProvider } from "react-intl";
import { connect } from "react-redux";

export default connect(
  // Connect React Intl with Redux to inject current locale data
  ({ i18n }) => ({ ...i18n, key: i18n.locale })
)(IntlProvider);