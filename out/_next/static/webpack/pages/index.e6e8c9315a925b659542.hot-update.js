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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PublicLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-wallet */ \"./node_modules/use-wallet/dist/index.js\");\n/* harmony import */ var _hooks_useGlobal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGlobal */ \"./hooks/useGlobal.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Dean/welfare/layouts/PublicLayout.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_6__.Layout.Header,\n    Content = antd__WEBPACK_IMPORTED_MODULE_6__.Layout.Content,\n    Footer = antd__WEBPACK_IMPORTED_MODULE_6__.Layout.Footer;\nvar Title = antd__WEBPACK_IMPORTED_MODULE_6__.Typography.Title,\n    Text = antd__WEBPACK_IMPORTED_MODULE_6__.Typography.Text;\nfunction PublicLayout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      drawer = _useState[0],\n      showDrawer = _useState[1];\n\n  var _useGlobal = (0,_hooks_useGlobal__WEBPACK_IMPORTED_MODULE_5__.default)(),\n      _useGlobal2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useGlobal, 2),\n      state = _useGlobal2[0],\n      actions = _useGlobal2[1];\n\n  var wallet = (0,use_wallet__WEBPACK_IMPORTED_MODULE_7__.useWallet)();\n  var renderWallet = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    if (wallet.status == 'connected' && wallet.account) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Space, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n          style: {\n            color: 'white'\n          },\n          children: [wallet.account.substr(0, 10), \"...\", wallet.account.substr(35)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n          type: \"danger\",\n          size: \"small\",\n          onClick: function onClick() {\n            return wallet.reset();\n          },\n          children: \"Disconnect\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n          type: \"primary\",\n          size: \"small\",\n          onClick: function onClick() {\n            return showDrawer(true);\n          },\n          children: \"Settings\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this);\n    }\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n      type: \"primary\",\n      onClick: function onClick() {\n        return wallet.connect();\n      },\n      children: \"Connect Wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 12\n    }, _this);\n  }, [wallet]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Drawer, {\n      title: \"Test Settings\",\n      placement: \"right\",\n      closable: true,\n      width: 500,\n      onClose: function onClose() {\n        return showDrawer(false);\n      },\n      visible: drawer,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Test Social Security:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n            copyable: true,\n            children: \"0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Input, {\n          name: \"social\",\n          placeholder: \"Social Security Address\",\n          allowClear: true,\n          enterButton: \"Connect\",\n          size: \"large\",\n          onChange: function onChange(e) {\n            return actions.setSecurity(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Test Command Center:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n            copyable: true,\n            children: \"0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Input, {\n          name: \"command\",\n          placeholder: \"Social Security Address\",\n          allowClear: true,\n          enterButton: \"Connect\",\n          size: \"large\",\n          onChange: function onChange(e) {\n            return actions.setSecurity(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n      style: {\n        position: 'fixed',\n        zIndex: 1,\n        width: '100%',\n        display: 'flex',\n        flexDirection: 'row',\n        alignItems: 'center'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n        style: {\n          color: 'white',\n          marginBottom: 0,\n          marginRight: 30\n        },\n        level: 3,\n        children: \"Welfare\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        theme: \"dark\",\n        mode: \"horizontal\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n          onClick: function onClick() {\n            return next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');\n          },\n          children: \"Social Security\"\n        }, \"2\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n          onClick: function onClick() {\n            return next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/center');\n          },\n          children: \"Command Center\"\n        }, \"3\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n          onClick: function onClick() {\n            return next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/bonus');\n          },\n          children: \"Bonus Vault\"\n        }, \"4\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n          onClick: function onClick() {\n            return next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/welfare');\n          },\n          children: \"Welfare\"\n        }, \"5\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          flex: 1\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this), renderWallet()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n      className: \"site-layout\",\n      style: {\n        padding: \"0 50px\",\n        marginTop: 64,\n        minHeight: \"100vh\"\n      },\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n      style: {\n        textAlign: 'center'\n      },\n      children: \"All Rights Reserved 2021\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PublicLayout, \"WsvLsUENEt7Fk7DB/EUTG0lXaqk=\", false, function () {\n  return [_hooks_useGlobal__WEBPACK_IMPORTED_MODULE_5__.default, use_wallet__WEBPACK_IMPORTED_MODULE_7__.useWallet];\n});\n\n_c = PublicLayout;\n\nvar _c;\n\n$RefreshReg$(_c, \"PublicLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9QdWJsaWNMYXlvdXQuanM/MmU2NCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJDb250ZW50IiwiRm9vdGVyIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiVGV4dCIsIlB1YmxpY0xheW91dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJkcmF3ZXIiLCJzaG93RHJhd2VyIiwidXNlR2xvYmFsIiwic3RhdGUiLCJhY3Rpb25zIiwid2FsbGV0IiwidXNlV2FsbGV0IiwicmVuZGVyV2FsbGV0IiwidXNlQ2FsbGJhY2siLCJzdGF0dXMiLCJhY2NvdW50IiwiY29sb3IiLCJzdWJzdHIiLCJyZXNldCIsImNvbm5lY3QiLCJlIiwic2V0U2VjdXJpdHkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBvc2l0aW9uIiwiekluZGV4Iiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsIlJvdXRlciIsImZsZXgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwibWluSGVpZ2h0IiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNRQSxNLEdBQTRCQywrQztJQUFwQkMsTyxHQUFvQkQsZ0Q7SUFBWEUsTSxHQUFXRiwrQztJQUM1QkcsSyxHQUFnQkMsa0Q7SUFBVEMsSSxHQUFTRCxpRDtBQUVULFNBQVNFLFlBQVQsT0FBb0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ3BCQywrQ0FBUSxDQUFDLEtBQUQsQ0FEWTtBQUFBLE1BQzFDQyxNQUQwQztBQUFBLE1BQ2xDQyxVQURrQzs7QUFBQSxtQkFFeEJDLHlEQUFTLEVBRmU7QUFBQTtBQUFBLE1BRTFDQyxLQUYwQztBQUFBLE1BRW5DQyxPQUZtQzs7QUFHakQsTUFBTUMs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QTtBQUFBLGdCQUhGLGVBSUUsOERBQUMsMkNBQUQ7QUFBbUIsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQSx1REFBQSxDQUFZLFVBQVosQ0FBTjtBQUFBLFdBQTVCO0FBQUE7QUFBQSxXQUFlLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQVFFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGNBQUksRUFBRTtBQUFSO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLEVBU0dyQixZQUFZLEVBVGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNGLGVBa0RFLDhEQUFDLE9BQUQ7QUFBUyxlQUFTLEVBQUMsYUFBbkI7QUFBaUMsV0FBSyxFQUFFO0FBQUVzQixlQUFPLFVBQVQ7QUFBcUJDLGlCQUFTLEVBQUUsRUFBaEM7QUFBb0NDLGlCQUFTO0FBQTdDLE9BQXhDO0FBQUEsZ0JBQ0dqQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsREYsZUFxREUsOERBQUMsTUFBRDtBQUFRLFdBQUssRUFBRTtBQUFFa0MsaUJBQVMsRUFBRTtBQUFiLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5REQ7O0dBeEZ1Qm5DLFk7VUFFR0sscUQsRUFDVkksaUQ7OztLQUhPVCxZIiwiZmlsZSI6Ii4vbGF5b3V0cy9QdWJsaWNMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUsIEJyZWFkY3J1bWIsIFNwYWNlLCBCdXR0b24sIFR5cG9ncmFwaHksIERyYXdlciwgSW5wdXQgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCdcbmltcG9ydCB1c2VHbG9iYWwgZnJvbSAnLi4vaG9va3MvdXNlR2xvYmFsJztcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dFxuY29uc3QgeyBUaXRsZSwgVGV4dCB9ID0gVHlwb2dyYXBoeVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWJsaWNMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtkcmF3ZXIsIHNob3dEcmF3ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzdGF0ZSwgYWN0aW9uc10gPSB1c2VHbG9iYWwoKVxuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKVxuXG4gIGNvbnN0IHJlbmRlcldhbGxldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAod2FsbGV0LnN0YXR1cyA9PSAnY29ubmVjdGVkJyAmJiB3YWxsZXQuYWNjb3VudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNwYWNlPlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAge3dhbGxldC5hY2NvdW50LnN1YnN0cigwLCAxMCl9Li4ue3dhbGxldC5hY2NvdW50LnN1YnN0cigzNSl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdhbGxldC5yZXNldCgpfT5cbiAgICAgICAgICAgIERpc2Nvbm5lY3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0RyYXdlcih0cnVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3BhY2U+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gd2FsbGV0LmNvbm5lY3QoKX0+Q29ubmVjdCBXYWxsZXQ8L0J1dHRvbj5cbiAgfSwgW3dhbGxldF0pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPERyYXdlclxuICAgICAgICB0aXRsZT1cIlRlc3QgU2V0dGluZ3NcIlxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxuICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzaG93RHJhd2VyKGZhbHNlKX1cbiAgICAgICAgdmlzaWJsZT17ZHJhd2VyfT5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+VGVzdCBTb2NpYWwgU2VjdXJpdHk6XG4gICAgICAgICAgICA8VGV4dCBjb3B5YWJsZT4weDVkMDlmNUU5NGY4ZjJjQWIxMURCMUE3RDFDNzFjZGQ4MEU3YzBlNjk8L1RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBuYW1lPVwic29jaWFsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29jaWFsIFNlY3VyaXR5IEFkZHJlc3NcIlxuICAgICAgICAgICAgYWxsb3dDbGVhclxuICAgICAgICAgICAgZW50ZXJCdXR0b249XCJDb25uZWN0XCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBhY3Rpb25zLnNldFNlY3VyaXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+VGVzdCBDb21tYW5kIENlbnRlcjpcbiAgICAgICAgICAgIDxUZXh0IGNvcHlhYmxlPjB4NWQwOWY1RTk0ZjhmMmNBYjExREIxQTdEMUM3MWNkZDgwRTdjMGU2OTwvVGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJjb21tYW5kXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29jaWFsIFNlY3VyaXR5IEFkZHJlc3NcIlxuICAgICAgICAgICAgYWxsb3dDbGVhclxuICAgICAgICAgICAgZW50ZXJCdXR0b249XCJDb25uZWN0XCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBhY3Rpb25zLnNldFNlY3VyaXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9EcmF3ZXI+XG5cbiAgICAgIDxIZWFkZXIgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIHpJbmRleDogMSwgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxUaXRsZSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbWFyZ2luQm90dG9tOiAwLCBtYXJnaW5SaWdodDogMzAgfX0gbGV2ZWw9ezN9PldlbGZhcmU8L1RpdGxlPlxuICAgICAgICA8TWVudSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9PlNvY2lhbCBTZWN1cml0eTwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvY2VudGVyJyl9PkNvbW1hbmQgQ2VudGVyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI0XCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9ib251cycpfT5Cb251cyBWYXVsdDwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNVwiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvd2VsZmFyZScpfT5XZWxmYXJlPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19IC8+XG4gICAgICAgIHtyZW5kZXJXYWxsZXQoKX1cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXRcIiBzdHlsZT17eyBwYWRkaW5nOiBgMCA1MHB4YCwgbWFyZ2luVG9wOiA2NCwgbWluSGVpZ2h0OiBgMTAwdmhgIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgICA8Rm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+QWxsIFJpZ2h0cyBSZXNlcnZlZCAyMDIxPC9Gb290ZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layouts/PublicLayout.js\n");

/***/ })

});