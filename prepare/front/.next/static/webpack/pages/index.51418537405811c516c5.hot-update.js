webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPostRequestAction, deletePostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostRequestAction", function() { return deletePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");



var initialState = {
  mainPosts: [{
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
    User: {
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      nickname: '찬욱'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://thebook.io/img/covers/cover_080263.jpg'
    }, {
      src: 'https://thebook.io/img/covers/cover_080233.jpg'
    }, {
      src: 'https://thebook.io/img/covers/cover_006945.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'user1'
      },
      content: 'comment 1'
    }, {
      User: {
        nickname: 'user2'
      },
      content: 'comment 2'
    }, {
      User: {
        nickname: 'user3'
      },
      content: 'comment 3'
    }]
  }],
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
var addPostRequestAction = function addPostRequestAction(data) {
  return {
    type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"],
    data: data
  };
};
var deletePostRequestAction = function deletePostRequestAction(data) {
  return {
    type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_REQUEST"],
    data: data
  };
};
var addCommentRequestAction = function addCommentRequestAction(data) {
  return {
    type: _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"],
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
      case _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"]:
        draft.addPostLoading = false;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"]:
        draft.addPostLoading = true;
        draft.addPostLoading = false; // immer 사용

        draft.mainPosts.unshift(dummyPost(action.data)); // immer 사용 X
        // [dummyPost(action.data), ...state.mainPosts];

        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"]:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_REQUEST"]:
        draft.deletePostLoading = true;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_SUCCESS"]:
        draft.deletePostLoading = false;
        draft.deletePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(function (p) {
          return p.id !== action.data;
        });
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_POST_FAILURE"]:
        draft.deletePostLoading = false;
        draft.deletePostError = action.error;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"]:
        draft.addCommentLoading = true;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"]:
        draft.addCommentDone = true;
        draft.addCommentLoading = false;
        draft.mainPosts.forEach(function (post) {
          if (post.id === action.data.postId) {
            post.Comments.unshift(dummyComment(action.data));
          }
        });
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"]:
        draft.addCommentError = action.error;
        draft.addCommentLoading = false;
        break;

      default:
        return state;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsInY0IiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZGVsZXRlUG9zdExvYWRpbmciLCJkZWxldGVQb3N0RG9uZSIsImRlbGV0ZVBvc3RFcnJvciIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24iLCJERUxFVEVfUE9TVF9SRVFVRVNUIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZHVtbXlQb3N0IiwidGV4dCIsIm15SW5mbyIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJ1bnNoaWZ0IiwiQUREX1BPU1RfRkFJTFVSRSIsImVycm9yIiwiREVMRVRFX1BPU1RfU1VDQ0VTUyIsImZpbHRlciIsInAiLCJERUxFVEVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsImZvckVhY2giLCJwb3N0IiwicG9zdElkIiwiQUREX0NPTU1FTlRfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUNUO0FBQ0VDLE1BQUUsRUFBRUMsK0NBQUUsRUFE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QXFCLGFBQUssQ0FBQ3RCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FzQixhQUFLLENBQUNuQyxTQUFOLENBQWdCNkMsT0FBaEIsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hDLGNBQUlBLElBQUksQ0FBQzdDLEVBQUwsS0FBWWdDLE1BQU0sQ0FBQ2IsSUFBUCxDQUFZMkIsTUFBNUIsRUFBb0M7QUFDbENELGdCQUFJLENBQUN0QyxRQUFMLENBQWM2QixPQUFkLENBQXNCUCxZQUFZLENBQUNHLE1BQU0sQ0FBQ2IsSUFBUixDQUFsQztBQUNEO0FBQ0YsU0FKRDtBQUtBOztBQUNGLFdBQUs0QixpRUFBTDtBQUNFYixhQUFLLENBQUNwQixlQUFOLEdBQXdCa0IsTUFBTSxDQUFDTSxLQUEvQjtBQUNBSixhQUFLLENBQUN0QixpQkFBTixHQUEwQixLQUExQjtBQUNBOztBQUNGO0FBQ0UsZUFBT21CLEtBQVA7QUE3Q0o7QUErQ0QsR0FoRHdELENBQXpDO0FBQUEsQ0FBaEI7O0FBa0RlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MTQxODUzNzQwNTgxMWM1MTZjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBERUxFVEVfUE9TVF9GQUlMVVJFLCBERUxFVEVfUE9TVF9SRVFVRVNULCBERUxFVEVfUE9TVF9TVUNDRVNTIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0JztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiB2NCgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHY0KCksXHJcbiAgICAgICAgbmlja25hbWU6ICfssKzsmrEnLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly90aGVib29rLmlvL2ltZy9jb3ZlcnMvY292ZXJfMDgwMjYzLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL3RoZWJvb2suaW8vaW1nL2NvdmVycy9jb3Zlcl8wODAyMzMuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vdGhlYm9vay5pby9pbWcvY292ZXJzL2NvdmVyXzAwNjk0NS5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ3VzZXIxJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiAnY29tbWVudCAxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6ICd1c2VyMicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogJ2NvbW1lbnQgMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAndXNlcjMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdjb21tZW50IDMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgZGVsZXRlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGRlbGV0ZVBvc3REb25lOiBmYWxzZSxcclxuICBkZWxldGVQb3N0RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogREVMRVRFX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIGNvbnRlbnQ6IGRhdGEudGV4dCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogZGF0YS5teUluZm8uaWQsXHJcbiAgICBuaWNrbmFtZTogZGF0YS5teUluZm8ubmlja25hbWUsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogdjQoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogZGF0YS5teUluZm8uaWQsXHJcbiAgICBuaWNrbmFtZTogZGF0YS5teUluZm8ubmlja25hbWUsXHJcbiAgfSxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIC8vIGltbWVyIOyCrOyaqVxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgLy8gaW1tZXIg7IKs7JqpIFhcclxuICAgICAgLy8gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcclxuICAgICAgICBpZiAocG9zdC5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKSB7XHJcbiAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=