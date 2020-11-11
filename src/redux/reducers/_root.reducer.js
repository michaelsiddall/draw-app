import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import auth from './auth.reducer';
import authEditReducer from './authEdit.reducer';
import drawing from './drawing.reducer';

import request from './request.reducer';
<<<<<<< HEAD

import eventsReducer from "./event.uncompleted.reducer";
import eventsCompletedReducer from "./event.completed.reducer";

=======
import imageUrlReducer from './imageUrl.reducer';
import eventsReducer from './event.uncompleted.reducer';
import eventsCompletedReducer from './event.completed.reducer';
import eventSpecific from './event.specific.reducer';
>>>>>>> ac52f8af8896a3ede21f49526e8e85b4f90156fc

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  eventsReducer,
  eventsCompletedReducer,
  auth, //this is the reducer for the auth permissions control
  authEditReducer, //this is the auth info for a specific user ID to edit
  drawing,
  imageUrlReducer, //reducer to store the image URL from imageUploader
  //events,
  request,
});

export default rootReducer;
