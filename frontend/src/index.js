import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'sass/index.sass';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';
import logicMiddleware from 'configureLogic';
import configureStore from 'configureStore';
import IntlProvider from 'components/IntlProvider';
import { addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import { hydrate } from 'utils';
import externalState from 'initialState.json';
// import { PROPER_VALUE } from 'components/SignupForm/ValidateableInput/ValidateableInput.factory';

// Adding localization functions for different languages
addLocaleData(ru);

// Hydrate the app with the data stored locally
const initialState = hydrate(externalState);


const store = configureStore(initialState, logicMiddleware);

ReactDOM.render(
	<Provider store={store}>
		<IntlProvider>
			<App logicMiddleware={logicMiddleware} />
		</IntlProvider>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();