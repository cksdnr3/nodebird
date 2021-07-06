webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(login),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logout),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signup),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadMyInfo),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(changeNickname),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogout),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignup),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadMyInfo),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchChangeNickname),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);






var loginAPI = function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/login', data);
};

function login(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loginAPI, action.data);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGIN_SUCCESS"],
            data: response.data
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGIN_FAILURE"],
            error: _context.t0.response.data
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

var logoutAPI = function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/logout');
};

function logout() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logoutAPI);

        case 2:
          response = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_SUCCESS"],
            data: response.data
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](3);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_FAILURE"],
            error: _context2.t0.response.data
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[3, 8]]);
}

var signupAPI = function signupAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user', data);
};

function signup(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signup$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signupAPI, action.data);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["SIGNUP_SUCCESS"]
          });

        case 5:
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["SIGNUP_FAILURE"],
            error: _context3.t0.response.data
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}

var followAPI = function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch("/user/".concat(data, ".follow"));
};

function follow(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);

        case 3:
          response = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_SUCCESS"],
            data: response.data
          });

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_FAILURE"],
            error: _context4.t0.response.data
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

var unfollowAPI = function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/user/".concat(data, "/follow"));
};

function unfollow(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);

        case 3:
          response = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_SUCCESS"],
            data: response.data
          });

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_FAILURE"],
            error: _context5.t0.response.data
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

var loadMyInfoAPI = function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/user');
};

function loadMyInfo() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadMyInfo$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI);

        case 3:
          response = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_MY_INFO_SUCCESS"],
            data: response.data
          });

        case 6:
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_MY_INFO_FAILURE"],
            error: _context6.t0.response.data
          });

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

var changeNicknameAPI = function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch('/user/nickname', data);
};

function changeNickname(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function changeNickname$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);

        case 3:
          response = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["CHANGE_NICKNAME_SUCCESS"],
            data: response.data
          });

        case 6:
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["CHANGE_NICKNAME_FAILURE"],
            error: _context7.t0.response.data
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGIN_REQUEST"], login);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchLogout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogout$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_REQUEST"], logout);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchUnfollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchSignup() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignup$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["SIGNUP_REQUEST"], signup);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchLoadMyInfo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadMyInfo$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_MY_INFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchChangeNickname() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchChangeNickname$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["CHANGE_NICKNAME_REQUEST"], changeNickname);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogout), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignup), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname)]);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImxvZ291dCIsInNpZ251cCIsImZvbGxvdyIsInVuZm9sbG93IiwibG9hZE15SW5mbyIsImNoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nb3V0Iiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hTaWdudXAiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwidXNlclNhZ2EiLCJsb2dpbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJjYWxsIiwicmVzcG9uc2UiLCJwdXQiLCJ0eXBlIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUxVUkUiLCJlcnJvciIsImxvZ291dEFQSSIsIkxPR09VVF9TVUNDRVNTIiwiTE9HT1VUX0ZBSUxVUkUiLCJzaWdudXBBUEkiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMVVJFIiwiZm9sbG93QVBJIiwicGF0Y2giLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwidW5mb2xsb3dBUEkiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsImxvYWRNeUluZm9BUEkiLCJnZXQiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiY2hhbmdlTmlja25hbWVBUEkiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPR0lOX1JFUVVFU1QiLCJMT0dPVVRfUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlNJR05VUF9SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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TyxxRUFBRCxFQUEwQmhELGNBQTFCLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVRLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU15QyxvRUFBRyxDQUFDLENBQUNDLHFFQUFJLENBQUNqRCxVQUFELENBQUwsRUFBbUJpRCxxRUFBSSxDQUFDaEQsV0FBRCxDQUF2QixFQUNSZ0QscUVBQUksQ0FBQzdDLFdBQUQsQ0FESSxFQUNXNkMscUVBQUksQ0FBQy9DLFdBQUQsQ0FEZixFQUM4QitDLHFFQUFJLENBQUM5QyxhQUFELENBRGxDLEVBQ21EOEMscUVBQUksQ0FBQzVDLGVBQUQsQ0FEdkQsRUFDMEU0QyxxRUFBSSxDQUFDM0MsbUJBQUQsQ0FEOUUsQ0FBRCxDQUFUOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDVlNTNkMGJmOTVhNzk3NDBlOTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgZm9yayB9IGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cyc7XHJcbmltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgTE9HSU5fRkFJTFVSRSxcclxuICBMT0dJTl9SRVFVRVNULFxyXG4gIExPR0lOX1NVQ0NFU1MsXHJcbiAgTE9HT1VUX0ZBSUxVUkUsXHJcbiAgTE9HT1VUX1JFUVVFU1QsXHJcbiAgTE9HT1VUX1NVQ0NFU1MsXHJcbiAgU0lHTlVQX0ZBSUxVUkUsXHJcbiAgU0lHTlVQX1JFUVVFU1QsXHJcbiAgU0lHTlVQX1NVQ0NFU1MsXHJcbiAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmNvbnN0IGxvZ2luQVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2dvdXRBUEkgPSAoKSA9PiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvZ291dEFQSSk7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR09VVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dPVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzaWdudXBBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoc2lnbnVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTlVQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZm9sbG93QVBJID0gKGRhdGEpID0+IGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9LmZvbGxvd2ApO1xyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVuZm9sbG93QVBJID0gKGRhdGEpID0+IGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRNeUluZm9BUEkgPSAoKSA9PiBheGlvcy5nZXQoJy91c2VyJyk7XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lQVBJID0gKGRhdGEpID0+IGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIGRhdGEpO1xyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICAvLyB3aGlsZSAodHJ1ZSkge1xyXG4gIC8vICAgICB5aWVsZCB0YWtlKCdMT0dfSU5fUkVRVUVTVCcsIGxvZ2luKTtcclxuICAvLyB9XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dJTl9SRVFVRVNULCBsb2dpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR09VVF9SRVFVRVNULCBsb2dvdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ251cCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05VUF9SRVFVRVNULCBzaWdudXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dpbiksIGZvcmsod2F0Y2hMb2dvdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ251cCksIGZvcmsod2F0Y2hGb2xsb3cpLCBmb3JrKHdhdGNoVW5mb2xsb3cpLCBmb3JrKHdhdGNoTG9hZE15SW5mbyksIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSldKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9