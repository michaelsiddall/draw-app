import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getByEventID(action) {
  let response = yield axios.get(`/api/request/${action.payload}`);
  console.log('getByEventID', response.data)
  yield put({
    type: 'REQUEST_BY_EVENT',
    payload: response.data,
  });
}


function* queueSaga() {
  yield takeLatest('FETCH_BY_EVENT', getByEventID);

}

export default queueSaga;
