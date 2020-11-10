const pendingReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PENDING_DRAWINGS':
            return action.payload;
        default:
            return state;
    }
};

export default pendingReducer;