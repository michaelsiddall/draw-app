const requestReducer = (state = [], action) => {
  console.log("in requestReducer", action.payload);

  switch (action.type) {
    case "SET_REQUEST":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.artist
export default requestReducer;
