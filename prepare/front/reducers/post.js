import { v4 } from 'uuid';
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from '../actions/post';

export const initialState = {
  mainPosts: [
    {
      id: v4(),
      User: {
        id: v4(),
        nickname: '찬욱',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://thebook.io/img/covers/cover_080263.jpg',
        },
        {
          src: 'https://thebook.io/img/covers/cover_080233.jpg',
        },
        {
          src: 'https://thebook.io/img/covers/cover_006945.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'user1',
          },
          content: 'comment 1',
        },
        {
          User: {
            nickname: 'user2',
          },
          content: 'comment 2',
        },
        {
          User: {
            nickname: 'user3',
          },
          content: 'comment 3',
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const addPostRequestAction = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addCommentRequestAction = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPosts = (data) => ({
  id: v4(),
  content: data.text,
  User: {
    id: data.myInfo.id,
    nickname: data.myInfo.nickname,
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: v4(),
  User: {
    id: data.myInfo.id,
    nickname: data.myInfo.nickname,
  },
  content: data.content,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostDone: true,
        addPostLoading: false,
        mainPosts: [dummyPosts(action.data), ...state.mainPosts],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentDone: true,
        addCommentLoading: false,
        mainPosts: state.mainPosts.map((post) => {
          if (post.id === action.data.postId) {
            console.log('post');
            console.log(post);
            return {
              ...post,
              Comments: [dummyComment(action.data), ...post.Comments],
            };
          }
          return {
            ...post,
          };
        }),
      };

    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentError: action.error,
        addCommentLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
