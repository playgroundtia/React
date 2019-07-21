import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import runs from './runs';
import users from './users';

const rootReducer = history =>
  combineReducers({
    auth,
    runs,
    users,
    router: connectRouter(history),
  });

export default rootReducer;
