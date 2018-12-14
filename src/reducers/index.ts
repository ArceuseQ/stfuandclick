import { combineReducers } from 'redux';
import teams from './teamReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  teams
});

export default rootReducer;
