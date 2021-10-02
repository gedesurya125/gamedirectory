import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./rootReducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancer = compose;


const store = createStore(rootReducers, composeEnhancer(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export default store;