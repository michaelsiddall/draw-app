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
function* userEditAdmin(action) {
  console.log('get (edit) request at', action.url);

  let response = yield axios({
    method: 'GET',
    url: action.url,
  });
  yield put({
    type: 'AUTH_TO_EDIT_DATA',
    payload: response.data,
  });
}
function* appAdmin() {
  yield takeLatest('FETCH_USERS', userFetchAdmin);
  yield takeLatest('EDIT_USER', userEditAdmin);
}
export default appAdmin;
