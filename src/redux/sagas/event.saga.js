import axios from 'axios';
import { takeLatest , put} from 'redux-saga/effects';


//get all uncompleted events

function * getEvents (action) {
    let response= yield axios.get(`/api/event`);
    yield put ({
        type: "SET_EVENTS",
        payload: response.data
    })  
}

//get all completed events
function * getCompletedEvents (action) {
    let response= yield axios.get(`/api/event/completed`);
    yield put ({
        type: "SET_COMPLETED",
        payload: response.data
    })  
}


//post new event
function* postEvent(action) {
    yield axios({
        method: 'POST',
        url: '/api/event/',
        data: action.payload
    });
    yield put ({
        type: 'FETCH_EVENTS'
    })
}

//delete specific event
function* deleteEvent(action) {
    yield axios({
        method: 'DELETE',
        url: `/api/event/`,
        data: action.payload
    });
    yield put({
        type: "FETCH_EVENTS"
    })
}

//update specific event
function* updateEvent (action) {
    yield axios({
        method: 'PUT',
        url: `/api/event/`,
        data: action.payload
    });
    yield put({
        type: "FETCH_EVENTS"
    })
}

//update event to be completed
function* completeEvent (action) {
    yield axios({
        method: 'PUT',
        url: action.url
    });
    yield put({
        type: "FETCH_EVENTS"
    })
}

function* eventSaga() {
    yield takeLatest('FETCH_EVENTS', getEvents);
    yield takeLatest('FETCH_COMPLETED', getCompletedEvents);
    yield takeLatest('POST_EVENT', postEvent);
    yield takeLatest('DELETE_EVENT', deleteEvent);
    yield takeLatest('UPDATE_EVENT', updateEvent);
    yield takeLatest('COMPLETE_EVENT', completeEvent);
}

export default eventSaga;