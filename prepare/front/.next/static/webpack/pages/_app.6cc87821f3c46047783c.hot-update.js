webpackHotUpdate_N_E("pages/_app",{

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
        draft.hasMorePosts = draft.mainPosts.length < 50;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJkdW1teVBvc3RzR2VuZXJhdG9yIiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJ2NCIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZGVsZXRlUG9zdExvYWRpbmciLCJkZWxldGVQb3N0RG9uZSIsImRlbGV0ZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJoYXNNb3JlUG9zdHMiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsImRlbGV0ZVBvc3RSZXF1ZXN0QWN0aW9uIiwiREVMRVRFX1BPU1RfUkVRVUVTVCIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImR1bW15UG9zdCIsInRleHQiLCJteUluZm8iLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJBRERfUE9TVF9TVUNDRVNTIiwidW5zaGlmdCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJlcnJvciIsIkRFTEVURV9QT1NUX1NVQ0NFU1MiLCJmaWx0ZXIiLCJwIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJmaW5kIiwicG9zdElkIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJjb25jYXQiLCJsZW5ndGgiLCJMT0FEX1BPU1RfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsTUFBRDtBQUFBLFNBQVlDLEtBQUssQ0FBQ0QsTUFBRCxDQUFMLENBQWNFLElBQWQsR0FBcUJDLEdBQXJCLENBQXlCO0FBQUEsV0FBTztBQUM3RUMsUUFBRSxFQUFFQywrQ0FBRSxFQUR1RTtBQUU3RUMsVUFBSSxFQUFFO0FBQ0pGLFVBQUUsRUFBRUMsK0NBQUUsRUFERjtBQUVKRSxnQkFBUSxFQUFFQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVg7QUFGTixPQUZ1RTtBQU03RUMsYUFBTyxFQUFFSCw0Q0FBSyxDQUFDSSxLQUFOLENBQVlDLFNBQVosRUFOb0U7QUFPN0VDLFlBQU0sRUFBRSxDQUFDO0FBQ1BDLFdBQUcsRUFBRVAsNENBQUssQ0FBQ1EsS0FBTixDQUFZQSxLQUFaO0FBREUsT0FBRCxDQVBxRTtBQVU3RUMsY0FBUSxFQUFFLENBQUM7QUFDVFgsWUFBSSxFQUFFO0FBQ0pGLFlBQUUsRUFBRUMsK0NBQUUsRUFERjtBQUVKRSxrQkFBUSxFQUFFQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVg7QUFGTixTQURHO0FBS1RDLGVBQU8sRUFBRUgsNENBQUssQ0FBQ0ksS0FBTixDQUFZTSxRQUFaO0FBTEEsT0FBRDtBQVZtRSxLQUFQO0FBQUEsR0FBekIsQ0FBWjtBQUFBLENBQTVCO0FBbUJBLElBQU1DLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLEVBRGU7QUFFMUJDLFlBQVUsRUFBRSxFQUZjO0FBRzFCQyxnQkFBYyxFQUFFLEtBSFU7QUFJMUJD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V0FBS2tDLCtEQUFMO0FBQ0VkLGFBQUssQ0FBQ3BCLGdCQUFOLEdBQXlCLElBQXpCO0FBQ0FvQixhQUFLLENBQUNwQixnQkFBTixHQUF5QixLQUF6QjtBQUNBb0IsYUFBSyxDQUFDL0IsU0FBTixHQUFrQjZCLE1BQU0sQ0FBQ2IsSUFBUCxDQUFZOEIsTUFBWixDQUFtQmYsS0FBSyxDQUFDL0IsU0FBekIsQ0FBbEI7QUFDQStCLGFBQUssQ0FBQ2pCLFlBQU4sR0FBcUJpQixLQUFLLENBQUMvQixTQUFOLENBQWdCK0MsTUFBaEIsR0FBeUIsRUFBOUM7QUFDQTs7QUFDRixXQUFLQywrREFBTDtBQUNFakIsYUFBSyxDQUFDcEIsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQW9CLGFBQUssQ0FBQ2xCLGNBQU4sR0FBdUJnQixNQUFNLENBQUNNLEtBQTlCO0FBQ0E7O0FBRUY7QUFBUztBQTVEWDtBQThERCxHQS9Ed0QsQ0FBekM7QUFBQSxDQUFoQjs7QUFpRWVSLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmNjODc4MjFmM2M0NjA0Nzc4M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgREVMRVRFX1BPU1RfRkFJTFVSRSwgREVMRVRFX1BPU1RfUkVRVUVTVCwgREVMRVRFX1BPU1RfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUsIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUyB9IGZyb20gJy4uL2FjdGlvbnMvcG9zdCc7XHJcblxyXG5leHBvcnQgY29uc3QgZHVtbXlQb3N0c0dlbmVyYXRvciA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gIGlkOiB2NCgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiB2NCgpLFxyXG4gICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gIEltYWdlczogW3tcclxuICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICB9XSxcclxuICBDb21tZW50czogW3tcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IHY0KCksXHJcbiAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICB9XSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIGRlbGV0ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBkZWxldGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgZGVsZXRlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBERUxFVEVfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS50ZXh0LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiBkYXRhLm15SW5mby5pZCxcclxuICAgIG5pY2tuYW1lOiBkYXRhLm15SW5mby5uaWNrbmFtZSxcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiB2NCgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiBkYXRhLm15SW5mby5pZCxcclxuICAgIG5pY2tuYW1lOiBkYXRhLm15SW5mby5uaWNrbmFtZSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgLy8gaW1tZXIg7IKs7JqpXHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAvLyBpbW1lciDsgqzsmqkgWFxyXG4gICAgICAvLyBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmRlbGV0ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgREVMRVRFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZGVsZXRlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZGVsZXRlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZmluZCgocCkgPT4gcC5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKVxyXG4gICAgICAgIC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAvLyAgIGRyYWZ0Lm1haW5Qb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgIC8vICAgICBpZiAocG9zdC5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKSB7XHJcbiAgICAgIC8vICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=