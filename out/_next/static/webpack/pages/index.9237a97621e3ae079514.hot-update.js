/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./layouts/PublicLayout.js":
/*!*********************************!*\
  !*** ./layouts/PublicLayout.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PublicLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-wallet */ \"./node_modules/use-wallet/dist/index.js\");\n/* harmony import */ var _hooks_useGlobal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGlobal */ \"./hooks/useGlobal.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Dean/welfare/layouts/PublicLayout.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_6__.Layout.Header,\n    Content = antd__WEBPACK_IMPORTED_MODULE_6__.Layout.Content,\n    Footer = antd__WEBPACK_IMPORTED_MODULE_6__.Layout.Footer;\nvar Title = antd__WEBPACK_IMPORTED_MODULE_6__.Typography.Title,\n    Text = antd__WEBPACK_IMPORTED_MODULE_6__.Typography.Text;\nfunction PublicLayout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      drawer = _useState[0],\n      showDrawer = _useState[1];\n\n  var _useGlobal = (0,_hooks_useGlobal__WEBPACK_IMPORTED_MODULE_5__.default)(),\n      _useGlobal2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useGlobal, 2),\n      state = _useGlobal2[0],\n      actions = _useGlobal2[1];\n\n  var wallet = (0,use_wallet__WEBPACK_IMPORTED_MODULE_7__.useWallet)();\n  var renderWallet = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    if (wallet.status == 'connected' && wallet.account) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Space, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n          style: {\n            color: 'white'\n          },\n          children: [wallet.account.substr(0, 10), \"...\", wallet.account.substr(35)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n          type: \"danger\",\n          size: \"small\",\n          onClick: function onClick() {\n            return wallet.reset();\n          },\n          children: \"Disconnect\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n          type: \"primary\",\n          size: \"small\",\n          onClick: function onClick() {\n            return showDrawer(true);\n          },\n          children: \"Settings\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this);\n    }\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n      type: \"primary\",\n      onClick: function onClick() {\n        return wallet.connect();\n      },\n      children: \"Connect Wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 12\n    }, _this);\n  }, [wallet]); // COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6\n  // BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c\n  // WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab\n  // SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Drawer, {\n      title: \"Test Settings\",\n      placement: \"right\",\n      closable: true,\n      width: 500,\n      onClose: function onClose() {\n        return showDrawer(false);\n      },\n      visible: drawer,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Form.Item, {\n        label: \"Test Social Security\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n          copyable: true,\n          children: \"0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Input, {\n          name: \"social\",\n          placeholder: \"Social Security Address\",\n          allowClear: true,\n          size: \"large\",\n          value: state.security,\n          onChange: function onChange(e) {\n            return actions.setSecurity(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Form.Item, {\n        label: \"Test Command Center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n          copyable: true,\n          children: \"0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Input, {\n          name: \"command\",\n          placeholder: \"Command Center Address\",\n          allowClear: true,\n          value: state.center,\n          size: \"large\",\n          onChange: function onChange(e) {\n            return actions.setCenter(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Form.Item, {\n        label: \"Test Welfare Address\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n          copyable: true,\n          children: \"0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Input, {\n          name: \"command\",\n          placeholder: \"Welfare Address\",\n          allowClear: true,\n          value: state.welfare,\n          size: \"large\",\n          onChange: function onChange(e) {\n            return actions.setWelfare(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n      style: {\n        position: 'fixed',\n        zIndex: 1,\n        width: '100%',\n        display: 'flex',\n        flexDirection: 'row',\n        alignItems: 'center'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n        style: {\n          color: 'white',\n          marginBottom: 0,\n          marginRight: 30\n        },\n        level: 3,\n        children: \"Welfare\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        theme: \"dark\",\n        mode: \"horizontal\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n          onClick: function onClick() {\n            return next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');\n          },\n          children: \"Social Security\"\n        }, \"2\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n          onClick: function onClick() {\n            return next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/center');\n          },\n          children: \"Command Center\"\n        }, \"3\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n          onClick: function onClick() {\n            return next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/bonus');\n          },\n          children: \"Bonus Vault\"\n        }, \"4\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n          onClick: function onClick() {\n            return next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/welfare');\n          },\n          children: \"Welfare\"\n        }, \"5\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          flex: 1\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this), renderWallet()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n      className: \"site-layout\",\n      style: {\n        padding: \"0 50px\",\n        marginTop: 64,\n        minHeight: \"100vh\"\n      },\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n      style: {\n        textAlign: 'center'\n      },\n      children: \"All Rights Reserved 2021\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PublicLayout, \"WsvLsUENEt7Fk7DB/EUTG0lXaqk=\", false, function () {\n  return [_hooks_useGlobal__WEBPACK_IMPORTED_MODULE_5__.default, use_wallet__WEBPACK_IMPORTED_MODULE_7__.useWallet];\n});\n\n_c = PublicLayout;\n\nvar _c;\n\n$RefreshReg$(_c, \"PublicLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9QdWJsaWNMYXlvdXQuanM/MmU2NCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJDb250ZW50IiwiRm9vdGVyIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiVGV4dCIsIlB1YmxpY0xheW91dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJkcmF3ZXIiLCJzaG93RHJhd2VyIiwidXNlR2xvYmFsIiwic3RhdGUiLCJhY3Rpb25zIiwid2FsbGV0IiwidXNlV2FsbGV0IiwicmVuZGVyV2FsbGV0IiwidXNlQ2FsbGJhY2siLCJzdGF0dXMiLCJhY2NvdW50IiwiY29sb3IiLCJzdWJzdHIiLCJyZXNldCIsImNvbm5lY3QiLCJzZWN1cml0eSIsImUiLCJzZXRTZWN1cml0eSIsInRhcmdldCIsInZhbHVlIiwiY2VudGVyIiwic2V0Q2VudGVyIiwid2VsZmFyZSIsInNldFdlbGZhcmUiLCJwb3NpdGlvbiIsInpJbmRleCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJSb3V0ZXIiLCJmbGV4IiwicGFkZGluZyIsIm1hcmdpblRvcCIsIm1pbkhlaWdodCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDUUEsTSxHQUE0QkMsK0M7SUFBcEJDLE8sR0FBb0JELGdEO0lBQVhFLE0sR0FBV0YsK0M7SUFDNUJHLEssR0FBZ0JDLGtEO0lBQVRDLEksR0FBU0QsaUQ7QUFFVCxTQUFTRSxZQUFULE9BQW9DO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUNwQkMsK0NBQVEsQ0FBQyxLQUFELENBRFk7QUFBQSxNQUMxQ0MsTUFEMEM7QUFBQSxNQUNsQ0MsVUFEa0M7O0FBQUEsbUJBRXhCQyx5REFBUyxFQUZl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LE9BQXhDO0FBQUEsZ0JBQ0d0QztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExREYsZUE2REUsOERBQUMsTUFBRDtBQUFRLFdBQUssRUFBRTtBQUFFdUMsaUJBQVMsRUFBRTtBQUFiLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpRUQ7O0dBckd1QnhDLFk7VUFFR0sscUQsRUFDVkksaUQ7OztLQUhPVCxZIiwiZmlsZSI6Ii4vbGF5b3V0cy9QdWJsaWNMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUsIEJyZWFkY3J1bWIsIFNwYWNlLCBCdXR0b24sIFR5cG9ncmFwaHksIERyYXdlciwgSW5wdXQsIEZvcm0gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCdcbmltcG9ydCB1c2VHbG9iYWwgZnJvbSAnLi4vaG9va3MvdXNlR2xvYmFsJztcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dFxuY29uc3QgeyBUaXRsZSwgVGV4dCB9ID0gVHlwb2dyYXBoeVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWJsaWNMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtkcmF3ZXIsIHNob3dEcmF3ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzdGF0ZSwgYWN0aW9uc10gPSB1c2VHbG9iYWwoKVxuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKVxuXG4gIGNvbnN0IHJlbmRlcldhbGxldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAod2FsbGV0LnN0YXR1cyA9PSAnY29ubmVjdGVkJyAmJiB3YWxsZXQuYWNjb3VudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNwYWNlPlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAge3dhbGxldC5hY2NvdW50LnN1YnN0cigwLCAxMCl9Li4ue3dhbGxldC5hY2NvdW50LnN1YnN0cigzNSl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdhbGxldC5yZXNldCgpfT5cbiAgICAgICAgICAgIERpc2Nvbm5lY3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0RyYXdlcih0cnVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3BhY2U+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gd2FsbGV0LmNvbm5lY3QoKX0+Q29ubmVjdCBXYWxsZXQ8L0J1dHRvbj5cbiAgfSwgW3dhbGxldF0pXG5cbiAgLy8gQ09NTUFORCBDRU5URVI6IDB4ZTczQzg5REZBNTFFODJlNzg5NWIwRTlFOUI4RTliMWI0QTkxYjJiNlxuICAvLyBCT05VUzogMHhFZUNGRTBiNGM0N2NiNWQ2MUYxODBkNzIxNjc0YTQwNUE4NkZCNTNjXG4gIC8vIFdFTEZBUkUgQUREUkVTUzogMHhiRURBNkRmN2E1YkNBOTE0OTE1ZmI4MEQxM2MxYjZiMzJkRjhGOGFiXG4gIC8vIFNPQ0lBTCBTRUNVUklUWTogMHg1ZDA5ZjVFOTRmOGYyY0FiMTFEQjFBN0QxQzcxY2RkODBFN2MwZTY5XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPERyYXdlclxuICAgICAgICB0aXRsZT1cIlRlc3QgU2V0dGluZ3NcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxuICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzaG93RHJhd2VyKGZhbHNlKX1cbiAgICAgICAgdmlzaWJsZT17ZHJhd2VyfT5cblxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVGVzdCBTb2NpYWwgU2VjdXJpdHlcIj5cbiAgICAgICAgICA8VGV4dCBjb3B5YWJsZT4weDVkMDlmNUU5NGY4ZjJjQWIxMURCMUE3RDFDNzFjZGQ4MEU3YzBlNjk8L1RleHQ+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBuYW1lPVwic29jaWFsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29jaWFsIFNlY3VyaXR5IEFkZHJlc3NcIlxuICAgICAgICAgICAgYWxsb3dDbGVhclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZWN1cml0eX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGFjdGlvbnMuc2V0U2VjdXJpdHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJUZXN0IENvbW1hbmQgQ2VudGVyXCI+XG4gICAgICAgICAgPFRleHQgY29weWFibGU+MHhlNzNDODlERkE1MUU4MmU3ODk1YjBFOUU5QjhFOWIxYjRBOTFiMmI2PC9UZXh0PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbmFtZT1cImNvbW1hbmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tYW5kIENlbnRlciBBZGRyZXNzXCJcbiAgICAgICAgICAgIGFsbG93Q2xlYXJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5jZW50ZXJ9XG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gYWN0aW9ucy5zZXRDZW50ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJUZXN0IFdlbGZhcmUgQWRkcmVzc1wiPlxuICAgICAgICAgIDxUZXh0IGNvcHlhYmxlPjB4ZTczQzg5REZBNTFFODJlNzg5NWIwRTlFOUI4RTliMWI0QTkxYjJiNjwvVGV4dD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJjb21tYW5kXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2VsZmFyZSBBZGRyZXNzXCJcbiAgICAgICAgICAgIGFsbG93Q2xlYXJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS53ZWxmYXJlfVxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGFjdGlvbnMuc2V0V2VsZmFyZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgIDwvRHJhd2VyPlxuXG4gICAgICA8SGVhZGVyIHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICA8VGl0bGUgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG1hcmdpbkJvdHRvbTogMCwgbWFyZ2luUmlnaHQ6IDMwIH19IGxldmVsPXszfT5XZWxmYXJlPC9UaXRsZT5cbiAgICAgICAgPE1lbnUgdGhlbWU9XCJkYXJrXCIgbW9kZT1cImhvcml6b250YWxcIj5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjJcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfT5Tb2NpYWwgU2VjdXJpdHk8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL2NlbnRlcicpfT5Db21tYW5kIENlbnRlcjwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvYm9udXMnKX0+Qm9udXMgVmF1bHQ8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjVcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3dlbGZhcmUnKX0+V2VsZmFyZTwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnU+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fSAvPlxuICAgICAgICB7cmVuZGVyV2FsbGV0KCl9XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxDb250ZW50IGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0XCIgc3R5bGU9e3sgcGFkZGluZzogYDAgNTBweGAsIG1hcmdpblRvcDogNjQsIG1pbkhlaWdodDogYDEwMHZoYCB9fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250ZW50PlxuICAgICAgPEZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkFsbCBSaWdodHMgUmVzZXJ2ZWQgMjAyMTwvRm9vdGVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layouts/PublicLayout.js\n");

/***/ })

});