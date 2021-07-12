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
/*! exports provided: ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE, UNLIKE_REQUEST, UNLIKE_FAILURE, UNLIKE_SUCCESS, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_REQUEST", function() { return LIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_SUCCESS", function() { return LIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_FAILURE", function() { return LIKE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_REQUEST", function() { return UNLIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_FAILURE", function() { return UNLIKE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_SUCCESS", function() { return UNLIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
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

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, DELETE_POST_OF_ME, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, REMOVE_FOLLOWERS_REQUEST, REMOVE_FOLLOWERS_SUCCESS, REMOVE_FOLLOWERS_FAILURE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWERS_REQUEST", function() { return REMOVE_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWERS_SUCCESS", function() { return REMOVE_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWERS_FAILURE", function() { return REMOVE_FOLLOWERS_FAILURE; });
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
    lineNumber: 13,
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



 // combineReducers가 알아서 initialState을 세팅해준다.
// HYDRATE(SSR)를 위해 index 리듀서를 추가해준다.

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combineReducer(state, action);
      }
  }
};

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

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_REQUEST"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_REQUEST"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_REQUEST"]:
      draft.loadPostsLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_SUCCESS"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_SUCCESS"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_SUCCESS"]:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePosts = draft.mainPosts.length === 10;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_FAILURE"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_FAILURE"]:
    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_FAILURE"]:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_REQUEST"]:
      draft.loadPostLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_SUCCESS"]:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_FAILURE"]:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
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

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_REQUEST"]:
      draft.uploadImagesLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_SUCCESS"]:
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      draft.imagePaths = action.data;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_FAILURE"]:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_IMAGE"]:
      if (action.data) {
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      } else {
        draft.imagePaths = [];
      }

      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_REQUEST"]:
      draft.retweetLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_SUCCESS"]:
      draft.retweetLoading = false;
      draft.retweetDone = true;
      console.log(action.data);
      draft.mainPosts.unshift(action.data);
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_FAILURE"]:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      console.error(action.error);
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

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_REQUEST"]:
      draft.loadFollowersLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_SUCCESS"]:
      draft.loadFollowersLoading = false;
      draft.loadFollowersDone = true;
      draft.myInfo.Followers = action.data;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_FAILURE"]:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_REQUEST"]:
      draft.loadFollowingsLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_SUCCESS"]:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsDone = true;
      draft.myInfo.Followings = action.data;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_FAILURE"]:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_REQUEST"]:
      draft.loadUserLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"]:
      draft.loadUserLoading = false;
      draft.loadUserDone = true;
      draft.userInfo = action.data;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILURE"]:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWERS_REQUEST"]:
      draft.removeFollowersLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWERS_SUCCESS"]:
      draft.removeFollowersLoading = false;
      draft.removeFollowersDone = true;
      draft.myInfo.Followers = draft.myInfo.Followers.filter(f => f.id !== action.data.UserId);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWERS_FAILURE"]:
      draft.removeFollowersLoading = false;
      draft.removeFollowersError = action.error;
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





const addPostAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data);

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
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_IMAGE"]
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

const loadPostAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/post/${data}`);

function* loadPost(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);
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

const uploadImagesAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/images', data);

function* uploadImages(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

const retweetAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data}/retweet`);

function* retweet(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

const loadPostsAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts?lastId=${data || 0}`);

function* loadPosts(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

const loadUserPostsAPI = (data, lastId) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);

function* loadUserPosts(action) {
  try {
    console.log(`data: ${action.data}`);
    console.log(`lastId: ${action.lastId}`);
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

const loadHashtagPostsAPI = (data, lastId) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/hashtag/${data}?lastId=${lastId || 0}`);

function* loadHashtagPosts(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadHashtagPostsAPI, encodeURIComponent(action.data), action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchLike() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_REQUEST"], like);
}

function* watchUnlike() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_REQUEST"], unlike);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeletePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLike), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlike), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadHashtagPosts)]);
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

const loadUserAPI = data => axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/user/${data}`);

function* loadUser(action) {
  try {
    const response = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_FAILURE"],
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

const loadFollowersAPI = () => axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followers');

function* loadFollowers() {
  try {
    const response = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWERS_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

const loadFollowingsAPI = () => axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followings');

function* loadFollowings() {
  try {
    const response = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

const removeFollowerAPI = data => axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/follower/${data}`);

function* removeFollower(action) {
  try {
    const response = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWERS_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWERS_FAILURE"],
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

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWERS_REQUEST"], removeFollower);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_REQUEST"], loadUser);
}

function* userSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignup), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9wb3N0LmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQ29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4LXNhZ2EvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkRFTEVURV9QT1NUX1JFUVVFU1QiLCJERUxFVEVfUE9TVF9TVUNDRVNTIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxJS0VfUkVRVUVTVCIsIkxJS0VfU1VDQ0VTUyIsIkxJS0VfRkFJTFVSRSIsIlVOTElLRV9SRVFVRVNUIiwiVU5MSUtFX0ZBSUxVUkUiLCJVTkxJS0VfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTFVSRSIsIkxPR09VVF9SRVFVRVNUIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIlNJR05VUF9SRVFVRVNUIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiREVMRVRFX1BPU1RfT0ZfTUUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUiLCJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic2luZ2xlUG9zdCIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImRlbGV0ZVBvc3RMb2FkaW5nIiwiZGVsZXRlUG9zdERvbmUiLCJkZWxldGVQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxpa2VMb2FkaW5nIiwibGlrZURvbmUiLCJsaWtlRXJyb3IiLCJ1bmxpa2VMb2FkaW5nIiwidW5saWtlRG9uZSIsInVubGlrZUVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJoYXNNb3JlUG9zdHMiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJkZWxldGVQb3N0UmVxdWVzdEFjdGlvbiIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsImZpbHRlciIsInAiLCJpZCIsIlBvc3RJZCIsImZpbmQiLCJDb21tZW50cyIsImNvbmNhdCIsImxlbmd0aCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJFcnJvciIsImwiLCJ2IiwiaSIsImxvZ2luTG9hZGluZyIsImxvZ2luRG9uZSIsImxvZ2luRXJyb3IiLCJsb2dvdXRMb2FkaW5nIiwibG9nb3V0RG9uZSIsImxvZ291dEVycm9yIiwic2lnbnVwTG9hZGluZyIsInNpZ251cERvbmUiLCJzaWdudXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJyZW1vdmVGb2xsb3dlcnNMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJzRG9uZSIsInJlbW92ZUZvbGxvd2Vyc0Vycm9yIiwibXlJbmZvIiwidXNlckluZm8iLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiZm9sbG93UmVxdWVzdEFjdGlvbiIsInVuZm9sbG93UmVxdWVzdEFjdGlvbiIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJuaWNrbmFtZSIsIlBvc3RzIiwiRm9sbG93aW5ncyIsImYiLCJGb2xsb3dlcnMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInJlc3BvbnNlIiwiY2FsbCIsInB1dCIsImVyciIsImRlbGV0ZVBvc3RBUEkiLCJkZWxldGUiLCJkZWxldGVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFBvc3RBUEkiLCJnZXQiLCJsb2FkUG9zdCIsImxpa2VBUEkiLCJwYXRjaCIsImxpa2UiLCJ1bmxpa2VBUEkiLCJ1bmxpa2UiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJyZXR3ZWV0QVBJIiwicmV0d2VldCIsImxvYWRQb3N0c0FQSSIsImxvYWRQb3N0cyIsImxvYWRVc2VyUG9zdHNBUEkiLCJsYXN0SWQiLCJsb2FkVXNlclBvc3RzIiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsImxvYWRIYXNodGFnUG9zdHMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hEZWxldGVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoTGlrZSIsIndhdGNoVW5saWtlIiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwibG9naW5BUEkiLCJsb2dpbiIsImxvZ291dEFQSSIsImxvZ291dCIsInNpZ251cEFQSSIsInNpZ251cCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoU2lnbnVwIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkVXNlciIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0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OztBQzFCQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfUkVRVUVTVCA9ICdERUxFVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX1NVQ0NFU1MgPSAnREVMRVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9GQUlMVVJFID0gJ0RFTEVURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1JFUVVFU1QgPSAnTElLRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfU1VDQ0VTUyA9ICdMSUtFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9GQUlMVVJFID0gJ0xJS0VfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1JFUVVFU1QgPSAnVU5MSUtFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX0ZBSUxVUkUgPSAnVU5MSUtFX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1NVQ0NFU1MgPSAnVU5MSUtFX1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSc7XHJcbiIsImV4cG9ydCBjb25zdCBMT0dJTl9SRVFVRVNUID0gJ0xPR0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fU1VDQ0VTUyA9ICdMT0dJTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUxVUkUgPSAnTE9HSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HT1VUX1JFUVVFU1QgPSAnTE9HT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HT1VUX1NVQ0NFU1MgPSAnTE9HT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HT1VUX0ZBSUxVUkUgPSAnTE9HT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUF9SRVFVRVNUID0gJ1NJR05VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TVUNDRVNTID0gJ1NJR05VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9GQUlMVVJFID0gJ1NJR05VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9PRl9NRSA9ICdERUxFVEVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFJztcclxuIiwiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9Db25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuXHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8Q29tcG9uZW50IC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuLy8gY29tYmluZVJlZHVjZXJz6rCAIOyVjOyVhOyEnCBpbml0aWFsU3RhdGXsnYQg7IS47YyF7ZW07KSA64ukLlxyXG4vLyBIWURSQVRFKFNTUinrpbwg7JyE7ZW0IGluZGV4IOumrOuTgOyEnOulvCDstpTqsIDtlbTspIDri6QuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCB7XHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgREVMRVRFX1BPU1RfRkFJTFVSRSxcclxuICBERUxFVEVfUE9TVF9SRVFVRVNULFxyXG4gIERFTEVURV9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9GQUlMVVJFLFxyXG4gIExJS0VfUkVRVUVTVCxcclxuICBMSUtFX1NVQ0NFU1MsIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICBSRU1PVkVfSU1BR0UsXHJcbiAgUkVUV0VFVF9GQUlMVVJFLFxyXG4gIFJFVFdFRVRfUkVRVUVTVCxcclxuICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0JztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBzaW5nbGVQb3N0OiB7fSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICBkZWxldGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgZGVsZXRlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGRlbGV0ZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICBsaWtlTG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZURvbmU6IGZhbHNlLFxyXG4gIGxpa2VFcnJvcjogbnVsbCxcclxuICB1bmxpa2VMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VEb25lOiBmYWxzZSxcclxuICB1bmxpa2VFcnJvcjogbnVsbCxcclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogREVMRVRFX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAvLyBpbW1lciDsgqzsmqlcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAvLyBpbW1lciDsgqzsmqkgWFxyXG4gICAgICAvLyBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHApID0+IHAuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoID09PSAxMDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubGlrZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0Lmxpa2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VEb25lID0gdHJ1ZTtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChwKSA9PiBwLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExJS0VfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZUVycm9yID0gYWN0aW9uLkVycm9yO1xyXG4gICAgICBkcmFmdC5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVubGlrZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQudW5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VEb25lID0gdHJ1ZTtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChwKSA9PiBwLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigobCkgPT4gbC5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVOTElLRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VFcnJvciA9IGFjdGlvbi5FcnJvcjtcclxuICAgICAgZHJhZnQudW5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICBpZiAoYWN0aW9uLmRhdGEpIHtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBkdW1teVBvc3RzR2VuZXJhdG9yID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbi8vICAgaWQ6IHY0KCksXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IHY0KCksXHJcbi8vICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgIH0sXHJcbi8vICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbi8vICAgSW1hZ2VzOiBbe1xyXG4vLyAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4vLyAgIH1dLFxyXG4vLyAgIENvbW1lbnRzOiBbe1xyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICBpZDogdjQoKSxcclxuLy8gICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4vLyAgIH1dLFxyXG4vLyB9KSk7XHJcblxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICBpZDogZGF0YS5pZCxcclxuLy8gICBjb250ZW50OiBkYXRhLnRleHQsXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IGRhdGEubXlJbmZvLmlkLFxyXG4vLyAgICAgbmlja25hbWU6IGRhdGEubXlJbmZvLm5pY2tuYW1lLFxyXG4vLyAgIH0sXHJcbi8vICAgSW1hZ2VzOiBbXSxcclxuLy8gICBDb21tZW50czogW10sXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgaWQ6IHY0KCksXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IGRhdGEubXlJbmZvLmlkLFxyXG4vLyAgICAgbmlja25hbWU6IGRhdGEubXlJbmZvLm5pY2tuYW1lLFxyXG4vLyAgIH0sXHJcbi8vICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyB9KTtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX1RPX01FLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gIERFTEVURV9QT1NUX09GX01FLFxyXG4gIEZPTExPV19GQUlMVVJFLFxyXG4gIEZPTExPV19SRVFVRVNULFxyXG4gIEZPTExPV19TVUNDRVNTLFxyXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxyXG4gIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLCBMT0FEX1VTRVJfRkFJTFVSRSwgTE9BRF9VU0VSX1JFUVVFU1QsIExPQURfVVNFUl9TVUNDRVNTLFxyXG4gIExPR0lOX0ZBSUxVUkUsXHJcbiAgTE9HSU5fUkVRVUVTVCxcclxuICBMT0dJTl9TVUNDRVNTLFxyXG4gIExPR09VVF9GQUlMVVJFLFxyXG4gIExPR09VVF9SRVFVRVNULFxyXG4gIExPR09VVF9TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUsIFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gIFNJR05VUF9GQUlMVVJFLFxyXG4gIFNJR05VUF9SRVFVRVNULFxyXG4gIFNJR05VUF9TVUNDRVNTLFxyXG4gIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICBVTkZPTExPV19TVUNDRVNTLFxyXG59IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ2luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9naW5Eb25lOiBmYWxzZSxcclxuICBsb2dpbkVycm9yOiBudWxsLFxyXG4gIGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ291dERvbmU6IGZhbHNlLFxyXG4gIGxvZ291dEVycm9yOiBudWxsLFxyXG4gIHNpZ251cExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ251cERvbmU6IGZhbHNlLFxyXG4gIHNpZ251cEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIHJlbW92ZUZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG4gIG15SW5mbzogbnVsbCxcclxuICB1c2VySW5mbzogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dJTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXBSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogU0lHTlVQX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUdlbmVyYXRvciA9IChkYXRhKSA9PiAoe1xyXG4vLyAgIC4uLmRhdGEsXHJcbi8vICAgbmlja25hbWU6ICdja3NkbnIzJyxcclxuLy8gICBpZDogdjQoKSxcclxuLy8gICBQb3N0czogW10sXHJcbi8vICAgRm9sbG93aW5nczogW10sXHJcbi8vICAgRm9sbG93ZXJzOiBbXSxcclxuLy8gfSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HSU5fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9naW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkRvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ291dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ291dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9naW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm15SW5mbyA9IG51bGw7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dvdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ291dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTlVQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTlVQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnbnVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWdudXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5teUluZm8uUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5teUluZm8uUG9zdHMgPSBkcmFmdC5teUluZm8uUG9zdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Gb2xsb3dpbmdzID0gZHJhZnQubXlJbmZvLkZvbGxvd2luZ3MuZmlsdGVyKChmKSA9PiBmLmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8uRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvLkZvbGxvd2VycyA9IGRyYWZ0Lm15SW5mby5Gb2xsb3dlcnMuZmlsdGVyKChmKSA9PiBmLmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuLy8gcmVkdXgtdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4vLyAgICAgICAgIGF4aW9zXHJcbi8vICAgICAgICAgICAgIC5wb3N0KCdhcGkvbG9naW4nKVxyXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnIpKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayhwb3N0U2FnYSksIGZvcmsodXNlclNhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBjYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBERUxFVEVfUE9TVF9GQUlMVVJFLFxyXG4gIERFTEVURV9QT1NUX1JFUVVFU1QsXHJcbiAgREVMRVRFX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX0ZBSUxVUkUsXHJcbiAgTElLRV9SRVFVRVNULFxyXG4gIExJS0VfU1VDQ0VTUywgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX0lNQUdFLFxyXG4gIFJFVFdFRVRfRkFJTFVSRSxcclxuICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgUkVUV0VFVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9GQUlMVVJFLFxyXG4gIFVOTElLRV9SRVFVRVNULFxyXG4gIFVOTElLRV9TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG59IGZyb20gJy4uL2FjdGlvbnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBERUxFVEVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcblxyXG5jb25zdCBhZGRQb3N0QVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLmlkLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVsZXRlUG9zdEFQSSA9IChkYXRhKSA9PiBheGlvcy5kZWxldGUoYHBvc3QvJHtkYXRhfWApO1xyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChkZWxldGVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBERUxFVEVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBERUxFVEVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogREVMRVRFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhZGRDb21tZW50QVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2FkUG9zdEFQSSA9IChkYXRhKSA9PiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbGlrZUFQSSA9IChkYXRhKSA9PiBheGlvcy5wYXRjaChgcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxuXHJcbmZ1bmN0aW9uKiBsaWtlKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobGlrZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdW5saWtlQVBJID0gKGRhdGEpID0+IGF4aW9zLmRlbGV0ZShgcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2UoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbCh1bmxpa2VBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1cGxvYWRJbWFnZXNBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZXR3ZWV0QVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2FkUG9zdHNBUEkgPSAoZGF0YSkgPT4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7ZGF0YSB8fCAwfWApO1xyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZFVzZXJQb3N0c0FQSSA9IChkYXRhLCBsYXN0SWQpID0+IGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlclBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhgZGF0YTogJHthY3Rpb24uZGF0YX1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBsYXN0SWQ6ICR7YWN0aW9uLmxhc3RJZH1gKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZEhhc2h0YWdQb3N0c0FQSSA9IChkYXRhLCBsYXN0SWQpID0+IGF4aW9zLmdldChgL2hhc2h0YWcvJHtkYXRhfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbi5kYXRhKSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAvLyB3aGlsZSAodHJ1ZSkge1xyXG4gIC8vICAgICB5aWVsZCB0YWtlKCdBRERfUE9TVF9SRVFVRVNUJywgYWRkUG9zdCk7XHJcbiAgLy8gfVxyXG5cclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX1BPU1RfUkVRVUVTVCwgZGVsZXRlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUkVRVUVTVCwgbGlrZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9SRVFVRVNULCB1bmxpa2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hBZGRQb3N0KSwgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaERlbGV0ZVBvc3QpLCBmb3JrKHdhdGNoTG9hZFBvc3RzKSwgZm9yayh3YXRjaExpa2UpLCBmb3JrKHdhdGNoVW5saWtlKSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLCBmb3JrKHdhdGNoUmV0d2VldCksIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJQb3N0cyksIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKV0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZm9yayB9IGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cyc7XHJcbmltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFLCBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgTE9HSU5fRkFJTFVSRSxcclxuICBMT0dJTl9SRVFVRVNULFxyXG4gIExPR0lOX1NVQ0NFU1MsXHJcbiAgTE9HT1VUX0ZBSUxVUkUsXHJcbiAgTE9HT1VUX1JFUVVFU1QsXHJcbiAgTE9HT1VUX1NVQ0NFU1MsIFJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSwgUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNULCBSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgU0lHTlVQX0ZBSUxVUkUsXHJcbiAgU0lHTlVQX1JFUVVFU1QsXHJcbiAgU0lHTlVQX1NVQ0NFU1MsXHJcbiAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmNvbnN0IGxvZ2luQVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2dvdXRBUEkgPSAoKSA9PiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvZ291dEFQSSk7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR09VVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dPVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzaWdudXBBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoc2lnbnVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTlVQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZm9sbG93QVBJID0gKGRhdGEpID0+IGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVuZm9sbG93QVBJID0gKGRhdGEpID0+IGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRNeUluZm9BUEkgPSAoKSA9PiBheGlvcy5nZXQoJy91c2VyJyk7XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRVc2VyQVBJID0gKGRhdGEpID0+IGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApO1xyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZUFQSSA9IChkYXRhKSA9PiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZEZvbGxvd2Vyc0FQSSA9ICgpID0+IGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJyk7XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2FkRm9sbG93aW5nc0FQSSA9ICgpID0+IGF4aW9zLmdldCgnL3VzZXIvZm9sbG93aW5ncycpO1xyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZW1vdmVGb2xsb3dlckFQSSA9IChkYXRhKSA9PiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgLy8gd2hpbGUgKHRydWUpIHtcclxuICAvLyAgICAgeWllbGQgdGFrZSgnTE9HX0lOX1JFUVVFU1QnLCBsb2dpbik7XHJcbiAgLy8gfVxyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dvdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dPVVRfUkVRVUVTVCwgbG9nb3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWdudXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOVVBfUkVRVUVTVCwgc2lnbnVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2Vycyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2luZ3MoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dpbiksIGZvcmsod2F0Y2hMb2dvdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ251cCksIGZvcmsod2F0Y2hGb2xsb3cpLCBmb3JrKHdhdGNoVW5mb2xsb3cpLCBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLCBmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLCBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLCBmb3JrKHdhdGNoTG9hZFVzZXIpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAnQHJlZHV4LXNhZ2EvY29yZSc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbi8vIHJlZHV4IHRodW5rXHJcbi8vIGNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4vLyAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbi8vIH07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXgtc2FnYS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==