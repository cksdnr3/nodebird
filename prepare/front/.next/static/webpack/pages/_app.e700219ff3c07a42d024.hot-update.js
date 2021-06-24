webpackHotUpdate_N_E("pages/_app",{

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



var _dummyComment;

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
var addComment = function addComment(payload) {
  return {
    type: ADD_COMMENT,
    payload: payload
  };
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
var dummyComment = (_dummyComment = {
  User: {
    nickname: 'user1'
  },
  content: 'comment1'
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_dummyComment, "User", {
  nickname: 'user2'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_dummyComment, "content", 'comment2'), _dummyComment);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiQUREX0NPTU1FTlQiLCJhZGRDb21tZW50IiwicGF5bG9hZCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm1hcCIsInBvc3QiLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxDQUNQO0FBQ0lDLE1BQUUsRUFBRSxDQURSO0FBRUlDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUZWO0FBTUlDLFdBQU8sRUFBRSx1QkFOYjtBQU9JQyxVQUFNLEVBQUUsQ0FDSjtBQUNJQyxTQUFHLEVBQUU7QUFEVCxLQURJLEVBSUo7QUFDSUEsU0FBRyxFQUFFO0FBRFQsS0FKSSxFQU9KO0FBQ0lBLFNBQUcsRUFBRTtBQURULEtBUEksQ0FQWjtBQWtCSUMsWUFBUSxFQUFFLENBQ047QUFDSUwsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBRE0sRUFPTjtBQUNJRixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFY7QUFJSUMsYUFBTyxFQUFFO0FBSmIsS0FQTSxFQWFOO0FBQ0lGLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEVjtBQUlJQyxhQUFPLEVBQUU7QUFKYixLQWJNO0FBbEJkLEdBRE8sQ0FEYTtBQTBDeEJJLFlBQVUsRUFBRSxFQTFDWTtBQTJDeEJDLFdBQVMsRUFBRTtBQTNDYSxDQUFyQjtBQThDUCxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxJQUFNQyxPQUFPLEdBQUc7QUFDbkJDLE1BQUksRUFBRUY7QUFEYSxDQUFoQjtBQUlQLElBQU1HLFdBQVcsR0FBRyxhQUFwQjtBQUNPLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQ7QUFBQSxTQUFjO0FBQ3BDSCxRQUFJLEVBQUVDLFdBRDhCO0FBRXBDRSxXQUFPLEVBQVBBO0FBRm9DLEdBQWQ7QUFBQSxDQUFuQjtBQUtQLElBQU1DLFNBQVMsR0FBRztBQUNkZixJQUFFLEVBQUUsQ0FEVTtBQUVkRyxTQUFPLEVBQUUsY0FGSztBQUdkRixNQUFJLEVBQUU7QUFDRkQsTUFBRSxFQUFFLENBREY7QUFFRkUsWUFBUSxFQUFFO0FBRlIsR0FIUTtBQU9kRSxRQUFNLEVBQUUsRUFQTTtBQVFkRSxVQUFRLEVBQUU7QUFSSSxDQUFsQjtBQVdBLElBQU1VLFlBQVk7QUFDZGYsTUFBSSxFQUFFO0FBQ0ZDLFlBQVEsRUFBRTtBQURSLEdBRFE7QUFJZEMsU0FBTyxFQUFFO0FBSkssb0hBS1I7QUFDRkQsVUFBUSxFQUFFO0FBRFIsQ0FMUSx1SEFRTCxVQVJLLGlCQUFsQjs7QUFXQSxJQUFNZSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJwQixZQUF5QjtBQUFBLE1BQVhxQixNQUFXOztBQUM5QyxVQUFRQSxNQUFNLENBQUNSLElBQWY7QUFDSSxTQUFLRixRQUFMO0FBQ0ksNkNBQ09TLEtBRFA7QUFFSW5CLGlCQUFTLEdBQUdnQixTQUFILHNHQUFpQkcsS0FBSyxDQUFDbkIsU0FBdkIsRUFGYjtBQUdJUyxpQkFBUyxFQUFFO0FBSGY7O0FBS0osU0FBS0ksV0FBTDtBQUFrQjtBQUNkTyxjQUFNLENBQUNMLE9BQVA7QUFDQSwrQ0FDT0ksS0FEUDtBQUVJbkIsbUJBQVMsRUFBRW1CLEtBQUssQ0FBQ25CLFNBQU4sQ0FBZ0JxQixHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUMxQyxnQkFBSUQsSUFBSSxDQUFDckIsRUFBTCxLQUFZbUIsTUFBTSxDQUFDTCxPQUF2QixFQUFnQztBQUM1QixxREFDT0ksS0FBSyxDQUFDbkIsU0FBTixDQUFnQm9CLE1BQU0sQ0FBQ0wsT0FBdkIsQ0FEUDtBQUVJUix3QkFBUSxHQUFHVSxZQUFILHNHQUFvQkUsS0FBSyxDQUFDbkIsU0FBTixDQUFnQm9CLE1BQU0sQ0FBQ0wsT0FBdkIsRUFBZ0NSLFFBQXBEO0FBRlo7QUFJSDs7QUFDRCxtQkFBT1ksS0FBSyxDQUFDbkIsU0FBTixDQUFnQnVCLEdBQWhCLENBQVA7QUFDSCxXQVJVO0FBRmY7QUFZSDs7QUFDRDtBQUNJLGFBQU9KLEtBQVA7QUF2QlI7QUF5QkgsQ0ExQkQ7O0FBNEJlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU3MDAyMTlmZjNjMDdhNDJkMDI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAn7LCs7JqxJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgICAgIEltYWdlczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogJy4uL2Fzc2V0L2ltZ3MvY3MuanBnJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnLi4vYXNzZXQvaW1ncy9kb3dubG9hZC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6ICcuLi9hc3NldC9pbWdzL2Rvd25sb2FkLnBuZycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBDb21tZW50czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6ICd1c2VyMScsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnY29tbWVudCAxJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ3VzZXIyJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdjb21tZW50IDInLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAndXNlcjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ2NvbW1lbnQgMycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICAgIHR5cGU6IEFERF9QT1NULFxyXG59O1xyXG5cclxuY29uc3QgQUREX0NPTU1FTlQgPSAnQUREX0NPTU1FTlQnO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChwYXlsb2FkKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlQsXHJcbiAgICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgY29udGVudDogJ2R1bW15Q29udGVudCcsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICdkdW1teVVzZXInLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn07XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSB7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgbmlja25hbWU6ICd1c2VyMScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogJ2NvbW1lbnQxJyxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBuaWNrbmFtZTogJ3VzZXIyJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiAnY29tbWVudDInLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlQ6IHtcclxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5tYWluUG9zdHNbYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbWVudHM6IFtkdW1teUNvbW1lbnQsIC4uLnN0YXRlLm1haW5Qb3N0c1thY3Rpb24ucGF5bG9hZF0uQ29tbWVudHNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUubWFpblBvc3RzW2lkeF07XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==