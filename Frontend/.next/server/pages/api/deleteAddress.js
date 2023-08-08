"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/deleteAddress";
exports.ids = ["pages/api/deleteAddress"];
exports.modules = {

/***/ "axios?daaa":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/deleteAddress.js":
/*!************************************!*\
  !*** ./pages/api/deleteAddress.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios?daaa\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { user_id , address_id  } = req.body;\n            const graphqlQuery = {\n                query: `\r\n          mutation DeleteAddress($user_id: Int, $address_id: Int) {\r\n              deleteAddress(user_id: $user_id, address_id: $address_id)\r\n          }\r\n        `,\n                variables: {\n                    user_id: Number(user_id),\n                    address_id: address_id\n                }\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"http://localhost:8080/graphql\", graphqlQuery);\n            const result = response.data.data.deleteAddress;\n            if (result) {\n                res.status(200).json({\n                    success: true\n                });\n            } else {\n                res.status(500).json({\n                    error: \"Failed to remove item from cart\"\n                });\n            }\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"An error occurred\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsZXRlQWRkcmVzcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUVYLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFNLEVBQUVDLFFBQU8sRUFBRUMsV0FBVSxFQUFFLEdBQUdKLElBQUlLLElBQUk7WUFDeEMsTUFBTUMsZUFBZTtnQkFDbkJDLE9BQU8sQ0FBQzs7OztRQUlSLENBQUM7Z0JBQ0RDLFdBQVc7b0JBQ1RMLFNBQVNNLE9BQU9OO29CQUNoQkMsWUFBWUE7Z0JBQ2Q7WUFDRjtZQUVBLE1BQU1NLFdBQVcsTUFBTVosa0RBQVUsQ0FBQ2MsK0JBQW1DLEVBQUVOO1lBQ3ZFLE1BQU1TLFNBQVNMLFNBQVNNLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxhQUFhO1lBRS9DLElBQUlGLFFBQVE7Z0JBQ1ZkLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTLElBQUk7Z0JBQUM7WUFDdkMsT0FBTztnQkFDTG5CLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRSxPQUFPO2dCQUFrQztZQUNsRSxDQUFDO1FBQ0gsRUFBRSxPQUFPQSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDZHBCLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRSxPQUFPO1lBQW9CO1FBQ3BEO0lBQ0YsT0FBTztRQUNMcEIsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUFxQjtJQUNyRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0Flcm9zbWFydC8uL3BhZ2VzL2FwaS9kZWxldGVBZGRyZXNzLmpzPzZhYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHVzZXJfaWQsIGFkZHJlc3NfaWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgICBjb25zdCBncmFwaHFsUXVlcnkgPSB7XHJcbiAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgIG11dGF0aW9uIERlbGV0ZUFkZHJlc3MoJHVzZXJfaWQ6IEludCwgJGFkZHJlc3NfaWQ6IEludCkge1xyXG4gICAgICAgICAgICAgIGRlbGV0ZUFkZHJlc3ModXNlcl9pZDogJHVzZXJfaWQsIGFkZHJlc3NfaWQ6ICRhZGRyZXNzX2lkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICB1c2VyX2lkOiBOdW1iZXIodXNlcl9pZCksXHJcbiAgICAgICAgICBhZGRyZXNzX2lkOiBhZGRyZXNzX2lkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JBUEhRTF9VUkwsIGdyYXBocWxRdWVyeSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmRhdGEuZGF0YS5kZWxldGVBZGRyZXNzO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHJlbW92ZSBpdGVtIGZyb20gY2FydCcgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnQW4gZXJyb3Igb2NjdXJyZWQnIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJfaWQiLCJhZGRyZXNzX2lkIiwiYm9keSIsImdyYXBocWxRdWVyeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiTnVtYmVyIiwicmVzcG9uc2UiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dSQVBIUUxfVVJMIiwicmVzdWx0IiwiZGF0YSIsImRlbGV0ZUFkZHJlc3MiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/deleteAddress.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/deleteAddress.js"));
module.exports = __webpack_exports__;

})();