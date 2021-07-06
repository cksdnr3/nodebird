webpackHotUpdate_N_E("pages/signup",{

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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");


var initialState = {
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
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOGIN_REQUEST"],
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_REQUEST"]
  };
};
var followRequestAction = function followRequestAction() {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"]
  };
};
var unfollowRequestAction = function unfollowRequestAction() {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"]
  };
};
var signupRequestAction = function signupRequestAction(data) {
  return {
    type: _actions_user__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_REQUEST"],
    data: data
  };
}; // const dummyGenerator = (data) => ({
//   ...data,
//   nickname: 'cksdnr3',
//   id: v4(),
//   Posts: [],
//   Followings: [],
//   Followers: [],
// });

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
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
        draft.myInfo.Posts = draft.myInfo.Posts.filter(function (p) {
          return p.id !== action.data.PostId;
        });
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
        draft.myInfo.Followings = draft.myInfo.Followings.filter(function (f) {
          return f.id !== action.data;
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ251cExvYWRpbmciLCJzaWdudXBEb25lIiwic2lnbnVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibXlJbmZvIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJMT0dJTl9SRVFVRVNUIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR09VVF9SRVFVRVNUIiwiZm9sbG93UmVxdWVzdEFjdGlvbiIsIkZPTExPV19SRVFVRVNUIiwidW5mb2xsb3dSZXF1ZXN0QWN0aW9uIiwiVU5GT0xMT1dfUkVRVUVTVCIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJTSUdOVVBfUkVRVUVTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMVVJFIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJuaWNrbmFtZSIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUG9zdHMiLCJ1bnNoaWZ0IiwiaWQiLCJERUxFVEVfUE9TVF9PRl9NRSIsImZpbHRlciIsInAiLCJQb3N0SWQiLCJGT0xMT1dfU1VDQ0VTUyIsIkZvbGxvd2luZ3MiLCJwdXNoIiwiVXNlcklkIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19TVUNDRVNTIiwiZiIsIlVORk9MTE9XX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBb0JPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsY0FBWSxFQUFFLEtBRFk7QUFFMUJDLFdBQVMsRUFBRSxLQUZlO0FBRzFCQyxZQUFVLEVBQUUsSUFIYztBQUkxQkMsZUFBYSxFQUFFLEtBSlc7QUFLMUJDLFlBQVUsRUFBRSxLQUxjO0FBTTFCQyxhQUFXLEVBQUUsSUFOYTtBQU8xQkMsZUFBYSxFQUFFLEtBUFc7QUFRMUJDLFlBQVUsRUFBRSxLQVJjO0FBUzFCQyxhQUFXLEVBQUUsSUFUYTtBQVUxQkMsdUJBQXFCLEVBQUUsS0FWRztBQVcxQkMsb0JBQWtCLEVBQUUsS0FYTTtBQVkxQkMscUJBQW1CLEVBQUUsSUFaSztBQWExQkMsZUFBYSxFQUFFLEtBYlc7QUFjMUJDLFlBQVUsRUFBRSxLQWRjO0FBZTFCQyxhQUFXLEVBQUUsSUFmYTtBQWdCMUJDLGlCQUFlLEVBQUUsS0FoQlM7QUFpQjFCQyxjQUFZLEVBQUUsS0FqQlk7QUFrQjFCQyxlQUFhLEVBQUUsSUFsQlc7QUFtQjFCQyxtQkFBaUIsRUFBRSxLQW5CTztBQW9CMUJDLGdCQUFjLEVBQUUsS0FwQlU7QUFxQjFCQyxpQkFBZSxFQUFFLElBckJTO0FBc0IxQkMsUUFBTSxFQUFFO0FBdEJrQixDQUFyQjtBQXlCQSxJQUFNQyxrQkFBa0IsR0FBRyxT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LEdBQTBCLEtBQTFCO0FBQ0FvQixhQUFLLENBQUNsQixlQUFOLEdBQXdCZ0IsTUFBTSxDQUFDSyxLQUEvQjtBQUNBOztBQUNGO0FBQVM7QUFqR1g7QUFtR0QsR0FwR3dELENBQXpDO0FBQUEsQ0FBaEI7O0FBc0dlUCxzRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuYjllMmVmNmU4YzU1ZGUyODU4ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsIERFTEVURV9QT1NUX09GX01FLCBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICBMT0dJTl9GQUlMVVJFLFxyXG4gIExPR0lOX1JFUVVFU1QsXHJcbiAgTE9HSU5fU1VDQ0VTUyxcclxuICBMT0dPVVRfRkFJTFVSRSxcclxuICBMT0dPVVRfUkVRVUVTVCxcclxuICBMT0dPVVRfU1VDQ0VTUyxcclxuICBTSUdOVVBfRkFJTFVSRSxcclxuICBTSUdOVVBfUkVRVUVTVCxcclxuICBTSUdOVVBfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2dpbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ2luRG9uZTogZmFsc2UsXHJcbiAgbG9naW5FcnJvcjogbnVsbCxcclxuICBsb2dvdXRMb2FkaW5nOiBmYWxzZSxcclxuICBsb2dvdXREb25lOiBmYWxzZSxcclxuICBsb2dvdXRFcnJvcjogbnVsbCxcclxuICBzaWdudXBMb2FkaW5nOiBmYWxzZSxcclxuICBzaWdudXBEb25lOiBmYWxzZSxcclxuICBzaWdudXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICBteUluZm86IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dPVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9sbG93UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFNJR05VUF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlHZW5lcmF0b3IgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAuLi5kYXRhLFxyXG4vLyAgIG5pY2tuYW1lOiAnY2tzZG5yMycsXHJcbi8vICAgaWQ6IHY0KCksXHJcbi8vICAgUG9zdHM6IFtdLFxyXG4vLyAgIEZvbGxvd2luZ3M6IFtdLFxyXG4vLyAgIEZvbGxvd2VyczogW10sXHJcbi8vIH0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ2luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dpbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9naW5Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dJTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dpbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9naW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR09VVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dvdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dvdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ2luRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5teUluZm8gPSBudWxsO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dvdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8ubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWdudXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaWdudXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ251cERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTlVQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnbnVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgZHJhZnQubXlJbmZvLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9PRl9NRTpcclxuICAgICAgZHJhZnQubXlJbmZvLlBvc3RzID0gZHJhZnQubXlJbmZvLlBvc3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8uRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8uRm9sbG93aW5ncyA9IGRyYWZ0Lm15SW5mby5Gb2xsb3dpbmdzLmZpbHRlcigoZikgPT4gZi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuLy8gcmVkdXgtdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4vLyAgICAgICAgIGF4aW9zXHJcbi8vICAgICAgICAgICAgIC5wb3N0KCdhcGkvbG9naW4nKVxyXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnIpKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9