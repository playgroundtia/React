import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import ActionCreators from '../actionsCreators';
import api from '../../services/api';

const token = localStorage.getItem('@WineRuns/TOKEN');

export function* getRuns() {
  const headerParams = { Authorization: `Bearer ${token}` };
  try {
    const { data } = yield call(api.get, '/runs', { headers: headerParams });
    yield put(ActionCreators.getRunsSuccess(data));
  } catch (error) {
    yield put(ActionCreators.getRunsFailure('error'));
    toast.warn('sem comunicação com a api.');
  }
}

export function* createRun(action) {
  const headerParams = { Authorization: `Bearer ${token}` };
  try {
    const { data } = yield call(
      api.post,
      '/runs',
      { headers: headerParams },
      action
    );
    yield put(ActionCreators.createRunSuccess(data));
  } catch (error) {
    yield put(ActionCreators.createRunFailure('error'));
  }
}
