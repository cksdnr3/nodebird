import { v4 } from 'uuid';
import produce from 'immer';
import faker from 'faker';
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS } from '../actions/post';

export const dummyPostsGenerator = (number) => Array(number).fill().map(() => ({
  id: v4(),
  User: {
    id: v4(),
    nickname: faker.name.findName(),
  },
  content: faker.lorem.paragraph(),
  Images: [{
    src: faker.image.image(),
  }],
  Comments: [{
    User: {
      id: v4(),
      nickname: faker.name.findName(),
    },
    content: faker.lorem.sentence(),
  }],
}));

export const initialState = {
  mainPosts: [],
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
      draft.mainPosts = draft.mainPosts.filter((p) => p.id !== action.data);
      break;
    case DELETE_POST_FAILURE:
      draft.deletePostLoading = false;
      draft.deletePostError = action.error;
      break;
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      break;
    case ADD_COMMENT_SUCCESS:
      draft.addCommentDone = true;
      draft.addCommentLoading = false;
      draft.mainPosts.find((p) => p.id === action.data.PostId)
        .Comments.unshift(action.data);
      //   draft.mainPosts.forEach((post) => {
      //     if (post.id === action.data.postId) {
      //       post.Comments.unshift(dummyComment(action.data));
      //     }
      //   });
      break;
    case ADD_COMMENT_FAILURE:
      draft.loadPostsError = action.error;
      draft.loadPostsLoading = false;
      break;
    case LOAD_POST_REQUEST:
      draft.loadPostsLoading = true;
      break;
    case LOAD_POST_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts);
      draft.hasMorePosts = draft.mainPosts.length < 50;
      break;
    case LOAD_POST_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    default: break;
  }
});

export default reducer;
