"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/SearchSuggesstions.jsx":
/*!*******************************************!*\
  !*** ./components/SearchSuggesstions.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slices_productSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slices/productSlice */ \"./slices/productSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SearchSuggesstions(param) {\n    let { searchWord , setSearchWord , pressToSearchHandler  } = param;\n    _s();\n    // const [products, setProducts] = useState([])\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const recievedProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_slices_productSlice__WEBPACK_IMPORTED_MODULE_2__.productsRetrieved);\n    const products = recievedProducts;\n    let filteredCategories = [];\n    let filteredProducts = [];\n    if (searchWord !== undefined) {\n        filteredCategories = products.filter((product)=>product.category.includes(searchWord)).map((product)=>product.category).filter((category, index, self)=>self.indexOf(category) === index).slice(0, 5);\n    }\n    if (searchWord !== undefined) {\n        filteredProducts = products.filter((product)=>product.title.includes(searchWord)).map((product)=>({\n                id: product.id,\n                title: product.title,\n                image_url: product.image_url\n            })).filter((product, index, self)=>self.findIndex((p)=>p.title === product.title) === index).slice(0, 10);\n    }\n    const clearSearchWordCategoryHandler = (id)=>{\n        setSearchWord(\"\");\n        router.push(\"/search/\".concat(id));\n    };\n    const clearSearchWordHandler = (id)=>{\n        setSearchWord(\"\");\n        router.push(\"/search/\".concat(id));\n    };\n    // .map((product) => product.category);\n    //   useEffect(() => {\n    //     if(searchWord.length > 2) {\n    //         let graphqlQuery  = {\n    //           query: `\n    //           {\n    //             searchList(word: \"${searchWord}\") {\n    //              searchList {\n    //               id\n    //               title\n    //             }\n    //             }\n    //           }\n    //           `\n    //          }\n    //          fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {\n    //           method: 'POST',\n    //           headers: {\n    //             'Content-Type': 'application/json'\n    //           },\n    //           body: JSON.stringify(graphqlQuery)\n    //         })\n    //           .then(res => {  \n    //             return res.json();\n    //           })\n    //           .then(productData => {\n    //             const recievedData = productData.data?.searchList?.searchList || []\n    //             recievedData.reverse()\n    //             setProducts(recievedData)\n    //           })\n    //       }\n    //     }, [searchWord])\n    const conditions = filteredCategories !== [] && filteredProducts !== [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(searchWord.length > 2 ? \"\" : \"hidden\", \" relative bg-gray-50 text-gray-700  w-full max-w-5xl  text-xs font-poppins mx-auto h-[30vh] lg:h-[50vh] rounded-b-lg shadow-lg overflow-y-scroll mb-3  scrollbar-hide transition-all duration-500 ease-in\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-gray-300 p-2 uppercase rounded-md\",\n                children: \"product categories\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this),\n            filteredCategories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-2 px-3 capitalize cursor-pointer\",\n                    onClick: clearSearchWordCategoryHandler.bind(this, category),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/search/\".concat(category),\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 15\n                    }, this)\n                }, category, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-gray-300 p-2 uppercase rounded-sm\",\n                children: \"products\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                lineNumber: 94,\n                columnNumber: 11\n            }, this),\n            filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"capitalize cursor-pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/products/\".concat(product.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center p-2 space-x-3 hover:text-yellow-500 hover:opacity-75\",\n                            onClick: clearSearchWordHandler,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" relative h-[50px] w-[50px]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: product.image_url,\n                                        alt: product.title,\n                                        layout: \"fill\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \" \",\n                                    children: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 15\n                    }, this)\n                }, product.id, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 13\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Builds\\\\Aerosmart\\\\Frontend\\\\components\\\\SearchSuggesstions.jsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchSuggesstions, \"CZ24RmjKS46xwfVOsIvwXSUwdNI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = SearchSuggesstions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchSuggesstions);\nvar _c;\n$RefreshReg$(_c, \"SearchSuggesstions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7O21CQUZPQTs7Ozs7MEJBT1osOERBQUNnQjtnQkFBSUMsV0FBVTswQkFBOEM7Ozs7OztZQUc1RHJCLGlCQUFpQk0sR0FBRyxDQUFDLENBQUNILHdCQUNyQiw4REFBQ2lCO29CQUFxQkMsV0FBVTs4QkFFOUIsNEVBQUMvQixrREFBSUE7d0JBQUNtQyxNQUFNLGFBQXdCLE9BQVh0QixRQUFRUyxFQUFFO2tDQUNqQyw0RUFBQ1E7NEJBQUlDLFdBQVU7NEJBQXlFRSxTQUFTTDs7OENBQy9GLDhEQUFDRTtvQ0FBSUMsV0FBVTs4Q0FDbkIsNEVBQUNoQywwREFBS0E7d0NBQUNxQyxLQUFLdkIsUUFBUVUsU0FBUzt3Q0FBRWMsS0FBS3hCLFFBQVFRLEtBQUs7d0NBQUVpQixRQUFPOzs7Ozs7Ozs7Ozs4Q0FFMUQsOERBQUNiO29DQUFFTSxXQUFVOzhDQUFLbEIsUUFBUVEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBUHZCUixRQUFRUyxFQUFFOzs7Ozs7Ozs7OztBQWVoQztHQXhHU3BCOztRQUVRRCxrREFBU0E7UUFDQ0gsb0RBQVdBOzs7S0FIN0JJO0FBMEdULCtEQUFlQSxrQkFBa0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hTdWdnZXNzdGlvbnMuanN4PzZkMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJvZHVjdHNSZXRyaWV2ZWQgfSBmcm9tIFwiLi4vc2xpY2VzL3Byb2R1Y3RTbGljZVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9sZWdhY3kvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBTZWFyY2hTdWdnZXNzdGlvbnMoe3NlYXJjaFdvcmQsIHNldFNlYXJjaFdvcmQscHJlc3NUb1NlYXJjaEhhbmRsZXJ9KSB7XG4gIC8vIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHJlY2lldmVkUHJvZHVjdHMgPSB1c2VTZWxlY3Rvcihwcm9kdWN0c1JldHJpZXZlZClcbmNvbnN0IHByb2R1Y3RzID0gcmVjaWV2ZWRQcm9kdWN0c1xuIFxuICBsZXQgZmlsdGVyZWRDYXRlZ29yaWVzID0gW11cbiAgbGV0IGZpbHRlcmVkUHJvZHVjdHMgPSBbXVxuaWYgKHNlYXJjaFdvcmQgIT09IHVuZGVmaW5lZCkge1xuICBmaWx0ZXJlZENhdGVnb3JpZXMgPSBwcm9kdWN0c1xuICAuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3J5LmluY2x1ZGVzKHNlYXJjaFdvcmQpKVxuICAubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3J5KVxuICAuZmlsdGVyKChjYXRlZ29yeSwgaW5kZXgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZihjYXRlZ29yeSkgPT09IGluZGV4KS5zbGljZSgwLCA1KTtcbn1cblxuICBpZiAoc2VhcmNoV29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzXG4gICAgICAuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LnRpdGxlLmluY2x1ZGVzKHNlYXJjaFdvcmQpKVxuICAgICAgLm1hcCgocHJvZHVjdCkgPT4gKHtcbiAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgIHRpdGxlOiBwcm9kdWN0LnRpdGxlLFxuICAgICAgICBpbWFnZV91cmw6IHByb2R1Y3QuaW1hZ2VfdXJsLFxuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKChwcm9kdWN0LCBpbmRleCwgc2VsZikgPT4gc2VsZi5maW5kSW5kZXgoKHApID0+IHAudGl0bGUgPT09IHByb2R1Y3QudGl0bGUpID09PSBpbmRleCkuc2xpY2UoMCwgMTApO1xuICB9XG5cblxuY29uc3QgY2xlYXJTZWFyY2hXb3JkQ2F0ZWdvcnlIYW5kbGVyID0oaWQpID0+IHtcbiAgc2V0U2VhcmNoV29yZChcIlwiKSBcbiAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtpZH1gKVxufVxuY29uc3QgY2xlYXJTZWFyY2hXb3JkSGFuZGxlciA9KGlkKSA9PiB7XG4gIHNldFNlYXJjaFdvcmQoXCJcIikgXG4gIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7aWR9YClcbn1cblxuICBcbiAgICAvLyAubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3J5KTtcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgaWYoc2VhcmNoV29yZC5sZW5ndGggPiAyKSB7XG5cbiAgLy8gICAgICAgICBsZXQgZ3JhcGhxbFF1ZXJ5ICA9IHtcbiAgLy8gICAgICAgICAgIHF1ZXJ5OiBgXG4gIC8vICAgICAgICAgICB7XG4gIC8vICAgICAgICAgICAgIHNlYXJjaExpc3Qod29yZDogXCIke3NlYXJjaFdvcmR9XCIpIHtcbiAgLy8gICAgICAgICAgICAgIHNlYXJjaExpc3Qge1xuICAvLyAgICAgICAgICAgICAgIGlkXG4gIC8vICAgICAgICAgICAgICAgdGl0bGVcbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICBgXG4gIC8vICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JBUEhRTF9VUkwsIHtcbiAgLy8gICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAvLyAgICAgICAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIC8vICAgICAgICAgICB9LFxuICAvLyAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ3JhcGhxbFF1ZXJ5KVxuICAvLyAgICAgICAgIH0pXG4gIC8vICAgICAgICAgICAudGhlbihyZXMgPT4geyAgXG4gIC8vICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAvLyAgICAgICAgICAgfSlcbiAgLy8gICAgICAgICAgIC50aGVuKHByb2R1Y3REYXRhID0+IHtcbiAgLy8gICAgICAgICAgICAgY29uc3QgcmVjaWV2ZWREYXRhID0gcHJvZHVjdERhdGEuZGF0YT8uc2VhcmNoTGlzdD8uc2VhcmNoTGlzdCB8fCBbXVxuICAvLyAgICAgICAgICAgICByZWNpZXZlZERhdGEucmV2ZXJzZSgpXG4gIC8vICAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlY2lldmVkRGF0YSlcbiAgLy8gICAgICAgICAgIH0pXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0sIFtzZWFyY2hXb3JkXSlcbiAgY29uc3QgY29uZGl0aW9ucyA9ICBmaWx0ZXJlZENhdGVnb3JpZXMgIT09IFtdICYmIGZpbHRlcmVkUHJvZHVjdHMgIT09IFtdXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3NlYXJjaFdvcmQubGVuZ3RoID4gMiA/ICcnIDogJ2hpZGRlbid9IHJlbGF0aXZlIGJnLWdyYXktNTAgdGV4dC1ncmF5LTcwMCAgdy1mdWxsIG1heC13LTV4bCAgdGV4dC14cyBmb250LXBvcHBpbnMgbXgtYXV0byBoLVszMHZoXSBsZzpoLVs1MHZoXSByb3VuZGVkLWItbGcgc2hhZG93LWxnIG92ZXJmbG93LXktc2Nyb2xsIG1iLTMgIHNjcm9sbGJhci1oaWRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBlYXNlLWluYH0+XG4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMzAwIHAtMiB1cHBlcmNhc2Ugcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgcHJvZHVjdCBjYXRlZ29yaWVzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2ZpbHRlcmVkQ2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnl9IGNsYXNzTmFtZT1cInB5LTIgIHB4LTMgY2FwaXRhbGl6ZSBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e2NsZWFyU2VhcmNoV29yZENhdGVnb3J5SGFuZGxlci5iaW5kKHRoaXMsIGNhdGVnb3J5KX0gPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3NlYXJjaC8ke2NhdGVnb3J5fWB9PlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMzAwIHAtMiB1cHBlcmNhc2Ugcm91bmRlZC1zbVwiPlxuICAgICAgICAgICAgcHJvZHVjdHNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ZmlsdGVyZWRQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJjYXBpdGFsaXplIGN1cnNvci1wb2ludGVyXCIgID5cbiAgICBcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHAtMiBzcGFjZS14LTMgaG92ZXI6dGV4dC15ZWxsb3ctNTAwIGhvdmVyOm9wYWNpdHktNzUnIG9uQ2xpY2s9e2NsZWFyU2VhcmNoV29yZEhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcmVsYXRpdmUgaC1bNTBweF0gdy1bNTBweF1cIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZHVjdC5pbWFnZV91cmx9IGFsdD17cHJvZHVjdC50aXRsZX0gbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIFwiPntwcm9kdWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFN1Z2dlc3N0aW9ucyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RzUmV0cmlldmVkIiwidXNlU2VsZWN0b3IiLCJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJTZWFyY2hTdWdnZXNzdGlvbnMiLCJzZWFyY2hXb3JkIiwic2V0U2VhcmNoV29yZCIsInByZXNzVG9TZWFyY2hIYW5kbGVyIiwicm91dGVyIiwicmVjaWV2ZWRQcm9kdWN0cyIsInByb2R1Y3RzIiwiZmlsdGVyZWRDYXRlZ29yaWVzIiwiZmlsdGVyZWRQcm9kdWN0cyIsInVuZGVmaW5lZCIsImZpbHRlciIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImluY2x1ZGVzIiwibWFwIiwiaW5kZXgiLCJzZWxmIiwiaW5kZXhPZiIsInNsaWNlIiwidGl0bGUiLCJpZCIsImltYWdlX3VybCIsImZpbmRJbmRleCIsInAiLCJjbGVhclNlYXJjaFdvcmRDYXRlZ29yeUhhbmRsZXIiLCJwdXNoIiwiY2xlYXJTZWFyY2hXb3JkSGFuZGxlciIsImNvbmRpdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJvbkNsaWNrIiwiYmluZCIsImhyZWYiLCJzcmMiLCJhbHQiLCJsYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SearchSuggesstions.jsx\n"));

/***/ })

});