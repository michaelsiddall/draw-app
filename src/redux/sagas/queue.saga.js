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
  console.log('COMPLETE QUEUE:', action.payload)
    yield axios({
        method: 'PUT',
        url: action.url
    });
    let response = yield axios.get(`/api/request/${action.payload}`);
    yield put({
      type: 'REQUEST_BY_EVENT',
      payload: response.data,
  });
}

//delete specific event
function* deleteQueue(action) {
  console.log('DELETE QUEUE:', action.payload)
    yield axios({
        method: 'DELETE',
        url: action.url
    });
    let response = yield axios.get(`/api/request/${action.payload}`);
    yield put({
      type: 'REQUEST_BY_EVENT',
      payload: response.data,
  });

}

function* queueSaga() {
  yield takeLatest('FETCH_BY_EVENT', getByEventID);
  yield takeLatest('COMPLETE_QUEUE', completeQueue);
  yield takeLatest('DELETE_QUEUE', deleteQueue);

}

export default queueSaga;
