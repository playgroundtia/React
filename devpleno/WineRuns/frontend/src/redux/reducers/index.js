import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import runs from './runs';

const rootReducer = history =>
  combineReducers({
    auth,
    runs,
    router: connectRouter(history),
  });

export default rootReducer;
