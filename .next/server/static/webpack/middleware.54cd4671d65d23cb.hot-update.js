"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n\n// This example protects all routes including api/trpc routes\n// Please edit this to allow other routes to be public as needed.\n// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__.authMiddleware)({\n    publicRoutes: [\n        \"/api/webhook/clerk\"\n    ],\n    ignoredRoutes: [\n        \"/api/webhook/clerk\"\n    ],\n    debug: true\n}));\nconst config = {\n    matcher: [\n        \"/((?!.*\\\\..*|_next).*)\",\n        \"/\",\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsNkRBQTZEO0FBQzdELGlFQUFpRTtBQUNqRSxzR0FBc0c7QUFDdEcsaUVBQWVBLDZEQUFjQSxDQUFDO0lBQzVCQyxjQUFjO1FBQUM7S0FBcUI7SUFDcENDLGVBQWU7UUFBQztLQUFxQjtJQUNyQ0MsT0FBTztBQUNULEVBQUUsRUFBQztBQUVJLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUEwQjtRQUFLO0tBQWtCO0FBQzdELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhNaWRkbGV3YXJlIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcblxuLy8gVGhpcyBleGFtcGxlIHByb3RlY3RzIGFsbCByb3V0ZXMgaW5jbHVkaW5nIGFwaS90cnBjIHJvdXRlc1xuLy8gUGxlYXNlIGVkaXQgdGhpcyB0byBhbGxvdyBvdGhlciByb3V0ZXMgdG8gYmUgcHVibGljIGFzIG5lZWRlZC5cbi8vIFNlZSBodHRwczovL2NsZXJrLmNvbS9kb2NzL25leHRqcy9taWRkbGV3YXJlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGNvbmZpZ3VyaW5nIHlvdXIgbWlkZGxld2FyZVxuZXhwb3J0IGRlZmF1bHQgYXV0aE1pZGRsZXdhcmUoe1xuICBwdWJsaWNSb3V0ZXM6IFtcIi9hcGkvd2ViaG9vay9jbGVya1wiXSxcbiAgaWdub3JlZFJvdXRlczogW1wiL2FwaS93ZWJob29rL2NsZXJrXCJdLFxuICBkZWJ1ZzogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbXCIvKCg/IS4qXFxcXC4uKnxfbmV4dCkuKilcIiwgXCIvXCIsIFwiLyhhcGl8dHJwYykoLiopXCJdLFxufTtcbiJdLCJuYW1lcyI6WyJhdXRoTWlkZGxld2FyZSIsInB1YmxpY1JvdXRlcyIsImlnbm9yZWRSb3V0ZXMiLCJkZWJ1ZyIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});