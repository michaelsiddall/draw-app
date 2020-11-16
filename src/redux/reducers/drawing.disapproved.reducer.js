const disapprovedReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DISAPPROVED_DRAWINGS':
            return action.payload;
        default:
            return state;
    }
};

export default disapprovedReducer;