import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPending(action) {
    //send the get request to the server so it makes a database request
    let response = yield axios({
        method: 'GET',
        url: '/api/drawing'
    });
    console.log(response.data);

    //take the info acquired from the database and set it as redux state
    yield put({
        type: 'SET_PENDING_DRAWINGS',
        payload: response.data
    });
}

function* drawingSaga() {
    yield takeLatest('GET_PENDING_DRAWINGS', getPending);
}

export default drawingSaga;