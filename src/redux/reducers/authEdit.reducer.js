export const authEditReducer = (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_TO_EDIT_DATA':
      return action.payload;
    default:
      return state;
  }
};
export default authEditReducer;
