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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");


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
        draft.myInfo.Posts = draft.myInfo.Posts.filter(function (p) {
          return p.id !== action.data;
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsZ29pbkVycm9yIiwibG9nb3V0TG9hZGluZyIsImxvZ291dERvbmUiLCJsb2dvdXRFcnJvciIsInNpZ251cExvYWRpbmciLCJzaWdudXBEb25lIiwic2lnbnVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibXlJbmZvIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJMT0dJTl9SRVFVRVNUIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR09VVF9SRVFVRVNUIiwiZm9sbG93UmVxdWVzdEFjdGlvbiIsIkZPTExPV19SRVFVRVNUIiwidW5mb2xsb3dSZXF1ZXN0QWN0aW9uIiwiVU5GT0xMT1dfUkVRVUVTVCIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJTSUdOVVBfUkVRVUVTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMVVJFIiwibG9naW5FcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkxPR09VVF9TVUNDRVNTIiwiTE9HT1VUX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwibmlja25hbWUiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlBvc3RzIiwidW5zaGlmdCIsImlkIiwiREVMRVRFX1BPU1RfT0ZfTUUiLCJmaWx0ZXIiLCJwIiwiRk9MTE9XX1NVQ0NFU1MiLCJGb2xsb3dpbmdzIiwicHVzaCIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfU1VDQ0VTUyIsImYiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTBCTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGNBQVksRUFBRSxLQURZO0FBRTFCQyxXQUFTLEVBQUUsS0FGZTtBQUcxQkMsWUFBVSxFQUFFLElBSGM7QUFJMUJDLGVBQWEsRUFBRSxLQUpXO0FBSzFCQyxZQUFVLEVBQUUsS0FMYztBQU0xQkMsYUFBVyxFQUFFLElBTmE7QUFPMUJDLGVBQWEsRUFBRSxLQVBXO0FBUTFCQyxZQUFVLEVBQUUsS0FSYztBQVMxQkMsYUFBVyxFQUFFLElBVGE7QUFVMUJDLHVCQUFxQixFQUFFLEtBVkc7QUFXMUJDLG9CQUFrQixFQUFFLEtBWE07QUFZMUJDLHFCQUFtQixFQUFFLElBWks7QUFhMUJDLGVBQWEsRUFBRSxLQWJXO0FBYzFCQyxZQUFVLEVBQUUsS0FkYztBQWUxQkMsYUFBVyxFQUFFLElBZmE7QUFnQjFCQyxpQkFBZSxFQUFFLEtBaEJTO0FBaUIxQkMsY0FBWSxFQUFFLEtBakJZO0FBa0IxQkMsZUFBYSxFQUFFLElBbEJXO0FBbUIxQkMsbUJBQWlCLEVBQUUsS0FuQk87QUFvQjFCQyxnQkFBYyxFQUFFLEtBcEJVO0FBcUIxQkMsaUJBQWUsRUFBRSxJQXJCUztBQXNCMUJDLFFBQU0sRUFBRTtBQXRCa0IsQ0FBckI7QUF5QkEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJB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Z0IsTUFBTSxDQUFDTSxLQUEvQjtBQUNBOztBQUNGO0FBQVM7QUFqR1g7QUFtR0QsR0FwR3dELENBQXpDO0FBQUEsQ0FBaEI7O0FBc0dlUixzRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNhNmZhYmU4YTAwZTJiNzdiY2NiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfVE9fTUUsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgREVMRVRFX1BPU1RfT0ZfTUUsXHJcbiAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgTE9HSU5fRkFJTFVSRSxcclxuICBMT0dJTl9SRVFVRVNULFxyXG4gIExPR0lOX1NVQ0NFU1MsXHJcbiAgTE9HT1VUX0ZBSUxVUkUsXHJcbiAgTE9HT1VUX1JFUVVFU1QsXHJcbiAgTE9HT1VUX1NVQ0NFU1MsXHJcbiAgU0lHTlVQX0ZBSUxVUkUsXHJcbiAgU0lHTlVQX1JFUVVFU1QsXHJcbiAgU0lHTlVQX1NVQ0NFU1MsXHJcbiAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dpbkRvbmU6IGZhbHNlLFxyXG4gIGxnb2luRXJyb3I6IG51bGwsXHJcbiAgbG9nb3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nb3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nb3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnbnVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnbnVwRG9uZTogZmFsc2UsXHJcbiAgc2lnbnVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgbXlJbmZvOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR0lOX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogTE9HT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1JlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bmZvbGxvd1JlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTSUdOVVBfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbi8vIGNvbnN0IGR1bW15R2VuZXJhdG9yID0gKGRhdGEpID0+ICh7XHJcbi8vICAgLi4uZGF0YSxcclxuLy8gICBuaWNrbmFtZTogJ2Nrc2RucjMnLFxyXG4vLyAgIGlkOiB2NCgpLFxyXG4vLyAgIFBvc3RzOiBbXSxcclxuLy8gICBGb2xsb3dpbmdzOiBbXSxcclxuLy8gICBGb2xsb3dlcnM6IFtdLFxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0dJTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dpbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9naW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ2luRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm15SW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9naW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ2luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dPVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nb3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dpbkRvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gbnVsbDtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ291dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nb3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm15SW5mby5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTlVQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTlVQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ251cExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnbnVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnbnVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWdudXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmVycm9yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5teUluZm8uUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5teUluZm8uUG9zdHMgPSBkcmFmdC5teUluZm8uUG9zdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZXJyb3IpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5teUluZm8uRm9sbG93aW5ncyA9IGRyYWZ0Lm15SW5mby5Gb2xsb3dpbmdzLmZpbHRlcigoZikgPT4gZi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubXlJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuLy8gcmVkdXgtdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4vLyAgICAgICAgIGF4aW9zXHJcbi8vICAgICAgICAgICAgIC5wb3N0KCdhcGkvbG9naW4nKVxyXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnIpKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9