/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useGlobal.js":
/*!****************************!*\
  !*** ./hooks/useGlobal.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGlobal\": function() { return /* binding */ useGlobal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _globalHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalHook */ \"./hooks/globalHook.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar actions = {\n  setSecurity: function setSecurity(store, security) {\n    if (security && security.startsWith('0x') && security.length == 42) {\n      store.setState({\n        security: security,\n        hasSecurity: true\n      });\n    } else {\n      store.setState({\n        hasSecurity: false\n      });\n    }\n  },\n  setVault: function setVault(store, vault) {\n    if (vault && vault.startsWith('0x') && vault.length == 42) {\n      store.setState({\n        vault: vault,\n        hasVault: true\n      });\n    } else {\n      store.setState({\n        vault: '',\n        hasVault: false\n      });\n    }\n  },\n  setBonus: function setBonus(store, bonus) {\n    if (bonus && bonus.startsWith('0x') && bonus.length == 42) {\n      store.setState({\n        bonus: bonus,\n        hasBonus: true\n      });\n    } else {\n      store.setState({\n        bonus: '',\n        hasBonus: false\n      });\n    }\n  },\n  setCenter: function setCenter(store, center) {\n    if (center && center.startsWith('0x') && center.length == 42) {\n      store.setState({\n        center: center,\n        hasCenter: true\n      });\n    } else {\n      store.setState({\n        hasCenter: false\n      });\n    }\n  },\n  setWelfare: function setWelfare(store, welfare) {\n    if (welfare && welfare.startsWith('0x') && welfare.length == 42) {\n      store.setState({\n        welfare: welfare,\n        hasWelfare: true\n      });\n    } else {\n      store.setState({\n        hasWelfare: false\n      });\n    }\n  },\n  setTestnet: function setTestnet(store) {\n    return store.setState({\n      chain: 97\n    });\n  },\n  setMainnet: function setMainnet(store) {\n    return store.setState({\n      chain: 56\n    });\n  },\n  addVaultCount: function addVaultCount(store) {\n    return store.setState({\n      vaultCount: store.state.vaultCount + 1\n    });\n  }\n};\nvar initialState = {\n  chain: 97,\n  // 56 - Mainnet | 97 - Testnet\n  security: false,\n  hasSecurity: false,\n  vault: false,\n  hasVault: false,\n  center: false,\n  hasCenter: false,\n  bonus: false,\n  hasBonus: false,\n  welfare: false,\n  hasWelfare: false,\n  vaultCount: 0\n};\nvar useGlobal = (0,_globalHook__WEBPACK_IMPORTED_MODULE_1__.default)((react__WEBPACK_IMPORTED_MODULE_0___default()), initialState, actions);\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGlobal);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlR2xvYmFsLmpzP2ViOTQiXSwibmFtZXMiOlsiYWN0aW9ucyIsInNldFNlY3VyaXR5Iiwic3RvcmUiLCJzZWN1cml0eSIsInN0YXJ0c1dpdGgiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImhhc1NlY3VyaXR5Iiwic2V0VmF1bHQiLCJ2YXVsdCIsImhhc1ZhdWx0Iiwic2V0Qm9udXMiLCJib251cyIsImhhc0JvbnVzIiwic2V0Q2VudGVyIiwiY2VudGVyIiwiaGFzQ2VudGVyIiwic2V0V2VsZmFyZSIsIndlbGZhcmUiLCJoYXNXZWxmYXJlIiwic2V0VGVzdG5ldCIsImNoYWluIiwic2V0TWFpbm5ldCIsImFkZFZhdWx0Q291bnQiLCJ2YXVsdENvdW50Iiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJ1c2VHbG9iYWwiLCJnbG9iYWxIb29rIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxhQUFXLEVBQUUscUJBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFxQjtBQUNoQyxRQUFJQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQixJQUFwQixDQUFaLElBQXlDRCxRQUFRLENBQUNFLE1BQVQsSUFBbUIsRUFBaEUsRUFBb0U7QUFDbEVILFdBQUssQ0FBQ0ksUUFBTixDQUFlO0FBQUVILGdCQUFRLEVBQVJBLFFBQUY7QUFBWUksbUJBQVcsRUFBRTtBQUF6QixPQUFmO0FBQ0QsS0FGRCxNQUVPO0FBQ0xMLFdBQUssQ0FBQ0ksUUFBTixDQUFlO0FBQUVDLG1CQUFXLEVBQUU7QUFBZixPQUFmO0FBQ0Q7QUFDRixHQVBhO0FBUWRDLFVBQVEsRUFBRSxrQkFBQ04sS0FBRCxFQUFRTyxLQUFSLEVBQWtCO0FBQzFCLFFBQUlBLEtBQUssSUFBSUEsS0FBSyxDQUFDTCxVQUFOLENBQWlCLElBQWpCLENBQVQsSUFBbUNLLEtBQUssQ0FBQ0osTUFBTixJQUFn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QU1HLFNBQVMsR0FBR0Msb0RBQVUsQ0FBQ0MsOENBQUQsRUFBUUgsWUFBUixFQUFzQjFCLE9BQXRCLENBQTVCO0FBRVAsK0RBQWUyQixTQUFmIiwiZmlsZSI6Ii4vaG9va3MvdXNlR2xvYmFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnbG9iYWxIb29rIGZyb20gJy4vZ2xvYmFsSG9vayc7XG5cbmNvbnN0IGFjdGlvbnMgPSB7XG4gIHNldFNlY3VyaXR5OiAoc3RvcmUsIHNlY3VyaXR5KSA9PiB7XG4gICAgaWYgKHNlY3VyaXR5ICYmIHNlY3VyaXR5LnN0YXJ0c1dpdGgoJzB4JykgJiYgc2VjdXJpdHkubGVuZ3RoID09IDQyKSB7XG4gICAgICBzdG9yZS5zZXRTdGF0ZSh7IHNlY3VyaXR5LCBoYXNTZWN1cml0eTogdHJ1ZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzdG9yZS5zZXRTdGF0ZSh7IGhhc1NlY3VyaXR5OiBmYWxzZSB9KVxuICAgIH1cbiAgfSxcbiAgc2V0VmF1bHQ6IChzdG9yZSwgdmF1bHQpID0+IHtcbiAgICBpZiAodmF1bHQgJiYgdmF1bHQuc3RhcnRzV2l0aCgnMHgnKSAmJiB2YXVsdC5sZW5ndGggPT0gNDIpIHtcbiAgICAgIHN0b3JlLnNldFN0YXRlKHsgdmF1bHQsIGhhc1ZhdWx0OiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlLnNldFN0YXRlKHsgdmF1bHQ6ICcnLCBoYXNWYXVsdDogZmFsc2UgfSlcbiAgICB9XG4gIH0sXG4gIHNldEJvbnVzOiAoc3RvcmUsIGJvbnVzKSA9PiB7XG4gICAgaWYgKGJvbnVzICYmIGJvbnVzLnN0YXJ0c1dpdGgoJzB4JykgJiYgYm9udXMubGVuZ3RoID09IDQyKSB7XG4gICAgICBzdG9yZS5zZXRTdGF0ZSh7IGJvbnVzLCBoYXNCb251czogdHJ1ZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzdG9yZS5zZXRTdGF0ZSh7IGJvbnVzOiAnJywgaGFzQm9udXM6IGZhbHNlIH0pXG4gICAgfVxuICB9LFxuICBzZXRDZW50ZXI6IChzdG9yZSwgY2VudGVyKSA9PiB7XG4gICAgaWYgKGNlbnRlciAmJiBjZW50ZXIuc3RhcnRzV2l0aCgnMHgnKSAmJiBjZW50ZXIubGVuZ3RoID09IDQyKSB7XG4gICAgICBzdG9yZS5zZXRTdGF0ZSh7IGNlbnRlciwgaGFzQ2VudGVyOiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlLnNldFN0YXRlKHsgaGFzQ2VudGVyOiBmYWxzZSB9KVxuICAgIH1cbiAgfSxcbiAgc2V0V2VsZmFyZTogKHN0b3JlLCB3ZWxmYXJlKSA9PiB7XG4gICAgaWYgKHdlbGZhcmUgJiYgd2VsZmFyZS5zdGFydHNXaXRoKCcweCcpICYmIHdlbGZhcmUubGVuZ3RoID09IDQyKSB7XG4gICAgICBzdG9yZS5zZXRTdGF0ZSh7IHdlbGZhcmUsIGhhc1dlbGZhcmU6IHRydWUgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmUuc2V0U3RhdGUoeyBoYXNXZWxmYXJlOiBmYWxzZSB9KVxuICAgIH1cbiAgfSxcbiAgc2V0VGVzdG5ldDogKHN0b3JlKSA9PiBzdG9yZS5zZXRTdGF0ZSh7IGNoYWluOiA5NyB9KSxcbiAgc2V0TWFpbm5ldDogKHN0b3JlKSA9PiBzdG9yZS5zZXRTdGF0ZSh7IGNoYWluOiA1NiB9KSxcbiAgYWRkVmF1bHRDb3VudDogKHN0b3JlKSA9PiBzdG9yZS5zZXRTdGF0ZSh7IHZhdWx0Q291bnQ6IHN0b3JlLnN0YXRlLnZhdWx0Q291bnQgKyAxIH0pXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY2hhaW46IDk3LCAvLyA1NiAtIE1haW5uZXQgfCA5NyAtIFRlc3RuZXRcbiAgc2VjdXJpdHk6IGZhbHNlLFxuICBoYXNTZWN1cml0eTogZmFsc2UsXG4gIHZhdWx0OiBmYWxzZSxcbiAgaGFzVmF1bHQ6IGZhbHNlLFxuICBjZW50ZXI6IGZhbHNlLFxuICBoYXNDZW50ZXI6IGZhbHNlLFxuICBib251czogZmFsc2UsXG4gIGhhc0JvbnVzOiBmYWxzZSxcbiAgd2VsZmFyZTogZmFsc2UsXG4gIGhhc1dlbGZhcmU6IGZhbHNlLFxuICB2YXVsdENvdW50OiAwXG59XG5cbmV4cG9ydCBjb25zdCB1c2VHbG9iYWwgPSBnbG9iYWxIb29rKFJlYWN0LCBpbml0aWFsU3RhdGUsIGFjdGlvbnMpXG5cbmV4cG9ydCBkZWZhdWx0IHVzZUdsb2JhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useGlobal.js\n");

/***/ })

});