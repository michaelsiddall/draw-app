//attached to event.saga.js LINE 5
//attached to event.router line 7
const eventReducer = (state = [], action) => {
    console.log('EVENT REDUCER', action.payload);
    
    switch (action.type) {
        case 'SET_EVENTS':
            return action.payload;
        default:
            return state;
    }
}

export default eventReducer;