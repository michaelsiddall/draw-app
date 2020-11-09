import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addRequest(action) {
  // console.log("in addRequest Saga", action.payload);
  yield axios({
    method: "POST",
    url: "/request",
    data: action.payload,
  });
}

function* requestSaga() {
  yield takeLatest("ADD_REQUEST", addRequest);
}

export default requestSaga;
