import { createStore, combineReducers } from "redux";
// import {createLogger} from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
import {
  startReducer,
  endReducer,
  ratReducer,
  pigeonReducer,
  circleReducer,
  ratsInCircleReducer,
  pigeonsInCircleReducer,
} from "../redux/controlBar";

const reducer = combineReducers({
  startYear: startReducer,
  endYear: endReducer,
  showRats: ratReducer,
  showPigeons: pigeonReducer,
  showCircle: circleReducer,
  ratsInCircle: ratsInCircleReducer,
  pigeonsInCircle: pigeonsInCircleReducer,
});

const store = createStore(reducer);

export default store;
