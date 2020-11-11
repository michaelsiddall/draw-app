import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postImageUrl(action) {
  console.log('sending image url', action);

  yield put({
    type: 'SET_IMAGE_URL',
    payload: action.payload,
  });
}

function* imageInfoSaga() {
  yield takeLatest('POST_IMAGE_URL', postImageUrl);
}

export default imageInfoSaga;
