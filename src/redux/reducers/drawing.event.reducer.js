const eventDrawingByIdReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_APPROVED_EVENT_DRAWINGS':
      return action.payload;
    default:
      return state;
  }
};

export default eventDrawingByIdReducer;
