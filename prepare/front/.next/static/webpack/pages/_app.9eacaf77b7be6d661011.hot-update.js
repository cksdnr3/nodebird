webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");

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
  }]
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FDUDtBQUNJQyxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGVjtBQU1JQyxXQUFPLEVBQUUsdUJBTmI7QUFPSUMsVUFBTSxFQUFFLENBQ0o7QUFDSUMsU0FBRyxFQUFFO0FBRFQsS0FESSxFQUlKO0FBQ0lBLFNBQUcsRUFBRTtBQURULEtBSkksRUFPSjtBQUNJQSxTQUFHLEVBQUU7QUFEVCxLQVBJLENBUFo7QUFrQklDLFlBQVEsRUFBRSxDQUNOO0FBQ0lMLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEVjtBQUlJQyxhQUFPLEVBQUU7QUFKYixLQURNLEVBT047QUFDSUYsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBUE0sRUFhTjtBQUNJRixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFY7QUFJSUMsYUFBTyxFQUFFO0FBSmIsS0FiTTtBQWxCZCxHQURPO0FBRGEsQ0FBckI7QUE0Q1AsSUFBTUksUUFBUSxHQUFHLFVBQWpCO0FBQ08sSUFBTUMsT0FBTyxHQUFHO0FBQ25CQyxNQUFJLEVBQUVGO0FBRGEsQ0FBaEI7O0FBSVAsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCYixZQUF5QjtBQUFBLE1BQVhjLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0gsSUFBZjtBQUNJO0FBQ0ksYUFBT0UsS0FBUDtBQUZSO0FBSUgsQ0FMRDs7QUFPZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ZWFjYWY3N2I3YmU2ZDY2MTAxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ+ywrOyasScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgICAgICBJbWFnZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6ICcuLi9hc3NldC9pbWdzL2NzLmpwZycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogJy4uL2Fzc2V0L2ltZ3MvZG93bmxvYWQuanBnJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnLi4vYXNzZXQvaW1ncy9kb3dubG9hZC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAndXNlcjEnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ2NvbW1lbnQgMScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6ICd1c2VyMicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnY29tbWVudCAyJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ3VzZXIzJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdjb21tZW50IDMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XHJcbiAgICB0eXBlOiBBRERfUE9TVCxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=