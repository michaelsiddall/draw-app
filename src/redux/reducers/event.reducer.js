//attached to event.saga.js
//attached to event.router.js
const eventReducer = (state = [], action) => {
    console.log('EVENT REDUCER', action.payload);
    
    switch (action.type) {
        case 'SET_EVENT':
            return action.payload;
        default:
            return state;
    }
}

export default eventReducer;