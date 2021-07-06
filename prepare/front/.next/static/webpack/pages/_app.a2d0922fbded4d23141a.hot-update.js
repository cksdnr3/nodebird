webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deletePost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(like),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unlike),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDeletePost),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLike),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnlike),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);






var addPostAPI = function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', {
    content: data
  });
};

function addPost(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addPostAPI, action.data);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: response.data
          });

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: response.data.id
          });

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context.t0.response.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function deletePost(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deletePost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_SUCCESS"],
            data: action.data
          });

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["DELETE_POST_OF_ME"],
            data: action.data
          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_FAILURE"],
            error: _context2.t0.response.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

var addCommentAPI = function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/post/".concat(data.postId, "/comment"), data);
};

function addComment(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addCommentAPI, action.data);

        case 3:
          response = _context3.sent;
          console.log(JSON.stringify(response.data));
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            data: response.data
          });

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            error: _context3.t0.response.data
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

var loadPostsAPI = function loadPostsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/posts');
};

function loadPosts() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadPostsAPI);

        case 3:
          response = _context4.sent;
          console.log(JSON.stringify(response.data));
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_SUCCESS"],
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
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_FAILURE"],
            error: _context4.t0.response.data
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
}

var likeAPI = function likeAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("post/".concat(data, "/like"));
};

function like(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function like$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(likeAPI, action.data);

        case 3:
          response = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_SUCCESS"],
            data: response.data
          });

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_FAILURE"],
            error: _context5.t0.response.data
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

var unlikeAPI = function unlikeAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("post/".concat(data, "/like"));
};

function unlike(action) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlike$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(unlikeAPI, action.data);

        case 3:
          response = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_SUCCESS"],
            data: response.data
          });

        case 6:
          _context6.next = 13;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_FAILURE"],
            error: _context6.t0.response.data
          });

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchDeletePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDeletePost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_REQUEST"], deletePost);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchLoadPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["throttle"])(5000, _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchLike() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLike$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_REQUEST"], like);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchUnlike() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnlike$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_REQUEST"], unlike);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchDeletePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLike), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchUnlike)]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJhZGRQb3N0IiwiZGVsZXRlUG9zdCIsImFkZENvbW1lbnQiLCJsb2FkUG9zdHMiLCJsaWtlIiwidW5saWtlIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hEZWxldGVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaExpa2UiLCJ3YXRjaFVubGlrZSIsInBvc3RTYWdhIiwiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJjb250ZW50IiwiYWN0aW9uIiwiY2FsbCIsInJlc3BvbnNlIiwicHV0IiwidHlwZSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsImlkIiwiQUREX1BPU1RfRkFJTFVSRSIsImVycm9yIiwiREVMRVRFX1BPU1RfU1VDQ0VTUyIsIkRFTEVURV9QT1NUX09GX01FIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwibG9hZFBvc3RzQVBJIiwiZ2V0IiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsImxpa2VBUEkiLCJwYXRjaCIsIkxJS0VfU1VDQ0VTUyIsIkxJS0VfRkFJTFVSRSIsInVubGlrZUFQSSIsIlVOTElLRV9TVUNDRVNTIiwiVU5MSUtFX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiQUREX1BPU1RfUkVRVUVTVCIsIkRFTEVURV9QT1NUX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwidGhyb3R0bGUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxJS0VfUkVRVUVTVCIsIlVOTElLRV9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQU9VQSxPO21HQW1CQUMsVTttR0FvQkFDLFU7bUdBbUJBQyxTO21HQWtCQUMsSTttR0FrQkFDLE07bUdBZ0JBQyxZO21HQVFBQyxlO21HQUlBQyxlO29HQUlBQyxjO29HQUlBQyxTO29HQUlBQyxXO29HQUllQyxROztBQWpKekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRDtBQUFBLFNBQVVDLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxPQUFYLEVBQW9CO0FBQUVDLFdBQU8sRUFBRUg7QUFBWCxHQUFwQixDQUFWO0FBQUEsQ0FBbkI7O0FBRUEsU0FBVWQsT0FBVixDQUFrQmtCLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFcUIsaUJBQU1DLCtEQUFJLENBQUNOLFVBQUQsRUFBYUssTUFBTSxDQUFDSixJQUFwQixDQUFWOztBQUZyQjtBQUVVTSxrQkFGVjtBQUFBO0FBR0ksaUJBQU1DLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRUMsOERBREU7QUFFUlQsZ0JBQUksRUFBRU0sUUFBUSxDQUFDTjtBQUZQLFdBQUQsQ0FBVDs7QUFISjtBQUFBO0FBT0ksaUJBQU1PLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRUUsNERBREU7QUFFUlYsZ0JBQUksRUFBRU0sUUFBUSxDQUFDTixJQUFULENBQWNXO0FBRlosV0FBRCxDQUFUOztBQVBKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlJLGlCQUFNSiw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVJLDhEQURFO0FBRVJDLGlCQUFLLEVBQUUsWUFBSVAsUUFBSixDQUFhTjtBQUZaLFdBQUQsQ0FBVDs7QUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtQkEsU0FBVWIsVUFBVixDQUFxQmlCLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUksaUJBQU1HLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRU0saUVBREU7QUFFUmQsZ0JBQUksRUFBRUksTUFBTSxDQUFDSjtBQUZMLFdBQUQsQ0FBVDs7QUFGSjtBQUFBO0FBTUksaUJBQU1PLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRU8sK0RBREU7QUFFUmYsZ0JBQUksRUFBRUksTUFBTSxDQUFDSjtBQUZMLFdBQUQsQ0FBVDs7QUFOSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXSSxpQkFBTU8sOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFUSxpRUFERTtBQUVSSCxpQkFBSyxFQUFFLGFBQUlQLFFBQUosQ0FBYU47QUFGWixXQUFELENBQVQ7O0FBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0JBLElBQU1pQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNqQixJQUFEO0FBQUEsU0FBVUMsNENBQUssQ0FBQ0MsSUFBTixpQkFBb0JGLElBQUksQ0FBQ2tCLE1BQXpCLGVBQTJDbEIsSUFBM0MsQ0FBVjtBQUFBLENBQXRCOztBQUVBLFNBQVVaLFVBQVYsQ0FBcUJnQixNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXFCLGlCQUFNQywrREFBSSxDQUFDWSxhQUFELEVBQWdCYixNQUFNLENBQUNKLElBQXZCLENBQVY7O0FBRnJCO0FBRVVNLGtCQUZWO0FBR0lhLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxDQUFDQyxTQUFMLENBQWVoQixRQUFRLENBQUNOLElBQXhCLENBQVo7QUFISjtBQUlJLGlCQUFNTyw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVlLGlFQURFO0FBRVJ2QixnQkFBSSxFQUFFTSxRQUFRLENBQUNOO0FBRlAsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTSW1CLGlCQUFPLENBQUNOLEtBQVI7QUFUSjtBQVVJLGlCQUFNTiw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVnQixpRUFERTtBQUVSWCxpQkFBSyxFQUFFLGFBQUlQLFFBQUosQ0FBYU47QUFGWixXQUFELENBQVQ7O0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJBLElBQU15QixZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQU14Qiw0Q0FBSyxDQUFDeUIsR0FBTixDQUFVLFFBQVYsQ0FBTjtBQUFBLENBQXJCOztBQUVBLFNBQVVyQyxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFcUIsaUJBQU1nQiwrREFBSSxDQUFDb0IsWUFBRCxDQUFWOztBQUZyQjtBQUVVbkIsa0JBRlY7QUFHSWEsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWhCLFFBQVEsQ0FBQ04sSUFBeEIsQ0FBWjtBQUhKO0FBSUksaUJBQU1PLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRW1CLCtEQURFO0FBRVIzQixnQkFBSSxFQUFFTSxRQUFRLENBQUNOO0FBRlAsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNTyw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVvQiwrREFERTtBQUVSZixpQkFBSyxFQUFFLGFBQUlQLFFBQUosQ0FBYU47QUFGWixXQUFELENBQVQ7O0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0JBLElBQU02QixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDN0IsSUFBRDtBQUFBLFNBQVVDLDRDQUFLLENBQUM2QixLQUFOLGdCQUFvQjlCLElBQXBCLFdBQVY7QUFBQSxDQUFoQjs7QUFFQSxTQUFVVixJQUFWLENBQWVjLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVxQixpQkFBTUMsK0RBQUksQ0FBQ3dCLE9BQUQsRUFBVXpCLE1BQU0sQ0FBQ0osSUFBakIsQ0FBVjs7QUFGckI7QUFFVU0sa0JBRlY7QUFBQTtBQUdJLGlCQUFNQyw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUV1QiwwREFERTtBQUVSL0IsZ0JBQUksRUFBRU0sUUFBUSxDQUFDTjtBQUZQLFdBQUQsQ0FBVDs7QUFISjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUUltQixpQkFBTyxDQUFDTixLQUFSO0FBUko7QUFTSSxpQkFBTU4sOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFd0IsMERBREU7QUFFUm5CLGlCQUFLLEVBQUUsYUFBSVAsUUFBSixDQUFhTjtBQUZaLFdBQUQsQ0FBVDs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQkEsSUFBTWlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNqQyxJQUFEO0FBQUEsU0FBVUMsNENBQUssVUFBTCxnQkFBcUJELElBQXJCLFdBQVY7QUFBQSxDQUFsQjs7QUFFQSxTQUFVVCxNQUFWLENBQWlCYSxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXFCLGlCQUFNQywrREFBSSxDQUFDNEIsU0FBRCxFQUFZN0IsTUFBTSxDQUFDSixJQUFuQixDQUFWOztBQUZyQjtBQUVVTSxrQkFGVjtBQUFBO0FBR0ksaUJBQU1DLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRTBCLDREQURFO0FBRVJsQyxnQkFBSSxFQUFFTSxRQUFRLENBQUNOO0FBRlAsV0FBRCxDQUFUOztBQUhKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRSW1CLGlCQUFPLENBQUNOLEtBQVI7QUFSSjtBQVNJLGlCQUFNTiw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUUyQiw0REFERTtBQUVSdEIsaUJBQUssRUFBRSxhQUFJUCxRQUFKLENBQWFOO0FBRlosV0FBRCxDQUFUOztBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCQSxTQUFVUixZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtFLGlCQUFNNEMscUVBQVUsQ0FBQ0MsOERBQUQsRUFBbUJuRCxPQUFuQixDQUFoQjs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQSxTQUFVTyxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNMkMscUVBQVUsQ0FBQ0UsaUVBQUQsRUFBc0JuRCxVQUF0QixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVTyxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNMEMscUVBQVUsQ0FBQ0csaUVBQUQsRUFBc0JuRCxVQUF0QixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVTyxjQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNNkMsbUVBQVEsQ0FBQyxJQUFELEVBQU9DLCtEQUFQLEVBQTBCcEQsU0FBMUIsQ0FBZDs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVTyxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNd0MscUVBQVUsQ0FBQ00sMERBQUQsRUFBZXBELElBQWYsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVU8sV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTXVDLHFFQUFVLENBQUNPLDREQUFELEVBQWlCcEQsTUFBakIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVU8sUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTThDLDhEQUFHLENBQUMsQ0FBQ0MsK0RBQUksQ0FBQ3JELFlBQUQsQ0FBTCxFQUFxQnFELCtEQUFJLENBQUNuRCxlQUFELENBQXpCLEVBQ1JtRCwrREFBSSxDQUFDcEQsZUFBRCxDQURJLEVBQ2VvRCwrREFBSSxDQUFDbEQsY0FBRCxDQURuQixFQUNxQ2tELCtEQUFJLENBQUNqRCxTQUFELENBRHpDLEVBQ3NEaUQsK0RBQUksQ0FBQ2hELFdBQUQsQ0FEMUQsQ0FBRCxDQUFUOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTJkMDkyMmZiZGVkNGQyMzE0MWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBERUxFVEVfUE9TVF9GQUlMVVJFLCBERUxFVEVfUE9TVF9SRVFVRVNULCBERUxFVEVfUE9TVF9TVUNDRVNTLCBMSUtFX0ZBSUxVUkUsIExJS0VfUkVRVUVTVCwgTElLRV9TVUNDRVNTLCBMT0FEX1BPU1RfRkFJTFVSRSwgTE9BRF9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9TVUNDRVNTLCBVTkxJS0VfRkFJTFVSRSwgVU5MSUtFX1JFUVVFU1QsIFVOTElLRV9TVUNDRVNTIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIERFTEVURV9QT1NUX09GX01FIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuXHJcbmNvbnN0IGFkZFBvc3RBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdCgnL3Bvc3QnLCB7IGNvbnRlbnQ6IGRhdGEgfSk7XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLmlkLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBERUxFVEVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogREVMRVRFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBERUxFVEVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkZENvbW1lbnRBUEkgPSAoZGF0YSkgPT4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRQb3N0c0FQSSA9ICgpID0+IGF4aW9zLmdldCgnL3Bvc3RzJyk7XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsaWtlQVBJID0gKGRhdGEpID0+IGF4aW9zLnBhdGNoKGBwb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG5cclxuZnVuY3Rpb24qIGxpa2UoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChsaWtlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1bmxpa2VBUEkgPSAoZGF0YSkgPT4gYXhpb3MuZGVsZXRlKGBwb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG5cclxuZnVuY3Rpb24qIHVubGlrZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHVubGlrZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgLy8gd2hpbGUgKHRydWUpIHtcclxuICAvLyAgICAgeWllbGQgdGFrZSgnQUREX1BPU1RfUkVRVUVTVCcsIGFkZFBvc3QpO1xyXG4gIC8vIH1cclxuXHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRGVsZXRlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9QT1NUX1JFUVVFU1QsIGRlbGV0ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUkVRVUVTVCwgbGlrZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9SRVFVRVNULCB1bmxpa2UpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoQWRkUG9zdCksIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hEZWxldGVQb3N0KSwgZm9yayh3YXRjaExvYWRQb3N0cyksIGZvcmsod2F0Y2hMaWtlKSwgZm9yayh3YXRjaFVubGlrZSldKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9