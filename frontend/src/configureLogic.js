import { createLogicMiddleware } from 'redux-logic';
import logic from './rootLogic';

const deps = {};
const logicMiddleware = createLogicMiddleware(logic, deps);
logicMiddleware.monitor$.subscribe(
	x => console.log(x)
);


export default logicMiddleware;