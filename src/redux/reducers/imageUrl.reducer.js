const imageUrlReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_IMAGE_URL':
      return action.payload;
    default:
      return state;
  }
};
export default imageUrlReducer;
