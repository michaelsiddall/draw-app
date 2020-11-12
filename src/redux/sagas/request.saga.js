import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getRequest(action) {
  let response = yield axios.get(`/api/request`);
  yield put({
    type: 'SET_REQUEST',
    payload: response.data,
  });
}

function* addRequest(action) {
  console.log('in addRequest Saga', action.payload);
  yield axios({
    method: 'POST',
    url: '/api/request',
    data: action.payload,
  });
  yield put({
        type: "FETCH_REQUEST"
    })
}


//update request to be completed
function* completeRequest (action) {
    yield axios({
        method: 'PUT',
        url: action.url
    });
    yield put({
        type: "FETCH_REQUEST"
    })
}

//delete specific event
function* deleteRequest(action) {
    yield axios({
        method: 'DELETE',
        url: `/api/request/`,
        data: action.payload
    });
    yield put({
        type: "FETCH_REQUEST"
    })
}

function* requestSaga() {
  yield takeLatest('ADD_REQUEST', addRequest);
  yield takeLatest('FETCH_REQUEST', getRequest);
  yield takeLatest('COMPLETE_REQUEST', completeRequest);
  yield takeLatest('DELETE_REQUEST', deleteRequest);
}

export default requestSaga;
