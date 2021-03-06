import produce from '../util/produce';
import {
  ADD_POST_TO_ME, DELETE_POST_OF_ME,
  CHANGE_NICKNAME_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS,
  FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS,
  LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS,
  LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
  REMOVE_FOLLOWERS_REQUEST, REMOVE_FOLLOWERS_SUCCESS, REMOVE_FOLLOWERS_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
} from '../actions/user';

export const initialState = {
  loginLoading: false,
  loginDone: false,
  loginError: null,
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
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  removeFollowersLoading: false,
  removeFollowersDone: false,
  removeFollowersError: null,
  myInfo: null,
  userInfo: null,
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
      console.log(action.data);
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
      draft.changeNicknameDone = true;
      draft.myInfo.nickname = action.data.nickname;
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
      draft.myInfo.Posts = draft.myInfo.Posts.filter((p) => p.id !== action.data.PostId);
      break;
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      break;
    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true;
      draft.myInfo.Followings.push({ id: action.data.UserId });
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
      draft.myInfo.Followings = draft.myInfo.Followings.filter((f) => f.id !== action.data.UserId);
      break;
    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      console.log(action.error);
      break;
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      break;
    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;
      draft.myInfo = action.data;
      break;
    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;
    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      break;
    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.loadUserDone = true;
      draft.userInfo = action.data;
      break;
    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;
    case REMOVE_FOLLOWERS_REQUEST:
      draft.removeFollowersLoading = true;
      break;
    case REMOVE_FOLLOWERS_SUCCESS:
      draft.removeFollowersLoading = false;
      draft.removeFollowersDone = true;
      draft.myInfo.Followers = draft.myInfo.Followers.filter((f) => f.id !== action.data.UserId);
      break;
    case REMOVE_FOLLOWERS_FAILURE:
      draft.removeFollowersLoading = false;
      draft.removeFollowersError = action.error;
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
