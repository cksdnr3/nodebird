import produce from 'immer';
import {
  ADD_POST_TO_ME,
  CHANGE_NICKNAME_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  DELETE_POST_OF_ME,
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
} from '../actions/user';

export const initialState = {
  loginLoading: false,
  loginDone: false,
  lgoinError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  myInfo: null,
};

export const loginRequestAction = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: LOGOUT_REQUEST,
});

export const followRequestAction = () => ({
  type: FOLLOW_REQUEST,
});

export const unfollowRequestAction = () => ({
  type: UNFOLLOW_REQUEST,
});

export const signupRequestAction = (data) => ({
  type: SIGNUP_REQUEST,
  data,
});

// const dummyGenerator = (data) => ({
//   ...data,
//   nickname: 'cksdnr3',
//   id: v4(),
//   Posts: [],
//   Followings: [],
//   Followers: [],
// });

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      draft.loginLoading = true;
      break;
    case LOGIN_SUCCESS:
      draft.loginLoading = false;
      draft.loginDone = true;
      draft.myInfo = action.data;
      break;
    case LOGIN_FAILURE:
      draft.loginLoading = false;
      draft.loginError = action.error;
      console.log(action.error);
      break;
    case LOGOUT_REQUEST:
      draft.logoutLoading = true;
      break;
    case LOGOUT_SUCCESS:
      draft.logoutLoading = false;
      draft.loginDone = false;
      draft.myInfo = null;
      break;
    case LOGOUT_FAILURE:
      draft.logoutLoading = false;
      draft.logoutError = action.error;
      console.log(action.error);
      break;
    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      break;
    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = false;
      draft.myInfo.nickname = action.data;
      break;
    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      console.log(action.error);

      break;
    case SIGNUP_REQUEST:
      draft.signupLoading = true;
      break;
    case SIGNUP_SUCCESS:
      draft.signupLoading = false;
      draft.signupDone = true;
      break;
    case SIGNUP_FAILURE:
      draft.signupLoading = false;
      draft.signupError = action.error;
      console.log(action.error);

      break;
    case ADD_POST_TO_ME:
      draft.myInfo.Posts.unshift({ id: action.data });
      break;
    case DELETE_POST_OF_ME:
      draft.myInfo.Posts = draft.myInfo.Posts.filter((p) => p.id !== action.data);
      break;
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      break;
    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true;
      draft.myInfo.Followings.push({ id: action.data });
      break;
    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      console.log(action.error);

      break;
    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      break;
    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      draft.myInfo.Followings = draft.myInfo.Followings.filter((f) => f.id !== action.data);
      break;
    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      console.log(action.error);

      break;
    default: break;
  }
});

export default reducer;

// redux-thunk
// export const loginAction = (data) => {
//     return (dispatch, getState) => {
//         dispatch(loginRequestAction());
//         axios
//             .post('api/login')
//             .then((res) => {
//                 dispatch(loginSuccessAction(res.data));
//             })
//             .catch((err) => {
//                 dispatch(loginFailureAction(err));
//             });
//     };
// };
