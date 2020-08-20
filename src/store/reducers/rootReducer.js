import authReducer from './authReducer';
import filterReducer from './filterReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
});

export default rootReducer;
