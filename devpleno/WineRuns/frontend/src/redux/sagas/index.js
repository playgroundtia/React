import { takeLatest, all, put } from 'redux-saga/effects';
import ActionsCreators, { Types } from '../actionsCreators';

import { getRuns, createRun, updateRun, deleteRun } from './runs';
import { login, logout, auth } from './auth';

export default function* rootSaga() {
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, login),
    takeLatest(Types.AUTH_REQUEST, auth),
    takeLatest(Types.LOGOUT, logout),
    // RUN
    takeLatest(Types.GET_RUNS_REQUEST, getRuns),
    takeLatest(Types.CREATE_RUN_REQUEST, createRun),
    takeLatest(Types.UPDATE_RUN_REQUEST, updateRun),
    takeLatest(Types.DELETE_RUN_REQUEST, deleteRun),
    put(ActionsCreators.authRequest()),
  ]);
}
