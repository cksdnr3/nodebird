webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



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
  addCommentError: null
};
var addPostRequestAction = function addPostRequestAction(data) {
  return {
    type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
    data: data
  };
};
var addCommentRequestAction = function addCommentRequestAction(data) {
  return {
    type: _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"],
    data: data
  };
};

var dummyPosts = function dummyPosts(data) {
  return {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    content: data.text,
    User: {
      id: data.myInfo.id,
      nickname: data.myInfo.nickname
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = [{
  User: {
    nickname: 'user1'
  },
  content: 'comment1'
}, {
  User: {
    nickname: 'user2'
  },
  content: 'comment2'
}];

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true
      });

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostDone: true,
        addPostLoading: false,
        mainPosts: [dummyPosts(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts))
      });

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        mainPosts: state.mainPosts.map(function (post, idx) {
          if (post.id === action.payload) {
            return _objectSpread(_objectSpread({}, state.mainPosts[idx]), {}, {
              Comments: [dummyComment].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts[idx].Comments))
            });
          }

          return state.mainPosts[idx];
        })
      });

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentDone: true,
        addCommentLoading: false
      });

    case _actions_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentError: action.error,
        addCommentLoading: false
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsInY0IiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkdW1teVBvc3RzIiwidGV4dCIsIm15SW5mbyIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJtYXAiLCJwb3N0IiwiaWR4IiwicGF5bG9hZCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQ1Q7QUFDRUMsTUFBRSxFQUFFQywrQ0FBRSxFQURSO0FBRUVDLFFBQUksRUFBRTtBQUNKRixRQUFFLEVBQUVDLCtDQUFFLEVBREY7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGUjtBQU1FQyxXQUFPLEVBQUUsdUJBTlg7QUFPRUMsVUFBTSxFQUFFLENBQ047QUFDRUMsU0FBRyxFQUFFO0FBRFAsS0FETSxFQUlOO0FBQ0VBLFNBQUcsRUFBRTtBQURQLEtBSk0sRUFPTjtBQUNFQSxTQUFHLEVBQUU7QUFEUCxLQVBNLENBUFY7QUFrQkVD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S1IsS0FBSyxDQUFDM0IsU0FBTixDQUFnQmtDLEdBQWhCLENBREw7QUFFRTFCLHNCQUFRLEdBQUdpQixZQUFILHNHQUFvQkUsS0FBSyxDQUFDM0IsU0FBTixDQUFnQmtDLEdBQWhCLEVBQXFCMUIsUUFBekM7QUFGVjtBQUlEOztBQUNELGlCQUFPbUIsS0FBSyxDQUFDM0IsU0FBTixDQUFnQmtDLEdBQWhCLENBQVA7QUFDRCxTQVJVO0FBSGI7O0FBYUYsU0FBS0UsaUVBQUw7QUFDRSw2Q0FDS1QsS0FETDtBQUVFYixzQkFBYyxFQUFFLElBRmxCO0FBR0VELHlCQUFpQixFQUFFO0FBSHJCOztBQUtGLFNBQUt3QixpRUFBTDtBQUNFLDZDQUNLVixLQURMO0FBRUVaLHVCQUFlLEVBQUVhLE1BQU0sQ0FBQ0csS0FGMUI7QUFHRWxCLHlCQUFpQixFQUFFO0FBSHJCOztBQU1GO0FBQ0UsYUFBT2MsS0FBUDtBQS9DSjtBQWlERCxDQWxERDs7QUFvRGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxYWViMzM4YTY5NTRkMDAyYjI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0JztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiB2NCgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHY0KCksXHJcbiAgICAgICAgbmlja25hbWU6ICfssKzsmrEnLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly90aGVib29rLmlvL2ltZy9jb3ZlcnMvY292ZXJfMDgwMjYzLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL3RoZWJvb2suaW8vaW1nL2NvdmVycy9jb3Zlcl8wODAyMzMuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vdGhlYm9vay5pby9pbWcvY292ZXJzL2NvdmVyXzAwNjk0NS5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ3VzZXIxJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiAnY29tbWVudCAxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6ICd1c2VyMicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogJ2NvbW1lbnQgMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAndXNlcjMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdjb21tZW50IDMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdHMgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogdjQoKSxcclxuICBjb250ZW50OiBkYXRhLnRleHQsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IGRhdGEubXlJbmZvLmlkLFxyXG4gICAgbmlja25hbWU6IGRhdGEubXlJbmZvLm5pY2tuYW1lLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gW1xyXG4gIHtcclxuICAgIFVzZXI6IHtcclxuICAgICAgbmlja25hbWU6ICd1c2VyMScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogJ2NvbW1lbnQxJyxcclxuICB9LCB7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIG5pY2tuYW1lOiAndXNlcjInLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6ICdjb21tZW50MicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0cyhhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAocG9zdC5pZCA9PT0gYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5zdGF0ZS5tYWluUG9zdHNbaWR4XSxcclxuICAgICAgICAgICAgICBDb21tZW50czogW2R1bW15Q29tbWVudCwgLi4uc3RhdGUubWFpblBvc3RzW2lkeF0uQ29tbWVudHNdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1haW5Qb3N0c1tpZHhdO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=