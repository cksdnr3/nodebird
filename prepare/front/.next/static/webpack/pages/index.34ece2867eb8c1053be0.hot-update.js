webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _FollowBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FollowBtn */ "./components/FollowBtn.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\cksdn\\dev\\project\\nodebird\\prepare\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();















var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$myInfo;

    return (_state$user$myInfo = state.user.myInfo) === null || _state$user$myInfo === void 0 ? void 0 : _state$user$myInfo.id;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      deletePostLoading = _useSelector.deletePostLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var liked = post.Likers.find(function (l) {
    return l.id === id;
  });
  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      console.log('로그인이 필요합니다.');
    }

    dispatch({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_10__["LIKE_REQUEST"],
      data: post.id
    });
  }, []);
  var onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      console.log('로그인이 필요합니다.');
    }

    dispatch({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_REQUEST"],
      data: post.id
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      console.log('로그인이 필요합니다.');
    }

    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var clickDeleteBtn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      console.log('로그인이 필요합니다.');
    }

    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_9__["deletePostRequestAction"])(post.id));
  }, [post.id]);
  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      console.log('로그인이 필요합니다.');
    }

    dispatch({
      type: _actions_post__WEBPACK_IMPORTED_MODULE_10__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    style: {
      marginBottom: 10
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 34
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              loading: deletePostLoading,
              onClick: clickDeleteBtn,
              type: "danger",
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 21
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC2E0\uACE0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 21
            }, _this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, _this)],
      extra: id && id !== post.User.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_FollowBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 45
      }, _this),
      children: post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        cover: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
          images: post.Retweet.Images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 48
        }, _this),
        title: "".concat(post.User.nickname, "\uB2D8\uC774 \uB9AC\uD2B8\uC717 \uD588\uC2B5\uB2C8\uB2E4."),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
            children: post.User.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, _this),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
            postData: post.Retweet.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 30
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 23
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 28
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
        renderItem: function renderItem(item) {
          return post.Comments.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
              content: item.content,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 29
              }, _this),
              author: item.User.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 17
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {}, void 0, false);
        },
        header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
        dataSource: post.Comments,
        itemLayout: "horizontal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, _this);
};

_s(PostCard, "lIlXmNaRSzsTBW80fhflvQjmDY4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      nickname: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
      id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
    }),
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any).isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibXlJbmZvIiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwiZGVsZXRlUG9zdExvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwibCIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJMSUtFX1JFUVVFU1QiLCJkYXRhIiwib25Vbmxpa2UiLCJVTkxJS0VfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJjbGlja0RlbGV0ZUJ0biIsImRlbGV0ZVBvc3RSZXF1ZXN0QWN0aW9uIiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIlJldHdlZXQiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJpdGVtIiwiQ29tbWVudHMiLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsInN0cmluZyIsImNyZWF0ZWRBdCIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwib2JqZWN0Iiwib2JqZWN0T2YiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsaUNBQVdBLEtBQUssQ0FB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LENBQUNHLE1BREE7QUFFcEIzQyxRQUFFLEVBQUV3QyxpREFBUyxDQUFDRTtBQUZNLEtBQWhCLENBRmM7QUFNcEJQLFdBQU8sRUFBRUssaURBQVMsQ0FBQ0csTUFOQztBQU9wQkMsYUFBUyxFQUFFSixpREFBUyxDQUFDRyxNQUFWLENBQWlCRSxVQVBSO0FBUXBCUixZQUFRLEVBQUVHLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNPLE1BQTVCLENBUlU7QUFTcEJoQixVQUFNLEVBQUVTLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNPLE1BQTVCLENBVFk7QUFVcEJuQyxVQUFNLEVBQUU0QixpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDTyxNQUE1QixDQVZZO0FBV3BCZCxXQUFPLEVBQUVPLGlEQUFTLENBQUNRLFFBQVYsQ0FBbUJSLGlEQUFTLENBQUNTLEdBQTdCLEVBQWtDSjtBQVh2QixHQUFoQixFQVlIQTtBQWJnQixDQUFyQjtBQWdCZS9DLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM0ZWNlMjg2N2ViOGMxMDUzYmUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEF2YXRhciwgUG9wb3ZlciwgTGlzdCwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRUd29Ub25lIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBGb2xsb3dCdG4gZnJvbSAnLi9Gb2xsb3dCdG4nO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSAnLi9Qb3N0Q2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgeyBkZWxldGVQb3N0UmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBMSUtFX1JFUVVFU1QsIFJFVFdFRVRfUkVRVUVTVCwgVU5MSUtFX1JFUVVFU1QgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5teUluZm8/LmlkKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGRlbGV0ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgobCkgPT4gbC5pZCA9PT0gaWQpO1xyXG4gIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVU5MSUtFX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICB9XHJcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2xpY2tEZWxldGVCdG4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24ocG9zdC5pZCkpO1xyXG4gIH0sIFtwb3N0LmlkXSk7XHJcblxyXG4gIGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9IC8+LFxyXG4gICAgICAgICAgbGlrZWQgPyAoXHJcbiAgICAgICAgICAgIDxIZWFydFR3b1RvbmVcclxuICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcclxuICAgICAgICAgICAgICBrZXk9XCJoZWFydFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25Vbmxpa2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8SGVhcnRPdXRsaW5lZFxyXG4gICAgICAgICAgICAgIGtleT1cImhlYXJ0XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxpa2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZFxyXG4gICAgICAgICAgICBrZXk9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVDb21tZW50fVxyXG4gICAgICAgICAgLz4sXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcclxuICAgICAgICAgICAgY29udGVudD17KFxyXG4gICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17ZGVsZXRlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e2NsaWNrRGVsZXRlQnRufSB0eXBlPVwiZGFuZ2VyXCI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgIF19XHJcbiAgICAgICAgZXh0cmE9e2lkICYmIGlkICE9PSBwb3N0LlVzZXIuaWQgJiYgPEZvbGxvd0J0biBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgPlxyXG4gICAgICAgIHtwb3N0LlJldHdlZXRcclxuICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIGNvdmVyPXtwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5SZXR3ZWV0LkltYWdlc30gLz59XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2Ake3Bvc3QuVXNlci5uaWNrbmFtZX3ri5jsnbQg66as7Yq47JyXIO2WiOyKteuLiOuLpC5gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuUmV0d2VldC5jb250ZW50fSAvPn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICA6IChcclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKHBvc3QuQ29tbWVudHMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogPD48Lz4pfVxyXG4gICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBuaWNrbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB9KSxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBMaWtlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgUmV0d2VldDogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9