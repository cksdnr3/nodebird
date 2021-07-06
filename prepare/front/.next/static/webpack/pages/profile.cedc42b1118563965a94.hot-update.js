webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./components/NicknameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\cksdn\\dev\\project\\nodebird\\prepare\\front\\components\\NicknameEditForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var NicknameEditForm = function NicknameEditForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      myInfo = _useSelector.myInfo;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])((myInfo === null || myInfo === void 0 ? void 0 : myInfo.nickname) || ''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      onChangeNickname = _useInput2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _actions_user__WEBPACK_IMPORTED_MODULE_5__["CHANGE_NICKNAME_REQUEST"],
      data: nickname
    });
  }, [nickname]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px'
    },
    onFinish: onSubmit,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
      value: nickname,
      onChange: onChangeNickname,
      addonBefore: "\uB2C9\uB124\uC784",
      enterButton: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(NicknameEditForm, "05eEiq0t3TUaV5yp5GGXmitjGsI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = NicknameEditForm;
/* harmony default export */ __webpack_exports__["default"] = (NicknameEditForm);

var _c;

$RefreshReg$(_c, "NicknameEditForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzIl0sIm5hbWVzIjpbIk5pY2tuYW1lRWRpdEZvcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm15SW5mbyIsInVzZUlucHV0Iiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJkYXRhIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFDN0IscUJBQW1CQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUE5QjtBQUFBLE1BQVFDLE1BQVIsZ0JBQVFBLE1BQVI7O0FBQ0Esa0JBQXFDQywrREFBUSxDQUFDLENBQUFELE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFRSxRQUFSLEtBQW9CLEVBQXJCLENBQTdDO0FBQUE7QUFBQSxNQUFPQSxRQUFQO0FBQUEsTUFBaUJDLGdCQUFqQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDakNILFlBQVEsQ0FBQztBQUNQSSxVQUFJLEVBQUVDLHFFQURDO0FBRVBDLFVBQUksRUFBRVI7QUFGQyxLQUFELENBQVI7QUFJRCxHQUwyQixFQUt6QixDQUFDQSxRQUFELENBTHlCLENBQTVCO0FBT0Esc0JBQ0UscUVBQUMseUNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRVMsa0JBQVksRUFBRSxNQUFoQjtBQUF3QkMsWUFBTSxFQUFFLG1CQUFoQztBQUFxREMsYUFBTyxFQUFFO0FBQTlELEtBRFQ7QUFFRSxZQUFRLEVBQUVQLFFBRlo7QUFBQSwyQkFJRSxxRUFBQywwQ0FBRCxDQUFPLE1BQVA7QUFDRSxXQUFLLEVBQUVKLFFBRFQ7QUFFRSxjQUFRLEVBQUVDLGdCQUZaO0FBR0UsaUJBQVcsRUFBQyxvQkFIZDtBQUlFLGlCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0F6QkQ7O0dBQU1QLGdCO1VBQ2VDLHVELEVBQ2tCSSx1RCxFQUNwQkksdUQ7OztLQUhiVCxnQjtBQTJCU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5jZWRjNDJiMTExODU2Mzk2NWE5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcblxyXG5jb25zdCBOaWNrbmFtZUVkaXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbXlJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dChteUluZm8/Lm5pY2tuYW1lIHx8ICcnKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgICAgZGF0YTogbmlja25hbWUsXHJcbiAgICB9KTtcclxuICB9LCBbbmlja25hbWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI2Q5ZDlkOScsIHBhZGRpbmc6ICcyMHB4JyB9fVxyXG4gICAgICBvbkZpbmlzaD17b25TdWJtaXR9XHJcbiAgICA+XHJcbiAgICAgIDxJbnB1dC5TZWFyY2hcclxuICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgYWRkb25CZWZvcmU9XCLri4nrhKTsnoRcIlxyXG4gICAgICAgIGVudGVyQnV0dG9uPVwi7IiY7KCVXCJcclxuICAgICAgLz5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmlja25hbWVFZGl0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==