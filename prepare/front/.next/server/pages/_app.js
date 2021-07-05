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
/*! exports provided: ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE */
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
/*! exports provided: dummyPostsGenerator, initialState, addPostRequestAction, deletePostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyPostsGenerator", function() { return dummyPostsGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostRequestAction", function() { return deletePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");




const dummyPostsGenerator = number => Array(number).fill().map(() => ({
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
  User: {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
}));
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
  hasMorePosts: true
};
const addPostRequestAction = data => ({
  type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
  data
});
const deletePostRequestAction = data => ({
  type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_REQUEST"],
  data
});
const addCommentRequestAction = data => ({
  type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"],
  data
}); // const dummyPost = (data) => ({
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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
  switch (action.type) {
    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"]:
      draft.addPostLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"]:
      draft.addPostLoading = false; // immer 사용

      draft.mainPosts.unshift(action.data); // immer 사용 X
      // [dummyPost(action.data), ...state.mainPosts];

      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"]:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      console.log(action.error);
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_REQUEST"]:
      draft.deletePostLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_SUCCESS"]:
      draft.deletePostLoading = false;
      draft.deletePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(p => p.id !== action.data);
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_FAILURE"]:
      draft.deletePostLoading = false;
      draft.deletePostError = action.error;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"]:
      draft.addCommentLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"]:
      draft.addCommentDone = true;
      draft.addCommentLoading = false;
      draft.mainPosts.find(p => p.id === action.data.PostId).Comments.unshift(action.data); //   draft.mainPosts.forEach((post) => {
      //     if (post.id === action.data.postId) {
      //       post.Comments.unshift(dummyComment(action.data));
      //     }
      //   });

      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"]:
      draft.loadPostsError = action.error;
      draft.loadPostsLoading = false;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"]:
      draft.loadPostsLoading = true;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_SUCCESS"]:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts);
      draft.hasMorePosts = draft.mainPosts.length < 50;
      break;

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_FAILURE"]:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
      draft.changeNicknameDone = false;
      draft.myInfo.nickname = action.data;
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
      draft.myInfo.Posts = draft.myInfo.Posts.filter(p => p.id !== action.data);
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"]:
      draft.followLoading = true;
      break;

    case _actions_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"]:
      draft.followLoading = false;
      draft.followDone = true;
      draft.myInfo.Followings.push({
        id: action.data
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
      draft.myInfo.Followings = draft.myInfo.Followings.filter(f => f.id !== action.data);
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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");






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

function* deletePost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_OF_ME"],
      data: action.data
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
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
} // const loadPostsAPI = (data) => axios.get('api/posts');


function* loadPosts() {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["dummyPostsGenerator"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
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

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeletePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts)]);
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

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function* unfollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
      data: action.data
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
    console.log(response);
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

function* watchLogin() {
  // while (true) {
  //     yield take('LOG_IN_REQUEST', login);
  // }
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGIN_REQUEST"], login);
}

function* watchLogout() {
  // while (true) {
  //     yield take('LOG_OUT_REQUEST', logout);
  // }
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

function* userSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignup), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo)]);
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

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

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

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9wb3N0LmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQ29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4LXNhZ2EvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkRFTEVURV9QT1NUX1JFUVVFU1QiLCJERUxFVEVfUE9TVF9TVUNDRVNTIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTFVSRSIsIkxPR09VVF9SRVFVRVNUIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIlNJR05VUF9SRVFVRVNUIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiREVMRVRFX1BPU1RfT0ZfTUUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJkdW1teVBvc3RzR2VuZXJhdG9yIiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJ2NCIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZGVsZXRlUG9zdExvYWRpbmciLCJkZWxldGVQb3N0RG9uZSIsImRlbGV0ZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJoYXNNb3JlUG9zdHMiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJkZWxldGVQb3N0UmVxdWVzdEFjdGlvbiIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJwIiwiZmluZCIsIlBvc3RJZCIsImNvbmNhdCIsImxlbmd0aCIsImxvZ2luTG9hZGluZyIsImxvZ2luRG9uZSIsImxnb2luRXJyb3IiLCJsb2dvdXRMb2FkaW5nIiwibG9nb3V0RG9uZSIsImxvZ291dEVycm9yIiwic2lnbnVwTG9hZGluZyIsInNpZ251cERvbmUiLCJzaWdudXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJteUluZm8iLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiZm9sbG93UmVxdWVzdEFjdGlvbiIsInVuZm9sbG93UmVxdWVzdEFjdGlvbiIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJsb2dpbkVycm9yIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwicHVzaCIsImYiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInJlc3BvbnNlIiwiY2FsbCIsInB1dCIsImVyciIsImRlbGV0ZVBvc3QiLCJkZWxheSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJhZGRDb21tZW50IiwibG9hZFBvc3RzIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoRGVsZXRlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJsb2dpbkFQSSIsImxvZ2luIiwibG9nb3V0QVBJIiwibG9nb3V0Iiwic2lnbnVwQVBJIiwic2lnbnVwIiwiZm9sbG93IiwidW5mb2xsb3ciLCJsb2FkTXlJbmZvQVBJIiwiZ2V0IiwibG9hZE15SW5mbyIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoU2lnbnVwIiwid2F0Y2hMb2FkTXlJbmZvIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUi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akIsQ0FBN0I7QUFJZTFKLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLDZDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9SRVFVRVNUID0gJ0RFTEVURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfU1VDQ0VTUyA9ICdERUxFVEVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX0ZBSUxVUkUgPSAnREVMRVRFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG4iLCJleHBvcnQgY29uc3QgTE9HSU5fUkVRVUVTVCA9ICdMT0dJTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSAnTE9HSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMVVJFID0gJ0xPR0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR09VVF9SRVFVRVNUID0gJ0xPR09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR09VVF9TVUNDRVNTID0gJ0xPR09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR09VVF9GQUlMVVJFID0gJ0xPR09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfUkVRVUVTVCA9ICdTSUdOVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9ICdTSUdOVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfRkFJTFVSRSA9ICdTSUdOVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfT0ZfTUUgPSAnREVMRVRFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuIiwiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9Db25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxDb21wb25lbnQgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbkFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyBjb21iaW5lUmVkdWNlcnPqsIAg7JWM7JWE7IScIGluaXRpYWxTdGF0ZeydhCDshLjtjIXtlbTspIDri6QuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAvLyBIWURSQVRFKFNTUinrpbwg7JyE7ZW0IGluZGV4IOumrOuTgOyEnOulvCDstpTqsIDtlbTspIDri6QuXHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsXHJcbiAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBERUxFVEVfUE9TVF9GQUlMVVJFLCBERUxFVEVfUE9TVF9SRVFVRVNULCBERUxFVEVfUE9TVF9TVUNDRVNTLCBMT0FEX1BPU1RfRkFJTFVSRSwgTE9BRF9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9TVUNDRVNTIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0JztcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1teVBvc3RzR2VuZXJhdG9yID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgaWQ6IHY0KCksXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IHY0KCksXHJcbiAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gIH0sXHJcbiAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgSW1hZ2VzOiBbe1xyXG4gICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gIH1dLFxyXG4gIENvbW1lbnRzOiBbe1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogdjQoKSxcclxuICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gIH1dLFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgZGVsZXRlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGRlbGV0ZVBvc3REb25lOiBmYWxzZSxcclxuICBkZWxldGVQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IERFTEVURV9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICBpZDogZGF0YS5pZCxcclxuLy8gICBjb250ZW50OiBkYXRhLnRleHQsXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IGRhdGEubXlJbmZvLmlkLFxyXG4vLyAgICAgbmlja25hbWU6IGRhdGEubXlJbmZvLm5pY2tuYW1lLFxyXG4vLyAgIH0sXHJcbi8vICAgSW1hZ2VzOiBbXSxcclxuLy8gICBDb21tZW50czogW10sXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgaWQ6IHY0KCksXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IGRhdGEubXlJbmZvLmlkLFxyXG4vLyAgICAgbmlja25hbWU6IGRhdGEubXlJbmZvLm5pY2tuYW1lLFxyXG4vLyAgIH0sXHJcbi8vICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAvLyBpbW1lciDsgqzsmqlcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAvLyBpbW1lciDsgqzsmqkgWFxyXG4gICAgICAvLyBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgREVMRVRFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZGVsZXRlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZGVsZXRlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZmluZCgocCkgPT4gcC5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKVxyXG4gICAgICAgIC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgLy8gICBkcmFmdC5tYWluUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKHBvc3QuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCkge1xyXG4gICAgICAvLyAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9UT19NRSxcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBERUxFVEVfUE9TVF9PRl9NRSxcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICBMT0dJTl9GQUlMVVJFLFxyXG4gIExPR0lOX1JFUVVFU1QsXHJcbiAgTE9HSU5fU1VDQ0VTUyxcclxuICBMT0dPVVRfRkFJTFVSRSxcclxuICBMT0dPVVRfUkVRVUVTVCxcclxuICBMT0dPVVRfU1VDQ0VTUyxcclxuICBTSUdOVVBfRkFJTFVSRSxcclxuICBTSUdOVVBfUkVRVUVTVCxcclxuICBTSUdOVVBfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2dpbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ2luRG9uZTogZmFsc2UsXHJcbiAgbGdvaW5FcnJvcjogbnVsbCxcclxuICBsb2dvdXRMb2FkaW5nOiBmYWxzZSxcclxuICBsb2dvdXREb25lOiBmYWxzZSxcclxuICBsb2dvdXRFcnJvcjogbnVsbCxcclxuICBzaWdudXBMb2FkaW5nOiBmYWxzZSxcclxuICBzaWdudXBEb25lOiBmYWxzZSxcclxuICBzaWdudXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICBteUluZm86IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dPVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9sbG93UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFNJR05VUF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlHZW5lcmF0b3IgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAuLi5kYXRhLFxyXG4vLyAgIG5pY2tuYW1lOiAnY2tzZG5yMycsXHJcbi8vICAgaWQ6IHY0KCksXHJcbi8vICAgUG9zdHM6IFtdLFxyXG4vLyAgIEZvbGxvd2luZ3M6IFtdLFxyXG4vLyAgIEZvbGxvd2VyczogW10sXHJcbi8vIH0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dpbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9naW5Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dJTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dpbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9naW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR09VVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dvdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dvdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ2luRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5teUluZm8gPSBudWxsO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dvdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubXlJbmZvLm5pY2tuYW1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWdudXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWdudXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ251cEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgREVMRVRFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Qb3N0cyA9IGRyYWZ0Lm15SW5mby5Qb3N0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8uRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Gb2xsb3dpbmdzID0gZHJhZnQubXlJbmZvLkZvbGxvd2luZ3MuZmlsdGVyKChmKSA9PiBmLmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4vLyByZWR1eC10aHVua1xyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuLy8gICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSk7XHJcbi8vICAgICAgICAgYXhpb3NcclxuLy8gICAgICAgICAgICAgLnBvc3QoJ2FwaS9sb2dpbicpXHJcbi8vICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbihyZXMuZGF0YSkpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycikpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgIH07XHJcbi8vIH07XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSc7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHBvc3RTYWdhKSwgZm9yayh1c2VyU2FnYSldKTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgREVMRVRFX1BPU1RfRkFJTFVSRSwgREVMRVRFX1BPU1RfUkVRVUVTVCwgREVMRVRFX1BPU1RfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUsIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUyB9IGZyb20gJy4uL2FjdGlvbnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBERUxFVEVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcbmltcG9ydCB7IGR1bW15UG9zdHNHZW5lcmF0b3IgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IGFkZFBvc3RBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3Bvc3QnLCB7IGNvbnRlbnQ6IGRhdGEgfSk7XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLmlkLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IERFTEVURV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBERUxFVEVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IERFTEVURV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYWRkQ29tbWVudEFQSSA9IChkYXRhKSA9PiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gY29uc3QgbG9hZFBvc3RzQVBJID0gKGRhdGEpID0+IGF4aW9zLmdldCgnYXBpL3Bvc3RzJyk7XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBkdW1teVBvc3RzR2VuZXJhdG9yKDEwKSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAvLyB3aGlsZSAodHJ1ZSkge1xyXG4gIC8vICAgICB5aWVsZCB0YWtlKCdBRERfUE9TVF9SRVFVRVNUJywgYWRkUG9zdCk7XHJcbiAgLy8gfVxyXG5cclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX1BPU1RfUkVRVUVTVCwgZGVsZXRlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoQWRkUG9zdCksIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hEZWxldGVQb3N0KSwgZm9yayh3YXRjaExvYWRQb3N0cyldKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmsgfSBmcm9tICdAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBGT0xMT1dfRkFJTFVSRSwgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPR0lOX0ZBSUxVUkUsIExPR0lOX1JFUVVFU1QsXHJcbiAgTE9HSU5fU1VDQ0VTUywgTE9HT1VUX0ZBSUxVUkUsIExPR09VVF9SRVFVRVNULCBMT0dPVVRfU1VDQ0VTUywgU0lHTlVQX0ZBSUxVUkUsIFNJR05VUF9SRVFVRVNULFxyXG4gIFNJR05VUF9TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLCBVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmNvbnN0IGxvZ2luQVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2dvdXRBUEkgPSAoKSA9PiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvZ291dEFQSSk7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR09VVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dPVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzaWdudXBBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoc2lnbnVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTlVQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9hZE15SW5mb0FQSSA9ICgpID0+IGF4aW9zLmdldCgnL3VzZXInKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgLy8gd2hpbGUgKHRydWUpIHtcclxuICAvLyAgICAgeWllbGQgdGFrZSgnTE9HX0lOX1JFUVVFU1QnLCBsb2dpbik7XHJcbiAgLy8gfVxyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dvdXQoKSB7XHJcbiAgLy8gd2hpbGUgKHRydWUpIHtcclxuICAvLyAgICAgeWllbGQgdGFrZSgnTE9HX09VVF9SRVFVRVNUJywgbG9nb3V0KTtcclxuICAvLyB9XHJcblxyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HT1VUX1JFUVVFU1QsIGxvZ291dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnbnVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTlVQX1JFUVVFU1QsIHNpZ251cCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dpbiksIGZvcmsod2F0Y2hMb2dvdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ251cCksIGZvcmsod2F0Y2hGb2xsb3cpLCBmb3JrKHdhdGNoVW5mb2xsb3cpLCBmb3JrKHdhdGNoTG9hZE15SW5mbyldKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdAcmVkdXgtc2FnYS9jb3JlJztcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuLy8gcmVkdXggdGh1bmtcclxuLy8gY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbi8vICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxuLy8gfTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=