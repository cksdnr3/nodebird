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

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: backUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backUrl", function() { return backUrl; });
const backUrl = 'http://3.36.78.30';

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
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
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

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
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
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
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

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");





axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = _config_config__WEBPACK_IMPORTED_MODULE_4__["backUrl"];
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
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

const deletePostAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);

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

const likeAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);

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

const unlikeAPI = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`);

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
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");




const loginAPI = data => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);

function* login(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loginAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["LOGIN_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["LOGIN_FAILURE"],
      error: err.response.data
    });
  }
}

const logoutAPI = () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');

function* logout() {
  const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logoutAPI);

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["LOGOUT_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["LOGOUT_FAILURE"],
      error: err.response.data
    });
  }
}

const signupAPI = data => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);

function* signup(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signupAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_FAILURE"],
      error: err.response.data
    });
  }
}

const followAPI = data => axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/${data}/follow`);

function* follow(action) {
  try {
    console.log(action.data);
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

const unfollowAPI = data => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/follow`);

function* unfollow(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

const loadMyInfoAPI = () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');

function* loadMyInfo() {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

const loadUserAPI = data => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);

function* loadUser(action) {
  try {
    console.log('요청~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!');
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

const changeNicknameAPI = data => axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', data);

function* changeNickname(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

const removeFollowerAPI = data => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/follower/${data}`);

function* removeFollower(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWERS_SUCCESS"],
      data: response.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogin() {
  // while (true) {
  //     yield take('LOG_IN_REQUEST', login);
  // }
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_2__["LOGIN_REQUEST"], login);
}

function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_2__["LOGOUT_REQUEST"], logout);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchSignup() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_REQUEST"], signup);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWERS_REQUEST"], removeFollower);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignup)]);
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

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(...args);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9wb3N0LmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9Db25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4LXNhZ2EvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkRFTEVURV9QT1NUX1JFUVVFU1QiLCJERUxFVEVfUE9TVF9TVUNDRVNTIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxJS0VfUkVRVUVTVCIsIkxJS0VfU1VDQ0VTUyIsIkxJS0VfRkFJTFVSRSIsIlVOTElLRV9SRVFVRVNUIiwiVU5MSUtFX0ZBSUxVUkUiLCJVTkxJS0VfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTFVSRSIsIkxPR09VVF9SRVFVRVNUIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIlNJR05VUF9SRVFVRVNUIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiREVMRVRFX1BPU1RfT0ZfTUUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUiLCJiYWNrVXJsIiwiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZVJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsInNpbmdsZVBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJkZWxldGVQb3N0TG9hZGluZyIsImRlbGV0ZVBvc3REb25lIiwiZGVsZXRlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsaWtlTG9hZGluZyIsImxpa2VEb25lIiwibGlrZUVycm9yIiwidW5saWtlTG9hZGluZyIsInVubGlrZURvbmUiLCJ1bmxpa2VFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwiaGFzTW9yZVBvc3RzIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwiZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24iLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJwIiwiaWQiLCJQb3N0SWQiLCJmaW5kIiwiQ29tbWVudHMiLCJjb25jYXQiLCJsZW5ndGgiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiRXJyb3IiLCJsIiwidiIsImkiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ251cExvYWRpbmciLCJzaWdudXBEb25lIiwic2lnbnVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwicmVtb3ZlRm9sbG93ZXJzTG9hZGluZyIsInJlbW92ZUZvbGxvd2Vyc0RvbmUiLCJyZW1vdmVGb2xsb3dlcnNFcnJvciIsIm15SW5mbyIsInVzZXJJbmZvIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImZvbGxvd1JlcXVlc3RBY3Rpb24iLCJ1bmZvbGxvd1JlcXVlc3RBY3Rpb24iLCJzaWdudXBSZXF1ZXN0QWN0aW9uIiwibmlja25hbWUiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJmIiwiRm9sbG93ZXJzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJyZXNwb25zZSIsImNhbGwiLCJwdXQiLCJlcnIiLCJkZWxldGVQb3N0QVBJIiwiZGVsZXRlIiwiZGVsZXRlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJhZGRDb21tZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWRQb3N0QVBJIiwiZ2V0IiwibG9hZFBvc3QiLCJsaWtlQVBJIiwicGF0Y2giLCJsaWtlIiwidW5saWtlQVBJIiwidW5saWtlIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJsb2FkVXNlclBvc3RzQVBJIiwibGFzdElkIiwibG9hZFVzZXJQb3N0cyIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoRGVsZXRlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaExpa2UiLCJ3YXRjaFVubGlrZSIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hSZXR3ZWV0Iiwid2F0Y2hMb2FkUG9zdCIsIndhdGNoTG9hZFVzZXJQb3N0cyIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsImxvZ2luQVBJIiwibG9naW4iLCJsb2dvdXRBUEkiLCJsb2dvdXQiLCJzaWdudXBBUEkiLCJzaWdudXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93IiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwiY2hhbmdlTmlja25hbWVBUEkiLCJjaGFuZ2VOaWNrbmFtZSIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dvdXQiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaFNpZ251cCIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkVXNlciIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFyZ3MiLCJlbmFibGVFUzUiXSwibWFwcGluZ3MiOiI7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SWVuTixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFFZSxnRUFBQyxHQUFHb04sSUFBSixLQUFhO0FBQzFCQyx5REFBUztBQUNULFNBQU9sSyw0Q0FBTyxDQUFDLEdBQUdpSyxJQUFKLENBQWQ7QUFDRCxDQUhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX1JFUVVFU1QgPSAnREVMRVRFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9TVUNDRVNTID0gJ0RFTEVURV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfRkFJTFVSRSA9ICdERUxFVEVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9SRVFVRVNUID0gJ0xJS0VfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1NVQ0NFU1MgPSAnTElLRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfRkFJTFVSRSA9ICdMSUtFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9SRVFVRVNUID0gJ1VOTElLRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9GQUlMVVJFID0gJ1VOTElLRV9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9TVUNDRVNTID0gJ1VOTElLRV9TVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG4iLCJleHBvcnQgY29uc3QgTE9HSU5fUkVRVUVTVCA9ICdMT0dJTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSAnTE9HSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMVVJFID0gJ0xPR0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR09VVF9SRVFVRVNUID0gJ0xPR09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR09VVF9TVUNDRVNTID0gJ0xPR09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR09VVF9GQUlMVVJFID0gJ0xPR09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfUkVRVUVTVCA9ICdTSUdOVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9ICdTSUdOVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfRkFJTFVSRSA9ICdTSUdOVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfT0ZfTUUgPSAnREVMRVRFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcbiIsImV4cG9ydCBjb25zdCBiYWNrVXJsID0gJ2h0dHA6Ly8zLjM2Ljc4LjMwJztcclxuIiwiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9Db25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuXHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8Q29tcG9uZW50IC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuLy8gY29tYmluZVJlZHVjZXJz6rCAIOyVjOyVhOyEnCBpbml0aWFsU3RhdGXsnYQg7IS47YyF7ZW07KSA64ukLlxyXG4vLyBIWURSQVRFKFNTUinrpbwg7JyE7ZW0IGluZGV4IOumrOuTgOyEnOulvCDstpTqsIDtlbTspIDri6QuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIERFTEVURV9QT1NUX0ZBSUxVUkUsXHJcbiAgREVMRVRFX1BPU1RfUkVRVUVTVCxcclxuICBERUxFVEVfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfRkFJTFVSRSxcclxuICBMSUtFX1JFUVVFU1QsXHJcbiAgTElLRV9TVUNDRVNTLCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUywgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX0lNQUdFLFxyXG4gIFJFVFdFRVRfRkFJTFVSRSxcclxuICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgUkVUV0VFVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9GQUlMVVJFLFxyXG4gIFVOTElLRV9SRVFVRVNULFxyXG4gIFVOTElLRV9TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG59IGZyb20gJy4uL2FjdGlvbnMvcG9zdCc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgc2luZ2xlUG9zdDoge30sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgZGVsZXRlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGRlbGV0ZVBvc3REb25lOiBmYWxzZSxcclxuICBkZWxldGVQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgbGlrZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VEb25lOiBmYWxzZSxcclxuICBsaWtlRXJyb3I6IG51bGwsXHJcbiAgdW5saWtlTG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlRG9uZTogZmFsc2UsXHJcbiAgdW5saWtlRXJyb3I6IG51bGwsXHJcbiAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcbiAgcmV0d2VldExvYWRpbmc6IGZhbHNlLFxyXG4gIHJldHdlZXREb25lOiBmYWxzZSxcclxuICByZXR3ZWV0RXJyb3I6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IERFTEVURV9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgLy8gaW1tZXIg7IKs7JqpXHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgLy8gaW1tZXIg7IKs7JqpIFhcclxuICAgICAgLy8gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChwKSA9PiBwLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lmxpa2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlRG9uZSA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgocCkgPT4gcC5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0Lmxpa2VFcnJvciA9IGFjdGlvbi5FcnJvcjtcclxuICAgICAgZHJhZnQubGlrZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVOTElLRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmxpa2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVOTElLRV9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LnVubGlrZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5saWtlRG9uZSA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgocCkgPT4gcC5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKGwpID0+IGwuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5saWtlRXJyb3IgPSBhY3Rpb24uRXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVubGlrZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhKSB7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZHVtbXlQb3N0c0dlbmVyYXRvciA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4vLyAgIGlkOiB2NCgpLFxyXG4vLyAgIFVzZXI6IHtcclxuLy8gICAgIGlkOiB2NCgpLFxyXG4vLyAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICB9LFxyXG4vLyAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4vLyAgIEltYWdlczogW3tcclxuLy8gICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuLy8gICB9XSxcclxuLy8gICBDb21tZW50czogW3tcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgaWQ6IHY0KCksXHJcbi8vICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuLy8gICB9XSxcclxuLy8gfSkpO1xyXG5cclxuLy8gY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgaWQ6IGRhdGEuaWQsXHJcbi8vICAgY29udGVudDogZGF0YS50ZXh0LFxyXG4vLyAgIFVzZXI6IHtcclxuLy8gICAgIGlkOiBkYXRhLm15SW5mby5pZCxcclxuLy8gICAgIG5pY2tuYW1lOiBkYXRhLm15SW5mby5uaWNrbmFtZSxcclxuLy8gICB9LFxyXG4vLyAgIEltYWdlczogW10sXHJcbi8vICAgQ29tbWVudHM6IFtdLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4vLyAgIGlkOiB2NCgpLFxyXG4vLyAgIFVzZXI6IHtcclxuLy8gICAgIGlkOiBkYXRhLm15SW5mby5pZCxcclxuLy8gICAgIG5pY2tuYW1lOiBkYXRhLm15SW5mby5uaWNrbmFtZSxcclxuLy8gICB9LFxyXG4vLyAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuLy8gfSk7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfVE9fTUUsIERFTEVURV9QT1NUX09GX01FLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSwgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgTE9HSU5fUkVRVUVTVCwgTE9HSU5fU1VDQ0VTUywgTE9HSU5fRkFJTFVSRSxcclxuICBMT0dPVVRfUkVRVUVTVCwgTE9HT1VUX1NVQ0NFU1MsIExPR09VVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgU0lHTlVQX1JFUVVFU1QsIFNJR05VUF9TVUNDRVNTLCBTSUdOVVBfRkFJTFVSRSxcclxuICBVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLFxyXG59IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ2luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9naW5Eb25lOiBmYWxzZSxcclxuICBsb2dpbkVycm9yOiBudWxsLFxyXG4gIGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ291dERvbmU6IGZhbHNlLFxyXG4gIGxvZ291dEVycm9yOiBudWxsLFxyXG4gIHNpZ251cExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ251cERvbmU6IGZhbHNlLFxyXG4gIHNpZ251cEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIHJlbW92ZUZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG4gIG15SW5mbzogbnVsbCxcclxuICB1c2VySW5mbzogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dJTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXBSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogU0lHTlVQX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUdlbmVyYXRvciA9IChkYXRhKSA9PiAoe1xyXG4vLyAgIC4uLmRhdGEsXHJcbi8vICAgbmlja25hbWU6ICdja3NkbnIzJyxcclxuLy8gICBpZDogdjQoKSxcclxuLy8gICBQb3N0czogW10sXHJcbi8vICAgRm9sbG93aW5nczogW10sXHJcbi8vICAgRm9sbG93ZXJzOiBbXSxcclxuLy8gfSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HSU5fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9naW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkRvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ291dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ291dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9naW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm15SW5mbyA9IG51bGw7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dvdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ291dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTlVQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTlVQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnbnVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWdudXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5teUluZm8uUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5teUluZm8uUG9zdHMgPSBkcmFmdC5teUluZm8uUG9zdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Gb2xsb3dpbmdzID0gZHJhZnQubXlJbmZvLkZvbGxvd2luZ3MuZmlsdGVyKChmKSA9PiBmLmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8uRm9sbG93ZXJzID0gZHJhZnQubXlJbmZvLkZvbGxvd2Vycy5maWx0ZXIoKGYpID0+IGYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4vLyByZWR1eC10aHVua1xyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuLy8gICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSk7XHJcbi8vICAgICAgICAgYXhpb3NcclxuLy8gICAgICAgICAgICAgLnBvc3QoJ2FwaS9sb2dpbicpXHJcbi8vICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbihyZXMuZGF0YSkpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycikpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgIH07XHJcbi8vIH07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBiYWNrVXJsO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayhwb3N0U2FnYSksIGZvcmsodXNlclNhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBjYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBERUxFVEVfUE9TVF9GQUlMVVJFLFxyXG4gIERFTEVURV9QT1NUX1JFUVVFU1QsXHJcbiAgREVMRVRFX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX0ZBSUxVUkUsXHJcbiAgTElLRV9SRVFVRVNULFxyXG4gIExJS0VfU1VDQ0VTUywgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX0lNQUdFLFxyXG4gIFJFVFdFRVRfRkFJTFVSRSxcclxuICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgUkVUV0VFVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9GQUlMVVJFLFxyXG4gIFVOTElLRV9SRVFVRVNULFxyXG4gIFVOTElLRV9TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG59IGZyb20gJy4uL2FjdGlvbnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBERUxFVEVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcblxyXG5jb25zdCBhZGRQb3N0QVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLmlkLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVsZXRlUG9zdEFQSSA9IChkYXRhKSA9PiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTtcclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZGVsZXRlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogREVMRVRFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogREVMRVRFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IERFTEVURV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYWRkQ29tbWVudEFQSSA9IChkYXRhKSA9PiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZFBvc3RBUEkgPSAoZGF0YSkgPT4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YCk7XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxpa2VBUEkgPSAoZGF0YSkgPT4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG5cclxuZnVuY3Rpb24qIGxpa2UoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsaWtlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1bmxpa2VBUEkgPSAoZGF0YSkgPT4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2UoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbCh1bmxpa2VBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1cGxvYWRJbWFnZXNBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZXR3ZWV0QVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2FkUG9zdHNBUEkgPSAoZGF0YSkgPT4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7ZGF0YSB8fCAwfWApO1xyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZFVzZXJQb3N0c0FQSSA9IChkYXRhLCBsYXN0SWQpID0+IGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlclBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhgZGF0YTogJHthY3Rpb24uZGF0YX1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBsYXN0SWQ6ICR7YWN0aW9uLmxhc3RJZH1gKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZEhhc2h0YWdQb3N0c0FQSSA9IChkYXRhLCBsYXN0SWQpID0+IGF4aW9zLmdldChgL2hhc2h0YWcvJHtkYXRhfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbi5kYXRhKSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAvLyB3aGlsZSAodHJ1ZSkge1xyXG4gIC8vICAgICB5aWVsZCB0YWtlKCdBRERfUE9TVF9SRVFVRVNUJywgYWRkUG9zdCk7XHJcbiAgLy8gfVxyXG5cclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX1BPU1RfUkVRVUVTVCwgZGVsZXRlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUkVRVUVTVCwgbGlrZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9SRVFVRVNULCB1bmxpa2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hBZGRQb3N0KSwgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaERlbGV0ZVBvc3QpLCBmb3JrKHdhdGNoTG9hZFBvc3RzKSwgZm9yayh3YXRjaExpa2UpLCBmb3JrKHdhdGNoVW5saWtlKSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLCBmb3JrKHdhdGNoUmV0d2VldCksIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJQb3N0cyksIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKV0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUxhdGVzdCwgZm9yaywgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkUsIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICBMT0dJTl9GQUlMVVJFLFxyXG4gIExPR0lOX1JFUVVFU1QsXHJcbiAgTE9HSU5fU1VDQ0VTUyxcclxuICBMT0dPVVRfRkFJTFVSRSxcclxuICBMT0dPVVRfUkVRVUVTVCxcclxuICBMT0dPVVRfU1VDQ0VTUywgUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFLCBSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICBTSUdOVVBfRkFJTFVSRSxcclxuICBTSUdOVVBfUkVRVUVTVCxcclxuICBTSUdOVVBfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xyXG5cclxuY29uc3QgbG9naW5BUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvZ2luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dJTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dJTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvZ291dEFQSSA9ICgpID0+IGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG5cclxuZnVuY3Rpb24qIGxvZ291dCgpIHtcclxuICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9nb3V0QVBJKTtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HT1VUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNpZ251cEFQSSA9IChkYXRhKSA9PiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpO1xyXG5cclxuZnVuY3Rpb24qIHNpZ251cChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChzaWdudXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBmb2xsb3dBUEkgPSAoZGF0YSkgPT4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdW5mb2xsb3dBUEkgPSAoZGF0YSkgPT4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZE15SW5mb0FQSSA9ICgpID0+IGF4aW9zLmdldCgnL3VzZXInKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZFVzZXJBUEkgPSAoZGF0YSkgPT4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKCfsmpTssq1+IX4hfiF+IX4hfiF+IX4hfiF+IX4hfiF+IX4hfiF+IScpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY2hhbmdlTmlja25hbWVBUEkgPSAoZGF0YSkgPT4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZUZvbGxvd2VyQVBJID0gKGRhdGEpID0+IGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApO1xyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICAvLyB3aGlsZSAodHJ1ZSkge1xyXG4gIC8vICAgICB5aWVsZCB0YWtlKCdMT0dfSU5fUkVRVUVTVCcsIGxvZ2luKTtcclxuICAvLyB9XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dJTl9SRVFVRVNULCBsb2dpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR09VVF9SRVFVRVNULCBsb2dvdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ251cCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05VUF9SRVFVRVNULCBzaWdudXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXHJcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ291dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnbnVwKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdAcmVkdXgtc2FnYS9jb3JlJztcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuLy8gcmVkdXggdGh1bmtcclxuLy8gY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbi8vICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxuLy8gfTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlLCB7IGVuYWJsZUVTNSB9IGZyb20gJ2ltbWVyJztcblxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcbiAgZW5hYmxlRVM1KCk7XG4gIHJldHVybiBwcm9kdWNlKC4uLmFyZ3MpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=