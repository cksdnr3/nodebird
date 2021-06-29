webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, dummuPostsGenerator, addPostRequestAction, deletePostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummuPostsGenerator", function() { return dummuPostsGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostRequestAction", function() { return deletePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");




var initialState = {
  mainPosts: [],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null
};
var dummuPostsGenerator = function dummuPostsGenerator(number) {
  return Array(20).fill().map(function () {
    return {
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      User: {
        id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.imageUrl()
      }],
      Comments: [{
        User: {
          id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
      }]
    };
  });
};
var addPostRequestAction = function addPostRequestAction(data) {
  return {
    type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
    data: data
  };
};
var deletePostRequestAction = function deletePostRequestAction(data) {
  return {
    type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_REQUEST"],
    data: data
  };
};
var addCommentRequestAction = function addCommentRequestAction(data) {
  return {
    type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"],
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.text,
    User: {
      id: data.myInfo.id,
      nickname: data.myInfo.nickname
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
    User: {
      id: data.myInfo.id,
      nickname: data.myInfo.nickname
    },
    content: data.content
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"]:
        draft.addPostLoading = false;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"]:
        draft.addPostLoading = true;
        draft.addPostLoading = false; // immer 사용

        draft.mainPosts.unshift(dummyPost(action.data)); // immer 사용 X
        // [dummyPost(action.data), ...state.mainPosts];

        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"]:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_REQUEST"]:
        draft.deletePostLoading = true;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_SUCCESS"]:
        draft.deletePostLoading = false;
        draft.deletePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(function (p) {
          return p.id !== action.data;
        });
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_FAILURE"]:
        draft.deletePostLoading = false;
        draft.deletePostError = action.error;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"]:
        draft.addCommentLoading = true;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"]:
        draft.addCommentDone = true;
        draft.addCommentLoading = false;
        draft.mainPosts.find(function (p) {
          return p.id === action.data.postId;
        }).Comments.unshift(dummyComment(action.data)); //   draft.mainPosts.forEach((post) => {
        //     if (post.id === action.data.postId) {
        //       post.Comments.unshift(dummyComment(action.data));
        //     }
        //   });

        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"]:
        draft.addCommentError = action.error;
        draft.addCommentLoading = false;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJkZWxldGVQb3N0TG9hZGluZyIsImRlbGV0ZVBvc3REb25lIiwiZGVsZXRlUG9zdEVycm9yIiwiZHVtbXVQb3N0c0dlbmVyYXRvciIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwidjQiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiaW1hZ2VVcmwiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJkZWxldGVQb3N0UmVxdWVzdEFjdGlvbiIsIkRFTEVURV9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkdW1teVBvc3QiLCJ0ZXh0IiwibXlJbmZvIiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiQUREX1BPU1RfU1VDQ0VTUyIsInVuc2hpZnQiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJERUxFVEVfUE9TVF9TVUNDRVNTIiwiZmlsdGVyIiwicCIsIkRFTEVURV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiZmluZCIsInBvc3RJZCIsIkFERF9DT01NRU5UX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtB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Q0E7O0FBQ0YsV0FBS3VCLGlFQUFMO0FBQ0VSLGFBQUssQ0FBQ3hDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0F3QyxhQUFLLENBQUN0QyxlQUFOLEdBQXdCb0MsTUFBTSxDQUFDTSxLQUEvQjtBQUNBOztBQUNGLFdBQUtiLGlFQUFMO0FBQ0VTLGFBQUssQ0FBQzNDLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0E7O0FBQ0YsV0FBS29ELGlFQUFMO0FBQ0VULGFBQUssQ0FBQzFDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTBDLGFBQUssQ0FBQzNDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0EyQyxhQUFLLENBQUNoRCxTQUFOLENBQWdCMEQsSUFBaEIsQ0FBcUIsVUFBQ0gsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUN2QyxFQUFGLEtBQVM4QixNQUFNLENBQUNiLElBQVAsQ0FBWTBCLE1BQTVCO0FBQUEsU0FBckIsRUFDRzdCLFFBREgsQ0FDWW9CLE9BRFosQ0FDb0JQLFlBQVksQ0FBQ0csTUFBTSxDQUFDYixJQUFSLENBRGhDLEVBSEYsQ0FLRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNGLFdBQUsyQixpRUFBTDtBQUNFWixhQUFLLENBQUN6QyxlQUFOLEdBQXdCdUMsTUFBTSxDQUFDTSxLQUEvQjtBQUNBSixhQUFLLENBQUMzQyxpQkFBTixHQUEwQixLQUExQjtBQUNBOztBQUVGO0FBQVM7QUEvQ1g7QUFpREQsR0FsRHdELENBQXpDO0FBQUEsQ0FBaEI7O0FBb0RldUMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yYjZmYTJmYjRhZTVmM2M0MTc0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBERUxFVEVfUE9TVF9GQUlMVVJFLCBERUxFVEVfUE9TVF9SRVFVRVNULCBERUxFVEVfUE9TVF9TVUNDRVNTIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0JztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICBkZWxldGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgZGVsZXRlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGRlbGV0ZVBvc3RFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1tdVBvc3RzR2VuZXJhdG9yID0gKG51bWJlcikgPT4gQXJyYXkoMjApLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICBpZDogdjQoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogdjQoKSxcclxuICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgfSxcclxuICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICBJbWFnZXM6IFt7XHJcbiAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlVXJsKCksXHJcbiAgfV0sXHJcbiAgQ29tbWVudHM6IFt7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiB2NCgpLFxyXG4gICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgfV0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBERUxFVEVfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS50ZXh0LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiBkYXRhLm15SW5mby5pZCxcclxuICAgIG5pY2tuYW1lOiBkYXRhLm15SW5mby5uaWNrbmFtZSxcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiB2NCgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiBkYXRhLm15SW5mby5pZCxcclxuICAgIG5pY2tuYW1lOiBkYXRhLm15SW5mby5uaWNrbmFtZSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgLy8gaW1tZXIg7IKs7JqpXHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAvLyBpbW1lciDsgqzsmqkgWFxyXG4gICAgICAvLyBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgREVMRVRFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZGVsZXRlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZGVsZXRlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZmluZCgocCkgPT4gcC5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKVxyXG4gICAgICAgIC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAvLyAgIGRyYWZ0Lm1haW5Qb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgIC8vICAgICBpZiAocG9zdC5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKSB7XHJcbiAgICAgIC8vICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=