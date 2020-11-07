const authReducer = (state = [], action) => {
  switch (action.type) {
    case 'AUTH_DATA':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default authReducer;
