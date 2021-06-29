webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




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
    type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGIN_REQUEST"],
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_REQUEST"]
  };
};
var followRequestAction = function followRequestAction() {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"]
  };
};
var unfollowRequestAction = function unfollowRequestAction() {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"]
  };
};
var signupRequestAction = function signupRequestAction(data) {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["SIGNUP_REQUEST"],
    data: data
  };
};

var dummyGenerator = function dummyGenerator(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: 'cksdnr3',
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
    Posts: [],
    Followings: [],
    Followers: []
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGIN_REQUEST"]:
        draft.loginLoading = true;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGIN_SUCCESS"]:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.myInfo = dummyGenerator(action.data);
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGIN_FAILURE"]:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_REQUEST"]:
        draft.logoutLoading = true;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_SUCCESS"]:
        draft.logoutLoading = false;
        draft.loginDone = false;
        draft.myInfo = null;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_FAILURE"]:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["CHANGE_NICKNAME_REQUEST"]:
        draft.changeNicknameLoading = true;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["CHANGE_NICKNAME_SUCCESS"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = false;
        draft.myInfo.nickname = action.data;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["CHANGE_NICKNAME_FAILURE"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["SIGNUP_REQUEST"]:
        draft.signupLoading = true;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["SIGNUP_SUCCESS"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          signupLoading: false
        });

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["SIGNUP_FAILURE"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          signupLoading: false
        });

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          myInfo: _objectSpread(_objectSpread({}, state.myInfo), {}, {
            Posts: [{
              id: action.data
            }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.myInfo.Posts))
          })
        });

      case _actions_user__WEBPACK_IMPORTED_MODULE_4__["DELETE_POST_OF_ME"]:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsZ29pbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ251cExvYWRpbmciLCJzaWdudXBEb25lIiwic2dpbnVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibXlJbmZvIiwic2lnbnVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiTE9HSU5fUkVRVUVTVCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJMT0dPVVRfUkVRVUVTVCIsImZvbGxvd1JlcXVlc3RBY3Rpb24iLCJGT0xMT1dfUkVRVUVTVCIsInVuZm9sbG93UmVxdWVzdEFjdGlvbiIsIlVORk9MTE9XX1JFUVVFU1QiLCJzaWdudXBSZXF1ZXN0QWN0aW9uIiwiU0lHTlVQX1JFUVVFU1QiLCJkdW1teUdlbmVyYXRvciIsIm5pY2tuYW1lIiwiaWQiLCJ2NCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMVVJFIiwibG9naW5FcnJvciIsImVycm9yIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIkRFTEVURV9QT1NUX09GX01FIiwiZmlsdGVyIiwicCJdLCJtYXBwaW5ncyI6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QUFDdkIsTUFBTixDQUFhbUIsS0FBYixDQUFtQnFCLE1BQW5CLENBQTBCLFVBQUNDLENBQUQ7QUFBQSxxQkFBT0EsQ0FBQyxDQUFDeEIsRUFBRixLQUFTTyxNQUFNLENBQUNwQixJQUF2QjtBQUFBLGFBQTFCO0FBRkg7QUFGUjs7QUFPRjtBQUNFLGVBQU9tQixLQUFQO0FBbkVKO0FBcUVELEdBdEV3RCxDQUF6QztBQUFBLENBQWhCOztBQXdFZUQsc0VBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmNjNGE3YmNmZTUxMDMxNzYwZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9UT19NRSxcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBERUxFVEVfUE9TVF9PRl9NRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBMT0dJTl9GQUlMVVJFLFxyXG4gIExPR0lOX1JFUVVFU1QsXHJcbiAgTE9HSU5fU1VDQ0VTUyxcclxuICBMT0dPVVRfRkFJTFVSRSxcclxuICBMT0dPVVRfUkVRVUVTVCxcclxuICBMT0dPVVRfU1VDQ0VTUyxcclxuICBTSUdOVVBfRkFJTFVSRSxcclxuICBTSUdOVVBfUkVRVUVTVCxcclxuICBTSUdOVVBfU1VDQ0VTUyxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG59IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ2luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9naW5Eb25lOiBmYWxzZSxcclxuICBsZ29pbkVycm9yOiBudWxsLFxyXG4gIGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ291dERvbmU6IGZhbHNlLFxyXG4gIGxvZ291dEVycm9yOiBudWxsLFxyXG4gIHNpZ251cExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ251cERvbmU6IGZhbHNlLFxyXG4gIHNnaW51cEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIG15SW5mbzogbnVsbCxcclxuICBzaWdudXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR0lOX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogTE9HT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1JlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bmZvbGxvd1JlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTSUdOVVBfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15R2VuZXJhdG9yID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBuaWNrbmFtZTogJ2Nrc2RucjMnLFxyXG4gIGlkOiB2NCgpLFxyXG4gIFBvc3RzOiBbXSxcclxuICBGb2xsb3dpbmdzOiBbXSxcclxuICBGb2xsb3dlcnM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0dJTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dpbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9naW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ2luRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mbyA9IGR1bW15R2VuZXJhdG9yKGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ291dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ291dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9naW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm15SW5mbyA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dvdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubXlJbmZvLm5pY2tuYW1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaWdudXBMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0lHTlVQX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2lnbnVwTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG15SW5mbzoge1xyXG4gICAgICAgICAgLi4uc3RhdGUubXlJbmZvLFxyXG4gICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5teUluZm8uUG9zdHNdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX09GX01FOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG15SW5mbzoge1xyXG4gICAgICAgICAgLi4uc3RhdGUubXlJbmZvLFxyXG4gICAgICAgICAgUG9zdHM6IHN0YXRlLm15SW5mby5Qb3N0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuLy8gcmVkdXgtdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4vLyAgICAgICAgIGF4aW9zXHJcbi8vICAgICAgICAgICAgIC5wb3N0KCdhcGkvbG9naW4nKVxyXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnIpKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9