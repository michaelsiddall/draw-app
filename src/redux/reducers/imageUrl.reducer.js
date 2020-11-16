const imageUrlReducer = (state = {}, action) => {
  console.log('in image url reducer')
  switch (action.type) {
    case 'SET_IMAGE_URL':
      return action.payload;
    case 'UNSET_IMAGE_URL':
      return null;
    default:
      return state;
  }
};
export default imageUrlReducer;
