import { applyMiddleware, legacy_createStore as createStore } from "redux";
import formReducer from "../Reducer/Reducer";
import { compose } from "redux";
import createSagaMiddleware from "redux-saga";
import formSaga from "../Saga/Saga";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const Store = createStore(formReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(formSaga);


export default Store;
