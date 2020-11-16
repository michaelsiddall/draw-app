const requestReducer = (state = [], action) => {
    console.log("REQUEST Reducer", action.payload);

    switch (action.type) {
        case "SET_REQUEST":
            return action.payload;
        default:
            return state;
    }
};

export default requestReducer;