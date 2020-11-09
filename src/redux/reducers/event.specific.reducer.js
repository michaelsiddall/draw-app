//attached to event.saga.js LINE 30
//attached to event.router line 33
const specificEventReducer = (state = [], action) => {
    console.log('SPECIFIC EVENT REDUCER', action.payload);
    
    switch (action.type) {
        case 'SET_SPECIFIC':
            return action.payload;
        default:
            return state;
    }
}

export default specificEventReducer;