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
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");





 // redux thunk
// const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//   console.log(action);
//   return next(action);
// };

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
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

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9wb3N0LmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9Db25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkRFTEVURV9QT1NUX1JFUVVFU1QiLCJERUxFVEVfUE9TVF9TVUNDRVNTIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxJS0VfUkVRVUVTVCIsIkxJS0VfU1VDQ0VTUyIsIkxJS0VfRkFJTFVSRSIsIlVOTElLRV9SRVFVRVNUIiwiVU5MSUtFX0ZBSUxVUkUiLCJVTkxJS0VfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTFVSRSIsIkxPR09VVF9SRVFVRVNUIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIlNJR05VUF9SRVFVRVNUIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiREVMRVRFX1BPU1RfT0ZfTUUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUiLCJiYWNrVXJsIiwiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZVJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsInNpbmdsZVBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJkZWxldGVQb3N0TG9hZGluZyIsImRlbGV0ZVBvc3REb25lIiwiZGVsZXRlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsaWtlTG9hZGluZyIsImxpa2VEb25lIiwibGlrZUVycm9yIiwidW5saWtlTG9hZGluZyIsInVubGlrZURvbmUiLCJ1bmxpa2VFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwiaGFzTW9yZVBvc3RzIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwiZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24iLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJwIiwiaWQiLCJQb3N0SWQiLCJmaW5kIiwiQ29tbWVudHMiLCJjb25jYXQiLCJsZW5ndGgiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiRXJyb3IiLCJsIiwidiIsImkiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ251cExvYWRpbmciLCJzaWdudXBEb25lIiwic2lnbnVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwicmVtb3ZlRm9sbG93ZXJzTG9hZGluZyIsInJlbW92ZUZvbGxvd2Vyc0RvbmUiLCJyZW1vdmVGb2xsb3dlcnNFcnJvciIsIm15SW5mbyIsInVzZXJJbmZvIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImZvbGxvd1JlcXVlc3RBY3Rpb24iLCJ1bmZvbGxvd1JlcXVlc3RBY3Rpb24iLCJzaWdudXBSZXF1ZXN0QWN0aW9uIiwibmlja25hbWUiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJmIiwiRm9sbG93ZXJzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJyZXNwb25zZSIsImNhbGwiLCJwdXQiLCJlcnIiLCJkZWxldGVQb3N0QVBJIiwiZGVsZXRlIiwiZGVsZXRlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJhZGRDb21tZW50IiwibG9hZFBvc3RBUEkiLCJnZXQiLCJsb2FkUG9zdCIsImxpa2VBUEkiLCJwYXRjaCIsImxpa2UiLCJ1bmxpa2VBUEkiLCJ1bmxpa2UiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJyZXR3ZWV0QVBJIiwicmV0d2VldCIsImxvYWRQb3N0c0FQSSIsImxvYWRQb3N0cyIsImxvYWRVc2VyUG9zdHNBUEkiLCJsYXN0SWQiLCJsb2FkVXNlclBvc3RzIiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsImxvYWRIYXNodGFnUG9zdHMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hEZWxldGVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoTGlrZSIsIndhdGNoVW5saWtlIiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwibG9naW5BUEkiLCJsb2dpbiIsImxvZ291dEFQSSIsImxvZ291dCIsInNpZ251cEFQSSIsInNpZ251cCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoU2lnbnVwIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRVc2VyIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiYXJncyIsImVuYWJsZUVTNSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FB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Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfUkVRVUVTVCA9ICdERUxFVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX1NVQ0NFU1MgPSAnREVMRVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9GQUlMVVJFID0gJ0RFTEVURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1JFUVVFU1QgPSAnTElLRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfU1VDQ0VTUyA9ICdMSUtFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9GQUlMVVJFID0gJ0xJS0VfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1JFUVVFU1QgPSAnVU5MSUtFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX0ZBSUxVUkUgPSAnVU5MSUtFX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1NVQ0NFU1MgPSAnVU5MSUtFX1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSc7XHJcbiIsImV4cG9ydCBjb25zdCBMT0dJTl9SRVFVRVNUID0gJ0xPR0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fU1VDQ0VTUyA9ICdMT0dJTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUxVUkUgPSAnTE9HSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HT1VUX1JFUVVFU1QgPSAnTE9HT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HT1VUX1NVQ0NFU1MgPSAnTE9HT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HT1VUX0ZBSUxVUkUgPSAnTE9HT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUF9SRVFVRVNUID0gJ1NJR05VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TVUNDRVNTID0gJ1NJR05VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9GQUlMVVJFID0gJ1NJR05VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9PRl9NRSA9ICdERUxFVEVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSU19TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFJztcclxuIiwiZXhwb3J0IGNvbnN0IGJhY2tVcmwgPSAnaHR0cDovLzMuMzYuNzguMzAnO1xyXG4iLCJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL0NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiAoXHJcbiAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG5cclxuICAgIDwvSGVhZD5cclxuICAgIDxDb21wb25lbnQgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbkFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyBjb21iaW5lUmVkdWNlcnPqsIAg7JWM7JWE7IScIGluaXRpYWxTdGF0ZeydhCDshLjtjIXtlbTspIDri6QuXHJcbi8vIEhZRFJBVEUoU1NSKeulvCDsnITtlbQgaW5kZXgg66as65OA7ISc66W8IOy2lOqwgO2VtOykgOuLpC5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZVJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcbmltcG9ydCB7XHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgREVMRVRFX1BPU1RfRkFJTFVSRSxcclxuICBERUxFVEVfUE9TVF9SRVFVRVNULFxyXG4gIERFTEVURV9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9GQUlMVVJFLFxyXG4gIExJS0VfUkVRVUVTVCxcclxuICBMSUtFX1NVQ0NFU1MsIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICBSRU1PVkVfSU1BR0UsXHJcbiAgUkVUV0VFVF9GQUlMVVJFLFxyXG4gIFJFVFdFRVRfUkVRVUVTVCxcclxuICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0JztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBzaW5nbGVQb3N0OiB7fSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICBkZWxldGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgZGVsZXRlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGRlbGV0ZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICBsaWtlTG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZURvbmU6IGZhbHNlLFxyXG4gIGxpa2VFcnJvcjogbnVsbCxcclxuICB1bmxpa2VMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VEb25lOiBmYWxzZSxcclxuICB1bmxpa2VFcnJvcjogbnVsbCxcclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogREVMRVRFX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAvLyBpbW1lciDsgqzsmqlcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAvLyBpbW1lciDsgqzsmqkgWFxyXG4gICAgICAvLyBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHApID0+IHAuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoID09PSAxMDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubGlrZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0Lmxpa2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VEb25lID0gdHJ1ZTtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChwKSA9PiBwLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExJS0VfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZUVycm9yID0gYWN0aW9uLkVycm9yO1xyXG4gICAgICBkcmFmdC5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVubGlrZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQudW5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VEb25lID0gdHJ1ZTtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChwKSA9PiBwLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigobCkgPT4gbC5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVOTElLRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VFcnJvciA9IGFjdGlvbi5FcnJvcjtcclxuICAgICAgZHJhZnQudW5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICBpZiAoYWN0aW9uLmRhdGEpIHtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBkdW1teVBvc3RzR2VuZXJhdG9yID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbi8vICAgaWQ6IHY0KCksXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IHY0KCksXHJcbi8vICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgIH0sXHJcbi8vICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbi8vICAgSW1hZ2VzOiBbe1xyXG4vLyAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4vLyAgIH1dLFxyXG4vLyAgIENvbW1lbnRzOiBbe1xyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICBpZDogdjQoKSxcclxuLy8gICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4vLyAgIH1dLFxyXG4vLyB9KSk7XHJcblxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICBpZDogZGF0YS5pZCxcclxuLy8gICBjb250ZW50OiBkYXRhLnRleHQsXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IGRhdGEubXlJbmZvLmlkLFxyXG4vLyAgICAgbmlja25hbWU6IGRhdGEubXlJbmZvLm5pY2tuYW1lLFxyXG4vLyAgIH0sXHJcbi8vICAgSW1hZ2VzOiBbXSxcclxuLy8gICBDb21tZW50czogW10sXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgaWQ6IHY0KCksXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IGRhdGEubXlJbmZvLmlkLFxyXG4vLyAgICAgbmlja25hbWU6IGRhdGEubXlJbmZvLm5pY2tuYW1lLFxyXG4vLyAgIH0sXHJcbi8vICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyB9KTtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9UT19NRSwgREVMRVRFX1BPU1RfT0ZfTUUsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBGT0xMT1dfRkFJTFVSRSwgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLFxyXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLCBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX1JFUVVFU1QsIExPQURfVVNFUl9TVUNDRVNTLCBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICBMT0dJTl9SRVFVRVNULCBMT0dJTl9TVUNDRVNTLCBMT0dJTl9GQUlMVVJFLFxyXG4gIExPR09VVF9SRVFVRVNULCBMT0dPVVRfU1VDQ0VTUywgTE9HT1VUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX0ZPTExPV0VSU19SRVFVRVNULCBSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MsIFJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICBTSUdOVVBfUkVRVUVTVCwgU0lHTlVQX1NVQ0NFU1MsIFNJR05VUF9GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dpbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ2luRXJyb3I6IG51bGwsXHJcbiAgbG9nb3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nb3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nb3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnbnVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnbnVwRG9uZTogZmFsc2UsXHJcbiAgc2lnbnVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgbXlJbmZvOiBudWxsLFxyXG4gIHVzZXJJbmZvOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR0lOX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogTE9HT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1JlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bmZvbGxvd1JlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTSUdOVVBfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbi8vIGNvbnN0IGR1bW15R2VuZXJhdG9yID0gKGRhdGEpID0+ICh7XHJcbi8vICAgLi4uZGF0YSxcclxuLy8gICBuaWNrbmFtZTogJ2Nrc2RucjMnLFxyXG4vLyAgIGlkOiB2NCgpLFxyXG4vLyAgIFBvc3RzOiBbXSxcclxuLy8gICBGb2xsb3dpbmdzOiBbXSxcclxuLy8gICBGb2xsb3dlcnM6IFtdLFxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0dJTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dpbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9naW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ2luRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9naW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ2luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkRvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gbnVsbDtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ291dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nb3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWdudXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWdudXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ251cEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgREVMRVRFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Qb3N0cyA9IGRyYWZ0Lm15SW5mby5Qb3N0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvLkZvbGxvd2luZ3MgPSBkcmFmdC5teUluZm8uRm9sbG93aW5ncy5maWx0ZXIoKGYpID0+IGYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Gb2xsb3dlcnMgPSBkcmFmdC5teUluZm8uRm9sbG93ZXJzLmZpbHRlcigoZikgPT4gZi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuXHJcbi8vIHJlZHV4LXRodW5rXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4vLyAgICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKTtcclxuLy8gICAgICAgICBheGlvc1xyXG4vLyAgICAgICAgICAgICAucG9zdCgnYXBpL2xvZ2luJylcclxuLy8gICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgfTtcclxuLy8gfTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tVcmw7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHBvc3RTYWdhKSwgZm9yayh1c2VyU2FnYSldKTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIERFTEVURV9QT1NUX0ZBSUxVUkUsXHJcbiAgREVMRVRFX1BPU1RfUkVRVUVTVCxcclxuICBERUxFVEVfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfRkFJTFVSRSxcclxuICBMSUtFX1JFUVVFU1QsXHJcbiAgTElLRV9TVUNDRVNTLCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICBSRU1PVkVfSU1BR0UsXHJcbiAgUkVUV0VFVF9GQUlMVVJFLFxyXG4gIFJFVFdFRVRfUkVRVUVTVCxcclxuICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIERFTEVURV9QT1NUX09GX01FIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmNvbnN0IGFkZFBvc3RBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVQb3N0QVBJID0gKGRhdGEpID0+IGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChkZWxldGVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBERUxFVEVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBERUxFVEVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogREVMRVRFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhZGRDb21tZW50QVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2FkUG9zdEFQSSA9IChkYXRhKSA9PiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbGlrZUFQSSA9IChkYXRhKSA9PiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcblxyXG5mdW5jdGlvbiogbGlrZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxpa2VBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVubGlrZUFQSSA9IChkYXRhKSA9PiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG5cclxuZnVuY3Rpb24qIHVubGlrZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHVubGlrZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVwbG9hZEltYWdlc0FQSSA9IChkYXRhKSA9PiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJldHdlZXRBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCk7XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRQb3N0c0FQSSA9IChkYXRhKSA9PiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtkYXRhIHx8IDB9YCk7XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2FkVXNlclBvc3RzQVBJID0gKGRhdGEsIGxhc3RJZCkgPT4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZEhhc2h0YWdQb3N0c0FQSSA9IChkYXRhLCBsYXN0SWQpID0+IGF4aW9zLmdldChgL2hhc2h0YWcvJHtkYXRhfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbi5kYXRhKSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAvLyB3aGlsZSAodHJ1ZSkge1xyXG4gIC8vICAgICB5aWVsZCB0YWtlKCdBRERfUE9TVF9SRVFVRVNUJywgYWRkUG9zdCk7XHJcbiAgLy8gfVxyXG5cclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX1BPU1RfUkVRVUVTVCwgZGVsZXRlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUkVRVUVTVCwgbGlrZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9SRVFVRVNULCB1bmxpa2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hBZGRQb3N0KSwgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaERlbGV0ZVBvc3QpLCBmb3JrKHdhdGNoTG9hZFBvc3RzKSwgZm9yayh3YXRjaExpa2UpLCBmb3JrKHdhdGNoVW5saWtlKSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLCBmb3JrKHdhdGNoUmV0d2VldCksIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJQb3N0cyksIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKV0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUxhdGVzdCwgZm9yaywgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkUsIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICBMT0dJTl9GQUlMVVJFLFxyXG4gIExPR0lOX1JFUVVFU1QsXHJcbiAgTE9HSU5fU1VDQ0VTUyxcclxuICBMT0dPVVRfRkFJTFVSRSxcclxuICBMT0dPVVRfUkVRVUVTVCxcclxuICBMT0dPVVRfU1VDQ0VTUywgUkVNT1ZFX0ZPTExPV0VSU19GQUlMVVJFLCBSRU1PVkVfRk9MTE9XRVJTX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICBTSUdOVVBfRkFJTFVSRSxcclxuICBTSUdOVVBfUkVRVUVTVCxcclxuICBTSUdOVVBfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xyXG5cclxuY29uc3QgbG9naW5BUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvZ2luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dJTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dJTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvZ291dEFQSSA9ICgpID0+IGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG5cclxuZnVuY3Rpb24qIGxvZ291dCgpIHtcclxuICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9nb3V0QVBJKTtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HT1VUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNpZ251cEFQSSA9IChkYXRhKSA9PiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpO1xyXG5cclxuZnVuY3Rpb24qIHNpZ251cChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChzaWdudXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBmb2xsb3dBUEkgPSAoZGF0YSkgPT4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdW5mb2xsb3dBUEkgPSAoZGF0YSkgPT4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZE15SW5mb0FQSSA9ICgpID0+IGF4aW9zLmdldCgnL3VzZXInKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZFVzZXJBUEkgPSAoZGF0YSkgPT4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lQVBJID0gKGRhdGEpID0+IGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIGRhdGEpO1xyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZW1vdmVGb2xsb3dlckFQSSA9IChkYXRhKSA9PiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgLy8gd2hpbGUgKHRydWUpIHtcclxuICAvLyAgICAgeWllbGQgdGFrZSgnTE9HX0lOX1JFUVVFU1QnLCBsb2dpbik7XHJcbiAgLy8gfVxyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dvdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dPVVRfUkVRVUVTVCwgbG9nb3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWdudXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOVVBfUkVRVUVTVCwgc2lnbnVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUlNfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaExvZ2luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dvdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ251cCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbi8vIHJlZHV4IHRodW5rXHJcbi8vIGNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4vLyAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbi8vIH07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSwgeyBlbmFibGVFUzUgfSBmcm9tICdpbW1lcic7XG5cbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XG4gIGVuYWJsZUVTNSgpO1xuICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9