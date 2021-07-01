import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
// import rootSaga from "./root-saga";

// We don't have Saga yet, but this is for later use
const sagaMiddleware = createSagaMiddleware();

// Can add any middleware
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Run Redux Saga
// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
