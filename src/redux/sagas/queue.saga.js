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

function* completeQueue (action) {
    yield axios({
        method: 'PUT',
        url: action.url
    });
    yield put({
        type: "FETCH_BY_EVENT"
    })
}

function* deleteQueue(action) {
    yield axios({
        method: 'DELETE',
        url: `/api/request/`,
        data: action.payload
    });
    yield put({
        type: "FETCH_BY_EVENT"
    })
}

function* requestSaga() {
  yield takeLatest('FETCH_BY_EVENT', getByEventID);
  yield takeLatest('COMPLETE_QUEUE', completeQueue);
  yield takeLatest('DELETE_QUEUE', deleteQueue);
}

export default requestSaga;
