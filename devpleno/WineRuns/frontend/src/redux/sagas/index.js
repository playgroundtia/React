import { takeLatest, all, put } from 'redux-saga/effects';
import ActionsCreators, { Types } from '../actionsCreators';

import { getRuns } from './runs';
import { login, logout, auth } from './auth';

export default function* rootSaga() {
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, login),
    takeLatest(Types.AUTH_REQUEST, auth),
    takeLatest(Types.LOGOUT, logout),
    takeLatest(Types.GET_RUNS_REQUEST, getRuns),
    put(ActionsCreators.authRequest()),
  ]);
}
