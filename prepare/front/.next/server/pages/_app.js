module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0c6W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOGOUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SIGNUP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SIGNUP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DELETE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_USER_FAILURE; });
/* unused harmony export LOAD_FOLLOWERS_REQUEST */
/* unused harmony export LOAD_FOLLOWERS_SUCCESS */
/* unused harmony export LOAD_FOLLOWERS_FAILURE */
/* unused harmony export LOAD_FOLLOWINGS_REQUEST */
/* unused harmony export LOAD_FOLLOWINGS_SUCCESS */
/* unused harmony export LOAD_FOLLOWINGS_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return REMOVE_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return REMOVE_FOLLOWERS_FAILURE; });
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const DELETE_POST_OF_ME = 'DELETE_POST_OF_ME';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const REMOVE_FOLLOWERS_REQUEST = 'REMOVE_FOLLOWERS_REQUEST';
const REMOVE_FOLLOWERS_SUCCESS = 'REMOVE_FOLLOWERS_SUCCESS';
const REMOVE_FOLLOWERS_FAILURE = 'REMOVE_FOLLOWERS_FAILURE';

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_ConfigureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("yNQW");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const App = ({
  Component
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("title", {
      children: "NodeBird"
    })
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Component, {})]
});

/* harmony default export */ __webpack_exports__["default"] = (_store_ConfigureStore__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].withRedux(App));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logoutRequestAction; });
/* unused harmony export followRequestAction */
/* unused harmony export unfollowRequestAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return signupRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0c6W");


const initialState = {
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
  userInfo: null
};
const loginRequestAction = data => ({
  type: _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOGIN_REQUEST */ "p"],
  data
});
const logoutRequestAction = () => ({
  type: _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOGOUT_REQUEST */ "s"]
});
const followRequestAction = () => ({
  type: _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* FOLLOW_REQUEST */ "g"]
});
const unfollowRequestAction = () => ({
  type: _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* UNFOLLOW_REQUEST */ "B"]
});
const signupRequestAction = data => ({
  type: _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* SIGNUP_REQUEST */ "y"],
  data
}); // const dummyGenerator = (data) => ({
//   ...data,
//   nickname: 'cksdnr3',
//   id: v4(),
//   Posts: [],
//   Followings: [],
//   Followers: [],
// });

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOGIN_REQUEST */ "p"]:
      draft.loginLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOGIN_SUCCESS */ "q"]:
      draft.loginLoading = false;
      draft.loginDone = true;
      draft.myInfo = action.data;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOGIN_FAILURE */ "o"]:
      draft.loginLoading = false;
      draft.loginError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOGOUT_REQUEST */ "s"]:
      draft.logoutLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOGOUT_SUCCESS */ "t"]:
      draft.logoutLoading = false;
      draft.loginDone = false;
      draft.myInfo = null;
      console.log(action.data);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOGOUT_FAILURE */ "r"]:
      draft.logoutLoading = false;
      draft.logoutError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* CHANGE_NICKNAME_REQUEST */ "c"]:
      draft.changeNicknameLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* CHANGE_NICKNAME_SUCCESS */ "d"]:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      draft.myInfo.nickname = action.data.nickname;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* CHANGE_NICKNAME_FAILURE */ "b"]:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* SIGNUP_REQUEST */ "y"]:
      draft.signupLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* SIGNUP_SUCCESS */ "z"]:
      draft.signupLoading = false;
      draft.signupDone = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* SIGNUP_FAILURE */ "x"]:
      draft.signupLoading = false;
      draft.signupError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* ADD_POST_TO_ME */ "a"]:
      draft.myInfo.Posts.unshift({
        id: action.data
      });
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* DELETE_POST_OF_ME */ "e"]:
      draft.myInfo.Posts = draft.myInfo.Posts.filter(p => p.id !== action.data.PostId);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* FOLLOW_REQUEST */ "g"]:
      draft.followLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* FOLLOW_SUCCESS */ "h"]:
      draft.followLoading = false;
      draft.followDone = true;
      draft.myInfo.Followings.push({
        id: action.data.UserId
      });
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* FOLLOW_FAILURE */ "f"]:
      draft.followLoading = false;
      draft.followError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* UNFOLLOW_REQUEST */ "B"]:
      draft.unfollowLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* UNFOLLOW_SUCCESS */ "C"]:
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      draft.myInfo.Followings = draft.myInfo.Followings.filter(f => f.id !== action.data.UserId);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* UNFOLLOW_FAILURE */ "A"]:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_MY_INFO_REQUEST */ "j"]:
      draft.loadMyInfoLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_MY_INFO_SUCCESS */ "k"]:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;
      draft.myInfo = action.data;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_MY_INFO_FAILURE */ "i"]:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_USER_REQUEST */ "m"]:
      draft.loadUserLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_USER_SUCCESS */ "n"]:
      draft.loadUserLoading = false;
      draft.loadUserDone = true;
      draft.userInfo = action.data;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_USER_FAILURE */ "l"]:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* REMOVE_FOLLOWERS_REQUEST */ "v"]:
      draft.removeFollowersLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* REMOVE_FOLLOWERS_SUCCESS */ "w"]:
      draft.removeFollowersLoading = false;
      draft.removeFollowersDone = true;
      draft.myInfo.Followers = draft.myInfo.Followers.filter(f => f.id !== action.data.UserId);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__[/* REMOVE_FOLLOWERS_FAILURE */ "u"]:
      draft.removeFollowersLoading = false;
      draft.removeFollowersError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["a"] = (reducer); // redux-thunk
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

/***/ }),

/***/ "OcYQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backUrl; });
const backUrl = 'http://api.chanuk.shop'; // export const backUrl = 'http://localhost:3060';

/***/ }),

/***/ "P8W0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DELETE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DELETE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LIKE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNLIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UNLIKE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNLIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return RETWEET_FAILURE; });
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LIKE_REQUEST = 'LIKE_REQUEST';
const LIKE_SUCCESS = 'LIKE_SUCCESS';
const LIKE_FAILURE = 'LIKE_FAILURE';
const UNLIKE_REQUEST = 'UNLIKE_REQUEST';
const UNLIKE_FAILURE = 'UNLIKE_FAILURE';
const UNLIKE_SUCCESS = 'UNLIKE_SUCCESS';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ionj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(...args);
});

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export addPostRequestAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deletePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCommentRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("P8W0");


const initialState = {
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
  hasMorePosts: true
};
const addPostRequestAction = data => ({
  type: _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* ADD_POST_REQUEST */ "e"],
  data
});
const deletePostRequestAction = data => ({
  type: _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* DELETE_POST_REQUEST */ "h"],
  data
});
const addCommentRequestAction = data => ({
  type: _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* ADD_COMMENT_REQUEST */ "b"],
  data
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* ADD_POST_REQUEST */ "e"]:
      draft.addPostLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* ADD_POST_SUCCESS */ "f"]:
      draft.addPostLoading = false; // immer 사용

      draft.mainPosts.unshift(action.data); // immer 사용 X
      // [dummyPost(action.data), ...state.mainPosts];

      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* ADD_POST_FAILURE */ "d"]:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      console.log(action.error);
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* DELETE_POST_REQUEST */ "h"]:
      draft.deletePostLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* DELETE_POST_SUCCESS */ "i"]:
      draft.deletePostLoading = false;
      draft.deletePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(p => p.id !== action.data.PostId);
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* DELETE_POST_FAILURE */ "g"]:
      draft.deletePostLoading = false;
      draft.deletePostError = action.error;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* ADD_COMMENT_REQUEST */ "b"]:
      draft.addCommentLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* ADD_COMMENT_SUCCESS */ "c"]:
      {
        draft.addCommentDone = true;
        draft.addCommentLoading = false;
        const post = draft.mainPosts.find(p => p.id === action.data.PostId);
        post.Comments.unshift(action.data);
      }
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* ADD_COMMENT_FAILURE */ "a"]:
      draft.loadPostsError = action.error;
      draft.loadPostsLoading = false;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_USER_POSTS_REQUEST */ "w"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_HASHTAG_POSTS_REQUEST */ "n"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_POSTS_REQUEST */ "q"]:
      draft.loadPostsLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_USER_POSTS_SUCCESS */ "x"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_HASHTAG_POSTS_SUCCESS */ "o"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_POSTS_SUCCESS */ "r"]:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePosts = draft.mainPosts.length === 10;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_USER_POSTS_FAILURE */ "v"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_HASHTAG_POSTS_FAILURE */ "m"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_POSTS_FAILURE */ "p"]:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_POST_REQUEST */ "t"]:
      draft.loadPostLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_POST_SUCCESS */ "u"]:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LOAD_POST_FAILURE */ "s"]:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LIKE_REQUEST */ "k"]:
      draft.likeLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LIKE_SUCCESS */ "l"]:
      {
        draft.likeLoading = false;
        draft.likeDone = true;
        const post = draft.mainPosts.find(p => p.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        break;
      }

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* LIKE_FAILURE */ "j"]:
      draft.likeError = action.Error;
      draft.likeLoading = false;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* UNLIKE_REQUEST */ "D"]:
      draft.unlikeLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* UNLIKE_SUCCESS */ "E"]:
      {
        draft.unlikeLoading = false;
        draft.unlikeDone = true;
        const post = draft.mainPosts.find(p => p.id === action.data.PostId);
        post.Likers = post.Likers.filter(l => l.id !== action.data.UserId);
        break;
      }

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* UNLIKE_FAILURE */ "C"]:
      draft.unlikeError = action.Error;
      draft.unlikeLoading = false;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* UPLOAD_IMAGES_REQUEST */ "G"]:
      draft.uploadImagesLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* UPLOAD_IMAGES_SUCCESS */ "H"]:
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      draft.imagePaths = action.data;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* UPLOAD_IMAGES_FAILURE */ "F"]:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* REMOVE_IMAGE */ "y"]:
      if (action.data) {
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      } else {
        draft.imagePaths = [];
      }

      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* RETWEET_REQUEST */ "A"]:
      draft.retweetLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* RETWEET_SUCCESS */ "B"]:
      draft.retweetLoading = false;
      draft.retweetDone = true;
      console.log(action.data);
      draft.mainPosts.unshift(action.data);
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__[/* RETWEET_FAILURE */ "z"]:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      console.error(action.error);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["b"] = (reducer); // export const dummyPostsGenerator = (number) => Array(number).fill().map(() => ({
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

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yNQW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js



 // combineReducers가 알아서 initialState을 세팅해준다.
// HYDRATE(SSR)를 위해 index 리듀서를 추가해준다.

const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(external_redux_["combineReducers"])({
          user: user["a" /* default */],
          post: post["b" /* default */]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./actions/post.js
var actions_post = __webpack_require__("P8W0");

// EXTERNAL MODULE: ./actions/user.js
var actions_user = __webpack_require__("0c6W");

// CONCATENATED MODULE: ./sagas/post.js





const addPostAPI = data => external_axios_default.a.post('/post', data);

function* addPost(action) {
  try {
    const response = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_post["f" /* ADD_POST_SUCCESS */],
      data: response.data
    });
    yield Object(effects_["put"])({
      type: actions_user["a" /* ADD_POST_TO_ME */],
      data: response.data.id
    });
    yield Object(effects_["put"])({
      type: actions_post["y" /* REMOVE_IMAGE */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_post["d" /* ADD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

const deletePostAPI = data => external_axios_default.a.delete(`/post/${data}`);

function* deletePost(action) {
  try {
    const response = yield Object(effects_["call"])(deletePostAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_post["i" /* DELETE_POST_SUCCESS */],
      data: response.data
    });
    yield Object(effects_["put"])({
      type: actions_user["e" /* DELETE_POST_OF_ME */],
      data: response.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_post["g" /* DELETE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

const addCommentAPI = data => external_axios_default.a.post(`/post/${data.postId}/comment`, data);

function* addComment(action) {
  try {
    const response = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_post["c" /* ADD_COMMENT_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: actions_post["a" /* ADD_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

const loadPostAPI = data => external_axios_default.a.get(`/post/${data}`);

function* loadPost(action) {
  try {
    const response = yield Object(effects_["call"])(loadPostAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_post["u" /* LOAD_POST_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_post["s" /* LOAD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

const likeAPI = data => external_axios_default.a.patch(`/post/${data}/like`);

function* like(action) {
  try {
    const response = yield Object(effects_["call"])(likeAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_post["l" /* LIKE_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: actions_post["j" /* LIKE_FAILURE */],
      error: err.response.data
    });
  }
}

const unlikeAPI = data => external_axios_default.a.delete(`/post/${data}/like`);

function* unlike(action) {
  try {
    const response = yield Object(effects_["call"])(unlikeAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_post["E" /* UNLIKE_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: actions_post["C" /* UNLIKE_FAILURE */],
      error: err.response.data
    });
  }
}

const uploadImagesAPI = data => external_axios_default.a.post('/post/images', data);

function* uploadImages(action) {
  try {
    const response = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_post["H" /* UPLOAD_IMAGES_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: actions_post["F" /* UPLOAD_IMAGES_FAILURE */],
      error: err.response.data
    });
  }
}

const retweetAPI = data => external_axios_default.a.post(`/post/${data}/retweet`);

function* retweet(action) {
  try {
    const response = yield Object(effects_["call"])(retweetAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_post["B" /* RETWEET_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: actions_post["z" /* RETWEET_FAILURE */],
      error: err.response.data
    });
  }
}

const loadPostsAPI = data => external_axios_default.a.get(`/posts?lastId=${data || 0}`);

function* loadPosts(action) {
  try {
    const response = yield Object(effects_["call"])(loadPostsAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_post["r" /* LOAD_POSTS_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_post["p" /* LOAD_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

const loadUserPostsAPI = (data, lastId) => external_axios_default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);

function* loadUserPosts(action) {
  try {
    const response = yield Object(effects_["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: actions_post["x" /* LOAD_USER_POSTS_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: actions_post["v" /* LOAD_USER_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

const loadHashtagPostsAPI = (data, lastId) => external_axios_default.a.get(`/hashtag/${data}?lastId=${lastId || 0}`);

function* loadHashtagPosts(action) {
  try {
    const response = yield Object(effects_["call"])(loadHashtagPostsAPI, encodeURIComponent(action.data), action.lastId);
    yield Object(effects_["put"])({
      type: actions_post["o" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: actions_post["m" /* LOAD_HASHTAG_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  // while (true) {
  //     yield take('ADD_POST_REQUEST', addPost);
  // }
  yield Object(effects_["takeLatest"])(actions_post["e" /* ADD_POST_REQUEST */], addPost);
}

function* watchDeletePost() {
  yield Object(effects_["takeLatest"])(actions_post["h" /* DELETE_POST_REQUEST */], deletePost);
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(actions_post["b" /* ADD_COMMENT_REQUEST */], addComment);
}

function* watchLoadPosts() {
  yield Object(effects_["throttle"])(5000, actions_post["q" /* LOAD_POSTS_REQUEST */], loadPosts);
}

function* watchLike() {
  yield Object(effects_["takeLatest"])(actions_post["k" /* LIKE_REQUEST */], like);
}

function* watchUnlike() {
  yield Object(effects_["takeLatest"])(actions_post["D" /* UNLIKE_REQUEST */], unlike);
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(actions_post["G" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function* watchRetweet() {
  yield Object(effects_["takeLatest"])(actions_post["A" /* RETWEET_REQUEST */], retweet);
}

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(actions_post["t" /* LOAD_POST_REQUEST */], loadPost);
}

function* watchLoadUserPosts() {
  yield Object(effects_["takeLatest"])(actions_post["w" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(effects_["takeLatest"])(actions_post["n" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchDeletePost), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchLike), Object(effects_["fork"])(watchUnlike), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchRetweet), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchLoadHashtagPosts)]);
}
// CONCATENATED MODULE: ./sagas/user.js




const loginAPI = data => external_axios_default.a.post('/user/login', data);

function* login(action) {
  try {
    const response = yield Object(effects_["call"])(loginAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_user["q" /* LOGIN_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_user["o" /* LOGIN_FAILURE */],
      error: err.response.data
    });
  }
}

const logoutAPI = () => external_axios_default.a.post('/user/logout');

function* logout() {
  const response = yield Object(effects_["call"])(logoutAPI);

  try {
    yield Object(effects_["put"])({
      type: actions_user["t" /* LOGOUT_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_user["r" /* LOGOUT_FAILURE */],
      error: err.response.data
    });
  }
}

const signupAPI = data => external_axios_default.a.post('/user', data);

function* signup(action) {
  try {
    yield Object(effects_["call"])(signupAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_user["z" /* SIGNUP_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_user["x" /* SIGNUP_FAILURE */],
      error: err.response.data
    });
  }
}

const followAPI = data => external_axios_default.a.patch(`/user/${data}/follow`);

function* follow(action) {
  try {
    console.log(action.data);
    const response = yield Object(effects_["call"])(followAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_user["h" /* FOLLOW_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_user["f" /* FOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

const unfollowAPI = data => external_axios_default.a.delete(`/user/${data}/follow`);

function* unfollow(action) {
  try {
    const response = yield Object(effects_["call"])(unfollowAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_user["C" /* UNFOLLOW_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_user["A" /* UNFOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

const loadMyInfoAPI = () => external_axios_default.a.get('/user');

function* loadMyInfo() {
  try {
    const response = yield Object(effects_["call"])(loadMyInfoAPI);
    yield Object(effects_["put"])({
      type: actions_user["k" /* LOAD_MY_INFO_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_user["i" /* LOAD_MY_INFO_FAILURE */],
      error: 1
    });
  }
}

const loadUserAPI = data => external_axios_default.a.get(`/user/${data}`);

function* loadUser(action) {
  try {
    const response = yield Object(effects_["call"])(loadUserAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_user["n" /* LOAD_USER_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_user["l" /* LOAD_USER_FAILURE */],
      error: err.response.data
    });
  }
}

const changeNicknameAPI = data => external_axios_default.a.patch('/user/nickname', data);

function* changeNickname(action) {
  try {
    const response = yield Object(effects_["call"])(changeNicknameAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_user["d" /* CHANGE_NICKNAME_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: actions_user["b" /* CHANGE_NICKNAME_FAILURE */],
      error: err.response.data
    });
  }
}

const removeFollowerAPI = data => external_axios_default.a.delete(`/user/follower/${data}`);

function* removeFollower(action) {
  try {
    const response = yield Object(effects_["call"])(removeFollowerAPI, action.data);
    yield Object(effects_["put"])({
      type: actions_user["w" /* REMOVE_FOLLOWERS_SUCCESS */],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: actions_user["u" /* REMOVE_FOLLOWERS_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchLogin() {
  // while (true) {
  //     yield take('LOG_IN_REQUEST', login);
  // }
  yield Object(effects_["takeLatest"])(actions_user["p" /* LOGIN_REQUEST */], login);
}

function* watchLogout() {
  yield Object(effects_["takeLatest"])(actions_user["s" /* LOGOUT_REQUEST */], logout);
}

function* watchFollow() {
  yield Object(effects_["takeLatest"])(actions_user["g" /* FOLLOW_REQUEST */], follow);
}

function* watchUnfollow() {
  yield Object(effects_["takeLatest"])(actions_user["B" /* UNFOLLOW_REQUEST */], unfollow);
}

function* watchSignup() {
  yield Object(effects_["takeLatest"])(actions_user["y" /* SIGNUP_REQUEST */], signup);
}

function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(actions_user["j" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}

function* watchChangeNickname() {
  yield Object(effects_["takeLatest"])(actions_user["c" /* CHANGE_NICKNAME_REQUEST */], changeNickname);
}

function* watchRemoveFollower() {
  yield Object(effects_["takeLatest"])(actions_user["v" /* REMOVE_FOLLOWERS_REQUEST */], removeFollower);
}

function* watchLoadUser() {
  yield Object(effects_["takeLatest"])(actions_user["m" /* LOAD_USER_REQUEST */], loadUser);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchChangeNickname), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchLoadMyInfo), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnfollow), Object(effects_["fork"])(watchLogin), Object(effects_["fork"])(watchLogout), Object(effects_["fork"])(watchSignup)]);
}
// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__("OcYQ");

// CONCATENATED MODULE: ./sagas/index.js





external_axios_default.a.defaults.baseURL = config["a" /* backUrl */];
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(postSaga), Object(effects_["fork"])(userSaga)]);
}
// CONCATENATED MODULE: ./store/ConfigureStore.js





 // redux thunk
// const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//   console.log(action);
//   return next(action);
// };

const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var ConfigureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });