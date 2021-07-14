webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\cksdn\\dev\\project\\nodebird\\prepare\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();













var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url, {
    withCredentials: true
  }).then(function (res) {
    return res.data;
  });
};

var Profile = function Profile() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      myInfo = _useSelector.myInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      followerLimit = _useState[0],
      setFollowerLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      followingLimit = _useState2[0],
      setFollowingLimit = _useState2[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])("http://localhost:3065/user/followers?limit=".concat(followerLimit), fetcher),
      followersData = _useSWR.data,
      followerError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])("http://localhost:3065/user/followings?limit=".concat(followingLimit), fetcher),
      followingsData = _useSWR2.data,
      followingError = _useSWR2.error;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(myInfo && myInfo.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
    }
  }, [myInfo]);
  var showFollowerMore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowerLimit(function (prev) {
      return prev + 3;
    });
  }, [followerLimit]);
  var showFollowingMore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowingLimit(function (prev) {
      return prev + 3;
    });
  }, [followingLimit]);

  if (!myInfo) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
      children: "\uB0B4 \uC815\uBCF4 \uB85C\uB529 \uC911..."
    }, void 0, false);
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: "\uD314\uB85C\uC789, \uD314\uB85C\uC6CC \uB85C\uB529 \uC2E4\uD328"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("title", {
        children: "Profile | NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
        header: "\uD314\uB85C\uC789",
        data: followingsData,
        showMore: showFollowingMore,
        loading: !followingsData && !followingError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
        header: "\uD314\uB85C\uC6CC",
        data: followersData,
        showMore: showFollowerMore,
        loading: !followersData && !followerError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Profile, "iX8Zgq6zjsELmg9JLFseHIi7en8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_5__["default"], swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Profile;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlByb2ZpbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm15SW5mbyIsInVzZVN0YXRlIiwiZm9sbG93ZXJMaW1pdCIsInNldEZvbGxvd2VyTGltaXQiLCJmb2xsb3dpbmdMaW1pdCIsInNldEZvbGxvd2luZ0xpbWl0IiwidXNlU1dSIiwiZm9sbG93ZXJzRGF0YSIsImZvbGxvd2VyRXJyb3IiLCJlcnJvciIsImZvbGxvd2luZ3NEYXRhIiwiZm9sbG93aW5nRXJyb3IiLCJ1c2VFZmZlY3QiLCJpZCIsIlJvdXRlciIsInJlcGxhY2UiLCJzaG93Rm9sbG93ZXJNb3JlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwic2hvd0ZvbGxvd2luZ01vcmUiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBTUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBYjtBQUFBLEdBQS9DLENBQVQ7QUFBQSxDQUFoQjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLHFCQUFtQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBOUI7QUFBQSxNQUFRQyxNQUFSLGdCQUFRQSxNQUFSOztBQUVBLGtCQUEwQ0Msc0RBQVEsQ0FBQyxDQUFELENBQWxEO0FBQUEsTUFBT0MsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTRDRixzREFBUSxDQUFDLENBQUQsQ0FBcEQ7QUFBQSxNQUFPRyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFFQSxnQkFBc0RDLG1EQUFNLHNEQUErQ0osYUFBL0MsR0FBZ0VkLE9BQWhFLENBQTVEO0FBQUEsTUFBY21CLGFBQWQsV0FBUVosSUFBUjtBQUFBLE1BQW9DYSxhQUFwQyxXQUE2QkMsS0FBN0I7O0FBQ0EsaUJBQXdESCxtREFBTSx1REFBZ0RGLGNBQWhELEdBQWtFaEIsT0FBbEUsQ0FBOUQ7QUFBQSxNQUFjc0IsY0FBZCxZQUFRZixJQUFSO0FBQUEsTUFBcUNnQixjQUFyQyxZQUE4QkYsS0FBOUI7O0FBRUFHLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksRUFBRVosTUFBTSxJQUFJQSxNQUFNLENBQUNhLEVBQW5CLENBQUosRUFBNEI7QUFDMUJDLHdEQUFNLENBQUNDLE9BQVAsQ0FBZSxHQUFmO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ2YsTUFBRCxDQUpNLENBQVQ7QUFNQSxNQUFNZ0IsZ0JBQWdCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN6Q2Qsb0JBQWdCLENBQUMsVUFBQ2UsSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBaEI7QUFDRCxHQUZtQyxFQUVqQyxDQUFDaEIsYUFBRCxDQUZpQyxDQUFwQztBQUlBLE1BQU1pQixpQkFBaUIsR0FBR0YseURBQVcsQ0FBQyxZQUFNO0FBQzFDWixxQkFBaUIsQ0FBQyxVQUFDYSxJQUFEO0FBQUEsYUFBVUEsSUFBSSxHQUFHLENBQWpCO0FBQUEsS0FBRCxDQUFqQjtBQUNELEdBRm9DLEVBRWxDLENBQUNkLGNBQUQsQ0FGa0MsQ0FBckM7O0FBSUEsTUFBSSxDQUFDSixNQUFMLEVBQWE7QUFDWCx3QkFBTztBQUFBO0FBQUEscUJBQVA7QUFDRDs7QUFFRCxNQUFJUSxhQUFhLElBQUlHLGNBQXJCLEVBQXFDO0FBQ25DUyxXQUFPLENBQUNYLEtBQVIsQ0FBY0QsYUFBYSxJQUFJRyxjQUEvQjtBQUNBLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxxRUFBQyw2REFBRDtBQUFBLDhCQUNFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLDhEQUFEO0FBQVksY0FBTSxFQUFDLG9CQUFuQjtBQUF5QixZQUFJLEVBQUVELGNBQS9CO0FBQStDLGdCQUFRLEVBQUVTLGlCQUF6RDtBQUE0RSxlQUFPLEVBQUUsQ0FBQ1QsY0FBRCxJQUFtQixDQUFDQztBQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQyw4REFBRDtBQUFZLGNBQU0sRUFBQyxvQkFBbkI7QUFBeUIsWUFBSSxFQUFFSixhQUEvQjtBQUE4QyxnQkFBUSxFQUFFUyxnQkFBeEQ7QUFBMEUsZUFBTyxFQUFFLENBQUNULGFBQUQsSUFBa0IsQ0FBQ0M7QUFBdEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFZRCxDQTVDRDs7R0FBTVosTztVQUNlQyx1RCxFQUttQ1MsMkMsRUFDRUEsMkM7OztLQVBwRFYsTzs7QUE0RFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNDY4ZWI4NWU4OGZiZjRmOTRkYjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IHtcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxufSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9Db25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbXlJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbZm9sbG93ZXJMaW1pdCwgc2V0Rm9sbG93ZXJMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuICBjb25zdCBbZm9sbG93aW5nTGltaXQsIHNldEZvbGxvd2luZ0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGVycm9yOiBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2Vycz9saW1pdD0ke2ZvbGxvd2VyTGltaXR9YCwgZmV0Y2hlcik7XHJcbiAgY29uc3QgeyBkYXRhOiBmb2xsb3dpbmdzRGF0YSwgZXJyb3I6IGZvbGxvd2luZ0Vycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdMaW1pdH1gLCBmZXRjaGVyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghKG15SW5mbyAmJiBteUluZm8uaWQpKSB7XHJcbiAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICB9XHJcbiAgfSwgW215SW5mb10pO1xyXG5cclxuICBjb25zdCBzaG93Rm9sbG93ZXJNb3JlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Rm9sbG93ZXJMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gIH0sIFtmb2xsb3dlckxpbWl0XSk7XHJcblxyXG4gIGNvbnN0IHNob3dGb2xsb3dpbmdNb3JlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Rm9sbG93aW5nTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICB9LCBbZm9sbG93aW5nTGltaXRdKTtcclxuXHJcbiAgaWYgKCFteUluZm8pIHtcclxuICAgIHJldHVybiA8PuuCtCDsoJXrs7Qg66Gc65SpIOykkS4uLjwvPjtcclxuICB9XHJcblxyXG4gIGlmIChmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IpO1xyXG4gICAgcmV0dXJuIDxkaXY+7YyU66Gc7J6JLCDtjJTroZzsm4wg66Gc65SpIOyLpO2MqDwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UHJvZmlsZSB8IE5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgIDxOaWNrbmFtZUVkaXRGb3JtIC8+XHJcbiAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JXCIgZGF0YT17Zm9sbG93aW5nc0RhdGF9IHNob3dNb3JlPXtzaG93Rm9sbG93aW5nTW9yZX0gbG9hZGluZz17IWZvbGxvd2luZ3NEYXRhICYmICFmb2xsb3dpbmdFcnJvcn0gLz5cclxuICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsm4xcIiBkYXRhPXtmb2xsb3dlcnNEYXRhfSBzaG93TW9yZT17c2hvd0ZvbGxvd2VyTW9yZX0gbG9hZGluZz17IWZvbGxvd2Vyc0RhdGEgJiYgIWZvbGxvd2VyRXJyb3J9IC8+XHJcbiAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdnZXRTZXJ2ZXJTaWRlUHJvcHMgc3RhcnQnKTtcclxuICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgY29uc29sZS5sb2coJ2dldFNlcnZlclNpZGVQcm9wcyBlbmQnKTtcclxuICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==