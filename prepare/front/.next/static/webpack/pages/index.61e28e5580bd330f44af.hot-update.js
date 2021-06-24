webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '찬욱'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: '../asset/imgs/cs.jpg'
    }, {
      src: '../asset/imgs/download.jpg'
    }, {
      src: '../asset/imgs/download.png'
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
  postAdded: false
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var ADD_COMMENT = 'ADD_COMMENT';
var addComment = {
  type: ADD_COMMENT
};
var dummyPost = {
  id: 2,
  content: 'dummyContent',
  User: {
    id: 1,
    nickname: 'dummyUser'
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });

    case ADD_COMMENT:
      {
        action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: state.mainPosts.map(function (post, idx) {
            if (post.id === action.payload) {
              return _objectSpread(_objectSpread({}, state.mainPosts[action.payload]), {}, {
                Comments: [dummyComment].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts[action.payload].Comments))
              });
            }

            return state.mainPosts[idx];
          })
        });
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiQUREX0NPTU1FTlQiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsIm1hcCIsInBvc3QiLCJpZHgiLCJkdW1teUNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FDUDtBQUNJQyxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGVjtBQU1JQyxXQUFPLEVBQUUsdUJBTmI7QUFPSUMsVUFBTSxFQUFFLENBQ0o7QUFDSUMsU0FBRyxFQUFFO0FBRFQsS0FESSxFQUlKO0FBQ0lBLFNBQUcsRUFBRTtBQURULEtBSkksRUFPSjtBQUNJQSxTQUFHLEVBQUU7QUFEVCxLQVBJLENBUFo7QUFrQklDLFlBQVEsRUFBRSxDQUNOO0FBQ0lMLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEVjtBQUlJQyxhQUFPLEVBQUU7QUFKYixLQURNLEVBT047QUFDSUYsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBUE0sRUFhTjtBQUNJRixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFY7QUFJSUMsYUFBTyxFQUFFO0FBSmIsS0FiTTtBQWxCZCxHQURPLENBRGE7QUEwQ3hCSSxZQUFVLEVBQUUsRUExQ1k7QUEyQ3hCQyxXQUFTLEVBQUU7QUEzQ2EsQ0FBckI7QUE4Q1AsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ08sSUFBTUMsT0FBTyxHQUFHO0FBQ25CQyxNQUFJLEVBQUVGO0FBRGEsQ0FBaEI7QUFJUCxJQUFNRyxXQUFXLEdBQUcsYUFBcEI7QUFDTyxJQUFNQyxVQUFVLEdBQUc7QUFDdEJGLE1BQUksRUFBRUM7QUFEZ0IsQ0FBbkI7QUFJUCxJQUFNRSxTQUFTLEdBQUc7QUFDZGQsSUFBRSxFQUFFLENBRFU7QUFFZEcsU0FBTyxFQUFFLGNBRks7QUFHZEYsTUFBSSxFQUFFO0FBQ0ZELE1BQUUsRUFBRSxDQURGO0FBRUZFLFlBQVEsRUFBRTtBQUZSLEdBSFE7QUFPZEUsUUFBTSxFQUFFLEVBUE07QUFRZEUsVUFBUSxFQUFFO0FBUkksQ0FBbEI7O0FBV0EsSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCbEIsWUFBeUI7QUFBQSxNQUFYbUIsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDTixJQUFmO0FBQ0ksU0FBS0YsUUFBTDtBQUNJLDZDQUNPTyxLQURQO0FBRUlqQixpQkFBUyxHQUFHZSxTQUFILHNHQUFpQkUsS0FBSyxDQUFDakIsU0FBdkIsRUFGYjtBQUdJUyxpQkFBUyxFQUFFO0FBSGY7O0FBS0osU0FBS0ksV0FBTDtBQUFrQjtBQUNkSyxjQUFNLENBQUNDLE9BQVA7QUFDQSwrQ0FDT0YsS0FEUDtBQUVJakIsbUJBQVMsRUFBRWlCLEtBQUssQ0FBQ2pCLFNBQU4sQ0FBZ0JvQixHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUMxQyxnQkFBSUQsSUFBSSxDQUFDcEIsRUFBTCxLQUFZaUIsTUFBTSxDQUFDQyxPQUF2QixFQUFnQztBQUM1QixxREFDT0YsS0FBSyxDQUFDakIsU0FBTixDQUFnQmtCLE1BQU0sQ0FBQ0MsT0FBdkIsQ0FEUDtBQUVJWix3QkFBUSxHQUFHZ0IsWUFBSCxzR0FBb0JOLEtBQUssQ0FBQ2pCLFNBQU4sQ0FBZ0JrQixNQUFNLENBQUNDLE9BQXZCLEVBQWdDWixRQUFwRDtBQUZaO0FBSUg7O0FBQ0QsbUJBQU9VLEtBQUssQ0FBQ2pCLFNBQU4sQ0FBZ0JzQixHQUFoQixDQUFQO0FBQ0gsV0FSVTtBQUZmO0FBWUg7O0FBQ0Q7QUFDSSxhQUFPTCxLQUFQO0FBdkJSO0FBeUJILENBMUJEOztBQTRCZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjFlMjhlNTU4MGJkMzMwZjQ0YWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICfssKzsmrEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnLi4vYXNzZXQvaW1ncy9jcy5qcGcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6ICcuLi9hc3NldC9pbWdzL2Rvd25sb2FkLmpwZycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogJy4uL2Fzc2V0L2ltZ3MvZG93bmxvYWQucG5nJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ3VzZXIxJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdjb21tZW50IDEnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAndXNlcjInLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ2NvbW1lbnQgMicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6ICd1c2VyMycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnY29tbWVudCAzJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gICAgdHlwZTogQUREX1BPU1QsXHJcbn07XHJcblxyXG5jb25zdCBBRERfQ09NTUVOVCA9ICdBRERfQ09NTUVOVCc7XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0ge1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlQsXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBpZDogMixcclxuICAgIGNvbnRlbnQ6ICdkdW1teUNvbnRlbnQnLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAnZHVtbXlVc2VyJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlQ6IHtcclxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5tYWluUG9zdHNbYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbWVudHM6IFtkdW1teUNvbW1lbnQsIC4uLnN0YXRlLm1haW5Qb3N0c1thY3Rpb24ucGF5bG9hZF0uQ29tbWVudHNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUubWFpblBvc3RzW2lkeF07XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==