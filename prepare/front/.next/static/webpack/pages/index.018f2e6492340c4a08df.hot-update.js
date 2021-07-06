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
  deletePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  likeLoading: false,
  likeDone: false,
  likeError: null,
  unlikeLoading: false,
  unlikeDone: false,
  unlikeError: null,
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
}; // const dummyPost = (data) => ({
//   id: data.id,
//   content: data.text,
//   User: {
//     id: data.myInfo.id,
//     nickname: data.myInfo.nickname,
//   },
//   Images: [],
//   Comments: [],
// });
// const dummyComment = (data) => ({
//   id: v4(),
//   User: {
//     id: data.myInfo.id,
//     nickname: data.myInfo.nickname,
//   },
//   content: data.content,
// });

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"]:
        draft.addPostLoading = true;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"]:
        draft.addPostLoading = false; // immer 사용

        draft.mainPosts.unshift(action.data); // immer 사용 X
        // [dummyPost(action.data), ...state.mainPosts];

        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"]:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        console.log(action.error);
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
        {
          draft.addCommentDone = true;
          draft.addCommentLoading = false;
          var post = draft.mainPosts.find(function (p) {
            return p.id === action.data.PostId;
          });
          post.Comments.unshift(action.data);
        }
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"]:
        draft.loadPostsError = action.error;
        draft.loadPostsLoading = false;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"]:
        draft.loadPostsLoading = true;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_SUCCESS"]:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_FAILURE"]:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_REQUEST"]:
        draft.likeLoading = true;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_SUCCESS"]:
        {
          draft.likeLoading = false;
          draft.likeDone = true;

          var _post = draft.mainPosts.find(function (p) {
            return p.id === action.data.PostId;
          });

          _post.Likers.push({
            id: action.data.UserId
          });

          break;
        }

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_FAILURE"]:
        draft.likeError = action.Error;
        draft.likeLoading = false;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_REQUEST"]:
        draft.unlikeLoading = true;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_SUCCESS"]:
        {
          draft.unlikeLoading = false;
          draft.unlikeDone = true;

          var _post2 = draft.mainPosts.find(function (p) {
            return p.id === action.data.PostId;
          });

          _post2.Likers.filter(function (l) {
            return l.id !== action.data.UserId;
          });

          break;
        }

      case _actions_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_FAILURE"]:
        draft.unlikeError = action.Error;
        draft.unlikeLoading = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJkdW1teVBvc3RzR2VuZXJhdG9yIiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJ2NCIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZGVsZXRlUG9zdExvYWRpbmciLCJkZWxldGVQb3N0RG9uZSIsImRlbGV0ZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJsaWtlTG9hZGluZyIsImxpa2VEb25lIiwibGlrZUVycm9yIiwidW5saWtlTG9hZGluZyIsInVubGlrZURvbmUiLCJ1bmxpa2VFcnJvciIsImhhc01vcmVQb3N0cyIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24iLCJERUxFVEVfUE9TVF9SRVFVRVNUIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiQUREX1BPU1RfU1VDQ0VTUyIsInVuc2hpZnQiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiREVMRVRFX1BPU1RfU1VDQ0VTUyIsImZpbHRlciIsInAiLCJERUxFVEVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsInBvc3QiLCJmaW5kIiwiUG9zdElkIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJjb25jYXQiLCJsZW5ndGgiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxJS0VfUkVRVUVTVCIsIkxJS0VfU1VDQ0VTUyIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJMSUtFX0ZBSUxVUkUiLCJFcnJvciIsIlVOTElLRV9SRVFVRVNUIiwiVU5MSUtFX1NVQ0NFU1MiLCJsIiwiVU5MSUtFX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLE1BQUQ7QUFBQSxTQUFZQyxLQUFLLENBQUNELE1BQUQsQ0FBTCxDQUFjRSxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QjtBQUFBLFdBQU87QUFDN0VDLFFBQUUsRUFBRUMsK0NBQUUsRUFEdUU7QUFFN0VDLFVBQUksRUFBRTtBQUNKRixVQUFFLEVBQUVDLCtDQUFFLEVBREY7QUFFSkUsZ0JBQVEsRUFBRUMsNENBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFYO0FBRk4sT0FGdUU7QUFNN0VDLGFBQU8sRUFBRUgsNENBQUssQ0FBQ0ksS0FBTixDQUFZQyxTQUFaLEVBTm9FO0FBTzdFQyxZQUFNLEVBQUUsQ0FBQztBQUNQQyxXQUFHLEVBQUVQLDRDQUFLLENBQUNRLEtBQU4sQ0FBWUEsS0FBWjtBQURFLE9BQUQsQ0FQcUU7QUFVN0VDLGNBQVEsRUFBRSxDQUFDO0FBQ1RYLFlBQUksRUFBRTtBQUNKRixZQUFFLEVBQUVDLCtDQUFFLEVBREY7QUFFSkUsa0JBQVEsRUFBRUMsNENBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFYO0FBRk4s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QW5COztBQUNBLGNBQU0yQixNQUFJLEdBQUdaLEtBQUssQ0FBQ2pDLFNBQU4sQ0FBZ0I4QyxJQUFoQixDQUFxQixVQUFDSixDQUFEO0FBQUEsbUJBQU9BLENBQUMsQ0FBQzFELEVBQUYsS0FBUytDLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZeUIsTUFBNUI7QUFBQSxXQUFyQixDQUFiOztBQUNBRixnQkFBSSxDQUFDVyxNQUFMLENBQVlmLE1BQVosQ0FBbUIsVUFBQ3NCLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxDQUFDL0UsRUFBRixLQUFTK0MsTUFBTSxDQUFDVCxJQUFQLENBQVlvQyxNQUE1QjtBQUFBLFdBQW5COztBQUNBO0FBQ0Q7O0FBQ0QsV0FBS00sNERBQUw7QUFDRS9CLGFBQUssQ0FBQ2QsV0FBTixHQUFvQlksTUFBTSxDQUFDNkIsS0FBM0I7QUFDQTNCLGFBQUssQ0FBQ2hCLGFBQU4sR0FBc0IsS0FBdEI7QUFDQTs7QUFDRjtBQUFTO0FBbkZYO0FBcUZELEdBdEZ3RCxDQUF6QztBQUFBLENBQWhCOztBQXdGZVksc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDE4ZjJlNjQ5MjM0MGM0YTA4ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgREVMRVRFX1BPU1RfRkFJTFVSRSwgREVMRVRFX1BPU1RfUkVRVUVTVCwgREVMRVRFX1BPU1RfU1VDQ0VTUywgTElLRV9GQUlMVVJFLCBMSUtFX1JFUVVFU1QsIExJS0VfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUsIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUywgVU5MSUtFX0ZBSUxVUkUsIFVOTElLRV9SRVFVRVNULCBVTkxJS0VfU1VDQ0VTUyB9IGZyb20gJy4uL2FjdGlvbnMvcG9zdCc7XHJcblxyXG5leHBvcnQgY29uc3QgZHVtbXlQb3N0c0dlbmVyYXRvciA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gIGlkOiB2NCgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiB2NCgpLFxyXG4gICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gIEltYWdlczogW3tcclxuICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICB9XSxcclxuICBDb21tZW50czogW3tcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IHY0KCksXHJcbiAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICB9XSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIGRlbGV0ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBkZWxldGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgZGVsZXRlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGxpa2VMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlRG9uZTogZmFsc2UsXHJcbiAgbGlrZUVycm9yOiBudWxsLFxyXG4gIHVubGlrZUxvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZURvbmU6IGZhbHNlLFxyXG4gIHVubGlrZUVycm9yOiBudWxsLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBERUxFVEVfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgaWQ6IGRhdGEuaWQsXHJcbi8vICAgY29udGVudDogZGF0YS50ZXh0LFxyXG4vLyAgIFVzZXI6IHtcclxuLy8gICAgIGlkOiBkYXRhLm15SW5mby5pZCxcclxuLy8gICAgIG5pY2tuYW1lOiBkYXRhLm15SW5mby5uaWNrbmFtZSxcclxuLy8gICB9LFxyXG4vLyAgIEltYWdlczogW10sXHJcbi8vICAgQ29tbWVudHM6IFtdLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4vLyAgIGlkOiB2NCgpLFxyXG4vLyAgIFVzZXI6IHtcclxuLy8gICAgIGlkOiBkYXRhLm15SW5mby5pZCxcclxuLy8gICAgIG5pY2tuYW1lOiBkYXRhLm15SW5mby5uaWNrbmFtZSxcclxuLy8gICB9LFxyXG4vLyAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuLy8gfSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgLy8gaW1tZXIg7IKs7JqpXHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgLy8gaW1tZXIg7IKs7JqpIFhcclxuICAgICAgLy8gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5lcnJvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5kZWxldGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHApID0+IHAuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubGlrZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0Lmxpa2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VEb25lID0gdHJ1ZTtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChwKSA9PiBwLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExJS0VfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZUVycm9yID0gYWN0aW9uLkVycm9yO1xyXG4gICAgICBkcmFmdC5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVubGlrZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQudW5saWtlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VEb25lID0gdHJ1ZTtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChwKSA9PiBwLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2Vycy5maWx0ZXIoKGwpID0+IGwuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5saWtlRXJyb3IgPSBhY3Rpb24uRXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVubGlrZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==