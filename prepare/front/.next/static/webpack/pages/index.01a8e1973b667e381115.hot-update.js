webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: dummyPostsGenerator, initialState, addPostRequestAction, deletePostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyPostsGenerator", function() { return dummyPostsGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostRequestAction", function() { return deletePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");




var dummyPostsGenerator = function dummyPostsGenerator(number) {
  return Array(number).fill().map(function () {
    return {
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      User: {
        id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
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
var initialState = {
  mainPosts: dummyPostsGenerator(10),
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  hasMorePosts: true
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
        draft.loadPostsError = action.error;
        draft.loadPostsLoading = false;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"]:
        draft.loadPostsLoading = false;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_SUCCESS"]:
        draft.loadPostsLoading = true;
        draft.loadPostsLoading = false;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_FAILURE"]:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJkdW1teVBvc3RzR2VuZXJhdG9yIiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJ2NCIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZGVsZXRlUG9zdExvYWRpbmciLCJkZWxldGVQb3N0RG9uZSIsImRlbGV0ZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJoYXNNb3JlUG9zdHMiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsImRlbGV0ZVBvc3RSZXF1ZXN0QWN0aW9uIiwiREVMRVRFX1BPU1RfUkVRVUVTVCIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImR1bW15UG9zdCIsInRleHQiLCJteUluZm8iLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJBRERfUE9TVF9TVUNDRVNTIiwidW5zaGlmdCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJlcnJvciIsIkRFTEVURV9QT1NUX1NVQ0NFU1MiLCJmaWx0ZXIiLCJwIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJmaW5kIiwicG9zdElkIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJjb25jYXQiLCJMT0FEX1BPU1RfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsTUFBRDtBQUFBLFNBQVlDLEtBQUssQ0FBQ0QsTUFBRCxDQUFMLENBQWNFLElBQWQsR0FBcUJDLEdBQXJCLENBQXlCO0FBQUEsV0FBTztBQUM3RUMsUUFBRSxFQUFFQywrQ0FBRSxFQUR1RTtBQUU3RUMsVUFBSSxFQUFFO0FBQ0pGLFVBQUUsRUFBRUMsK0NBQUUsRUFERjtBQUVKRSxnQkFBUSxFQUFFQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVg7QUFGTixPQUZ1RTtBQU03RUMsYUFBTyxFQUFFSCw0Q0FBSyxDQUFDSSxLQUFOLENBQVlDLFNBQVosRUFOb0U7QUFPN0VDLFlBQU0sRUFBRSxDQUFDO0FBQ1BDLFdBQUcsRUFBRVAsNENBQUssQ0FBQ1EsS0FBTixDQUFZQSxLQUFaO0FBREUsT0FBRCxDQVBxRTtBQVU3RUMsY0FBUSxFQUFFLENBQUM7QUFDVFgsWUFBSSxFQUFFO0FBQ0pGLFlBQUUsRUFBRUMsK0NBQUUsRUFERjtBQUVKRSxrQkFBUSxFQUFFQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVg7QUFGTixTQURHO0FBS1RDLGVBQU8sRUFBRUgsNENBQUssQ0FBQ0ksS0FBTixDQUFZTSxRQUFaO0FBTEEsT0FBRDtBQVZtRSxLQUFQO0FBQUEsR0FBekIsQ0FBWjtBQUFBLENBQTVCO0FBbUJBLElBQU1DLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFckIsbUJBQW1CLENBQUMsRUFBRCxDQURKO0FBRTFCc0IsWUFBVSxFQUFFLEVBRmM7QUFHMUJDLGdCQUFjLEVBQUUs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QUFDQTs7QUFDRixXQUFLa0MsK0RBQUw7QUFDRWQsYUFBSyxDQUFDcEIsZ0JBQU4sR0FBeUIsSUFBekI7QUFDQW9CLGFBQUssQ0FBQ3BCLGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0FvQixhQUFLLENBQUMvQixTQUFOLEdBQWtCNkIsTUFBTSxDQUFDYixJQUFQLENBQVk4QixNQUFaLENBQW1CZixLQUFLLENBQUMvQixTQUF6QixDQUFsQjtBQUVBOztBQUNGLFdBQUsrQywrREFBTDtBQUNFaEIsYUFBSyxDQUFDcEIsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQW9CLGFBQUssQ0FBQ2xCLGNBQU4sR0FBdUJnQixNQUFNLENBQUNNLEtBQTlCO0FBQ0E7O0FBRUY7QUFBUztBQTVEWDtBQThERCxHQS9Ed0QsQ0FBekM7QUFBQSxDQUFoQjs7QUFpRWVSLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxYThlMTk3M2I2NjdlMzgxMTE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcbmltcG9ydCB7IEFERF9DT01NRU5UX0ZBSUxVUkUsIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIERFTEVURV9QT1NUX0ZBSUxVUkUsIERFTEVURV9QT1NUX1JFUVVFU1QsIERFTEVURV9QT1NUX1NVQ0NFU1MsIExPQURfUE9TVF9GQUlMVVJFLCBMT0FEX1BPU1RfUkVRVUVTVCwgTE9BRF9QT1NUX1NVQ0NFU1MgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW15UG9zdHNHZW5lcmF0b3IgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICBpZDogdjQoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogdjQoKSxcclxuICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgfSxcclxuICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICBJbWFnZXM6IFt7XHJcbiAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgfV0sXHJcbiAgQ29tbWVudHM6IFt7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiB2NCgpLFxyXG4gICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgfV0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBkdW1teVBvc3RzR2VuZXJhdG9yKDEwKSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICBkZWxldGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgZGVsZXRlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGRlbGV0ZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogREVMRVRFX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIGNvbnRlbnQ6IGRhdGEudGV4dCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogZGF0YS5teUluZm8uaWQsXHJcbiAgICBuaWNrbmFtZTogZGF0YS5teUluZm8ubmlja25hbWUsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogdjQoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogZGF0YS5teUluZm8uaWQsXHJcbiAgICBuaWNrbmFtZTogZGF0YS5teUluZm8ubmlja25hbWUsXHJcbiAgfSxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIC8vIGltbWVyIOyCrOyaqVxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgLy8gaW1tZXIg7IKs7JqpIFhcclxuICAgICAgLy8gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLmZpbmQoKHApID0+IHAuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZClcclxuICAgICAgICAuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgLy8gICBkcmFmdC5tYWluUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKHBvc3QuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCkge1xyXG4gICAgICAvLyAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=