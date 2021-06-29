import { all, delay, fork, put, takeLatest, throttle } from 'redux-saga/effects';
import { v4 } from 'uuid';
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS } from '../actions/post';
import { ADD_POST_TO_ME, DELETE_POST_OF_ME } from '../actions/user';
import { dummyPostsGenerator } from '../reducers/post';

// const addPostAPI = () => axios.post('api/add-post');

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    const id = v4();
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        myInfo: action.data.myInfo,
        text: action.data.text,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* deletePost(action) {
  try {
    yield delay(1000);
    yield put({
      type: DELETE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: DELETE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

// const addCommentAPI = (data) => axios.post('api/add-comment');

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

// const loadPostsAPI = (data) => axios.get('api/posts');

function* loadPosts() {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: dummyPostsGenerator(10),
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  // while (true) {
  //     yield take('ADD_POST_REQUEST', addPost);
  // }

  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchDeletePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchLoadPosts() {
  yield throttle(5000, LOAD_POST_REQUEST, loadPosts);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment),
    fork(watchDeletePost), fork(watchLoadPosts)]);
}
