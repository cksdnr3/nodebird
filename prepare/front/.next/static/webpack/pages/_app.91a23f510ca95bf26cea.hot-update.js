webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, followRequestAction, unfollowRequestAction, signupRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followRequestAction", function() { return followRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowRequestAction", function() { return unfollowRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupRequestAction", function() { return signupRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var initialState = {
  loginLoading: false,
  loginDone: false,
  lgoinError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  signupLoading: false,
  signupDone: false,
  sginupError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  myInfo: null,
  signupData: {},
  loginData: {}
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGIN_REQUEST"],
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_REQUEST"]
  };
};
var followRequestAction = function followRequestAction() {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"]
  };
};
var unfollowRequestAction = function unfollowRequestAction() {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"]
  };
};
var signupRequestAction = function signupRequestAction(data) {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_REQUEST"],
    data: data
  };
};

var dummyGenerator = function dummyGenerator(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: 'cksdnr3',
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    Posts: [],
    Followings: [],
    Followers: []
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGIN_REQUEST"]:
        draft.loginLoading = true;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGIN_SUCCESS"]:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.myInfo = dummyGenerator(action.data);
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGIN_FAILURE"]:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_REQUEST"]:
        draft.logoutLoading = true;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_SUCCESS"]:
        draft.logoutLoading = false;
        draft.loginDone = false;
        draft.myInfo = null;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_FAILURE"]:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_REQUEST"]:
        draft.changeNicknameLoading = true;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_SUCCESS"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = false;
        draft.myInfo.nickname = action.data;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_FAILURE"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_REQUEST"]:
        draft.signupLoading = true;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_SUCCESS"]:
        draft.signupLoading = false;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_FAILURE"]:
        draft.signupLoading = false;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"]:
        draft.myInfo.Posts.unshift({
          id: action.data
        });
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_OF_ME"]:
        draft.myInfo.Posts = state.myInfo.Posts.filter(function (p) {
          return p.id !== action.data;
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          myInfo: _objectSpread(_objectSpread({}, state.myInfo), {}, {
            Posts: state.myInfo.Posts.filter(function (p) {
              return p.id !== action.data;
            })
          })
        });

      default:
        return state;
    }
  });
};

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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsZ29pbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ251cExvYWRpbmciLCJzaWdudXBEb25lIiwic2dpbnVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibXlJbmZvIiwic2lnbnVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiTE9HSU5fUkVRVUVTVCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJMT0dPVVRfUkVRVUVTVCIsImZvbGxvd1JlcXVlc3RBY3Rpb24iLCJGT0xMT1dfUkVRVUVTVCIsInVuZm9sbG93UmVxdWVzdEFjdGlvbiIsIlVORk9MTE9XX1JFUVVFU1QiLCJzaWdudXBSZXF1ZXN0QWN0aW9uIiwiU0lHTlVQX1JFUVVFU1QiLCJkdW1teUdlbmVyYXRvciIsIm5pY2tuYW1lIiwiaWQiLCJ2NCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMVVJFIiwibG9naW5FcnJvciIsImVycm9yIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsInVuc2hpZnQiLCJERUxFVEVfUE9TVF9PRl9NRSIsImZpbHRlciIsInAiXSwi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LE1BQU0sQ0FBQ3BCLElBQXZCO0FBQUEsU0FBMUIsQ0FBckI7QUFDQSwrQ0FDS21CLEtBREw7QUFFRXZCLGdCQUFNLGtDQUNEdUIsS0FBSyxDQUFDdkIsTUFETDtBQUVKbUIsaUJBQUssRUFBRUksS0FBSyxDQUFDdkIsTUFBTixDQUFhbUIsS0FBYixDQUFtQnNCLE1BQW5CLENBQTBCLFVBQUNDLENBQUQ7QUFBQSxxQkFBT0EsQ0FBQyxDQUFDekIsRUFBRixLQUFTTyxNQUFNLENBQUNwQixJQUF2QjtBQUFBLGFBQTFCO0FBRkg7QUFGUjs7QUFPRjtBQUNFLGVBQU9tQixLQUFQO0FBM0RKO0FBNkRELEdBOUR3RCxDQUF6QztBQUFBLENBQWhCOztBQWdFZUQsc0VBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45MWEyM2Y1MTBjYTk1YmYyNmNlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX1RPX01FLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gIERFTEVURV9QT1NUX09GX01FLFxyXG4gIEZPTExPV19SRVFVRVNULFxyXG4gIExPR0lOX0ZBSUxVUkUsXHJcbiAgTE9HSU5fUkVRVUVTVCxcclxuICBMT0dJTl9TVUNDRVNTLFxyXG4gIExPR09VVF9GQUlMVVJFLFxyXG4gIExPR09VVF9SRVFVRVNULFxyXG4gIExPR09VVF9TVUNDRVNTLFxyXG4gIFNJR05VUF9GQUlMVVJFLFxyXG4gIFNJR05VUF9SRVFVRVNULFxyXG4gIFNJR05VUF9TVUNDRVNTLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dpbkRvbmU6IGZhbHNlLFxyXG4gIGxnb2luRXJyb3I6IG51bGwsXHJcbiAgbG9nb3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nb3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nb3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnbnVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnbnVwRG9uZTogZmFsc2UsXHJcbiAgc2dpbnVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgbXlJbmZvOiBudWxsLFxyXG4gIHNpZ251cERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dPVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9sbG93UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFNJR05VUF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlHZW5lcmF0b3IgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiAnY2tzZG5yMycsXHJcbiAgaWQ6IHY0KCksXHJcbiAgUG9zdHM6IFtdLFxyXG4gIEZvbGxvd2luZ3M6IFtdLFxyXG4gIEZvbGxvd2VyczogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dpbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9naW5Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gZHVtbXlHZW5lcmF0b3IoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9naW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ2luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkRvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dvdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ291dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5teUluZm8ubmlja25hbWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWdudXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaWdudXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgREVMRVRFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5Qb3N0cyA9IHN0YXRlLm15SW5mby5Qb3N0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBteUluZm86IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm15SW5mbyxcclxuICAgICAgICAgIFBvc3RzOiBzdGF0ZS5teUluZm8uUG9zdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuXHJcbi8vIHJlZHV4LXRodW5rXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4vLyAgICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKTtcclxuLy8gICAgICAgICBheGlvc1xyXG4vLyAgICAgICAgICAgICAucG9zdCgnYXBpL2xvZ2luJylcclxuLy8gICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgfTtcclxuLy8gfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==