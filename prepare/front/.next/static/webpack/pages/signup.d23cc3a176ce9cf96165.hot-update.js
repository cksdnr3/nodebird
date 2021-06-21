webpackHotUpdate_N_E("pages/signup",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\cksdn\\dev\\project\\nodebird\\prepare\\front\\components\\LoginForm.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();







var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    margin-top: 10px;\n"])));
_c = ButtonWrapper;

var LoginForm = function LoginForm(_ref) {
  _s();

  var setIsLoggedin = _ref.setIsLoggedin;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var onSubmitLoginForm = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    console.log(id, passwd);
    setIsLoggedin(true);
  }, [id, passwd]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onSubmitLoginForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
        htmlFor: "user-id",
        children: "\uC544\uC774\uB514"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        name: "user-id",
        value: id,
        onChange: onChangeId,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
        htmlFor: "user-passwd",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        name: "user-passwd",
        value: passwd,
        onChange: onChangePasswd,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: false,
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "Signup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_s(LoginForm, "rx7G1WHJBYOFRUamkGbxVw9D3h8=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c2 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "LoginForm");

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

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var initialInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialInput),
      input = _useState[0],
      setInput = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setInput(e.target.value);
  }, []);
  return [input, handler];
}, "84sq0c22w3s9qU9SBhoR0nGCSvE="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUlucHV0LmpzIl0sIm5hbWVzIjpbIkJ1dHRvbldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJMb2dpbkZvcm0iLCJzZXRJc0xvZ2dlZGluIiwidXNlSW5wdXQiLCJpZCIsIm9uQ2hhbmdlSWQiLCJvblN1Ym1pdExvZ2luRm9ybSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInBhc3N3ZCIsIm9uQ2hhbmdlUGFzc3dkIiwiaW5pdGlhbElucHV0IiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsd0tBQW5CO0tBQU1GLGE7O0FBSU4sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUNyQyxrQkFBeUJDLCtEQUFRLENBQUMsRUFBRCxDQUFqQztBQUFBO0FBQUEsTUFBT0MsRUFBUDtBQUFBLE1BQVdDLFVBQVg7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN4Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVlMLEVBQVosRUFBZ0JNLE1BQWhCO0FBQ0FSLGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0gsR0FIb0MsRUFHbEMsQ0FBQ0UsRUFBRCxFQUFLTSxNQUFMLENBSGtDLENBQXJDO0FBS0Esc0JBQ0kscUVBQUMseUNBQUQ7QUFBTSxZQUFRLEVBQUVKLGlCQUFoQjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBTyxlQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0kscUVBQUMsMENBQUQ7QUFBTyxZQUFJLEVBQUMsU0FBWjtBQUFzQixhQUFLLEVBQUVGLEVBQTdCO0FBQWlDLGdCQUFRLEVBQUVDLFVBQTNDO0FBQXVELGdCQUFRO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUEsOEJBQ0k7QUFBTyxlQUFPLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0kscUVBQUMsMENBQUQ7QUFBTyxZQUFJLEVBQUMsYUFBWjtBQUEwQixhQUFLLEVBQUVLLE1BQWpDO0FBQXlDLGdCQUFRLEVBQUVDLGNBQW5EO0FBQW1FLGdCQUFRO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixlQVdJLHFFQUFDLGFBQUQ7QUFBQSw4QkFDSSxxRUFBQywyQ0FBRDtBQUFRLFlBQUksRUFBQyxTQUFiO0FBQXVCLGdCQUFRLEVBQUMsUUFBaEM7QUFBeUMsZUFBTyxFQUFFLEtBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQUEsK0JBQ0k7QUFBQSxpQ0FDSSxxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3QkgsQ0FoQ0Q7O0dBQU1WLFM7VUFDdUJFLHVEOzs7TUFEdkJGLFM7QUFrQ1NBLHdFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBRWUsOEVBQXlCO0FBQUE7O0FBQUEsTUFBeEJXLFlBQXdCLHVFQUFULElBQVM7O0FBQ3BDLGtCQUEwQkMsc0RBQVEsQ0FBQ0QsWUFBRCxDQUFsQztBQUFBLE1BQU9FLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLE1BQU1DLE9BQU8sR0FBR1QseURBQVcsQ0FBQyxVQUFDVSxDQUFELEVBQU87QUFDL0JGLFlBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNILEdBRjBCLEVBRXhCLEVBRndCLENBQTNCO0FBSUEsU0FBTyxDQUFDTCxLQUFELEVBQVFFLE9BQVIsQ0FBUDtBQUNILENBUEQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmQyM2NjM2ExNzZjZTljZjk2MTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoeyBzZXRJc0xvZ2dlZGluIH0pID0+IHtcclxuICAgIGNvbnN0IFtpZCwgb25DaGFuZ2VJZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRMb2dpbkZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQsIHBhc3N3ZCk7XHJcbiAgICAgICAgc2V0SXNMb2dnZWRpbih0cnVlKTtcclxuICAgIH0sIFtpZCwgcGFzc3dkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRMb2dpbkZvcm19PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWlkXCIgdmFsdWU9e2lkfSBvbkNoYW5nZT17b25DaGFuZ2VJZH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLXBhc3N3ZFwiIHZhbHVlPXtwYXNzd2R9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3ZH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlNpZ251cDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsSW5wdXQgPSBudWxsKSA9PiB7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGluaXRpYWxJbnB1dCk7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIFtpbnB1dCwgaGFuZGxlcl07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=