# User profile demo

The application is a demo written in order to apply for a developer position in a company according to a test task. It implements CR functions (create and read): user signup and account display.

## Software utilized
* MERN software stack
* Create React App, plus customizers (react-app-rewired, customize-cra)
* Webpack
* Docker
* BabelEdit (for managing translations)

## Technologies and techniques involved
* AJAX (`axios`)
* cookies (`js-cookie`)
* localStorage
* i18n (`intl-messageformat, react-intl, extract-react-intl-messages`, International Components for Unicode message format)
* state management (`redux, react-redux, reduce-reducers`)
* middleware (`redux-logic`)
* JSON Web Token authorization (`express-jwt, jsonwebtoken`)
* hashing (`js-sha256`)
* in-app routing (`react-router`)
* Pug template engine (`react-pug`)
* CSS preprocessing (SASS)
* Bootstrap HTML/CSS framework (`bootstrap, reactstrap`)
* typography (`html-entities`)

## UI languages
- [x] English
- [x] Russian

## Features
* Adaptive design
* Smooth transitions between screens
* Lazy localization: translations are pulled out from server on-demand
* Localized server messages
* Language choice persists, as well as translations
* Demo button fills in the signup form automatically
* Form fields validate all user input totally (name, surname, username, email, phone, password, birthdate, photo and a mandatory checkbox)
* Password inputs are cooperated with each other
* Key fields are checked for uniqueness on blur (username, email, phone)
* Format-related errors are displayed immediately except in-progress typing format inconsistencies
* User input is checked again on server side upon form submission
* Form inputs are displayed consecutively, step-by-step
* Submit button is inactive until all fields have proper values

## Deployment
The easiest way to deploy the app is to spin it up with Docker. Just download `docker-compose.yml` from this repository and command:
```bash
docker-compose up
```

## Demo
The live example is running on a VM on Google Cloud Platform:

http://35.246.108.186