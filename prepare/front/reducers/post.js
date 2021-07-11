import produce from 'immer';
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
  LIKE_SUCCESS, LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  REMOVE_IMAGE,
  RETWEET_FAILURE,
  RETWEET_REQUEST,
  RETWEET_SUCCESS,
  UNLIKE_FAILURE,
  UNLIKE_REQUEST,
  UNLIKE_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
} from '../actions/post';

export const initialState = {
  mainPosts: [],
  singlePost: {},
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  likeLoading: false,
  likeDone: false,
  likeError: null,
  unlikeLoading: false,
  unlikeDone: false,
  unlikeError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
  hasMorePosts: true,
};

export const addPostRequestAction = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const deletePostRequestAction = (data) => ({
  type: DELETE_POST_REQUEST,
  data,
});
export const addCommentRequestAction = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      break;
    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      // immer 사용
      draft.mainPosts.unshift(action.data);
      // immer 사용 X
      // [dummyPost(action.data), ...state.mainPosts];
      break;
    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      console.log(action.error);
      break;
    case DELETE_POST_REQUEST:
      draft.deletePostLoading = true;
      break;
    case DELETE_POST_SUCCESS:
      draft.deletePostLoading = false;
      draft.deletePostDone = true;
      draft.mainPosts = draft.mainPosts.filter((p) => p.id !== action.data.PostId);
      break;
    case DELETE_POST_FAILURE:
      draft.deletePostLoading = false;
      draft.deletePostError = action.error;
      break;
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      break;
    case ADD_COMMENT_SUCCESS: {
      draft.addCommentDone = true;
      draft.addCommentLoading = false;
      const post = draft.mainPosts.find((p) => p.id === action.data.PostId);
      post.Comments.unshift(action.data);
    }
      break;
    case ADD_COMMENT_FAILURE:
      draft.loadPostsError = action.error;
      draft.loadPostsLoading = false;
      break;
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      break;
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePosts = draft.mainPosts.length === 10;
      break;
    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      break;
    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data;
      break;
    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;
    case LIKE_REQUEST:
      draft.likeLoading = true;
      break;
    case LIKE_SUCCESS: {
      draft.likeLoading = false;
      draft.likeDone = true;
      const post = draft.mainPosts.find((p) => p.id === action.data.PostId);
      post.Likers.push({ id: action.data.UserId });
      break;
    }
    case LIKE_FAILURE:
      draft.likeError = action.Error;
      draft.likeLoading = false;
      break;
    case UNLIKE_REQUEST:
      draft.unlikeLoading = true;
      break;
    case UNLIKE_SUCCESS: {
      draft.unlikeLoading = false;
      draft.unlikeDone = true;
      const post = draft.mainPosts.find((p) => p.id === action.data.PostId);
      post.Likers = post.Likers.filter((l) => l.id !== action.data.UserId);
      break;
    }
    case UNLIKE_FAILURE:
      draft.unlikeError = action.Error;
      draft.unlikeLoading = false;
      break;
    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      break;
    case UPLOAD_IMAGES_SUCCESS:
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      draft.imagePaths = action.data;
      break;
    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;
    case REMOVE_IMAGE:
      if (action.data) {
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      } else {
        draft.imagePaths = [];
      }
      break;
    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      break;
    case RETWEET_SUCCESS:
      draft.retweetLoading = false;
      draft.retweetDone = true;
      console.log(action.data);
      draft.mainPosts.unshift(action.data);
      break;
    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      console.error(action.error);
      break;
    default: break;
  }
});

export default reducer;

// export const dummyPostsGenerator = (number) => Array(number).fill().map(() => ({
//   id: v4(),
//   User: {
//     id: v4(),
//     nickname: faker.name.findName(),
//   },
//   content: faker.lorem.paragraph(),
//   Images: [{
//     src: faker.image.image(),
//   }],
//   Comments: [{
//     User: {
//       id: v4(),
//       nickname: faker.name.findName(),
//     },
//     content: faker.lorem.sentence(),
//   }],
// }));

// const dummyPost = (data) => ({
//   id: data.id,
//   content: data.text,
//   User: {
//     id: data.myInfo.id,
//     nickname: data.myInfo.nickname,
//   },
//   Images: [],
//   Comments: [],
// });

// const dummyComment = (data) => ({
//   id: v4(),
//   User: {
//     id: data.myInfo.id,
//     nickname: data.myInfo.nickname,
//   },
//   content: data.content,
// });
