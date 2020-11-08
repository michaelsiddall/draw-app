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
function* approveDrawing(action) {
    console.log('in drawing disapprove with action.payload of', action.payload);

    //send the get request to the server so it makes a database request
    let response = yield axios({
        method: 'PUT',
        url: `/api/drawing/approve/${action.payload}`,
    });
    console.log(response.data);
    //take the info acquired from the database and set it as redux state
    yield put({ type: 'GET_PENDING_DRAWINGS', });
}
function* disapproveDrawing(action) {
    console.log('in drawing disapprove with action.payload of', action.payload);
    //send the get request to the server so it makes a database request
    let response = yield axios({
        method: 'PUT',
        url: `/api/drawing/disapprove/${action.payload}`
    });
    console.log(response.data);

    //take the info acquired from the database and set it as redux state
    yield put({ type: 'GET_PENDING_DRAWINGS', });
}

function* drawingSaga() {
    yield takeLatest('GET_PENDING_DRAWINGS', getPending);
    yield takeLatest('APPROVE_DRAWING', approveDrawing);
    yield takeLatest('DISAPPROVE_DRAWING', disapproveDrawing);
}

export default drawingSaga;