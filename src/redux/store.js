import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from './rootReducer';

const middllewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middllewares));

export default store;