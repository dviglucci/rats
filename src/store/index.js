import { createStore, combineReducers } from 'redux';
// import {createLogger} from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
import { startReducer, endReducer } from '../redux/controlBar';


const reducer = combineReducers({
    startYear: startReducer,
    endYear: endReducer
//   user: userReducer,
//   poem1: poem1Reducer,
//   poem2: poem2Reducer,
//   poem3: poem3Reducer,
//   finalPoem: finalPoemReducer,
});

// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
// );

const store = createStore(reducer);

export default store;