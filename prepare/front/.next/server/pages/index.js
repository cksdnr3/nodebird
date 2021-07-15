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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

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

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "1zst":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "antd/lib/avatar/avatar"
var avatar_ = __webpack_require__("wfCx");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/UserProfile.js









const UserProfile = () => {
  const {
    myInfo,
    logoutLoading
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onLogout = Object(external_react_["useCallback"])(() => {
    dispatch(Object(user["c" /* logoutRequestAction */])());
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Card"], {
    actions: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: `/user/${myInfo.id}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          children: ["\uC9F9\uC9F9", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), ' ', myInfo === null || myInfo === void 0 ? void 0 : myInfo.Posts.length]
        })
      })
    }, "twit"), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          children: ["\uD314\uB85C\uC789", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), ' ', myInfo === null || myInfo === void 0 ? void 0 : myInfo.Followings.length]
        })
      })
    }, "followings"), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          children: ["\uD314\uB85C\uC6CC", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), ' ', myInfo === null || myInfo === void 0 ? void 0 : myInfo.Followers.length]
        })
      })
    }, "followers")],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Card"].Meta, {
      avatar: /*#__PURE__*/Object(jsx_runtime_["jsx"])(avatar_default.a, {
        children: myInfo.nickname[0]
      }),
      title: myInfo.nickname
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
      onClick: onLogout,
      loading: logoutLoading,
      children: "Logout"
    })]
  });
};

/* harmony default export */ var components_UserProfile = (UserProfile);
// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__("3zrx");

// CONCATENATED MODULE: ./components/LoginForm.js









const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "LoginForm__ButtonWrapper",
  componentId: "sc-1qh5ev2-0"
})(["margin-top:10px;"]);

const LoginForm = () => {
  const [email, onChangeEmail] = Object(useInput["a" /* default */])('');
  const [password, onChangePasswd] = Object(useInput["a" /* default */])('');
  const {
    loginLoading,
    loginError
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onSubmitLoginForm = Object(external_react_["useCallback"])(() => {
    console.log(email, password);
    dispatch(Object(user["b" /* loginRequestAction */])({
      email,
      password
    }));
  }, [email, password]);
  Object(external_react_["useEffect"])(() => {
    if (loginError) {
      console.log(loginError);
    }
  }, [loginError]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Form"], {
    onFinish: onSubmitLoginForm,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "user-emial",
        children: "\uC774\uBA54\uC77C"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
        name: "user-email",
        type: "email",
        value: email,
        onChange: onChangeEmail,
        required: true
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "user-passwd",
        children: "\uBE44\uBC00\uBC88\uD638"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
        name: "user-passwd",
        value: password,
        onChange: onChangePasswd,
        required: true
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ButtonWrapper, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: loginLoading,
        children: "\uB85C\uADF8\uC778"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/signup",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
            children: "Signup"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var components_LoginForm = (LoginForm);
// CONCATENATED MODULE: ./components/AppLayout.js











const ColWrapper = external_styled_components_default()(external_antd_["Col"]).withConfig({
  displayName: "AppLayout__ColWrapper",
  componentId: "sc-ngssuz-0"
})(["padding:15px;"]);
const Global = Object(external_styled_components_["createGlobalStyle"])([".ant-row{margin-right:0 !important;margin-left:0 !important;}.ant-col:first-child{padding-left:0 !important;}.ant-col:last-child{padding-right:0 !important;}"]);

const AppLayout = ({
  children
}) => {
  const {
    myInfo
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const [searchInput, onChangeSearchInput] = Object(useInput["a" /* default */])('');
  const onSearch = Object(external_react_["useCallback"])(() => {
    router_default.a.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Global, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Menu"], {
      mode: "horizontal",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/",
          children: "Node Bird"
        })
      }, "nodebird"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/profile",
          children: "profile"
        })
      }, "profile"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"].Search, {
          style: {
            verticalAlign: 'middle'
          },
          enterButton: true,
          value: searchInput,
          onChange: onChangeSearchInput,
          onSearch: onSearch
        })
      }, "search")]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
      gutter: 8,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ColWrapper, {
        xs: 24,
        md: 6,
        children: myInfo ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_UserProfile, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_LoginForm, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        xs: 24,
        md: 12,
        children: children
      })]
    })]
  });
};

/* harmony default export */ var components_AppLayout = __webpack_exports__["a"] = (AppLayout);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3zrx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ((initialInput = null) => {
  const {
    0: input,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialInput);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setInput(e.target.value);
  }, []);
  return [input, handler, setInput];
});

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: ./actions/post.js
var actions_post = __webpack_require__("P8W0");

// EXTERNAL MODULE: ./actions/user.js
var user = __webpack_require__("0c6W");

// EXTERNAL MODULE: ./components/AppLayout.js + 2 modules
var AppLayout = __webpack_require__("1zst");

// EXTERNAL MODULE: ./components/PostCard.js + 6 modules
var PostCard = __webpack_require__("kduo");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__("3zrx");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/PostForm.js








const PostForm = () => {
  const {
    imagePaths,
    addPostLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const {
    myInfo
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const imageInput = Object(external_react_["useRef"])();
  const [text, onChangeText, setText] = Object(useInput["a" /* default */])('');
  Object(external_react_["useEffect"])(() => {
    if (myInfo.Posts.length) {
      setText('');
    }
  }, [myInfo.Posts.length]);
  const onSubmit = Object(external_react_["useCallback"])(() => {
    if (!text || !text.trim()) {
      return alert('게시글을 작성해주세요!');
    }

    const formData = new FormData();
    imagePaths.forEach(p => {
      formData.append('image', p);
    });
    formData.append('content', text);
    return dispatch({
      type: actions_post["e" /* ADD_POST_REQUEST */],
      data: formData
    });
  }, [text, imagePaths]);
  const clickImgUploadBtn = Object(external_react_["useCallback"])(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = Object(external_react_["useCallback"])(e => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: actions_post["G" /* UPLOAD_IMAGES_REQUEST */],
      data: imageFormData
    });
  }, []);
  const onDelete = Object(external_react_["useCallback"])(index => () => {
    dispatch({
      type: actions_post["y" /* REMOVE_IMAGE */],
      data: index
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    name: "image",
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "enter post"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "file",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChangeImages
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
        onClick: clickImgUploadBtn,
        children: "Upload Image"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
        type: "primary",
        style: {
          float: 'right'
        },
        loading: addPostLoading,
        htmlType: "submit",
        children: "Twit"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: imagePaths.map((path, i) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: 'inline-block'
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: `http://localhost:3065/${path}`,
          style: {
            width: 200
          },
          alt: path
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
            onClick: onDelete(i),
            children: "Delete"
          })
        })]
      }, path))
    })]
  });
};

/* harmony default export */ var components_PostForm = (PostForm);
// EXTERNAL MODULE: ./store/ConfigureStore.js + 4 modules
var ConfigureStore = __webpack_require__("yNQW");

// CONCATENATED MODULE: ./pages/index.js















const Home = () => {
  const {
    myInfo
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: actions_post["q" /* LOAD_POSTS_REQUEST */],
            data: lastId
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AppLayout["a" /* default */], {
      children: [myInfo && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostForm, {}), mainPosts.map(post => /*#__PURE__*/Object(jsx_runtime_["jsx"])(PostCard["a" /* default */], {
        post: post
      }, post.id))]
    })
  });
};

const getServerSideProps = ConfigureStore["a" /* default */].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  external_axios_default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    external_axios_default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: user["j" /* LOAD_MY_INFO_REQUEST */]
  });
  context.store.dispatch({
    type: actions_post["q" /* LOAD_POSTS_REQUEST */]
  });
  context.store.dispatch(external_redux_saga_["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

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

/***/ "kduo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/ImagesZoom/styles.js


const Overlay = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Overlay",
  componentId: "sc-1adsuky-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]);
const Header = external_styled_components_default.a.header.withConfig({
  displayName: "styles__Header",
  componentId: "sc-1adsuky-1"
})(["header:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}"]);
const SliderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__SliderWrapper",
  componentId: "sc-1adsuky-2"
})(["height:calc(100% - 44px);background:#090909;"]);
const ImgWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ImgWrapper",
  componentId: "sc-1adsuky-3"
})(["padding:32px;text-align:center;& img{margin:0 auto;max-height:750px;}"]);
const CloseBtn = external_styled_components_default()(icons_["CloseOutlined"]).withConfig({
  displayName: "styles__CloseBtn",
  componentId: "sc-1adsuky-4"
})(["position:absolute;right:0;top 0;padding:15px;line-height:14px;cursor:pointer;"]);
const Indecator = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Indecator",
  componentId: "sc-1adsuky-5"
})(["text-align:center;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}"]);
const Global = Object(external_styled_components_["createGlobalStyle"])([".slick-slide{display:inline-block;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/ImagesZoom/index.js






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(external_react_["useState"])(0);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Overlay, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Global, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Header, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseBtn, {
        onClick: onClose
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SliderWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_slick_default.a, {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          afterChange: slide => setCurrentSlide(slide),
          children: images.map(image => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImgWrapper, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: `http://localhost:3065/${image.src}`,
              alt: `http://localhost:3065/${image.src}`
            })
          }, image.src))
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Indecator, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [currentSlide + 1, ' ', "/", images.length]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ var components_ImagesZoom = (ImagesZoom);
// CONCATENATED MODULE: ./components/PostImages.js







const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(external_react_["useState"])(false);
  const onZoom = Object(external_react_["useCallback"])(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(external_react_["useCallback"])(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        role: "presentation",
        src: `http://localhost:3065/${images[0].src}`,
        alt: `http://localhost:3065/${images[0].src}`,
        onClick: onZoom
      }), showImagesZoom && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImagesZoom, {
        images: images,
        onClose: onClose
      })]
    });
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        style: {
          width: '50%',
          float: 'left'
        },
        role: "presentation",
        src: `http://localhost:3065/${images[0].src}`,
        alt: `http://localhost:3065/${images[0].src}`,
        onClick: onZoom
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        style: {
          width: '50%'
        },
        role: "presentation",
        src: `http://localhost:3065/${images[1].src}`,
        alt: `http://localhost:3065/${images[1].src}`,
        onClick: onZoom
      }), showImagesZoom && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImagesZoom, {
        images: images,
        onClose: onClose
      })]
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        style: {
          width: '50%',
          height: '50%'
        },
        role: "presentation",
        src: `http://localhost:3065/${images[0].src}`,
        alt: `http://localhost:3065/${images[0].src}`,
        onClick: onZoom
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'middle'
        },
        onClick: onZoom,
        role: "presentation",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["PlusOutlined"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354 \uBCF4\uAE30"]
      })]
    }), showImagesZoom && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImagesZoom, {
      images: images,
      onClose: onClose
    })]
  });
};

/* harmony default export */ var components_PostImages = (PostImages);
// EXTERNAL MODULE: ./actions/user.js
var user = __webpack_require__("0c6W");

// CONCATENATED MODULE: ./components/FollowBtn.js







const FollowBtn = ({
  post
}) => {
  const {
    myInfo,
    followLoading,
    unfollowLoading
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const following = myInfo === null || myInfo === void 0 ? void 0 : myInfo.Followings.find(f => f.id === post.User.id);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const followHandler = Object(external_react_["useCallback"])(() => {
    if (following) {
      dispatch({
        type: user["B" /* UNFOLLOW_REQUEST */],
        data: post.User.id
      });
    } else {
      dispatch({
        type: user["g" /* FOLLOW_REQUEST */],
        data: post.User.id
      });
    }
  }, [following]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
      loading: followLoading || unfollowLoading,
      onClick: followHandler,
      children: following ? 'Unfollow' : 'Follow'
    })
  });
};

/* harmony default export */ var components_FollowBtn = (FollowBtn);
// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__("3zrx");

// EXTERNAL MODULE: ./reducers/post.js
var reducers_post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./components/CommentForm.js








const CommentForm = ({
  post
}) => {
  const [commentText, onChangeCommentText, setCommentText] = Object(useInput["a" /* default */])('');
  const {
    myInfo
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    addCommentLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    if (post.Comments.length) {
      setCommentText('');
    }
  }, [post.Comments.length]);
  const onSubmit = Object(external_react_["useCallback"])(() => {
    dispatch(Object(reducers_post["a" /* addCommentRequestAction */])({
      content: commentText,
      postId: post.id,
      userId: myInfo.id
    }));
  }, [commentText]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Form"], {
    onFinish: onSubmit,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Form"].Item, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"].TextArea, {
        style: {
          marginBottom: 5
        },
        placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
        style: {
          float: 'right'
        },
        loading: addCommentLoading,
        type: "primary",
        htmlType: "submit",
        children: "comment"
      })]
    })
  });
};

/* harmony default export */ var components_CommentForm = (CommentForm);
// EXTERNAL MODULE: ./node_modules/next/dist/client/link.js
var client_link = __webpack_require__("cTJO");
var client_link_default = /*#__PURE__*/__webpack_require__.n(client_link);

// CONCATENATED MODULE: ./components/PostCardContent.js




const PostCardContent = ({
  postData
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  children: postData.split(/(#[^\s#]+)/g).map((post, idx) => {
    if (post.match(/(#[^\s#]+)/g)) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        Object(jsx_runtime_["jsx"])(client_link_default.a, {
          href: `/hashtag/${post.slice(1)}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: post
          })
        }, idx)
      );
    }

    return post;
  })
});

/* harmony default export */ var components_PostCardContent = (PostCardContent);
// EXTERNAL MODULE: ./actions/post.js
var actions_post = __webpack_require__("P8W0");

// CONCATENATED MODULE: ./components/PostCard.js















external_moment_default.a.locale('ko');

const PostCard = ({
  post
}) => {
  var _post$Retweet;

  const id = Object(external_react_redux_["useSelector"])(state => {
    var _state$user$myInfo;

    return (_state$user$myInfo = state.user.myInfo) === null || _state$user$myInfo === void 0 ? void 0 : _state$user$myInfo.id;
  });
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(external_react_["useState"])(false);
  const {
    deletePostLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const liked = post.Likers.find(l => l.id === id);
  const onLike = Object(external_react_["useCallback"])(() => {
    if (!id) {
      console.log('로그인이 필요합니다.');
    }

    dispatch({
      type: actions_post["k" /* LIKE_REQUEST */],
      data: post.id
    });
  }, []);
  const onUnlike = Object(external_react_["useCallback"])(() => {
    if (!id) {
      console.log('로그인이 필요합니다.');
    }

    dispatch({
      type: actions_post["D" /* UNLIKE_REQUEST */],
      data: post.id
    });
  }, []);
  const onToggleComment = Object(external_react_["useCallback"])(() => {
    if (!id) {
      console.log('로그인이 필요합니다.');
    }

    setCommentFormOpened(prev => !prev);
  }, []);
  const clickDeleteBtn = Object(external_react_["useCallback"])(() => {
    if (!id) {
      console.log('로그인이 필요합니다.');
    }

    dispatch(Object(reducers_post["c" /* deletePostRequestAction */])(post.id));
  }, [post.id]);
  const onRetweet = Object(external_react_["useCallback"])(() => {
    if (!id) {
      console.log('로그인이 필요합니다.');
    }

    dispatch({
      type: actions_post["A" /* RETWEET_REQUEST */],
      data: post.id
    });
  }, [id]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      marginBottom: 10
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostImages, {
        images: post.Images
      }),
      actions: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet"), liked ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart") : /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["HeartOutlined"], {
        onClick: onLike
      }, "heart"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Popover"], {
        content: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
              children: "\uC218\uC815"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
              loading: deletePostLoading,
              onClick: clickDeleteBtn,
              type: "danger",
              children: "\uC0AD\uC81C"
            })]
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
              children: "\uC2E0\uACE0"
            })
          })
        }),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["EllipsisOutlined"], {})
      }, "more")],
      extra: id && id !== post.User.id && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_FollowBtn, {
        post: post
      }),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          float: 'right'
        },
        children: external_moment_default()(post.createdAt).fromNow()
      }), post.Retweet ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Card"], {
        cover: post.Retweet.Images[0] && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostImages, {
          images: post.Retweet.Images
        }),
        title: `${post.User.nickname}님이 리트윗 했습니다.`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            float: 'right'
          },
          children: external_moment_default()(post === null || post === void 0 ? void 0 : post.Retweet.createdAt).format('YYYY.MM.DD')
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Card"].Meta, {
          avatar: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: `/user/${(_post$Retweet = post.Retweet) === null || _post$Retweet === void 0 ? void 0 : _post$Retweet.User.id}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Avatar"], {
                children: post.User.nickname[0]
              })
            })
          }),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostCardContent, {
            postData: post.Retweet.content
          })
        })]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Card"].Meta, {
        avatar: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `/user/${post === null || post === void 0 ? void 0 : post.User.id}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Avatar"], {
              children: post.User.nickname[0]
            })
          })
        }),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostCardContent, {
          postData: post.content
        })
      })]
    }), commentFormOpened && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CommentForm, {
        post: post
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["List"], {
        renderItem: item => post.Comments.length ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Comment"], {
            content: item.content,
            avatar: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: `/user/${item === null || item === void 0 ? void 0 : item.User.id}`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Avatar"], {
                  children: post.User.nickname[0]
                })
              })
            }),
            author: item.User.nickname
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {}),
        header: `${post.Comments.length}개의 댓글`,
        dataSource: post.Comments,
        itemLayout: "horizontal"
      })]
    })]
  });
};

/* harmony default export */ var components_PostCard = __webpack_exports__["a"] = (PostCard);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nUeB":
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

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

/***/ "wfCx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar/avatar");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

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

// EXTERNAL MODULE: external "@redux-saga/core"
var core_ = __webpack_require__("nUeB");
var core_default = /*#__PURE__*/__webpack_require__.n(core_);

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
    console.log(JSON.stringify(response.data));
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
    console.log(`data: ${action.data}`);
    console.log(`lastId: ${action.lastId}`);
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

const loadMyInfoAPI = () => {
  console.log('요청 발생!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  return external_axios_default.a.get('/user');
};

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
      error: err.response.data
    });
  }
}

const loadUserAPI = data => external_axios_default.a.get(`/user/${data}`);

function* loadUser(action) {
  try {
    console.log('요청~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!');
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
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = 'http://localhost:3065';
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
  const sagaMiddleware = core_default()();
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