import axios from 'axios';
import { takeLatest , put} from 'redux-saga/effects';


//get all uncompleted events
//event.router line 7
function * getEvents (action) {
    console.log('GET UNCOMPLETED EVENTS SAGA', action);
    let response= yield axios.get(`/api/event`);
    console.log('GET EVENTS', response.data);
    yield put ({
        type: "SET_EVENTS",
        payload: response.data
    })  
}

//get all completed events
//event.router line 20
// '/completed'
function * getCompletedEvents (action) {
    console.log('GET COMPLETED EVENTS SAGA', action);
    let response= yield axios.get(`/api/event/completed`);
    console.log('GET EVENTS', response.data);
    yield put ({
        type: "SET_COMPLETED",
        payload: response.data
    })  
}

//get specific event
//event.router line 33
// '/:id'
function * getSpecificEvent (action) {
    console.log('GET SPECIFIC EVENT SAGA', action);
    let response= yield axios.get(`/api/event/${action.payload}`);
    console.log('GET SPECIFIC EVENT', response.data);
    yield put ({
        type: "SET_SPECIFIC",
        payload: response.data
    })
    
}

//post new event
//event.router line 47
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
//event.router line 62
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
//event.router line 76
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


function* eventSaga() {
    yield takeLatest('FETCH_EVENTS', getEvents);
    yield takeLatest('FETCH_COMPLETED', getCompletedEvents);
    yield takeLatest('FETCH_SPECIFIC', getSpecificEvent);
    yield takeLatest('POST_EVENT', postEvent);
    yield takeLatest('DELETE_EVENT', deleteEvent);
    yield takeLatest('UPDATE_EVENT', updateEvent);
}

export default eventSaga;