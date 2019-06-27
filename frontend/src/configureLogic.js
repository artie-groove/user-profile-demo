import { createLogicMiddleware } from 'redux-logic';
import logic from './logic';

const logicMiddleware = createLogicMiddleware(logic);

// Output events in the logic to browser's console
logicMiddleware.monitor$.subscribe(
	x => console.log(x)
);


export default logicMiddleware;