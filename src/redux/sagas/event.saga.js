import axios from 'axios';
import { takeLatest , put} from 'redux-saga/effects';


//get all events
//event.router line 7
function * getEvents (action) {
    console.log('GET EVENTS SAGA', action);
    let response= yield axios.get(`/api/event`);
    console.log('GET EVENTS', response.data);
    yield put ({
        type: "SET_EVENTS",
        payload: response.data
    })
    
}

//get specific event
//event.router line 20
// '/details/:id'
function * getEventDetails (action) {
    console.log('GET EVENT DETAILS SAGA', action);
    let response= yield axios.get(`/api/event/details/${action.payload}`);
    console.log('GET EVENT DETAILS', response.data);
    yield put ({
        type: "SET_DETAILS",
        payload: response.data
    })
    
}

//post new event
//event.router line 34
function* postEvent(action) {
    console.log('POST EVENT', action);
    yield axios({
        method: 'POST',
        url: `/api/event`,
        data: action.payload
    });
    yield put ({
        type: 'FETCH_EVENTS'
    })
}

//delete specific event
//event.router line 49
// '/:id'
function* deleteEvent(action) {
    console.log('DELETE EVENT', action);
    yield axios({
        method: 'DELETE',
        url: `/api/event/${action.payload}`,
        data: {
            id: action.payload}
    });
    yield put({
        type: "FETCH_EVENTS"
    })
}

//update event
//event.router line 63
// '/edit/:id'
function* updateEvent (action) {
    console.log('UPDATE EVENT SAGA', action);
    yield axios({
        method: 'PUT',
        url: `/api/event/edit/${action.payload.id}`,
        data: action.payload
    });
    yield put({
        type: "FETCH_EVENTS"
    })
}


function* dailyLoggerSaga() {
    yield takeLatest('FETCH_EVENTS', getEvents);
    yield takeLatest('EVENT_DETAILS', getEventDetails);
    yield takeLatest('POST_EVENT', postEvent);
    yield takeLatest('DELETE_EVENT', deleteEvent);
    yield takeLatest('UPDATE_EVENT', updateEvent);
}

export default dailyLoggerSaga;