import { createStore, applyMiddleware, combineReducers } from 'redux';
//import createLogger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
// const loggerMiddleware = createLogger(); // initialize logger

// const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore);

import * as Home from "./home/reducer";
import thunk from "redux-thunk";

let store = createStore(
    combineReducers({
      ...Home,
    }),
    {},
    composeWithDevTools(applyMiddleware(thunk))
  );
  export default store;