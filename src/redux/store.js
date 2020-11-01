import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';

import rootReducer from './rootReducer';

const middllewares = [];

if (process.env.NODE_ENV === "development") {
    middllewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middllewares));
const persistor = persistStore(store);

export { store, persistor };