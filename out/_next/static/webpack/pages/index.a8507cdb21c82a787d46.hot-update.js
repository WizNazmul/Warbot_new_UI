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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3-eth-contract */ \"./node_modules/web3-eth-contract/lib/index.js\");\n/* harmony import */ var web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3_eth_contract__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _build_contracts_SocialSecurity_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../build/contracts/SocialSecurity.json */ \"./build/contracts/SocialSecurity.json\");\n/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useWeb3 */ \"./hooks/useWeb3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useSecurity = function useSecurity(address) {\n  _s();\n\n  var web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      contract = _useState[0],\n      setContract = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      connected = _useState2[0],\n      setConnected = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (address) {\n      web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default().setProvider(__webpack_require__.g.window && window.ethereum);\n      setContract(new (web3_eth_contract__WEBPACK_IMPORTED_MODULE_3___default())(_build_contracts_SocialSecurity_json__WEBPACK_IMPORTED_MODULE_4__.abi, address));\n      setConnected(true);\n      console.log(\"SOCIAL SECURITY ADDRESS\", address);\n    } else {\n      console.log(\"SOCIAL SECURITY ADDRESS NOT SET\");\n    }\n  }, [address]);\n\n  var getInfo = /*#__PURE__*/function () {\n    var _ref = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var owner, timePeriod, ssTaxReceivingContract, globalDepositNumber, globalDepositTimeValue, globalSSTaxDepositNumber, totalTaxCollected, totalSSVaults, totalTaxCollectedByPensioners, token, bonusVault, emergencyAddress, welfareAddress, reflectBalance;\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return getField('owner');\n\n            case 2:\n              owner = _context.sent;\n              _context.next = 5;\n              return getField('timePeriod');\n\n            case 5:\n              timePeriod = _context.sent;\n              _context.next = 8;\n              return getField('ssTaxReceivingContract');\n\n            case 8:\n              ssTaxReceivingContract = _context.sent;\n              _context.next = 11;\n              return getField('globalDepositNumber');\n\n            case 11:\n              globalDepositNumber = _context.sent;\n              _context.next = 14;\n              return getField('globalDepositTimeValue');\n\n            case 14:\n              globalDepositTimeValue = _context.sent;\n              _context.next = 17;\n              return getField('globalSSTaxDepositNumber');\n\n            case 17:\n              globalSSTaxDepositNumber = _context.sent;\n              _context.next = 20;\n              return getField('totalTaxCollected');\n\n            case 20:\n              totalTaxCollected = _context.sent;\n              _context.next = 23;\n              return getField('totalSSVaults');\n\n            case 23:\n              totalSSVaults = _context.sent;\n              _context.next = 26;\n              return getField('totalTaxCollectedByPensioners');\n\n            case 26:\n              totalTaxCollectedByPensioners = _context.sent;\n              _context.next = 29;\n              return getField('token');\n\n            case 29:\n              token = _context.sent;\n              _context.next = 32;\n              return getField('bonusVault');\n\n            case 32:\n              bonusVault = _context.sent;\n              _context.next = 35;\n              return getField('EmergencyAddress');\n\n            case 35:\n              emergencyAddress = _context.sent;\n              _context.next = 38;\n              return getField('WelfareCommandCenterAddress');\n\n            case 38:\n              welfareAddress = _context.sent;\n              _context.next = 41;\n              return getField('getReflectBalance');\n\n            case 41:\n              reflectBalance = _context.sent;\n              return _context.abrupt(\"return\", {\n                owner: owner,\n                timePeriod: timePeriod,\n                ssTaxReceivingContract: ssTaxReceivingContract,\n                globalDepositNumber: globalDepositNumber,\n                globalSSTaxDepositNumber: globalSSTaxDepositNumber,\n                globalDepositTimeValue: globalDepositTimeValue,\n                totalTaxCollected: totalTaxCollected,\n                totalSSVaults: totalSSVaults,\n                totalTaxCollectedByPensioners: totalTaxCollectedByPensioners,\n                token: token,\n                bonusVault: bonusVault,\n                emergencyAddress: emergencyAddress,\n                welfareAddress: welfareAddress,\n                reflectBalance: reflectBalance\n              });\n\n            case 43:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getInfo() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var getField = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(field) {\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!connected) {\n                _context2.next = 4;\n                break;\n              }\n\n              _context2.next = 3;\n              return contract.methods[field]().call();\n\n            case 3:\n              return _context2.abrupt(\"return\", _context2.sent);\n\n            case 4:\n              return _context2.abrupt(\"return\", false);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getField(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var sendTx = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(field, wallet) {\n      var _contract$methods,\n          _len,\n          rest,\n          _key,\n          _args3 = arguments;\n\n      return _Users_macbookpro_Dean_welfare_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              if (!connected) {\n                _context3.next = 5;\n                break;\n              }\n\n              for (_len = _args3.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n                rest[_key - 2] = _args3[_key];\n              }\n\n              _context3.next = 4;\n              return (_contract$methods = contract.methods)[field].apply(_contract$methods, rest).send({\n                from: wallet,\n                to: address\n              });\n\n            case 4:\n              return _context3.abrupt(\"return\", _context3.sent);\n\n            case 5:\n              return _context3.abrupt(\"return\", false);\n\n            case 6:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function sendTx(_x2, _x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return {\n    security: contract.methods,\n    web3: web3,\n    getField: getField,\n    sendTx: sendTx,\n    getInfo: getInfo,\n    connected: connected\n  };\n};\n\n_s(useSecurity, \"4I1Ckkl3uFzgJ+4U2GFS1OKKyJ0=\", false, function () {\n  return [_useWeb3__WEBPACK_IMPORTED_MODULE_5__.default];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSecurity);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU2VjdXJpdHkuanM/OTM4YiJdLCJuYW1lcyI6WyJ1c2VTZWN1cml0eSIsImFkZHJlc3MiLCJ3ZWIzIiwidXNlV2ViMyIsInVzZVN0YXRlIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsInVzZUVmZmVjdCIsIkNvbnRyYWN0IiwiZ2xvYmFsIiwid2luZG93IiwiZXRoZXJldW0iLCJTU2VjdXJpdHkiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW5mbyIsImdldEZpZWxkIiwib3duZXIiLCJ0aW1lUGVyaW9kIiwic3NUYXhSZWNlaXZpbmdDb250cmFjdCIsImdsb2JhbERlcG9zaXROdW1iZXIiLCJnbG9iYWxEZXBvc2l0VGltZVZhbHVlIiwiZ2xvYmFsU1NUYXhEZXBvc2l0TnVtYmVyIiwidG90YWxUYXhDb2xsZWN0ZWQiLCJ0b3RhbFNTVmF1bHRzIiwidG90YWxUYXhDb2xsZWN0ZWRCeVBlbnNpb25lcnMiLCJ0b2tlbiIsImJvbnVzVmF1bHQiLCJlbWVyZ2VuY3lBZGRyZXNzIiwid2VsZmFyZUFkZHJlc3MiLCJyZWZsZWN0QmFsYW5jZSIsImZpZWxkIiwibWV0aG9kcyIsImNhbGwiLCJzZW5kVHgiLCJ3YWxsZXQiLCJyZXN0Iiwic2VuZCIsImZyb20iLCJ0byIsInNlY3VyaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQUE7O0FBQy9CLE1BQU1DLElBQUksR0FBR0MsaURBQU8sRUFBcEI7O0FBRCtCLGtCQUVDQywrQ0FBUSxDQUFDLEVBQUQsQ0FGVDtBQUFBLE1BRXhCQyxRQUZ3QjtBQUFBLE1BRWRDLFdBRmM7O0FBQUEsbUJBR0dGLCtDQUFRLENBQUMsS0FBRCxDQUhYO0FBQUEsTUFHeEJHLFNBSHdCO0FBQUEsTUFHYkMsWUFI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QUE7O0FBQUE7QUFBQSxnREFJUixLQUpROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJqQixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBT0EsTUFBTWtCLE1BQU07QUFBQSxvVEFBRyxrQkFBTUgsS0FBTixFQUFhSSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNUOUIsU0FEUztBQUFBO0FBQUE7QUFBQTs7QUFBQSx5Q0FBd0IrQixJQUF4QjtBQUF3QkEsb0JBQXhCO0FBQUE7O0FBQUE7QUFBQSxxQkFFRSxxQkFBQWpDLFFBQVEsQ0FBQzZCLE9BQVQsRUFBaUJELEtBQWpCLDJCQUEyQkssSUFBM0IsRUFBaUNDLElBQWpDLENBQXNDO0FBQUVDLG9CQUFJLEVBQUVILE1BQVI7QUFBZ0JJLGtCQUFFLEVBQUV4QztBQUFwQixlQUF0QyxDQUZGOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxnREFJTixLQUpNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5tQyxNQUFNO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBT0EsU0FBTztBQUNMTSxZQUFRLEVBQUVyQyxRQUFRLENBQUM2QixPQURkO0FBRUxoQyxRQUFJLEVBQUpBLElBRks7QUFHTGdCLFlBQVEsRUFBUkEsUUFISztBQUlMa0IsVUFBTSxFQUFOQSxNQUpLO0FBS0xuQixXQUFPLEVBQVBBLE9BTEs7QUFNTFYsYUFBUyxFQUFUQTtBQU5LLEdBQVA7QUFRRCxDQWhFRDs7R0FBTVAsVztVQUNTRyw2Qzs7O0FBaUVmLCtEQUFlSCxXQUFmIiwiZmlsZSI6Ii4vaG9va3MvdXNlU2VjdXJpdHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udHJhY3QgZnJvbSAnd2ViMy1ldGgtY29udHJhY3QnXG5pbXBvcnQgU1NlY3VyaXR5IGZyb20gJy4uL2J1aWxkL2NvbnRyYWN0cy9Tb2NpYWxTZWN1cml0eS5qc29uJ1xuaW1wb3J0IHVzZVdlYjMgZnJvbSAnLi91c2VXZWIzJ1xuXG5jb25zdCB1c2VTZWN1cml0eSA9IChhZGRyZXNzKSA9PiB7XG4gIGNvbnN0IHdlYjMgPSB1c2VXZWIzKClcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFkZHJlc3MpIHtcbiAgICAgIENvbnRyYWN0LnNldFByb3ZpZGVyKGdsb2JhbC53aW5kb3cgJiYgd2luZG93LmV0aGVyZXVtKVxuICAgICAgc2V0Q29udHJhY3QobmV3IENvbnRyYWN0KFNTZWN1cml0eS5hYmksIGFkZHJlc3MpKVxuICAgICAgc2V0Q29ubmVjdGVkKHRydWUpXG4gICAgICBjb25zb2xlLmxvZyhcIlNPQ0lBTCBTRUNVUklUWSBBRERSRVNTXCIsIGFkZHJlc3MpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU09DSUFMIFNFQ1VSSVRZIEFERFJFU1MgTk9UIFNFVFwiKVxuICAgIH1cbiAgfSwgW2FkZHJlc3NdKVxuXG4gIGNvbnN0IGdldEluZm8gPSBhc3luYygpID0+IHtcbiAgICBsZXQgb3duZXIgPSBhd2FpdCBnZXRGaWVsZCgnb3duZXInKVxuICAgIGxldCB0aW1lUGVyaW9kID0gYXdhaXQgZ2V0RmllbGQoJ3RpbWVQZXJpb2QnKVxuICAgIGxldCBzc1RheFJlY2VpdmluZ0NvbnRyYWN0ID0gYXdhaXQgZ2V0RmllbGQoJ3NzVGF4UmVjZWl2aW5nQ29udHJhY3QnKVxuICAgIGxldCBnbG9iYWxEZXBvc2l0TnVtYmVyID0gYXdhaXQgZ2V0RmllbGQoJ2dsb2JhbERlcG9zaXROdW1iZXInKVxuICAgIGxldCBnbG9iYWxEZXBvc2l0VGltZVZhbHVlID0gYXdhaXQgZ2V0RmllbGQoJ2dsb2JhbERlcG9zaXRUaW1lVmFsdWUnKVxuICAgIGxldCBnbG9iYWxTU1RheERlcG9zaXROdW1iZXIgPSBhd2FpdCBnZXRGaWVsZCgnZ2xvYmFsU1NUYXhEZXBvc2l0TnVtYmVyJylcbiAgICBsZXQgdG90YWxUYXhDb2xsZWN0ZWQgPSBhd2FpdCBnZXRGaWVsZCgndG90YWxUYXhDb2xsZWN0ZWQnKVxuICAgIGxldCB0b3RhbFNTVmF1bHRzID0gYXdhaXQgZ2V0RmllbGQoJ3RvdGFsU1NWYXVsdHMnKVxuICAgIGxldCB0b3RhbFRheENvbGxlY3RlZEJ5UGVuc2lvbmVycyA9IGF3YWl0IGdldEZpZWxkKCd0b3RhbFRheENvbGxlY3RlZEJ5UGVuc2lvbmVycycpXG5cbiAgICBsZXQgdG9rZW4gPSBhd2FpdCBnZXRGaWVsZCgndG9rZW4nKVxuICAgIGxldCBib251c1ZhdWx0ID0gYXdhaXQgZ2V0RmllbGQoJ2JvbnVzVmF1bHQnKVxuICAgIGxldCBlbWVyZ2VuY3lBZGRyZXNzID0gYXdhaXQgZ2V0RmllbGQoJ0VtZXJnZW5jeUFkZHJlc3MnKVxuICAgIGxldCB3ZWxmYXJlQWRkcmVzcyA9IGF3YWl0IGdldEZpZWxkKCdXZWxmYXJlQ29tbWFuZENlbnRlckFkZHJlc3MnKVxuICAgIGxldCByZWZsZWN0QmFsYW5jZSA9IGF3YWl0IGdldEZpZWxkKCdnZXRSZWZsZWN0QmFsYW5jZScpXG5cbiAgICByZXR1cm4ge1xuICAgICAgb3duZXIsIHRpbWVQZXJpb2QsIHNzVGF4UmVjZWl2aW5nQ29udHJhY3QsXG4gICAgICBnbG9iYWxEZXBvc2l0TnVtYmVyLCBnbG9iYWxTU1RheERlcG9zaXROdW1iZXIsIGdsb2JhbERlcG9zaXRUaW1lVmFsdWUsXG4gICAgICB0b3RhbFRheENvbGxlY3RlZCwgdG90YWxTU1ZhdWx0cywgdG90YWxUYXhDb2xsZWN0ZWRCeVBlbnNpb25lcnMsXG4gICAgICB0b2tlbiwgYm9udXNWYXVsdCwgZW1lcmdlbmN5QWRkcmVzcywgd2VsZmFyZUFkZHJlc3MsXG4gICAgICByZWZsZWN0QmFsYW5jZVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldEZpZWxkID0gYXN5bmMoZmllbGQpID0+IHtcbiAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICByZXR1cm4gYXdhaXQgY29udHJhY3QubWV0aG9kc1tmaWVsZF0oKS5jYWxsKClcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBzZW5kVHggPSBhc3luYyhmaWVsZCwgd2FsbGV0LCAuLi5yZXN0KSA9PiB7XG4gICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNbZmllbGRdKC4uLnJlc3QpLnNlbmQoeyBmcm9tOiB3YWxsZXQsIHRvOiBhZGRyZXNzIH0pXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eTogY29udHJhY3QubWV0aG9kcyxcbiAgICB3ZWIzLFxuICAgIGdldEZpZWxkLFxuICAgIHNlbmRUeCxcbiAgICBnZXRJbmZvLFxuICAgIGNvbm5lY3RlZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlY3VyaXR5XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useSecurity.js\n");

/***/ })

});