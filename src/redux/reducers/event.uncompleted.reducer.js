//attached to event.saga.js LINE 5
//attached to event.router line 7
const eventsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EVENTS':
            return action.payload;
        default:
            return state;
    }
}

export default eventsReducer;