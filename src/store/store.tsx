import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducer';

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  const devtoolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  composeEnhancers = devtoolsCompose && devtoolsCompose({name: 'elements-behaviors'}) || compose;
}

const middleware: any = [];

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware)));
