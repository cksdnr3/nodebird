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
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogout),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignup),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadMyInfo),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);






var loginAPI = function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('user/login', data);
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
} // function logoutAPI() {
//   return axios.post('api/logout');
// }


function logout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_SUCCESS"]
          });

        case 3:
          _context2.next = 9;
          break;

        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_FAILURE"],
            error: _context2.t0.response.data
          });

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 5]]);
}

function signupAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user', data);
}

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

function follow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_SUCCESS"],
            data: action.data
          });

        case 3:
          _context4.next = 9;
          break;

        case 5:
          _context4.prev = 5;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_FAILURE"],
            error: _context4.t0.response.data
          });

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 5]]);
}

function unfollow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_SUCCESS"],
            data: action.data
          });

        case 3:
          _context5.next = 9;
          break;

        case 5:
          _context5.prev = 5;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_FAILURE"],
            error: _context5.t0.response.data
          });

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 5]]);
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

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGIN_REQUEST"], login);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLogout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogout$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_REQUEST"], logout);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchUnfollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchSignup() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignup$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["SIGNUP_REQUEST"], signup);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchLoadMyInfo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadMyInfo$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_MY_INFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogout), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignup), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo)]);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImxvZ291dCIsInNpZ251cCIsImZvbGxvdyIsInVuZm9sbG93IiwibG9hZE15SW5mbyIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoU2lnbnVwIiwid2F0Y2hMb2FkTXlJbmZvIiwidXNlclNhZ2EiLCJsb2dpbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJjYWxsIiwicmVzcG9uc2UiLCJwdXQiLCJ0eXBlIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUxVUkUiLCJlcnJvciIsIkxPR09VVF9TVUNDRVNTIiwiTE9HT1VUX0ZBSUxVUkUiLCJzaWdudXBBUEkiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMVVJFIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwibG9hZE15SW5mb0FQSSIsImdldCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiTE9HSU5fUkVRVUVTVCIsIkxPR09VVF9SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19SRVFVRVNUIiwiU0lHTlVQX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FTVUEsSzttR0FtQkFDLE07bUdBa0JBQyxNO21HQWNBQyxNO21HQWFBQyxRO21HQWdCQUMsVTttR0FlQUMsVTttR0FPQUMsVzttR0FRQUMsVztvR0FJQUMsYTtvR0FJQUMsVztvR0FJQUMsZTtvR0FJZUMsUTs7QUF2SXpCO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxR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Q0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVU0sYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTTZCLHFFQUFVLENBQUNJLDhEQUFELEVBQW1CdEMsUUFBbkIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVU0sV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTTRCLHFFQUFVLENBQUNLLDREQUFELEVBQWlCekMsTUFBakIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVVMsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTTJCLHFFQUFVLENBQUNNLGtFQUFELEVBQXVCdkMsVUFBdkIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVU8sUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTWlDLG9FQUFHLENBQUMsQ0FBQ0MscUVBQUksQ0FBQ3hDLFVBQUQsQ0FBTCxFQUFtQndDLHFFQUFJLENBQUN2QyxXQUFELENBQXZCLEVBQ1J1QyxxRUFBSSxDQUFDcEMsV0FBRCxDQURJLEVBQ1dvQyxxRUFBSSxDQUFDdEMsV0FBRCxDQURmLEVBQzhCc0MscUVBQUksQ0FBQ3JDLGFBQUQsQ0FEbEMsRUFDbURxQyxxRUFBSSxDQUFDbkMsZUFBRCxDQUR2RCxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wZDIzZGU4Y2M1OTY0NjYxYmEyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsLCBmb3JrIH0gZnJvbSAnQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzJztcclxuaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9HSU5fRkFJTFVSRSwgTE9HSU5fUkVRVUVTVCxcclxuICBMT0dJTl9TVUNDRVNTLCBMT0dPVVRfRkFJTFVSRSwgTE9HT1VUX1JFUVVFU1QsIExPR09VVF9TVUNDRVNTLCBTSUdOVVBfRkFJTFVSRSwgU0lHTlVQX1JFUVVFU1QsXHJcbiAgU0lHTlVQX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MgfSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xyXG5cclxuY29uc3QgbG9naW5BUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgndXNlci9sb2dpbicsIGRhdGEpO1xyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gbG9nb3V0QVBJKCkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KCdhcGkvbG9nb3V0Jyk7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dvdXRBUEkpO1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dPVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnbnVwQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ251cChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChzaWdudXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2FkTXlJbmZvQVBJID0gKCkgPT4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICAvLyB3aGlsZSAodHJ1ZSkge1xyXG4gIC8vICAgICB5aWVsZCB0YWtlKCdMT0dfSU5fUkVRVUVTVCcsIGxvZ2luKTtcclxuICAvLyB9XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dJTl9SRVFVRVNULCBsb2dpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpIHtcclxuICAvLyB3aGlsZSAodHJ1ZSkge1xyXG4gIC8vICAgICB5aWVsZCB0YWtlKCdMT0dfT1VUX1JFUVVFU1QnLCBsb2dvdXQpO1xyXG4gIC8vIH1cclxuXHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dPVVRfUkVRVUVTVCwgbG9nb3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWdudXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOVVBfUkVRVUVTVCwgc2lnbnVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaExvZ2luKSwgZm9yayh3YXRjaExvZ291dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnbnVwKSwgZm9yayh3YXRjaEZvbGxvdyksIGZvcmsod2F0Y2hVbmZvbGxvdyksIGZvcmsod2F0Y2hMb2FkTXlJbmZvKV0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=