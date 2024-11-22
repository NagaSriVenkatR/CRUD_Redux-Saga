import { legacy_createStore as createStore } from "redux";
import formReducer from "../Reducer/Reducer";
import { compose } from "redux";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(formReducer, composeEnhancer());
export default Store;
