webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");




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
initialState.mainPosts.concat(Array(20).fill().map(function () {
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
      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
    }]
  };
}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsInY0IiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZGVsZXRlUG9zdExvYWRpbmciLCJkZWxldGVQb3N0RG9uZSIsImRlbGV0ZVBvc3RFcnJvciIsImNvbmNhdCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJpbWFnZSIsImltYWdlVXJsIiwic2VudGVuY2UiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsImRlbGV0ZVBvc3RSZXF1ZXN0QWN0aW9uIiwiREVMRVRFX1BPU1RfUkVRVUVTVCIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImR1bW15UG9zdCIsInRleHQiLCJteUluZm8iLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJBRERfUE9TVF9TVUNDRVNTIiwidW5zaGlmdCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJlcnJvciIsIkRFTEVURV9QT1NUX1NVQ0NFU1MiLCJmaWx0ZXIiLCJwIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJmaW5kIiwicG9zdElkIiwiQUREX0NPTU1FTlRfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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ZUFBTixHQUF3QjhCLE1BQU0sQ0FBQ00sS0FBL0I7QUFDQUosYUFBSyxDQUFDbEMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTs7QUFFRjtBQUFTO0FBL0NYO0FBaURELEdBbER3RCxDQUF6QztBQUFBLENBQWhCOztBQW9EZThCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWM4MDI4YTk3NTdiMWQ5YzAxZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgREVMRVRFX1BPU1RfRkFJTFVSRSwgREVMRVRFX1BPU1RfUkVRVUVTVCwgREVMRVRFX1BPU1RfU1VDQ0VTUyB9IGZyb20gJy4uL2FjdGlvbnMvcG9zdCc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogdjQoKSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiB2NCgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7LCs7JqxJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgIEltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vdGhlYm9vay5pby9pbWcvY292ZXJzL2NvdmVyXzA4MDI2My5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly90aGVib29rLmlvL2ltZy9jb3ZlcnMvY292ZXJfMDgwMjMzLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL3RoZWJvb2suaW8vaW1nL2NvdmVycy9jb3Zlcl8wMDY5NDUuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6ICd1c2VyMScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogJ2NvbW1lbnQgMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAndXNlcjInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdjb21tZW50IDInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ3VzZXIzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiAnY29tbWVudCAzJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIGRlbGV0ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBkZWxldGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgZGVsZXRlUG9zdEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoQXJyYXkoMjApLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICBpZDogdjQoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogdjQoKSxcclxuICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgfSxcclxuICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICBJbWFnZXM6IFt7XHJcbiAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlVXJsKCksXHJcbiAgfV0sXHJcbiAgQ29tbWVudHM6IFt7XHJcbiAgICBzcmM6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgfV0sXHJcbn0pKSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogREVMRVRFX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIGNvbnRlbnQ6IGRhdGEudGV4dCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogZGF0YS5teUluZm8uaWQsXHJcbiAgICBuaWNrbmFtZTogZGF0YS5teUluZm8ubmlja25hbWUsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogdjQoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogZGF0YS5teUluZm8uaWQsXHJcbiAgICBuaWNrbmFtZTogZGF0YS5teUluZm8ubmlja25hbWUsXHJcbiAgfSxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIC8vIGltbWVyIOyCrOyaqVxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgLy8gaW1tZXIg7IKs7JqpIFhcclxuICAgICAgLy8gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLmZpbmQoKHApID0+IHAuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZClcclxuICAgICAgICAuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgLy8gICBkcmFmdC5tYWluUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKHBvc3QuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCkge1xyXG4gICAgICAvLyAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9