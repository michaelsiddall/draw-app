const queueReducer = (state = [], action) => {
    console.log("Queue Reducer", action.payload);

    switch (action.type) {
        case "REQUEST_BY_EVENT":
            return action.payload;
        default:
            return state;
    }
};

export default queueReducer;