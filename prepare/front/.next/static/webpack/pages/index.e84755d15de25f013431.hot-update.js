webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowBtn.js":
/*!*********************************!*\
  !*** ./components/FollowBtn.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\cksdn\\dev\\project\\nodebird\\prepare\\front\\components\\FollowBtn.js",
    _this = undefined,
    _s = $RefreshSig$();









var FollowBtn = function FollowBtn(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      myInfo = _useSelector.myInfo,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading;

  var following = myInfo === null || myInfo === void 0 ? void 0 : myInfo.Followings.find(function (f) {
    return f.id === post.User.id;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var followHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (following) {
      dispatch({
        type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _actions_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [following]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      loading: followLoading || unfollowLoading,
      onClick: followHandler,
      children: following ? 'Unfollow' : 'Follow'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(FollowBtn, "NgxVj/EU7UIHvvAEk9HQpfbGNMY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = FollowBtn;
FollowBtn.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape().isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowBtn);

var _c;

$RefreshReg$(_c, "FollowBtn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdG4uanMiXSwibmFtZXMiOlsiRm9sbG93QnRuIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibXlJbmZvIiwiZm9sbG93TG9hZGluZyIsInVuZm9sbG93TG9hZGluZyIsImZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwiZiIsImlkIiwiVXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJmb2xsb3dIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJGT0xMT1dfUkVRVUVTVCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzlCLHFCQUFtREMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBOUQ7QUFBQSxNQUFRQyxNQUFSLGdCQUFRQSxNQUFSO0FBQUEsTUFBZ0JDLGFBQWhCLGdCQUFnQkEsYUFBaEI7QUFBQSxNQUErQkMsZUFBL0IsZ0JBQStCQSxlQUEvQjs7QUFDQSxNQUFNQyxTQUFTLEdBQUdILE1BQUgsYUFBR0EsTUFBSCx1QkFBR0EsTUFBTSxDQUFFSSxVQUFSLENBQW1CQyxJQUFuQixDQUF3QixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNYLElBQUksQ0FBQ1ksSUFBTCxDQUFVRCxFQUExQjtBQUFBLEdBQXhCLENBQWxCO0FBRUEsTUFBTUUsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3RDLFFBQUlULFNBQUosRUFBZTtBQUNiTSxjQUFRLENBQUM7QUFDUEksWUFBSSxFQUFFQyw4REFEQztBQUVQQyxZQUFJLEVBQUVuQixJQUFJLENBQUNZLElBQUwsQ0FBVUQ7QUFGVCxPQUFELENBQVI7QUFJRCxLQUxELE1BS087QUFDTEUsY0FBUSxDQUFDO0FBQ1BJLFlBQUksRUFBRUcsNERBREM7QUFFUEQsWUFBSSxFQUFFbkIsSUFBSSxDQUFDWSxJQUFMLENBQVVEO0FBRlQsT0FBRCxDQUFSO0FBSUQ7QUFDRixHQVpnQyxFQVk5QixDQUFDSixTQUFELENBWjhCLENBQWpDO0FBYUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQywyQ0FBRDtBQUFRLGFBQU8sRUFBRUYsYUFBYSxJQUFJQyxlQUFsQztBQUFtRCxhQUFPLEVBQUVTLGFBQTVEO0FBQUEsZ0JBQ0dSLFNBQVMsR0FBRyxVQUFILEdBQWdCO0FBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9ELENBekJEOztHQUFNUixTO1VBQytDRSx1RCxFQUdsQ2EsdUQ7OztLQUpiZixTO0FBMkJOQSxTQUFTLENBQUNzQixTQUFWLEdBQXNCO0FBQ3BCckIsTUFBSSxFQUFFc0IsaURBQVMsQ0FBQ0MsS0FBVixHQUFrQkM7QUFESixDQUF0QjtBQUllekIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTg0NzU1ZDE1ZGUyNWYwMTM0MzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xyXG5cclxuY29uc3QgRm9sbG93QnRuID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBteUluZm8sIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBmb2xsb3dpbmcgPSBteUluZm8/LkZvbGxvd2luZ3MuZmluZCgoZikgPT4gZi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGZvbGxvd0hhbmRsZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoZm9sbG93aW5nKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbZm9sbG93aW5nXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdXR0b24gbG9hZGluZz17Zm9sbG93TG9hZGluZyB8fCB1bmZvbGxvd0xvYWRpbmd9IG9uQ2xpY2s9e2ZvbGxvd0hhbmRsZXJ9PlxyXG4gICAgICAgIHtmb2xsb3dpbmcgPyAnVW5mb2xsb3cnIDogJ0ZvbGxvdyd9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvbGxvd0J0bi5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKCkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J0bjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==