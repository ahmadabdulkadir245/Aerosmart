"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account/wishlist",{

/***/ "./components/SavedProducts.jsx":
/*!**************************************!*\
  !*** ./components/SavedProducts.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/tb */ \"./node_modules/react-icons/tb/index.esm.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ci */ \"./node_modules/react-icons/ci/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SavedProducts(param) {\n    let { id , key , category , title , description , price , image_url , user_id , setLoading  } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const addToCart = (e)=>{\n        e.preventDefault();\n        let graphqlQuery = {\n            query: \"\\n     mutation AddToCart($user_id: Int, $quantity: Int, $product_id: Int) {\\n       addToCart(cartInput: {user_id: $user_id, product_id: $product_id, quantity: $quantity}) {\\n         user_id\\n         product_id\\n         quantity\\n       }\\n     }\\n   \",\n            variables: {\n                user_id: Number(user_id),\n                product_id: Number(id),\n                quantity: 1\n            }\n        };\n        fetch(\"http://localhost:8080/graphql\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(graphqlQuery)\n        }).then((res)=>{\n            // console.log(res.json())\n            return res.json();\n        });\n    };\n    const deleteWishlist = async ()=>{\n        console.log(id);\n        try {\n            await axios.post(\"http://localhost:8080/graphql\", {\n                query: \"\\n          mutation DeleteWishlist($user_id: Int, $wishlist_id: Int) {\\n            deleteWishlist(user_id: $user_id, wishlist_id: $wishlist_id)\\n          }\\n        \",\n                variables: {\n                    user_id: Number(user_id),\n                    wishlist_id: Number(id)\n                }\n            });\n            // Update the defaultAddress state\n            setLoading(true);\n        } catch (error) {\n            console.error(\"Error setting default address:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-span-3 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-5 lg:px-8 rounded-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 gap-4 gap-x-6 font-poppins mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative col-span-2 lg:col-span-1 rounded-sm w-full h-[120px] mx-auto overflow-hidden cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image_url,\n                            alt: \"saved products\",\n                            layout: \"fill\",\n                            objectFit: \"cover\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 14\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"uppercase text-xs\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs capitalize text-gray-400 mt-1 hidden lg:block \",\n                                children: \"Brand : product brand\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs capitalize text-gray-400 mt-1 hidden lg:block\",\n                                children: [\n                                    \"category : \",\n                                    category\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex items-center space-x-1 mt-[3px] text-gray-800\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbCurrencyNaira, {\n                                        className: \"w-5 h-5 text-gray-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, this),\n                                    price.toLocaleString(),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"lg:hidden flex justify-between items-center space-x-3 mt-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"capitalize p-2 rounded-md w-1/2 bg-yellow-500 text-white cursor-pointer space-x-3 hover:bg-yellow-500 hover:border-white hover:text-white transition-all delay-100 ease-in\",\n                                        onClick: addToCart,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ci__WEBPACK_IMPORTED_MODULE_5__.CiShoppingCart, {\n                                            className: \"w-6 h-6 mx-auto\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"capitalize p-2 rounded-md w-1/2 bg-red-500 text-white cursor-pointer space-x-3 lg:hover:bg-yellow-500 hover:border-white hover:text-white transition-all delay-100 ease-in\",\n                                        onClick: deleteWishlist,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_6__.TiTimesOutline, {\n                                            className: \"w-6 h-6 mx-auto\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden lg:col-span-1 text-xs lg:block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mt-4 w-full bg-yellow-400 text-white p-3 rounded-md capitalize hover:bg-yellow-500 transition-all delay-100 tracking-wide \",\n                                onClick: addToCart,\n                                children: \"add to cart\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mt-2 w-full bg-red-500 text-white p-3 rounded-md capitalize hover:bg-red-400 transition-all delay-100 tracking-wide \",\n                                onClick: deleteWishlist,\n                                children: \"delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"bg-gray-300 w-full h-[1px] col-span-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n                lineNumber: 71,\n                columnNumber: 12\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n            lineNumber: 68,\n            columnNumber: 5\n        }, this)\n    }, key, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SavedProducts.jsx\",\n        lineNumber: 67,\n        columnNumber: 1\n    }, this);\n}\n_s(SavedProducts, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = SavedProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SavedProducts);\nvar _c;\n$RefreshReg$(_c, \"SavedProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NhdmVkUHJvZHVjdHMuanN4PzVmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2xlZ2FjeS9pbWFnZVwiXHJcbmltcG9ydCB7ICAgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBUYkN1cnJlbmN5TmFpcmEgfSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIlxyXG5pbXBvcnQgeyBBaU91dGxpbmVEZWxldGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIlxyXG5pbXBvcnQgeyBUaVRpbWVzLCBUaVRpbWVzT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiXHJcbmltcG9ydCB7IENpU2hvcHBpbmdDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2NpXCJcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuZnVuY3Rpb24gU2F2ZWRQcm9kdWN0cyh7IGlkLCBrZXksIGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWFnZV91cmwsIHVzZXJfaWQsIHNldExvYWRpbmcgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGxldCBncmFwaHFsUXVlcnkgPSB7XHJcbiAgICAgcXVlcnk6IGBcclxuICAgICBtdXRhdGlvbiBBZGRUb0NhcnQoJHVzZXJfaWQ6IEludCwgJHF1YW50aXR5OiBJbnQsICRwcm9kdWN0X2lkOiBJbnQpIHtcclxuICAgICAgIGFkZFRvQ2FydChjYXJ0SW5wdXQ6IHt1c2VyX2lkOiAkdXNlcl9pZCwgcHJvZHVjdF9pZDogJHByb2R1Y3RfaWQsIHF1YW50aXR5OiAkcXVhbnRpdHl9KSB7XHJcbiAgICAgICAgIHVzZXJfaWRcclxuICAgICAgICAgcHJvZHVjdF9pZFxyXG4gICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgYCxcclxuICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgIHVzZXJfaWQ6IE51bWJlcih1c2VyX2lkKSxcclxuICAgICAgIHByb2R1Y3RfaWQ6IE51bWJlcihpZCksXHJcbiAgICAgICBxdWFudGl0eTogMVxyXG4gICAgIH1cclxuICAgfTtcclxuXHJcblxyXG4gICBmZXRjaChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUkFQSFFMX1VSTCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShncmFwaHFsUXVlcnkpXHJcbiAgfSlcclxuICAgIC50aGVuKHJlcyA9PiB7ICBcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzLmpzb24oKSlcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIFxyXG4gIH1cclxuICBjb25zdCBkZWxldGVXaXNobGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUkFQSFFMX1VSTCwge1xyXG4gICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICBtdXRhdGlvbiBEZWxldGVXaXNobGlzdCgkdXNlcl9pZDogSW50LCAkd2lzaGxpc3RfaWQ6IEludCkge1xyXG4gICAgICAgICAgICBkZWxldGVXaXNobGlzdCh1c2VyX2lkOiAkdXNlcl9pZCwgd2lzaGxpc3RfaWQ6ICR3aXNobGlzdF9pZClcclxuICAgICAgICAgIH1cclxuICAgICAgICBgLFxyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgdXNlcl9pZDogTnVtYmVyKHVzZXJfaWQpLFxyXG4gICAgICAgICAgd2lzaGxpc3RfaWQ6IE51bWJlcihpZCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgdGhlIGRlZmF1bHRBZGRyZXNzIHN0YXRlXHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2V0dGluZyBkZWZhdWx0IGFkZHJlc3M6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbjxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIGJnLXdoaXRlJyBrZXk9e2tleX0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTUgbGc6cHgtOCByb3VuZGVkLW1kXCI+XHJcblxyXG5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTQgZ2FwLXgtNiBmb250LXBvcHBpbnMgbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY29sLXNwYW4tMiBsZzpjb2wtc3Bhbi0xICAgcm91bmRlZC1zbSB3LWZ1bGwgaC1bMTIwcHhdIG14LWF1dG8gb3ZlcmZsb3ctaGlkZGVuIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZV91cmx9IGFsdD17J3NhdmVkIHByb2R1Y3RzJ30gIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14c1wiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGNhcGl0YWxpemUgdGV4dC1ncmF5LTQwMCBtdC0xIGhpZGRlbiBsZzpibG9jayBcIj5CcmFuZCA6IHByb2R1Y3QgYnJhbmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgY2FwaXRhbGl6ZSB0ZXh0LWdyYXktNDAwIG10LTEgaGlkZGVuIGxnOmJsb2NrXCI+Y2F0ZWdvcnkgOiB7Y2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nICBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEgIG10LVszcHhdIHRleHQtZ3JheS04MDAnPlxyXG4gICAgICAgICAgICA8VGJDdXJyZW5jeU5haXJhICBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS02MDBcIi8+e3ByaWNlLnRvTG9jYWxlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmhpZGRlbiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIG10LTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSBwLTIgcm91bmRlZC1tZCB3LTEvMiAgIGJnLXllbGxvdy01MDAgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciBzcGFjZS14LTMgaG92ZXI6YmcteWVsbG93LTUwMCBob3Zlcjpib3JkZXItd2hpdGUgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBkZWxheS0xMDAgZWFzZS1pblwiICAgb25DbGljaz17YWRkVG9DYXJ0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENpU2hvcHBpbmdDYXJ0IGNsYXNzTmFtZT1cInctNiBoLTYgbXgtYXV0b1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHAtMiByb3VuZGVkLW1kIHctMS8yICAgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIHNwYWNlLXgtMyBsZzpob3ZlcjpiZy15ZWxsb3ctNTAwIGhvdmVyOmJvcmRlci13aGl0ZSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGRlbGF5LTEwMCBlYXNlLWluXCIgXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVXaXNobGlzdH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGlUaW1lc091dGxpbmUgY2xhc3NOYW1lPVwidy02IGgtNiBteC1hdXRvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmNvbC1zcGFuLTEgdGV4dC14cyAgbGc6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgYmcteWVsbG93LTQwMCB0ZXh0LXdoaXRlICBwLTMgcm91bmRlZC1tZCBjYXBpdGFsaXplIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbi1hbGwgZGVsYXktMTAwIHRyYWNraW5nLXdpZGUgXCJcclxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRUb0NhcnR9PlxyXG4gICAgICAgICAgICAgICAgYWRkIHRvIGNhcnRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTIgdy1mdWxsIGJnLXJlZC01MDAgdGV4dC13aGl0ZSAgcC0zIHJvdW5kZWQtbWQgY2FwaXRhbGl6ZSBob3ZlcjpiZy1yZWQtNDAwIHRyYW5zaXRpb24tYWxsIGRlbGF5LTEwMCB0cmFja2luZy13aWRlIFwiXHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlV2lzaGxpc3R9PlxyXG4gICAgICAgICAgICAgICAgZGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgdy1mdWxsIGgtWzFweF0gY29sLXNwYW4tNFwiIC8+XHJcblxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYXZlZFByb2R1Y3RzIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJUYkN1cnJlbmN5TmFpcmEiLCJBaU91dGxpbmVEZWxldGUiLCJUaVRpbWVzIiwiVGlUaW1lc091dGxpbmUiLCJDaVNob3BwaW5nQ2FydCIsInVzZURpc3BhdGNoIiwiU2F2ZWRQcm9kdWN0cyIsImlkIiwia2V5IiwiY2F0ZWdvcnkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpbWFnZV91cmwiLCJ1c2VyX2lkIiwic2V0TG9hZGluZyIsImRpc3BhdGNoIiwiYWRkVG9DYXJ0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ3JhcGhxbFF1ZXJ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJOdW1iZXIiLCJwcm9kdWN0X2lkIiwicXVhbnRpdHkiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HUkFQSFFMX1VSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGVsZXRlV2lzaGxpc3QiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0Iiwid2lzaGxpc3RfaWQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsImgyIiwicCIsInRvTG9jYWxlU3RyaW5nIiwib25DbGljayIsImJ1dHRvbiIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SavedProducts.jsx\n"));

/***/ })

});