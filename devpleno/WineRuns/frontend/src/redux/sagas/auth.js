import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import api from '~/services/api';
import ActionsCreators from '../actionsCreators';

export function* login(action) {
  try {
    const { data } = yield call(api.post, '/users/login', {
      email: action.email,
      passwd: action.passwd,
    });
    if (data.token) {
      localStorage.setItem('@WineRuns/TOKEN', data.token);
      const user = jwtDecode(data.token);
      localStorage.setItem('@WineRuns/USER', user);
      yield put(ActionsCreators.signinSuccess(user));
      yield put(ActionsCreators.hideModal());
      yield put(push('/admin'));
    } else {
      yield put(ActionsCreators.signinFailure(data.message));
      toast.error(data.message);
    }
  } catch (error) {
    yield put(ActionsCreators.signinFailure(error.message));
    toast.error(error.message);
  }
}

export function* auth() {
  const token = localStorage.getItem('@WineRuns/TOKEN');
  if (token) {
    try {
      const user = jwtDecode(token);
      yield put(ActionsCreators.authSuccess(user));
    } catch (error) {
      yield put(ActionsCreators.authFailure('invalid token'));
    }
  } else {
    yield put(ActionsCreators.authFailure('no token'));
  }
}

export function* logout() {
  yield localStorage.removeItem('@WineRuns/TOKEN');
  yield localStorage.removeItem('@WineRuns/USER');
  yield put(push('/'));
}
