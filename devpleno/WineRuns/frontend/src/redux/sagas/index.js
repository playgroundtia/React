import { takeLatest, all, put } from 'redux-saga/effects';
import ActionsCreators, { Types } from '../actionsCreators';

import { getRuns, createRun, updateRun, deleteRun } from './runs';
import { getUsers, createUser, updateUser, deleteUser } from './users';
import { login, logout, auth } from './auth';

export default function* rootSaga() {
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, login),
    takeLatest(Types.AUTH_REQUEST, auth),
    takeLatest(Types.LOGOUT, logout),
    // Run
    takeLatest(Types.GET_RUNS_REQUEST, getRuns),
    takeLatest(Types.CREATE_RUN_REQUEST, createRun),
    takeLatest(Types.UPDATE_RUN_REQUEST, updateRun),
    takeLatest(Types.DELETE_RUN_REQUEST, deleteRun),
    // Users
    takeLatest(Types.GET_USERS_REQUEST, getUsers),
    takeLatest(Types.CREATE_USER_REQUEST, createUser),
    takeLatest(Types.UPDATE_USER_REQUEST, updateUser),
    takeLatest(Types.DELETE_USER_REQUEST, deleteUser),
    put(ActionsCreators.authRequest()),
  ]);
}
