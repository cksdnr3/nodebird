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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var initialState = {
  mainPosts: [{
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    User: {
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
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
    type: _actions_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"],
    data: data
  };
};
var deletePostRequestAction = function deletePostRequestAction(data) {
  return {
    type: _actions_post__WEBPACK_IMPORTED_MODULE_4__["DELETE_POST_REQUEST"],
    data: data
  };
};
var addCommentRequestAction = function addCommentRequestAction(data) {
  return {
    type: _actions_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_REQUEST"],
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
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_3__["default"])(state, function (draft) {
    switch (action.type) {
      case _actions_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"]:
        draft.addPostLoading = false;
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_SUCCESS"]:
        draft.addPostLoading = true;
        draft.addPostLoading = false;
        draft.mainPosts = [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.mainPosts));
        break;

      case _actions_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_FAILURE"]:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        return _objectSpread(_objectSpread({}, state), {}, {
          addPostLoading: false,
          addPostError: action.error
        });

      case _actions_post__WEBPACK_IMPORTED_MODULE_4__["DELETE_POST_REQUEST"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          deletePostLoading: true
        });

      case _actions_post__WEBPACK_IMPORTED_MODULE_4__["DELETE_POST_SUCCESS"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          deletePostLoading: false,
          deletePostDone: true,
          mainPosts: state.mainPosts.filter(function (p) {
            return p.id !== action.data;
          })
        });

      case _actions_post__WEBPACK_IMPORTED_MODULE_4__["DELETE_POST_FAILURE"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          deletePostLoading: false,
          deletePostError: action.error
        });

      case _actions_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_REQUEST"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentLoading: true
        });

      case _actions_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_SUCCESS"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentDone: true,
          addCommentLoading: false,
          mainPosts: state.mainPosts.map(function (post) {
            if (post.id === action.data.postId) {
              return _objectSpread(_objectSpread({}, post), {}, {
                Comments: [dummyComment(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(post.Comments))
              });
            }

            return post;
          })
        });

      case _actions_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_FAILURE"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentError: action.error,
          addCommentLoading: false
        });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsInY0IiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZGVsZXRlUG9zdExvYWRpbmciLCJkZWxldGVQb3N0RG9uZSIsImRlbGV0ZVBvc3RFcnJvciIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24iLCJERUxFVEVfUE9TVF9SRVFVRVNUIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZHVtbXlQb3N0IiwidGV4dCIsIm15SW5mbyIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJERUxFVEVfUE9TVF9TVUNDRVNTIiwiZmlsdGVyIiwicCIsIkRFTEVURV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwibWFwIiwicG9zdCIsInBvc3RJZCIsIkFERF9DT01NRU5UX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQ1Q7QUFDRUMsTUFBRSxFQUFFQywrQ0FBRSxFQURSO0FBRUVDLFFBQUksRUFBRTtBQUNKRixRQUFFLEVBQUVDLCtD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QixFQUFFLEtBSHJCO0FBSUViLG1CQUFTLEVBQUVnQyxLQUFLLENBQUNoQyxTQUFOLENBQWdCNEMsR0FBaEIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZDLGdCQUFJQSxJQUFJLENBQUM1QyxFQUFMLEtBQVlnQyxNQUFNLENBQUNiLElBQVAsQ0FBWTBCLE1BQTVCLEVBQW9DO0FBQ2xDLHFEQUNLRCxJQURMO0FBRUVyQyx3QkFBUSxHQUFHc0IsWUFBWSxDQUFDRyxNQUFNLENBQUNiLElBQVIsQ0FBZixzR0FBaUN5QixJQUFJLENBQUNyQyxRQUF0QztBQUZWO0FBSUQ7O0FBQ0QsbUJBQU9xQyxJQUFQO0FBQ0QsV0FSVTtBQUpiOztBQWNGLFdBQUtFLGlFQUFMO0FBQ0UsK0NBQ0tmLEtBREw7QUFFRWpCLHlCQUFlLEVBQUVrQixNQUFNLENBQUNLLEtBRjFCO0FBR0V6QiwyQkFBaUIsRUFBRTtBQUhyQjs7QUFNRjtBQUNFLGVBQU9tQixLQUFQO0FBL0RKO0FBaUVELEdBbEV3RCxDQUF6QztBQUFBLENBQWhCOztBQW9FZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmIwZjQxYWI4ZDgyNDcxYWE2OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgREVMRVRFX1BPU1RfRkFJTFVSRSwgREVMRVRFX1BPU1RfUkVRVUVTVCwgREVMRVRFX1BPU1RfU1VDQ0VTUyB9IGZyb20gJy4uL2FjdGlvbnMvcG9zdCc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogdjQoKSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiB2NCgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7LCs7JqxJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgIEltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vdGhlYm9vay5pby9pbWcvY292ZXJzL2NvdmVyXzA4MDI2My5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly90aGVib29rLmlvL2ltZy9jb3ZlcnMvY292ZXJfMDgwMjMzLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL3RoZWJvb2suaW8vaW1nL2NvdmVycy9jb3Zlcl8wMDY5NDUuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6ICd1c2VyMScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogJ2NvbW1lbnQgMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAndXNlcjInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdjb21tZW50IDInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ3VzZXIzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiAnY29tbWVudCAzJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIGRlbGV0ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBkZWxldGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgZGVsZXRlUG9zdEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IERFTEVURV9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS5pZCxcclxuICBjb250ZW50OiBkYXRhLnRleHQsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IGRhdGEubXlJbmZvLmlkLFxyXG4gICAgbmlja25hbWU6IGRhdGEubXlJbmZvLm5pY2tuYW1lLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHY0KCksXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IGRhdGEubXlJbmZvLmlkLFxyXG4gICAgbmlja25hbWU6IGRhdGEubXlJbmZvLm5pY2tuYW1lLFxyXG4gIH0sXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZGVsZXRlUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZGVsZXRlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRlbGV0ZVBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRlbGV0ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBkZWxldGVQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbWFpblBvc3RzOiBzdGF0ZS5tYWluUG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocG9zdC5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4ucG9zdCxcclxuICAgICAgICAgICAgICBDb21tZW50czogW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YSksIC4uLnBvc3QuQ29tbWVudHNdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHBvc3Q7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==