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

/***/ "./actions/post.js":
/*!*************************!*\
  !*** ./actions/post.js ***!
  \*************************/
/*! exports provided: ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE, UNLIKE_FAILURE, UNLIKE_REQUEST, UNLIKE_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_REQUEST", function() { return DELETE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_FAILURE", function() { return DELETE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_REQUEST", function() { return LIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_SUCCESS", function() { return LIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_FAILURE", function() { return LIKE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_FAILURE", function() { return UNLIKE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_REQUEST", function() { return UNLIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_SUCCESS", function() { return UNLIKE_SUCCESS; });
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LIKE_REQUEST = 'LIKE_REQUEST';
const LIKE_SUCCESS = 'LIKE_SUCCESS';
const LIKE_FAILURE = 'LIKE_FAILURE';
const UNLIKE_FAILURE = 'UNLIKE_FAILURE';
const UNLIKE_REQUEST = 'UNLIKE_REQUEST';
const UNLIKE_SUCCESS = 'UNLIKE_SUCCESS';

/***/ }),

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, DELETE_POST_OF_ME, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILURE", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_FAILURE", function() { return LOGOUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_REQUEST", function() { return SIGNUP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_FAILURE", function() { return SIGNUP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_OF_ME", function() { return DELETE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
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

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_ConfigureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/ConfigureStore */ "./store/ConfigureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\cksdn\\dev\\project\\nodebird\\prepare\\front\\pages\\_app.js";








const App = ({
  Component
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
      children: "NodeBird"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_ConfigureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // combineReducers가 알아서 initialState을 세팅해준다.

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  // HYDRATE(SSR)를 위해 index 리듀서를 추가해준다.
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPostRequestAction, deletePostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostRequestAction", function() { return deletePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");


const initialState = {
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
  likeLoading: false,
  likeDone: false,
  likeError: null,
  unlikeLoading: false,
  unlikeDone: false,
  unlikeError: null,
  hasMorePosts: true
};
const addPostRequestAction = data => ({
  type: _actions_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"],
  data
});
const deletePostRequestAction = data => ({
  type: _actions_post__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST_REQUEST"],
  data
});
const addCommentRequestAction = data => ({
  type: _actions_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"],
  data
});

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"]:
      draft.addPostLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_SUCCESS"]:
      draft.addPostLoading = false; // immer 사용

      draft.mainPosts.unshift(action.data); // immer 사용 X
      // [dummyPost(action.data), ...state.mainPosts];

      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_FAILURE"]:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      console.log(action.error);
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST_REQUEST"]:
      draft.deletePostLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST_SUCCESS"]:
      draft.deletePostLoading = false;
      draft.deletePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(p => p.id !== action.data.PostId);
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST_FAILURE"]:
      draft.deletePostLoading = false;
      draft.deletePostError = action.error;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"]:
      draft.addCommentLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_SUCCESS"]:
      {
        draft.addCommentDone = true;
        draft.addCommentLoading = false;
        const post = draft.mainPosts.find(p => p.id === action.data.PostId);
        post.Comments.unshift(action.data);
      }
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_FAILURE"]:
      draft.loadPostsError = action.error;
      draft.loadPostsLoading = false;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_REQUEST"]:
      draft.loadPostsLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_SUCCESS"]:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts);
      draft.hasMorePosts = draft.mainPosts.length < 50;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_FAILURE"]:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_REQUEST"]:
      draft.likeLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_SUCCESS"]:
      {
        draft.likeLoading = false;
        draft.likeDone = true;
        const post = draft.mainPosts.find(p => p.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        break;
      }

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_FAILURE"]:
      draft.likeError = action.Error;
      draft.likeLoading = false;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_REQUEST"]:
      draft.unlikeLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_SUCCESS"]:
      {
        draft.unlikeLoading = false;
        draft.unlikeDone = true;
        const post = draft.mainPosts.find(p => p.id === action.data.PostId);
        post.Likers = post.Likers.filter(l => l.id !== action.data.UserId);
        break;
      }

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_FAILURE"]:
      draft.unlikeError = action.Error;
      draft.unlikeLoading = false;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer); // export const dummyPostsGenerator = (number) => Array(number).fill().map(() => ({
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

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, followRequestAction, unfollowRequestAction, signupRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followRequestAction", function() { return followRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowRequestAction", function() { return unfollowRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupRequestAction", function() { return signupRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");


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
  myInfo: null
};
const loginRequestAction = data => ({
  type: _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOGIN_REQUEST"],
  data
});
const logoutRequestAction = () => ({
  type: _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_REQUEST"]
});
const followRequestAction = () => ({
  type: _actions_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"]
});
const unfollowRequestAction = () => ({
  type: _actions_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"]
});
const signupRequestAction = data => ({
  type: _actions_user__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_REQUEST"],
  data
}); // const dummyGenerator = (data) => ({
//   ...data,
//   nickname: 'cksdnr3',
//   id: v4(),
//   Posts: [],
//   Followings: [],
//   Followers: [],
// });

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOGIN_REQUEST"]:
      draft.loginLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]:
      draft.loginLoading = false;
      draft.loginDone = true;
      draft.myInfo = action.data;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAILURE"]:
      draft.loginLoading = false;
      draft.loginError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_REQUEST"]:
      draft.logoutLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_SUCCESS"]:
      draft.logoutLoading = false;
      draft.loginDone = false;
      draft.myInfo = null;
      console.log(action.data);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_FAILURE"]:
      draft.logoutLoading = false;
      draft.logoutError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_REQUEST"]:
      draft.changeNicknameLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_SUCCESS"]:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      draft.myInfo.nickname = action.data.nickname;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_FAILURE"]:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_REQUEST"]:
      draft.signupLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_SUCCESS"]:
      draft.signupLoading = false;
      draft.signupDone = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_FAILURE"]:
      draft.signupLoading = false;
      draft.signupError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_TO_ME"]:
      draft.myInfo.Posts.unshift({
        id: action.data
      });
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST_OF_ME"]:
      draft.myInfo.Posts = draft.myInfo.Posts.filter(p => p.id !== action.data.PostId);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"]:
      draft.followLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"]:
      draft.followLoading = false;
      draft.followDone = true;
      draft.myInfo.Followings.push({
        id: action.data.UserId
      });
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_FAILURE"]:
      draft.followLoading = false;
      draft.followError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"]:
      draft.unfollowLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_SUCCESS"]:
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      draft.myInfo.Followings = draft.myInfo.Followings.filter(f => f.id !== action.data.UserId);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_FAILURE"]:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      console.log(action.error);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_REQUEST"]:
      draft.loadMyInfoLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_SUCCESS"]:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;
      draft.myInfo = action.data;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_FAILURE"]:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer); // redux-thunk
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

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");





const addPostAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', {
  content: data
});

function* addPost(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: response.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: response.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

const deletePostAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`post/${data}`);

function* deletePost(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(deletePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_SUCCESS"],
      data: response.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_OF_ME"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

const addCommentAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data);

function* addComment(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    console.log(JSON.stringify(response.data));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

const loadPostsAPI = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/posts');

function* loadPosts() {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI);
    console.log(JSON.stringify(response.data));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

const likeAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`post/${data}/like`);

function* like(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likeAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_FAILURE"],
      error: err.response.data
    });
  }
}

const unlikeAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`post/${data}/like`);

function* unlike(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikeAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  // while (true) {
  //     yield take('ADD_POST_REQUEST', addPost);
  // }
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchDeletePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_REQUEST"], deletePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPosts);
}

function* watchLike() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_REQUEST"], like);
}

function* watchUnlike() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_REQUEST"], unlike);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeletePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLike), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlike)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");





const loginAPI = data => axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/login', data);

function* login(action) {
  try {
    const response = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loginAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGIN_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGIN_FAILURE"],
      error: err.response.data
    });
  }
}

const logoutAPI = () => axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/logout');

function* logout() {
  const response = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logoutAPI);

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_FAILURE"],
      error: err.response.data
    });
  }
}

const signupAPI = data => axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user', data);

function* signup(action) {
  try {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signupAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_FAILURE"],
      error: err.response.data
    });
  }
}

const followAPI = data => axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(`/user/${data}/follow`);

function* follow(action) {
  try {
    console.log(action.data);
    const response = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

const unfollowAPI = data => axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/${data}/follow`);

function* unfollow(action) {
  try {
    const response = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

const loadMyInfoAPI = () => axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user');

function* loadMyInfo() {
  try {
    const response = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

const changeNicknameAPI = data => axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch('/user/nickname', data);

function* changeNickname(action) {
  try {
    const response = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogin() {
  // while (true) {
  //     yield take('LOG_IN_REQUEST', login);
  // }
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGIN_REQUEST"], login);
}

function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_REQUEST"], logout);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchSignup() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_REQUEST"], signup);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* userSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignup), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname)]);
}

/***/ }),

/***/ "./store/ConfigureStore.js":
/*!*********************************!*\
  !*** ./store/ConfigureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");





 // redux thunk
// const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//   console.log(action);
//   return next(action);
// };

const configureStore = () => {
  const sagaMiddleware = _redux_saga_core__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "@redux-saga/core/effects":
/*!*******************************************!*\
  !*** external "@redux-saga/core/effects" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9wb3N0LmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQ29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4LXNhZ2EvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkRFTEVURV9QT1NUX1JFUVVFU1QiLCJERUxFVEVfUE9TVF9TVUNDRVNTIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxJS0VfUkVRVUVTVCIsIkxJS0VfU1VDQ0VTUyIsIkxJS0VfRkFJTFVSRSIsIlVOTElLRV9GQUlMVVJFIiwiVU5MSUtFX1JFUVVFU1QiLCJVTkxJS0VfU1VDQ0VTUyIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTFVSRSIsIkxPR09VVF9SRVFVRVNUIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIlNJR05VUF9SRVFVRVNUIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiREVMRVRFX1BPU1RfT0ZfTUUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJkZWxldGVQb3N0TG9hZGluZyIsImRlbGV0ZVBvc3REb25lIiwiZGVsZXRlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxpa2VMb2FkaW5nIiwibGlrZURvbmUiLCJsaWtlRXJyb3IiLCJ1bmxpa2VMb2FkaW5nIiwidW5saWtlRG9uZSIsInVubGlrZUVycm9yIiwiaGFzTW9yZVBvc3RzIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwiZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24iLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwicCIsImlkIiwiUG9zdElkIiwiZmluZCIsIkNvbW1lbnRzIiwiY29uY2F0IiwibGVuZ3RoIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsIkVycm9yIiwibCIsImxvZ2luTG9hZGluZyIsImxvZ2luRG9uZSIsImxvZ2luRXJyb3IiLCJsb2dvdXRMb2FkaW5nIiwibG9nb3V0RG9uZSIsImxvZ291dEVycm9yIiwic2lnbnVwTG9hZGluZyIsInNpZ251cERvbmUiLCJzaWdudXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJteUluZm8iLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiZm9sbG93UmVxdWVzdEFjdGlvbiIsInVuZm9sbG93UmVxdWVzdEFjdGlvbiIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJuaWNrbmFtZSIsIlBvc3RzIiwiRm9sbG93aW5ncyIsImYiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwiY29udGVudCIsImFkZFBvc3QiLCJyZXNwb25zZSIsImNhbGwiLCJwdXQiLCJlcnIiLCJkZWxldGVQb3N0QVBJIiwiZGVsZXRlIiwiZGVsZXRlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJhZGRDb21tZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWRQb3N0c0FQSSIsImdldCIsImxvYWRQb3N0cyIsImxpa2VBUEkiLCJwYXRjaCIsImxpa2UiLCJ1bmxpa2VBUEkiLCJ1bmxpa2UiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hEZWxldGVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoTGlrZSIsIndhdGNoVW5saWtlIiwibG9naW5BUEkiLCJsb2dpbiIsImxvZ291dEFQSSIsImxvZ291dCIsInNpZ251cEFQSSIsInNpZ251cCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dvdXQiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaFNpZ251cCIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxnQkFB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Syx3RUFBYSxDQUFDWixjQUFELEVBQWlCO0FBQzVDYSxPQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSWVuSyxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfUkVRVUVTVCA9ICdERUxFVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX1NVQ0NFU1MgPSAnREVMRVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9GQUlMVVJFID0gJ0RFTEVURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1JFUVVFU1QgPSAnTElLRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfU1VDQ0VTUyA9ICdMSUtFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9GQUlMVVJFID0gJ0xJS0VfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX0ZBSUxVUkUgPSAnVU5MSUtFX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1JFUVVFU1QgPSAnVU5MSUtFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1NVQ0NFU1MgPSAnVU5MSUtFX1NVQ0NFU1MnO1xyXG4iLCJleHBvcnQgY29uc3QgTE9HSU5fUkVRVUVTVCA9ICdMT0dJTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSAnTE9HSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMVVJFID0gJ0xPR0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR09VVF9SRVFVRVNUID0gJ0xPR09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR09VVF9TVUNDRVNTID0gJ0xPR09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR09VVF9GQUlMVVJFID0gJ0xPR09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfUkVRVUVTVCA9ICdTSUdOVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9ICdTSUdOVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfRkFJTFVSRSA9ICdTSUdOVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfT0ZfTUUgPSAnREVMRVRFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuIiwiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9Db25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxDb21wb25lbnQgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbkFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyBjb21iaW5lUmVkdWNlcnPqsIAg7JWM7JWE7IScIGluaXRpYWxTdGF0ZeydhCDshLjtjIXtlbTspIDri6QuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAvLyBIWURSQVRFKFNTUinrpbwg7JyE7ZW0IGluZGV4IOumrOuTgOyEnOulvCDstpTqsIDtlbTspIDri6QuXHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsXHJcbiAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBERUxFVEVfUE9TVF9GQUlMVVJFLCBERUxFVEVfUE9TVF9SRVFVRVNULCBERUxFVEVfUE9TVF9TVUNDRVNTLCBMSUtFX0ZBSUxVUkUsIExJS0VfUkVRVUVTVCwgTElLRV9TVUNDRVNTLCBMT0FEX1BPU1RfRkFJTFVSRSwgTE9BRF9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9TVUNDRVNTLCBVTkxJS0VfRkFJTFVSRSwgVU5MSUtFX1JFUVVFU1QsIFVOTElLRV9TVUNDRVNTIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0JztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICBkZWxldGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgZGVsZXRlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGRlbGV0ZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBsaWtlTG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZURvbmU6IGZhbHNlLFxyXG4gIGxpa2VFcnJvcjogbnVsbCxcclxuICB1bmxpa2VMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VEb25lOiBmYWxzZSxcclxuICB1bmxpa2VFcnJvcjogbnVsbCxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogREVMRVRFX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAvLyBpbW1lciDsgqzsmqlcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAvLyBpbW1lciDsgqzsmqkgWFxyXG4gICAgICAvLyBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHApID0+IHAuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubGlrZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0Lmxpa2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VEb25lID0gdHJ1ZTtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChwKSA9PiBwLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExJS0VfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZUVycm9yID0gYWN0aW9uLkVycm9yO1xyXG4gICAgICBkcmFmdC5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVubGlrZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQudW5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VEb25lID0gdHJ1ZTtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChwKSA9PiBwLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigobCkgPT4gbC5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVOTElLRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VFcnJvciA9IGFjdGlvbi5FcnJvcjtcclxuICAgICAgZHJhZnQudW5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGR1bW15UG9zdHNHZW5lcmF0b3IgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuLy8gICBpZDogdjQoKSxcclxuLy8gICBVc2VyOiB7XHJcbi8vICAgICBpZDogdjQoKSxcclxuLy8gICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgfSxcclxuLy8gICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuLy8gICBJbWFnZXM6IFt7XHJcbi8vICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbi8vICAgfV0sXHJcbi8vICAgQ29tbWVudHM6IFt7XHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgIGlkOiB2NCgpLFxyXG4vLyAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbi8vICAgfV0sXHJcbi8vIH0pKTtcclxuXHJcbi8vIGNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4vLyAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgIGNvbnRlbnQ6IGRhdGEudGV4dCxcclxuLy8gICBVc2VyOiB7XHJcbi8vICAgICBpZDogZGF0YS5teUluZm8uaWQsXHJcbi8vICAgICBuaWNrbmFtZTogZGF0YS5teUluZm8ubmlja25hbWUsXHJcbi8vICAgfSxcclxuLy8gICBJbWFnZXM6IFtdLFxyXG4vLyAgIENvbW1lbnRzOiBbXSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuLy8gICBpZDogdjQoKSxcclxuLy8gICBVc2VyOiB7XHJcbi8vICAgICBpZDogZGF0YS5teUluZm8uaWQsXHJcbi8vICAgICBuaWNrbmFtZTogZGF0YS5teUluZm8ubmlja25hbWUsXHJcbi8vICAgfSxcclxuLy8gICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbi8vIH0pO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBERUxFVEVfUE9TVF9PRl9NRSwgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9HSU5fRkFJTFVSRSwgTE9HSU5fUkVRVUVTVCwgTE9HSU5fU1VDQ0VTUywgTE9HT1VUX0ZBSUxVUkUsIExPR09VVF9SRVFVRVNULCBMT0dPVVRfU1VDQ0VTUywgU0lHTlVQX0ZBSUxVUkUsIFNJR05VUF9SRVFVRVNULCBTSUdOVVBfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUyB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ2luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9naW5Eb25lOiBmYWxzZSxcclxuICBsb2dpbkVycm9yOiBudWxsLFxyXG4gIGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ291dERvbmU6IGZhbHNlLFxyXG4gIGxvZ291dEVycm9yOiBudWxsLFxyXG4gIHNpZ251cExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ251cERvbmU6IGZhbHNlLFxyXG4gIHNpZ251cEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIG15SW5mbzogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dJTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXBSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogU0lHTlVQX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUdlbmVyYXRvciA9IChkYXRhKSA9PiAoe1xyXG4vLyAgIC4uLmRhdGEsXHJcbi8vICAgbmlja25hbWU6ICdja3NkbnIzJyxcclxuLy8gICBpZDogdjQoKSxcclxuLy8gICBQb3N0czogW10sXHJcbi8vICAgRm9sbG93aW5nczogW10sXHJcbi8vICAgRm9sbG93ZXJzOiBbXSxcclxuLy8gfSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HSU5fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9naW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkRvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ291dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ291dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9naW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm15SW5mbyA9IG51bGw7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dvdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ291dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTlVQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTlVQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnbnVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWdudXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5teUluZm8uUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5teUluZm8uUG9zdHMgPSBkcmFmdC5teUluZm8uUG9zdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Gb2xsb3dpbmdzID0gZHJhZnQubXlJbmZvLkZvbGxvd2luZ3MuZmlsdGVyKChmKSA9PiBmLmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuLy8gcmVkdXgtdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4vLyAgICAgICAgIGF4aW9zXHJcbi8vICAgICAgICAgICAgIC5wb3N0KCdhcGkvbG9naW4nKVxyXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnIpKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayhwb3N0U2FnYSksIGZvcmsodXNlclNhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBjYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgREVMRVRFX1BPU1RfRkFJTFVSRSwgREVMRVRFX1BPU1RfUkVRVUVTVCwgREVMRVRFX1BPU1RfU1VDQ0VTUywgTElLRV9GQUlMVVJFLCBMSUtFX1JFUVVFU1QsIExJS0VfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUsIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUywgVU5MSUtFX0ZBSUxVUkUsIFVOTElLRV9SRVFVRVNULCBVTkxJS0VfU1VDQ0VTUyB9IGZyb20gJy4uL2FjdGlvbnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBERUxFVEVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcblxyXG5jb25zdCBhZGRQb3N0QVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoJy9wb3N0JywgeyBjb250ZW50OiBkYXRhIH0pO1xyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVQb3N0QVBJID0gKGRhdGEpID0+IGF4aW9zLmRlbGV0ZShgcG9zdC8ke2RhdGF9YCk7XHJcblxyXG5mdW5jdGlvbiogZGVsZXRlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGRlbGV0ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IERFTEVURV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IERFTEVURV9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBERUxFVEVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkZENvbW1lbnRBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRQb3N0c0FQSSA9ICgpID0+IGF4aW9zLmdldCgnL3Bvc3RzJyk7XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsaWtlQVBJID0gKGRhdGEpID0+IGF4aW9zLnBhdGNoKGBwb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG5cclxuZnVuY3Rpb24qIGxpa2UoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsaWtlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1bmxpa2VBUEkgPSAoZGF0YSkgPT4gYXhpb3MuZGVsZXRlKGBwb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG5cclxuZnVuY3Rpb24qIHVubGlrZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHVubGlrZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgLy8gd2hpbGUgKHRydWUpIHtcclxuICAvLyAgICAgeWllbGQgdGFrZSgnQUREX1BPU1RfUkVRVUVTVCcsIGFkZFBvc3QpO1xyXG4gIC8vIH1cclxuXHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRGVsZXRlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9QT1NUX1JFUVVFU1QsIGRlbGV0ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUkVRVUVTVCwgbGlrZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9SRVFVRVNULCB1bmxpa2UpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoQWRkUG9zdCksIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hEZWxldGVQb3N0KSwgZm9yayh3YXRjaExvYWRQb3N0cyksIGZvcmsod2F0Y2hMaWtlKSwgZm9yayh3YXRjaFVubGlrZSldKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmsgfSBmcm9tICdAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBGT0xMT1dfRkFJTFVSRSwgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBMT0FEX01ZX0lORk9fRkFJTFVSRSwgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfTVlfSU5GT19TVUNDRVNTLCBMT0dJTl9GQUlMVVJFLCBMT0dJTl9SRVFVRVNULCBMT0dJTl9TVUNDRVNTLCBMT0dPVVRfRkFJTFVSRSwgTE9HT1VUX1JFUVVFU1QsIExPR09VVF9TVUNDRVNTLCBTSUdOVVBfRkFJTFVSRSwgU0lHTlVQX1JFUVVFU1QsIFNJR05VUF9TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLCBVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmNvbnN0IGxvZ2luQVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2dvdXRBUEkgPSAoKSA9PiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvZ291dEFQSSk7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR09VVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dPVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzaWdudXBBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoc2lnbnVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTlVQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZm9sbG93QVBJID0gKGRhdGEpID0+IGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVuZm9sbG93QVBJID0gKGRhdGEpID0+IGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRNeUluZm9BUEkgPSAoKSA9PiBheGlvcy5nZXQoJy91c2VyJyk7XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lQVBJID0gKGRhdGEpID0+IGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIGRhdGEpO1xyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICAvLyB3aGlsZSAodHJ1ZSkge1xyXG4gIC8vICAgICB5aWVsZCB0YWtlKCdMT0dfSU5fUkVRVUVTVCcsIGxvZ2luKTtcclxuICAvLyB9XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dJTl9SRVFVRVNULCBsb2dpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR09VVF9SRVFVRVNULCBsb2dvdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ251cCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05VUF9SRVFVRVNULCBzaWdudXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dpbiksIGZvcmsod2F0Y2hMb2dvdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ251cCksIGZvcmsod2F0Y2hGb2xsb3cpLCBmb3JrKHdhdGNoVW5mb2xsb3cpLCBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAnQHJlZHV4LXNhZ2EvY29yZSc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbi8vIHJlZHV4IHRodW5rXHJcbi8vIGNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4vLyAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbi8vIH07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXgtc2FnYS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==