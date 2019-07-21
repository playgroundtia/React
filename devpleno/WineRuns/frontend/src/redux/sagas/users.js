import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import ActionCreators from '../actionsCreators';
import api from '../../services/api';

export function* getUsers() {
  const token = localStorage.getItem('@WineRuns/TOKEN');
  const headerParams = { Authorization: `Bearer ${token}` };
  try {
    const { data } = yield call(api.get, '/users', { headers: headerParams });
    yield put(ActionCreators.getUsersSuccess(data));
  } catch (error) {
    yield put(ActionCreators.getUsersFailure('error'));
    toast.warn('Could not found get users.');
  }
}

export function* createUser({ user }) {
  const token = localStorage.getItem('@WineRuns/TOKEN');
  const headerParams = { Authorization: `Bearer ${token}` };
  try {
    const { data } = yield call(api.post, '/users', user, {
      headers: headerParams,
    });
    yield put(ActionCreators.createUserSuccess(data));
  } catch (error) {
    yield put(ActionCreators.createUserFailure('error'));
    toast.warn('Could not found create user.');
  }
}

export function* updateUser({ user }) {
  const token = localStorage.getItem('@WineRuns/TOKEN');
  const headerParams = { Authorization: `Bearer ${token}` };
  try {
    const { data } = yield call(api.patch, `/users/${user.id}`, user, {
      headers: headerParams,
    });
    yield put(ActionCreators.updateUserSuccess(data));
  } catch (error) {
    yield put(ActionCreators.updateUserFailure('error'));
    toast.warn('Could not found update user.');
  }
}

export function* deleteUser({ user }) {
  const token = localStorage.getItem('@WineRuns/TOKEN');
  const headerParams = { Authorization: `Bearer ${token}` };
  try {
    const { data } = yield call(api.delete, `/users/${user.id}`, {
      headers: headerParams,
    });
    yield put(ActionCreators.deleteUserSuccess(data));
    yield getUsers();
    toast.info('Delete Success');
  } catch (error) {
    yield put(ActionCreators.deleteUserFailure('error'));
    toast.warn('Could not found delete user.');
  }
}
