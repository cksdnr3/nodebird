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
        draft.signupError = action.error;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"]:
        draft.myInfo.Posts.unshift({
          id: action.data
        });
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_OF_ME"]:
        draft.myInfo.Posts = draft.myInfo.Posts.filter(function (p) {
          return p.id !== action.data;
        });
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"]:
        draft.followLoading = true;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"]:
        draft.followLoading = false;
        draft.followDone = true;
        draft.myInfo.Followings.push({
          id: action.data
        });
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"]:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"]:
        draft.unfollowLoading = true;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"]:
        draft.unfollowLoading = false;
        break;

      case _actions_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"]:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      default:
        break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsZ29pbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ251cExvYWRpbmciLCJzaWdudXBEb25lIiwic2lnbnVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJteUluZm8iLCJzaWdudXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJMT0dJTl9SRVFVRVNUIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR09VVF9SRVFVRVNUIiwiZm9sbG93UmVxdWVzdEFjdGlvbiIsIkZPTExPV19SRVFVRVNUIiwidW5mb2xsb3dSZXF1ZXN0QWN0aW9uIiwiVU5GT0xMT1dfUkVRVUVTVCIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJTSUdOVVBfUkVRVUVTVCIsImR1bW15R2VuZXJhdG9yIiwibmlja25hbWUiLCJpZCIsInY0IiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUxVUkUiLCJsb2dpbkVycm9yIiwiZXJyb3IiLCJMT0dPVVRfU1VDQ0VTUyIsIkxPR09VVF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwidW5zaGlmdCIsIkRFTEVURV9QT1NUX09GX01FIiwiZmlsdGVyIiwicCIsIkZPTExPV19TVUNDRVNTIiwicHVzaCIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQXVCTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGNBQVksRUFBRSxLQURZO0FBRTFCQyxXQUFTLEVBQUUsS0FGZTtBQUcxQkMsWUFBVSxFQUFFLElBSGM7QUFJMUJDLGVBQWEsRUFBRSxLQUpXO0FBSzFCQyxZQUFVLEVBQUUsS0FMYztBQU0xQkMsYUFBVyxFQUFFLElBTmE7QUFPMUJDLGVBQWEsRUFBRSxLQVBXO0FBUTFCQyxZQUFVLEVBQUUsS0FSYztBQVMxQkMsYUFBVyxFQUFFLElBVGE7QUFVMUJDLHVCQUFxQixFQUFFLEtBVkc7QUFXMUJDLG9CQUFrQixFQUFFLEtBWE07QUFZMUJDLHFCQUFtQixFQUFFLElBWks7QUFhMUJDLGVBQWEsRUFBRSxLQWJXO0FBYzFCQyxZQUFVLEVBQUUsS0FkYztBQWUxQkMsYUFBVyxFQUFFLElBZmE7QUFnQjFCQyxpQkFBZSxFQUFFLEtBaEJTO0FBaUIxQkMsY0FBWSxFQUFFLEtBakJZO0FBa0IxQkMsZUFBYSxFQUFFLElBbEJXO0FBbUIxQkMsUUFBTSxFQUFFLElBbkJrQjtBQW9CMUJDLFlBQVUsRUFBRSxFQXBCYztBQXFCMUJDLFdBQVMsRUFBRTtBQXJCZSxDQUFyQjtBQXdCQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLElBQUQ7QUFBQSxTQUFXO0FBQzNDQyxRQUFJLEVBQUVDLDJEQURxQztBQUUzQ0YsUUFBSSxFQUFKQTtBQUYyQyxHQUFYO0FBQUEsQ0FBM0I7QUFLQSxJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCO0FBQUEs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QUFMO0FBQ0VyQixhQUFLLENBQUM3QixlQUFOLEdBQXdCLEtBQXhCO0FBQ0E2QixhQUFLLENBQUMzQixhQUFOLEdBQXNCeUIsTUFBTSxDQUFDTSxLQUE3QjtBQUNBOztBQUNGO0FBQVM7QUE1RVg7QUE4RUQsR0EvRXdELENBQXpDO0FBQUEsQ0FBaEI7O0FBaUZlUixzRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFkMDZmZmI1ZmIyYjNhYmJlMWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfVE9fTUUsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgREVMRVRFX1BPU1RfT0ZfTUUsXHJcbiAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgTE9HSU5fRkFJTFVSRSxcclxuICBMT0dJTl9SRVFVRVNULFxyXG4gIExPR0lOX1NVQ0NFU1MsXHJcbiAgTE9HT1VUX0ZBSUxVUkUsXHJcbiAgTE9HT1VUX1JFUVVFU1QsXHJcbiAgTE9HT1VUX1NVQ0NFU1MsXHJcbiAgU0lHTlVQX0ZBSUxVUkUsXHJcbiAgU0lHTlVQX1JFUVVFU1QsXHJcbiAgU0lHTlVQX1NVQ0NFU1MsXHJcbiAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dpbkRvbmU6IGZhbHNlLFxyXG4gIGxnb2luRXJyb3I6IG51bGwsXHJcbiAgbG9nb3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nb3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nb3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnbnVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnbnVwRG9uZTogZmFsc2UsXHJcbiAgc2lnbnVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgbXlJbmZvOiBudWxsLFxyXG4gIHNpZ251cERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dPVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9sbG93UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFNJR05VUF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlHZW5lcmF0b3IgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiAnY2tzZG5yMycsXHJcbiAgaWQ6IHY0KCksXHJcbiAgUG9zdHM6IFtdLFxyXG4gIEZvbGxvd2luZ3M6IFtdLFxyXG4gIEZvbGxvd2VyczogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dpbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9naW5Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gZHVtbXlHZW5lcmF0b3IoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9naW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ2luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkRvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dvdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ291dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5teUluZm8ubmlja25hbWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWdudXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaWdudXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWdudXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5teUluZm8uUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5teUluZm8uUG9zdHMgPSBkcmFmdC5teUluZm8uUG9zdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuLy8gcmVkdXgtdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4vLyAgICAgICAgIGF4aW9zXHJcbi8vICAgICAgICAgICAgIC5wb3N0KCdhcGkvbG9naW4nKVxyXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnIpKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9