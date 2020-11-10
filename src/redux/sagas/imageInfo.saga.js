import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postImageUrl(action) {
  console.log('GET EVENTS', response.data);
  yield put({});
}

function* imageInfoSaga() {
  yield takeLatest('POST_IMAGE_URL', postImageUrl);
}

export default imageInfoSaga;
