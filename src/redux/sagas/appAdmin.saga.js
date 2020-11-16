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

function* userDeleteAdmin(action) {
  let response = yield axios({
    method: 'DELETE',
    url: action.url,
  });
  yield put({
    type: 'FETCH_USERS',
  });
}
function* userEditAdmin(action) {
  console.log('PUT request for user auth');

  let response = yield axios({
    method: 'PUT',
    url: '/api/admin',
    data: action.payload,
  });
  yield put({
    type: 'FETCH_USERS',
  });
}
function* appAdmin() {
  yield takeLatest('FETCH_USERS', userFetchAdmin);
  yield takeLatest('EDIT_USER_AUTH', userEditAdmin);
  yield takeLatest('DELETE_USER', userDeleteAdmin);
}
export default appAdmin;
