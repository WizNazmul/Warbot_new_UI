/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useSecurity.js":
/*!******************************!*\
  !*** ./hooks/useSecurity.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3-eth-contract */ \"./node_modules/web3-eth-contract/lib/index.js\");\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3_eth_contract__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _build_contracts_SocialSecurity_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../build/contracts/SocialSecurity.json */ \"./build/contracts/SocialSecurity.json\");\n/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useWeb3 */ \"./hooks/useWeb3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useSecurity = function useSecurity(address) {\n  _s();\n\n  var web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      contract = _useState[0],\n      setContract = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (address) {\n      web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default().setProvider(__webpack_require__.g.window && window.ethereum);\n      setContract(new (web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default())(_build_contracts_SocialSecurity_json__WEBPACK_IMPORTED_MODULE_4__.abi, address));\n      console.log(\"SOCIAL SECURITY ADDRESS\", address);\n    } else {\n      console.log(\"SOCIAL SECURITY ADDRESS NOT SET\");\n    }\n  }, [address]);\n\n  var getField = /*#__PURE__*/function () {\n    var _ref = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(field) {\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(contract && address)) {\n                _context.next = 4;\n                break;\n              }\n\n              _context.next = 3;\n              return contract.methods[field]().call();\n\n            case 3:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 4:\n              return _context.abrupt(\"return\", false);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getField(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var sendTx = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(field, wallet) {\n      var _contract$methods,\n          _len,\n          rest,\n          _key,\n          _args2 = arguments;\n\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!contract) {\n                _context2.next = 5;\n                break;\n              }\n\n              for (_len = _args2.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n                rest[_key - 2] = _args2[_key];\n              }\n\n              _context2.next = 4;\n              return (_contract$methods = contract.methods)[field].apply(_contract$methods, rest).send({\n                from: wallet,\n                to: address\n              });\n\n            case 4:\n              return _context2.abrupt(\"return\", _context2.sent);\n\n            case 5:\n              return _context2.abrupt(\"return\", false);\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function sendTx(_x2, _x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return [contract.methods, web3, getField, sendTx];\n};\n\n_s(useSecurity, \"3W+FT7V3g2uALWINEU/ClBL63MQ=\", false, function () {\n  return [_useWeb3__WEBPACK_IMPORTED_MODULE_5__.default];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSecurity);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU2VjdXJpdHkuanM/OTM4YiJdLCJuYW1lcyI6WyJ1c2VTZWN1cml0eSIsImFkZHJlc3MiLCJ3ZWIzIiwidXNlV2ViMyIsInVzZVN0YXRlIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInVzZUVmZmVjdCIsIkNvbnRyYWN0IiwiZ2xvYmFsIiwid2luZG93IiwiZXRoZXJldW0iLCJTU2VjdXJpdHkiLCJjb25zb2xlIiwibG9nIiwiZ2V0RmllbGQiLCJmaWVsZCIsIm1ldGhvZHMiLCJjYWxsIiwic2VuZFR4Iiwid2FsbGV0IiwicmVzdCIsInNlbmQiLCJmcm9tIiwidG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFDL0IsTUFBTUMsSUFBSSxHQUFHQyxpREFBTyxFQUFwQjs7QUFEK0Isa0JBRUNDLCtDQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFeEJDLFFBRndCO0FBQUEsTUFFZEMsV0FGYzs7QUFJL0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlOLE9BQUosRUFBYTtBQUNYTywwRUFBQSxDQUFxQkMscUJBQU0sQ0FBQ0MsTUFBUCxJQUFpQkEsTUFBTSxDQUFDQyxRQUE3QztBQUNBTCxpQkFBVyxDQUFDLElBQUlFLDBEQUFKLENBQWFJLHFFQUFiLEVBQTRCWCxPQUE1QixDQUFELENBQVg7QUFDQVksYUFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFBdUNiLE9BQXZDO0FBQ0QsS0FKRCxNQUlPO0FBQ0xZLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ2IsT0FBRCxDQVJNLENBQVQ7O0FBVUEsTUFBTWMsUUFBUTtBQUFBLG1UQUFHLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDWFgsUUFBUSxJQUFJSixPQUREO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRUFJLFFBQVEsQ0FBQ1ksT0FBVCxDQUFpQkQsS0FBakIsSUFBMEJFLElBQTFCLEVBRkE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtDQUlSLEtBSlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkgsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQU9BLE1BQU1JLE1BQU07QUFBQSxvVEFBRyxrQkFBTUgsS0FBTixFQUFhSSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNUZixRQURTO0FBQUE7QUFBQTtBQUFBOztBQUFBLHlDQUF3QmdCLElBQXhCO0FBQXdCQSxvQkFBeEI7QUFBQTs7QUFBQTtBQUFBLHFCQUVFLHFCQUFBaEIsUUFBUSxDQUFDWSxPQUFULEVBQWlCRCxLQUFqQiwyQkFBMkJLLElBQTNCLEVBQWlDQyxJQUFqQyxDQUFzQztBQUFFQyxvQkFBSSxFQUFFSCxNQUFSO0FBQWdCSSxrQkFBRSxFQUFFdkI7QUFBcEIsZUFBdEMsQ0FGRjs7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ0RBSU4sS0FKTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFOa0IsTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQU9BLFNBQU8sQ0FBQ2QsUUFBUSxDQUFDWSxPQUFWLEVBQW1CZixJQUFuQixFQUF5QmEsUUFBekIsRUFBbUNJLE1BQW5DLENBQVA7QUFDRCxDQTdCRDs7R0FBTW5CLFc7VUFDU0csNkM7OztBQThCZiwrREFBZUgsV0FBZiIsImZpbGUiOiIuL2hvb2tzL3VzZVNlY3VyaXR5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRyYWN0IGZyb20gJ3dlYjMtZXRoLWNvbnRyYWN0J1xuaW1wb3J0IFNTZWN1cml0eSBmcm9tICcuLi9idWlsZC9jb250cmFjdHMvU29jaWFsU2VjdXJpdHkuanNvbidcbmltcG9ydCB1c2VXZWIzIGZyb20gJy4vdXNlV2ViMydcblxuY29uc3QgdXNlU2VjdXJpdHkgPSAoYWRkcmVzcykgPT4ge1xuICBjb25zdCB3ZWIzID0gdXNlV2ViMygpXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoe30pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWRkcmVzcykge1xuICAgICAgQ29udHJhY3Quc2V0UHJvdmlkZXIoZ2xvYmFsLndpbmRvdyAmJiB3aW5kb3cuZXRoZXJldW0pXG4gICAgICBzZXRDb250cmFjdChuZXcgQ29udHJhY3QoU1NlY3VyaXR5LmFiaSwgYWRkcmVzcykpXG4gICAgICBjb25zb2xlLmxvZyhcIlNPQ0lBTCBTRUNVUklUWSBBRERSRVNTXCIsIGFkZHJlc3MpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU09DSUFMIFNFQ1VSSVRZIEFERFJFU1MgTk9UIFNFVFwiKVxuICAgIH1cbiAgfSwgW2FkZHJlc3NdKVxuXG4gIGNvbnN0IGdldEZpZWxkID0gYXN5bmMoZmllbGQpID0+IHtcbiAgICBpZiAoY29udHJhY3QgJiYgYWRkcmVzcykge1xuICAgICAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNbZmllbGRdKCkuY2FsbCgpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3Qgc2VuZFR4ID0gYXN5bmMoZmllbGQsIHdhbGxldCwgLi4ucmVzdCkgPT4ge1xuICAgIGlmIChjb250cmFjdCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNbZmllbGRdKC4uLnJlc3QpLnNlbmQoeyBmcm9tOiB3YWxsZXQsIHRvOiBhZGRyZXNzIH0pXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIFtjb250cmFjdC5tZXRob2RzLCB3ZWIzLCBnZXRGaWVsZCwgc2VuZFR4XVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTZWN1cml0eVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useSecurity.js\n");

/***/ })

});