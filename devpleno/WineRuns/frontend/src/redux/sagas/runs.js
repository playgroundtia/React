import { call } from 'redux-saga/effects';
// import jwtDecode from 'jwt-decode';
// import { toast } from 'react-toastify';
import api from '../../services/api';
// import ActionsCreators, { Types } from '../actionsCreators';

export function* getRuns() {
  const data = yield call(api.get, '/runs');
  console.log(data);
  // yield all([
  //   // takeLatest(Types.SIGNIN_REQUEST, login),
  //   // takeLatest(Types.AUTH_REQUEST, auth),
  //   // takeLatest(Types.LOGOUT, logout),
  //   // put(ActionsCreators.authRequest()),
  // ]);
}
