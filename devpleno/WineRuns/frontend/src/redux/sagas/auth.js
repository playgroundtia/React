import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import api from '~/services/api';
import ActionsCreators from '../actionsCreators';

export function* login(action) {
  try {
    const {
      data: { token },
    } = yield call(api.post, '/users/login', {
      email: action.email,
      passwd: action.passwd,
    });
    if (token) {
      localStorage.setItem('@WineRuns/TOKEN', token);
      const user = jwtDecode(token);
      localStorage.setItem('@WineRuns/USER', user);
      yield put(ActionsCreators.signinSuccess(user));
      toast.success('Logado com sucesso!');
      yield put(ActionsCreators.hideModal());
      yield put(push('/admin'));
    } else {
      yield put(ActionsCreators.signinFailure('Error ao Logar'));
      toast.error('Verifique o seu e-mail/senha!');
    }
  } catch (error) {
    yield put(ActionsCreators.signinFailure('Error ao Logar'));
    toast.error('Verifique o seu e-mail/senha!');
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
