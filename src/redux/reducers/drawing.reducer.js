const drawingReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DRAWINGS':
            return action.payload;
        default:
            return state;
    }
};

export default drawingReducer;