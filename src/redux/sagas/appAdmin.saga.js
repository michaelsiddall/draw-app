import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* userFetchAdmin() {
  let response = yield axios({
    method: 'GET',
    url: '/api/admin',
  });
  yield put({
    type: 'AUTH_DATA',
    payload: response.data,
  });
}

function* appAdmin() {
  yield takeLatest('FETCH_USERS', userFetchAdmin);
}
export default appAdmin;
