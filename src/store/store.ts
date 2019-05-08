import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from "../middlewares/logger";

const composeEnhancers = composeWithDevTools({});
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(logger)
));

export default store;


