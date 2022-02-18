import {
  createStore,
  combineReducers,
  // applyMiddleware, compose
} from "redux";
// import thunk from 'redux-thunk';

import { reducer } from "./reducers/photosReducer";
const picreducer = combineReducers({
  reducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  picreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;