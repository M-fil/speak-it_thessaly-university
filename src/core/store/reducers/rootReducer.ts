import { combineReducers } from 'redux';
import currentAuth from './currentAuth';
import currentWords from './currentWords';

const rootReducer = combineReducers({
  currentAuth,
  currentWords,
});

export default rootReducer;
