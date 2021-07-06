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
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch("/user/".concat(data, "/follow"));
};

function follow(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          console.log(action.data);
          _context4.next = 4;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);

        case 4:
          response = _context4.sent;
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_SUCCESS"],
            data: response.data
          });

        case 7:
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_FAILURE"],
            error: _context4.t0.response.data
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImxvZ291dCIsInNpZ251cCIsImZvbGxvdyIsInVuZm9sbG93IiwibG9hZE15SW5mbyIsImNoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nb3V0Iiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hTaWdudXAiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwidXNlclNhZ2EiLCJsb2dpbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJjYWxsIiwicmVzcG9uc2UiLCJwdXQiLCJ0eXBlIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUxVUkUiLCJlcnJvciIsImxvZ291dEFQSSIsIkxPR09VVF9TVUNDRVNTIiwiTE9HT1VUX0ZBSUxVUkUiLCJzaWdudXBBUEkiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMVVJFIiwiZm9sbG93QVBJIiwicGF0Y2giLCJjb25zb2xlIiwibG9nIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuZm9sbG93QVBJIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJsb2FkTXlJbmZvQVBJIiwiZ2V0IiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsImNoYW5nZU5pY2tuYW1lQVBJIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0dJTl9SRVFVRVNUIiwiTE9HT1VUX1JFUVVFU1QiLCJGT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1JFUVVFU1QiLCJTSUdOVVBfUkVRVUVTVCIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBp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QUlBLFNBQVVRLG1CQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNb0MscUVBQVUsQ0FBQ08scUVBQUQsRUFBMEJsRCxjQUExQixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVUSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNMkMsb0VBQUcsQ0FBQyxDQUFDQyxxRUFBSSxDQUFDbkQsVUFBRCxDQUFMLEVBQW1CbUQscUVBQUksQ0FBQ2xELFdBQUQsQ0FBdkIsRUFDUmtELHFFQUFJLENBQUMvQyxXQUFELENBREksRUFDVytDLHFFQUFJLENBQUNqRCxXQUFELENBRGYsRUFDOEJpRCxxRUFBSSxDQUFDaEQsYUFBRCxDQURsQyxFQUNtRGdELHFFQUFJLENBQUM5QyxlQUFELENBRHZELEVBRVI4QyxxRUFBSSxDQUFDN0MsbUJBQUQsQ0FGSSxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ZDhkYTQzZDUwOGQxY2JkOTkzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsLCBmb3JrIH0gZnJvbSAnQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzJztcclxuaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9HSU5fRkFJTFVSRSwgTE9HSU5fUkVRVUVTVCwgTE9HSU5fU1VDQ0VTUywgTE9HT1VUX0ZBSUxVUkUsIExPR09VVF9SRVFVRVNULCBMT0dPVVRfU1VDQ0VTUywgU0lHTlVQX0ZBSUxVUkUsIFNJR05VUF9SRVFVRVNULCBTSUdOVVBfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUyB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcblxyXG5jb25zdCBsb2dpbkFQSSA9IChkYXRhKSA9PiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbG9nb3V0QVBJID0gKCkgPT4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0Jyk7XHJcblxyXG5mdW5jdGlvbiogbG9nb3V0KCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2dvdXRBUEkpO1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dPVVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2lnbnVwQVBJID0gKGRhdGEpID0+IGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcblxyXG5mdW5jdGlvbiogc2lnbnVwKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKHNpZ251cEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTlVQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZvbGxvd0FQSSA9IChkYXRhKSA9PiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1bmZvbGxvd0FQSSA9IChkYXRhKSA9PiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2FkTXlJbmZvQVBJID0gKCkgPT4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZUFQSSA9IChkYXRhKSA9PiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCBkYXRhKTtcclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgLy8gd2hpbGUgKHRydWUpIHtcclxuICAvLyAgICAgeWllbGQgdGFrZSgnTE9HX0lOX1JFUVVFU1QnLCBsb2dpbik7XHJcbiAgLy8gfVxyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dvdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dPVVRfUkVRVUVTVCwgbG9nb3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWdudXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOVVBfUkVRVUVTVCwgc2lnbnVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoTG9naW4pLCBmb3JrKHdhdGNoTG9nb3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWdudXApLCBmb3JrKHdhdGNoRm9sbG93KSwgZm9yayh3YXRjaFVuZm9sbG93KSwgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKV0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=