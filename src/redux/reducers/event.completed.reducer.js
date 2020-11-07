//attached to event.saga.js LINE 17
//attached to event.router line 20
const completedEventsReducer = (state = [], action) => {
    console.log('COMPLETED EVENT REDUCER', action.payload);
    
    switch (action.type) {
        case 'SET_COMPLETED':
            return action.payload;
        default:
            return state;
    }
}

export default completedEventsReducer;