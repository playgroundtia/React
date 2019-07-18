import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import ActionCreators from '../actionsCreators';
import api from '../../services/api';

export function* getRuns() {
  const token = localStorage.getItem('@WineRuns/TOKEN');
  const headerParams = { Authorization: `Bearer ${token}` };
  try {
    const { data } = yield call(api.get, '/runs', { headers: headerParams });
    yield put(ActionCreators.getRunsSuccess(data));
  } catch (error) {
    yield put(ActionCreators.getRunsFailure('error'));
    toast.warn('sem comunicação com a api.');
  }
}

export function* createRun({ run }) {
  const token = localStorage.getItem('@WineRuns/TOKEN');
  const headerParams = { Authorization: `Bearer ${token}` };
  try {
    const { data } = yield call(api.post, '/runs', run, {
      headers: headerParams,
    });
    yield put(ActionCreators.createRunSuccess(data));
  } catch (error) {
    yield put(ActionCreators.createRunFailure('error'));
    toast.warn('sem comunicação com a api.');
  }
}

export function* updateRun({ run }) {
  const token = localStorage.getItem('@WineRuns/TOKEN');
  const headerParams = { Authorization: `Bearer ${token}` };
  try {
    const { data } = yield call(api.patch, `/runs/${run.id}`, run, {
      headers: headerParams,
    });
    yield put(ActionCreators.updateRunSuccess(data));
  } catch (error) {
    yield put(ActionCreators.updateRunFailure('error'));
    toast.warn('sem comunicação com a api.');
  }
}

export function* deleteRun({ run }) {
  const token = localStorage.getItem('@WineRuns/TOKEN');
  const headerParams = { Authorization: `Bearer ${token}` };
  try {
    const { data } = yield call(api.delete, `/runs/${run.id}`, {
      headers: headerParams,
    });
    yield put(ActionCreators.deleteRunSuccess(data));
    yield getRuns();
    toast.info('delete');
  } catch (error) {
    yield put(ActionCreators.deleteRunFailure('error'));
    toast.warn('sem comunicação com a api.');
  }
}
