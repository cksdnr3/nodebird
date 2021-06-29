import { all, fork } from '@redux-saga/core/effects';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNUP_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS } from '../actions/user';

// const l = login({ type: 'LOG_IN_REQUEST', data: { id: 'cksdnr333@gmail.com' } });

// function loginAPI(data) {
//   return axios.post('api/login', data);
// }

function* login(action) {
  // const result = yield call(loginAPI, action.data);
  try {
    yield delay(1000);
    yield put({
      type: LOGIN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

// function logoutAPI() {
//   return axios.post('api/logout');
// }

function* logout() {
  // const result = yield call(logoutAPI);
  try {
    yield delay(1000);
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
      error: err.response.data,
    });
  }
}

// function signupAPI(data) {
//   return axios.post('api/signup', data);
// }

function* signup(action) {
  try {
    // const result = signupAPI(action.data);
    yield delay(1000);
    localStorage.setItem('id', action.data.id);
    localStorage.setItem('pwd', action.data.pwd);
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
    yield delay(1000);
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
    yield delay(1000);
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

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout),
    fork(watchSignup), fork(watchFollow), fork(watchUnfollow)]);
}
