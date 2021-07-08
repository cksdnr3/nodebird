import axios from 'axios';
import { all, call, fork, put, takeLatest, throttle } from 'redux-saga/effects';
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  LIKE_FAILURE,
  LIKE_REQUEST,
  LIKE_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS, REMOVE_IMAGE,
  UNLIKE_FAILURE,
  UNLIKE_REQUEST,
  UNLIKE_SUCCESS, UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS,
} from '../actions/post';
import { ADD_POST_TO_ME, DELETE_POST_OF_ME } from '../actions/user';

const addPostAPI = (data) => axios.post('/post', data);

function* addPost(action) {
  try {
    const response = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: response.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: response.data.id,
    });
    yield put({
      type: REMOVE_IMAGE,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

const deletePostAPI = (data) => axios.delete(`post/${data}`);

function* deletePost(action) {
  try {
    const response = yield call(deletePostAPI, action.data);
    yield put({
      type: DELETE_POST_SUCCESS,
      data: response.data,
    });
    yield put({
      type: DELETE_POST_OF_ME,
      data: response.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

const addCommentAPI = (data) => axios.post(`/post/${data.postId}/comment`, data);

function* addComment(action) {
  try {
    const response = yield call(addCommentAPI, action.data);
    console.log(JSON.stringify(response.data));
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

const loadPostsAPI = () => axios.get('/posts');

function* loadPosts() {
  try {
    const response = yield call(loadPostsAPI);
    console.log(JSON.stringify(response.data));
    yield put({
      type: LOAD_POST_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

const likeAPI = (data) => axios.patch(`post/${data}/like`);

function* like(action) {
  try {
    const response = yield call(likeAPI, action.data);
    yield put({
      type: LIKE_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LIKE_FAILURE,
      error: err.response.data,
    });
  }
}

const unlikeAPI = (data) => axios.delete(`post/${data}/like`);

function* unlike(action) {
  try {
    const response = yield call(unlikeAPI, action.data);
    yield put({
      type: UNLIKE_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNLIKE_FAILURE,
      error: err.response.data,
    });
  }
}

const uploadImagesAPI = (data) => axios.post('/post/images', data);

function* uploadImages(action) {
  try {
    const response = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
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

function* watchLike() {
  yield takeLatest(LIKE_REQUEST, like);
}

function* watchUnlike() {
  yield takeLatest(UNLIKE_REQUEST, unlike);
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment),
    fork(watchDeletePost), fork(watchLoadPosts), fork(watchLike), fork(watchUnlike),
    fork(watchUploadImages)]);
}
