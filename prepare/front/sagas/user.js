import { all, call, fork } from '@redux-saga/core/effects';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST,
  LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST,
  SIGNUP_SUCCESS, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS } from '../actions/user';

const loginAPI = (data) => axios.post('/user/login', data);

function* login(action) {
  try {
    const response = yield call(loginAPI, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

const logoutAPI = () => axios.post('/user/logout');

function* logout() {
  const response = yield call(logoutAPI);
  try {
    yield put({
      type: LOGOUT_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
      error: err.response.data,
    });
  }
}

const signupAPI = (data) => axios.post('/user', data);

function* signup(action) {
  try {
    yield call(signupAPI, action.data);
    yield put({
      type: SIGNUP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGNUP_FAILURE,
      error: err.response.data,
    });
  }
}

function* follow(action) {
  try {
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}
function* unfollow(action) {
  try {
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

const loadMyInfoAPI = () => axios.get('/user');

function* loadMyInfo() {
  try {
    const response = yield call(loadMyInfoAPI);
    console.log(response);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  // while (true) {
  //     yield take('LOG_IN_REQUEST', login);
  // }
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchLogout() {
  // while (true) {
  //     yield take('LOG_OUT_REQUEST', logout);
  // }

  yield takeLatest(LOGOUT_REQUEST, logout);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchSignup() {
  yield takeLatest(SIGNUP_REQUEST, signup);
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout),
    fork(watchSignup), fork(watchFollow), fork(watchUnfollow), fork(watchLoadMyInfo)]);
}
