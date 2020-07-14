import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './root.reducer';

let middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares, thunkMiddleware, logger];
} else {
  middlewares = [...middlewares, thunkMiddleware];
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;